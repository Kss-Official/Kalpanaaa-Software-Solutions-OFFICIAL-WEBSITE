import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, ShieldAlert, CheckCircle2, Building2, MapPin, Briefcase } from 'lucide-react';
import kalpanaLogo from '../../assets/images/kalpana_logo.jpeg';

export const VerificationView: React.FC = () => {
  const { employees, settings } = useAuth();
  const [empId, setEmpId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmpId(params.get('empId'));
  }, []);

  if (!empId) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <ShieldAlert className="w-16 h-16 text-rose-500 mb-4" />
        <h1 className="text-2xl font-black text-white">Invalid Verification Link</h1>
        <p className="text-slate-400 mt-2">No Employee ID was provided in the link.</p>
      </div>
    );
  }

  const employee = employees.find(e => e.employeeId === empId);

  if (!employee) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <ShieldAlert className="w-16 h-16 text-rose-500 mb-4" />
        <h1 className="text-2xl font-black text-white">Employee Not Found</h1>
        <p className="text-slate-400 mt-2">The requested Employee ID ({empId}) is not valid or has been deactivated.</p>
        <p className="text-xs text-slate-500 mt-6 uppercase tracking-wider">{settings.companyName}</p>
      </div>
    );
  }

  const isVerified = employee.status === 'Active';

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center py-12 px-4 selection:bg-emerald-500/30">
      
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-20 ${isVerified ? 'bg-emerald-500' : 'bg-rose-500'}`} />
        <div className={`absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-10 ${isVerified ? 'bg-blue-500' : 'bg-rose-600'}`} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        
        {/* Header Branding */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 mb-4">
            <img src={kalpanaLogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-black text-white uppercase tracking-widest text-center">{settings.companyName}</h1>
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-1">Official Verification Portal</p>
        </div>

        {/* Verification Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Status Banner */}
          <div className={`p-4 flex items-center justify-center gap-2 ${isVerified ? 'bg-emerald-500/20 border-b border-emerald-500/30' : 'bg-rose-500/20 border-b border-rose-500/30'}`}>
            {isVerified ? (
              <>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-emerald-400 tracking-wide uppercase text-sm">Authorized & Active Employee</span>
              </>
            ) : (
              <>
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <span className="font-bold text-rose-400 tracking-wide uppercase text-sm">Inactive / Suspended</span>
              </>
            )}
          </div>

          <div className="p-8 text-center border-b border-slate-800/50">
            {/* Profile Photo */}
            <div className="relative inline-block mb-5">
              <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${isVerified ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <img
                src={employee.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'}
                alt={employee.fullName}
                className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-800 shadow-xl"
              />
              {isVerified && (
                <div className="absolute bottom-1 right-1 bg-slate-900 rounded-full p-1 border-2 border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              )}
            </div>

            <h2 className="text-2xl font-black text-white mb-1">{employee.fullName}</h2>
            <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">{employee.designation}</p>
            
            <div className="mt-4 py-1.5 px-4 bg-slate-950 border border-slate-800 rounded-xl inline-block">
              <span className="font-mono text-xs font-bold text-slate-300 tracking-widest">ID: {employee.employeeId}</span>
            </div>
          </div>

          <div className="p-6 bg-slate-900/50 space-y-4">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Department</p>
                <p className="font-medium text-white">{employee.department}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Joining Date</p>
                <p className="font-medium text-white">{new Date(employee.joiningDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-sm">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Work Base</p>
                <p className="font-medium text-white">{employee.workLocation || settings.officeName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Timestamp */}
        <div className="mt-8 text-center text-[10px] text-slate-500 font-mono space-y-1">
          <p>Verified Securely via Kalpanaaa HRMS API</p>
          <p>Timestamp: {new Date().toUTCString()}</p>
        </div>

      </div>
    </div>
  );
};
