import { type CSSProperties, type ReactNode, useEffect, useMemo, useRef, useState } from "react";

export type LogoLoopItem = { node: ReactNode; title: string; ariaLabel?: string };
type Props = {
  logos: LogoLoopItem[]; speed?: number; gap?: number; logoHeight?: number; hoverSpeed?: number;
  fadeOut?: boolean; fadeOutColor?: string; scaleOnHover?: boolean; ariaLabel?: string; className?: string; style?: CSSProperties;
};

export function LogoLoop({ logos, speed = 46, gap = 32, logoHeight = 28, hoverSpeed = 0, fadeOut = true,
  fadeOutColor = "var(--canvas)", scaleOnHover = true, ariaLabel = "Engineering capability stack", className, style }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const duplicated = useMemo(() => [...logos, ...logos, ...logos], [logos]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0, last = performance.now(), offset = 0;
    const animate = (now: number) => {
      const delta = Math.min(0.05, (now - last) / 1000); last = now;
      const velocity = paused ? hoverSpeed : speed;
      offset += velocity * delta;
      const cycle = track.scrollWidth / 3;
      if (cycle) offset %= cycle;
      track.style.transform = `translate3d(${-offset}px,0,0)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hoverSpeed, paused, speed]);

  return <div className={`logo-loop ${fadeOut ? "logo-loop--fade" : ""} ${className ?? ""}`} role="region" aria-label={ariaLabel}
    style={{ "--loop-gap": `${gap}px`, "--loop-fade": fadeOutColor, ...style } as CSSProperties}>
    <div ref={trackRef} className="logo-loop__track" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {duplicated.map((logo, index) => <span className={`logo-loop__item ${scaleOnHover ? "logo-loop__item--scale" : ""}`} key={`${logo.title}-${index}`} title={logo.title} aria-label={logo.ariaLabel ?? logo.title}
        style={{ fontSize: logoHeight, marginRight: gap }}>
        {logo.node}
      </span>)}
    </div>
  </div>;
}
