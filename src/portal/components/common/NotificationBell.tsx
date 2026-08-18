import React, { useState, useRef, useEffect } from 'react';
import { Bell, X, CheckCheck, Megaphone, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../context/AuthContext';
import { notificationIcon, notificationColor } from '../../lib/notifications';

// ──── Notification Bell + Dropdown ────
export const NotificationBell: React.FC = () => {
  const { notifications, unreadNotificationCount, markAllNotificationsRead, role, sendBroadcast } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isAdmin = role === 'SUPER_ADMIN' || role === 'HR_ADMIN' || role === 'PROJECT_MANAGER';

  // Filter notifications visible to current role
  const visibleNotifications = notifications.filter(n => {
    if (!n.audience) return false;
    if (n.audience.includes('ALL')) return true;
    return n.audience.includes(role as any);
  }).slice(0, 20);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSendBroadcast = async () => {
    if (!broadcastTitle.trim() || !broadcastMessage.trim()) return;
    setIsSending(true);
    await sendBroadcast(broadcastTitle.trim(), broadcastMessage.trim());
    setIsSending(false);
    setBroadcastSuccess(true);
    setBroadcastTitle('');
    setBroadcastMessage('');
    setTimeout(() => {
      setBroadcastSuccess(false);
      setIsBroadcastOpen(false);
    }, 1800);
  };

  const colorClass = (color: string) => {
    switch (color) {
      case 'emerald': return 'text-emerald-400 bg-emerald-500/10';
      case 'rose':    return 'text-rose-400 bg-rose-500/10';
      case 'amber':   return 'text-amber-400 bg-amber-500/10';
      case 'blue':    return 'text-blue-400 bg-blue-500/10';
      case 'purple':  return 'text-purple-400 bg-purple-500/10';
      default:        return 'text-slate-400 bg-slate-800';
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Bell Button */}
      <div className="flex items-center gap-1.5">
        {/* Admin Broadcast Button */}
        {isAdmin && (
          <button
            onClick={() => { setIsBroadcastOpen(true); setIsOpen(false); }}
            title="Send Broadcast to All Employees"
            className="relative p-2 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all cursor-pointer"
          >
            <Megaphone className="w-4.5 h-4.5 w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => {
            setIsOpen(prev => !prev);
            if (!isOpen) markAllNotificationsRead();
          }}
          className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
        >
          <Bell className="w-5 h-5" />
          {unreadNotificationCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center animate-pulse">
              {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
            </span>
          )}
        </button>
      </div>

      {/* Notifications Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-[360px] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-slate-950/80 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/50">
              <h3 className="text-xs font-extrabold text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-blue-400" />
                Activity Notifications
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={markAllNotificationsRead}
                  className="text-[10px] text-slate-400 hover:text-blue-400 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <CheckCheck className="w-3.5 h-3.5" /> Mark all read
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-800 rounded-lg cursor-pointer">
                  <X className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-[400px] overflow-y-auto divide-y divide-slate-800/60">
              {visibleNotifications.length === 0 ? (
                <div className="py-10 text-center">
                  <Bell className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                  <p className="text-xs text-slate-500 font-medium">No notifications yet.</p>
                  <p className="text-[10px] text-slate-600 mt-1">Activity events will appear here in real time.</p>
                </div>
              ) : (
                visibleNotifications.map((n, idx) => {
                  const color = notificationColor(n.type);
                  const icon = notificationIcon(n.type);
                  const timeStr = n.createdAt 
                    ? new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    : '';
                  return (
                    <div key={n.id || idx} className="px-4 py-3 hover:bg-slate-800/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 ${colorClass(color)}`}>
                          {icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white truncate">{n.title}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed line-clamp-2">{n.body}</p>
                          {n.actorName && (
                            <p className="text-[10px] text-slate-600 mt-0.5">by {n.actorName}</p>
                          )}
                        </div>
                        <span className="text-[9px] font-mono text-slate-600 shrink-0 mt-0.5">{timeStr}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950/30 text-center">
              <span className="text-[10px] text-slate-600 font-medium">
                Live feed from Firestore · {visibleNotifications.length} recent events
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Broadcast Modal */}
      <AnimatePresence>
        {isBroadcastOpen && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">Send Broadcast</h3>
                    <p className="text-[10px] text-slate-400">Instantly notify all employees via push & in-app</p>
                  </div>
                </div>
                <button onClick={() => setIsBroadcastOpen(false)} className="p-2 hover:bg-slate-800 rounded-xl cursor-pointer">
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Notification Title</label>
                  <input
                    value={broadcastTitle}
                    onChange={e => setBroadcastTitle(e.target.value)}
                    placeholder="e.g. 🎉 Company Announcement"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    value={broadcastMessage}
                    onChange={e => setBroadcastMessage(e.target.value)}
                    placeholder="Type your message for all employees..."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder-slate-600"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setIsBroadcastOpen(false)}
                  className="flex-1 py-3 border border-slate-700 text-slate-400 hover:text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendBroadcast}
                  disabled={isSending || !broadcastTitle.trim() || !broadcastMessage.trim()}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-900/40"
                >
                  {isSending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : broadcastSuccess ? (
                    <><CheckCheck className="w-4 h-4" /> Sent!</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send to All</>
                  )}
                </button>
              </div>

              <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 text-[10px] text-slate-500 leading-relaxed">
                📱 This message will be delivered as an <strong className="text-slate-400">in-app notification</strong> to all employees, HR, and PM portals in real time via Firestore. Mobile push notifications require FCM token registration.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
