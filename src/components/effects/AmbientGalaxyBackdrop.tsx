import { Suspense, lazy } from "react";
import "./galaxy.css";

const GalaxyField = lazy(() => import("./GalaxyField").then((module) => ({ default: module.GalaxyField })));

export function AmbientGalaxyBackdrop({ className = "ambient-galaxy" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <Suspense fallback={null}>
        <GalaxyField
          mouseInteraction={false}
          density={0.85}
          glowIntensity={0.18}
          saturation={0}
          hueShift={205}
          starSpeed={0.25}
          rotationSpeed={0.04}
          twinkleIntensity={0.2}
          autoCenterRepulsion={0}
          transparent
        />
      </Suspense>
    </div>
  );
}
