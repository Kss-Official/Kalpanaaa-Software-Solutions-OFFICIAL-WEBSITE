import React, { useEffect, useState } from 'react';
import kalpanaLogo from '../../assets/images/kalpana_logo.jpeg';

interface SplashScreenProps {
  onFinish?: () => void;
  autoCloseDelay?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, autoCloseDelay = 2500 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const exitTimer = setTimeout(() => setVisible(false), autoCloseDelay - 500);
    const doneTimer = setTimeout(() => { if (onFinish) onFinish(); }, autoCloseDelay);
    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, [autoCloseDelay, onFinish]);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => { if (onFinish) onFinish(); }, 500);
  };

  return (
    <div
      onClick={handleDismiss}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
      className="fixed inset-0 z-[9999] bg-[var(--bg-primary)] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/15 rounded-br-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/15 rounded-tl-full blur-3xl" />
      </div>

      {/* Corner accent lines */}
      {(['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'] as const).map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-14 h-14 pointer-events-none`}
          style={{
            borderTop: pos.includes('top') ? '1.5px solid rgba(59,130,246,0.4)' : 'none',
            borderBottom: pos.includes('bottom') ? '1.5px solid rgba(59,130,246,0.4)' : 'none',
            borderLeft: pos.includes('left') ? '1.5px solid rgba(59,130,246,0.4)' : 'none',
            borderRight: pos.includes('right') ? '1.5px solid rgba(59,130,246,0.4)' : 'none',
          }}
        />
      ))}

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center gap-8"
        style={{
          animation: 'splashFadeUp 0.7s ease-out forwards',
        }}
      >
        {/* Logo with glow */}
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl"
            style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -inset-px rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.25), transparent 45%, rgba(139,92,246,0.2))' }}
          />
          <img
            src={kalpanaLogo}
            alt="Kalpanaaa Software Solutions"
            className="relative w-[240px] sm:w-[300px] md:w-[360px] max-w-[75vw] max-h-[50vh] object-contain rounded-3xl"
            style={{ filter: 'drop-shadow(0 0 32px rgba(59,130,246,0.45)) drop-shadow(0 0 60px rgba(59,130,246,0.15))' }}
          />
        </div>

        {/* Spinner + loading bar */}
        <div className="flex flex-col items-center gap-4">
          {/* SVG spinner */}
          <svg
            className="w-8 h-8 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            style={{ animation: 'spin 1s linear infinite' }}
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Progress bar */}
          <div className="w-48 sm:w-64 h-[2px] bg-[var(--border-strong)] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                animation: `loadbar ${autoCloseDelay - 400}ms linear forwards`,
              }}
            />
          </div>

          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
            Tap anywhere to continue
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loadbar { from { width: 0% } to { width: 100% } }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
