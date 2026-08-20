import React, { useState, useEffect } from 'react';
import kalpanaLogo from '../../assets/images/kalpana_logo.jpeg';
import { useAuth } from '../../context/AuthContext';
import { 
  LogOut, 
  Clock, 
  ChevronDown,
  QrCode,
  Menu,
  X,
  Download
} from 'lucide-react';
import { UserRole } from '../../types';
import { NotificationBell } from './NotificationBell';

interface HeaderProps {
  onOpenScanner?: () => void;
  onToggleMobileSidebar?: () => void;
  isMobileSidebarOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  onToggleMobileSidebar, 
  isMobileSidebarOpen,
}) => {
  const { activeEmployee, role, logout, settings } = useAuth();
  const [timeStr, setTimeStr] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
    setShowUserDropdown(false);
  };

  const getRoleBadgeColor = (r: UserRole) => {
    switch (r) {
      case 'SUPER_ADMIN':    return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'HR_ADMIN':       return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'PROJECT_MANAGER': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'EMPLOYEE':       return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    }
  };

  const getRoleLabel = (r: UserRole, designation?: string) => {
    if (r === 'SUPER_ADMIN') return designation?.includes('CEO') ? 'CEO' : 'CTO';
    if (r === 'HR_ADMIN') return 'HR Lead';
    if (r === 'PROJECT_MANAGER') return 'PM';
    return 'Employee';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showUserDropdown) return;
    const close = () => setShowUserDropdown(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [showUserDropdown]);

  return (
    <header className="h-14 bg-slate-950/95 border-b border-slate-800 px-3 sm:px-5 flex items-center justify-between sticky top-0 z-30 backdrop-blur-xl shadow-md">
      
      {/* LEFT — hamburger + logo + name */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {/* Mobile hamburger */}
        {onToggleMobileSidebar && (
          <button
            onClick={onToggleMobileSidebar}
            className="md:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Toggle Navigation"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}

        {/* Logo + company name */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shrink-0 border border-slate-700/60 shadow-md shadow-blue-950/40">
            <img src={kalpanaLogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xs sm:text-sm font-extrabold text-white leading-tight truncate max-w-[130px] sm:max-w-[200px] md:max-w-none">
              <span className="hidden sm:inline">{settings.companyName}</span>
              <span className="sm:hidden">KSS</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-medium hidden md:block truncate">{settings.officeName}</p>
          </div>
        </div>
      </div>

      {/* RIGHT — clock, scanner, profile dropdown */}
      <div className="flex items-center gap-2 shrink-0">

        {/* Live clock — hidden on small screens */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
          <Clock className="w-3 h-3 text-slate-500" />
          <span className="font-bold text-white">{timeStr}</span>
        </div>

        {/* Notification Bell — visible for all authenticated roles */}
        <NotificationBell />


        {/* Role badge — hidden on small screens */}
        {(() => {
          const effectiveRole = activeEmployee?.role || role;
          return (
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-xs">
              <span className={`px-2 py-0.5 rounded-md text-[11px] font-extrabold border ${getRoleBadgeColor(effectiveRole)}`}>
                {getRoleLabel(effectiveRole, activeEmployee?.designation)}
              </span>
            </div>
          );
        })()}

        {/* Profile avatar dropdown */}
        <div className="relative" onClick={e => e.stopPropagation()}>
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer border border-slate-800"
          >
            <img
              src={activeEmployee?.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
              alt={activeEmployee?.fullName || 'User'}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover border border-slate-700"
            />
            <div className="hidden sm:block text-left leading-tight pr-0.5">
              <div className="text-xs font-bold text-white truncate max-w-[90px]">
                {activeEmployee?.fullName || 'User'}
              </div>
              <div className="text-[10px] text-slate-400 truncate max-w-[90px]">
                {activeEmployee?.designation?.split(' ')[0] || role}
              </div>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-500 hidden sm:block" />
          </button>

          {showUserDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-slate-900 text-slate-200 rounded-2xl shadow-2xl border border-slate-800 py-1.5 z-50">
              {/* User info */}
              <div className="px-4 py-3 border-b border-slate-800">
                <p className="text-xs font-bold text-white truncate">{activeEmployee?.fullName || 'Logged In'}</p>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">{activeEmployee?.email || ''}</p>
                <span className={`inline-block mt-2 px-2 py-0.5 text-[10px] font-bold rounded-md border ${getRoleBadgeColor(role)}`}>
                  {role}
                </span>
              </div>

              {/* Install App Button */}
              {deferredPrompt && (
                <div className="px-2 py-1">
                  <button
                    onClick={handleInstallApp}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-emerald-400 hover:bg-emerald-950/40 rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    Install App
                  </button>
                </div>
              )}

              {/* Sign out */}
              <button
                onClick={() => { setShowUserDropdown(false); logout(); }}
                className="w-full text-left px-4 py-2.5 text-xs font-bold text-rose-400 hover:bg-rose-950/40 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
