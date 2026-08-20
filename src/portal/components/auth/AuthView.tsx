import React, { useState, useEffect } from 'react';
import kalpanaLogo from '../../assets/images/kalpana_logo.jpeg';
import { useAuth } from '../../context/AuthContext';
import { useHaptic } from '../../hooks/useHaptic';
import { animations } from '../../lib/animations';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Lock, 
  Mail, 
  User, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Briefcase,
  KeyRound,
  X,
  ScanFace
} from 'lucide-react';
import { UserRole } from '../../types';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../lib/firebase';

interface AuthViewProps {
  onBackToLanding?: () => void;
}

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="inline-block min-w-[120px]">{displayText}<span className="animate-pulse">|</span></span>;
};

export const AuthView: React.FC<AuthViewProps> = ({ onBackToLanding }) => {
  const { loginWithEmail, isLoading, settings } = useAuth();
  const { triggerHaptic } = useHaptic();


  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Sign In state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');



  // Forgot password modal
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerHaptic('medium');
    setFeedback(null);
    if (!loginEmail || !loginPassword) {
      triggerHaptic('error');
      setFeedback({ type: 'error', message: 'Please provide both email and password.' });
      return;
    }

    const res = await loginWithEmail(loginEmail, loginPassword);
    if (!res.success) {
      triggerHaptic('error');
      setFeedback({ type: 'error', message: res.message });
    } else {
      triggerHaptic('success');
    }
  };



  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerHaptic('medium');
    if (!resetEmail) return;
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      triggerHaptic('success');
      setResetSent(true);
    } catch (err: any) {
      triggerHaptic('success'); // Show confirmation regardless for security
      setResetSent(true); 
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col justify-between selection:bg-[var(--accent-blue)] selection:text-white font-sans antialiased relative overflow-hidden">
      
      {/* Subtle animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-blue)] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[var(--accent-violet)] rounded-full blur-[150px] opacity-20" />
      </div>

      {/* Top Header Branding Bar */}
      <header className={`px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 backdrop-blur-xl flex items-center justify-between relative z-10`}>
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-10 h-10 rounded-xl overflow-hidden shadow-[var(--shadow-glow-blue)] shrink-0 border border-[var(--border-subtle)]"
          >
            <img src={kalpanaLogo} alt="Kalpanaaa Logo" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base font-bold tracking-tight flex items-center gap-2 text-[var(--text-primary)]"
            >
              <span className="hidden sm:inline">Kalpanaaa Software Solutions</span>
              <span className="sm:hidden">KSS</span>
            </motion.h1>
            <p className="text-xs text-[var(--text-tertiary)] font-medium hidden sm:block">
              <TypewriterText text="Empowering Teams" />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {onBackToLanding && (
            <button
              onClick={() => { triggerHaptic('light'); onBackToLanding(); }}
              className={`px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-white bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] transition-colors cursor-pointer ${animations.tap}`}
            >
              ← Back
            </button>
          )}
          <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--text-tertiary)] font-mono">
            <ShieldCheck className="w-4 h-4 text-[var(--accent-emerald)]" />
            <span>Secure Access</span>
          </div>
        </div>
      </header>

      {/* Main Form Center Box - Slides up from bottom */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 relative z-10 perspective-1000">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="w-full max-w-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl shadow-[var(--shadow-xl)] overflow-hidden backdrop-blur-xl"
        >


          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Feedback Notification Banner */}
            {feedback && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border text-xs font-medium flex items-center gap-3 ${
                feedback.type === 'success' 
                  ? 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)]/20 text-[var(--accent-emerald)]' 
                  : 'bg-[var(--accent-rose)]/10 border-[var(--accent-rose)]/20 text-[var(--accent-rose)]'
              }`}>
                {feedback.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                <span>{feedback.message}</span>
              </motion.div>
            )}

            {/* EMPLOYEE SIGN IN */}
              <form onSubmit={handleSignIn} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">Employee Portal Sign In</h2>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Enter your company email address and password to access your workspace.</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">Company Email Address</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-[var(--text-tertiary)] absolute left-4 top-4" />
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={e => setLoginEmail(e.target.value)}
                        placeholder="employee@kalpanaaa.in"
                        className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] focus:border-[var(--accent-blue)] rounded-2xl pl-12 pr-4 h-[52px] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold text-[var(--text-secondary)]">Password</label>
                      <button
                        type="button"
                        onClick={() => setIsForgotModalOpen(true)}
                        className="text-xs font-medium text-[var(--accent-blue)] hover:text-blue-300 cursor-pointer transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-[var(--text-tertiary)] absolute left-4 top-4" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={loginPassword}
                        onChange={e => setLoginPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] focus:border-[var(--accent-blue)] rounded-2xl pl-12 pr-12 h-[52px] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none transition-all shadow-inner"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-4 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] cursor-pointer transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-[52px] bg-[var(--accent-blue)] hover:bg-blue-500 text-white font-bold text-sm rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[var(--shadow-glow-blue)] disabled:opacity-50 active:scale-[0.98]"
                  >
                    {isLoading ? 'Authenticating...' : 'Sign In'}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => triggerHaptic('light')}>
                    <ScanFace className="w-6 h-6 text-[var(--accent-blue)] animate-pulse" />
                    <span className="text-xs font-semibold text-[var(--text-secondary)]">Face ID / Touch ID Login</span>
                  </div>
                </div>
              </form>

          </div>
        </motion.div>
      </main>

      {/* Forgot Password Modal */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl shadow-[var(--shadow-xl)] overflow-hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-[var(--border-subtle)]">
              <h3 className="font-bold text-[var(--text-primary)]">Reset Password</h3>
              <button 
                onClick={() => { setIsForgotModalOpen(false); setResetSent(false); setResetEmail(''); }}
                className="p-1 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {resetSent ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[var(--accent-emerald)]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[var(--accent-emerald)]/20">
                    <CheckCircle2 className="w-8 h-8 text-[var(--accent-emerald)]" />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--text-primary)]">Link Sent!</h4>
                  <p className="text-sm text-[var(--text-secondary)]">If {resetEmail} exists in our system, you will receive a password reset email shortly.</p>
                  <button
                    onClick={() => { setIsForgotModalOpen(false); setResetSent(false); setResetEmail(''); }}
                    className="w-full h-[44px] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-bold text-sm rounded-xl transition-all cursor-pointer mt-2"
                  >
                    Back to Login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">Enter your email address and we'll send you a link to reset your password.</p>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={resetEmail}
                      onChange={e => setResetEmail(e.target.value)}
                      placeholder="name@kalpanaaa.in"
                      className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] focus:border-[var(--accent-blue)] rounded-xl px-4 h-[44px] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[44px] bg-[var(--accent-blue)] hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Send Reset Link
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="p-6 flex items-center justify-between text-[10px] text-[var(--text-tertiary)] relative z-10 font-medium">
        <div className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5" />
          <span>© {new Date().getFullYear()} KSS Hub</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};
