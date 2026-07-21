import { type CSSProperties, type PropsWithChildren, useCallback, useEffect, useRef } from "react";

type Spark = { x: number; y: number; angle: number; start: number };
type ClickSparkProps = PropsWithChildren<{
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-in-out" | "ease-out";
  extraScale?: number;
  className?: string;
  style?: CSSProperties;
}>;

export function ClickSpark({
  sparkColor = "#1769d5", sparkSize = 9, sparkRadius = 18, sparkCount = 7,
  duration = 360, easing = "ease-out", extraScale = 1, className, style, children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  const ease = useCallback((t: number) => {
    if (easing === "linear") return t;
    if (easing === "ease-in") return t * t;
    if (easing === "ease-in-out") return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
    return t * (2 - t);
  }, [easing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();
    let frame = 0;
    const draw = (time: number) => {
      const rect = parent.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);
      sparksRef.current = sparksRef.current.filter((spark) => {
        const progress = Math.min(1, (time - spark.start) / duration);
        if (progress >= 1) return false;
        const eased = ease(progress);
        const distance = eased * sparkRadius * extraScale;
        const length = sparkSize * (1 - eased);
        context.globalAlpha = 1 - progress;
        context.strokeStyle = sparkColor;
        context.lineWidth = 1.7;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(spark.x + distance * Math.cos(spark.angle), spark.y + distance * Math.sin(spark.angle));
        context.lineTo(spark.x + (distance + length) * Math.cos(spark.angle), spark.y + (distance + length) * Math.sin(spark.angle));
        context.stroke();
        return true;
      });
      context.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [duration, ease, extraScale, sparkColor, sparkCount, sparkRadius, sparkSize]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const now = performance.now();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    sparksRef.current.push(...Array.from({ length: sparkCount }, (_, index) => ({
      x, y, start: now, angle: (Math.PI * 2 * index) / sparkCount,
    })));
  };

  return <div className={className} style={{ position: "relative", ...style }} onClick={handleClick}>
    <canvas ref={canvasRef} aria-hidden="true" className="click-spark-canvas" />
    {children}
  </div>;
}
