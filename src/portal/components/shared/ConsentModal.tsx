import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, CheckCircle2, AlertCircle, Eye } from 'lucide-react';

interface ConsentModalProps {
  isOpen: boolean;
  onConsent: () => void;
  onDecline: () => void;
}

export const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onConsent, onDecline }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-100"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-tight">Biometric Data Consent</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Device-Only Facial Verification</p>
          </div>
        </div>

        <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-xs">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-slate-300"><strong className="text-white">Device-Only Storage:</strong> Your facial descriptors remain encrypted on your browser device (`IndexedDB`).</p>
          </div>
          <div className="flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-slate-300"><strong className="text-white">Zero Server Overhead:</strong> Facial recognition logic executes 100% in your local browser without external cloud API calls.</p>
          </div>
          <div className="flex items-start gap-2.5">
            <Eye className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p className="text-slate-300"><strong className="text-white">Liveness Verification:</strong> Prevents photo or screen playback spoofing via live pose detection.</p>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <button
            onClick={onConsent}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>I Consent & Continue</span>
          </button>
          
          <button
            onClick={onDecline}
            className="w-full py-2.5 text-xs text-slate-400 hover:text-slate-200 font-bold transition-colors cursor-pointer"
          >
            Decline — Use QR / GPS Check-In Instead
          </button>
        </div>
      </motion.div>
    </div>
  );
};
