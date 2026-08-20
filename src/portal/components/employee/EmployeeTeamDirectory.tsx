import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Mail, Phone, Building2, Search } from 'lucide-react';
import { motion } from 'motion/react';

import { isCeoOrCto } from '../../lib/attendanceEngine';

export const EmployeeTeamDirectory: React.FC = () => {
  const { employees } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter out empty names, executive roles (CEO & CTO), and apply search
  const teamMembers = employees.filter(emp => {
    if (!emp.fullName || emp.fullName.trim() === '' || isCeoOrCto(emp)) return false;
    const matchesSearch = 
      (emp.fullName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (emp.designation?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (emp.department?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Team Directory</h2>
          <p className="text-xs text-slate-400 mt-0.5">Find and connect with your colleagues ({teamMembers.length} members)</p>
        </div>
        
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, role, department..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-hidden focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={member.id}
            className="bg-slate-900/90 rounded-2xl border border-slate-800/80 p-5 shadow-md flex items-start gap-4 hover:border-slate-700 transition-colors group"
          >
            <img
              src={member.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'}
              alt={member.fullName}
              className="w-14 h-14 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500/50 transition-colors shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white truncate">{member.fullName}</h3>
              <p className="text-xs font-medium text-slate-400 truncate mb-2">{member.designation}</p>
              
              <div className="space-y-1.5 text-[11px] font-medium text-slate-500">
                <div className="flex items-center gap-2 truncate">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{member.department}</span>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{member.phone || 'N/A'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {teamMembers.length === 0 && (
        <div className="py-12 text-center text-slate-400 border border-slate-800 border-dashed rounded-2xl bg-slate-900/50">
          <p className="text-sm font-semibold">No team members found.</p>
        </div>
      )}
    </div>
  );
};
