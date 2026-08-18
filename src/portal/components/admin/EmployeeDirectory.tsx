import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { AllEmployeeBarcodesView } from './AllEmployeeBarcodesView';
import { Employee, EmployeeStatus } from '../../types';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  QrCode, 
  CreditCard, 
  Mail, 
  Phone, 
  Building2, 
  Edit, 
  Trash2, 
  Eye, 
  LayoutGrid, 
  List,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface EmployeeDirectoryProps {
  onSelectEmployee: (emp: Employee) => void;
  onOpenAddModal: () => void;
  onOpenEditModal: (emp: Employee) => void;
  onOpenIdCardModal: (emp: Employee) => void;
}

export const EmployeeDirectory: React.FC<EmployeeDirectoryProps> = ({
  onSelectEmployee,
  onOpenAddModal,
  onOpenEditModal,
  onOpenIdCardModal
}) => {
  const { employees, deleteEmployee, regenerateQrToken, role } = useAuth();
  const isAdmin = role === 'SUPER_ADMIN' || role === 'HR_ADMIN';
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [showPrintAllBarcodes, setShowPrintAllBarcodes] = useState(false);

  const departments = Array.from(new Set(employees.map(e => e.department)));

  const filteredEmployees = employees.filter(emp => {
    if (!emp.fullName || emp.fullName.trim() === '') return false;
    
    const matchesSearch = 
      (emp.fullName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (emp.employeeId?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (emp.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (emp.designation?.toLowerCase() || '').includes(searchTerm.toLowerCase());

    const matchesDept = deptFilter === 'ALL' || emp.department === deptFilter;
    const matchesStatus = statusFilter === 'ALL' || emp.status === statusFilter;

    return matchesSearch && matchesDept && matchesStatus;
  });

  const getStatusIndicator = (status: EmployeeStatus) => {
    switch (status) {
      case 'Active': return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
      case 'On Leave': return 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
      case 'Terminated': return 'bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.5)]';
      default: return 'bg-slate-500';
    }
  };

  if (showPrintAllBarcodes) {
    return <AllEmployeeBarcodesView onBack={() => setShowPrintAllBarcodes(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Top Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Employee Directory</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage corporate workforce records, employee IDs, and profiles ({filteredEmployees.length} total)
          </p>
        </div>

        {isAdmin && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPrintAllBarcodes(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md"
            >
              <CreditCard className="w-4 h-4" />
              Print All Barcodes
            </button>
            <button
              onClick={onOpenAddModal}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-900/40"
            >
              <Plus className="w-4 h-4" />
              Add New Employee
            </button>
          </div>
        )}
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800/80 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search name, ID, email..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-950/50 border border-slate-800/60 rounded-xl focus:outline-none focus:border-blue-500/50 text-white placeholder-slate-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          {/* Department Filter */}
          <select
            value={deptFilter}
            onChange={e => setDeptFilter(e.target.value)}
            className="px-4 py-2.5 text-xs bg-slate-950/50 border border-slate-800/60 rounded-xl text-slate-300 font-bold focus:outline-none focus:border-blue-500/50 cursor-pointer"
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
            className="px-4 py-2.5 text-xs bg-slate-950/50 border border-slate-800/60 rounded-xl text-slate-300 font-bold focus:outline-none focus:border-blue-500/50 cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Terminated">Terminated</option>
          </select>

          {/* Grid vs Table View Toggle */}
          <div className="flex items-center bg-slate-950/50 p-1 rounded-xl border border-slate-800/60">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'table' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {filteredEmployees.length === 0 ? (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-12 text-center">
          <Building2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-white">No employees match your search</h3>
          <p className="text-xs text-slate-400 mt-1">Try resetting search filters or add a new employee profile.</p>
        </div>
      ) : viewMode === 'table' ? (
        /* TABLE VIEW (Mobile Card List on mobile, Desktop Table on md+) */
        <div>
          {/* Mobile Enterprise Card List (md:hidden) */}
          <motion.div 
            className="md:hidden space-y-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.04 } }
            }}
          >
            {filteredEmployees.map(emp => {
              const statusColorMap = {
                'Present': 'var(--accent-emerald)',
                'Late': 'var(--accent-amber)',
                'Absent': 'var(--accent-rose)',
                'On Leave': 'var(--accent-violet)',
              };
              const statusColor = (statusColorMap as any)[emp.status] || 'var(--text-muted)';
              const statusGlow = statusColor.replace('accent', 'glow');

              return (
                <motion.div 
                  key={emp.id} 
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
                  }}
                  className="relative overflow-hidden bg-[var(--bg-tertiary)] rounded-2xl border border-[var(--border-subtle)] p-4 shadow-[var(--shadow-sm)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[40px] opacity-20 pointer-events-none" style={{ background: 'var(--gradient-card)' }} />
                  
                  {/* Top Section: Avatar & Identity */}
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative">
                        <img
                          src={emp.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                          alt={emp.fullName}
                          className="w-12 h-12 rounded-full object-cover shrink-0"
                          style={{ border: `2px solid ${statusColor}` }}
                        />
                        <span 
                          className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[var(--bg-tertiary)]"
                          style={{ backgroundColor: statusColor, boxShadow: `0 0 10px ${statusColor}40` }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 
                          onClick={() => onSelectEmployee(emp)}
                          className="font-bold text-[var(--text-primary)] text-[15px] cursor-pointer truncate"
                        >
                          {emp.fullName}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] font-medium truncate mt-0.5">
                          {emp.designation} <span className="opacity-50 mx-1">•</span> {emp.department}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => onSelectEmployee(emp)} className="w-8 h-8 flex items-center justify-center bg-[var(--bg-elevated)] rounded-full border border-[var(--border-subtle)] text-[var(--text-tertiary)] active:scale-95 transition-transform shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Middle Section: Meta Info */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[var(--border-subtle)] text-xs relative z-10">
                    <span 
                      className="px-2 py-0.5 rounded-md font-bold flex items-center gap-1.5"
                      style={{ color: statusColor, backgroundColor: `${statusColor}15`, border: `1px solid ${statusColor}30` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor }} />
                      {emp.status}
                    </span>
                    <span className="font-mono font-bold text-[var(--text-secondary)]">
                      {emp.employeeId}
                    </span>
                    <span className="text-[var(--text-tertiary)] truncate ml-auto">
                      {emp.email}
                    </span>
                  </div>

                  {/* Bottom Section: Actions */}
                  <div className="grid grid-cols-3 gap-2 mt-4 relative z-10">
                    <button
                      onClick={() => onSelectEmployee(emp)}
                      className="h-10 flex items-center justify-center gap-1.5 bg-[var(--bg-elevated)] text-[var(--text-secondary)] text-xs font-semibold rounded-[10px] active:scale-95 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Details
                    </button>
                    {isAdmin ? (
                      <>
                        <button
                          onClick={() => onOpenIdCardModal(emp)}
                          className="h-10 flex items-center justify-center gap-1.5 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-xs font-semibold rounded-[10px] active:scale-95 transition-transform"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          ID Pass
                        </button>
                        <button
                          onClick={() => onOpenEditModal(emp)}
                          className="h-10 flex items-center justify-center gap-1.5 bg-[var(--bg-elevated)] text-[var(--text-secondary)] text-xs font-semibold rounded-[10px] active:scale-95 transition-transform"
                        >
                          <Edit className="w-3.5 h-3.5" />
                          Edit
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="h-10"></div>
                        <div className="h-10"></div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Desktop Data Table (hidden md:block) */}
          <div className="hidden md:block bg-slate-900/90 rounded-2xl border border-slate-800/80 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-800/60 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <th className="py-4 px-6">Employee</th>
                    <th className="py-4 px-6">ID Code</th>
                    <th className="py-4 px-6">Department & Role</th>
                    <th className="py-4 px-6">Employment</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40 text-[11px]">
                  {filteredEmployees.map(emp => (
                    <tr key={emp.id} className="hover:bg-slate-800/30 transition-colors group">
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={emp.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                            alt={emp.fullName}
                            className="w-8 h-8 rounded-full object-cover border border-slate-700/50"
                          />
                          <div>
                            <div
                              onClick={() => onSelectEmployee(emp)}
                              className="font-bold text-white text-xs hover:text-blue-400 cursor-pointer transition-colors"
                            >
                              {emp.fullName}
                            </div>
                            <div className="text-[10px] font-medium text-slate-500">{emp.email}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-6">
                        <span className="font-mono font-bold text-slate-400">
                          {emp.employeeId}
                        </span>
                      </td>

                      <td className="py-3 px-6">
                        <div className="font-bold text-slate-300">{emp.department}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{emp.designation}</div>
                      </td>

                      <td className="py-3 px-6">
                        <div className="text-slate-400 font-bold">{emp.employmentType}</div>
                        <div className="text-[10px] text-slate-500 font-mono">Shift: {emp.shift?.split(' ')[0] || 'General'}</div>
                      </td>

                      <td className="py-3 px-6">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${getStatusIndicator(emp.status)}`} />
                          <span className="text-slate-300 font-bold">{emp.status}</span>
                        </div>
                      </td>

                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onSelectEmployee(emp)}
                            className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg cursor-pointer"
                            title="View Full Profile"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {isAdmin && (
                            <>
                              <button
                                onClick={() => onOpenIdCardModal(emp)}
                                className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg cursor-pointer"
                                title="Print / Export ID Badge Card"
                              >
                                <CreditCard className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => onOpenEditModal(emp)}
                                className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg cursor-pointer"
                                title="Edit Employee Data"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEmployees.map(emp => (
            <div key={emp.id} className="bg-slate-900/90 rounded-2xl border border-slate-800/80 p-5 shadow-sm hover:border-slate-700/80 hover:bg-slate-900 transition-all flex flex-col justify-between group cursor-pointer" onClick={() => onSelectEmployee(emp)}>
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] font-black bg-slate-950/50 text-slate-400 px-2.5 py-1 rounded-lg border border-slate-800/50">
                    {emp.employeeId}
                  </span>
                  <div className="flex items-center gap-2 bg-slate-950/50 px-2.5 py-1 rounded-lg border border-slate-800/50">
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusIndicator(emp.status)}`} />
                    <span className="text-[10px] text-slate-300 font-bold tracking-wide uppercase">{emp.status}</span>
                  </div>
                </div>
                <div className="text-center my-4">
                  <img
                    src={emp.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                    alt={emp.fullName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-800/80 mx-auto group-hover:scale-105 transition-transform"
                  />
                  <div className="mt-3">
                    <h3 className="font-extrabold text-white text-sm group-hover:text-blue-400 transition-colors">{emp.fullName}</h3>
                    <p className="text-[10px] text-slate-500 font-medium">{emp.designation}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4 pt-4 border-t border-slate-800/60">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{emp.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="text-[11px] truncate">{emp.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="text-[11px]">{emp.phone}</span>
                  </div>
                </div>
              </div>

              {isAdmin && (
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenIdCardModal(emp); }}
                    className="text-[10px] font-bold text-slate-400 hover:text-emerald-400 flex items-center gap-1 bg-slate-950/50 px-2.5 py-1.5 rounded-lg border border-slate-800/50 transition-colors"
                  >
                    <CreditCard className="w-3 h-3" /> ID Card
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenEditModal(emp); }}
                    className="text-[10px] font-bold text-slate-400 hover:text-amber-400 flex items-center gap-1 bg-slate-950/50 px-2.5 py-1.5 rounded-lg border border-slate-800/50 transition-colors"
                  >
                    <Edit className="w-3 h-3" /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
