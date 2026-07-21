import { type ReactNode, useEffect, useId, useRef } from "react";

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
  const points = [[320,85],[500,165],[500,300],[320,365],[140,300],[140,165]] as [number, number][];
  return <Frame id={id} title="Six Kalpanaaaa services connected to one engineering hub">
    <g className="scene-orbit-ring"><circle cx="320" cy="220" r="126" fill="none" stroke="#d0e2fb" strokeDasharray="5 7"/></g>
    <g className="scene-orbit-ring scene-orbit-ring--reverse"><circle cx="320" cy="220" r="92" fill="none" stroke="#d0e2fb" /></g>
    {points.map((p, index) => <Connector key={`c${index}`} from={[320,220]} to={p} dashed route />)}
    <g className="scene-orbit-group"><g filter={`url(#${id}-shadow)`}><path d="M320 144 386 181 386 259 320 297 254 259 254 181Z" fill="#eef6ff" stroke={c.brand} strokeWidth="2"/><path d="M320 144v153M254 181l66 38 66-38M254 259l66-40 66 40" fill="none" stroke={c.brand} strokeWidth="1.4"/><circle className="scene-pulse" cx="320" cy="220" r="25" fill={c.brand} style={{ transformBox: "fill-box" as any }}/></g></g>
    <text x="320" y="225" fill="#fff" fontSize="10" fontWeight="800" textAnchor="middle" className="scene-tick" style={{ animationDelay: "200ms" }}>KSS</text>
    {points.map((p, index) => <Node key={labels[index] ?? index} x={p[0]} y={p[1]} label={labels[index] ?? "SERVICE"} active={index === 0} wide grow cardIndex={index + 1} />)}
  </Frame>;
}

function CapabilityMesh({ labels, id }: { labels: string[]; id: string }) {
  const left = [[110,105],[110,220],[110,335]] as [number,number][]; const right = [[530,105],[530,220],[530,335]] as [number,number][];
  const order = [...left, ...right];
  return <Frame id={id} title="Capability mesh connecting Kalpanaaaa services">
    <text x="110" y="58" fill={c.muted} fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle">BUILD</text><text x="320" y="58" fill={c.muted} fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle">ENGINEER</text><text x="530" y="58" fill={c.muted} fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle">OPERATE</text>
    {order.map((p, i) => <Connector key={`r${i}`} from={[320,220]} to={p} route short />)}
    <g className="scene-orbit-group" filter={`url(#${id}-shadow)`}><Node x={320} y={220} label="KALPANAAAA" active wide /></g>
    {order.map((p,i)=><Node key={i} x={p[0]} y={p[1]} label={labels[i] ?? "CAPABILITY"} wide grow cardIndex={i + 1} />)}
    <path d="M65 394H575" stroke={c.line} strokeWidth="2"/><text x="320" y="414" fill={c.brand} fontSize="11" fontWeight="700" letterSpacing="1" textAnchor="middle" className="scene-tick">DISCOVER · DELIVER · EVOLVE</text>
  </Frame>;
}

function SectorGrid({ labels, id }: { labels: string[]; id: string }) {
  const points = [[175,130],[465,130],[175,310],[465,310]] as [number,number][];
  return <Frame id={id} title="Sectors connected by Kalpanaaaa engineering rails">
    <path d="M175 130H465V310H175Z M175 220H465 M320 130V310" fill="none" stroke={c.line} strokeWidth="2" className="scene-flow"/>
    <circle cx="320" cy="220" r="62" fill="#eef6ff" stroke={c.brand} strokeWidth="2"/>
    <path d="M293 220h54M320 193v54" stroke={c.brand} strokeWidth="3" strokeLinecap="round" className="scene-shimmer"/>
    <text x="320" y="260" fill={c.ink} fontSize="10" fontWeight="800" letterSpacing="1" textAnchor="middle">ENGINEERING RAIL</text>
    <Pulse cx={320} cy={220} r={48} slow/>
    {points.map((p,i)=><Node key={i} x={p[0]} y={p[1]} label={labels[i] ?? "SECTOR"} active={i===1} wide grow cardIndex={i + 1} />)}
  </Frame>;
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
  return <Frame id={id} title="Research index for Kalpanaaaa engineering notes">
    {items.map((note,i)=><g key={note.t} className="scene-card" style={{ animationDelay: `${i * 110}ms` }} transform={`translate(${note.x} ${note.y})`} filter={`url(#${id}-shadow)`}><rect width="132" height="84" rx="14" fill="#fff" stroke={i===3?c.brand:c.line}/><path d="M16 24h50M16 38h92M16 52h69" stroke={i===3?c.brand:c.line} strokeWidth="3" strokeLinecap="round"/><text className="scene-token" x="16" y="72" fontSize="10" fontWeight="800" fill={c.ink}>{note.t}</text></g>)}
    <Connector from={[170,190]} to={[264,210]} dashed route/><Connector from={[396,188]} to={[330,300]} dashed route/><Connector from={[170,190]} to={[330,300]} dashed route/>
    <Pulse cx={180} cy={200} r={10} delay={0} />
    <Pulse cx={394} cy={195} r={10} delay={420} />
    <Pulse cx={330} cy={310} r={10} delay={840} />
  </Frame>;
}

function Blueprint({ variant, labels, id }: { variant: string; labels: string[]; id: string }) {
  const service = variant.replace("service-", "");
  const industry = variant.replace("industry-", "");
  const caseStudy = variant.replace("case-", "");
  if (variant.startsWith("service-")) {
    if (service === "mobile-apps") return <Frame id={id} title="Mobile application device blueprint"><path d="M160 82h120v276H160zM360 82h120v276H360z" fill="#fff" stroke={c.brand} strokeWidth="2"/><path d="M180 118h80M180 146h80M380 118h80M380 146h80" stroke={c.line} strokeWidth="8"/><path className="scene-flow" d="M180 220L460 220" stroke={c.brand} strokeWidth="2"/><Node x={320} y={380} label="OFFLINE · SYNC · NATIVE" active wide />{stops_svg(160,82,120)}</Frame>;
    if (service === "cloud-devops") return <Frame id={id} title="Cloud infrastructure topology blueprint"><Node x={320} y={74} label="CI / CD" active /><Connector from={[320,94]} to={[190,180]} route/><Connector from={[320,94]} to={[450,180]} route/><Node x={190} y={190} label="CONTAINER" grow cardIndex={1}/><Node x={450} y={190} label="CONTAINER" grow cardIndex={2}/><Connector from={[190,210]} to={[320,300]} route/><Connector from={[450,210]} to={[320,300]} route/><Node x={320} y={310} label="OBSERVE · RECOVER" active wide /><path className="scene-flow" d="M120 370h400" stroke={c.line} strokeWidth="2"/></Frame>;
    if (service === "qa-testing") return <Frame id={id} title="Quality assurance test matrix"><text x="110" y="78" fill={c.muted} fontSize="10" fontWeight="800">TEST MATRIX</text>{Array.from({length:4},(_,row)=>Array.from({length:5},(_,column)=><g key={`${row}-${column}`}><rect x={110+column*78} y={100+row*62} width="50" height="36" rx="8" fill={row===2&&column===3?"#fff":c.pale} stroke={c.line}/><path className={row===2&&column===3?undefined:"scene-tick"} d={`M${124+column*78} ${118+row*62}l7 7 15-17`} fill="none" stroke={row===2&&column===3?c.brand:c.blue} strokeWidth="2" style={{ animationDelay: `${(row * 5 + column) * 35}ms` }}/></g>))}<Node x={320} y={385} label="VERIFY BEFORE RELEASE" active wide /></Frame>;
    if (service === "rag-systems") return <Frame id={id} title="Retrieval augmented generation route"><Node x={105} y={220} label="QUERY" active /><Connector from={[157,220]} to={[240,150]} route/><Connector from={[157,220]} to={[240,290]} route/><Node x={290} y={150} label="RETRIEVE" grow cardIndex={1}/><Node x={290} y={290} label="RERANK" grow cardIndex={2}/><Connector from={[342,150]} to={[450,220]} route/><Connector from={[342,290]} to={[450,220]} route/><Node x={510} y={220} label="GROUNDED ANSWER" active wide /><circle className="scene-orbit-ring" cx="320" cy="220" r="78" fill="none" stroke={c.line} strokeDasharray="5 6" strokeOpacity=".7"/><Pulse cx={290} cy={150} r={10} delay={200}/><Pulse cx={290} cy={290} r={10} delay={600}/></Frame>;
    if (service === "multi-agent-automation") return <Frame id={id} title="Multi agent workflow handoff map"><Node x={170} y={125} label="PLAN" active /><Node x={470} y={125} label="RESEARCH" grow cardIndex={2}/><Node x={170} y={315} label="ACT" grow cardIndex={3}/><Node x={470} y={315} label="REVIEW" grow cardIndex={4}/><path className="scene-flow" d="M222 125H418M470 177V263M418 315H222M170 263V177" fill="none" stroke={c.brand} strokeWidth="2"/><Node x={320} y={220} label="HUMAN APPROVAL" wide /><Pulse cx={320} cy={220} r={48} slow/></Frame>;
    return <Frame id={id} title="Web engineering application blueprint"><rect x="120" y="80" width="400" height="270" rx="18" fill="#fff" stroke={c.brand} strokeWidth="2"/><path d="M120 122h400M155 158h150M155 190h84M155 222h134M345 158h140v146H345z" stroke={c.line} strokeWidth="2"/><circle cx="145" cy="101" r="5" fill={c.brand} className="scene-pulse"/><circle cx="165" cy="101" r="5" fill={c.brand} className="scene-pulse scene-pulse--slow"/><Node x={320} y={390} label="RESPONSIVE · SECURE · SCALABLE" active wide /></Frame>;
  }
  if (variant.startsWith("industry-")) {
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
