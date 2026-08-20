import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHaptic } from '../../hooks/useHaptic';
import { animations } from '../../lib/animations';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck2, 
  UserCheck, 
  CreditCard, 
  Menu 
} from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenMobileMenu: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenMobileMenu
}) => {
  const { role } = useAuth();
  const { triggerHaptic } = useHaptic();
  const isAdmin = role === 'SUPER_ADMIN' || role === 'HR_ADMIN';

  const adminTabs = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'employees', label: 'Directory', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: CalendarCheck2 },
    { id: 'my_id_card', label: 'ID Card', icon: CreditCard },
  ];

  const employeeTabs = [
    { id: 'emp_dashboard', label: 'Workspace', icon: LayoutDashboard },
    { id: 'emp_attendance', label: 'Attendance', icon: UserCheck },
    { id: 'emp_leave', label: 'Leaves', icon: CalendarCheck2 },
    { id: 'emp_qr', label: 'ID Pass', icon: CreditCard },
  ];

  const tabs = isAdmin ? adminTabs : employeeTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] backdrop-blur-xl pb-[env(safe-area-inset-bottom)] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-around max-w-md mx-auto h-16 px-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                triggerHaptic('light');
                setActiveTab(tab.id);
              }}
              className={`flex flex-col items-center justify-center h-full rounded-2xl cursor-pointer min-w-[60px] relative outline-none ${animations.tap}`}
            >
              {/* Background Highlight for Active Tab */}
              {isActive && (
                <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-50 rounded-2xl pointer-events-none" />
              )}
              
              {/* Indicator Pill */}
              {isActive && (
                <div 
                  className="absolute top-0 w-8 h-1 bg-[var(--accent-blue)] rounded-b-full transition-all duration-[var(--duration-spring)] ease-[var(--ease-spring)]"
                  style={{ boxShadow: 'var(--shadow-glow-blue)' }}
                />
              )}
              
              {/* Icon Container with Pop Animation */}
              <div className={`relative transition-transform duration-[var(--duration-normal)] ease-[var(--ease-spring)] mt-1 ${isActive ? 'scale-110 text-[var(--accent-blue)]' : 'scale-100 text-[var(--text-tertiary)]'}`}>
                <Icon className="w-[22px] h-[22px]" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              
              {/* Label */}
              <span 
                className={`text-[10px] tracking-tight mt-1 transition-all duration-[var(--duration-normal)] ease-[var(--ease-spring)] ${
                  isActive 
                    ? 'text-[var(--accent-blue)] font-semibold opacity-100 translate-y-0' 
                    : 'text-[var(--text-tertiary)] font-medium opacity-0 translate-y-1 absolute bottom-0'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* Menu Drawer Toggle */}
        <button
          onClick={() => {
            triggerHaptic('light');
            onOpenMobileMenu();
          }}
          className={`flex flex-col items-center justify-center h-full rounded-2xl text-[var(--text-tertiary)] font-medium cursor-pointer min-w-[60px] outline-none ${animations.tap}`}
        >
          <div className="relative mt-1">
            <Menu className="w-[22px] h-[22px]" strokeWidth={2} />
          </div>
          <span className="text-[10px] tracking-tight mt-1 opacity-0 translate-y-1 absolute bottom-0 transition-all duration-[var(--duration-normal)]">
            More
          </span>
        </button>
      </div>
    </nav>
  );
};

