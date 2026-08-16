import React from "react";

export interface ServiceConstellationProps {
  /** Accessible title for the diagram (rendered as a visually-hidden heading). */
  title: string;
  /** Exactly 6 service tags, in display order: top, upper-left, upper-right, lower-left, lower-right, bottom. */
  labels: string[];
  /** Which label (by value) renders as the highlighted/active node. Defaults to labels[0]. */
  activeLabel?: string;
  /** Text shown under the logo inside the core circle. Defaults to "KSS". */
  centerLabel?: string;
  /** Logo mark rendered inside the core, above the center label. Defaults to the uploaded brand logo. */
  logo?: React.ReactNode;
  /** Shortcut: pass just an image path instead of a full `logo` node. Ignored if `logo` is also passed. */
  logoSrc?: string;
  /** Optional stat chips shown in the four corners. Pass [] to omit them entirely. */
  stats?: { label: string; value: string }[];
  className?: string;
}

const POSITIONS = [
  { left: "50%", top: "21.7%" },   // top
  { left: "20%", top: "34.2%" },   // upper-left
  { left: "80%", top: "34.2%" },   // upper-right
  { left: "20%", top: "65.8%" },   // lower-left
  { left: "80%", top: "65.8%" },   // lower-right
  { left: "50%", top: "78.3%" },   // bottom
];

const DEFAULT_LOGO = (
  <img
    src="./Kalpanaaa Logo.svg"
    alt="Company logo"
    className="vsc-logo-img"
  />
);

const DEFAULT_STATS = [
  { label: "UPTIME", value: "99.9%" },
  { label: "MODULES", value: "06" },
  { label: "REGIONS", value: "12" },
  { label: "MONITORED", value: "24/7" },
];

export function ServiceConstellation({
  title,
  labels,
  activeLabel,
  centerLabel = "KSS",
  logo,
  logoSrc,
  stats = DEFAULT_STATS,
  className = "",
}: ServiceConstellationProps) {
  if (labels.length !== 6) {
    // eslint-disable-next-line no-console
    console.warn(
      `ServiceConstellation expects exactly 6 labels, received ${labels.length}.`
    );
  }
  const active = activeLabel ?? labels[0];
  const resolvedLogo =
    logo ??
    (logoSrc ? (
      <img src={logoSrc} alt="Company logo" className="vsc-logo-img" />
    ) : (
      DEFAULT_LOGO
    ));

  return (
    <div className={`vsc-panel ${className}`}>
      <span className="vsc-sr-only">{title}</span>

      <div className="vsc-glow" />
      <div className="vsc-scan" />

      <span className="vsc-bracket vsc-tl" />
      <span className="vsc-bracket vsc-tr" />
      <span className="vsc-bracket vsc-bl" />
      <span className="vsc-bracket vsc-br" />

      <span className="vsc-particle" style={{ left: "30%", top: "24%", animationDelay: ".2s" }} />
      <span className="vsc-particle" style={{ left: "70%", top: "24%", animationDelay: ".9s" }} />
      <span className="vsc-particle" style={{ left: "26%", top: "76%", animationDelay: "1.5s" }} />
      <span className="vsc-particle" style={{ left: "74%", top: "76%", animationDelay: ".6s" }} />
      <span className="vsc-particle" style={{ left: "50%", top: "58%", animationDelay: "1.1s" }} />
      <span className="vsc-particle" style={{ left: "14%", top: "50%", animationDelay: "1.8s" }} />
      <span className="vsc-particle" style={{ left: "86%", top: "50%", animationDelay: ".4s" }} />

      <div className="vsc-stage">
        <svg className="vsc-connectors" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
          <circle className="vsc-ring" cx="300" cy="300" r="195" />
          <circle className="vsc-ring vsc-r2" cx="300" cy="300" r="228" />

          <polygon className="vsc-hexOuter" points="300,175 415,240 415,360 300,425 185,360 185,240" />
          <polygon className="vsc-hexInner" points="300,210 378,255 378,345 300,390 222,345 222,255" />

          <path className="vsc-link" id="vsc-l1" d="M300,210 L300,130" />
          <path className="vsc-link" id="vsc-l2" d="M222,255 L120,205" />
          <path className="vsc-link" id="vsc-l3" d="M378,255 L480,205" />
          <path className="vsc-link" id="vsc-l4" d="M222,345 L120,395" />
          <path className="vsc-link" id="vsc-l5" d="M378,345 L480,395" />
          <path className="vsc-link" id="vsc-l6" d="M300,390 L300,470" />

          {["l1", "l2", "l3", "l4", "l5", "l6"].map((id, i) => (
            <circle className="vsc-pulse" r="3.2" key={id}>
              <animateMotion
                dur={`${3.2 + i * 0.15}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              >
                <mpath href={`#vsc-${id}`} />
              </animateMotion>
            </circle>
          ))}
        </svg>

        <div className="vsc-core">
          <span className="vsc-mark">{resolvedLogo}</span>
          {centerLabel}
        </div>

        {labels.slice(0, 6).map((label, i) => (
          <div
            key={label}
            className={`vsc-node ${label === active ? "vsc-active" : ""}`}
            style={POSITIONS[i]}
          >
            {label}
          </div>
        ))}
      </div>

      {stats.slice(0, 4).map((stat, i) => (
        <div className={`vsc-stat vsc-s${i + 1}`} key={stat.label}>
          <span className="vsc-ind" />
          {stat.label} <b>{stat.value}</b>
        </div>
      ))}

      <div className="vsc-panel-tag">
        <span className="vsc-led" />
        SYSTEM ARCHITECTURE — LIVE
      </div>

      <style>{VSC_STYLES}</style>
    </div>
  );
}

const VSC_STYLES = `
.vsc-panel{
  --navy-900:#0f172a; --navy-700:#1e293b; --slate-500:#5b6b85; --slate-400:#8592a8;
  --blue-600:#1d4ed8; --blue-500:#2563eb; --blue-400:#3b82f6; --line:#e1e8f4;
  --white:#ffffff;
  --mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
  position:relative; width:100%; max-width:520px; aspect-ratio:1/1;
  background:linear-gradient(160deg, #f6f9ff, #eaf0fb);
  border:1px solid var(--line); border-radius:32px; overflow:hidden;
  box-shadow:0 1px 2px rgba(15,23,42,0.04), 0 30px 60px -30px rgba(15,23,42,0.25), inset 0 1px 0 rgba(255,255,255,0.6);
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
}
.vsc-sr-only{ position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; }
.vsc-panel::before{
  content:""; position:absolute; inset:0;
  background-image:linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size:28px 28px; opacity:.55;
  mask-image:radial-gradient(circle at 50% 46%, black 40%, transparent 78%);
}
.vsc-glow{
  position:absolute; width:60%; height:60%; left:20%; top:12%;
  background:radial-gradient(circle, rgba(59,130,246,0.16), transparent 70%);
  filter:blur(10px); animation:vsc-drift 9s ease-in-out infinite; pointer-events:none;
}
@keyframes vsc-drift{ 0%,100%{ transform:translate(0,0) scale(1);} 50%{ transform:translate(2%,-3%) scale(1.06);} }
.vsc-scan{
  position:absolute; left:0; right:0; height:140px;
  background:linear-gradient(180deg, transparent, rgba(59,130,246,0.06), transparent);
  animation:vsc-sweep 6s ease-in-out infinite; pointer-events:none;
}
@keyframes vsc-sweep{ 0%{transform:translateY(-160px); opacity:0;} 15%{opacity:1;} 85%{opacity:1;} 100%{transform:translateY(640px); opacity:0;} }
.vsc-bracket{ position:absolute; width:26px; height:26px; border:2px solid #c3d3f0; opacity:.9; }
.vsc-tl{ top:18px; left:18px; border-right:none; border-bottom:none; border-radius:6px 0 0 0; }
.vsc-tr{ top:18px; right:18px; border-left:none; border-bottom:none; border-radius:0 6px 0 0; }
.vsc-bl{ bottom:18px; left:18px; border-right:none; border-top:none; border-radius:0 0 0 6px; }
.vsc-br{ bottom:18px; right:18px; border-left:none; border-top:none; border-radius:0 0 6px 0; }
.vsc-particle{ position:absolute; width:3px; height:3px; border-radius:50%; background:#9db4dd; opacity:.5; animation:vsc-float 5s ease-in-out infinite; }
@keyframes vsc-float{ 0%,100%{transform:translateY(0); opacity:.3;} 50%{transform:translateY(-9px); opacity:.7;} }
.vsc-stage{ position:absolute; inset:0; }
.vsc-connectors{ position:absolute; inset:0; width:100%; height:100%; }
.vsc-ring{ fill:none; stroke:#c7d6f2; stroke-width:1; stroke-dasharray:2 7; animation:vsc-spin 90s linear infinite; transform-origin:300px 300px; }
.vsc-r2{ animation-direction:reverse; animation-duration:70s; stroke:#d4e0f7; }
@keyframes vsc-spin{ to{ transform:rotate(360deg); } }
.vsc-hexOuter{ fill:none; stroke:#c2d2f0; stroke-width:1; }
.vsc-hexInner{ fill:rgba(255,255,255,0.5); stroke:#aec2ec; stroke-width:1.3; }
.vsc-link{ fill:none; stroke:#a7bce6; stroke-width:1.4; stroke-dasharray:4 5; }
.vsc-pulse{ fill:var(--blue-500); filter:drop-shadow(0 0 4px rgba(37,99,235,0.7)); }
.vsc-core{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:92px; height:92px; border-radius:50%;
  background:linear-gradient(180deg, var(--blue-500), var(--navy-900));
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px;
  color:#fff; font-family:var(--mono); font-weight:800; font-size:13px; letter-spacing:0.03em;
  box-shadow:0 10px 26px -6px rgba(15,23,42,0.45), 0 0 0 6px rgba(37,99,235,0.09);
  z-index:4;
}
.vsc-core::after, .vsc-core::before{
  content:""; position:absolute; inset:-1px; border-radius:50%;
  border:1px solid rgba(37,99,235,0.35); animation:vsc-pulseRing 2.8s ease-out infinite;
}
.vsc-core::before{ animation-delay:1.4s; }
@keyframes vsc-pulseRing{ 0%{transform:scale(1); opacity:.75;} 100%{transform:scale(2.1); opacity:0;} }
.vsc-mark{ width:38px; height:26px; }
.vsc-mark svg{ width:100%; height:100%; display:block; }
.vsc-logo-img{
  width:100%; height:100%; object-fit:contain; display:block;
  mix-blend-mode:multiply;
}
.vsc-node{
  position:absolute; transform:translate(-50%,-50%);
  font-family:var(--mono); font-size:12px; font-weight:700; letter-spacing:0.03em;
  padding:12px 19px; border-radius:12px; white-space:nowrap;
  background:var(--white); color:var(--navy-700);
  border:1px solid var(--line); box-shadow:0 2px 8px rgba(15,23,42,0.06);
  transition:transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease, border-color .3s ease;
  z-index:3;
}
.vsc-node:hover{ transform:translate(-50%,-50%) translateY(-4px); box-shadow:0 14px 26px -10px rgba(15,23,42,0.22); border-color:#c7d4ea; }
.vsc-active{ background:linear-gradient(180deg, var(--blue-500), var(--blue-600)); color:#fff; border-color:transparent; box-shadow:0 8px 20px -6px rgba(29,78,216,0.55); }
.vsc-stat{
  position:absolute; display:flex; align-items:center; gap:7px;
  font-family:var(--mono); font-size:10px; color:var(--slate-500);
  background:rgba(255,255,255,0.7); border:1px solid var(--line);
  padding:7px 11px; border-radius:9px; backdrop-filter:blur(2px); z-index:3;
}
.vsc-stat b{ color:var(--navy-900); font-size:11px; }
.vsc-ind{ width:5px; height:5px; border-radius:50%; background:var(--blue-500); }
.vsc-s1{ left:6%; top:8%; } .vsc-s2{ right:6%; top:8%; } .vsc-s3{ left:6%; bottom:8%; } .vsc-s4{ right:6%; bottom:8%; }
.vsc-panel-tag{
  position:absolute; bottom:20px; left:50%; transform:translateX(-50%);
  font-family:var(--mono); font-size:10.5px; color:var(--slate-400); letter-spacing:0.04em;
  display:flex; align-items:center; gap:7px; z-index:5;
}
.vsc-led{ width:6px; height:6px; border-radius:50%; background:#22c55e; box-shadow:0 0 0 3px rgba(34,197,94,0.18); animation:vsc-blink 2.2s ease-in-out infinite; }
@keyframes vsc-blink{ 50%{ opacity:.35; } }
@media (prefers-reduced-motion: reduce){ .vsc-panel *{ animation:none !important; transition:none !important; } }
@media (max-width:480px){
  .vsc-panel{ border-radius:22px; }
  .vsc-node{ font-size:10px; padding:8px 13px; }
  .vsc-core{ width:66px; height:66px; font-size:10px; }
  .vsc-mark{ width:28px; height:19px; }
  .vsc-stat{ font-size:8.5px; padding:5px 8px; }
  .vsc-stat b{ font-size:9px; }
}
`;

export default ServiceConstellation;