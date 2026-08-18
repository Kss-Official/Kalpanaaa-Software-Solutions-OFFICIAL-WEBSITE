import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon: LucideIcon;
  trend?: {
    type: 'up' | 'down' | 'neutral';
    text: string;
  };
  color?: 'blue' | 'emerald' | 'amber' | 'rose' | 'purple';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtext,
  icon: Icon,
  trend,
  color = 'blue'
}) => {
  const colorMap = {
    blue: 'var(--accent-blue)',
    emerald: 'var(--accent-emerald)',
    amber: 'var(--accent-amber)',
    rose: 'var(--accent-rose)',
    purple: 'var(--accent-violet)',
  };

  const textColor = colorMap[color];

  return (
    <div className="bg-[var(--bg-tertiary)] rounded-2xl border border-[var(--border-subtle)] p-5 shadow-[var(--shadow-sm)] transition-all hover:bg-[var(--bg-elevated)] group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-black tracking-widest text-[var(--text-tertiary)] uppercase block mb-1">{title}</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">{value}</span>
          </div>
        </div>
        <div 
          className="p-2 rounded-xl border group-hover:scale-105 transition-transform"
          style={{ color: textColor, backgroundColor: `${textColor}15`, borderColor: `${textColor}30` }}
        >
          <Icon className="w-4 h-4" strokeWidth={2.5} />
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] mt-2">
        {subtext ? (
          <p className="text-[10px] text-[var(--text-secondary)] font-medium">{subtext}</p>
        ) : <div />}
        
        {trend && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
            trend.type === 'up' ? 'text-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10' :
            trend.type === 'down' ? 'text-[var(--accent-rose)] bg-[var(--accent-rose)]/10' :
            'text-[var(--text-tertiary)] bg-[var(--bg-elevated)]'
          }`}>
            {trend.text}
          </span>
        )}
      </div>
    </div>
  );
};
