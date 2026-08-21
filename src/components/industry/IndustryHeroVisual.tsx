import type { ReactNode } from "react";

export function IndustryHeroVisual({ title }: { title: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[540px]" aria-hidden="true">
      <svg viewBox="0 0 560 480" className="h-auto w-full" role="img">
        <title>{title} platform illustration</title>
        <defs>
          <linearGradient id="ih-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="ih-cube-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="ih-cube-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="ih-cube-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <filter id="ih-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <ellipse cx="280" cy="318" rx="168" ry="28" fill="#BFDBFE" opacity="0.55" />
        <ellipse cx="280" cy="308" rx="148" ry="22" fill="#DBEAFE" />
        <ellipse cx="280" cy="300" rx="126" ry="16" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
        <ellipse cx="280" cy="292" rx="96" ry="11" fill="#FFFFFF" stroke="#BFDBFE" />

        <circle cx="280" cy="188" r="58" fill="#93C5FD" opacity="0.28" filter="url(#ih-soft)" />

        <g transform="translate(280 168)">
          <polygon points="0,-52 58,-22 0,8 -58,-22" fill="url(#ih-cube-top)" />
          <polygon points="-58,-22 0,8 0,78 -58,48" fill="url(#ih-cube-left)" />
          <polygon points="58,-22 0,8 0,78 58,48" fill="url(#ih-cube-right)" />
          <polygon points="0,-52 58,-22 0,8 -58,-22" fill="#FFFFFF" opacity="0.18" />
        </g>

        <line x1="280" y1="248" x2="118" y2="168" stroke="#60A5FA" strokeWidth="2.5" />
        <line x1="280" y1="248" x2="442" y2="158" stroke="#60A5FA" strokeWidth="2.5" />
        <line x1="280" y1="248" x2="430" y2="268" stroke="#38BDF8" strokeWidth="2.5" />

        <HexPanel x={78} y={118} fill="#38BDF8">
          <text x="40" y="46" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui">&lt;/&gt;</text>
        </HexPanel>
        <HexPanel x={402} y={108} fill="#FB923C">
          <path d="M40 24c8 8 10 16 0 28 10-4 16-14 14-24-6 2-10 4-14-4z" fill="#fff" />
          <rect x="36" y="50" width="8" height="8" rx="1" fill="#fff" />
        </HexPanel>
        <HexPanel x={390} y={228} fill="#22D3EE">
          <polyline points="22,50 34,38 44,44 58,28" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="58,28 58,40 46,28" fill="#fff" />
        </HexPanel>

        <rect x="214" y="92" width="18" height="18" rx="3" fill="url(#ih-glow)" transform="rotate(20 223 101)" opacity="0.9" />
        <rect x="338" y="78" width="14" height="14" rx="3" fill="#60A5FA" transform="rotate(-18 345 85)" />
        <rect x="196" y="248" width="16" height="16" rx="3" fill="#93C5FD" transform="rotate(12 204 256)" />
        <rect x="352" y="250" width="12" height="12" rx="2" fill="#3B82F6" />
      </svg>
    </div>
  );
}

function HexPanel({ x, y, fill, children }: { x: number; y: number; fill: string; children: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" fill={fill} />
      {children}
    </g>
  );
}
