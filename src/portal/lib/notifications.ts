// KSS Firebase Notification System
// Replaces Discord webhook with Firestore-backed in-app + FCM push notifications
// All events are stored in Firestore 'notifications' collection for real-time sync

import { db } from './firebase';
import { collection, addDoc, serverTimestamp, Timestamp, query, where, getDocs, limit as firestoreLimit } from 'firebase/firestore';

export type NotificationEventType =
  | 'ATTENDANCE_CHECKIN'
  | 'ATTENDANCE_CHECKOUT'
  | 'ATTENDANCE_BREAK_START'
  | 'ATTENDANCE_BREAK_END'
  | 'LEAVE_REQUEST_SUBMITTED'
  | 'LEAVE_REQUEST_APPROVED'
  | 'LEAVE_REQUEST_REJECTED'
  | 'WFH_REQUEST_SUBMITTED'
  | 'EMPLOYEE_CREATED'
  | 'EMPLOYEE_DELETED'
  | 'EMPLOYEE_UPDATED'
  | 'USER_LOGIN'
  | 'USER_LOGOUT'
  | 'PAYROLL_RUN'
  | 'SECURITY_ALERT'
  | 'ADMIN_BROADCAST'
  | 'SYSTEM_ALERT';

export type NotificationAudience = 'ALL' | 'SUPER_ADMIN' | 'HR_ADMIN' | 'PROJECT_MANAGER' | 'EMPLOYEE';

export interface KssNotification {
  id?: string;
  type: NotificationEventType;
  title: string;
  body: string;
  audience: NotificationAudience[];  // who should see this notification
  actorId?: string;
  actorName?: string;
  targetEmployeeId?: string;
  targetEmployeeName?: string;
  metadata?: Record<string, any>;
  isRead?: boolean;
  createdAt?: any;  // Firestore Timestamp
}

// ----- Icon & color helpers for UI rendering -----
export const notificationIcon = (type: NotificationEventType): string => {
  switch (type) {
    case 'ATTENDANCE_CHECKIN':      return '🟢';
    case 'ATTENDANCE_CHECKOUT':     return '🔴';
    case 'ATTENDANCE_BREAK_START':  return '🟡';
    case 'ATTENDANCE_BREAK_END':    return '🟡';
    case 'LEAVE_REQUEST_SUBMITTED': return '📋';
    case 'LEAVE_REQUEST_APPROVED':  return '✅';
    case 'LEAVE_REQUEST_REJECTED':  return '❌';
    case 'WFH_REQUEST_SUBMITTED':   return '🏠';
    case 'EMPLOYEE_CREATED':        return '👤';
    case 'EMPLOYEE_DELETED':        return '🗑️';
    case 'EMPLOYEE_UPDATED':        return '✏️';
    case 'USER_LOGIN':              return '🔐';
    case 'USER_LOGOUT':             return '🚪';
    case 'PAYROLL_RUN':             return '💰';
    case 'SECURITY_ALERT':          return '🚨';
    case 'ADMIN_BROADCAST':         return '📢';
    case 'SYSTEM_ALERT':            return 'ℹ️';
    default:                        return '🔔';
  }
};

export const notificationColor = (type: NotificationEventType): string => {
  switch (type) {
    case 'ATTENDANCE_CHECKIN':
    case 'LEAVE_REQUEST_APPROVED':
    case 'EMPLOYEE_CREATED':        return 'emerald';
    case 'ATTENDANCE_CHECKOUT':
    case 'LEAVE_REQUEST_REJECTED':
    case 'EMPLOYEE_DELETED':
    case 'SECURITY_ALERT':          return 'rose';
    case 'ATTENDANCE_BREAK_START':
    case 'ATTENDANCE_BREAK_END':
    case 'LEAVE_REQUEST_SUBMITTED':
    case 'WFH_REQUEST_SUBMITTED':   return 'amber';
    case 'ADMIN_BROADCAST':         return 'blue';
    case 'PAYROLL_RUN':             return 'purple';
    default:                        return 'slate';
  }
};

// ----- Map event types to required audiences -----
const AUDIENCE_MAP: Partial<Record<NotificationEventType, NotificationAudience[]>> = {
  ATTENDANCE_CHECKIN:       ['SUPER_ADMIN', 'HR_ADMIN', 'PROJECT_MANAGER'],
  ATTENDANCE_CHECKOUT:      ['SUPER_ADMIN', 'HR_ADMIN', 'PROJECT_MANAGER'],
  ATTENDANCE_BREAK_START:   ['HR_ADMIN', 'PROJECT_MANAGER'],
  ATTENDANCE_BREAK_END:     ['HR_ADMIN', 'PROJECT_MANAGER'],
  LEAVE_REQUEST_SUBMITTED:  ['SUPER_ADMIN', 'HR_ADMIN', 'PROJECT_MANAGER'],
  LEAVE_REQUEST_APPROVED:   ['EMPLOYEE'],
  LEAVE_REQUEST_REJECTED:   ['EMPLOYEE'],
  WFH_REQUEST_SUBMITTED:    ['SUPER_ADMIN', 'HR_ADMIN', 'PROJECT_MANAGER'],
  EMPLOYEE_CREATED:         ['SUPER_ADMIN', 'HR_ADMIN'],
  EMPLOYEE_DELETED:         ['SUPER_ADMIN', 'HR_ADMIN'],
  EMPLOYEE_UPDATED:         ['SUPER_ADMIN', 'HR_ADMIN'],
  USER_LOGIN:               ['SUPER_ADMIN', 'HR_ADMIN'],
  USER_LOGOUT:              ['SUPER_ADMIN'],
  PAYROLL_RUN:              ['SUPER_ADMIN', 'HR_ADMIN'],
  SECURITY_ALERT:           ['SUPER_ADMIN'],
  ADMIN_BROADCAST:          ['ALL'],
  SYSTEM_ALERT:             ['SUPER_ADMIN', 'HR_ADMIN'],
};

// ----- Core: write a notification to Firestore -----
export const sendKssNotification = async (
  type: NotificationEventType,
  title: string,
  body: string,
  options?: {
    actorId?: string;
    actorName?: string;
    targetEmployeeId?: string;
    targetEmployeeName?: string;
    metadata?: Record<string, any>;
    overrideAudience?: NotificationAudience[];
  }
): Promise<void> => {
  try {
    const audience = options?.overrideAudience ?? AUDIENCE_MAP[type] ?? ['SUPER_ADMIN'];

    const notification: Omit<KssNotification, 'id'> = {
      type,
      title,
      body,
      audience,
      actorId: options?.actorId,
      actorName: options?.actorName,
      targetEmployeeId: options?.targetEmployeeId,
      targetEmployeeName: options?.targetEmployeeName,
      metadata: options?.metadata,
      isRead: false,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, 'notifications'), notification);
  } catch (err) {
    // Silent fail — notifications should never block core operations
    console.warn('[KSS Notifications] Failed to write notification:', err);
  }
};

// ----- Broadcast helper: Admin sends to all employees -----
export const sendAdminBroadcast = async (
  title: string,
  message: string,
  actorId: string,
  actorName: string
): Promise<void> => {
  await sendKssNotification('ADMIN_BROADCAST', title, message, {
    actorId,
    actorName,
    overrideAudience: ['ALL'],
    metadata: { isBroadcast: true }
  });
};

// Local helper — updates a token document without extra imports
const updateTokenDoc = async (id: string, data: Record<string, any>) => {
  const { doc, updateDoc } = await import('firebase/firestore');
  await updateDoc(doc(db, 'fcmTokens', id), data);
};

// ----- FCM Token Registration -----
// Registers current browser's FCM push token to Firestore under 'fcmTokens' collection.
// Tokens are deduplicated by token value so repeated logins never pile up stale rows.
export const registerFcmToken = async (
  employeeId: string,
  role: string
): Promise<void> => {
  try {
    const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;
    if (!vapidKey || vapidKey.includes('YOUR_')) {
      console.warn('[FCM] VAPID key not configured. Push notifications will not work on mobile. Add VITE_FIREBASE_VAPID_KEY to .env');
      return;
    }

    // Dynamically import FCM to avoid breaking non-supported environments
    const { getMessaging, getToken } = await import('firebase/messaging');
    const { getApp } = await import('firebase/app');
    
    const messaging = getMessaging(getApp());
    const registration = await navigator.serviceWorker.ready;
    const token = await getToken(messaging, { vapidKey, serviceWorkerRegistration: registration });

    if (!token) return;

    const tokenCollection = collection(db, 'fcmTokens');
    const existing = await getDocs(query(tokenCollection, where('token', '==', token), firestoreLimit(1)));

    if (!existing.empty) {
      const existingDoc = existing.docs[0];
      const current = existingDoc.data();
      // Update ownership/metadata if the same token is now used by a different account or device
      if (current.employeeId !== employeeId || current.role !== role || current.userAgent !== navigator.userAgent) {
        await updateTokenDoc(existingDoc.id, { employeeId, role, userAgent: navigator.userAgent, registeredAt: serverTimestamp() });
      }
      console.info('[FCM] Token already registered — skipped duplicate.');
      return;
    }

    await addDoc(tokenCollection, {
      employeeId,
      role,
      token,
      userAgent: navigator.userAgent,
      registeredAt: serverTimestamp()
    });
    console.info('[FCM] Token registered for employee:', employeeId);
  } catch (err) {
    console.warn('[FCM] Token registration failed (safe to ignore in dev/unsupported browsers):', err);
  }
};

// ----- Foreground push handler -----
// While the app is open, incoming FCM messages show a system notification via the
// active service worker (same visual as background pushes) and dispatch a DOM event
// so the in-app UI can react instantly. Call once after login.
let foregroundListenerStarted = false;
export const setupFcmForegroundListener = (): void => {
  if (foregroundListenerStarted) return;
  foregroundListenerStarted = true;

  const start = async () => {
    try {
      const { getMessaging, onMessage } = await import('firebase/messaging');
      const { getApp } = await import('firebase/app');
      const messaging = getMessaging(getApp());

      onMessage(messaging, (payload) => {
        const title = payload.notification?.title || '📢 Kalpanaaa HR Alert';
        const body = payload.notification?.body || 'You have a new notification from KSS HR System.';
        const type = payload.data?.type || 'SYSTEM_ALERT';

        // Re-dispatch so in-app listeners (badge, toasts) react without polling
        try {
          window.dispatchEvent(new CustomEvent('kss:fcm', { detail: { title, body, type, data: payload.data } }));
        } catch { /* noop */ }

        // Show a browser notification through the active SW registration
        navigator.serviceWorker.ready
          .then(reg => reg.showNotification(title, {
            body,
            icon: '/pwa-192x192.png',
            badge: '/favicon.png',
            tag: type || 'kss-notification',
            data: payload.data
          }))
          .catch(() => { /* notification display is best-effort */ });
      });

      console.info('[FCM] Foreground push listener active.');
    } catch (err) {
      console.warn('[FCM] Foreground listener unavailable:', err);
    }
  };

  if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    start();
  }
};
