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
  // Canvas CSS size, kept up to date by the ResizeObserver. Reading it from a ref means the draw
  // loop never has to measure layout.
  const sizeRef = useRef({ width: 0, height: 0 });
  // 0 means "loop is parked". requestAnimationFrame never returns 0, so this is a safe sentinel.
  const frameRef = useRef(0);
  const drawRef = useRef<((time: number) => void) | null>(null);

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
      sizeRef.current = { width: rect.width, height: rect.height };
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    // ResizeObserver callbacks run after layout, so measuring here cannot thrash.
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();

    /**
     * This loop used to run unconditionally for the lifetime of the app, and it measured the
     * wrapper — which contains the whole page — with getBoundingClientRect() on every frame. That
     * is a forced synchronous layout of the entire document ~60 times a second, plus a
     * full-viewport clearRect, all to draw nothing at all unless the visitor had just clicked.
     * It now runs only while sparks are alive and parks itself as soon as the last one expires,
     * so the effect is visually identical but costs nothing while the page is loading.
     */
    const draw = (time: number) => {
      const { width, height } = sizeRef.current;
      context.clearRect(0, 0, width, height);
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

      // The canvas was cleared above, so parking here leaves nothing half-drawn.
      if (sparksRef.current.length === 0) {
        frameRef.current = 0;
        return;
      }
      frameRef.current = requestAnimationFrame(draw);
    };

    drawRef.current = draw;
    // Pick the loop back up if sparks were queued before this effect (re)ran.
    if (sparksRef.current.length > 0) frameRef.current = requestAnimationFrame(draw);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
      drawRef.current = null;
      observer.disconnect();
    };
  }, [duration, ease, extraScale, sparkColor, sparkRadius, sparkSize]);

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
    if (!frameRef.current && drawRef.current) {
      frameRef.current = requestAnimationFrame(drawRef.current);
    }
  };

  return <div className={className} style={{ position: "relative", ...style }} onClick={handleClick}>
    <canvas ref={canvasRef} aria-hidden="true" className="click-spark-canvas" />
    {children}
  </div>;
}
