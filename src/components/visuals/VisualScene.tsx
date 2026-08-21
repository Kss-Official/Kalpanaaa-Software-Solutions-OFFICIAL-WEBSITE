import { type ReactNode, useEffect, useId, useRef } from "react";
import { Code2, Smartphone, Server, ShieldCheck, Brain, Bot, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";
import OrbitImages from "../effects/OrbitImages";

type Props = { variant: string; labels?: string[]; title?: string; className?: string };
const c = { ink: "#13213a", brand: "#1769d5", blue: "#6ea9ff", pale: "#eaf3ff", line: "#bdd5f7", muted: "#60708a" };

function Node({ x, y, label, active = false, wide = false, grow = false, cardIndex }: { x: number; y: number; label: string; active?: boolean; wide?: boolean; grow?: boolean; cardIndex?: number }) {
  const width = wide ? 138 : 104;
  return <g className={grow ? "scene-card" : undefined} style={grow ? { animationDelay: `${(cardIndex ?? 0) * 90}ms` } : undefined} transform={`translate(${x - width / 2} ${y - 19})`}>
    <rect width={width} height="38" rx="12" fill={active ? c.brand : "#fff"} stroke={active ? c.brand : c.line} />
    <text x={width / 2} y="23" fill={active ? "#fff" : c.ink} fontSize="10" fontWeight="700" letterSpacing=".8" textAnchor="middle">{label}</text>
  </g>;
}
function Connector({ from, to, dashed = false, route = false, short = false }: { from: [number, number]; to: [number, number]; dashed?: boolean; route?: boolean; short?: boolean }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={c.line} strokeWidth="2" strokeDasharray={dashed ? (route ? undefined : "5 6") : (route ? undefined : undefined)} className={route ? (short ? "scene-route--short scene-route" : "scene-route") : undefined} />;
}
function Pulse({ cx, cy, r = 16, delay = 0, slow = false }: { cx: number; cy: number; r?: number; delay?: number; slow?: boolean }) {
  return <g className={slow ? "scene-pulse scene-pulse--slow" : "scene-pulse"} style={{ animationDelay: `${delay}ms`, transformBox: "fill-box" as any }}><circle cx={cx} cy={cy} r={r} fill="rgba(23,105,213,.18)" /><circle cx={cx} cy={cy} r={Math.max(4, r - 8)} fill={c.brand} /></g>;
}
function Frame({ children, title, id }: { children: ReactNode; title: string; id: string }) {
  return <svg role="img" aria-labelledby={`${id}-title ${id}-desc`} viewBox="0 0 640 440" className="visual-scene__svg" preserveAspectRatio="xMidYMid meet">
    <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>A Kalpanaaaa engineering blueprint diagram related to this page.</desc>
    <defs><pattern id={`${id}-grid`} width="22" height="22" patternUnits="userSpaceOnUse"><path d="M 22 0 L 0 0 0 22" fill="none" stroke="#dce9fa" strokeWidth="1" /></pattern><filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#1769d5" floodOpacity=".12" /></filter><linearGradient id={`${id}-rail`} x1="0" x2="1" y1="0" y2="0"><stop offset="0" stopColor="#cbdcf3"/><stop offset="1" stopColor="#1769d5"/></linearGradient></defs>
    <rect x="10" y="10" width="620" height="420" rx="28" fill={`url(#${id}-grid)`} stroke="none" /><rect x="10" y="10" width="620" height="420" rx="28" fill="none" stroke="#d7e6fa" />
    <circle cx="320" cy="220" r="170" fill="rgba(23,105,213,.04)" className="scene-grid-pulse"/>
    {children}
  </svg>;
}

function ServiceConstellation({ labels, id }: { labels: string[]; id: string }) {
  const serviceIconsMap: Record<string, any> = {
    "WEB-ENG": Code2,
    "MOBILE": Smartphone,
    "DEVOPS": Server,
    "QA-TEST": ShieldCheck,
    "QA-VERIFY": ShieldCheck,
    "RAG-AI": Brain,
    "AI-RAG": Brain,
    "AGENTS": Bot,
  };
  const fallbackIcons = [Code2, Smartphone, Server, ShieldCheck, Brain, Bot];

  // Structured symmetric 3-left / 3-right position mapping touching 3D cube edges
  const positionConfigMap: Record<string, { pos: string; floatRange: number[]; duration: number; delay: number }> = {
    // LEFT COLUMN (Top, Middle, Bottom)
    "WEB-ENG":   { pos: "top-[16%] left-[9%] sm:left-[11%]",   floatRange: [-8, 8, -8],   duration: 4.8, delay: 0 },
    "QA-TEST":   { pos: "top-[44%] left-[7%] sm:left-[9%]",    floatRange: [-10, 10, -10], duration: 5.2, delay: 1.8 },
    "QA-VERIFY": { pos: "top-[44%] left-[7%] sm:left-[9%]",    floatRange: [-10, 10, -10], duration: 5.2, delay: 1.8 },
    "AGENTS":    { pos: "bottom-[16%] left-[9%] sm:left-[11%]", floatRange: [-9, 9, -9],   duration: 5.4, delay: 2.2 },

    // RIGHT COLUMN (Top, Middle, Bottom)
    "DEVOPS":    { pos: "top-[16%] right-[9%] sm:right-[11%]",  floatRange: [-7, 7, -7],   duration: 4.4, delay: 1.2 },
    "MOBILE":    { pos: "top-[44%] right-[7%] sm:right-[9%]",   floatRange: [-9, 9, -9],   duration: 5.0, delay: 0.6 },
    "RAG-AI":    { pos: "bottom-[16%] right-[9%] sm:right-[11%]", floatRange: [-8, 8, -8],  duration: 4.6, delay: 1.0 },
    "AI-RAG":    { pos: "bottom-[16%] right-[9%] sm:right-[11%]", floatRange: [-8, 8, -8],  duration: 4.6, delay: 1.0 },
  };

  const fallbackPositions = [
    { pos: "top-[16%] left-[9%] sm:left-[11%]", floatRange: [-8, 8, -8], duration: 4.8, delay: 0 },
    { pos: "top-[16%] right-[9%] sm:right-[11%]", floatRange: [-7, 7, -7], duration: 4.4, delay: 1.2 },
    { pos: "top-[44%] left-[7%] sm:left-[9%]", floatRange: [-10, 10, -10], duration: 5.2, delay: 1.8 },
    { pos: "top-[44%] right-[7%] sm:right-[9%]", floatRange: [-9, 9, -9], duration: 5.0, delay: 0.6 },
    { pos: "bottom-[16%] left-[9%] sm:left-[11%]", floatRange: [-9, 9, -9], duration: 5.4, delay: 2.2 },
    { pos: "bottom-[16%] right-[9%] sm:right-[11%]", floatRange: [-8, 8, -8], duration: 4.6, delay: 1.0 },
  ];

  const displayLabels = labels && labels.length === 6 ? labels : ["WEB-ENG", "DEVOPS", "QA-VERIFY", "MOBILE", "AGENTS", "AI-RAG"];

  return (
    <div className="relative w-full aspect-[800/540] flex items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fbfdff] via-[#f4f8fe] to-[#eef6ff] border border-[#d7e6fa] shadow-2xl">
      {/* Background SVG Grid pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 540" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#dce9fa" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="12" y="12" width="776" height="516" rx="28" fill={`url(#${id}-grid)`} stroke="none" />
        <rect x="12" y="12" width="776" height="516" rx="28" fill="none" stroke="#d7e6fa" strokeWidth="1.5" />
        <circle cx="400" cy="270" r="230" fill="rgba(23,105,213,.03)" className="scene-grid-pulse" />
      </svg>

      {/* Main Central 3D Object - Still width (540px) */}
      <div className="relative z-10 flex items-center justify-center pointer-events-auto">
        <div className="absolute inset-0 rounded-full bg-brand/25 blur-3xl animate-pulse" />
        <img
          src="/Hero.svg"
          alt="Kalpanaaaa Engineering Core"
          style={{ width: '540px', maxWidth: '92%' }}
          className="relative h-auto object-contain drop-shadow-[0_28px_56px_rgba(23,105,213,0.4)] transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Floating Service Badges symmetrically structured on Left & Right sides */}
      {displayLabels.map((label, idx) => {
        const IconComp = serviceIconsMap[label] || fallbackIcons[idx % fallbackIcons.length] || LayoutTemplate;
        const config = positionConfigMap[label] || fallbackPositions[idx % fallbackPositions.length];
        const isFirst = idx === 0;

        return (
          <motion.div
            key={label}
            className={`absolute z-20 ${config.pos}`}
            animate={{ y: config.floatRange }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: config.delay,
            }}
          >
            <div
              className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold tracking-wide transition-all duration-300 shadow-xl hover:scale-110 cursor-pointer whitespace-nowrap select-none backdrop-blur-md ${
                isFirst
                  ? 'bg-brand text-white border-brand shadow-blue-500/40 ring-4 ring-brand/20'
                  : 'bg-white/95 text-ink border-line hover:border-brand hover:text-brand shadow-sky-900/15'
              }`}
            >
              <IconComp size={15} className={isFirst ? 'text-white' : 'text-brand'} />
              <span>{label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function CapabilityMesh({ labels, id }: { labels: string[]; id: string }) {
  // Left nodes: right edge at x=174. Right nodes: left edge at x=466.
  // Center node: left edge x=251, right edge x=389.
  const leftNodes  = [[105, 90], [105, 205], [105, 320]] as [number,number][];
  const rightNodes = [[535, 90], [535, 205], [535, 320]] as [number,number][];
  // Connectors: from inner edge of satellite node → outer edge of center node
  const leftConns: [number,number][][] = [
    [[174, 90],  [251, 205]],
    [[174, 205], [251, 205]],
    [[174, 320], [251, 205]],
  ];
  const rightConns: [number,number][][] = [
    [[466, 90],  [389, 205]],
    [[466, 205], [389, 205]],
    [[466, 320], [389, 205]],
  ];
  const allConns = [...leftConns, ...rightConns];
  return (
    <Frame id={id} title="Six Kalpanaaaa services connected to one engineering hub">
      {/* Static base connectors */}
      <g stroke={c.line} strokeWidth="2.5" fill="none">
        {allConns.map(([from, to], i) => (
          <line key={`base-${i}`} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />
        ))}
      </g>
      {/* Animated dashed connectors */}
      <g stroke={c.brand} strokeWidth="2.5" strokeDasharray="8 8" fill="none" className="scene-flow">
        {allConns.map(([from, to], i) => (
          <line key={`anim-${i}`} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />
        ))}
      </g>
      {/* Center pulse glow behind node */}
      <Pulse cx={320} cy={205} r={48} slow />
      {/* Left service nodes */}
      {leftNodes.map(([x, y], i) => (
        <Node key={`l${i}`} x={x} y={y} label={labels[i] ?? "SERVICE"} wide />
      ))}
      {/* Right service nodes */}
      {rightNodes.map(([x, y], i) => (
        <Node key={`r${i}`} x={x} y={y} label={labels[i + 3] ?? "SERVICE"} wide />
      ))}
      {/* Center KALPANAAAA node with pulse animation */}
      <g className="scene-orbit-group" filter={`url(#${id}-shadow)`}>
        <Node x={320} y={205} label="KALPANAAAA" active wide />
      </g>
      {/* Bottom rule + tagline */}
      <path d="M65 394H575" stroke={c.line} strokeWidth="2" />
      <text x="320" y="420" fill={c.brand} fontSize="11" fontWeight="700" letterSpacing="1" textAnchor="middle" className="scene-tick">
        DISCOVER · DELIVER · EVOLVE
      </text>
    </Frame>
  );
}

function SectorGrid({ labels, id }: { labels: string[]; id: string }) {
  const points = [[175,130],[465,130],[175,310],[465,310]] as [number,number][];
  return (
    <Frame id={id} title="Sectors connected by Kalpanaaaa engineering rails">
      {/* Static base */}
      <path d="M175 130H465V310H175Z M175 220H465 M320 130V310" fill="none" stroke={c.line} strokeWidth="2"/>
      {/* Animated dashed overlay */}
      <path d="M175 130H465V310H175Z M175 220H465 M320 130V310" fill="none" stroke={c.brand} strokeWidth="2" className="scene-flow"/>
      <circle cx="320" cy="220" r="62" fill="#eef6ff" stroke={c.brand} strokeWidth="2"/>
      <path d="M293 220h54M320 193v54" stroke={c.brand} strokeWidth="3" strokeLinecap="round" className="scene-shimmer"/>
      <text x="320" y="260" fill={c.ink} fontSize="10" fontWeight="800" letterSpacing="1" textAnchor="middle">ENGINEERING RAIL</text>
      <Pulse cx={320} cy={220} r={48} slow/>
      {points.map((p,i) => <Node key={i} x={p[0]} y={p[1]} label={labels[i] ?? "SECTOR"} active={i===1} wide />)}
    </Frame>
  );
}

function DeliveryRail({ labels, id }: { labels: string[]; id: string }) {
  const stops = [[100,"SCOPE"],[250,"ENGINEER"],[400,"RELEASE"],[540,"OUTCOME"]] as [number,string][];
  return <Frame id={id} title="Delivery outcome rail for Kalpanaaaa case studies">
    <path d="M74 226H566" stroke={`url(#${id}-rail)`} strokeWidth="10" strokeLinecap="round"/>
    <path className="scene-flow" d="M74 226H566" stroke={c.brand} strokeWidth="3" strokeLinecap="round"/>
    <g className="scene-stops">{stops.map(([x, defaultLabel], i)=><g key={String(x)}><circle cx={x} cy="226" r="25" fill={i===3?c.brand:"#fff"} stroke={c.brand} strokeWidth="2"/><text x={x} y="231" fontSize="10" fontWeight="800" fill={i===3?"#fff":c.brand} textAnchor="middle">0{i+1}</text><text className="scene-tick" x={x} y="285" fill={c.ink} fontSize="11" fontWeight="800" textAnchor="middle" style={{ animationDelay: `${300 + i * 220}ms` }}>{labels[i] ?? defaultLabel}</text></g>)}</g>
    <text x="320" y="92" fill={c.muted} fontSize="11" letterSpacing="2" textAnchor="middle">TRACEABLE DELIVERY SYSTEM</text><path d="M320 110v65" stroke={c.line} strokeDasharray="4 5" className="scene-flow"/>
  </Frame>;
}

function ResearchIndex({ id }: { id: string }) {
  const items = [{x:104,y:106,t:"AI / RAG"},{x:264,y:167,t:"QA / RELEASE"},{x:428,y:105,t:"CLOUD"},{x:330,y:300,t:"SYSTEMS"}];
  const conns: [number,number][][] = [[[170,190],[264,210]],[[396,188],[330,300]],[[170,190],[330,300]]];
  return (
    <Frame id={id} title="Research index for Kalpanaaaa engineering notes">
      {/* Static base connectors */}
      <g stroke={c.line} strokeWidth="2" fill="none">
        {conns.map(([f,t],i) => <line key={`base-${i}`} x1={f[0]} y1={f[1]} x2={t[0]} y2={t[1]} />)}
      </g>
      {/* Animated dashed connectors */}
      <g stroke={c.brand} strokeWidth="2" fill="none" className="scene-flow">
        {conns.map(([f,t],i) => <line key={`anim-${i}`} x1={f[0]} y1={f[1]} x2={t[0]} y2={t[1]} />)}
      </g>
      {items.map((note,i) => <g key={note.t} transform={`translate(${note.x} ${note.y})`} filter={`url(#${id}-shadow)`}><rect width="132" height="84" rx="14" fill="#fff" stroke={i===3?c.brand:c.line}/><path d="M16 24h50M16 38h92M16 52h69" stroke={i===3?c.brand:c.line} strokeWidth="3" strokeLinecap="round"/><text className="scene-token" x="16" y="72" fontSize="10" fontWeight="800" fill={c.ink}>{note.t}</text></g>)}
      <Pulse cx={180} cy={200} r={10} delay={0} />
      <Pulse cx={394} cy={195} r={10} delay={420} />
      <Pulse cx={330} cy={310} r={10} delay={840} />
    </Frame>
  );
}

function GovernmentBlueprint({ id }: { id: string }) {
  const dotOffsets = [-24, -14, -5, 5, 14, 24];
  const dots: ReactNode[] = [];
  dotOffsets.forEach((dy, i) => {
    dotOffsets.forEach((dx, j) => {
      if ((i === 2 || i === 3) && (j === 2 || j === 3)) return;
      dots.push(
        <rect key={`${i}-${j}`} x={320 + dx - 2} y={220 + dy - 2} width="4" height="4" fill="#fff" opacity="0.9" />
      );
    });
  });
  return (
    <Frame id={id} title="Government engineering flow">
      <g stroke={c.line} strokeWidth="2.5" fill="none">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      <g stroke={c.brand} strokeWidth="2.5" strokeDasharray="8 8" fill="none" className="scene-flow">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      <circle cx="320" cy="220" r="88" fill="#fff" stroke={c.brand} strokeWidth="2.5" filter={`url(#${id}-shadow)`} />
      <rect x="284" y="184" width="72" height="72" rx="8" fill="#0f4fa8" />
      {dots}
      <circle cx="320" cy="220" r="10" fill="#0f4fa8" opacity="0.85" />
      <g transform="translate(117, 63)">
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" filter={`url(#${id}-shadow)`} />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">CITIZEN</text>
      </g>
      <g transform="translate(383, 63)">
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" filter={`url(#${id}-shadow)`} />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">WORKFLOW</text>
      </g>
      <Node x={320} y={407} label="GOVERNMENT" active wide />
    </Frame>
  );
}

function HealthcareBlueprint({ id }: { id: string }) {
  return (
    <Frame id={id} title="Healthcare engineering flow">
      {/* Connector lines - static base */}
      <g stroke={c.line} strokeWidth="2.5" fill="none">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      {/* Connector lines - animated dashed */}
      <g stroke={c.brand} strokeWidth="2.5" strokeDasharray="8 8" fill="none" className="scene-flow">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      {/* Center circle */}
      <circle cx="320" cy="220" r="88" fill="#fff" stroke={c.brand} strokeWidth="2.5" filter={`url(#${id}-shadow)`} />
      {/* Healthcare cross icon */}
      <circle cx="320" cy="220" r="34" fill={c.pale} />
      <circle cx="320" cy="220" r="22" fill={c.brand} />
      {/* Cross arms */}
      <rect x="314" y="207" width="12" height="26" rx="3" fill="#fff" />
      <rect x="307" y="214" width="26" height="12" rx="3" fill="#fff" />
      {/* PATIENT card */}
      <g transform="translate(117, 63)" filter={`url(#${id}-shadow)`}>
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">PATIENT</text>
      </g>
      {/* CLINICIAN card */}
      <g transform="translate(383, 63)" filter={`url(#${id}-shadow)`}>
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">CLINICIAN</text>
      </g>
      {/* HEALTHCARE bottom active node */}
      <Node x={320} y={407} label="HEALTHCARE" active wide />
    </Frame>
  );
}

function FinanceBlueprint({ id }: { id: string }) {
  return (
    <Frame id={id} title="Finance engineering flow">
      {/* Static base connectors */}
      <g stroke={c.line} strokeWidth="2.5" fill="none">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      {/* Animated dashed connectors */}
      <g stroke={c.brand} strokeWidth="2.5" strokeDasharray="8 8" fill="none" className="scene-flow">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      {/* Center circle */}
      <circle cx="320" cy="220" r="88" fill="#fff" stroke={c.brand} strokeWidth="2.5" filter={`url(#${id}-shadow)`} />
      {/* Finance rupee icon */}
      <circle cx="320" cy="220" r="34" fill={c.pale} />
      <circle cx="320" cy="220" r="22" fill={c.brand} />
      <text x="320" y="228" fontSize="26" fontWeight="800" fill="#fff" textAnchor="middle" dominantBaseline="middle">₹</text>
      {/* LEDGER card */}
      <g transform="translate(117, 63)" filter={`url(#${id}-shadow)`}>
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">LEDGER</text>
      </g>
      {/* SETTLEMENT card */}
      <g transform="translate(383, 63)" filter={`url(#${id}-shadow)`}>
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">SETTLEMENT</text>
      </g>
      <Node x={320} y={407} label="FINANCE" active wide />
    </Frame>
  );
}

function EducationBlueprint({ id }: { id: string }) {
  return (
    <Frame id={id} title="Education engineering flow">
      {/* Static base connectors */}
      <g stroke={c.line} strokeWidth="2.5" fill="none">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      {/* Animated dashed connectors */}
      <g stroke={c.brand} strokeWidth="2.5" strokeDasharray="8 8" fill="none" className="scene-flow">
        <line x1="187" y1="111" x2="252" y2="164" />
        <line x1="453" y1="111" x2="388" y2="164" />
        <line x1="320" y1="388" x2="320" y2="308" />
      </g>
      {/* Center circle */}
      <circle cx="320" cy="220" r="88" fill="#fff" stroke={c.brand} strokeWidth="2.5" filter={`url(#${id}-shadow)`} />
      {/* Education mortarboard icon */}
      <circle cx="320" cy="220" r="34" fill={c.pale} />
      <circle cx="320" cy="220" r="22" fill={c.brand} />
      {/* Cap brim */}
      <polygon points="320,205 344,215 320,225 296,215" fill="#fff" />
      {/* Cap top */}
      <rect x="316" y="215" width="8" height="10" rx="2" fill="#fff" />
      {/* Tassel */}
      <line x1="344" y1="215" x2="344" y2="226" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      {/* LEARNER card */}
      <g transform="translate(117, 63)" filter={`url(#${id}-shadow)`}>
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">LEARNER</text>
      </g>
      {/* ASSESSMENT card */}
      <g transform="translate(383, 63)" filter={`url(#${id}-shadow)`}>
        <rect width="140" height="48" rx="14" fill="#fff" stroke={c.line} strokeWidth="2" />
        <text x="70" y="25" dominantBaseline="middle" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill={c.ink} textAnchor="middle" letterSpacing="1">ASSESSMENT</text>
      </g>
      <Node x={320} y={407} label="EDUCATION" active wide />
    </Frame>
  );
}


type ServiceGraphic = {
  title: string;
  badge: string;
  nodes: [string, string, string, string];
  chips: [string, string, string];
};

const serviceGraphics: Record<string, ServiceGraphic> = {
  "web-engineering": { title: "Web application development blueprint", badge: "WEB", nodes: ["UI", "API", "DATA", "SHIP"], chips: ["SSR", "REAL-TIME", "SECURE"] },
  "mobile-apps": { title: "Mobile app development blueprint", badge: "APP", nodes: ["IOS", "ANDROID", "SYNC", "STORE"], chips: ["OFFLINE", "PUSH", "NATIVE"] },
  "ui-ux-design": { title: "UI UX design blueprint", badge: "UX", nodes: ["RESEARCH", "FLOW", "PROTOTYPE", "HANDOFF"], chips: ["SYSTEM", "ACCESS", "MOTION"] },
  "e-commerce-development": { title: "E-commerce development blueprint", badge: "SHOP", nodes: ["CATALOG", "CART", "PAY", "ORDERS"], chips: ["SEO", "STOCK", "CHECKOUT"] },
  "custom-software-development": { title: "Custom software development blueprint", badge: "OPS", nodes: ["SCOPE", "BUILD", "INTEGRATE", "OPERATE"], chips: ["ROLES", "PORTAL", "AUDIT"] },
  "cloud-consulting": { title: "Cloud consulting blueprint", badge: "CLOUD", nodes: ["AUDIT", "ROADMAP", "LANDING", "OPTIMIZE"], chips: ["COST", "DR", "SECURITY"] },
  "aws-azure-solutions": { title: "AWS and Azure solutions blueprint", badge: "AZ", nodes: ["COMPUTE", "NETWORK", "DATA", "MONITOR"], chips: ["IAM", "SCALE", "BACKUP"] },
  "devops-ci-cd": { title: "DevOps CI CD blueprint", badge: "CI", nodes: ["COMMIT", "TEST", "BUILD", "DEPLOY"], chips: ["GATES", "ROLLBACK", "ARTIFACT"] },
  "docker-kubernetes": { title: "Docker and Kubernetes blueprint", badge: "K8S", nodes: ["IMAGE", "PODS", "INGRESS", "SCALE"], chips: ["PROBES", "SECRETS", "ROLLING"] },
  "infrastructure-as-code": { title: "Infrastructure as code blueprint", badge: "IAC", nodes: ["MODULE", "PLAN", "APPLY", "DRIFT"], chips: ["STATE", "REVIEW", "POLICY"] },
  "generative-ai-solutions": { title: "Generative AI solutions blueprint", badge: "AI", nodes: ["PROMPT", "CONTEXT", "MODEL", "EVAL"], chips: ["SAFETY", "TOOLS", "FEEDBACK"] },
  "rag-applications": { title: "RAG application blueprint", badge: "RAG", nodes: ["INGEST", "EMBED", "RETRIEVE", "ANSWER"], chips: ["CITE", "RERANK", "ACCESS"] },
  "ai-agents": { title: "AI agents blueprint", badge: "BOT", nodes: ["PLAN", "TOOLS", "MEMORY", "APPROVE"], chips: ["TRACE", "RETRY", "HITL"] },
  "ai-chatbots": { title: "AI chatbot blueprint", badge: "CHAT", nodes: ["INTENT", "KNOWLEDGE", "REPLY", "HANDOFF"], chips: ["WEB", "WHATSAPP", "ANALYTICS"] },
  "llm-integration": { title: "LLM integration blueprint", badge: "LLM", nodes: ["API", "STREAM", "TOOLS", "FALLBACK"], chips: ["CACHE", "TOKENS", "PRIVACY"] },
  "application-security": { title: "Application security blueprint", badge: "SEC", nodes: ["AUTH", "SCAN", "HARDEN", "RELEASE"], chips: ["OWASP", "SAST", "SECRETS"] },
  "cloud-security": { title: "Cloud security blueprint", badge: "LOCK", nodes: ["IAM", "NETWORK", "SECRETS", "ALERTS"], chips: ["BACKUP", "POLICY", "LOGS"] },
  "security-auditing": { title: "Security auditing blueprint", badge: "AUDIT", nodes: ["SCOPE", "EVIDENCE", "RISK", "VERIFY"], chips: ["REPORT", "FIXES", "CLOSURE"] },
  "vulnerability-assessment": { title: "Vulnerability assessment blueprint", badge: "VAPT", nodes: ["DISCOVER", "TEST", "PRIORITY", "RETEST"], chips: ["API", "CLOUD", "DEPS"] },
  "identity-access-management": { title: "Identity and access management blueprint", badge: "IAM", nodes: ["SSO", "ROLES", "TOKENS", "AUDIT"], chips: ["MFA", "POLICY", "LIFECYCLE"] },
  "quality-assurance": { title: "Quality assurance blueprint", badge: "QA", nodes: ["PLAN", "TEST", "TRIAGE", "SIGN-OFF"], chips: ["MANUAL", "REGRESSION", "ACCESS"] },
  "automated-testing": { title: "Automated testing blueprint", badge: "AUTO", nodes: ["UNIT", "API", "E2E", "CI GATE"], chips: ["FIXTURES", "MOCKS", "REPORTS"] },
  "performance-testing": { title: "Performance testing blueprint", badge: "PERF", nodes: ["LOAD", "TRACE", "TUNE", "SCALE"], chips: ["LATENCY", "CACHE", "CAPACITY"] },
  "it-consulting": { title: "IT consulting blueprint", badge: "PLAN", nodes: ["ASSESS", "ADVISE", "ROADMAP", "GOVERN"], chips: ["COST", "RISK", "STACK"] },
  "system-integration": { title: "System integration blueprint", badge: "API", nodes: ["CONNECT", "MAP", "SYNC", "MONITOR"], chips: ["WEBHOOKS", "QUEUES", "RETRY"] },
  "cloud-devops": { title: "Cloud DevOps infrastructure blueprint", badge: "DEV", nodes: ["PIPELINE", "CONTAINER", "CLOUD", "OBSERVE"], chips: ["TERRAFORM", "K8S", "SLA"] },
  "rag-systems": { title: "RAG systems and AI engineering blueprint", badge: "RAG", nodes: ["SOURCE", "VECTOR", "GROUND", "OBSERVE"], chips: ["EVALS", "GUARDS", "TRACE"] },
  "multi-agent-automation": { title: "Multi-agent automation blueprint", badge: "BOT", nodes: ["PLAN", "RESEARCH", "ACT", "REVIEW"], chips: ["MEMORY", "TOOLS", "APPROVAL"] },
  "qa-testing": { title: "Enterprise quality assurance blueprint", badge: "QA", nodes: ["UNIT", "E2E", "LOAD", "RELEASE"], chips: ["A11Y", "SAST", "COVERAGE"] },
};

function ServiceBlueprint({ service, id }: { service: string; id: string }) {
  const graphic = serviceGraphics[service] ?? serviceGraphics["web-engineering"];
  const nodes = [[150, 116], [490, 116], [490, 324], [150, 324]] as [number, number][];
  const lines = [
    [[214, 116], [282, 188]],
    [[426, 116], [358, 188]],
    [[426, 324], [358, 252]],
    [[214, 324], [282, 252]],
  ] as [[number, number], [number, number]][];

  return (
    <Frame id={id} title={graphic.title}>
      <defs>
        <radialGradient id={`${id}-hub`} cx="50%" cy="42%" r="64%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".62" stopColor="#eef6ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </radialGradient>
      </defs>
      <path d="M94 220H546" stroke="#d7e6fa" strokeWidth="18" strokeLinecap="round" opacity=".42" />
      <path d="M320 76V364" stroke="#d7e6fa" strokeWidth="18" strokeLinecap="round" opacity=".28" />
      <g stroke={c.line} strokeWidth="2.5" fill="none">{lines.map(([from, to], index) => <line key={`base-${index}`} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />)}</g>
      <g stroke={c.brand} strokeWidth="2.5" fill="none" className="scene-flow">{lines.map(([from, to], index) => <line key={`flow-${index}`} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />)}</g>
      <g className="scene-orbit-ring"><circle cx="320" cy="220" r="108" fill="none" stroke="#d0e2fb" strokeDasharray="6 8" /></g>
      <g className="scene-orbit-ring scene-orbit-ring--reverse"><circle cx="320" cy="220" r="76" fill="none" stroke="#d0e2fb" /></g>
      <circle cx="320" cy="220" r="88" fill={`url(#${id}-hub)`} stroke={c.brand} strokeWidth="2.5" filter={`url(#${id}-shadow)`} />
      <Pulse cx={320} cy={220} r={58} slow />
      <g className="scene-centre">
        <rect x="270" y="176" width="100" height="88" rx="24" fill="#fff" stroke={c.brand} strokeWidth="3.5" />
        <path d="M292 244h56M304 194h32M292 213h56" stroke={c.line} strokeWidth="5" strokeLinecap="round" />
        <text x="320" y="236" fill={c.brand} fontSize={graphic.badge.length > 3 ? 18 : 24} fontWeight="900" textAnchor="middle">{graphic.badge}</text>
      </g>
      {nodes.map(([x, y], index) => <Node key={graphic.nodes[index]} x={x} y={y} label={graphic.nodes[index]} active={index === 0} wide grow cardIndex={index} />)}
      {graphic.chips.map((chip, index) => {
        const x = 206 + index * 92;
        return <g key={chip} className="scene-card" style={{ animationDelay: `${420 + index * 120}ms` }} transform={`translate(${x} 374)`}><rect width="82" height="32" rx="10" fill="#fff" stroke={index === 1 ? c.brand : c.line} /><text x="41" y="20" fill={index === 1 ? c.brand : c.ink} fontSize="9" fontWeight="800" letterSpacing=".6" textAnchor="middle">{chip}</text></g>;
      })}
    </Frame>
  );
}


function Blueprint({ variant, labels, id }: { variant: string; labels: string[]; id: string }) {
  const service = variant.replace("service-", "");
  const industry = variant.replace("industry-", "");
  const caseStudy = variant.replace("case-", "");
  if (variant.startsWith("service-")) {
    return <ServiceBlueprint service={service} id={id} />;
    if (service === "mobile-apps") return <Frame id={id} title="Mobile application device blueprint"><path d="M160 82h120v276H160zM360 82h120v276H360z" fill="#fff" stroke={c.brand} strokeWidth="2"/><path d="M180 118h80M180 146h80M380 118h80M380 146h80" stroke={c.line} strokeWidth="8"/><path className="scene-flow" d="M180 220L460 220" stroke={c.brand} strokeWidth="2"/><Node x={320} y={380} label="OFFLINE · SYNC · NATIVE" active wide />{stops_svg(160,82,120)}</Frame>;
    if (service === "cloud-devops") return (
      <Frame id={id} title="Cloud infrastructure topology blueprint">
        <g stroke={c.line} strokeWidth="2" fill="none">
          <line x1={320} y1={94} x2={190} y2={180} /><line x1={320} y1={94} x2={450} y2={180} />
          <line x1={190} y1={210} x2={320} y2={300} /><line x1={450} y1={210} x2={320} y2={300} />
        </g>
        <g stroke={c.brand} strokeWidth="2" fill="none" className="scene-flow">
          <line x1={320} y1={94} x2={190} y2={180} /><line x1={320} y1={94} x2={450} y2={180} />
          <line x1={190} y1={210} x2={320} y2={300} /><line x1={450} y1={210} x2={320} y2={300} />
        </g>
        <Node x={320} y={74} label="CI / CD" active />
        <Node x={190} y={190} label="CONTAINER" />
        <Node x={450} y={190} label="CONTAINER" />
        <Node x={320} y={310} label="OBSERVE · RECOVER" active wide />
        <path d="M120 370h400" stroke={c.line} strokeWidth="2"/>
      </Frame>
    );
    if (service === "qa-testing") return <Frame id={id} title="Quality assurance test matrix"><text x="110" y="78" fill={c.muted} fontSize="10" fontWeight="800">TEST MATRIX</text>{Array.from({length:4},(_,row)=>Array.from({length:5},(_,column)=><g key={`${row}-${column}`}><rect x={110+column*78} y={100+row*62} width="50" height="36" rx="8" fill={row===2&&column===3?"#fff":c.pale} stroke={c.line}/><path className={row===2&&column===3?undefined:"scene-tick"} d={`M${124+column*78} ${118+row*62}l7 7 15-17`} fill="none" stroke={row===2&&column===3?c.brand:c.blue} strokeWidth="2" style={{ animationDelay: `${(row * 5 + column) * 35}ms` }}/></g>))}<Node x={320} y={385} label="VERIFY BEFORE RELEASE" active wide /></Frame>;
    if (service === "rag-systems") return (
      <Frame id={id} title="Retrieval augmented generation route">
        <g stroke={c.line} strokeWidth="2" fill="none">
          <line x1={157} y1={220} x2={240} y2={150} /><line x1={157} y1={220} x2={240} y2={290} />
          <line x1={342} y1={150} x2={450} y2={220} /><line x1={342} y1={290} x2={450} y2={220} />
        </g>
        <g stroke={c.brand} strokeWidth="2" fill="none" className="scene-flow">
          <line x1={157} y1={220} x2={240} y2={150} /><line x1={157} y1={220} x2={240} y2={290} />
          <line x1={342} y1={150} x2={450} y2={220} /><line x1={342} y1={290} x2={450} y2={220} />
        </g>
        <circle className="scene-orbit-ring" cx="320" cy="220" r="78" fill="none" stroke={c.line} strokeDasharray="5 6" strokeOpacity=".7"/>
        <Pulse cx={290} cy={150} r={10} delay={200}/><Pulse cx={290} cy={290} r={10} delay={600}/>
        <Node x={105} y={220} label="QUERY" active />
        <Node x={290} y={150} label="RETRIEVE" />
        <Node x={290} y={290} label="RERANK" />
        <Node x={510} y={220} label="GROUNDED ANSWER" active wide />
      </Frame>
    );
    if (service === "multi-agent-automation") return (
      <Frame id={id} title="Multi agent workflow handoff map">
        <path d="M222 125H418M470 177V263M418 315H222M170 263V177" fill="none" stroke={c.line} strokeWidth="2"/>
        <path d="M222 125H418M470 177V263M418 315H222M170 263V177" fill="none" stroke={c.brand} strokeWidth="2" className="scene-flow"/>
        <Pulse cx={320} cy={220} r={48} slow/>
        <Node x={170} y={125} label="PLAN" active />
        <Node x={470} y={125} label="RESEARCH" />
        <Node x={170} y={315} label="ACT" />
        <Node x={470} y={315} label="REVIEW" />
        <Node x={320} y={220} label="HUMAN APPROVAL" wide />
      </Frame>
    );
    return <Frame id={id} title="Web engineering application blueprint"><rect x="120" y="80" width="400" height="270" rx="18" fill="#fff" stroke={c.brand} strokeWidth="2"/><path d="M120 122h400M155 158h150M155 190h84M155 222h134M345 158h140v146H345z" stroke={c.line} strokeWidth="2"/><circle cx="145" cy="101" r="5" fill={c.brand} className="scene-pulse"/><circle cx="165" cy="101" r="5" fill={c.brand} className="scene-pulse scene-pulse--slow"/><Node x={320} y={390} label="RESPONSIVE · SECURE · SCALABLE" active wide /></Frame>;
  }
  if (variant.startsWith("industry-")) {
    if (industry === "government") return <GovernmentBlueprint id={id} />;
    if (industry === "healthcare") return <HealthcareBlueprint id={id} />;
    if (industry === "finance") return <FinanceBlueprint id={id} />;
    if (industry === "education") return <EducationBlueprint id={id} />;
    const title = industry.toUpperCase();
    const icon = industry === "healthcare" ? "+" : industry === "finance" ? "₹" : industry === "education" ? "↗" : "▦";
    return <Frame id={id} title={`${title} engineering flow`}><circle className="scene-orbit-ring" cx="320" cy="210" r="86" fill="#fff" stroke={c.brand} strokeWidth="2"/><text x="320" y="232" fontSize="70" fontWeight="700" fill={c.brand} textAnchor="middle">{icon}</text><Node x={140} y={110} label={industry === "government" ? "CITIZEN" : industry === "healthcare" ? "PATIENT" : industry === "finance" ? "LEDGER" : "LEARNER"}/><Node x={500} y={110} label={industry === "government" ? "WORKFLOW" : industry === "healthcare" ? "CLINICIAN" : industry === "finance" ? "SETTLEMENT" : "ASSESSMENT"}/><Node x={320} y={355} label={title} active wide/><Connector from={[192,110]} to={[270,165]} route/><Connector from={[448,110]} to={[370,165]} route/><Connector from={[320,296]} to={[320,336]} route short/><Pulse cx={320} cy={210} r={20} delay={0}/></Frame>;
  }
  if (variant.startsWith("case-")) {
    const label = caseStudy === "railtrace" ? ["ASSET", "GPS", "ALERT", "ACTION"] : caseStudy === "medichain" ? ["RECORD", "SECURE", "ACCESS", "CARE"] : ["ORDER", "KITCHEN", "TRACK", "SERVE"];
    return <DeliveryRail labels={label} id={id}/>;
  }
  return <ResearchIndex id={id} />;
}
function stops_svg(_x: number, _y: number, _w: number) { return null; }

export function VisualScene({ variant, labels = [], title, className }: Props) {
  const rawId = useId().replace(/:/g, "");
  const id = `scene-${rawId}`;
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = wrapRef.current;
    if (!host) return;
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    const duration = 6800;
    let raf = 0; let lastSet = 0; let active = true;
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) active = entry.isIntersecting;
    }, { threshold: 0.1 });
    io.observe(host);
    const tick = (now: number) => {
      if (!active) { raf = requestAnimationFrame(tick); return; }
      const t = Math.min(1, (now - start) / duration);
      if (Math.abs(t - lastSet) > 0.005) {
        host.style.setProperty("--scene-progress", t.toFixed(3));
        lastSet = t;
      }
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    if (reduced) { host.style.setProperty("--scene-progress", "1"); host.dataset.animated = "false"; }
    else { raf = requestAnimationFrame(tick); host.dataset.animated = "true"; }
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  let content: ReactNode;
  if (variant === "service-constellation") content = <ServiceConstellation labels={labels} id={id}/>;
  else if (variant === "capability-mesh") content = <CapabilityMesh labels={labels} id={id}/>;
  else if (variant === "sector-signal-grid") content = <SectorGrid labels={labels} id={id}/>;
  else if (variant === "delivery-outcome-rail") content = <DeliveryRail labels={labels} id={id}/>;
  else if (variant === "research-index") content = <ResearchIndex id={id}/>;
  else content = <Blueprint variant={variant} labels={labels} id={id}/>;
  return <div ref={wrapRef} className={`visual-scene ${className ?? ""}`} aria-label={title}>{content}</div>;
}
