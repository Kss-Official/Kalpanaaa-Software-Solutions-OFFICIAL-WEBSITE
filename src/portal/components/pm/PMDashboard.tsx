import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'motion/react';
import { 
  Kanban, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  Calendar, 
  TrendingUp, 
  ChevronRight,
  Flame,
  FileText,
  UserCheck
} from 'lucide-react';
import { Project, ProjectTask } from '../../types';

interface PMDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const PMDashboard: React.FC<PMDashboardProps> = ({ onNavigateTab }) => {
  const { employees, leaveRequests, activeEmployee } = useAuth();

  // Mock projects & tasks data for PM command center
  const projects: Project[] = [
    {
      id: 'proj-1',
      name: 'Core API & Auth Engine Refactor',
      description: 'Optimizing Firestore indexing and sub-100ms response times.',
      client: 'Internal Platform',
      startDate: '2026-07-01',
      deadline: '2026-08-20',
      status: 'In Progress',
      progressPercent: 72,
      teamMemberIds: ['emp-1', 'emp-2'],
      managerId: activeEmployee?.id || 'pm-1',
      createdAt: '2026-07-01',
      updatedAt: '2026-08-01'
    },
    {
      id: 'proj-2',
      name: 'PWA Biometric & Face ID Integration',
      description: 'Client-side TinyFaceDetector and MediaPipe liveness mesh.',
      client: 'Enterprise HRMS',
      startDate: '2026-07-15',
      deadline: '2026-08-15',
      status: 'On Track',
      progressPercent: 88,
      teamMemberIds: ['emp-3', 'emp-4'],
      managerId: activeEmployee?.id || 'pm-1',
      createdAt: '2026-07-15',
      updatedAt: '2026-08-01'
    },
    {
      id: 'proj-3',
      name: 'Executive Dashboard Analytics',
      description: 'Stripe KPI card layout and SVG sparklines.',
      client: 'Management Team',
      startDate: '2026-08-01',
      deadline: '2026-08-30',
      status: 'At Risk',
      progressPercent: 35,
      teamMemberIds: ['emp-1'],
      managerId: activeEmployee?.id || 'pm-1',
      createdAt: '2026-08-01',
      updatedAt: '2026-08-05'
    }
  ];

  const pendingTeamRequests = leaveRequests.filter(r => r.status === 'Pending');

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Top Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Kanban className="w-4 h-4" />
            Project Manager Command Center
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Engineering Sprint & Workload Control</h1>
          <p className="text-xs text-slate-400 mt-0.5">Monitor project health, balance team capacity, and send HR leave recommendations.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('pm_projects')}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-blue-900/40 transition-all cursor-pointer"
          >
            <Kanban className="w-4 h-4" />
            <span>Open Task Kanban Board</span>
          </button>
        </div>
      </div>

      {/* Zone 1: Project Health Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map(proj => (
          <div
            key={proj.id}
            onClick={() => onNavigateTab('pm_projects')}
            className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl shadow-md transition-all cursor-pointer group space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                proj.status === 'On Track' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                proj.status === 'In Progress' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' :
                'bg-amber-500/10 border-amber-500/30 text-amber-400'
              }`}>
                ● {proj.status}
              </span>
              <span className="text-[10px] font-mono text-slate-400">Due {proj.deadline}</span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{proj.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">{proj.description}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>Sprint Progress</span>
                <span className="font-mono text-white">{proj.progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full rounded-full ${
                    proj.progressPercent > 80 ? 'bg-emerald-500' : proj.progressPercent > 50 ? 'bg-blue-500' : 'bg-amber-500'
                  }`} 
                  style={{ width: `${proj.progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zone 2: Team Workload Heatmap Grid */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" /> Team Capacity & Workload Heatmap (Linear / Monday Style)
          </h3>
          <span className="text-xs text-slate-400 font-mono">This Week's Allocation</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-slate-500 font-bold uppercase text-[10px]">
                <th className="py-2 px-3">Team Member</th>
                <th className="py-2 px-2 text-center">Mon</th>
                <th className="py-2 px-2 text-center">Tue</th>
                <th className="py-2 px-2 text-center">Wed</th>
                <th className="py-2 px-2 text-center">Thu</th>
                <th className="py-2 px-2 text-center">Fri</th>
                <th className="py-2 px-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 font-semibold">
              {employees.slice(0, 5).map((emp, idx) => (
                <tr key={emp.id} className="hover:bg-slate-800/30">
                  <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-blue-400">
                      {emp.fullName.charAt(0)}
                    </div>
                    <span>{emp.fullName}</span>
                  </td>
                  {[2, 4, 3, 5, 2].map((hours, i) => (
                    <td key={i} className="py-3 px-2 text-center">
                      <span className={`inline-block w-8 h-8 rounded-lg font-mono font-bold text-xs leading-8 ${
                        hours >= 5 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' :
                        hours >= 3 ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}>
                        {hours}h
                      </span>
                    </td>
                  ))}
                  <td className="py-3 px-3 text-right">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      Optimal
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Zone 3: Pending Team Requests for PM Recommendation */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md">
        <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <FileText className="w-4 h-4 text-purple-400" /> Team Leave & WFH Approval Pipeline (PM Recommendations)
        </h3>

        <div className="space-y-3 pt-4">
          {pendingTeamRequests.length === 0 ? (
            <div className="py-6 text-center text-slate-500 text-xs">
              No pending leave or WFH requests requiring PM review.
            </div>
          ) : (
            pendingTeamRequests.map(req => (
              <div key={req.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white">{req.employeeName}</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md font-mono">{req.type}</span>
                  </div>
                  <p className="text-xs text-slate-400">{req.reason} ({req.startDate} → {req.endDate})</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert(`Recommended approval for ${req.employeeName}. Submitted to HR!`)}
                    className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Recommend Approval
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
};
