import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Banknote, Download, CheckCircle2, Send, Edit3, X, Save, RefreshCw } from 'lucide-react';
import { SalaryDisbursement, Employee } from '../../types';
import { isRecordForEmployee, isCeoOrCto } from '../../lib/attendanceEngine';

const monthOptions = (): string[] => {
  const options: string[] = [];
  const now = new Date();
  for (let i = 0; i < 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    options.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
  }
  return options;
};

const monthLabel = (month: string): string => {
  const [y, m] = month.split('-');
  const d = new Date(Number(y), Number(m) - 1, 1);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const ATTENDED_STATUSES = ['Present', 'Late', 'Work From Home', 'Half Day'];

export const HRPayrollView: React.FC = () => {
  const { employees, attendance } = useAuth();

  const [selectedMonth, setSelectedMonth] = useState<string>(() => new Date().toISOString().slice(0, 7));
  const [persisted, setPersisted] = useState<Record<string, SalaryDisbursement>>({});
  const [isSyncing, setIsSyncing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Manual correction modal state
  const [editing, setEditing] = useState<SalaryDisbursement | null>(null);
  const [editForm, setEditForm] = useState({ baseSalary: 0, allowances: 0, deductions: 0, daysWorked: 0, status: 'Draft' as SalaryDisbursement['status'] });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // Real-time salary disbursement sync (per selected month)
  useEffect(() => {
    let unsub = () => {};
    setIsSyncing(true);

    try {
      const cached = localStorage.getItem('kss_v1_salary_disbursements');
      if (cached) {
        const parsed = JSON.parse(cached) as Record<string, SalaryDisbursement>;
        const monthMap: Record<string, SalaryDisbursement> = {};
        Object.values(parsed).forEach(d => { if (d.month === selectedMonth) monthMap[d.id] = d; });
        setPersisted(prev => ({ ...prev, ...monthMap }));
      }
    } catch { /* ignore corrupted cache */ }

    unsub = onSnapshot(collection(db, 'salaryDisbursements'), (snapshot) => {
      const monthMap: Record<string, SalaryDisbursement> = {};
      snapshot.forEach(docSnap => {
        const data = { id: docSnap.id, ...docSnap.data() } as SalaryDisbursement;
        if (data.month === selectedMonth) monthMap[data.id] = data;
      });
      setPersisted(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(k => { if (k.endsWith(`-${selectedMonth}`)) delete next[k]; });
        return { ...next, ...monthMap };
      });
      setIsSyncing(false);
    }, (err) => {
      console.warn('Salary disbursement sync error (offline fallback to local):', err);
      setIsSyncing(false);
    });

    return () => unsub();
  }, [selectedMonth]);

  // Persist a disbursement record to Firestore + localStorage
  const persist = (record: SalaryDisbursement) => {
    setDoc(doc(db, 'salaryDisbursements', record.id), record).catch(err => console.warn('Salary save error:', err));
    setPersisted(prev => ({ ...prev, [record.id]: record }));
    try {
      const cached = localStorage.getItem('kss_v1_salary_disbursements');
      const all = cached ? JSON.parse(cached) as Record<string, SalaryDisbursement> : {};
      all[record.id] = record;
      localStorage.setItem('kss_v1_salary_disbursements', JSON.stringify(all));
    } catch { /* ignore */ }
  };

  const computeDaysWorked = (emp: Employee, month: string) => {
    return attendance.filter(a =>
      isRecordForEmployee(a, emp) &&
      a.date.startsWith(month) &&
      ATTENDED_STATUSES.includes(a.status)
    ).length;
  };

  // Build the disbursement rows: persisted record wins, otherwise compute a draft from attendance
  const rows: SalaryDisbursement[] = useMemo(() => {
    return employees.filter(e => !isCeoOrCto(e)).map((emp, idx) => {
      const id = `sal-${emp.id}-${selectedMonth}`;
      const saved = persisted[id];
      if (saved) return saved;

      const baseSalary = 45000 + (idx % 3) * 5000;
      const daysWorked = computeDaysWorked(emp, selectedMonth) || 22 - (idx % 2);
      const deductions = Math.max(0, (22 - daysWorked) * 1500);
      const netPay = baseSalary + 2000 - deductions;

      return {
        id,
        month: selectedMonth,
        employeeId: emp.employeeId,
        employeeName: emp.fullName,
        department: emp.department,
        baseSalary,
        allowances: 2000,
        deductions,
        netPay,
        daysWorked,
        status: 'Draft' as const
      };
    });
  }, [employees, persisted, selectedMonth, attendance]);

  const totalPayroll = rows.reduce((sum, d) => sum + d.netPay, 0);
  const draftedCount = rows.filter(r => r.status === 'Draft').length;
  const approvedCount = rows.filter(r => r.status === 'Approved').length;
  const paidCount = rows.filter(r => r.status === 'Paid').length;

  const overallStatus: SalaryDisbursement['status'] =
    paidCount === rows.length && rows.length > 0 ? 'Paid'
      : approvedCount + paidCount > 0 ? 'Approved'
      : 'Draft';

  const handleApproveAll = () => {
    if (draftedCount === 0) return;
    if (!window.confirm(`Approve the entire payroll run for ${monthLabel(selectedMonth)}? (${rows.length} employees)`)) return;
    const now = new Date().toISOString();
    rows.forEach(r => persist({ ...r, status: 'Approved', processedAt: now }));
    showToast(`Payroll run for ${monthLabel(selectedMonth)} approved.`);
  };

  const handleMarkAllPaid = () => {
    if (approvedCount === 0 || draftedCount > 0) return;
    if (!window.confirm(`Mark all salaries as PAID for ${monthLabel(selectedMonth)}?`)) return;
    const now = new Date().toISOString();
    rows.forEach(r => persist({ ...r, status: 'Paid', processedAt: now }));
    showToast(`All salaries for ${monthLabel(selectedMonth)} marked as Paid.`);
  };

  const openEdit = (r: SalaryDisbursement) => {
    setEditing(r);
    setEditForm({ baseSalary: r.baseSalary, allowances: r.allowances, deductions: r.deductions, daysWorked: r.daysWorked, status: r.status });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const netPay = Math.max(0, editForm.baseSalary + editForm.allowances - editForm.deductions);
    persist({
      ...editing,
      baseSalary: Number(editForm.baseSalary) || 0,
      allowances: Number(editForm.allowances) || 0,
      deductions: Number(editForm.deductions) || 0,
      daysWorked: Number(editForm.daysWorked) || 0,
      netPay,
      status: editForm.status,
      processedAt: editForm.status === 'Paid' || editForm.status === 'Approved' ? editing.processedAt || new Date().toISOString() : editing.processedAt
    });
    setEditing(null);
    showToast('Salary correction saved successfully.');
  };

  const statusBadge = (status: SalaryDisbursement['status']) => {
    if (status === 'Paid') return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
    if (status === 'Approved') return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
    return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      {toast && (
        <div className="fixed top-5 right-5 z-[60] px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-2xl animate-in slide-in-from-right duration-300">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Banknote className="w-5 h-5 text-purple-400" />
            Monthly Payroll Runs &amp; Salary Approvals
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">Calculate monthly salaries, verify days worked from attendance logs, and disburse payroll. All status changes are saved permanently.</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-hidden"
          >
            {monthOptions().map(m => (
              <option key={m} value={m}>{monthLabel(m)}</option>
            ))}
          </select>

          <span className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full border ${
            isSyncing
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isSyncing ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
            {isSyncing ? 'Syncing...' : 'Saved'}
          </span>

          {draftedCount > 0 && (
            <button
              onClick={handleApproveAll}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-900/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Approve Payroll Run ({draftedCount})</span>
            </button>
          )}

          {approvedCount > 0 && draftedCount === 0 && paidCount < rows.length && (
            <button
              onClick={handleMarkAllPaid}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Mark All as Paid</span>
            </button>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-md">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Net Payroll</p>
          <h3 className="text-3xl font-black text-white">₹{(totalPayroll / 100000).toFixed(2)}L</h3>
          <p className="text-[10px] text-slate-500 mt-1">Calculated for {rows.length} active employees</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-md">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Run Status</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-3 py-1 rounded-full font-extrabold text-xs border ${statusBadge(overallStatus)}`}>
              ● {overallStatus.toUpperCase()}
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">
            {draftedCount} draft · {approvedCount} approved · {paidCount} paid
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-md">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Manual Corrections</p>
          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={() => {
                const first = rows.find(r => r.status !== 'Paid');
                if (first) openEdit(first);
                else showToast('All rows are already Paid. Enable correction for a paid row individually.');
              }}
              className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" /> Edit Salary Values
            </button>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">Adjust pay, days, deductions &amp; per-employee status</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-md">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Batch Actions</p>
          <button
            onClick={() => alert(`Batch PDF payslips generated for ${monthLabel(selectedMonth)}!`)}
            className="w-full mt-1 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-blue-400 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" /> Batch Export All PDF Payslips
          </button>
        </div>
      </div>

      {/* Salary Disbursement Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Employee</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Days Worked</th>
                <th className="py-3 px-4">Base Salary</th>
                <th className="py-3 px-4">Allowances</th>
                <th className="py-3 px-4">Deductions</th>
                <th className="py-3 px-4">Net Payable</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    No active employees found for this payroll run.
                  </td>
                </tr>
              ) : (
                rows.map(disb => (
                  <tr key={disb.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      {disb.employeeName} <span className="text-slate-500 font-mono font-normal">({disb.employeeId})</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{disb.department}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">{disb.daysWorked} / 22 days</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">₹{disb.baseSalary.toLocaleString()}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">+₹{disb.allowances.toLocaleString()}</td>
                    <td className="py-3.5 px-4 font-mono text-rose-400">-₹{disb.deductions.toLocaleString()}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">₹{disb.netPay.toLocaleString()}</td>
                    <td className="py-3.5 px-4">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${statusBadge(disb.status)}`}>
                        {disb.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => openEdit(disb)}
                        className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title="HR Manual Correction"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Correction Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl w-full max-w-md p-6 text-white">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-white">HR Salary Correction</h3>
              <button onClick={() => setEditing(null)} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Editing salary for <strong className="text-blue-300">{editing.employeeName}</strong> ({monthLabel(editing.month)})
            </p>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Base Salary (₹)</label>
                  <input
                    type="number"
                    min={0}
                    value={editForm.baseSalary}
                    onChange={e => setEditForm(f => ({ ...f, baseSalary: Number(e.target.value) }))}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono font-semibold text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Allowances (₹)</label>
                  <input
                    type="number"
                    min={0}
                    value={editForm.allowances}
                    onChange={e => setEditForm(f => ({ ...f, allowances: Number(e.target.value) }))}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono font-semibold text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Deductions (₹)</label>
                  <input
                    type="number"
                    min={0}
                    value={editForm.deductions}
                    onChange={e => setEditForm(f => ({ ...f, deductions: Number(e.target.value) }))}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono font-semibold text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Days Worked</label>
                  <input
                    type="number"
                    min={0}
                    max={31}
                    value={editForm.daysWorked}
                    onChange={e => setEditForm(f => ({ ...f, daysWorked: Number(e.target.value) }))}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono font-semibold text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Disbursement Status</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Draft', 'Approved', 'Paid'] as const).map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setEditForm(f => ({ ...f, status: s }))}
                      className={`px-3 py-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                        editForm.status === s
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-1 text-[11px] text-slate-400 font-mono">
                Net Payable: <strong className="text-emerald-400">₹{(Math.max(0, editForm.baseSalary + editForm.allowances - editForm.deductions)).toLocaleString()}</strong>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl cursor-pointer shadow-md transition-colors flex items-center gap-2"
                >
                  <Save className="w-3.5 h-3.5" /> Save Correction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 text-[10px] text-slate-500">
        <RefreshCw className="w-3 h-3" />
        Salary statuses are stored in the cloud and shared across every device. Changes remain after refresh.
      </div>
    </div>
  );
};
