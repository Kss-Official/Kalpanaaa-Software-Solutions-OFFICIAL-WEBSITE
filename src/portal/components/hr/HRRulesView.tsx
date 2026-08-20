import React, { useState, useEffect } from 'react';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import {
  ShieldCheck,
  Building2,
  UserRound,
  Plus,
  PencilLine,
  Trash2,
  Save,
  X,
  Check,
  Loader2
} from 'lucide-react';

type RuleKind = 'Company' | 'Employee';

interface WorkplaceRule {
  id: string;
  kind: RuleKind;
  title: string;
  description: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

const DEFAULT_COMPANY_RULES: Array<Pick<WorkplaceRule, 'title' | 'description'>> = [
  { title: 'Office Working Hours', description: 'Standard working hours are Monday to Friday, 09:00 AM to 06:00 PM with a 1 hour lunch break.' },
  { title: 'Leave Approval Policy', description: 'All leave and work-from-home requests must be raised at least 24 hours in advance and approved by the reporting manager / HR.' },
  { title: 'Attendance Discipline', description: 'Employees must mark attendance daily via the office QR terminal or biometric device. Late check-ins beyond the grace period are recorded as Late.' },
  { title: 'Confidentiality', description: 'Client data, project documents, and company records must not be shared with third parties or stored on personal devices.' }
];

const DEFAULT_EMPLOYEE_RULES: Array<Pick<WorkplaceRule, 'title' | 'description'>> = [
  { title: 'Professional Conduct', description: 'Maintain a respectful, inclusive, and professional attitude with teammates, clients, and vendors at all times.' },
  { title: 'Dress Code', description: 'Business casual attire is expected while on office premises or attending client meetings.' },
  { title: 'Device & Asset Care', description: 'Company-issued laptops and assets must be handled responsibly, kept secure, and reported immediately if lost or damaged.' },
  { title: 'Zero Tolerance', description: 'Harassment, discrimination, or any behavior violating company values will result in disciplinary action up to termination.' }
];

const DEFAULT_RULES: WorkplaceRule[] = [
  ...DEFAULT_COMPANY_RULES.map((r, i) => ({
    ...r,
    id: `company-default-${i + 1}`,
    kind: 'Company' as RuleKind,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })),
  ...DEFAULT_EMPLOYEE_RULES.map((r, i) => ({
    ...r,
    id: `employee-default-${i + 1}`,
    kind: 'Employee' as RuleKind,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }))
];

export const HRRulesView: React.FC = () => {
  const [activeKind, setActiveKind] = useState<RuleKind>('Company');
  const [rules, setRules] = useState<WorkplaceRule[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Add form state
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Edit form state
  const [editingRule, setEditingRule] = useState<WorkplaceRule | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // Real-time sync from Firestore + localStorage cache
  useEffect(() => {
    let unsub = () => {};
    let seededLocally = false;

    const trySeed = (snapshotEmpty: boolean) => {
      const alreadySeeded = localStorage.getItem('kss_v1_rules_seeded');
      if (snapshotEmpty && !alreadySeeded && !seededLocally) {
        seededLocally = true;
        DEFAULT_RULES.forEach(r => {
          const seedId = `rule-${r.kind.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
          setDoc(doc(db, 'companyRules', seedId), { ...r, id: seedId }).catch(() => {});
        });
        localStorage.setItem('kss_v1_rules_seeded', '1');
      }
    };

    try {
      const cached = localStorage.getItem('kss_v1_company_rules');
      if (cached) {
        setRules(JSON.parse(cached));
      } else {
        setRules(DEFAULT_RULES);
      }
    } catch { /* ignore corrupted cache */ }

    unsub = onSnapshot(collection(db, 'companyRules'), (snapshot) => {
      if (!snapshot.empty) {
        const fetched: WorkplaceRule[] = [];
        snapshot.forEach(docSnap => {
          fetched.push({ id: docSnap.id, ...docSnap.data() } as WorkplaceRule);
        });
        fetched.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setRules(fetched);
        localStorage.setItem('kss_v1_company_rules', JSON.stringify(fetched));
      } else {
        trySeed(true);
      }
      setIsSyncing(false);
    }, (err) => {
      console.warn('Company rules sync error (offline fallback to local cache):', err);
      setIsSyncing(false);
    });

    return () => unsub();
  }, []);

  const persist = (rule: WorkplaceRule) => {
    setDoc(doc(db, 'companyRules', rule.id), rule).catch(err => console.warn('Rule save error:', err));
    const next = [...rules.filter(r => r.id !== rule.id), rule].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setRules(next);
    localStorage.setItem('kss_v1_company_rules', JSON.stringify(next));
  };

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    const title = newTitle.trim();
    const description = newDescription.trim();
    if (!title || !description) return;

    const now = new Date().toISOString();
    const newRule: WorkplaceRule = {
      id: `rule-${activeKind.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      kind: activeKind,
      title,
      description,
      active: true,
      createdAt: now,
      updatedAt: now
    };
    persist(newRule);
    setNewTitle('');
    setNewDescription('');
    showToast('Rule added successfully');
  };

  const handleToggleActive = (rule: WorkplaceRule) => {
    persist({ ...rule, active: !rule.active, updatedAt: new Date().toISOString() });
    showToast(rule.active ? 'Rule disabled' : 'Rule enabled');
  };

  const handleDeleteRule = (rule: WorkplaceRule) => {
    if (!window.confirm(`Delete rule: "${rule.title}"?`)) return;
    deleteDoc(doc(db, 'companyRules', rule.id)).catch(err => console.warn('Rule delete error:', err));
    const next = rules.filter(r => r.id !== rule.id);
    setRules(next);
    localStorage.setItem('kss_v1_company_rules', JSON.stringify(next));
    showToast('Rule deleted');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRule) return;
    const title = editTitle.trim();
    const description = editDescription.trim();
    if (!title || !description) return;
    persist({ ...editingRule, title, description, updatedAt: new Date().toISOString() });
    setEditingRule(null);
    showToast('Rule updated successfully');
  };

  const visibleRules = rules.filter(r => r.kind === activeKind);

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-[60] px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-2xl animate-in slide-in-from-right duration-300">
          <span className="flex items-center gap-2"><Check className="w-4 h-4" /> {toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Company &amp; Employee Rules
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Maintain the code of conduct and workplace rules that govern all employees across the organization.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full border ${
            isSyncing
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          }`}>
            {isSyncing ? <Loader2 className="w-3 h-3 animate-spin" /> : <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
            {isSyncing ? 'Syncing...' : 'Live Sync Active'}
          </span>
        </div>
      </div>

      {/* Kind Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-950 rounded-2xl border border-slate-800/80 w-fit">
        <button
          onClick={() => setActiveKind('Company')}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeKind === 'Company'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Building2 className="w-4 h-4" /> Company Rules ({rules.filter(r => r.kind === 'Company').length})
        </button>
        <button
          onClick={() => setActiveKind('Employee')}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeKind === 'Employee'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <UserRound className="w-4 h-4" /> Employee Rules ({rules.filter(r => r.kind === 'Employee').length})
        </button>
      </div>

      {/* Add Rule Form */}
      <form onSubmit={handleAddRule} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-white">
          <Plus className="w-4 h-4 text-blue-400" />
          Add New {activeKind === 'Company' ? 'Company' : 'Employee'} Rule
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_auto] gap-3">
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Rule title (e.g. Working Hours)"
            className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-blue-500 placeholder-slate-600"
            required
          />
          <input
            type="text"
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}
            placeholder="Describe the rule in one or two sentences..."
            className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 placeholder-slate-600"
            required
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-blue-900/40"
          >
            <Plus className="w-4 h-4" /> Add Rule
          </button>
        </div>
      </form>

      {/* Rules List */}
      <div className="space-y-3">
        {visibleRules.length === 0 ? (
          <div className="py-12 text-center text-slate-500 border border-slate-800 border-dashed rounded-2xl bg-slate-950/40">
            <ShieldCheck className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-400">No {activeKind.toLowerCase()} rules yet. Add one above.</p>
          </div>
        ) : (
          visibleRules.map(rule => (
            <div
              key={rule.id}
              className={`bg-slate-900/90 border rounded-2xl p-4 shadow-md transition-all ${
                rule.active ? 'border-slate-700' : 'border-slate-800 opacity-60'
              }`}
            >
              {editingRule?.id === rule.id ? (
                <form onSubmit={handleSaveEdit} className="space-y-3">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-blue-500/60 rounded-xl text-sm font-bold text-white focus:outline-none"
                    required
                  />
                  <textarea
                    value={editDescription}
                    onChange={e => setEditDescription(e.target.value)}
                    rows={2}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingRule(null)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Save className="w-3.5 h-3.5" /> Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${rule.active ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white">{rule.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{rule.description}</p>
                      <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        rule.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
                      }">
                        <span className={`w-1.5 h-1.5 rounded-full ${rule.active ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                        {rule.active ? 'Active' : 'Disabled'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => { setEditingRule(rule); setEditTitle(rule.title); setEditDescription(rule.description); }}
                      className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      title="Edit rule"
                    >
                      <PencilLine className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(rule)}
                      className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      title={rule.active ? 'Disable rule' : 'Enable rule'}
                    >
                      {rule.active ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleDeleteRule(rule)}
                      className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      title="Delete rule"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
