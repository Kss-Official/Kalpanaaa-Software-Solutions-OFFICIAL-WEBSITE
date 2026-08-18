import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { User, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  limit
} from 'firebase/firestore';
import { auth, db, testConnection, handleFirestoreError, OperationType, firebaseConfig } from '../lib/firebase';
import { Employee, AttendanceRecord, AuditLog, CompanySettings, UserRole, AttendanceStatus, WorkZone, LeaveRequest, AttendanceMethod } from '../types';
import {
  INITIAL_EMPLOYEES,
  generateInitialAttendance,
  INITIAL_AUDIT_LOGS,
  INITIAL_COMPANY_SETTINGS
} from '../lib/demoData';
import { initializeApp } from 'firebase/app';
import { evaluateAttendanceScan, calculateGpsDistanceMeters, computeShiftWorkingMinutes, getShiftEndForDate, SHIFT_END_HOUR, getLocalDateString, isRecordForEmployee } from '../lib/attendanceEngine';
import { fetchAbsoluteTime } from '../lib/absoluteTime';
import { sendKssNotification, sendAdminBroadcast, registerFcmToken, setupFcmForegroundListener, KssNotification } from '../lib/notifications';

const generateDeviceFingerprint = () => {
  return btoa(`${navigator.userAgent}|${screen.width}x${screen.height}|${navigator.language}|${new Date().getTimezoneOffset()}`);
};

const getDeviceCategory = (): 'desktop' | 'mobile' => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || '';
  if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

// Best-effort client IP capture — resolved once, cached for the session + device
let cachedIp: string | null = null;
const resolveClientIp = (): string | null => {
  try {
    if (cachedIp) return cachedIp;
    const existing = localStorage.getItem('kss_v1_client_ip');
    if (existing) {
      cachedIp = existing;
      return cachedIp;
    }
    fetch('https://api.ipify.org?format=json', { mode: 'cors' })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && typeof data.ip === 'string' && data.ip.length <= 45) {
          cachedIp = data.ip;
          localStorage.setItem('kss_v1_client_ip', data.ip);
        }
      })
      .catch(() => { /* best-effort only — never block an action on IP lookup */ });
  } catch { /* ignore */ }
  return cachedIp;
};

const deriveAuditCategory = (action: string): AuditLog['category'] => {
  const a = action.toUpperCase();
  if (a.startsWith('ATTENDANCE') || a === 'AUTO_CHECKOUT') return 'attendance';
  if (a.startsWith('LEAVE')) return 'leave';
  if (a === 'SELF_PROFILE_UPDATE' || a === 'EMPLOYEE_PROFILE_UPDATE' || a.startsWith('EMPLOYEE')) return 'profile';
  if (a.startsWith('SECURITY') || a === 'USER_LOGIN' || a === 'USER_LOGOUT') return 'security';
  if (a.startsWith('PAYROLL') || a.startsWith('SALARY')) return 'payroll';
  if (a.startsWith('RULE') || a.startsWith('COMPANY_RULE')) return 'rules';
  if (a.startsWith('SETTINGS') || a.startsWith('ADMIN') || a === 'QR_REGENERATED' || a === 'COMPANY_WORKZONE_UPDATED' || a === 'ADMIN_BROADCAST') return 'admin';
  return 'system';
};

const sanitizeInput = <T extends any>(data: T): T => {
  if (typeof data === 'string') {
    // Skip sanitization for base64 images to prevent regex corruption of large strings
    if (data.startsWith('data:image/')) return data as any;

    // Strip script tags and common XSS vectors
    return data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/on\w+='[^']*'/gi, '')
      .replace(/on\w+=\w+/gi, '') as any;
  }
  if (Array.isArray(data)) {
    return data.map(item => sanitizeInput(item)) as any;
  }
  if (typeof data === 'object' && data !== null) {
    const sanitizedObj: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        sanitizedObj[key] = sanitizeInput((data as any)[key]);
      }
    }
    return sanitizedObj;
  }
  return data;
};

// Helper for allocating specific employee IDs to founders and starting others from 004
export const getAssignedEmployeeDetails = (fullName: string, employees: Employee[]) => {
  const name = (fullName || '').toLowerCase().trim();
  
  if (name.includes('gaurav')) {
    return {
      employeeId: 'KSS2407001',
      role: 'SUPER_ADMIN' as UserRole,
      designation: 'CTO And Founder And MD'
    };
  }
  if (name.includes('akshit')) {
    return {
      employeeId: 'KSS2407002',
      role: 'SUPER_ADMIN' as UserRole,
      designation: 'CEO'
    };
  }
  if (name.includes('koushik')) {
    return {
      employeeId: 'KSS2407003',
      role: 'PROJECT_MANAGER' as UserRole,
      designation: 'Project Manager'
    };
  }

  // General employees start from KSS2407004
  let maxSeq = 3; 
  employees.forEach(emp => {
    if (emp.employeeId?.startsWith('KSS2407') || emp.employeeId?.startsWith('KSS2707')) {
      const numStr = emp.employeeId.replace('KSS2407', '').replace('KSS2707', '');
      const num = parseInt(numStr, 10);
      if (!isNaN(num) && num > maxSeq) {
        maxSeq = num;
      }
    }
  });

  const nextSeq = String(maxSeq + 1).padStart(3, '0');
  return {
    employeeId: `KSS2407${nextSeq}`,
    role: null,
    designation: null
  };
};

interface AuthContextType {
  user: User | null;
  activeEmployee: Employee | null;
  role: UserRole;
  isAuthenticated: boolean;
  isLoading: boolean;
  isDemoMode: boolean;
  isFirestoreConnected: boolean;
  isSessionReady: boolean;
  employees: Employee[];
  attendance: AttendanceRecord[];
  auditLogs: AuditLog[];
  myAuditLogs: AuditLog[];
  settings: CompanySettings;
  companyWorkZone: WorkZone;
  leaveRequests: LeaveRequest[];
  notifications: KssNotification[];
  unreadNotificationCount: number;

  // Actions
  submitLeaveRequest: (data: Omit<LeaveRequest, 'id' | 'status' | 'requestDate'>) => void;
  updateLeaveRequestStatus: (id: string, status: 'Approved' | 'Rejected', reviewedBy: string, reviewNotes?: string) => void;
  cancelLeaveRequest: (id: string) => void;
  loginWithEmail: (email: string, pass: string) => Promise<{ success: boolean; message: string }>;
  quickDemoLogin: (role: UserRole | 'CEO' | 'CTO') => void;
  logout: () => void;
  addEmployee: (emp: Omit<Employee, 'id' | 'createdAt' | 'updatedAt' | 'qrToken'> & { password?: string }) => Promise<{ success: boolean; message?: string } | Employee>;
  updateEmployee: (id: string, updates: Partial<Employee>) => void;
  deleteEmployee: (id: string) => void;
  recordCheckIn: (employeeId: string, lat?: number, lon?: number, accuracy?: number, method?: AttendanceMethod) => Promise<{ success: boolean; message: string; record?: AttendanceRecord }>;
  recordCheckOut: (employeeId: string, lat?: number, lon?: number, accuracy?: number) => Promise<{ success: boolean; message: string; record?: AttendanceRecord }>;
  updateAttendanceRecord: (recordId: string, updates: Partial<AttendanceRecord>) => void;
  updateSettings: (newSettings: Partial<CompanySettings>) => void;
  saveCompanyWorkZone: (zone: Partial<WorkZone>) => Promise<void>;
  addAuditLog: (action: string, target: string, details: string) => void;
  resetToDemoData: () => void;
  regenerateQrToken: (employeeId: string) => string;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; message: string }>;
  setEmployeeInitialPassword: (email: string, pass: string) => Promise<{ success: boolean; message: string }>;
  sendBroadcast: (title: string, message: string) => Promise<void>;
  markAllNotificationsRead: () => void;
  updateCurrentEmployeePassword: (newPassword: string) => Promise<{ success: boolean; message: string }>;
  requestMobilePushPermission: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>('SUPER_ADMIN');
  const [activeEmployee, setActiveEmployee] = useState<Employee | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('kss_v1_session') !== null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [isFirestoreConnected, setIsFirestoreConnected] = useState(false);
  // isSessionReady becomes true once the one-time session restore has finished
  const [isSessionReady, setIsSessionReady] = useState(false);

  // employeesRef always mirrors the current employees state for use in one-time effects
  const employeesRef = useRef<Employee[]>([]);

  // Core state collections
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const saved = localStorage.getItem('kss_v1_employees');
    if (saved) {
      const parsed = JSON.parse(saved) as Employee[];
      // Autocorrect CEO data & purge dummy koushik from cache
      return parsed
        .filter(emp => emp.id !== 'emp-003' && emp.employeeId !== '003' && emp.employeeId !== 'KSS2407003' && !emp.email?.toLowerCase().includes('koushik'))
        .map(emp => {
          if (emp.employeeId === 'CEO001') {
            return {
              ...emp,
              fullName: 'Akshit',
              email: 'akshit@kalpanaaa.in',
              department: 'Executive Management'
            };
          }
          if (emp.employeeId && (emp.employeeId.startsWith('KS2407') || emp.employeeId.startsWith('KS2707'))) {
            return {
              ...emp,
              employeeId: emp.employeeId.replace('KS2707', 'KSS2407').replace('KS2407', 'KSS2407')
            };
          }
          return emp;
        });
    }
    return INITIAL_EMPLOYEES;
  });

  const [attendance, setAttendance] = useState<AttendanceRecord[]>(() => {
    const saved = localStorage.getItem('kss_v1_attendance');
    if (saved) {
      const parsed = JSON.parse(saved) as AttendanceRecord[];
      return parsed;
    }
    return [];
  });

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {
    const saved = localStorage.getItem('kss_v1_audit_logs');
    return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
  });

  // Personal, permanent activity feed — every authenticated employee sees their own trail
  const [myAuditLogs, setMyAuditLogs] = useState<AuditLog[]>([]);

  const [settings, setSettings] = useState<CompanySettings>(() => {
    const saved = localStorage.getItem('kss_v1_settings');
    return saved ? JSON.parse(saved) : INITIAL_COMPANY_SETTINGS;
  });

  const [companyWorkZone, setCompanyWorkZone] = useState<WorkZone>(() => {
    const saved = localStorage.getItem('kss_v1_work_zone');
    if (saved) return JSON.parse(saved);
    return {
      name: 'Kalpanaaa Software Solutions — Main Office',
      latitude: INITIAL_COMPANY_SETTINGS.officeLatitude || 13.014316,
      longitude: INITIAL_COMPANY_SETTINGS.officeLongitude || 77.64052,
      radiusMeters: INITIAL_COMPANY_SETTINGS.allowedRadiusMeters || 100,
      active: true,
      updatedBy: 'System Init',
      updatedAt: new Date().toISOString()
    };
  });

  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(() => {
    const saved = localStorage.getItem('kss_v1_leave_requests');
    return saved ? JSON.parse(saved) : [];
  });

  // Notifications state — real-time feed from Firestore
  const [notifications, setNotifications] = useState<KssNotification[]>([]);
  const [readNotificationIds, setReadNotificationIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('kss_v1_read_notifs');
    return new Set(saved ? JSON.parse(saved) : []);
  });

  // Always keep the ref in sync with state
  useEffect(() => {
    employeesRef.current = employees;
  }, [employees]);

  // Debounced localStorage persistence — batches all state saves into one write per 500ms
  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem('kss_v1_employees', JSON.stringify(employees));
      localStorage.setItem('kss_v1_attendance', JSON.stringify(attendance));
      localStorage.setItem('kss_v1_audit_logs', JSON.stringify(auditLogs));
      localStorage.setItem('kss_v1_settings', JSON.stringify(settings));
      localStorage.setItem('kss_v1_work_zone', JSON.stringify(companyWorkZone));
      localStorage.setItem('kss_v1_leave_requests', JSON.stringify(leaveRequests));
    }, 500);
    return () => clearTimeout(handler);
  }, [employees, attendance, auditLogs, settings, companyWorkZone, leaveRequests]);

  // Real-time Firestore listener for KSS notifications
  useEffect(() => {
    if (!isFirestoreConnected) return;

    const q = (collection as any)(db, 'notifications');
    let unsubscribe: () => void = () => {};
    
    import('firebase/firestore').then(({ query, orderBy, limit, onSnapshot }) => {
      const notifQuery = query(
        collection(db, 'notifications'),
        orderBy('createdAt', 'desc'),
        limit(50)
      );
      
      unsubscribe = onSnapshot(notifQuery, (snapshot: any) => {
        const notifs: KssNotification[] = snapshot.docs.map((d: any) => ({
          id: d.id,
          ...d.data(),
          createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? new Date().toISOString()
        }));
        setNotifications(notifs);
      }, (err: any) => {
        console.warn('[Notifications] Listener error:', err);
      });
    });
    
    return () => unsubscribe();
  }, [isFirestoreConnected]);

  // Register FCM token when user logs in and Firestore is connected
  useEffect(() => {
    if (isAuthenticated && activeEmployee && isFirestoreConnected) {
      registerFcmToken(activeEmployee.id, activeEmployee.role).catch(() => {});
      setupFcmForegroundListener();
    }
  }, [isAuthenticated, activeEmployee?.id, isFirestoreConnected]);

  // ROOT-LEVEL ROLE & SESSION SYNC: Continuously sync activeEmployee and role whenever employees state updates (e.g. from Firestore or Admin edit)
  useEffect(() => {
    if (!activeEmployee) return;
    const updatedSelf = employees.find(e => 
      e.id === activeEmployee.id || 
      (e.employeeId && e.employeeId === activeEmployee.employeeId) ||
      (e.email && activeEmployee.email && e.email.toLowerCase() === activeEmployee.email.toLowerCase())
    );

    if (updatedSelf) {
      let nextRole = updatedSelf.role;
      if (updatedSelf.employeeId === 'CEO001' || updatedSelf.employeeId === 'CTO001') {
        if (updatedSelf.role === 'SUPER_ADMIN') nextRole = 'SUPER_ADMIN';
      }

      if (updatedSelf.role !== activeEmployee.role || role !== nextRole || JSON.stringify(updatedSelf) !== JSON.stringify(activeEmployee)) {
        setActiveEmployee(updatedSelf);
        setRole(nextRole);
      }
    }
  }, [employees, activeEmployee?.id, activeEmployee?.role, role]);


  // SYSTEM RULE: Strict Auto-Checkout at 7:00 PM (19:00) shift end.
  // The working-hours timer is capped inside 10:00 AM – 7:00 PM; any open break is
  // closed at cutoff so a forgotten checkout after hours is NEVER recorded as a break.
  useEffect(() => {
    const checkAutoCheckout = async () => {
      if (attendance.length === 0) return;
      const absoluteNow = await fetchAbsoluteTime();
      const todayStr = getLocalDateString(absoluteNow);
      const currentMins = absoluteNow.getHours() * 60 + absoluteNow.getMinutes();
      const isPastShiftEnd = currentMins >= SHIFT_END_HOUR * 60;

      attendance.forEach(record => {
        const isPastDay = record.date < todayStr;
        const isTodayPastCutoff = record.date === todayStr && isPastShiftEnd;

        if (!record.checkOutAt && (isPastDay || isTodayPastCutoff)) {
          // Strict 7:00 PM cutoff timestamp for the record date
          const forceCheckOutTime = getShiftEndForDate(record.date).toISOString();

          // Close any open break so the record is fully consistent
          const existingBreaks = record.breaks || [];
          const openBreak = existingBreaks.find(b => !b.endAt);
          let breakMinutes = record.totalBreakMinutes || 0;
          let updatedBreaks = existingBreaks;

          if (openBreak) {
            const elapsed = Math.max(0, Math.floor((getShiftEndForDate(record.date).getTime() - new Date(openBreak.startAt).getTime()) / 60000));
            breakMinutes += elapsed;
            updatedBreaks = existingBreaks.map(b =>
              b.startAt === openBreak.startAt && !b.endAt
                ? { ...b, endAt: forceCheckOutTime, durationMinutes: elapsed }
                : b
            );
          }

          const totalMins = computeShiftWorkingMinutes(record.date, record.checkInAt, forceCheckOutTime, breakMinutes);
          const updatedNotes = (record.notes ? record.notes + ' | ' : '') + 'SYSTEM: Auto-checked out at 07:00 PM (Strict Shift End)';

          // Update local state and sync to localStorage
          setAttendance(prev => {
            const next = prev.map(a => a.id === record.id ? {
              ...a,
              checkOutAt: forceCheckOutTime,
              workingMinutes: totalMins,
              breaks: updatedBreaks,
              totalBreakMinutes: breakMinutes,
              notes: updatedNotes
            } : a);
            localStorage.setItem('kss_v1_attendance', JSON.stringify(next));
            return next;
          });

          // Auto close the record in Firestore
          setDoc(doc(db, 'attendance', record.id), {
            checkOutAt: forceCheckOutTime,
            workingMinutes: totalMins,
            breaks: updatedBreaks,
            totalBreakMinutes: breakMinutes,
            notes: updatedNotes
          }, { merge: true }).catch(() => { });

          addAuditLog('AUTO_CHECKOUT', `Att ID: ${record.id}`, `Auto-checked out at 7:00 PM (strict shift end) for ${record.date}`);
        }
      });
    };

    const interval = setInterval(checkAutoCheckout, 30000); // Check every 30s
    checkAutoCheckout(); // Check immediately on mount/update

    return () => clearInterval(interval);
  }, [attendance]);


  // Sync to & from Firestore
  useEffect(() => {
    let unsubEmps = () => { };
    let unsubAtt = () => { };
    let unsubLogs = () => { };
    let unsubSettings = () => { };
    let unsubWorkZone = () => { };
    let unsubLeaveReqs = () => { };

    const initFirestore = async () => {
      try {
        const connected = await testConnection();
        setIsFirestoreConnected(connected);

        // Subscribe to real-time updates for employees
        unsubEmps = onSnapshot(collection(db, 'employees'), (snapshot) => {
          if (!snapshot.empty) {
            const fetched: Employee[] = [];
            snapshot.forEach(docSnap => {
              const data = { id: docSnap.id, ...docSnap.data() } as Employee;

              // PURGE ONLY OLD DUMMY EMP-003 RECORD (with old typo domain)
              if (
                (data.id === 'emp-003' || data.employeeId === '003') && 
                data.email?.toLowerCase() === 'd.koushik@kalpanaaa.in'
              ) {
                deleteDoc(doc(db, 'employees', data.id)).catch(() => { });
                return;
              }

              // LIVE AUTOCORRECT CEO SPELLING AND EMAIL IN FIREBASE
              if (data.employeeId === 'CEO001') {
                let needsUpdate = false;
                // Intercept CEO registration if needed
                if (data.role === 'SUPER_ADMIN' && data.fullName?.toLowerCase().includes('akshit')) {
                  if (data.email !== 'akshit@kalpanaaa.in') {
                    data.email = 'akshit@kalpanaaa.in';
                    needsUpdate = true;
                  }
                }

                if (needsUpdate) {
                  // Push correction back to Firestore silently
                  setDoc(doc(db, 'employees', data.id), data, { merge: true }).catch(() => { });
                }
              }

              // LIVE AUTOCORRECT MALFORMED OR DOUBLE-PREFIXED EMPLOYEE IDs
              if (data.employeeId) {
                let cleanId = data.employeeId;
                if (cleanId.includes('24072407') || cleanId.includes('27072407') || cleanId.length > 9) {
                  const numMatch = cleanId.match(/\d+$/);
                  if (numMatch) {
                    const seqNum = numMatch[0].slice(-3);
                    cleanId = `KSS2407${seqNum}`;
                  }
                } else if (!cleanId.startsWith('KSS2407') && cleanId.match(/^\d+$/)) {
                  cleanId = `KSS2407${cleanId.padStart(3, '0')}`;
                } else if (cleanId.startsWith('KSS2707')) {
                  cleanId = cleanId.replace('KSS2707', 'KSS2407');
                } else if (cleanId.startsWith('KS2407') || cleanId.startsWith('KS2707')) {
                  cleanId = cleanId.replace('KS2707', 'KSS2407').replace('KS2407', 'KSS2407');
                }

                if (cleanId !== data.employeeId) {
                  data.employeeId = cleanId;
                  setDoc(doc(db, 'employees', data.id), { employeeId: cleanId }, { merge: true }).catch(() => { });
                }
              }

              fetched.push(data);
            });

            // Deduplicate employees by employeeId or email (keep newest, delete older duplicates)
            const deduplicated: Employee[] = [];
            const seen = new Set<string>();
            
            // Sort by createdAt descending so we keep the newest one
            fetched.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
            
            for (const emp of fetched) {
              const emailKey = emp.email?.toLowerCase().trim();
              const idKey = emp.employeeId?.trim();
              
              if ((emailKey && seen.has(emailKey)) || (idKey && seen.has(idKey))) {
                // Delete the duplicate from Firestore to solve it at the root level
                deleteDoc(doc(db, 'employees', emp.id)).catch(() => { });
                continue;
              }
              
              if (emailKey) seen.add(emailKey);
              if (idKey) seen.add(idKey);
              deduplicated.push(emp);
            }

            // Restore original order or sort appropriately (e.g., by ID)
            deduplicated.reverse();

            // Ensure Official D. Koushik (Project Manager) exists in Team Directory
            // NOTE: Only seed if not already in Firestore — never override existing role
            const koushikExists = deduplicated.some(e => 
              e.employeeId === 'KSS2407003' || 
              e.email?.toLowerCase().includes('d.koushik@kalpanaaasoftwaresolutions.in')
            );

            if (!koushikExists) {
              const officialKoushik: Employee = {
                id: 'emp-KSS2407003',
                employeeId: 'KSS2407003',
                fullName: 'D. Koushik',
                email: 'd.koushik@kalpanaaasoftwaresolutions.in',
                role: 'PROJECT_MANAGER', // correct role — HR_ADMIN was wrong
                department: 'Software Engineering',
                designation: 'Project Manager',
                status: 'Active',
                phone: '+91 98765 00003',
                gender: 'Male',
                dateOfBirth: '1995-01-01',
                joiningDate: '2024-07-01',
                employmentType: 'Full-Time',
                permanentAddress: 'Bengaluru HQ Campus',
                currentAddress: 'Bengaluru HQ Campus',
                city: 'Bengaluru',
                state: 'Karnataka',
                postalCode: '560001',
                emergencyContact: '+91 98765 00000',
                emergencyRelationship: 'Management',
                shift: 'General Shift (09:00 - 18:00)',
                workLocation: 'Kalpanaaa Main Office HQ, Bengaluru',
                reportingManager: 'Board of Directors',
                qrToken: 'QR-TOKEN-KSS2407003-PM',
                createdAt: '2024-07-01T09:00:00Z',
                updatedAt: new Date().toISOString(),
                profilePhotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
                resumeUrl: ''
              };

              deduplicated.push(officialKoushik);
              setDoc(doc(db, 'employees', officialKoushik.id), officialKoushik, { merge: true }).catch(() => { });
            }

            if (deduplicated.length > 0) {
              setEmployees(deduplicated);
            }
          } else {
            // Seed initial employees if empty
            INITIAL_EMPLOYEES.forEach(async (emp) => {
              await setDoc(doc(db, 'employees', emp.id), emp).catch(() => { });
            });
          }
        }, (error) => {
          handleFirestoreError(error, OperationType.LIST, 'employees');
        });

        // Subscribe to attendance records
        unsubAtt = onSnapshot(collection(db, 'attendance'), (snapshot) => {
          if (!snapshot.empty) {
            const todayStr = getLocalDateString();
            const fetched: AttendanceRecord[] = [];
            snapshot.forEach(docSnap => {
              const data = { id: docSnap.id, ...docSnap.data() } as AttendanceRecord;
              
              // (Removed auto-purge logic to allow attendance history to be maintained)

              // LIVE MIGRATION FOR ATTENDANCE CODE KSS2707 -> KSS2407 and KS -> KSS
              if (data.employeeCode) {
                let newCode = data.employeeCode;
                if (newCode.includes('KSS2707')) {
                  newCode = newCode.replace('KSS2707', 'KSS2407');
                } else if (newCode.startsWith('KS2407') || newCode.startsWith('KS2707')) {
                  newCode = newCode.replace('KS2707', 'KSS2407').replace('KS2407', 'KSS2407');
                }
                
                if (newCode !== data.employeeCode) {
                  data.employeeCode = newCode;
                  setDoc(doc(db, 'attendance', data.id), { employeeCode: newCode }, { merge: true }).catch(() => { });
                }
              }

              // Ensure both employeeCode and employeeId are normalized
              if (!data.employeeCode && data.employeeId) {
                data.employeeCode = data.employeeId;
              }
              if (!data.employeeId && data.employeeCode) {
                data.employeeId = data.employeeCode;
              }

              fetched.push(data);
            });
            if (fetched.length > 0) {
              // Sort descending by checkInAt / date
              fetched.sort((a, b) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime());
              setAttendance(fetched);
              localStorage.setItem('kss_v1_attendance', JSON.stringify(fetched));
            } else {
              setAttendance([]);
              localStorage.setItem('kss_v1_attendance', JSON.stringify([]));
            }
          } else {
            setAttendance([]);
          }
        }, (error) => {
          handleFirestoreError(error, OperationType.LIST, 'attendance');
        });

        // Subscribe to leave requests
        unsubLeaveReqs = onSnapshot(collection(db, 'leaveRequests'), (snapshot) => {
          if (!snapshot.empty) {
            const fetched: LeaveRequest[] = [];
            snapshot.forEach(docSnap => {
              fetched.push({ id: docSnap.id, ...docSnap.data() } as LeaveRequest);
            });
            if (fetched.length > 0) {
              fetched.sort((a, b) => new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime());
              setLeaveRequests(fetched);
            }
          } else {
            setLeaveRequests([]);
          }
        }, (error) => {
          handleFirestoreError(error, OperationType.LIST, 'leaveRequests');
        });

        // Audit logs are now subscribed conditionally in a separate effect

        // Subscribe to company settings
        unsubSettings = onSnapshot(doc(db, 'settings', 'global'), (docSnap) => {
          if (docSnap.exists()) {
            setSettings(docSnap.data() as CompanySettings);
          } else {
            setDoc(doc(db, 'settings', 'global'), INITIAL_COMPANY_SETTINGS).catch(() => { });
          }
        }, (error) => {
          handleFirestoreError(error, OperationType.GET, 'settings/global');
        });

        // Subscribe to authoritative company work zone doc
        unsubWorkZone = onSnapshot(doc(db, 'workZones', 'company'), (docSnap) => {
          if (docSnap.exists()) {
            const fetchedZone = docSnap.data() as WorkZone;
            
            // Auto-correct stale GPS coordinates from previous Firestore states
            let needsUpdate = false;
            if (fetchedZone.latitude === 13.014316 || fetchedZone.longitude === 77.64052 || fetchedZone.radiusMeters === 500) {
              fetchedZone.latitude = 13.014333;
              fetchedZone.longitude = 77.646000;
              fetchedZone.radiusMeters = 300; // Adjusted to 300m as requested by user
              needsUpdate = true;
            }

            setCompanyWorkZone(fetchedZone);
            setSettings(prev => ({
              ...prev,
              officeName: fetchedZone.name,
              officeLatitude: fetchedZone.latitude,
              officeLongitude: fetchedZone.longitude,
              allowedRadiusMeters: fetchedZone.radiusMeters
            }));

            if (needsUpdate) {
              setDoc(doc(db, 'workZones', 'company'), fetchedZone, { merge: true }).catch(() => {});
            }
          } else {
            const defaultZone: WorkZone = {
              name: 'Kalpanaaa Software Solutions — Main Office',
              latitude: 13.014333,
              longitude: 77.646000,
              radiusMeters: 100,
              active: true,
              updatedBy: 'System Init',
              updatedAt: new Date().toISOString()
            };
            setDoc(doc(db, 'workZones', 'company'), defaultZone).catch(() => { });
          }
        }, (error) => {
          handleFirestoreError(error, OperationType.GET, 'workZones/company');
        });

      } catch (err) {
        console.warn('Firestore initialization fallback to local state:', err);
      }
    };

    initFirestore();

    return () => {
      unsubEmps();
      unsubAtt();
      unsubLogs();
      unsubSettings();
      unsubWorkZone();
      unsubLeaveReqs();
    };
  }, []);

  // Conditionally subscribe to audit logs only for admins
  useEffect(() => {
    let unsubLogs = () => { };
    if (isAuthenticated && (role === 'SUPER_ADMIN' || role === 'HR_ADMIN')) {
      // Bounded read of the latest 1000 records — the full permanent archive stays in Firestore
      unsubLogs = onSnapshot(query(collection(db, 'auditLogs'), limit(1000)), (snapshot) => {
        if (!snapshot.empty) {
          const fetched: AuditLog[] = [];
          snapshot.forEach(docSnap => {
            fetched.push({ id: docSnap.id, ...docSnap.data() } as AuditLog);
          });
          if (fetched.length > 0) {
            fetched.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            setAuditLogs(fetched);
          }
        }
      }, (error) => {
        console.warn('Audit logs permission denied or offline');
      });
    } else {
      setAuditLogs([]);
    }
    return () => unsubLogs();
  }, [isAuthenticated, role]);

  // Personal permanent activity feed — every employee sees their own audit history
  useEffect(() => {
    let unsubMyLogs = () => { };
    if (isAuthenticated && activeEmployee && role !== 'SUPER_ADMIN' && role !== 'HR_ADMIN') {
      unsubMyLogs = onSnapshot(
        query(collection(db, 'auditLogs'), where('actorId', '==', activeEmployee.id), limit(500)),
        (snapshot) => {
          if (!snapshot.empty) {
            const fetched: AuditLog[] = [];
            snapshot.forEach(docSnap => {
              fetched.push({ id: docSnap.id, ...docSnap.data() } as AuditLog);
            });
            fetched.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            setMyAuditLogs(fetched);
          } else {
            setMyAuditLogs([]);
          }
        },
        (error) => {
          console.warn('Personal activity feed unavailable (offline or rules pending):', error);
        }
      );
    } else {
      setMyAuditLogs([]);
    }
    return () => unsubMyLogs();
  }, [isAuthenticated, activeEmployee?.id, role]);

  // ── Session Restore: runs ONCE on mount, then waits for Firestore to populate via onSnapshot ──
  // The Firestore employees snapshot effect keeps employeesRef current.
  // We retry here until we find the employee (Firestore may stream in after first mount).
  useEffect(() => {
    const savedSessionId = localStorage.getItem('kss_v1_session');
    if (!savedSessionId) {
      setActiveEmployee(null);
      setIsAuthenticated(false);
      setIsSessionReady(true);
      return;
    }

    // Helper to apply a matched employee to state
    const applySession = (matched: Employee) => {
      const cat = getDeviceCategory();
      let localSessId = localStorage.getItem('kss_v1_session_id');
      if (!localSessId) {
        localSessId = `sess_${cat}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        localStorage.setItem('kss_v1_session_id', localSessId);
        localStorage.setItem('kss_v1_device_category', cat);
        const sessionUpdates = cat === 'desktop' ? { desktopSessionId: localSessId } : { mobileSessionId: localSessId };
        setDoc(doc(db, 'employees', matched.id), sessionUpdates, { merge: true }).catch(() => { });
      }

      setActiveEmployee(matched);
      let assignedRole = matched.role;
      if (matched.employeeId === 'CEO001' || matched.employeeId === 'CTO001') assignedRole = 'SUPER_ADMIN';
      setRole(assignedRole);
      setIsAuthenticated(true);
      setIsSessionReady(true);
    };

    // Check immediately with whatever employees are in state (usually from localStorage cache)
    const immediate = employeesRef.current.find(e => e.id === savedSessionId || e.employeeId === savedSessionId);
    if (immediate) {
      applySession(immediate);
      return;
    }

    // If not found yet (Firestore hasn't streamed in), poll the ref every 200ms for up to 5s
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const found = employeesRef.current.find(e => e.id === savedSessionId || e.employeeId === savedSessionId);
      if (found) {
        clearInterval(interval);
        applySession(found);
      } else if (attempts >= 25) {
        // After 5s with no match, treat session as stale
        clearInterval(interval);
        localStorage.removeItem('kss_v1_session');
        setActiveEmployee(null);
        setIsAuthenticated(false);
        setIsSessionReady(true);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Firebase Auth State: subscribes ONCE, uses ref for employee lookup ──
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setIsDemoMode(false);
        const cleanEmail = firebaseUser.email?.toLowerCase();
        let matched = employeesRef.current.find(e => e.email?.toLowerCase() === cleanEmail);

        if (!matched && cleanEmail) {
          try {
            const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              matched = employeesRef.current.find(e => e.email?.toLowerCase() === userData.email?.toLowerCase());
            }
          } catch (e) {
            console.warn('User doc fetch exception:', e);
          }
        }

        if (matched) {
          setActiveEmployee(matched);
          setRole(matched.role);
          setIsAuthenticated(true);
          setIsSessionReady(true);
          localStorage.setItem('kss_v1_session', matched.id);
        }
      }
    });
    return () => unsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addAuditLog = (action: string, target: string, details: string, actorOverride?: { actorId?: string; actorName?: string; actorRole?: UserRole }) => {
    const now = new Date().toISOString();
    const randomSuffix = Math.random().toString(36).slice(2, 8);
    const newLog: AuditLog = {
      id: `log-${Date.now()}-${randomSuffix}`,
      actorId: actorOverride?.actorId || activeEmployee?.id || 'sys-admin',
      actorName: actorOverride?.actorName || activeEmployee?.fullName || 'System Admin',
      actorRole: actorOverride?.actorRole || role,
      action,
      target,
      details,
      timestamp: now,
      ipAddress: resolveClientIp() || undefined,
      category: deriveAuditCategory(action)
    };
    setAuditLogs(prev => [newLog, ...prev].slice(0, 1000));
    if (newLog.actorId === activeEmployee?.id) {
      setMyAuditLogs(prev => [newLog, ...prev.filter(l => l.id !== newLog.id)].slice(0, 500));
    }

    // Async write to Firestore — permanent, immutable record of every action
    setDoc(doc(db, 'auditLogs', newLog.id), newLog).catch(err => {
      handleFirestoreError(err, OperationType.WRITE, `auditLogs/${newLog.id}`);
    });

    // Firebase notifications for major events
    const notificationMap: Record<string, { title: string }> = {
      'EMPLOYEE_CREATED':        { title: '👤 New Employee Added' },
      'EMPLOYEE_DELETED':        { title: '🗑️ Employee Removed' },
      'USER_LOGIN':              { title: '🔐 Employee Login' },
      'USER_LOGOUT':             { title: '🚪 Employee Logout' },
      'ATTENDANCE_CHECKIN':      { title: '🟢 Check-In Recorded' },
      'ATTENDANCE_CHECKOUT':     { title: '🔴 Check-Out Recorded' },
      'ATTENDANCE_BREAK_START':  { title: '🟡 Break Started' },
      'ATTENDANCE_BREAK_END':    { title: '🟡 Break Ended' },
      'LEAVE_APPROVED':          { title: '✅ Leave Approved' },
      'LEAVE_REJECTED':          { title: '❌ Leave Rejected' },
      'PAYROLL_RUN':             { title: '💰 Payroll Run' },
    };
    const notifConfig = notificationMap[action];
    if (notifConfig) {
      sendKssNotification(
        action as any,
        notifConfig.title,
        `${details} — by ${newLog.actorName}`,
        { actorId: newLog.actorId, actorName: newLog.actorName }
      );
    }
  };

  const loginWithEmail = async (email: string, pass: string): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanPass = pass.trim();

      if (!cleanEmail || !cleanPass) {
        setIsLoading(false);
        return { success: false, message: 'Please enter both your company email address and password.' };
      }

      // Brute Force Lockout Check
      const targetEmp = employees.find(e => e.email?.toLowerCase() === cleanEmail);
      const isPrahlad = cleanEmail.includes('prahlad');
      
      if (!isPrahlad && targetEmp && targetEmp.lockoutUntil && targetEmp.lockoutUntil > Date.now()) {
        const waitMins = Math.ceil((targetEmp.lockoutUntil - Date.now()) / 60000);
        setIsLoading(false);
        return { success: false, message: `SECURITY ALERT: Account temporarily locked due to multiple failed attempts. Please wait ${waitMins} minutes.` };
      }

      const clearLockout = (empId: string) => {
        if (targetEmp && targetEmp.failedLoginCount) {
          setDoc(doc(db, 'employees', empId), { failedLoginCount: 0, lockoutUntil: null }, { merge: true }).catch(() => { });
        }
      };

      const recordFailure = () => {
        if (targetEmp) {
          const newCount = (targetEmp.failedLoginCount || 0) + 1;
          const updates: Partial<Employee> = { failedLoginCount: newCount };
          if (!isPrahlad && newCount >= 5) {
            updates.lockoutUntil = Date.now() + 15 * 60000;
          }
          setDoc(doc(db, 'employees', targetEmp.id), updates, { merge: true }).catch(() => { });
        }
      };



      // 4. Try Firebase Auth (for registered employees)
      try {
        const userCred = await signInWithEmailAndPassword(auth, cleanEmail, cleanPass);
        if (userCred.user) {
          setUser(userCred.user);

          const matched = employees.find(e => e.email?.toLowerCase() === cleanEmail || e.id === userCred.user.uid);
          if (matched) {
            const cat = getDeviceCategory();
            const newSessionId = `sess_${cat}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
            const sessionUpdates = cat === 'desktop' ? { desktopSessionId: newSessionId } : { mobileSessionId: newSessionId };

            const updatedMatched = { ...matched, ...sessionUpdates, currentSessionId: newSessionId };
            setActiveEmployee(updatedMatched);

            const assignedRole = matched.role;
            setRole(assignedRole);
            setIsAuthenticated(true);
            localStorage.setItem('kss_v1_session', matched.id);
            localStorage.setItem('kss_v1_session_id', newSessionId);
            localStorage.setItem('kss_v1_device_category', cat);
            setDoc(doc(db, 'employees', matched.id), sessionUpdates, { merge: true }).catch(() => { });

            addAuditLog('USER_LOGIN', matched.fullName, `Firebase Auth Login (${assignedRole})`, { actorId: matched.id, actorName: matched.fullName, actorRole: assignedRole });
            clearLockout(matched.id);
            setIsLoading(false);
            return { success: true, message: `Welcome back, ${matched.fullName}!` };
          }

          // Firebase auth succeeded but no employee record yet — create a basic one
          const uid = userCred.user.uid;
          const newSessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
          const fullName = userCred.user.displayName || cleanEmail.split('@')[0];
          const autoDetails = getAssignedEmployeeDetails(fullName, employees);
          const empCode = autoDetails.employeeId;
          
          const basicEmp: Employee = {
            id: uid, employeeId: empCode,
            fullName: fullName,
            email: cleanEmail, 
            role: autoDetails.role || 'EMPLOYEE', 
            department: 'General Operations',
            designation: autoDetails.designation || 'Software Engineer', 
            status: 'Active',
            phone: '', gender: 'Prefer not to say', dateOfBirth: '', joiningDate: new Date().toISOString().split('T')[0],
            employmentType: 'Full-Time', permanentAddress: '', currentAddress: '', city: '', state: '', postalCode: '',
            emergencyContact: '', emergencyRelationship: '',
            shift: 'General Shift (09:00 - 18:00)', workLocation: 'Kalpanaaa Main Office HQ, Bengaluru',
            reportingManager: '', qrToken: empCode,
            currentSessionId: newSessionId,
            sessionFingerprint: generateDeviceFingerprint(),
            createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
          };
          setEmployees(prev => [basicEmp, ...prev.filter(e => e.id !== basicEmp.id)]);
          setActiveEmployee(basicEmp);
          setRole('EMPLOYEE');
          setIsAuthenticated(true);
          localStorage.setItem('kss_v1_session', basicEmp.id);
          localStorage.setItem('kss_v1_session_id', newSessionId);
          setDoc(doc(db, 'employees', basicEmp.id), { currentSessionId: newSessionId, sessionFingerprint: basicEmp.sessionFingerprint }, { merge: true }).catch(() => { });

          setIsLoading(false);
          return { success: true, message: `Welcome! You're now signed in.` };
        }
      } catch (fbErr: any) {
        // Firebase auth failed — check local employee list as fallback
        console.warn('Firebase login attempt:', fbErr.code);
      }

      // Fallback removed per user request: Employees must use their real created Firebase passwords.
      // If Firebase auth failed above, the login strictly fails.

      recordFailure();
      setIsLoading(false);
      return { success: false, message: 'No account found with this email address or incorrect password. Please register first.' };
    } catch (err: any) {
      setIsLoading(false);

      return { success: false, message: err.message || 'Login failed.' };
    }
  };

  const sendPasswordReset = async (email: string): Promise<{ success: boolean; message: string }> => {
    try {
      const { getAuth, sendPasswordResetEmail } = await import('firebase/auth');
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      return { success: true, message: `Password reset email sent to ${email}` };
    } catch (err: any) {
      console.error('Password reset error:', err);
      return { success: false, message: err.message || 'Failed to send password reset email.' };
    }
  };

  const setEmployeeInitialPassword = async (email: string, pass: string): Promise<{ success: boolean; message: string }> => {
    try {
      const secondaryApp = initializeApp(firebaseConfig, `SecondaryApp-${Date.now()}`);
      const { getAuth, createUserWithEmailAndPassword, signOut } = await import('firebase/auth');
      const secondaryAuth = getAuth(secondaryApp);
      
      const userCred = await createUserWithEmailAndPassword(secondaryAuth, email, pass);
      
      await setDoc(doc(db, 'users', userCred.user.uid), {
        uid: userCred.user.uid,
        email: email,
        createdAt: new Date().toISOString()
      }, { merge: true }).catch(() => { });

      await signOut(secondaryAuth);
      return { success: true, message: 'Password successfully set.' };
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        return { success: false, message: 'This employee already has a secure login. Please use the Reset Email button instead.' };
      }
      return { success: false, message: err.message || 'Failed to set password.' };
    }
  };

  const quickDemoLogin = (targetRole: UserRole | 'CEO' | 'CTO') => {
    setIsLoading(true);
    setTimeout(() => {
      let targetEmp: Employee | undefined;
      if (targetRole === 'CEO' || targetRole === 'SUPER_ADMIN') {
        targetEmp = employees.find(e => e.employeeId === 'CEO001' || e.fullName?.toLowerCase().includes('akshit')) || employees[0];
      } else if (targetRole === 'CTO') {
        targetEmp = employees.find(e => e.employeeId === 'CTO001' || e.fullName?.toLowerCase().includes('gaurav')) || employees[1];
      } else if (targetRole === 'HR_ADMIN') {
        targetEmp = employees.find(e => e.role === 'HR_ADMIN') || employees[2];
      } else {
        targetEmp = employees.find(e => e.role === 'EMPLOYEE') || employees[3];
      }

      let assignedRole: UserRole = 'SUPER_ADMIN';
      if (targetEmp) {
        const cat = getDeviceCategory();
        const newSessionId = `sess_${cat}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        const sessionUpdates = cat === 'desktop' ? { desktopSessionId: newSessionId } : { mobileSessionId: newSessionId };

        const updatedTarget = { ...targetEmp, ...sessionUpdates };
        setActiveEmployee(updatedTarget);
        assignedRole = (targetEmp.employeeId === 'CEO001' || targetEmp.employeeId === 'CTO001') ? 'SUPER_ADMIN' : targetEmp.role;
        setRole(assignedRole);
        localStorage.setItem('kss_v1_session', targetEmp.id);
        localStorage.setItem('kss_v1_session_id', newSessionId);
        localStorage.setItem('kss_v1_device_category', cat);
        setDoc(doc(db, 'employees', targetEmp.id), sessionUpdates, { merge: true }).catch(() => { });
      } else {
        setRole('SUPER_ADMIN');
      }
      setIsAuthenticated(true);
      setIsDemoMode(true);
      setIsLoading(false);
      addAuditLog('USER_LOGIN', `Demo Executive Login (${targetRole})`, `Switched workspace view to ${targetRole}`, {
        actorId: targetEmp?.id || 'demo',
        actorName: targetEmp?.fullName || `Demo ${targetRole}`,
        actorRole: assignedRole
      });
    }, 150);
  };

  const logout = () => {
    if (activeEmployee) {
      addAuditLog('USER_LOGOUT', activeEmployee.fullName, `Signed out of the portal (${getDeviceCategory()})`, {
        actorId: activeEmployee.id,
        actorName: activeEmployee.fullName,
        actorRole: activeEmployee.role
      });
    }
    auth.signOut();
    setUser(null);
    setActiveEmployee(null);
    setIsAuthenticated(false);
    setIsDemoMode(true);
    localStorage.removeItem('kss_v1_session');
    localStorage.removeItem('kss_v1_session_id');
    localStorage.removeItem('kss_v1_device_category');
  };

  const addEmployee = async (empData: Omit<Employee, 'id' | 'createdAt' | 'updatedAt' | 'qrToken'> & { password?: string }) => {
    let uid = `emp-${Date.now()}`;
    const cleanEmail = empData.email?.trim().toLowerCase();

    if (empData.password) {
      // Create a secondary Firebase App to create user without signing out the current admin
      const secondaryApp = initializeApp(firebaseConfig, `SecondaryApp-${Date.now()}`);
      const { getAuth, createUserWithEmailAndPassword, signOut } = await import('firebase/auth');
      const secondaryAuth = getAuth(secondaryApp);
      
      try {
        const userCred = await createUserWithEmailAndPassword(secondaryAuth, cleanEmail, empData.password);
        uid = userCred.user.uid;
        
        // Write user mapping record to Firestore using primary DB
        await setDoc(doc(db, 'users', uid), {
          uid: uid,
          email: cleanEmail,
          role: empData.role,
          fullName: empData.fullName,
          createdAt: new Date().toISOString()
        }).catch(() => { });

        // Sign out secondary auth so we don't hold the session
        await signOut(secondaryAuth);
      } catch (err: any) {
        console.error("Error creating Firebase user:", err);
        return { success: false, message: err.message || "Failed to create Firebase authentication user." };
      }
    }

    const qrToken = empData.employeeId;

    // Remove password before saving to employee record
    const { password, ...dataToSave } = empData;

    // TOP 1% SECURITY: XSS Sanitization
    const sanitizedData = sanitizeInput(dataToSave);

    const newEmp: Employee = {
      ...sanitizedData,
      id: uid,
      uid: uid,
      qrToken,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setEmployees(prev => [newEmp, ...prev]);

    // Persist to Firestore
    setDoc(doc(db, 'employees', newEmp.id), newEmp).catch(err => {
      handleFirestoreError(err, OperationType.WRITE, `employees/${newEmp.id}`);
    });

    addAuditLog('EMPLOYEE_CREATED', `${newEmp.employeeId} (${newEmp.fullName})`, `Added to ${newEmp.department} as ${newEmp.designation}`);
    return newEmp;
  };

  const updateEmployee = (id: string, updates: Partial<Employee>) => {
    // TOP 1% SECURITY: XSS Sanitization
    const sanitizedUpdates = sanitizeInput(updates);

    setEmployees(prev => prev.map(e => {
      if (e.id === id) {
        const updated = { ...e, ...sanitizedUpdates, updatedAt: new Date().toISOString() };

        // Persist update to Firestore
        setDoc(doc(db, 'employees', id), updated, { merge: true }).catch(err => {
          handleFirestoreError(err, OperationType.UPDATE, `employees/${id}`);
        });

        return updated;
      }
      return e;
    }));

    addAuditLog('EMPLOYEE_UPDATED', `Employee ID: ${id}`, `Fields updated: ${Object.keys(updates).join(', ')}`);
  };

  const deleteEmployee = (id: string) => {
    const target = employees.find(e => e.id === id);
    setEmployees(prev => prev.filter(e => e.id !== id));

    // Delete from Firestore
    deleteDoc(doc(db, 'employees', id)).catch(err => {
      handleFirestoreError(err, OperationType.DELETE, `employees/${id}`);
    });

    addAuditLog('EMPLOYEE_DELETED', target ? `${target.employeeId} (${target.fullName})` : id, 'Removed employee profile from directory');
  };

  const regenerateQrToken = (employeeId: string) => {
    const newToken = `QR-TOKEN-${employeeId}-${Date.now().toString(36).toUpperCase()}`;
    updateEmployee(employeeId, { qrToken: newToken });
    addAuditLog('QR_REGENERATED', `Employee ${employeeId}`, 'Regenerated cryptographic attendance pass');
    return newToken;
  };

  const recordCheckIn = async (employeeId: string, lat?: number, lon?: number, accuracy: number = 8, method: AttendanceMethod = 'Facial Recognition') => {
    if (!navigator.onLine) {
      return { success: false, message: 'SECURITY ALERT: Airplane mode or offline connection detected. Check-In blocked.' };
    }

    const emp = employees.find(e => e.id === employeeId || e.employeeId === employeeId);
    if (!emp) {
      return { success: false, message: 'Employee not found.' };
    }

    const absoluteNow = await fetchAbsoluteTime();
    const todayStr = getLocalDateString(absoluteNow);
    const existingRec = attendance.find(a => isRecordForEmployee(a, emp) && a.date === todayStr);

    const isApprovedWfh = (emp.approvedWfhDates || []).includes(todayStr);

    // TOP 1% SECURITY: Strict Office Wi-Fi IP Whitelisting
    if (settings.officeStaticIp && !isApprovedWfh) {
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        if (ipData.ip !== settings.officeStaticIp) {
          return { success: false, message: `SECURITY ALERT: Unrecognized Network. You must be connected to the Office Wi-Fi to check in (Expected: ${settings.officeStaticIp}, Got: ${ipData.ip}).` };
        }
      } catch (e) {
        return { success: false, message: 'SECURITY ALERT: Unable to securely verify your network IP address. Please check your connection.' };
      }
    }

    const evalResult = evaluateAttendanceScan(emp, existingRec, settings, lat, lon, isApprovedWfh);

    if (!evalResult.allowed && evalResult.action === 'CHECK_IN') {
      return { success: false, message: evalResult.message };
    }

    if (existingRec && existingRec.checkInAt) {
      if (existingRec.checkOutAt) {
        return { success: false, message: 'You have already completed your shift and checked out for today.' };
      }
      return { success: false, message: 'Employee is already checked in for today.' };
    }

    const distMeters = (lat !== undefined && lon !== undefined)
      ? calculateGpsDistanceMeters(lat, lon, companyWorkZone.latitude, companyWorkZone.longitude)
      : 0;

    const nowISO = absoluteNow.toISOString();
    const newRecord: AttendanceRecord = {
      id: existingRec ? existingRec.id : `att-${emp.employeeId || emp.id}-${todayStr}`,
      employeeId: emp.id,
      employeeCode: emp.employeeId || emp.id,
      employeeName: emp.fullName,
      department: emp.department,
      date: todayStr,
      checkInAt: nowISO,
      checkOutAt: null,
      workingMinutes: 0,
      status: evalResult.status,
      attendanceMethod: method,

      // Work Zone Location Snapshot fields
      officeLatitude: companyWorkZone.latitude,
      officeLongitude: companyWorkZone.longitude,
      officeRadiusMeters: companyWorkZone.radiusMeters,
      distanceFromOffice: distMeters,
      locationAccuracy: accuracy,
      locationVerified: evalResult.locationVerified,

      latitude: lat,
      longitude: lon,
      deviceInfo: 'Browser Scanner Terminal',
      createdAt: nowISO,
      updatedAt: nowISO
    };

    setAttendance(prev => {
      const next = [newRecord, ...prev.filter(a => a.id !== newRecord.id)];
      localStorage.setItem('kss_v1_attendance', JSON.stringify(next));
      return next;
    });

    // Write to Firestore
    setDoc(doc(db, 'attendance', newRecord.id), newRecord).catch(err => {
      handleFirestoreError(err, OperationType.WRITE, `attendance/${newRecord.id}`);
    });

    addAuditLog('ATTENDANCE_CHECKIN', `${emp.employeeId} (${emp.fullName})`, `Status: ${evalResult.status}, GPS: ${evalResult.locationVerified ? 'Verified' : 'Unverified'} (${distMeters}m from office)`);

    return { success: true, message: evalResult.message, record: newRecord };
  };

  const recordCheckOut = async (employeeId: string, lat?: number, lon?: number, accuracy: number = 8) => {
    if (!navigator.onLine) {
      return { success: false, message: 'SECURITY ALERT: Airplane mode or offline connection detected. Check-Out blocked.' };
    }

    const emp = employees.find(e => e.id === employeeId || e.employeeId === employeeId);
    if (!emp) {
      return { success: false, message: 'Employee not found.' };
    }

    const absoluteNow = await fetchAbsoluteTime();
    const todayStr = getLocalDateString(absoluteNow);
    const existingRec = attendance.find(a => isRecordForEmployee(a, emp) && a.date === todayStr);

    if (!existingRec || !existingRec.checkInAt) {
      return { success: false, message: 'No active check-in record found for today.' };
    }

    if (existingRec.checkOutAt) {
      return { success: false, message: 'Employee has already checked out for today.' };
    }

    const isApprovedWfh = (emp.approvedWfhDates || []).includes(todayStr);
    const evalResult = evaluateAttendanceScan(emp, existingRec, settings, lat, lon, isApprovedWfh);
    if (!evalResult.allowed) {
      return { success: false, message: evalResult.message };
    }

    const distMeters = (lat !== undefined && lon !== undefined)
      ? calculateGpsDistanceMeters(lat, lon, companyWorkZone.latitude, companyWorkZone.longitude)
      : (existingRec.distanceFromOffice || 0);

    const nowISO = absoluteNow.toISOString();
    
    // Auto-close open break if any
    let additionalBreakMins = 0;
    const existingBreaks = existingRec.breaks || [];
    let updatedBreaks = existingBreaks;
    const openBreak = existingBreaks.find(b => !b.endAt);
    
    if (openBreak) {
      additionalBreakMins = Math.floor((new Date(nowISO).getTime() - new Date(openBreak.startAt).getTime()) / 60000);
      updatedBreaks = existingBreaks.map(b => 
        (b.startAt === openBreak.startAt && !b.endAt) 
          ? { ...b, endAt: nowISO, durationMinutes: additionalBreakMins } 
          : b
      );
    }

    const finalTotalBreakMinutes = (existingRec.totalBreakMinutes || 0) + additionalBreakMins;

    // Working minutes are capped strictly inside the 10 AM – 7 PM shift window.
    const durationMins = computeShiftWorkingMinutes(todayStr, existingRec.checkInAt, nowISO, finalTotalBreakMinutes);
    const finalDurationMins = Math.max(1, durationMins);

    const updatedRecord: AttendanceRecord = {
      ...existingRec,
      checkOutAt: nowISO,
      workingMinutes: finalDurationMins,
      breaks: updatedBreaks,
      totalBreakMinutes: finalTotalBreakMinutes,
      officeLatitude: existingRec.officeLatitude || companyWorkZone.latitude,
      officeLongitude: existingRec.officeLongitude || companyWorkZone.longitude,
      officeRadiusMeters: existingRec.officeRadiusMeters || companyWorkZone.radiusMeters,
      distanceFromOffice: distMeters,
      locationAccuracy: accuracy || existingRec.locationAccuracy || 8,
      locationVerified: evalResult.locationVerified,
      updatedAt: nowISO
    };

    setAttendance(prev => {
      const next = prev.map(a => a.id === updatedRecord.id ? updatedRecord : a);
      localStorage.setItem('kss_v1_attendance', JSON.stringify(next));
      return next;
    });

    // Write to Firestore
    setDoc(doc(db, 'attendance', updatedRecord.id), updatedRecord, { merge: true }).catch(err => {
      handleFirestoreError(err, OperationType.UPDATE, `attendance/${updatedRecord.id}`);
    });

    addAuditLog('ATTENDANCE_CHECKOUT', `${emp.employeeId} (${emp.fullName})`, `Duration: ${Math.floor(finalDurationMins / 60)}h ${finalDurationMins % 60}m`);

    return { success: true, message: 'Checked Out Successfully', record: updatedRecord };
  };

  const updateAttendanceRecord = (recordId: string, updates: Partial<AttendanceRecord>) => {
    setAttendance(prev => prev.map(a => a.id === recordId ? { ...a, ...updates, updatedAt: new Date().toISOString() } : a));

    // Update in Firestore
    setDoc(doc(db, 'attendance', recordId), { ...updates, updatedAt: new Date().toISOString() }, { merge: true }).catch(err => {
      handleFirestoreError(err, OperationType.UPDATE, `attendance/${recordId}`);
    });

    addAuditLog('ATTENDANCE_CORRECTION', `Record ${recordId}`, `Updated fields: ${Object.keys(updates).join(', ')}`);
  };

  const updateSettings = (newSettings: Partial<CompanySettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);

    // Sync to Firestore
    setDoc(doc(db, 'settings', 'global'), updated).catch(err => {
      handleFirestoreError(err, OperationType.WRITE, 'settings/global');
    });

    addAuditLog('SETTINGS_UPDATED', 'Company Policy', 'Updated system preferences and GPS/shift rules');
  };

  const saveCompanyWorkZone = async (zone: Partial<WorkZone>) => {
    const updated: WorkZone = {
      name: zone.name || companyWorkZone.name || 'Kalpanaaa Software Solutions — Main Office',
      latitude: zone.latitude !== undefined ? Number(zone.latitude) : companyWorkZone.latitude,
      longitude: zone.longitude !== undefined ? Number(zone.longitude) : companyWorkZone.longitude,
      radiusMeters: zone.radiusMeters !== undefined ? Number(zone.radiusMeters) : companyWorkZone.radiusMeters,
      active: true,
      updatedBy: activeEmployee?.fullName || activeEmployee?.email || 'Authorized HR / CEO / CTO',
      updatedAt: new Date().toISOString()
    };

    setCompanyWorkZone(updated);
    localStorage.setItem('kss_v1_work_zone', JSON.stringify(updated));

    // Also update settings global object
    updateSettings({
      officeName: updated.name,
      officeLatitude: updated.latitude,
      officeLongitude: updated.longitude,
      allowedRadiusMeters: updated.radiusMeters
    });

    // Write to Firestore workZones/company
    await setDoc(doc(db, 'workZones', 'company'), updated).catch(err => {
      handleFirestoreError(err, OperationType.WRITE, 'workZones/company');
    });

    addAuditLog('COMPANY_WORKZONE_UPDATED', updated.name, `Lat: ${updated.latitude}, Lon: ${updated.longitude}, Radius: ${updated.radiusMeters}m`);
  };

  const submitLeaveRequest = (data: Omit<LeaveRequest, 'id' | 'status' | 'requestDate'>) => {
    const newRequest: LeaveRequest = {
      ...data,
      id: `LR-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      status: 'Pending',
      requestDate: new Date().toISOString(),
    };
    setLeaveRequests(prev => [newRequest, ...prev]);
    
    // Write to Firestore
    setDoc(doc(db, 'leaveRequests', newRequest.id), newRequest).catch(err => {
      handleFirestoreError(err, OperationType.WRITE, `leaveRequests/${newRequest.id}`);
    });
    
    addAuditLog('LEAVE_REQUEST', data.employeeName, `Submitted ${data.type} request from ${data.startDate} to ${data.endDate}`);
  };

  const updateLeaveRequestStatus = (id: string, status: 'Approved' | 'Rejected', reviewedBy: string, reviewNotes?: string) => {
    setLeaveRequests(prev => prev.map(req => req.id === id ? { ...req, status, reviewedBy, reviewNotes } : req));

    // Update in Firestore
    setDoc(doc(db, 'leaveRequests', id), { status, reviewedBy, reviewNotes: reviewNotes || '' }, { merge: true }).catch(err => {
      handleFirestoreError(err, OperationType.UPDATE, `leaveRequests/${id}`);
    });

    // If Approved and type is WFH, push dates to employee's approvedWfhDates
    const req = leaveRequests.find(r => r.id === id);
    if (req && status === 'Approved' && req.type === 'WFH') {
      const targetEmp = employees.find(e => e.employeeId === req.employeeId);
      if (targetEmp) {
        const dates = new Set<string>(targetEmp.approvedWfhDates || []);
        let curr = new Date(req.startDate);
        const end = new Date(req.endDate);
        while (curr <= end) {
          dates.add(getLocalDateString(curr));
          curr.setDate(curr.getDate() + 1);
        }
        updateEmployee(targetEmp.id, { approvedWfhDates: Array.from(dates) });
      }
    }
    addAuditLog('LEAVE_DECISION', reviewedBy, `${status} leave request ${id}`);
  };

  const cancelLeaveRequest = (id: string) => {
    // Soft-cancel: the request is permanently archived as 'Cancelled' instead of being deleted,
    // so the employee's full request history is always preserved.
    setLeaveRequests(prev => prev.map(req => req.id === id ? {
      ...req,
      status: 'Cancelled' as const,
      reviewedBy: activeEmployee?.fullName || 'Employee',
      reviewNotes: 'Cancelled by employee before approval'
    } : req));
    setDoc(doc(db, 'leaveRequests', id), {
      status: 'Cancelled',
      reviewedBy: activeEmployee?.fullName || 'Employee',
      reviewNotes: 'Cancelled by employee before approval',
      cancelledAt: new Date().toISOString()
    }, { merge: true }).catch(err => {
      handleFirestoreError(err, OperationType.UPDATE, `leaveRequests/${id}`);
    });
    addAuditLog('LEAVE_CANCELLED', activeEmployee?.fullName || 'Employee', `Cancelled leave request ${id}`);
  };

  const resetToDemoData = () => {
    setEmployees(INITIAL_EMPLOYEES);
    setAttendance(generateInitialAttendance());
    setAuditLogs(INITIAL_AUDIT_LOGS);
    setSettings(INITIAL_COMPANY_SETTINGS);
    const defaultZone: WorkZone = {
      name: 'Kalpanaaa Software Solutions — Main Office',
      latitude: 13.014333,
      longitude: 77.646000,
      radiusMeters: 100,
      active: true,
      updatedBy: 'System Init',
      updatedAt: new Date().toISOString()
    };
    setCompanyWorkZone(defaultZone);
    localStorage.removeItem('kss_v1_employees');
    localStorage.removeItem('kss_v1_attendance');
    localStorage.removeItem('kss_v1_audit_logs');
    localStorage.removeItem('kss_v1_settings');
    localStorage.removeItem('kss_v1_work_zone');
    localStorage.removeItem('kss_v1_leave_requests');
    setLeaveRequests([]);

    // Re-seed Firestore
    INITIAL_EMPLOYEES.forEach(emp => {
      setDoc(doc(db, 'employees', emp.id), emp).catch(() => { });
    });
    generateInitialAttendance().forEach(att => {
      setDoc(doc(db, 'attendance', att.id), att).catch(() => { });
    });
    setDoc(doc(db, 'settings', 'global'), INITIAL_COMPANY_SETTINGS).catch(() => { });
    setDoc(doc(db, 'workZones', 'company'), defaultZone).catch(() => { });

    addAuditLog('SYSTEM_RESET', 'Database', 'Re-seeded system with demo enterprise workforce dataset');
  };

  // ── Admin Broadcast: send one-click custom notification to all employees ──
  const sendBroadcast = async (title: string, message: string): Promise<void> => {
    if (!activeEmployee) return;
    await sendAdminBroadcast(title, message, activeEmployee.id, activeEmployee.fullName);
    addAuditLog('ADMIN_BROADCAST', 'All Employees', `Broadcast sent: "${title}" — ${message}`);
  };

  // ── Mark all visible notifications as read ──
  const markAllNotificationsRead = () => {
    const allIds = notifications.map(n => n.id).filter(Boolean) as string[];
    const newSet = new Set([...Array.from(readNotificationIds), ...allIds]);
    setReadNotificationIds(newSet);
    localStorage.setItem('kss_v1_read_notifs', JSON.stringify(Array.from(newSet)));
  };

  const unreadNotificationCount = notifications.filter(
    n => n.id && !readNotificationIds.has(n.id)
  ).length;

  // Real-time Employee Password Update (Firebase Auth + Firestore Audit)
  const updateCurrentEmployeePassword = async (newPassword: string): Promise<{ success: boolean; message: string }> => {
    const cleanPass = newPassword ? newPassword.trim() : '';
    if (!cleanPass || cleanPass.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }
    if (!activeEmployee) {
      return { success: false, message: 'No active employee session found.' };
    }

    try {
      if (auth.currentUser) {
        const { updatePassword } = await import('firebase/auth');
        await updatePassword(auth.currentUser, cleanPass);
      }

      updateEmployee(activeEmployee.id, { 
        updatedAt: new Date().toISOString() 
      });

      addAuditLog('SECURITY_PASSWORD_CHANGE', activeEmployee.fullName, 'Employee updated account password successfully.');
      sendKssNotification(
        'SECURITY_ALERT',
        '🔐 Account Password Updated',
        `Account password for ${activeEmployee.fullName} (${activeEmployee.email}) was updated successfully.`,
        { actorId: activeEmployee.id, actorName: activeEmployee.fullName }
      );

      return { success: true, message: 'Your account password has been updated successfully!' };
    } catch (err: any) {
      console.warn('[AuthContext] Update password error:', err);
      if (err?.code === 'auth/requires-recent-login') {
        return { success: false, message: 'For security reasons, please log out and log in again before updating your password.' };
      }
      return { success: false, message: err?.message || 'Failed to update password. Please try again.' };
    }
  };

  // ── Root-Level FCM Mobile Push Token Registration ──
  useEffect(() => {
    if (isAuthenticated && activeEmployee) {
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          registerFcmToken(activeEmployee.id, activeEmployee.role);
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              registerFcmToken(activeEmployee.id, activeEmployee.role);
            }
          });
        }
      }
    }
  }, [isAuthenticated, activeEmployee?.id, activeEmployee?.role]);

  const requestMobilePushPermission = async (): Promise<boolean> => {
    if (!('Notification' in window)) return false;
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted' && activeEmployee) {
        await registerFcmToken(activeEmployee.id, activeEmployee.role);
        return true;
      }
      return permission === 'granted';
    } catch {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      activeEmployee,
      role,
      isAuthenticated,
      isLoading,
      isDemoMode,
      isFirestoreConnected,
      isSessionReady,
      employees,
      attendance,
      auditLogs,
      myAuditLogs,
      settings,
      companyWorkZone,
      leaveRequests,
      notifications,
      unreadNotificationCount,
      loginWithEmail,
      quickDemoLogin,
      logout,
      addEmployee,
      updateEmployee,
      deleteEmployee,
      recordCheckIn,
      recordCheckOut,
      updateAttendanceRecord,
      updateSettings,
      saveCompanyWorkZone,
      submitLeaveRequest,
      updateLeaveRequestStatus,
      cancelLeaveRequest,
      addAuditLog,
      resetToDemoData,
      regenerateQrToken,
      sendPasswordReset,
      setEmployeeInitialPassword,
      sendBroadcast,
      markAllNotificationsRead,
      updateCurrentEmployeePassword,
      requestMobilePushPermission
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
