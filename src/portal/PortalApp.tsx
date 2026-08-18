import React, { useState, lazy, Suspense } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthView } from './components/auth/AuthView';
import { PWAInstallPrompt } from './components/common/PWAInstallPrompt';
import { Employee } from './types';
import { Loader2 } from 'lucide-react';
import './portal.css';

// ── Eager imports (needed immediately on boot) ──
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { MobileBottomNav } from './components/common/MobileBottomNav';

// ── Lazy imports (code-split: only loaded when user navigates to that view) ──
const LandingView          = lazy(() => import('./components/landing/LandingView').then(m => ({ default: m.LandingView })));
const DashboardView        = lazy(() => import('./components/admin/DashboardView').then(m => ({ default: m.DashboardView })));
const EmployeeDirectory    = lazy(() => import('./components/admin/EmployeeDirectory').then(m => ({ default: m.EmployeeDirectory })));
const EmployeeProfileModal = lazy(() => import('./components/admin/EmployeeProfileModal').then(m => ({ default: m.EmployeeProfileModal })));
const EmployeeFormModal    = lazy(() => import('./components/admin/EmployeeFormModal').then(m => ({ default: m.EmployeeFormModal })));
const EmployeeIdCardModal  = lazy(() => import('./components/admin/EmployeeIdCardModal').then(m => ({ default: m.EmployeeIdCardModal })));
const AttendanceManagement = lazy(() => import('./components/admin/AttendanceManagement').then(m => ({ default: m.AttendanceManagement })));
const ReportsView          = lazy(() => import('./components/admin/ReportsView').then(m => ({ default: m.ReportsView })));
const DocumentGenerator    = lazy(() => import('./components/admin/DocumentGenerator').then(m => ({ default: m.DocumentGenerator })));
const SettingsView         = lazy(() => import('./components/admin/SettingsView').then(m => ({ default: m.SettingsView })));
const AuditLogsView        = lazy(() => import('./components/admin/AuditLogsView').then(m => ({ default: m.AuditLogsView })));
const LeaveApprovalsView   = lazy(() => import('./components/admin/LeaveApprovalsView').then(m => ({ default: m.LeaveApprovalsView })));
const EmployeePortal       = lazy(() => import('./components/employee/EmployeePortal').then(m => ({ default: m.EmployeePortal })));

// HR & PM Portal Lazy Components
const HRDashboard          = lazy(() => import('./components/hr/HRDashboard').then(m => ({ default: m.HRDashboard })));
const HRLeaveWfhApprovals  = lazy(() => import('./components/hr/HRLeaveWfhApprovals').then(m => ({ default: m.HRLeaveWfhApprovals })));
const HRPayrollView        = lazy(() => import('./components/hr/HRPayrollView').then(m => ({ default: m.HRPayrollView })));
const HRRulesView          = lazy(() => import('./components/hr/HRRulesView').then(m => ({ default: m.HRRulesView })));
const PMDashboard          = lazy(() => import('./components/pm/PMDashboard').then(m => ({ default: m.PMDashboard })));
const PMProjectsView       = lazy(() => import('./components/pm/PMProjectsView').then(m => ({ default: m.PMProjectsView })));
const PMTeamPerformance    = lazy(() => import('./components/pm/PMTeamPerformance').then(m => ({ default: m.PMTeamPerformance })));

// Minimal spinner used as Suspense fallback inside the app (not a splash)
const ViewLoader = () => (
  <div className="flex items-center justify-center h-[60vh]">
    <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
  </div>
);

// ── Inner app shell (only rendered after auth is known) ──
function AppShell() {
  const { user, role, isLoading, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab]               = useState('dashboard');
  const [isMobileSidebarOpen, setMobileSidebar] = useState(false);

  // Modal state (admin only)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showFormModal, setShowFormModal]       = useState(false);
  const [editingEmployee, setEditingEmployee]   = useState<Employee | null>(null);
  const [showIdCardModal, setShowIdCardModal]   = useState(false);
  const [idCardEmployee, setIdCardEmployee]     = useState<Employee | null>(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0f]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Loading portal…</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthView />;
  }

  // ── EMPLOYEE portal ──
  if (role === 'EMPLOYEE') {
    return (
      <div className="min-h-screen bg-[#0a0a0f]">
        <Suspense fallback={<ViewLoader />}>
          <EmployeePortal activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>
        <PWAInstallPrompt />
      </div>
    );
  }

  // ── Shared layout shell for HR, PM, SUPER_ADMIN ──
  const getViewContent = () => {
    // ── HR_ADMIN views ──
    if (role === 'HR_ADMIN') {
      switch (activeTab) {
        case 'dashboard': return <HRDashboard onNavigateTab={setActiveTab} />;
        case 'leave_wfh': return <HRLeaveWfhApprovals />;
        case 'payroll':   return <HRPayrollView />;
        case 'rules':     return <HRRulesView />;
        default:          return <HRDashboard onNavigateTab={setActiveTab} />;
      }
    }

    // ── PROJECT_MANAGER views ──
    if (role === 'PROJECT_MANAGER') {
      switch (activeTab) {
        case 'dashboard':       return <PMDashboard onNavigateTab={setActiveTab} />;
        case 'pm_projects':     return <PMProjectsView />;
        case 'pm_performance':  return <PMTeamPerformance />;
        default:                return <PMDashboard onNavigateTab={setActiveTab} />;
      }
    }

    // ── SUPER_ADMIN views ──
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView
            onNavigateTab={setActiveTab}
            onOpenAddEmployee={() => { setEditingEmployee(null); setShowFormModal(true); }}
          />
        );
      case 'employees':
        return (
          <EmployeeDirectory
            onSelectEmployee={(e) => { setSelectedEmployee(e); setShowProfileModal(true); }}
            onOpenAddModal={() => { setEditingEmployee(null); setShowFormModal(true); }}
            onOpenEditModal={(e) => { setEditingEmployee(e); setShowFormModal(true); }}
            onOpenIdCardModal={(e) => { setIdCardEmployee(e); setShowIdCardModal(true); }}
          />
        );
      case 'attendance':  return <AttendanceManagement />;
      case 'leave':       return <LeaveApprovalsView />;
      case 'reports':     return <ReportsView />;
      case 'documents':   return <DocumentGenerator />;
      case 'settings':    return <SettingsView />;
      case 'audit':       return <AuditLogsView />;
      case 'landing':
        return (
          <LandingView
            onGetStarted={() => setActiveTab('dashboard')}
          />
        );
      default:
        return (
          <DashboardView
            onNavigateTab={setActiveTab}
            onOpenAddEmployee={() => { setEditingEmployee(null); setShowFormModal(true); }}
          />
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setMobileSidebar(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onToggleMobileSidebar={() => setMobileSidebar(prev => !prev)}
          isMobileSidebarOpen={isMobileSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<ViewLoader />}>
            {getViewContent()}
          </Suspense>
        </main>
        <MobileBottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenMobileMenu={() => setMobileSidebar(true)}
        />
      </div>

      {/* Admin modals */}
      {showProfileModal && selectedEmployee && (
        <Suspense fallback={null}>
          <EmployeeProfileModal
            employee={selectedEmployee}
            onClose={() => setShowProfileModal(false)}
            onOpenEdit={(e) => { setEditingEmployee(e); setShowFormModal(true); setShowProfileModal(false); }}
            onOpenIdCard={(e) => { setIdCardEmployee(e); setShowIdCardModal(true); }}
          />
        </Suspense>
      )}
      {showFormModal && (
        <Suspense fallback={null}>
          <EmployeeFormModal
            employeeToEdit={editingEmployee}
            onClose={() => { setShowFormModal(false); setEditingEmployee(null); }}
          />
        </Suspense>
      )}
      {showIdCardModal && idCardEmployee && (
        <Suspense fallback={null}>
          <EmployeeIdCardModal
            employee={idCardEmployee}
            onClose={() => { setShowIdCardModal(false); setIdCardEmployee(null); }}
          />
        </Suspense>
      )}

      <PWAInstallPrompt />
    </div>
  );
}

// ── Root: wrap with AuthProvider ──
export default function PortalApp() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}
