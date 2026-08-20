import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Banknote, Download, FileText, Calendar, TrendingUp } from 'lucide-react';

export const EmployeePayslips: React.FC = () => {
  const { activeEmployee } = useAuth();
  
  // Mock data for payslips since it's not fully implemented in backend yet
  const payslips = [
    { id: '1', month: 'July 2026', date: '2026-07-31', amount: '₹45,000', status: 'Generated' },
    { id: '2', month: 'June 2026', date: '2026-06-30', amount: '₹45,000', status: 'Generated' },
    { id: '3', month: 'May 2026', date: '2026-05-31', amount: '₹45,000', status: 'Generated' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Banknote className="w-5 h-5 text-blue-400" />
          Salary Payslips
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">View and download your monthly salary slips.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Summary Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-md md:col-span-1 flex flex-col justify-center">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Current Base Salary</p>
          <h3 className="text-3xl font-black text-white">₹45,000<span className="text-sm text-slate-500 font-medium">/mo</span></h3>
          <p className="text-[10px] text-slate-500 mt-2 font-medium">Next payout expected on {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toLocaleDateString()}</p>
        </div>

        {/* Payslips List */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-md md:col-span-2">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
            <FileText className="w-4 h-4 text-slate-400" /> Recent Payslips
          </h3>
          
          <div className="space-y-3">
            {payslips.map(slip => (
              <div key={slip.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{slip.month}</h4>
                    <p className="text-[10px] font-mono text-slate-500">Issued: {slip.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  <div className="text-left sm:text-right">
                    <span className="block text-xs font-medium text-slate-400 mb-0.5">Net Pay</span>
                    <span className="block text-sm font-black text-white">{slip.amount}</span>
                  </div>
                  
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-600/30 font-bold text-[10px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 py-2.5 text-xs font-bold text-slate-400 hover:text-white border border-dashed border-slate-800 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer">
            View All Historical Payslips
          </button>
        </div>

      </div>
    </div>
  );
};
