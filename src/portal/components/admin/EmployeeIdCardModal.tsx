import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Employee } from '../../types';
import { X, Printer, Download, Mail, MessageSquare, ShieldCheck, QrCode, Building2 } from 'lucide-react';
import QRCode from 'qrcode';
import Barcode from 'react-barcode';
import { downloadElementAsPdf, openWhatsAppShare, openEmailShare } from '../../lib/pdfGenerator';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic } from '../../hooks/useHaptic';
import { animations } from '../../lib/animations';

interface EmployeeIdCardModalProps {
  employee: Employee;
  onClose: () => void;
}

export const EmployeeIdCardModal: React.FC<EmployeeIdCardModalProps> = ({ employee, onClose }) => {
  const { settings } = useAuth();
  const [qrUrl, setQrUrl] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const websiteUrl = 'https://www.kalpanaaasoftwaresolutions.in/';
    QRCode.toDataURL(websiteUrl, { 
      width: 400, margin: 1, errorCorrectionLevel: 'H',
      color: { dark: '#000000', light: '#FFFFFF' }
    }, (err, url) => {
      if (!err && url) setQrUrl(url);
    });
  }, []);

  const handlePrintCard = () => { triggerHaptic('light'); window.print(); };
  const handleDownloadPdf = () => { triggerHaptic('medium'); downloadElementAsPdf('printable-id-card-element', `ID_CARD_${employee.employeeId}_${employee.fullName.replace(/\s+/g, '_')}.pdf`); };
  const handleShareWhatsApp = () => { triggerHaptic('light'); openWhatsAppShare(`Employee ID Badge: ${employee.fullName} (${employee.employeeId})`, `Designation: ${employee.designation}\nDepartment: ${employee.department}\nCompany: Kalpanaaa Software Solutions`); };
  const handleShareEmail = () => { triggerHaptic('light'); openEmailShare(employee.email, `Official Employee ID Badge Details - ${employee.fullName}`, `Dear ${employee.fullName},\n\nYour official corporate ID badge record has been generated.\n\nEmployee ID: ${employee.employeeId}\nDesignation: ${employee.designation}\nDepartment: ${employee.department}\nCompany: Kalpanaaa Software Solutions`); };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex flex-col justify-end p-0 sm:p-6 sm:items-center pointer-events-auto print:static print:bg-white print:p-0">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md print:hidden"
          onClick={() => { triggerHaptic('light'); onClose(); }}
        />

        {/* Modal Shell */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 500 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.y > 100 || info.velocity.y > 500) {
              triggerHaptic('medium');
              onClose();
            }
          }}
          initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full sm:max-w-4xl bg-[var(--bg-primary)] rounded-t-3xl sm:rounded-3xl border-t sm:border border-[var(--border-subtle)] shadow-[var(--shadow-xl)] flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-hidden print:w-full print:h-auto print:border-none print:shadow-none print:max-h-none"
        >
          {/* Mobile Drag Indicator */}
          <div className="w-full flex justify-center py-3 sm:hidden absolute top-0 z-20 touch-none print:hidden">
            <div className="w-12 h-1.5 bg-[var(--border-strong)] rounded-full"></div>
          </div>

          {/* Sticky Header */}
          <div className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] p-5 sm:p-6 pt-10 sm:pt-6 flex items-center justify-between border-b border-[var(--border-subtle)] shrink-0 print:hidden z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--accent-blue)]" />
              <span className="font-bold text-sm sm:text-base tracking-tight">Enterprise ID Badge</span>
            </div>
            <button onClick={() => { triggerHaptic('light'); onClose(); }} className={`p-2 text-[var(--text-tertiary)] hover:text-white hover:bg-[var(--bg-elevated)] rounded-full transition-colors cursor-pointer outline-none ${animations.tap}`}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Canvas Container */}
          <div className="p-6 sm:p-8 bg-[var(--bg-primary)] flex flex-col items-center justify-start sm:justify-center overflow-y-auto flex-1 relative print:p-0 print:overflow-visible pb-32 sm:pb-8">
            
            {/* Instruction Toggle */}
            <p className="text-[var(--text-secondary)] text-xs mb-6 text-center animate-pulse print:hidden">Tap card to flip</p>

            {/* 3D Flip Container */}
            <div 
              className="relative w-[300px] h-[480px] sm:w-[340px] sm:h-[540px] perspective-1000 print:hidden cursor-pointer"
              onClick={() => {
                triggerHaptic('medium');
                setIsFlipped(!isFlipped);
              }}
            >
              <motion.div
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                
                {/* FRONT FACE */}
                <div 
                  className="absolute inset-0 backface-hidden w-full h-full rounded-[24px] shadow-[var(--shadow-glow-blue)] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #111118 0%, #1a1a24 100%)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Holographic Shimmer Strip */}
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-50 holographic-strip pointer-events-none" />
                  
                  {/* Subtle Background Elements */}
                  <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 w-full h-full flex flex-col p-6">
                    {/* Header: Logo */}
                    <div className="flex justify-between items-start w-full">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[var(--accent-blue)] tracking-[0.2em] uppercase">Kalpanaaa</span>
                        <span className="text-[8px] font-semibold text-white/50 tracking-[0.1em] uppercase">Software Solutions</span>
                      </div>
                      <Building2 className="w-6 h-6 text-white/80" />
                    </div>

                    {/* Body: Photo & Name */}
                    <div className="flex-1 flex flex-col justify-center items-center gap-5 mt-4">
                      <div className="relative">
                        <div className="absolute inset-[-4px] bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-full animate-pulse opacity-50" />
                        <img 
                          src={employee.profilePhotoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.fullName)}&background=111118&color=fff`} 
                          alt={employee.fullName} 
                          className="relative w-28 h-28 object-cover rounded-full border-4 border-[var(--bg-elevated)] shadow-lg"
                        />
                      </div>
                      
                      <div className="text-center w-full">
                        <h2 className="text-xl font-black text-white tracking-tight break-words px-2">{employee.fullName}</h2>
                        <p className="text-xs font-semibold text-[var(--accent-blue)] mt-1 uppercase tracking-wider">{employee.designation}</p>
                        <p className="text-[10px] font-medium text-[var(--text-tertiary)] uppercase tracking-widest">{employee.department}</p>
                      </div>
                    </div>

                    {/* Footer: Barcode */}
                    <div className="w-full flex flex-col items-center justify-center mt-auto pb-2">
                      <div className="bg-white/90 p-2 rounded-xl w-full flex items-center justify-center backdrop-blur-md overflow-hidden">
                        <div className="flex justify-center">
                          <Barcode value={employee.employeeId} width={1.8} height={40} displayValue={false} margin={0} background="transparent" lineColor="#000" />
                        </div>
                      </div>
                      <span className="mt-2 text-xs font-mono font-bold text-white/70 tracking-[0.2em] text-center w-full">{employee.employeeId}</span>
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div 
                  className="absolute inset-0 backface-hidden w-full h-full rounded-[24px] overflow-hidden flex flex-col justify-between"
                  style={{
                    background: '#1a1a24',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="w-full h-12 bg-black/50 border-b border-white/10 mt-6" /> {/* Magnetic Strip Mock */}
                  
                  <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
                    <div className="bg-white p-3 rounded-2xl shadow-xl">
                      {qrUrl ? (
                        <img src={qrUrl} alt="Website QR Code" className="w-36 h-36 object-contain" />
                      ) : (
                        <div className="w-36 h-36 bg-slate-100 animate-pulse rounded-xl" />
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 items-center text-center">
                      <div className="flex items-center gap-2 text-[10px] font-black text-white/80 uppercase tracking-widest">
                        <QrCode className="w-3.5 h-3.5 text-[var(--accent-blue)]" /> Verify Identity
                      </div>
                      <p className="text-[9px] text-white/40 leading-relaxed max-w-[200px]">
                        This card is the property of Kalpanaaa Software Solutions. If found, please return to the main office.
                      </p>
                    </div>
                  </div>

                  <div className="w-full p-4 bg-black/30 border-t border-white/5 text-[8px] text-center text-white/30 uppercase tracking-widest">
                    Authorized Personnel Only
                  </div>
                </div>

              </motion.div>
            </div>

            {/* PRINT VERSION (Hidden on screen) */}
            <div id="printable-id-card-element" className="hidden print:flex flex-row gap-6 w-[700px] h-auto p-4 items-center">
              {/* Front Print */}
              <div className="w-[320px] h-[500px] border border-black p-4 flex flex-col relative bg-white">
                <div className="text-center font-bold text-lg mb-2">KALPANAAA SOFTWARE</div>
                <div className="text-center text-sm mb-4">Enterprise ID Badge</div>
                
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                  <img 
                    src={employee.profilePhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'} 
                    alt="Photo" 
                    className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
                  />
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{employee.fullName}</h2>
                    <p className="text-gray-600">{employee.designation}</p>
                    <p className="text-sm text-gray-500">{employee.department}</p>
                  </div>
                </div>

                <div className="w-full flex flex-col items-center mt-auto border-t pt-4">
                  <Barcode value={employee.employeeId} width={1.8} height={40} displayValue={false} margin={0} />
                  <span className="mt-1 font-mono text-sm tracking-widest">{employee.employeeId}</span>
                </div>
              </div>

              {/* Back Print */}
              <div className="w-[320px] h-[500px] border border-black p-4 flex flex-col items-center justify-center bg-white relative">
                <div className="w-full h-10 bg-gray-200 mb-8 absolute top-8 left-0" />
                
                <div className="mt-16 text-center font-bold mb-4">VERIFY IDENTITY</div>
                {qrUrl && <img src={qrUrl} alt="QR" className="w-40 h-40" />}
                
                <p className="text-xs text-center mt-8 px-4 text-gray-500">
                  This card is the property of Kalpanaaa Software Solutions. If found, please return to the main office immediately.
                </p>
                <div className="mt-auto text-[10px] text-gray-400">AUTHORIZED USE ONLY</div>
              </div>
            </div>

          </div>

          {/* Share & Export Controls - Sticky Bottom */}
          <div className="p-4 sm:p-5 bg-[var(--bg-tertiary)] border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 shrink-0 print:hidden absolute sm:relative bottom-0 left-0 right-0 z-30 pb-safe">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button onClick={handlePrintCard} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold rounded-xl border border-[var(--border-subtle)] outline-none ${animations.tap}`}>
                <Printer className="w-4 h-4" /> Print
              </button>
              <button onClick={handleDownloadPdf} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--accent-blue)] text-white text-xs font-bold rounded-xl shadow-[var(--shadow-glow-blue)] outline-none ${animations.tap}`}>
                <Download className="w-4 h-4" /> Save PDF
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button onClick={handleShareWhatsApp} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-bold rounded-xl outline-none transition-colors ${animations.tap}`}>
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </button>
              <button onClick={handleShareEmail} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-bold rounded-xl outline-none transition-colors ${animations.tap}`}>
                <Mail className="w-4 h-4" /> Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
