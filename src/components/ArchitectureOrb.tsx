import type { CSSProperties } from "react";

type Props = {
  labels?: string[];
  compact?: boolean;
};

const defaultLabels = ["WEB ENGINEERING", "MOBILE APPS", "CLOUD DEVOPS", "QA AUTOMATION", "RAG SYSTEMS", "MULTI-AGENT AI"];

export function ArchitectureOrb({ labels = defaultLabels, compact = false }: Props) {
  return (
    <div aria-hidden="true" className={`architecture-scene ${compact ? "architecture-scene-compact" : ""}`}>
      <div className="architecture-orbit architecture-orbit-one" />
      <div className="architecture-orbit architecture-orbit-two" />
      <div className="architecture-cube architecture-cube-large">
        <span className="cube-face cube-front" /><span className="cube-face cube-back" /><span className="cube-face cube-right" />
        <span className="cube-face cube-left" /><span className="cube-face cube-top" /><span className="cube-face cube-bottom" />
      </div>
      <div className="architecture-cube architecture-cube-small">
        <span className="cube-face cube-front" /><span className="cube-face cube-back" /><span className="cube-face cube-right" />
        <span className="cube-face cube-left" /><span className="cube-face cube-top" /><span className="cube-face cube-bottom" />
      </div>
      <div className="architecture-label-ring">
        {labels.slice(0, 6).map((label, index) => (
          <span key={label} className="architecture-orbit-label" style={{ "--orbit-index": index } as CSSProperties}>
            {label}
          </span>
        ))}
      </div>
      <span className="architecture-node node-one" /><span className="architecture-node node-two" /><span className="architecture-node node-three" />
    </div>
  );
}
