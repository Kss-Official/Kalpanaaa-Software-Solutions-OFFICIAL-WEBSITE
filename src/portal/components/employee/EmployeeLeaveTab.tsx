import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Check, X, Clock, CalendarDays, Plus, Send, Calendar, ChevronRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHaptic } from '../../hooks/useHaptic';
export const EmployeeLeaveTab: React.FC = () => {
  const { activeEmployee, leaveRequests, submitLeaveRequest, cancelLeaveRequest } = useAuth();
  const { triggerHaptic } = useHaptic();
  
  const [type, setType] = useState<'Leave' | 'WFH'>('WFH');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [feedback, setFeedback] = useState<{success: boolean; message: string} | null>(null);

  const myRequests = leaveRequests.filter(r => r.employeeId === activeEmployee?.employeeId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate || !reason) {
      setFeedback({ success: false, message: 'Please fill out all fields.' });
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setFeedback({ success: false, message: 'End date cannot be before start date.' });
      return;
    }

    submitLeaveRequest({
      employeeId: activeEmployee!.employeeId,
      employeeName: activeEmployee!.fullName,
      type,
      startDate,
      endDate,
      reason
    });

    setFeedback({ success: true, message: `${type} request submitted successfully.` });
    setStartDate('');
    setEndDate('');
    setReason('');
    setShowForm(false);
  };

  return (
    <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 shadow-2xl max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4 mb-6">
        <div>
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-blue-400" />
            My Leave & WFH Requests
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">Submit new requests and track your approval status.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => { setType('WFH'); setShowForm(true); setFeedback(null); }}
            className={`flex items-center gap-2 px-4 py-2 ${showForm && type === 'WFH' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'} hover:bg-purple-500 hover:text-white font-bold text-xs rounded-xl transition-colors`}
          >
            <Plus className="w-4 h-4" />
            Request WFH
          </button>
          <button
            onClick={() => { setType('Leave'); setShowForm(true); setFeedback(null); }}
            className={`flex items-center gap-2 px-4 py-2 ${showForm && type === 'Leave' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-300'} hover:bg-orange-500 hover:text-white font-bold text-xs rounded-xl transition-colors`}
          >
            <Plus className="w-4 h-4" />
            Request Leave
          </button>
          {showForm && (
            <button
              onClick={() => { setShowForm(false); setFeedback(null); }}
              className="flex items-center justify-center p-2 bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded-xl transition-colors"
              title="Cancel Request"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {feedback && (
        <div className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-2 ${feedback.success ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
          {feedback.success ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
          {feedback.message}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800/60 space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Request Type</label>
              <div className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-bold flex items-center h-[42px]">
                {type === 'WFH' ? (
                  <span className="text-purple-400">Work From Home (WFH)</span>
                ) : (
                  <span className="text-orange-400">Time Off / Leave</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 outline-none [color-scheme:dark]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 outline-none [color-scheme:dark]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Reason / Notes</label>
            <textarea
              value={reason}
              onChange={e => setReason(e.target.value)}
              placeholder="Provide a brief explanation for your request..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-blue-900/20"
            >
              <Send className="w-4 h-4" />
              Submit Request
            </button>
          </div>
        </form>
      )}

      <div className="mt-8">
        <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[var(--accent-blue)]" />
          Request History
        </h3>
        
        <div className="space-y-4">
          {myRequests.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 flex flex-col items-center justify-center text-center bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg-elevated)] flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-[var(--text-muted)]" />
              </div>
              <h3 className="text-[var(--text-primary)] font-bold text-sm">No requests yet</h3>
              <p className="text-[var(--text-tertiary)] text-xs mt-1 max-w-[200px]">When you apply for leave or WFH, it will appear here.</p>
            </motion.div>
          ) : (
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
              className="space-y-3"
            >
              {myRequests.map((req) => {
                const statusColor = 
                  req.status === 'Approved' ? 'var(--accent-emerald)' : 
                  req.status === 'Rejected' ? 'var(--accent-rose)' : 
                  req.status === 'Cancelled' ? 'var(--text-tertiary)' : 
                  'var(--accent-amber)';

                const Icon = req.status === 'Approved' ? Check : (req.status === 'Rejected' || req.status === 'Cancelled') ? X : Clock;

                return (
                  <motion.div 
                    key={req.id} 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
                    }}
                    className="bg-[var(--bg-tertiary)] rounded-2xl border border-[var(--border-subtle)] p-4 shadow-[var(--shadow-sm)] flex flex-col relative overflow-hidden"
                    style={{ borderLeft: `4px solid ${statusColor}` }}
                  >
                    <div className="absolute top-0 right-0 h-[60px] w-[150px] opacity-10 pointer-events-none" style={{ background: `radial-gradient(ellipse at top right, ${statusColor}, transparent)` }} />
                    
                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div>
                        <span className="font-mono text-[10px] text-[var(--text-tertiary)] font-black uppercase tracking-wider mb-1 block">
                          {req.id}
                        </span>
                        <div className="text-[var(--text-primary)] font-bold text-base flex items-center gap-2 tabular-nums">
                          {req.startDate}
                          {req.startDate !== req.endDate && (
                            <>
                              <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                              {req.endDate}
                            </>
                          )}
                        </div>
                      </div>
                      <span 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: statusColor, backgroundColor: `${statusColor}15`, border: `1px solid ${statusColor}30` }}
                      >
                        <Icon className="w-3 h-3" />
                        {req.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 relative z-10">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                        req.type === 'WFH' ? 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]' : 'bg-[var(--accent-violet)]/10 text-[var(--accent-violet)]'
                      }`}>
                        {req.type}
                      </span>
                      
                      {req.status !== 'Pending' ? (
                        <span className="text-[var(--text-tertiary)] text-[10px] max-w-[200px] truncate" title={req.reviewNotes || `Reviewed by ${req.reviewedBy}`}>
                          {req.reviewNotes || `Reviewed by ${req.reviewedBy}`}
                        </span>
                      ) : (
                        <button 
                          onClick={() => {
                            triggerHaptic('warning');
                            if (window.confirm(`Cancel this ${req.type} request for ${req.startDate}?`)) {
                              cancelLeaveRequest(req.id);
                              setFeedback({ success: true, message: `${req.type} request cancelled successfully.` });
                              setTimeout(() => setFeedback(null), 3000);
                            }
                          }} 
                          className="text-[10px] font-bold text-[var(--accent-rose)] bg-[var(--accent-rose)]/10 border border-[var(--accent-rose)]/20 px-3 py-1.5 rounded-lg active:scale-95 transition-all hover:bg-[var(--accent-rose)]/20 flex items-center gap-1"
                        >
                          <X className="w-3 h-3" /> Cancel Request
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
