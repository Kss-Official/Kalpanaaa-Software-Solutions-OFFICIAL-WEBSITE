import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Check, X, Clock, CalendarDays, FileText, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHaptic } from '../../hooks/useHaptic';

export const LeaveApprovalsView: React.FC = () => {
  const { leaveRequests, updateLeaveRequestStatus, activeEmployee, employees } = useAuth();
  const { triggerHaptic } = useHaptic();

  const handleApprove = (id: string) => {
    triggerHaptic('success');
    updateLeaveRequestStatus(id, 'Approved', activeEmployee?.fullName || 'Admin');
  };

  const handleReject = (id: string) => {
    triggerHaptic('error');
    updateLeaveRequestStatus(id, 'Rejected', activeEmployee?.fullName || 'Admin');
  };

  const pendingRequests = leaveRequests.filter(req => req.status === 'Pending');
  const pastRequests = leaveRequests.filter(req => req.status !== 'Pending');

  const [activeTab, setActiveTab] = useState<'pending' | 'past'>('pending');

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] p-6 rounded-3xl shadow-[var(--shadow-md)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-blue)]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20">
              <FileText className="w-6 h-6" />
            </div>
            Leave & WFH Sanctions
          </h1>
          <p className="text-[var(--text-secondary)] text-sm mt-2 font-medium">Review and manage employee leave and remote work requests.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-[var(--bg-elevated)] p-1.5 rounded-xl border border-[var(--border-subtle)] relative z-10 w-full sm:w-auto">
          <button
            onClick={() => { triggerHaptic(); setActiveTab('pending'); }}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'pending' 
                ? 'bg-[var(--accent-blue)] text-white shadow-[var(--shadow-glow-blue)]' 
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Pending {pendingRequests.length > 0 && `(${pendingRequests.length})`}
          </button>
          <button
            onClick={() => { triggerHaptic(); setActiveTab('past'); }}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'past' 
                ? 'bg-[var(--accent-blue)] text-white shadow-[var(--shadow-glow-blue)]' 
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            History
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {activeTab === 'pending' && pendingRequests.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-20 flex flex-col items-center justify-center text-center bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-3xl"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center border border-[var(--border-subtle)] shadow-[var(--shadow-md)]">
                <Calendar className="w-10 h-10 text-[var(--text-tertiary)] opacity-50" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">You're All Caught Up!</h3>
              <p className="text-[var(--text-secondary)] text-sm max-w-xs">There are no pending leave or WFH requests to review at this time.</p>
            </motion.div>
          )}

          {activeTab === 'past' && pastRequests.length === 0 && (
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-20 flex flex-col items-center justify-center text-center bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-3xl"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center border border-[var(--border-subtle)] shadow-[var(--shadow-md)]">
                <FileText className="w-10 h-10 text-[var(--text-tertiary)] opacity-50" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">No History</h3>
              <p className="text-[var(--text-secondary)] text-sm max-w-xs">No processed requests found in the system yet.</p>
            </motion.div>
          )}

          {(activeTab === 'pending' ? pendingRequests : pastRequests).map((req, i) => {
            const emp = employees.find(e => e.id === req.employeeId || e.employeeId === req.employeeId);
            const isWfh = req.type === 'WFH';
            const statusColor = req.status === 'Approved' ? 'var(--accent-emerald)' : req.status === 'Rejected' ? 'var(--accent-rose)' : req.status === 'Cancelled' ? 'var(--text-tertiary)' : 'var(--accent-amber)';

            return (
              <motion.div
                key={req.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 300, damping: 30 }}
                className="relative bg-[var(--bg-tertiary)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-[var(--shadow-md)] group"
              >
                {req.status === 'Pending' && (
                  <div className="absolute inset-y-0 left-0 w-24 bg-[var(--accent-emerald)] flex flex-col items-center justify-center text-black font-bold z-0">
                    <Check className="w-8 h-8 mb-1" />
                    <span className="text-[10px] uppercase tracking-widest">Approve</span>
                  </div>
                )}
                {req.status === 'Pending' && (
                  <div className="absolute inset-y-0 right-0 w-24 bg-[var(--accent-rose)] flex flex-col items-center justify-center text-white font-bold z-0">
                    <X className="w-8 h-8 mb-1" />
                    <span className="text-[10px] uppercase tracking-widest">Reject</span>
                  </div>
                )}

                <motion.div
                  drag={req.status === 'Pending' ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (req.status !== 'Pending') return;
                    if (info.offset.x > 100) handleApprove(req.id);
                    else if (info.offset.x < -100) handleReject(req.id);
                  }}
                  className="relative z-10 bg-[var(--bg-tertiary)] p-6 sm:p-8 w-full flex flex-col gap-5 touch-pan-y border-l-4"
                  style={{ borderLeftColor: isWfh ? 'var(--accent-violet)' : 'var(--accent-amber)' }}
                >
                  {req.status === 'Pending' && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-50 hidden md:flex">
                      <ChevronLeft className="w-4 h-4 text-[var(--accent-rose)]" />
                      <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">Swipe to action</span>
                      <ChevronRight className="w-4 h-4 text-[var(--accent-emerald)]" />
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={emp?.profilePhotoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(req.employeeName || 'User')}&background=111118&color=fff`}
                        alt={req.employeeName}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-[var(--bg-elevated)] shadow-[var(--shadow-sm)]"
                      />
                      <div>
                        <div className="text-lg font-extrabold text-[var(--text-primary)] leading-tight">{req.employeeName}</div>
                        <div className="text-xs text-[var(--text-secondary)] font-medium mt-1 flex items-center gap-2">
                          <span className="font-mono bg-[var(--bg-elevated)] px-1.5 py-0.5 rounded text-[var(--text-tertiary)]">{req.employeeId}</span>
                          <span>•</span>
                          <span>{emp?.department || 'Unknown Dept'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                        isWfh 
                          ? 'bg-[var(--accent-violet)]/10 text-[var(--accent-violet)] border-[var(--accent-violet)]/20' 
                          : 'bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/20'
                      }`}>
                        {req.type}
                      </span>
                      {req.status !== 'Pending' && (
                        <span 
                          className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border flex items-center gap-1.5"
                          style={{ color: statusColor, backgroundColor: `${statusColor}15`, borderColor: `${statusColor}30` }}
                        >
                          {req.status === 'Approved' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                          {req.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[var(--bg-elevated)] rounded-2xl p-4 border border-[var(--border-subtle)]">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider flex items-center gap-1.5">
                        <CalendarDays className="w-3 h-3" /> Duration
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {req.startDate} {req.startDate !== req.endDate && `→ ${req.endDate}`}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3 h-3" /> Reason
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {req.reason || 'No reason provided'}
                      </span>
                    </div>
                  </div>

                  {req.status === 'Pending' && (
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => handleReject(req.id)}
                        className="flex-1 py-3 bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] border border-[var(--accent-rose)]/20 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-[var(--accent-rose)]/20 cursor-pointer"
                      >
                        <X className="w-4 h-4" /> Reject
                      </button>
                      <button
                        onClick={() => handleApprove(req.id)}
                        className="flex-1 py-3 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/20 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-[var(--accent-emerald)]/20 cursor-pointer"
                      >
                        <Check className="w-4 h-4" /> Approve
                      </button>
                    </div>
                  )}

                  {req.status !== 'Pending' && req.reviewedBy && (
                    <div className="text-[10px] font-medium text-[var(--text-tertiary)] mt-1 flex items-center justify-end">
                      Reviewed by {req.reviewedBy}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
