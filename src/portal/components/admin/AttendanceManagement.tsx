import React, { useState, useMemo, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { AttendanceRecord, AttendanceStatus } from '../../types';
import { 
  Search, 
  Filter, 
  Calendar, 
  FileDown, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Edit3, 
  UserCheck,
  Building2,
  RefreshCw,
  History,
  FileSpreadsheet,
  X,
  Grid3X3
} from 'lucide-react';
import { generateAttendanceReportPdf } from '../../lib/pdfGenerator';
import { exportAttendanceToCSV } from '../../lib/exportCsv';
import { getLocalDateString, isCeoOrCto } from '../../lib/attendanceEngine';

export const AttendanceManagement: React.FC = () => {
  const { attendance, employees, updateAttendanceRecord, settings, isFirestoreConnected } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [dateFilter, setDateFilter] = useState<'today' | 'yesterday' | 'all'>('all');

  const [editingRecord, setEditingRecord] = useState<AttendanceRecord | null>(null);
  const [editStatus, setEditStatus] = useState<AttendanceStatus | ''>('');
  const [editNotes, setEditNotes] = useState('');
  
  // Individual History Modal State
  const [viewingHistoryEmployee, setViewingHistoryEmployee] = useState<{ id: string; name: string } | null>(null);

  // Monthly Attendance Tracker State
  const [showMonthlyTracker, setShowMonthlyTracker] = useState(true);
  const [trackerMonth, setTrackerMonth] = useState<string>(() => new Date().toISOString().slice(0, 7));

  // Live sync indicator
  const [lastSyncedAt, setLastSyncedAt] = useState<string>(() => new Date().toLocaleTimeString());

  useEffect(() => {
    setLastSyncedAt(new Date().toLocaleTimeString());
  }, [attendance]);

  const todayStr = getLocalDateString();
  const yesterdayObj = new Date();
  yesterdayObj.setDate(yesterdayObj.getDate() - 1);
  const yesterdayStr = getLocalDateString(yesterdayObj);

  const departments = Array.from(new Set(employees.map(e => e.department)));

  // Sanitize + deduplicate attendance records so empty/invalid or duplicate rows never appear
  const cleanedAttendance = useMemo(() => {
    const seen = new Map<string, AttendanceRecord>();
    attendance.forEach(rec => {
      const hasName = (rec.employeeName || '').trim() || (rec.employeeCode || '').trim();
      const validDate = !!rec.date && !isNaN(new Date(rec.date).getTime());
      if (!hasName || !validDate) return;

      // Exclude CEO and CTO from regular employee attendance list
      const matchingEmp = employees.find(e => e.id === rec.employeeId || e.employeeId === rec.employeeCode);
      if (matchingEmp && isCeoOrCto(matchingEmp)) return;
      if ((rec.employeeName || '').toLowerCase().includes('akshit') || (rec.employeeName || '').toLowerCase().includes('gaurav')) return;

      const key = `${rec.employeeCode || rec.employeeId}_${rec.date}`;
      const prev = seen.get(key);
      if (!prev || new Date(rec.updatedAt || rec.createdAt || 0).getTime() >= new Date(prev.updatedAt || prev.createdAt || 0).getTime()) {
        seen.set(key, rec);
      }
    });
    return Array.from(seen.values()).sort((a, b) => {
      const t = b.date.localeCompare(a.date);
      return t !== 0 ? t : (a.employeeName || '').localeCompare(b.employeeName || '');
    });
  }, [attendance, employees]);

  const filteredRecords = cleanedAttendance.filter(rec => {
    const matchesSearch = 
      (rec.employeeName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.employeeCode || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.department || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = deptFilter === 'ALL' || rec.department === deptFilter;
    const matchesStatus = statusFilter === 'ALL' || rec.status === statusFilter;

    let matchesDate = true;
    if (dateFilter === 'today') matchesDate = rec.date === todayStr;
    else if (dateFilter === 'yesterday') matchesDate = rec.date === yesterdayStr;

    return matchesSearch && matchesDept && matchesStatus && matchesDate;
  });

  const getStatusBadge = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Late': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Absent': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      case 'Half Day': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'On Leave': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Work From Home': return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      default: return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const handleSaveCorrection = () => {
    if (!editingRecord) return;
    updateAttendanceRecord(editingRecord.id, {
      status: editStatus || undefined,
      notes: editNotes ? `HR Correction: ${editNotes}` : editingRecord.notes
    });
    setEditingRecord(null);
  };

  const handleUndoCheckout = () => {
    if (!editingRecord) return;
    const confirmUndo = window.confirm(
      "Are you sure you want to undo the Check-Out for this employee?\n\n" +
      "This will clear their Check-Out time and allow them to Check-Out again today."
    );
    if (!confirmUndo) return;
    
    updateAttendanceRecord(editingRecord.id, {
      checkOutAt: null,
      notes: editNotes ? `HR Undo Checkout: ${editNotes}` : (editingRecord.notes ? `${editingRecord.notes} | HR Undo Checkout` : 'HR Undo Checkout')
    });
    setEditingRecord(null);
  };

  const handleForceCheckout = () => {
    if (!editingRecord) return;
    
    // Set to standard 7:00 PM strict shift-end checkout time for that date
    const autoCheckOutDate = new Date(`${editingRecord.date}T19:00:00`);
    const forceCheckOutTime = autoCheckOutDate.toISOString();
    
    let totalMins = 0;
    if (editingRecord.checkInAt) {
      totalMins = Math.floor((autoCheckOutDate.getTime() - new Date(editingRecord.checkInAt).getTime()) / 60000);
      if (editingRecord.totalBreakMinutes) {
        totalMins = Math.max(0, totalMins - editingRecord.totalBreakMinutes);
      }
    }
    totalMins = Math.max(0, totalMins);

    updateAttendanceRecord(editingRecord.id, {
      checkOutAt: forceCheckOutTime,
      workingMinutes: totalMins,
      notes: editNotes ? `HR Force Checkout: ${editNotes}` : (editingRecord.notes ? `${editingRecord.notes} | HR Force Checkout at 19:00` : 'HR Force Checkout at 19:00')
    });
    setEditingRecord(null);
  };

  // ── Monthly Attendance Tracker data ──
  const trackerDaysInMonth = (() => {
    const [y, m] = trackerMonth.split('-').map(Number);
    return new Date(y, m, 0).getDate();
  })();

  const trackerRecords = cleanedAttendance.filter(a => a.date.startsWith(trackerMonth));

  const trackerRows = employees.filter(e => !isCeoOrCto(e)).map(emp => {
    const empRecs = trackerRecords.filter(a => a.employeeId === emp.id || a.employeeCode === emp.employeeId);
    const byDay: Record<number, AttendanceRecord> = {};
    empRecs.forEach(rec => {
      const day = Number(rec.date.slice(8, 10));
      if (!day || isNaN(day)) return;
      if (!byDay[day] || new Date(rec.updatedAt || rec.createdAt || 0).getTime() >= new Date(byDay[day].updatedAt || byDay[day].createdAt || 0).getTime()) {
        byDay[day] = rec;
      }
    });
    const summary = {
      present: empRecs.filter(a => a.status === 'Present').length,
      late: empRecs.filter(a => a.status === 'Late').length,
      absent: empRecs.filter(a => a.status === 'Absent').length,
      half: empRecs.filter(a => a.status === 'Half Day').length,
      leave: empRecs.filter(a => a.status === 'On Leave').length,
      wfh: empRecs.filter(a => a.status === 'Work From Home' || a.isWfh).length,
      hours: empRecs.reduce((s, a) => s + (a.workingMinutes || 0), 0) / 60
    };
    return { emp, byDay, summary, count: empRecs.length };
  });

  const trackerNoRecordCount = trackerRows.filter(r => r.count === 0).length;

  const statusDot = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present': return 'bg-emerald-500';
      case 'Late': return 'bg-amber-500';
      case 'Absent': return 'bg-rose-500';
      case 'Half Day': return 'bg-blue-500';
      case 'On Leave': return 'bg-purple-500';
      case 'Work From Home': return 'bg-sky-500';
      case 'Holiday': return 'bg-slate-600';
      default: return 'bg-slate-700';
    }
  };

  const statusShort = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present': return 'P';
      case 'Late': return 'L';
      case 'Absent': return 'A';
      case 'Half Day': return 'HD';
      case 'On Leave': return 'LV';
      case 'Work From Home': return 'WFH';
      case 'Holiday': return 'H';
      default: return '?';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Attendance Management Master</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Monitor check-ins, check-outs, GPS verification status, and manual HR corrections ({filteredRecords.length} records)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-2 rounded-xl border ${
            isFirestoreConnected
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isFirestoreConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            {isFirestoreConnected ? `Live • ${lastSyncedAt}` : 'Offline cache'}
          </span>

          <button
            onClick={() => setShowMonthlyTracker(!showMonthlyTracker)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer border ${
              showMonthlyTracker
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            Monthly Tracker
          </button>

          <button
            onClick={() => exportAttendanceToCSV(filteredRecords, `Attendance_Export_${new Date().toISOString().split('T')[0]}`)}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md shadow-emerald-900/40"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={() => generateAttendanceReportPdf(filteredRecords, settings, 'Attendance Master Log Report')}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-900/40"
          >
            <FileDown className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search employee, ID, department..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto">
          {/* Quick Date Range Filters */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setDateFilter('today')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${dateFilter === 'today' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Today
            </button>
            <button
              onClick={() => setDateFilter('yesterday')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${dateFilter === 'yesterday' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Yesterday
            </button>
            <button
              onClick={() => setDateFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${dateFilter === 'all' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              All Records
            </button>
          </div>

          {/* Department Filter */}
          <select
            value={deptFilter}
            onChange={e => setDeptFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-slate-200 font-medium focus:outline-none focus:border-blue-500"
          >
            <option value="ALL">All Departments</option>
            {departments.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-slate-200 font-medium focus:outline-none focus:border-blue-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="Present">Present</option>
            <option value="Late">Late</option>
            <option value="Absent">Absent</option>
            <option value="Half Day">Half Day</option>
            <option value="On Leave">On Leave</option>
            <option value="Work From Home">Work From Home</option>
          </select>
        </div>
      </div>

      {/* Monthly Attendance Tracker */}
      {showMonthlyTracker && (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-5 pt-5 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Grid3X3 className="w-4 h-4 text-purple-400" />
                Monthly Attendance Tracker
              </h2>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Whole-month attendance matrix per employee. {trackerNoRecordCount} employee{trackerNoRecordCount === 1 ? '' : 's'} have no records in this month.
              </p>
            </div>
            <input
              type="month"
              value={trackerMonth}
              onChange={e => setTrackerMonth(e.target.value)}
              className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 py-2.5 bg-slate-950/50 border-b border-slate-800/60 text-[10px] font-semibold text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Present</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Late</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Absent</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Half Day</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> On Leave</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> Work From Home</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-700" /> No Record</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-2.5 px-4 min-w-[190px] sticky left-0 bg-slate-950 z-10 border-r border-slate-800/60">Employee</th>
                  {Array.from({ length: trackerDaysInMonth }, (_, i) => i + 1).map(day => (
                    <th key={day} className="py-2.5 px-1.5 text-center min-w-[26px]">{day}</th>
                  ))}
                  <th className="py-2.5 px-2 text-center min-w-[38px]">P</th>
                  <th className="py-2.5 px-2 text-center min-w-[38px]">L</th>
                  <th className="py-2.5 px-2 text-center min-w-[38px]">A</th>
                  <th className="py-2.5 px-2 text-center min-w-[38px]">HD</th>
                  <th className="py-2.5 px-2 text-center min-w-[38px]">LV</th>
                  <th className="py-2.5 px-2 text-center min-w-[38px]">WFH</th>
                  <th className="py-2.5 px-3 text-center min-w-[56px]">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {trackerRows.map(({ emp, byDay, summary, count }) => (
                  <tr key={emp.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-2.5 px-4 sticky left-0 bg-slate-900 z-10 border-r border-slate-800/60">
                      <div className="font-bold text-white">{emp.fullName}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{emp.employeeId} • {emp.department}</div>
                    </td>
                    {count === 0 ? (
                      <td colSpan={trackerDaysInMonth} className="py-2.5 px-3 text-slate-600 text-[10px] italic">
                        No attendance records this month
                      </td>
                    ) : (
                      Array.from({ length: trackerDaysInMonth }, (_, i) => i + 1).map(day => {
                        const rec = byDay[day];
                        return (
                          <td key={day} className="py-2.5 px-1.5 text-center">
                            {rec ? (
                              <span
                                title={`${rec.date} — ${rec.status}${rec.checkInAt ? ' · ' + new Date(rec.checkInAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}`}
                                className={`inline-flex w-4 h-4 rounded-full ${statusDot(rec.status)} items-center justify-center text-[8px] font-black text-slate-950 cursor-help`}
                              >
                                {statusShort(rec.status)}
                              </span>
                            ) : (
                              <span className="inline-block w-3 h-3 rounded-full bg-slate-800/80" />
                            )}
                          </td>
                        );
                      })
                    )}
                    <td className="py-2.5 px-2 text-center font-bold text-emerald-400">{summary.present}</td>
                    <td className="py-2.5 px-2 text-center font-bold text-amber-400">{summary.late}</td>
                    <td className="py-2.5 px-2 text-center font-bold text-rose-400">{summary.absent}</td>
                    <td className="py-2.5 px-2 text-center font-bold text-blue-400">{summary.half}</td>
                    <td className="py-2.5 px-2 text-center font-bold text-purple-400">{summary.leave}</td>
                    <td className="py-2.5 px-2 text-center font-bold text-sky-400">{summary.wfh}</td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-200">
                      {summary.hours > 0 ? `${summary.hours.toFixed(1)}h` : '--'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Attendance Master Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Employee</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Check In</th>
                <th className="py-3.5 px-4">Check Out</th>
                <th className="py-3.5 px-4">Working Hours</th>
                <th className="py-3.5 px-4">Breaks & Meals</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Method & GPS</th>
                <th className="py-3.5 px-4 text-right">Correct</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500 font-medium">
                    No attendance records match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredRecords.map(rec => (
                  <tr key={rec.id} className="hover:bg-slate-800/50 transition-colors align-middle">
                    <td className="py-3 px-4">
                      <div className="font-bold text-white">{rec.employeeName}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{rec.employeeCode} • {rec.department}</div>
                    </td>

                    <td className="py-3 px-4 font-semibold text-slate-300">
                      {rec.date}
                    </td>

                    <td className="py-3 px-4">
                      {rec.checkInAt ? (
                        <span className="font-semibold text-white bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                          {new Date(rec.checkInAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      ) : (
                        <span className="text-slate-500 font-mono">--:--</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      {rec.checkOutAt ? (
                        <span className="font-semibold text-white bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                          {new Date(rec.checkOutAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      ) : rec.checkInAt ? (
                        <span className="inline-flex items-center font-semibold text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/30 animate-pulse whitespace-nowrap">
                          Active Now
                        </span>
                      ) : (
                        <span className="text-slate-500 font-mono">--:--</span>
                      )}
                    </td>

                    <td className="py-3 px-4 font-mono font-semibold text-slate-200">
                      {rec.workingMinutes > 0 ? (
                        `${Math.floor(rec.workingMinutes / 60)}h ${rec.workingMinutes % 60}m`
                      ) : (
                        '--'
                      )}
                    </td>

                    <td className="py-3 px-4">
                      {rec.breaks && rec.breaks.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          {rec.breaks.map((b, idx) => (
                            <div key={idx} className="text-[10px] bg-slate-950 px-2 py-1 rounded border border-slate-800">
                              <span className="text-amber-400 font-bold">{b.type}</span>: {new Date(b.startAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {b.endAt ? new Date(b.endAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Active'} ({b.durationMinutes}m)
                            </div>
                          ))}
                          <div className="text-[11px] text-slate-400 font-semibold mt-1">
                            Total: {rec.totalBreakMinutes || 0}m
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-500 font-mono text-[11px]">No Breaks</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-md border ${getStatusBadge(rec.status)}`}>
                        {rec.status}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <div className="text-slate-200 font-medium text-[11px]">{rec.attendanceMethod}</div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${rec.locationVerified ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                        {rec.locationVerified ? 'GPS Verified' : 'Standard'}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end items-center gap-1">
                        <button
                          onClick={() => setViewingHistoryEmployee({ id: rec.employeeId || rec.employeeCode, name: rec.employeeName })}
                          className="p-1.5 text-slate-400 hover:text-purple-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                          title="View Full History"
                        >
                          <History className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setEditingRecord(rec);
                            setEditStatus(rec.status);
                            setEditNotes(rec.notes || '');
                          }}
                          className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                          title="HR Manual Correction"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Correction Modal */}
      {editingRecord && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl w-full max-w-md p-6 text-white">
            <h3 className="text-base font-bold text-white mb-1">HR Attendance Correction</h3>
            <p className="text-xs text-slate-400 mb-4">
              Updating record for <strong className="text-blue-300">{editingRecord.employeeName}</strong> ({editingRecord.date})
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Attendance Status</label>
                <select
                  value={editStatus}
                  onChange={e => setEditStatus(e.target.value as AttendanceStatus)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-semibold text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Present">Present</option>
                  <option value="Late">Late</option>
                  <option value="Absent">Absent</option>
                  <option value="Half Day">Half Day</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Work From Home">Work From Home 🏠</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">HR Reason / Notes</label>
                <textarea
                  value={editNotes}
                  onChange={e => setEditNotes(e.target.value)}
                  placeholder="Reason for manual adjustment..."
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={() => setEditingRecord(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors mr-auto"
              >
                Cancel
              </button>
              
              {!editingRecord.checkOutAt && (
                <button
                  onClick={handleForceCheckout}
                  className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 border border-purple-500/50 text-xs font-semibold rounded-xl cursor-pointer shadow-md transition-colors"
                >
                  Force 7:00 PM Checkout
                </button>
              )}

              {editingRecord.checkOutAt && (
                <button
                  onClick={handleUndoCheckout}
                  className="px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-500 border border-amber-500/50 text-xs font-semibold rounded-xl cursor-pointer shadow-md transition-colors"
                >
                  Undo Check-Out
                </button>
              )}
              
              <button
                onClick={handleSaveCorrection}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl cursor-pointer shadow-md transition-colors"
              >
                Save Correction
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Individual Employee History Modal */}
      {viewingHistoryEmployee && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-950">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <History className="w-5 h-5 text-purple-400" />
                  {viewingHistoryEmployee.name} - Complete History
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Showing all recorded historical attendance days
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const empsHistory = attendance.filter(a => a.employeeId === viewingHistoryEmployee.id || a.employeeCode === viewingHistoryEmployee.id);
                    exportAttendanceToCSV(empsHistory, `${viewingHistoryEmployee.name}_History`);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Export History CSV
                </button>
                <button
                  onClick={() => setViewingHistoryEmployee(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-slate-900/50">
              {(() => {
                const historyRecords = attendance
                  .filter(a => a.employeeId === viewingHistoryEmployee.id || a.employeeCode === viewingHistoryEmployee.id)
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                const totalHours = historyRecords.reduce((s, a) => s + (a.workingMinutes || 0), 0) / 60;
                const summary = {
                  present: historyRecords.filter(a => a.status === 'Present').length,
                  late: historyRecords.filter(a => a.status === 'Late').length,
                  absent: historyRecords.filter(a => a.status === 'Absent').length,
                  half: historyRecords.filter(a => a.status === 'Half Day').length,
                  leave: historyRecords.filter(a => a.status === 'On Leave').length,
                  wfh: historyRecords.filter(a => a.status === 'Work From Home' || a.isWfh).length
                };
                return (
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-5">
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Days Tracked</p>
                      <p className="text-lg font-black text-white mt-0.5">{historyRecords.length}</p>
                    </div>
                    <div className="bg-slate-950 border border-emerald-500/20 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-emerald-400/80 uppercase tracking-wider">Present</p>
                      <p className="text-lg font-black text-emerald-400 mt-0.5">{summary.present}</p>
                    </div>
                    <div className="bg-slate-950 border border-amber-500/20 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-amber-400/80 uppercase tracking-wider">Late</p>
                      <p className="text-lg font-black text-amber-400 mt-0.5">{summary.late}</p>
                    </div>
                    <div className="bg-slate-950 border border-rose-500/20 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-rose-400/80 uppercase tracking-wider">Absent</p>
                      <p className="text-lg font-black text-rose-400 mt-0.5">{summary.absent}</p>
                    </div>
                    <div className="bg-slate-950 border border-purple-500/20 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-purple-400/80 uppercase tracking-wider">Leave</p>
                      <p className="text-lg font-black text-purple-400 mt-0.5">{summary.leave}</p>
                    </div>
                    <div className="bg-slate-950 border border-sky-500/20 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-sky-400/80 uppercase tracking-wider">WFH</p>
                      <p className="text-lg font-black text-sky-400 mt-0.5">{summary.wfh}</p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Total Hours</p>
                      <p className="text-lg font-black text-white mt-0.5">{totalHours > 0 ? totalHours.toFixed(1) : '--'}</p>
                    </div>
                  </div>
                );
              })()}

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Check In</th>
                    <th className="py-3 px-4">Check Out</th>
                    <th className="py-3 px-4">Work Hrs</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Breaks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-xs">
                  {attendance
                    .filter(a => a.employeeId === viewingHistoryEmployee.id || a.employeeCode === viewingHistoryEmployee.id)
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map(rec => (
                    <tr key={rec.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-300">{rec.date}</td>
                      <td className="py-3 px-4 font-mono text-slate-200">
                        {rec.checkInAt ? new Date(rec.checkInAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '--'}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-200">
                        {rec.checkOutAt ? new Date(rec.checkOutAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '--'}
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold text-slate-200">
                        {rec.workingMinutes > 0 ? `${Math.floor(rec.workingMinutes / 60)}h ${rec.workingMinutes % 60}m` : '--'}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-md border ${getStatusBadge(rec.status)}`}>
                          {rec.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[11px] text-slate-400">
                        Total: {rec.totalBreakMinutes || 0}m
                      </td>
                    </tr>
                  ))}
                  {attendance.filter(a => a.employeeId === viewingHistoryEmployee.id || a.employeeCode === viewingHistoryEmployee.id).length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-500 font-medium">No history available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
