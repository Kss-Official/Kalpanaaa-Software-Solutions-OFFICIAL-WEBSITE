import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(0,102,204,0.35), transparent 60%), radial-gradient(ellipse 50% 50% at 70% 70%, rgba(59,130,246,0.30), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
    </div>
  );
}
