import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'motion/react';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  Plus,
  TrendingUp,
  Star
} from 'lucide-react';
import { OneOnOneNote } from '../../types';

export const PMTeamPerformance: React.FC = () => {
  const { employees, activeEmployee } = useAuth();
  const [selectedEmpId, setSelectedEmpId] = useState(employees[0]?.id || '');
  const [notes, setNotes] = useState<OneOnOneNote[]>([
    {
      id: 'note-1',
      employeeId: employees[0]?.id || 'emp-1',
      managerId: activeEmployee?.id || 'pm-1',
      date: '2026-08-01',
      agenda: 'Q3 Goal alignment & sprint performance review',
      notes: 'Demonstrated exceptional progress on face recognition PWA optimization. Reassigned high-priority tasks.',
      actionItems: ['Complete MediaPipe canvas mesh integration', 'Review PR #4812'],
      createdAt: '2026-08-01'
    }
  ]);

  const selectedEmp = employees.find(e => e.id === selectedEmpId) || employees[0];

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-400" />
          Team Performance, 1:1 Notes & Guidance
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Track team member productivity, record 1:1 meeting feedback, and assign training modules.</p>
      </div>

      {/* Team Member Selector */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2">
        {employees.map(emp => (
          <button
            key={emp.id}
            onClick={() => setSelectedEmpId(emp.id)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border text-xs font-bold shrink-0 transition-all cursor-pointer ${
              selectedEmpId === emp.id 
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/40' 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white font-mono">
              {emp.fullName.charAt(0)}
            </div>
            <span>{emp.fullName}</span>
          </button>
        ))}
      </div>

      {selectedEmp && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Performance Summary Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md md:col-span-1 space-y-5">
            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <img
                src={selectedEmp.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'}
                alt={selectedEmp.fullName}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-700"
              />
              <div>
                <h3 className="text-base font-bold text-white">{selectedEmp.fullName}</h3>
                <p className="text-xs text-slate-400">{selectedEmp.designation}</p>
                <span className="inline-block mt-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  Performing (94% On-Time)
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Department</span>
                <span className="text-white font-semibold">{selectedEmp.department}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Task Completion Rate</span>
                <span className="text-emerald-400 font-mono font-bold">94.2%</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Quality Score</span>
                <span className="text-yellow-400 font-mono font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400" /> 4.8 / 5.0
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                const agenda = prompt('Enter 1:1 Meeting Agenda:');
                const noteText = prompt('Enter 1:1 Discussion Notes:');
                if (agenda && noteText) {
                  const newNote: OneOnOneNote = {
                    id: `note-${Date.now()}`,
                    employeeId: selectedEmp.id,
                    managerId: activeEmployee?.id || 'pm-1',
                    date: new Date().toISOString().split('T')[0],
                    agenda,
                    notes: noteText,
                    actionItems: ['Follow up on sprint goals'],
                    createdAt: new Date().toISOString()
                  };
                  setNotes(prev => [newNote, ...prev]);
                }
              }}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add 1:1 Meeting Note
            </button>
          </div>

          {/* 1:1 Meeting Notes & Guidance Feed */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md md:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <MessageSquare className="w-4 h-4 text-blue-400" /> 1:1 Meeting Notes & Mentorship History
            </h3>

            <div className="space-y-4">
              {notes.filter(n => n.employeeId === selectedEmp.id).length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  No 1:1 meeting notes recorded for {selectedEmp.fullName} yet.
                </div>
              ) : (
                notes.filter(n => n.employeeId === selectedEmp.id).map(note => (
                  <div key={note.id} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>{note.agenda}</span>
                      <span className="font-mono text-slate-500">{note.date}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{note.notes}</p>
                    {note.actionItems.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Action Items:</span>
                        <ul className="list-disc list-inside text-xs text-blue-300 space-y-0.5">
                          {note.actionItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
