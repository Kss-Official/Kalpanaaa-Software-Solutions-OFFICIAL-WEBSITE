import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { triggerHaptic } from '../../hooks/useHaptic';
import { animations } from '../../lib/animations';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const [isDismissed, setIsDismissed] = useState(() => {
    return localStorage.getItem('pwaPromptDismissed') === 'true';
  });

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
                       || (window.navigator as any).standalone === true;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.userAgent.includes("Mac") && "ontouchend" in document);
  
  const isAndroid = /android/i.test(navigator.userAgent);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Native Android event fired, safe to show install UI
      if (!isDismissed && !isStandalone) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setIsVisible(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [isDismissed, isStandalone]);

  // Fallback specifically for iOS since Safari does NOT fire beforeinstallprompt
  useEffect(() => {
    if (isIOS && !isStandalone && !isDismissed) {
      const showTimer = setTimeout(() => setIsVisible(true), 4000);
      return () => clearTimeout(showTimer);
    }
  }, [isIOS, isStandalone, isDismissed]);

  const handleInstallClick = async () => {
    triggerHaptic('medium');

    if (deferredPrompt) {
      // Trigger Native Android APK Install Bottom Sheet
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      setDeferredPrompt(null);
      setIsVisible(false);

      if (outcome === 'dismissed') {
         setIsDismissed(true);
         localStorage.setItem('pwaPromptDismissed', 'true');
      }
    } else {
      // Fallback instructions if native prompt isn't available
      if (isIOS) {
        alert("To install on iPhone/iPad: \n\n1. Tap the 'Share' icon (square with an up arrow) at the bottom of Safari.\n2. Scroll down and tap 'Add to Home Screen'.");
      } else if (isAndroid) {
        alert("To install on Android: \n\nTap the browser menu (three dots at the top right) and select 'Install App' or 'Add to Home screen'.");
      } else {
        alert("To install App: \n\nPlease look at your browser's address bar and click the Install icon.");
      }
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    triggerHaptic('light');
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('pwaPromptDismissed', 'true');
  };
                       
  if (!isVisible || isStandalone) return null;

  return (
    <div className="fixed top-20 right-4 sm:top-24 sm:right-8 z-[9999] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-2xl shadow-blue-500/20 rounded-2xl p-5 max-w-sm flex items-start gap-4 animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-500/30">
        <Download className="w-6 h-6" />
      </div>
      
      <div className="flex-1 min-w-0 pt-0.5">
        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">Install KSS App</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
          Install our app on your device for a faster, seamless, and app-like experience!
        </p>
        
        <div className="flex gap-3">
          <button 
            onClick={handleInstallClick}
            className={`flex-1 bg-[var(--accent-blue)] hover:bg-blue-500 text-white text-sm font-bold py-2.5 px-3 rounded-xl transition-all shadow-md shadow-blue-600/20 outline-none ${animations.tap}`}
          >
            Install Now
          </button>
          <button 
            onClick={handleDismiss}
            className={`flex-1 bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-bold py-2.5 px-3 rounded-xl border border-[var(--border-subtle)] transition-all outline-none ${animations.tap}`}
          >
            Maybe Later
          </button>
        </div>
      </div>

      <button 
        onClick={handleDismiss}
        className={`absolute top-3 right-3 text-[var(--text-tertiary)] hover:text-white bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] p-1.5 rounded-full transition-colors outline-none ${animations.tap}`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
