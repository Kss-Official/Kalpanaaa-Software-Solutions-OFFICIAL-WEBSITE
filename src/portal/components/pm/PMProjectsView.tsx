import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'motion/react';
import { 
  Kanban, 
  Plus, 
  Search, 
  CheckCircle2, 
  Clock, 
  User, 
  AlertCircle,
  Calendar,
  Layers
} from 'lucide-react';
import { ProjectTask, TaskStatus, TaskPriority } from '../../types';

export const PMProjectsView: React.FC = () => {
  const { employees, activeEmployee } = useAuth();
  const [activeView, setActiveView] = useState<'kanban' | 'roadmap'>('kanban');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample tasks state
  const [tasks, setTasks] = useState<ProjectTask[]>([
    {
      id: 'task-1',
      projectId: 'proj-1',
      projectName: 'Core API Engine',
      title: 'Optimize Firestore sub-100ms indexes',
      description: 'Add composite indexes for attendance date queries.',
      assigneeId: employees[0]?.id || 'emp-1',
      assigneeName: employees[0]?.fullName || 'Developer 1',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2026-08-10',
      createdAt: '2026-08-01',
      updatedAt: '2026-08-05'
    },
    {
      id: 'task-2',
      projectId: 'proj-2',
      projectName: 'PWA Biometric',
      title: 'Integrate MediaPipe 468 landmark mesh overlay',
      description: 'Draw green facial mesh over video stream.',
      assigneeId: employees[1]?.id || 'emp-2',
      assigneeName: employees[1]?.fullName || 'Developer 2',
      status: 'In Review',
      priority: 'Urgent',
      dueDate: '2026-08-12',
      createdAt: '2026-08-02',
      updatedAt: '2026-08-06'
    },
    {
      id: 'task-3',
      projectId: 'proj-1',
      projectName: 'Core API Engine',
      title: 'Add device fingerprinting for anti-spoofing',
      description: 'Generate base64 device fingerprint hash.',
      assigneeId: employees[2]?.id || 'emp-3',
      assigneeName: employees[2]?.fullName || 'Developer 3',
      status: 'Done',
      priority: 'Medium',
      dueDate: '2026-08-05',
      createdAt: '2026-08-01',
      updatedAt: '2026-08-05'
    },
    {
      id: 'task-4',
      projectId: 'proj-3',
      projectName: 'Executive Dashboard',
      title: 'Design Stripe-style KPI summary cards with SVG sparklines',
      description: 'Implement delta badges (+2 ▲) and sparklines.',
      assigneeId: employees[0]?.id || 'emp-1',
      assigneeName: employees[0]?.fullName || 'Developer 1',
      status: 'To Do',
      priority: 'High',
      dueDate: '2026-08-18',
      createdAt: '2026-08-05',
      updatedAt: '2026-08-05'
    }
  ]);

  const columns: TaskStatus[] = ['Backlog', 'To Do', 'In Progress', 'In Review', 'Done'];

  const moveTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Kanban className="w-5 h-5 text-blue-400" />
            Project Kanban Board & Task Manager
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">Track deliverables, assign tasks, and monitor sprint completion.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveView('kanban')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeView === 'kanban' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Kanban Board
            </button>
            <button
              onClick={() => setActiveView('roadmap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeView === 'roadmap' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Roadmap Timeline
            </button>
          </div>

          <button
            onClick={() => {
              const title = prompt('Enter new task title:');
              if (title) {
                const newTask: ProjectTask = {
                  id: `task-${Date.now()}`,
                  projectId: 'proj-1',
                  projectName: 'Core Platform',
                  title,
                  description: 'Added via PM Kanban Board.',
                  assigneeId: employees[0]?.id || 'emp-1',
                  assigneeName: employees[0]?.fullName || 'Developer 1',
                  status: 'To Do',
                  priority: 'Medium',
                  dueDate: '2026-08-20',
                  createdAt: new Date().toISOString().split('T')[0],
                  updatedAt: new Date().toISOString().split('T')[0]
                };
                setTasks(prev => [newTask, ...prev]);
              }
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create Task</span>
          </button>
        </div>
      </div>

      {activeView === 'kanban' ? (
        /* Kanban Board Columns */
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {columns.map(col => {
            const colTasks = tasks.filter(t => t.status === col);
            return (
              <div key={col} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{col}</span>
                    <span className="text-[10px] font-mono font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                      {colTasks.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {colTasks.map(task => (
                      <div
                        key={task.id}
                        className="bg-slate-950 border border-slate-800/80 hover:border-slate-700 p-4 rounded-xl shadow-sm space-y-3 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">
                            {task.projectName}
                          </span>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${
                            task.priority === 'Urgent' ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' :
                            task.priority === 'High' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                            'bg-slate-800 border-slate-700 text-slate-400'
                          }`}>
                            {task.priority}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">{task.title}</h4>
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{task.description}</p>
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-900">
                          <span className="flex items-center gap-1 font-semibold">
                            <User className="w-3 h-3 text-slate-500" />
                            {task.assigneeName.split(' ')[0]}
                          </span>
                          <span className="font-mono text-slate-500">{task.dueDate}</span>
                        </div>

                        {/* Move state action */}
                        <div className="flex items-center justify-between pt-1 gap-1">
                          {col !== 'Backlog' && (
                            <button
                              onClick={() => {
                                const idx = columns.indexOf(col);
                                if (idx > 0) moveTaskStatus(task.id, columns[idx - 1]);
                              }}
                              className="text-[9px] text-slate-500 hover:text-white font-mono"
                            >
                              ← Move
                            </button>
                          )}
                          {col !== 'Done' && (
                            <button
                              onClick={() => {
                                const idx = columns.indexOf(col);
                                if (idx < columns.length - 1) moveTaskStatus(task.id, columns[idx + 1]);
                              }}
                              className="text-[9px] text-blue-400 hover:text-blue-300 font-mono ml-auto"
                            >
                              Advance →
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Gantt Timeline View */
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-md space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Layers className="w-4 h-4 text-blue-400" /> Roadmap & Deliverables Gantt Timeline
          </h3>

          <div className="space-y-4">
            {tasks.map(t => (
              <div key={t.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>{t.title} ({t.projectName})</span>
                  <span className="font-mono text-slate-400">Due: {t.dueDate}</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" 
                    style={{ width: t.status === 'Done' ? '100%' : t.status === 'In Progress' ? '65%' : '20%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
