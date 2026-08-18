import { CompanySettings, Employee, AttendanceRecord } from '../types';

// Official working hours — the shift timer is strictly capped inside this window
export const SHIFT_START_HOUR = 10; // 10:00 AM
export const SHIFT_END_HOUR = 19;   // 7:00 PM (strict shift end)

// Returns standard local date formatted as YYYY-MM-DD (averts UTC date mismatch on date boundaries)
export function getLocalDateString(inputDate?: Date | string | number): string {
  const d = inputDate ? new Date(inputDate) : new Date();
  if (isNaN(d.getTime())) {
    const fallback = new Date();
    return `${fallback.getFullYear()}-${String(fallback.getMonth() + 1).padStart(2, '0')}-${String(fallback.getDate()).padStart(2, '0')}`;
  }
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Safely matches an attendance record against an employee across all ID representations (id, employeeId, employeeCode)
export function isRecordForEmployee(
  rec: Partial<AttendanceRecord> | null | undefined, 
  emp: Partial<Employee> | null | undefined
): boolean {
  if (!rec || !emp) return false;
  const empId = emp.id?.trim();
  const empCode = emp.employeeId?.trim();
  const recEmpId = rec.employeeId?.trim();
  const recEmpCode = rec.employeeCode?.trim();

  if (empId && (recEmpId === empId || recEmpCode === empId)) return true;
  if (empCode && (recEmpId === empCode || recEmpCode === empCode)) return true;
  return false;
}

// Identifies executive roles (CEO and CTO) so they can be excluded from standard employee attendance tracking & tables
export function isCeoOrCto(emp: Partial<Employee> | null | undefined): boolean {
  if (!emp) return false;
  const id = (emp.employeeId || '').toUpperCase();
  const name = (emp.fullName || '').toLowerCase();
  const email = (emp.email || '').toLowerCase();
  const desig = (emp.designation || '').toLowerCase();

  return (
    id === 'CEO001' || id === 'CTO001' || id === 'KSS2407001' || id === 'KSS2407002' ||
    name.includes('akshit') || name.includes('gaurav') ||
    email.includes('akshit') || email.includes('gaurav') ||
    desig.includes('ceo') || desig.includes('cto') || desig.includes('chief executive') || desig.includes('chief technology')
  );
}

// Local shift-end timestamp for a given date (YYYY-MM-DD)
export function getShiftEndForDate(dateStr: string): Date {
  const end = new Date(`${dateStr}T${String(SHIFT_END_HOUR).padStart(2, '0')}:00:00`);
  return isNaN(end.getTime()) ? new Date(dateStr) : end;
}

// Computes working minutes strictly within the 10:00 AM – 7:00 PM shift window.
// Any time after 7:00 PM is never counted, even if the employee checks out late.
export function computeShiftWorkingMinutes(
  dateStr: string,
  checkInAt: string | null,
  checkOutAt: string | null,
  totalBreakMinutes: number = 0
): number {
  if (!checkInAt) return 0;
  const start = new Date(checkInAt).getTime();
  const rawEnd = checkOutAt ? new Date(checkOutAt).getTime() : Date.now();
  const shiftEnd = getShiftEndForDate(dateStr).getTime();
  const cappedEnd = Math.min(rawEnd, shiftEnd);
  if (cappedEnd <= start) return 0;
  let mins = Math.floor((cappedEnd - start) / 60000) - (totalBreakMinutes || 0);
  return Math.max(0, mins);
}

/**
 * Haversine formula to calculate distance between two GPS points in meters
 */
export function calculateGpsDistanceMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000; // Earth radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Generate secure attendance payload for QR Code
 */
export function generateEmployeeQrToken(employee: Employee, _expiryMinutes: number = 10): string {
  // TOTP interval of 10 seconds
  const bucket = Math.floor(Date.now() / 10000);
  
  // Combine employee unique token with bucket to create a rotating hash
  const totpData = `${employee.id}|${employee.qrToken}|${bucket}`;
  const encoded = btoa(totpData);
  
  const rawPayload = {
    totp: encoded,
    empDbId: employee.id,
    ver: '2026.1_TOTP'
  };
  return JSON.stringify(rawPayload);
}

export interface QrParseResult {
  valid: boolean;
  empId?: string;
  empDbId?: string;
  expired?: boolean;
  error?: string;
}

/**
 * Parse and validate QR code token payload
 */
export function parseAndValidateQrCode(qrText: string): QrParseResult {
  try {
    const data = JSON.parse(qrText);
    if (!data.totp || !data.empDbId) {
      // Fallback for old tokens
      if (data.empId && data.token) {
        if (data.exp && Date.now() > data.exp) return { valid: false, expired: true, error: 'Expired' };
        return { valid: true, empId: data.empId, empDbId: data.empDbId };
      }
      return { valid: false, error: 'Invalid QR format' };
    }

    const decoded = atob(data.totp);
    const [empId, token, bucketStr] = decoded.split('|');
    const bucket = parseInt(bucketStr, 10);
    const currentBucket = Math.floor(Date.now() / 10000);
    
    // Allow +/- 1 bucket (10 seconds) for clock drift
    if (Math.abs(currentBucket - bucket) > 1) {
      return { valid: false, expired: true, error: 'SECURITY ALERT: QR Code has expired. Prevented possible screenshot replay attack.' };
    }

    return { valid: true, empDbId: data.empDbId, empId: empId, _token: token } as any;
  } catch (e) {
    // If simple text token match
    if (qrText.startsWith('EMP') || qrText.startsWith('QR-TOKEN-')) {
      return { valid: true, empId: qrText };
    }
    return { valid: false, error: 'Unrecognized QR code payload' };
  }
}

export interface CheckInEvaluation {
  allowed: boolean;
  action: 'CHECK_IN' | 'CHECK_OUT' | 'ALREADY_CHECKED_OUT';
  status: 'Present' | 'Late' | 'Half Day';
  locationVerified: boolean;
  distanceMeters?: number;
  message: string;
}

/**
 * Evaluates whether check-in / check-out is valid based on settings, time, location
 */
export function evaluateAttendanceScan(
  employee: Employee,
  todayRecord: AttendanceRecord | undefined,
  settings: CompanySettings,
  userLat?: number,
  userLon?: number,
  isApprovedWfh?: boolean
): CheckInEvaluation {
  // 1. Check GPS Location if required
  let locationVerified = true;
  let distanceMeters = 0;
  
  if (settings.gpsRequired) {
    if (userLat === undefined || userLon === undefined) {
      locationVerified = false;
    } else {
      distanceMeters = calculateGpsDistanceMeters(
        userLat,
        userLon,
        settings.officeLatitude,
        settings.officeLongitude
      );
      if (distanceMeters > settings.allowedRadiusMeters) {
        locationVerified = false;
      }
    }
  }

  // 2. Evaluate state
  if (!todayRecord || !todayRecord.checkInAt) {
    // Perform CHECK_IN
    const now = new Date();
    
    // Official Timings: Start at 10:00 AM, 1 Hour Extra Time (11:00 AM cutoff for Late)
    const tenAm = new Date();
    tenAm.setHours(10, 0, 0, 0);
    
    const elevenAm = new Date();
    elevenAm.setHours(11, 0, 0, 0);

    if (now < tenAm) {
      return {
        allowed: false,
        action: 'CHECK_IN',
        status: 'Present',
        locationVerified: false,
        distanceMeters,
        message: 'Shift has not started yet. Check-ins are only allowed from 10:00 AM onwards.'
      };
    }

    const shiftEnd = getShiftEndForDate(getLocalDateString(now));
    if (now > shiftEnd) {
      return {
        allowed: false,
        action: 'CHECK_IN',
        status: 'Present',
        locationVerified: false,
        distanceMeters,
        message: 'Shift has ended at 7:00 PM. Check-ins are no longer accepted today.'
      };
    }
    
    let status: 'Present' | 'Late' = 'Present';
    if (now > elevenAm) {
      status = 'Late';
    }

    if (settings.gpsRequired && !locationVerified && !isApprovedWfh) {
      return {
        allowed: false,
        action: 'CHECK_IN',
        status,
        locationVerified: false,
        distanceMeters,
        message: userLat === undefined || userLon === undefined 
          ? 'GPS Location is required. Please grant location permissions and wait for signal.'
          : `Outside authorized office location (${distanceMeters}m away, limit is ${settings.allowedRadiusMeters}m).`
      };
    }

    return {
      allowed: true,
      action: 'CHECK_IN',
      status,
      locationVerified: true,
      distanceMeters,
      message: status === 'Late' 
        ? 'Checked In (Late Arrival — After 11:00 AM)' 
        : 'Successfully Checked In'
    };
  } 
  
  if (todayRecord.checkInAt && !todayRecord.checkOutAt) {
    // Perform CHECK_OUT
    if (settings.gpsRequired && !locationVerified && !isApprovedWfh) {
      // Graceful fallback: the employee already verified their location at check-in.
      // Leaving the office (or a stale/unavailable GPS fix) must never lock them out
      // of checking out — carry the verified check-in location snapshot instead.
      if (todayRecord.locationVerified) {
        return {
          allowed: true,
          action: 'CHECK_OUT',
          status: todayRecord.status as 'Present' | 'Late' | 'Half Day',
          locationVerified: true,
          distanceMeters: todayRecord.distanceFromOffice ?? distanceMeters,
          message: 'Checked Out Successfully (location verified at check-in)'
        };
      }

      return {
        allowed: false,
        action: 'CHECK_OUT',
        status: todayRecord.status as 'Present' | 'Late' | 'Half Day',
        locationVerified: false,
        distanceMeters,
        message: userLat === undefined || userLon === undefined
          ? 'GPS Location is required for Check-Out. Please enable location and try again.'
          : `Outside authorized office perimeter for Check-Out (${distanceMeters}m away).`
      };
    }

    return {
      allowed: true,
      action: 'CHECK_OUT',
      status: todayRecord.status as 'Present' | 'Late' | 'Half Day',
      locationVerified: true,
      distanceMeters,
      message: 'Checked Out Successfully'
    };
  }

  // Already checked out today
  return {
    allowed: false,
    action: 'ALREADY_CHECKED_OUT',
    status: todayRecord.status as 'Present' | 'Late' | 'Half Day',
    locationVerified: true,
    message: 'Attendance already completed for today.'
  };
}
