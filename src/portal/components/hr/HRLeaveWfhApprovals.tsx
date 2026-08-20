import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Calendar, 
  User, 
  Check, 
  X,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { LeaveRequest } from '../../types';

export const HRLeaveWfhApprovals: React.FC = () => {
  const { leaveRequests, updateLeaveRequestStatus, activeEmployee } = useAuth();
  const [filterType, setFilterType] = useState<'All' | 'Leave' | 'WFH'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Approved' | 'Rejected' | 'Cancelled'>('Pending');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRequests = leaveRequests.filter(req => {
    const matchesType = filterType === 'All' || req.type === filterType;
    const matchesStatus = filterStatus === 'All' || req.status === filterStatus;
    const matchesSearch = (req.employeeName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (req.reason || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const handleApprove = (id: string) => {
    updateLeaveRequestStatus(id, 'Approved', activeEmployee?.fullName || 'HR Administrator');
  };

  const handleReject = (id: string) => {
    updateLeaveRequestStatus(id, 'Rejected', activeEmployee?.fullName || 'HR Administrator');
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            Leave & WFH Approvals Inbox
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">Review, recommend, and sanction workforce time-off and work-from-home requests.</p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search employee or reason..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-hidden focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          {['All', 'Leave', 'WFH'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                filterType === type 
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md' 
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {['Pending', 'Approved', 'Rejected', 'Cancelled', 'All'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status as any)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                filterStatus === status 
                  ? 'bg-slate-800 text-white border-slate-700' 
                  : 'bg-slate-950 text-slate-500 border-slate-900 hover:text-slate-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Inbox Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Employee</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Dates</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4">PM Status</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    <p className="text-sm font-semibold">No requests match the current filters.</p>
                  </td>
                </tr>
              ) : (
                filteredRequests.map(req => (
                  <tr key={req.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{req.employeeName}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] border ${
                        req.type === 'Leave' ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                      }`}>
                        {req.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300 text-[11px]">
                      {req.startDate} → {req.endDate}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 max-w-xs truncate">
                      {req.reason}
                    </td>
                    <td className="py-3.5 px-4">
                      {req.pmRecommendation ? (
                        <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] border ${
                          req.pmRecommendation === 'Approved' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                        }`}>
                          PM: {req.pmRecommendation}
                        </span>
                      ) : (
                        <span className="text-slate-500 text-[10px]">Pending PM</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`font-bold text-[10px] px-2.5 py-0.5 rounded-full border ${
                        req.status === 'Approved' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                        req.status === 'Rejected' ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' :
                        req.status === 'Cancelled' ? 'bg-slate-600/10 border-slate-600/30 text-slate-400' :
                        'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {req.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleApprove(req.id)}
                            className="p-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/40 border border-emerald-500/30 rounded-lg transition-colors cursor-pointer"
                            title="Approve Request"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleReject(req.id)}
                            className="p-1.5 bg-rose-600/20 text-rose-400 hover:bg-rose-600/40 border border-rose-500/30 rounded-lg transition-colors cursor-pointer"
                            title="Reject Request"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-500 font-mono">Reviewed</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
