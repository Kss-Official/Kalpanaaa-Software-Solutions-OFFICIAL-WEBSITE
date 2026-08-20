import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Check, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    navTitle: "Discover",
    navSubtitle: "Understand the opportunity",
    pill: "STEP 01",
    title: "Discovery & Strategy",
    color: "#1769d5",
    light: "#edf5ff",
    glow: "rgba(23,105,213,.8)",
    description:
      "We dive deep into your business, users, market, and goals to define a clear strategy and product roadmap.",
    image: "/development-step-1.jpeg",
    points: [
      "Business & requirement analysis",
      "Technical planning & roadmap",
      "User research & interviews",
      "Competitor analysis",
    ],
  },
  {
    number: "02",
    navTitle: "Design",
    navSubtitle: "Shape the experience",
    pill: "STEP 02",
    title: "UX/UI Design",
    color: "#6d3df4",
    light: "#f2efff",
    glow: "rgba(109,61,244,.68)",
    description:
      "We turn strategy into intuitive, engaging designs that deliver seamless user experiences and strong visual impact.",
    image: "/Deve-1.svg",
    points: [
      "User flows & information architecture",
      "Interactive prototypes",
      "Wireframes & layouts",
      "Usability testing",
      "UI design & design system",
      "Design for all devices",
    ],
  },
  {
    number: "03",
    navTitle: "Develop",
    navSubtitle: "Build the solution",
    pill: "STEP 03",
    title: "Development & Testing",
    color: "#0c9fc2",
    light: "#eafaff",
    glow: "rgba(12,159,194,.68)",
    description:
      "We bring designs to life with clean, scalable code and rigorous testing to ensure performance, security, and reliability at every step.",
    image: "/Deve-2.svg",
    points: [
      "Frontend development",
      "Database design & optimization",
      "Backend development",
      "QA & testing",
      "API integration",
      "Performance & security",
    ],
  },
  {
    number: "04",
    navTitle: "Launch",
    navSubtitle: "Take it to the world",
    pill: "STEP 04",
    title: "Deployment & Launch",
    color: "#ff6b18",
    light: "#fff3eb",
    glow: "rgba(255,107,24,.68)",
    description:
      "We ensure a smooth launch to production with rigorous checks, monitoring, and ongoing support for long-term success.",
    image: "/Deve-3.svg",
    points: [
      "Production deployment",
      "Monitoring & analytics",
      "Final QA & validation",
      "Bug fixes & optimizations",
      "Security & performance checks",
      "Ongoing support",
    ],
  },
];

const SLIDE_MS = 5200;

export default function DevelopmentProcessSection() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [centers, setCenters] = useState<number[]>([]);
  const navRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = steps[active];

  useLayoutEffect(() => {
    const measureCenters = () => {
      const nav = navRef.current;
      if (!nav) return;

      const navBox = nav.getBoundingClientRect();
      setCenters(
        stepRefs.current.map((step) => {
          if (!step) return 0;
          const box = step.getBoundingClientRect();
          return box.left - navBox.left + box.width / 2;
        }),
      );
    };

    measureCenters();
    window.addEventListener("resize", measureCenters);
    return () => window.removeEventListener("resize", measureCenters);
  }, []);

  useEffect(() => {
    if (isHovering) {
      setProgress(0);
      return;
    }

    let start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      let nextProgress = (now - start) / SLIDE_MS;

      if (nextProgress >= 1) {
        setActive((step) => (step + 1) % steps.length);
        start = now;
        nextProgress = 0;
      }

      setProgress(nextProgress);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isHovering]);

  const from = centers[active] ?? 0;
  const to = centers[(active + 1) % steps.length] ?? from;
  const wrapping = active === steps.length - 1;
  const dotLeft = isHovering || wrapping ? from : from + (to - from) * progress;

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70">
            OUR DEVELOPMENT PROCESS
          </p>

          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
            From idea to impact,{" "}
            <span className="text-brand">we build it right.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            A proven 4-step process that turns your ideas into scalable,
            high-performing digital products.
          </p>
        </div>

        <div className="relative mx-auto mt-8 max-w-6xl">
          <div ref={navRef} className="relative grid gap-3 md:grid-cols-4">
            <span
              className="pointer-events-none absolute top-[25px] z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-brand shadow-[0_0_0_7px_rgba(23,105,213,.14),0_10px_24px_-10px_rgba(23,105,213,.9)] md:block"
              style={{
                left: dotLeft,
                backgroundColor: current.color,
                boxShadow: `0 0 0 7px ${current.light}, 0 10px 24px -10px ${current.glow}`,
              }}
              aria-hidden="true"
            />
            {steps.map((step, index) => {
              const isActive = index === active;

              return (
                <button
                  key={step.number}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setProgress(0);
                  }}
                  onFocus={() => {
                    setActive(index);
                    setProgress(0);
                  }}
                  onMouseEnter={() => {
                    setActive(index);
                    setProgress(0);
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                  className="group relative z-30 flex min-w-0 items-center gap-3 rounded-2xl bg-white p-2 text-left transition-all duration-300 md:flex-col md:items-center md:gap-3 md:bg-transparent md:p-0 md:text-center"
                  aria-pressed={isActive}
                >
                  {index < steps.length - 1 && (
                    <span
                      className="absolute left-[calc(50%+25px)] right-[calc(-50%+25px)] top-[25px] hidden h-[3px] overflow-hidden rounded-full bg-[var(--line)] md:block"
                      aria-hidden="true"
                    >
                      <span
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          width:
                            index < active
                              ? "100%"
                              : index === active && !isHovering
                                ? `${progress * 100}%`
                                : "0%",
                          backgroundColor: step.color,
                        }}
                      />
                    </span>
                  )}

                  <span
                    className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl border-2 text-lg font-extrabold transition-all duration-300 group-hover:scale-105"
                    style={{
                      borderColor: step.color,
                      backgroundColor: isActive ? step.color : "#ffffff",
                      color: isActive ? "#ffffff" : step.color,
                      boxShadow: isActive
                        ? `0 14px 24px -15px ${step.glow}, 0 0 0 8px ${step.light}`
                        : "none",
                    }}
                  >
                    {step.number}
                  </span>

                  <span className="relative z-10 min-w-0 md:max-w-[190px]">
                    <span
                      className="block text-lg font-extrabold leading-tight transition-colors duration-300"
                      style={{ color: isActive ? step.color : "var(--ink)" }}
                    >
                      {step.navTitle}
                    </span>
                    <span className="mt-0.5 block text-xs leading-tight text-muted md:text-sm">
                      {step.navSubtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-9 overflow-hidden rounded-[24px] border border-line/70 bg-white shadow-[0_22px_48px_-36px_rgba(20,35,60,.45)]">
          <div
            key={current.number}
            className="grid min-h-[360px] gap-6 p-6 animate-[development-slide_.5s_ease-out] md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-xl text-white shadow-[0_14px_24px_-17px_rgba(23,105,213,.75)]"
                  style={{ backgroundColor: current.color }}
                >
                  <Search size={24} strokeWidth={2.4} />
                </div>

                <span
                  className="rounded-full px-5 py-2 text-sm font-extrabold tracking-wide"
                  style={{ backgroundColor: current.light, color: current.color }}
                >
                  {current.pill}
                </span>
              </div>

              <h3 className="mt-8 font-display text-3xl font-extrabold leading-tight text-ink md:text-[36px]">
                {current.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {current.description}
              </p>

              <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {current.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: current.color }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-ink md:text-base">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden rounded-[22px] bg-white lg:min-h-[350px]">
              <img
                src={current.image}
                alt={`${current.title} illustration`}
                className="h-full max-h-[350px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes development-slide {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
