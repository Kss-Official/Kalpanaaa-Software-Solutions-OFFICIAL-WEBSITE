import React from 'react';
import { FileText, Lock } from 'lucide-react';

export const DocumentGenerator: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] max-w-2xl mx-auto text-center space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="relative bg-slate-900/90 border border-slate-800/80 p-6 rounded-3xl shadow-2xl">
          <FileText className="w-12 h-12 text-blue-500" strokeWidth={1.5} />
        </div>
      </div>
      
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight mb-3">Document Generator</h1>
        <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
          The Kalpanaaa Document Generator is currently undergoing infrastructural updates to support robust, cryptographically-signed HR documents and automated PDF generation.
        </p>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mt-4">
        <Lock className="w-3.5 h-3.5" /> Coming Soon in v2.0
      </div>
    </div>
  );
};
