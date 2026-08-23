import { motion } from "framer-motion";
import { Cpu, Globe, Smartphone, Cloud, ShieldCheck, Zap, Layers, Sparkles, Code2, Activity } from "lucide-react";

export function BlogHeroGraphic() {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-4 sm:p-5 rounded-3xl bg-white/90 border border-blue-100/90 shadow-xl overflow-hidden backdrop-blur-md">
      {/* ── Blueprint Grid Overlay ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1769d50a_1px,transparent_1px),linear-gradient(to_bottom,#1769d50a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* ── Radial Ambient Core Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

      {/* ── Interactive Tech Diagram Canvas (Compact Height) ── */}
      <div className="relative h-56 sm:h-64 flex items-center justify-center">
        
        {/* Concentric Radar Rings */}
        <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-blue-200/50 pointer-events-none" />
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-blue-300/60 animate-spin-slow pointer-events-none" style={{ animationDuration: '35s' }} />

        {/* Top & Bottom Pulsing Orbit Radar Dots */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-brand rounded-full shadow-md z-10 animate-ping opacity-75" />
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-brand rounded-full shadow-md z-10" />
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-brand rounded-full shadow-md z-10" />

        {/* SVG Animated Connector Rays with Traveling Data Packets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Static Dashed Rays */}
          <line x1="20%" y1="18%" x2="43%" y2="43%" stroke="#1769d5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />
          <line x1="80%" y1="18%" x2="57%" y2="43%" stroke="#1769d5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />
          <line x1="20%" y1="82%" x2="43%" y2="57%" stroke="#1769d5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />
          <line x1="80%" y1="82%" x2="57%" y2="57%" stroke="#1769d5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />

          {/*
            Traveling Data Packet Circles (Animated along rays).

            The static cx/cy/opacity attributes duplicate the first frame of each `animate`
            keyframe array. Without them the circles mount with no geometry at all, and
            framer-motion's first write lands as the literal string "undefined" — which the browser
            rejects with `<circle> attribute cx: Expected length, "undefined"`. Eight of those
            console errors per visit to this page counted against Lighthouse's Best Practices
            audit. Because each value equals the keyframe the animation starts from, the motion is
            byte-for-byte the same; only the pre-animation frame is now valid instead of invalid.
          */}
          <motion.circle
            r="3" fill="#1769d5" cx="20%" cy="18%" opacity="0"
            animate={{ cx: ["20%", "43%"], cy: ["18%", "43%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r="3" fill="#7c3aed" cx="80%" cy="18%" opacity="0"
            animate={{ cx: ["80%", "57%"], cy: ["18%", "43%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.circle
            r="3" fill="#059669" cx="20%" cy="82%" opacity="0"
            animate={{ cx: ["20%", "43%"], cy: ["82%", "57%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.8 }}
          />
          <motion.circle
            r="3" fill="#ea580c" cx="80%" cy="82%" opacity="0"
            animate={{ cx: ["80%", "57%"], cy: ["82%", "57%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.3 }}
          />
        </svg>

        {/* Central Core Web/Tech Node (Glassmorphism + Ring Aura) */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-brand via-brand-deep to-slate-900 text-white shadow-xl border-2 border-white/50 flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-105 transition-all ring-4 ring-brand/15 group"
        >
          <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-md group-hover:bg-white/25 transition-colors">
            <Layers size={20} className="text-white animate-pulse" />
          </div>
          <span className="text-[11px] font-black tracking-widest uppercase font-mono">CMS CORE</span>
          <span className="text-[8px] text-blue-200 font-mono tracking-wider uppercase flex items-center gap-1">
            <Activity size={9} className="text-emerald-400 animate-pulse" /> ENGINE HUB
          </span>
        </motion.div>

        {/* Floating Node 1: AI (Top Left) */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1 left-1 sm:left-3 z-20"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-purple-200/90 shadow-sm hover:shadow-md hover:border-purple-500 transition-all cursor-pointer group">
            <div className="p-1 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Cpu size={14} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-800 leading-none">AI ENGINEERING</p>
              <p className="text-[8px] text-muted font-mono mt-0.5">RAG & Agents</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Node 2: WEB ARCHITECTURE (Top Right) */}
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1 right-1 sm:right-3 z-20"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-blue-200/90 shadow-sm hover:shadow-md hover:border-brand transition-all cursor-pointer group">
            <div className="p-1 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Globe size={14} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-800 leading-none">WEB ARCHITECTURE</p>
              <p className="text-[8px] text-muted font-mono mt-0.5">SSR & Next.js</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Node 3: APP DEV (Bottom Left) */}
        <motion.div
          animate={{ y: [2.5, -2.5, 2.5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1 left-1 sm:left-3 z-20"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-emerald-200/90 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all cursor-pointer group">
            <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Smartphone size={14} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-800 leading-none">APP DEVELOPMENT</p>
              <p className="text-[8px] text-muted font-mono mt-0.5">Flutter & RN</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Node 4: CLOUD RELIABILITY (Bottom Right) */}
        <motion.div
          animate={{ y: [-2.5, 2.5, -2.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1 right-1 sm:right-3 z-20"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-orange-200/90 shadow-sm hover:shadow-md hover:border-orange-500 transition-all cursor-pointer group">
            <div className="p-1 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Cloud size={14} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-800 leading-none">CLOUD RELIABILITY</p>
              <p className="text-[8px] text-muted font-mono mt-0.5">Kubernetes</p>
            </div>
          </div>
        </motion.div>

        {/* Sub-Pills: SECURE, REAL-TIME */}
        <div className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-1.5 z-10">
          <span className="px-2 py-0.5 rounded-full bg-white border border-emerald-200 text-[8px] font-mono font-bold text-emerald-700 shadow-2xs flex items-center gap-1">
            <ShieldCheck size={9} className="text-emerald-500" /> SECURE
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-amber-200 text-[8px] font-mono font-bold text-amber-700 shadow-2xs flex items-center gap-1">
            <Zap size={9} className="text-amber-500" /> REAL-TIME
          </span>
        </div>

        {/* Sub-Pills: ZERO-DEFECT, PRODUCTION */}
        <div className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-1.5 z-10">
          <span className="px-2 py-0.5 rounded-full bg-white border border-blue-200 text-[8px] font-mono font-bold text-blue-700 shadow-2xs flex items-center gap-1">
            <Code2 size={9} className="text-blue-500" /> ZERO-DEFECT
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-purple-200 text-[8px] font-mono font-bold text-purple-700 shadow-2xs flex items-center gap-1">
            <Sparkles size={9} className="text-purple-500" /> PRODUCTION
          </span>
        </div>

      </div>
    </div>
  );
}
