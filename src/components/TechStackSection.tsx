// width/height are the intrinsic WebP sizes. The tiles are hard-sized by CSS, so these only
// serve to give the browser the aspect ratio before the bytes arrive.
const stacks = [
  { name: "Redis", image: "/tech-stack/stack-01.webp", width: 240, height: 214 },
  { name: "Typescript", image: "/tech-stack/stack-02.webp", width: 240, height: 216 },
  { name: "React.js", image: "/tech-stack/stack-03.webp", width: 240, height: 216 },
  { name: "Next.js", image: "/tech-stack/stack-04.webp", width: 240, height: 214 },
  { name: "Node.js", image: "/tech-stack/stack-05.webp", width: 240, height: 214 },
  { name: "GraphQL", image: "/tech-stack/stack-06.webp", width: 240, height: 216 },
  { name: "Tailwind css", image: "/tech-stack/stack-07.webp", width: 240, height: 216 },
  { name: "PostgreSQL", image: "/tech-stack/stack-08.webp", width: 240, height: 214 },
];

function StackMarqueeRow({
  reverse = false,
  speedClass,
}: {
  reverse?: boolean;
  speedClass: string;
}) {
  const repeated = [...stacks, ...stacks, ...stacks];

  return (
    <div
      className="group relative overflow-hidden py-3"
      aria-label={reverse ? "Technology stack row moving left to right" : "Technology stack row moving right to left"}
    >
      <div
        className={`flex w-max items-center gap-5 will-change-transform group-hover:[animation-play-state:paused] ${speedClass}`}
      >
        {repeated.map((stack, index) => (
          <div
            key={`${stack.name}-${index}-${reverse ? "reverse" : "forward"}`}
            className="flex h-[100px] w-[120px] sm:h-[132px] sm:w-[170px] shrink-0 flex-col items-center justify-center gap-2 sm:gap-4 transition-all duration-300 hover:-translate-y-1 md:h-[150px] md:w-[210px]"
          >
            <img
              src={stack.image}
              alt={stack.name}
              width={stack.width}
              height={stack.height}
              className="h-[52px] w-[70px] sm:h-[72px] sm:w-[96px] object-contain transition-transform duration-300 hover:scale-110 md:h-[86px] md:w-[116px]"
              loading="lazy"
              decoding="async"
            />
            <span className="text-center text-xs sm:text-base font-semibold leading-none text-ink/80 md:text-lg">
              {stack.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden site-surface py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,105,213,.10),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(12,159,194,.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70">
            Production-grade stack
          </p>

          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
            Tools we build with
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            Technology choices selected for stability, scale, and long-term
            maintainability.
          </p>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[rgba(243,248,255,.98)] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[rgba(243,248,255,.98)] to-transparent md:w-40" />

        <StackMarqueeRow speedClass="animate-[stack-marquee-left_34s_linear_infinite]" />
        <StackMarqueeRow reverse speedClass="animate-[stack-marquee-right_38s_linear_infinite]" />
      </div>

      <style>{`
        @keyframes stack-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.333%, 0, 0); }
        }

        @keyframes stack-marquee-right {
          from { transform: translate3d(-33.333%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}
