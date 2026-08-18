import React from 'react';
import kalpanaLogo from '../../assets/images/kalpana_logo.jpeg';
import { motion } from 'motion/react';
import { useAuth } from '../../context/AuthContext';
import gauravImg from '../../assets/images/GauravCTO.jpeg';
import akshitImg from '../../assets/images/Akshit.png';
import koushikImg from '../../assets/images/Koushik.png';
import { 
  Building2, 
  ShieldCheck, 
  QrCode, 
  MapPin, 
  FileText, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Zap, 
  UserCheck, 
  Lock, 
  TrendingUp,
  Award,
  ChevronRight,
  Compass,
  Heart,
  Briefcase
} from 'lucide-react';

import { getLocalDateString } from '../../lib/attendanceEngine';

interface LandingViewProps {
  onGetStarted: (tab?: 'signin' | 'signup' | 'demo') => void;
  onShowSplash?: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onGetStarted, onShowSplash }) => {
  const { activeEmployee, role, attendance, employees, quickDemoLogin } = useAuth();

  const todayStr = getLocalDateString();
  const todayAttendance = attendance.filter(a => a.date === todayStr);
  const presentCount = todayAttendance.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const lateCount = todayAttendance.filter(a => a.status === 'Late').length;
  const leaveCount = todayAttendance.filter(a => a.status === 'On Leave').length;
  const activeRecord = todayAttendance.find(a => a.employeeId === activeEmployee?.id && !a.checkOutAt);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Deep Background Gradient Grid */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-20 px-6 lg:px-12 py-4 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 shrink-0 border border-slate-700/60">
            <img src={kalpanaLogo} alt="Kalpanaaa Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-extrabold text-white tracking-tight flex items-center gap-2">
              <span className="hidden sm:inline">Kalpanaaa Software Solutions</span>
              <span className="sm:hidden">KSS</span>
            </span>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">Engineering & Operations Digital Home</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {onShowSplash && (
            <button
              onClick={onShowSplash}
              className="hidden sm:flex px-3 py-2 bg-slate-900 hover:bg-slate-800 text-blue-300 border border-blue-800/60 text-xs font-bold rounded-xl transition-all cursor-pointer items-center gap-1.5 shadow-sm"
              title="View Company Splash Screen"
            >
              <span className="hidden sm:inline">Company Splash</span>
            </button>
          )}
          <button
            onClick={() => onGetStarted('signin')}
            className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Sign In
          </button>
          <button
            onClick={() => onGetStarted('signup')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-900/40 transition-all cursor-pointer"
          >
            Employee Registration
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 space-y-20 pb-20">
        
        {/* SECTION 01 — WELCOME */}
        <section className="px-6 lg:px-12 pt-12 max-w-7xl mx-auto space-y-8">
          <div className="p-8 lg:p-12 rounded-3xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Kalpanaaa Team Platform
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Welcome back, <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                    {activeEmployee?.fullName || 'Kalpanaaa Software Solutions Team'}
                  </span>
                </h1>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                  One team. One workspace. One shared direction. This private workspace brings our people, attendance, personal profile, and daily engineering operations together.
                </p>

                {/* Motivational Quote Banner */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-300 text-xs italic flex items-center gap-3">
                  <span>“Every great product starts with people who care. Every contribution moves Kalpanaaa forward.”</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onGetStarted('signin')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-900/40 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Employee & Admin Login Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Side: Quick Status Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                    Your Daily Summary
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-slate-400">Employee ID</span>
                    <span className="font-mono text-white font-bold">{activeEmployee?.employeeId || 'KSS-MEMBERS'}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-slate-400">Department</span>
                    <span className="text-slate-200 font-semibold">{activeEmployee?.department || 'Engineering'}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-slate-400">Designation</span>
                    <span className="text-blue-300 font-semibold">{activeEmployee?.designation || 'Software Engineer'}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Today Check-In State</span>
                    <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                      activeRecord 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {activeRecord ? `ACTIVE (${activeRecord.checkInAt})` : 'READY TO SCAN'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 — OUR WORKSPACE */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Our Digital Home
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Workspace Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Everything the Kalpanaaa Software Solutions team needs to check in, review team records, and generate verified documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Team Directory</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete profile directory of all team members across engineering, quality assurance, HR, and operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">GPS & QR Terminal Kiosk</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contactless QR scanner terminal with location geofencing for office check-ins and check-outs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Document Issuance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generate verified PDF experience certificates, appraisal letters, and official digital ID passes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03 — TODAY AT KALPANA */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  Today at Kalpanaaa
                </h2>
                <p className="text-xs text-slate-400 mt-1">Live daily attendance activity for Kalpanaaa Software Solutions</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-slate-950 text-slate-300 rounded-lg border border-slate-800">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-center">
                <div className="text-3xl font-black text-white">{employees.length}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Total Team Size</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-center">
                <div className="text-3xl font-black text-emerald-400">{presentCount}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Checked In Today</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-center">
                <div className="text-3xl font-black text-amber-400">{lateCount}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Late Arrivals</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-center">
                <div className="text-3xl font-black text-blue-400">{leaveCount}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Away / Leave</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — OUR PEOPLE */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The People Behind Kalpanaaa
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Our engineering, design, and operations talent driving innovation every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Live Employee Showcase (Prioritizes Executives & HR) */}
            {[...employees]
              .sort((a, b) => {
                const roleWeight = (role: string) => {
                  if (role === 'SUPER_ADMIN') return 3;
                  if (role === 'HR_ADMIN') return 2;
                  return 1;
                };
                return roleWeight(b.role) - roleWeight(a.role);
              })
              .slice(0, 4)
              .map((emp) => (
                <div key={emp.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 group hover:border-slate-700 transition-all">
                  <img
                    src={emp.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                    alt={emp.fullName}
                    className="w-16 h-16 rounded-xl object-cover object-top border border-slate-700 shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-white truncate">{emp.fullName}</h3>
                    <p className="text-[11px] text-blue-400 truncate">{emp.designation}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">{emp.role === 'SUPER_ADMIN' ? 'Executive' : emp.role === 'HR_ADMIN' ? 'Management' : emp.department}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* SECTION 05 — OUR PROGRESS */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Our Progress & Team Overview
              </h2>
              <p className="text-xs text-slate-400 mt-1">Internal snapshot of our organization and department distribution</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-xs block">Engineering & Development</span>
                <span className="text-lg font-bold text-white mt-1 block">
                  {employees.filter(e => (e.department || '').toLowerCase().includes('engine') || (e.department || '').toLowerCase().includes('soft')).length} Engineers
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-xs block">Operations & HR</span>
                <span className="text-lg font-bold text-white mt-1 block">
                  {employees.filter(e => (e.department || '').toLowerCase().includes('hr') || (e.department || '').toLowerCase().includes('oper')).length} Members
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-xs block">Quality & Management</span>
                <span className="text-lg font-bold text-white mt-1 block">
                  {employees.filter(e => (e.department || '').toLowerCase().includes('quality') || (e.department || '').toLowerCase().includes('exec')).length} Members
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — KALPANA CULTURE */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How We Work Together
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Our shared engineering focus and workplace principles at Kalpanaaa Software Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-blue-400 font-bold text-xs uppercase tracking-wider">Ownership</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                “What we build matters. How we build it matters more. Every team member takes full ownership of their work.”
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Collaboration</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                “We build together. We grow together. Seamless communication drives our software excellence.”
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-purple-400 font-bold text-xs uppercase tracking-wider">Responsibility</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                “Our technology is powered by our people. Precision and punctuality are at the core of our operations.”
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07 — CLOSING MESSAGE */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-4 pt-6">
          <div className="p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white">We are Kalpanaaa.</h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Building software, learning continuously, and moving forward together as one unified team.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onGetStarted('signin')}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-blue-900/50 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Enter Kalpanaaa Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 lg:px-12 border-t border-slate-800/80 text-center text-xs text-slate-500 bg-slate-950">
        <p>© {new Date().getFullYear()} Kalpanaaa Software Solutions. Private Internal Employee Workspace.</p>
      </footer>

    </div>
  );
};
