import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, Search, Layers } from 'lucide-react';

const CATEGORY_STYLES: Record<string, string> = {
  attendance: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  leave: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  profile: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  security: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  payroll: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  rules: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  admin: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  system: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
};

export const AuditLogsView: React.FC = () => {
  const { auditLogs } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = Array.from(new Set(auditLogs.map(l => l.category || 'system').filter(Boolean))).sort();

  const filteredLogs = auditLogs.filter(log => {
    const matchesCategory = categoryFilter === 'All' || (log.category || 'system') === categoryFilter;
    const q = searchTerm.toLowerCase();
    const matchesSearch = !q ||
      log.action.toLowerCase().includes(q) ||
      log.actorName.toLowerCase().includes(q) ||
      log.target.toLowerCase().includes(q) ||
      log.details.toLowerCase().includes(q) ||
      (log.ipAddress || '').toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">System Audit History & Security Logs</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Immutable log trail of all workforce administrative events, employee modifications, and policy changes
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search audit trail..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900 border border-slate-800 text-white rounded-xl focus:outline-none focus:border-blue-500 placeholder-slate-500"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
          <Layers className="w-3.5 h-3.5" />
          Category
        </span>
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all border cursor-pointer ${
              categoryFilter === cat
                ? 'bg-slate-800 text-white border-slate-600'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-600'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-[11px] text-slate-500 font-mono">
          {filteredLogs.length} of {auditLogs.length} logs
        </span>
      </div>

      {/* Logs Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Timestamp</th>
                <th className="py-3.5 px-4">Actor / User</th>
                <th className="py-3.5 px-4">Action Event</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Target Resource</th>
                <th className="py-3.5 px-4">Audit Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500 font-medium">
                    No security audit logs match your search.
                  </td>
                </tr>
              ) : (
                filteredLogs.map(log => (
                  <tr key={log.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-slate-400 text-[11px]">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{log.actorName}</div>
                      <div className="text-[10px] text-purple-400 font-bold">{log.actorRole}</div>
                      {log.ipAddress && (
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">IP: {log.ipAddress}</div>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-mono text-[10px] font-bold bg-slate-950 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800">
                        {log.action}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border ${CATEGORY_STYLES[log.category || 'system']}`}>
                        <ShieldCheck className="w-3 h-3" />
                        {log.category || 'system'}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-semibold text-slate-200">
                      {log.target}
                    </td>

                    <td className="py-3.5 px-4 text-slate-400 max-w-md">
                      {log.details}
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
