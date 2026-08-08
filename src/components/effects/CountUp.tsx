import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

type Props = {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

export function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);
  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const decimalPlaces = Math.max(...[from, to].map((value) => String(value).split(".")[1]?.length ?? 0));

  const formatValue = useCallback((value: number) => {
    const formatted = new Intl.NumberFormat("en-US", {
      useGrouping: Boolean(separator),
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(value);
    return separator ? formatted.replace(/,/g, separator) : formatted;
  }, [decimalPlaces, separator]);

  useEffect(() => {
    if (ref.current) ref.current.textContent = formatValue(direction === "down" ? to : from);
  }, [direction, formatValue, from, to]);

  useEffect(() => {
    if (!isInView || !startWhen) return;
    onStart?.();
    const startTimer = window.setTimeout(() => motionValue.set(direction === "down" ? from : to), delay * 1000);
    const endTimer = window.setTimeout(() => onEnd?.(), (delay + duration) * 1000);
    return () => { window.clearTimeout(startTimer); window.clearTimeout(endTimer); };
  }, [delay, direction, duration, from, isInView, motionValue, onEnd, onStart, startWhen, to]);

  useEffect(() => springValue.on("change", (value) => {
    if (ref.current) ref.current.textContent = formatValue(value);
  }), [formatValue, springValue]);

  return <span ref={ref} className={className} />;
}
