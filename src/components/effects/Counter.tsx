import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type Place = number | ".";
type Props = { value: number; places?: Place[]; fontSize?: number; padding?: number; gap?: number; textColor?: string; fontWeight?: number | string; className?: string };

function Digit({ place, value, height }: { place: Place; value: number; height: number }) {
  const isDecimal = place === ".";
  const rounded = isDecimal ? 0 : Math.floor(value / place);
  const spring = useSpring(rounded, { stiffness: 95, damping: 18 });
  useEffect(() => { if (!isDecimal) spring.set(rounded); }, [isDecimal, rounded, spring]);
  if (isDecimal) return <span className="metric-counter__decimal" style={{ height }}>.</span>;
  return <span className="metric-counter__digit" style={{ height }}>
    {Array.from({ length: 10 }, (_, number) => <CounterNumber key={number} mv={spring} number={number} height={height} />)}
  </span>;
}
function CounterNumber({ mv, number, height }: { mv: ReturnType<typeof useSpring>; number: number; height: number }) {
  const y = useTransform(mv, (latest) => { let offset = (10 + number - (latest % 10)) % 10; if (offset > 5) offset -= 10; return offset * height; });
  return <motion.span className="metric-counter__number" style={{ y }}>{number}</motion.span>;
}
export function Counter({ value, places, fontSize = 38, padding = 2, gap = 2, textColor = "var(--brand)", fontWeight = 800, className }: Props) {
  const actualPlaces = places ?? String(Math.floor(value)).split("").map((_, index, array) => 10 ** (array.length - index - 1));
  const height = fontSize + padding;
  return <span className={`metric-counter ${className ?? ""}`} style={{ color: textColor, fontSize, gap, fontWeight }} aria-label={String(value)}>
    {actualPlaces.map((place, index) => <Digit key={`${place}-${index}`} place={place} value={value} height={height} />)}
  </span>;
}

export function MetricCounter({ value }: { value: string }) {
  const match = value.match(/^(<\s*)?(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <span className="metric-counter__static">{value}</span>;
  const [, prefix = "", numeric, suffix = ""] = match;
  const [whole, fraction = ""] = numeric.split(".");
  const numberValue = Number(numeric);
  const places: Place[] = [
    ...whole.split("").map((_, index) => 10 ** (whole.length - index - 1)),
    ...(fraction ? ["." as const, ...fraction.split("").map((_, index) => 10 ** -(index + 1))] : []),
  ];
  return <span className="inline-flex items-baseline"><span className="metric-counter__affix">{prefix}</span><Counter value={numberValue} places={places} /><span className="metric-counter__affix">{suffix}</span></span>;
}
