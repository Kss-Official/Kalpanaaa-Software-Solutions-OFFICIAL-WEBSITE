import { Suspense, lazy } from "react";

const Antigravity = lazy(() => import("./Antigravity"));

export function AntigravityBackdrop() {
  return (
    <div aria-hidden="true" className="antigravity-backdrop">
      <Suspense fallback={null}>
        <Antigravity
          count={280}
          color="#000000"
          autoAnimate
          ringRadius={9}
          magnetRadius={8}
          particleSize={1.4}
          particleVariance={0.8}
          waveSpeed={0.35}
          waveAmplitude={0.7}
          lerpSpeed={0.06}
          rotationSpeed={0.05}
          pulseSpeed={2.5}
          fieldStrength={8}
        />
      </Suspense>
    </div>
  );
}
