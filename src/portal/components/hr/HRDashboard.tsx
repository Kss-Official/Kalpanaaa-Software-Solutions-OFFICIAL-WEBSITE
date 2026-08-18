import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { getLocalDateString, isCeoOrCto } from '../../lib/attendanceEngine';
import { motion } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock, 
  CalendarCheck2, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Banknote
} from 'lucide-react';

interface HRDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const HRDashboard: React.FC<HRDashboardProps> = ({ onNavigateTab }) => {
  const { employees, attendance, leaveRequests } = useAuth();
  
  const todayStr = getLocalDateString();
  const regularEmployees = employees.filter(e => !isCeoOrCto(e));
  const todayAttendance = attendance.filter(a => 
    a.date === todayStr && 
    !isCeoOrCto(employees.find(e => e.id === a.employeeId || e.employeeId === a.employeeCode)) &&
    !a.employeeName?.toLowerCase().includes('akshit') &&
    !a.employeeName?.toLowerCase().includes('gaurav')
  );

  const totalEmployees = regularEmployees.length;
  const presentCount = todayAttendance.filter(a => a.status === 'Present' || a.status === 'Late' || a.checkInAt !== null).length;
  const lateCount = todayAttendance.filter(a => a.status === 'Late').length;
  const leaveCount = leaveRequests.filter(r => r.status === 'Approved' && r.type === 'Leave').length;
  const wfhCount = 0; // Explicitly set to zero per user directive
  const pendingApprovalsCount = leaveRequests.filter(r => r.status === 'Pending').length;

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Zone 1: Action Bar (Top) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            HR Operations Control Room
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Executive HR Overview</h1>
          <p className="text-xs text-slate-400 mt-0.5">Real-time personnel statistics, attendance metrics, and pending approvals.</p>
        </div>

        {/* Smart Alert Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateTab('leave_approvals')}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{pendingApprovalsCount} Approvals Pending</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => onNavigateTab('reports')}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/10 border border-blue-500/30 text-blue-300 hover:bg-blue-600/20 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Run Monthly Report</span>
          </button>
        </div>
      </div>

      {/* Zone 2: Stripe-Style KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Present Today */}
        <div 
          onClick={() => onNavigateTab('attendance')}
          className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-5 rounded-2xl shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Present Today</span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +2 ▲
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-white tabular-nums">{presentCount}<span className="text-sm text-slate-500 font-bold"> / {totalEmployees}</span></span>
            {/* Inline SVG Sparkline */}
            <svg className="w-16 h-8 text-emerald-400" viewBox="0 0 100 40">
              <path fill="none" stroke="currentColor" strokeWidth="3" d="M0,35 Q20,20 40,25 T80,10 T100,5" />
            </svg>
          </div>
        </div>

        {/* Card 2: Late Arrivals */}
        <div 
          onClick={() => onNavigateTab('attendance')}
          className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Late Arrivals</span>
            <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
              {lateCount} Flagged
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-white tabular-nums">{lateCount}</span>
            <svg className="w-16 h-8 text-amber-400" viewBox="0 0 100 40">
              <path fill="none" stroke="currentColor" strokeWidth="3" d="M0,10 Q30,30 60,15 T100,25" />
            </svg>
          </div>
        </div>

        {/* Card 3: Work From Home */}
        <div 
          onClick={() => onNavigateTab('leave_approvals')}
          className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 p-5 rounded-2xl shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active WFH</span>
            <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
              Approved
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-white tabular-nums">{wfhCount}</span>
            <svg className="w-16 h-8 text-blue-400" viewBox="0 0 100 40">
              <path fill="none" stroke="currentColor" strokeWidth="3" d="M0,25 Q40,5 70,20 T100,10" />
            </svg>
          </div>
        </div>

        {/* Card 4: Monthly Salary Run */}
        <div 
          onClick={() => onNavigateTab('reports')}
          className="bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 p-5 rounded-2xl shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Salary Run</span>
            <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
              Ready
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-white tabular-nums">₹22.5L</span>
            <Banknote className="w-8 h-8 text-purple-400 opacity-60" />
          </div>
        </div>

      </div>

      {/* Zone 3: Split View — Pending Approvals Inbox & Today's Attendance Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Pending Approvals Inbox (60%) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" /> Pending Approvals Inbox
            </h3>
            <button 
              onClick={() => onNavigateTab('leave_approvals')}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All ({pendingApprovalsCount}) →
            </button>
          </div>

          <div className="space-y-3 py-4">
            {leaveRequests.filter(r => r.status === 'Pending').length === 0 ? (
              <div className="py-8 text-center text-slate-500 border border-slate-800 border-dashed rounded-2xl bg-slate-950/40">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2 opacity-60" />
                <p className="text-xs font-bold text-slate-400">All pending approvals cleared!</p>
              </div>
            ) : (
              leaveRequests.filter(r => r.status === 'Pending').slice(0, 4).map(req => (
                <div key={req.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white">{req.employeeName}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${
                        req.type === 'Leave' ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                      }`}>
                        {req.type}
                      </span>
                      {req.pmRecommendation && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          PM: {req.pmRecommendation}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">{req.reason} ({req.startDate} to {req.endDate})</p>
                  </div>

                  <button
                    onClick={() => onNavigateTab('leave_approvals')}
                    className="px-3 py-1.5 bg-blue-600/20 text-blue-300 border border-blue-500/30 font-bold text-[10px] rounded-lg hover:bg-blue-600/30 transition-colors"
                  >
                    Review
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Today's Live Attendance Feed (40%) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800">
            <UserCheck className="w-4 h-4 text-emerald-400" /> Today's Live Check-Ins
          </h3>

          <div className="space-y-3 pt-4 max-h-[320px] overflow-y-auto pr-1">
            {todayAttendance.length === 0 ? (
              <div className="py-8 text-center text-slate-500">
                <p className="text-xs font-semibold">No check-in records for today yet.</p>
              </div>
            ) : (
              todayAttendance.slice(0, 6).map(rec => (
                <div key={rec.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${rec.status === 'Present' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <div>
                      <p className="text-xs font-bold text-white mb-0.5">{rec.employeeName}</p>
                      <span className="text-[10px] text-slate-500 font-mono">{rec.department}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    {rec.checkInAt ? new Date(rec.checkInAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--'}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
