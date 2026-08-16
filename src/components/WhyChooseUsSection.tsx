import { Cog, Handshake, ShieldCheck, Target } from "lucide-react";

const features = [
  {
    num: "01",
    titleTop: "BUSINESS-FIRST",
    titleBottom: "APPROACH",
    desc:
      "We understand your business, users and goals first. Every solution we build is aligned to your vision and delivers real value.",
    Icon: Target,
    color: "#075ee8",
    glow: "rgba(7, 94, 232, 0.16)",
  },
  {
    num: "02",
    titleTop: "ENGINEERING",
    titleBottom: "EXCELLENCE",
    desc:
      "We build robust, scalable and secure solutions using modern technologies and best engineering practices.",
    Icon: Cog,
    color: "#0c9fc2",
    glow: "rgba(12, 159, 194, 0.16)",
  },
  {
    num: "03",
    titleTop: "QUALITY &",
    titleBottom: "RELIABILITY",
    desc:
      "Quality is at the core of everything we do. We follow a rigorous process to ensure reliable, high-performance and bug-free solutions.",
    Icon: ShieldCheck,
    color: "#8023dc",
    glow: "rgba(128, 35, 220, 0.16)",
  },
  {
    num: "04",
    titleTop: "LONG-TERM",
    titleBottom: "PARTNERSHIP",
    desc:
      "We don't just deliver and walk away. We support, evolve and grow with you as a long-term technology partner.",
    Icon: Handshake,
    color: "#ff4d13",
    glow: "rgba(255, 77, 19, 0.16)",
  },
];

function DotField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute h-32 w-32 opacity-60 [background-image:radial-gradient(circle,rgba(23,105,213,.58)_1.4px,transparent_1.5px)] [background-size:18px_18px] ${className}`}
      aria-hidden="true"
    />
  );
}

function EngineeringGraphic() {
  return (
    <div className="relative mt-8 h-[230px] sm:h-[250px]" aria-hidden="true">
      <div className="absolute inset-x-6 bottom-2 h-24 rounded-[50%] bg-[radial-gradient(circle,rgba(23,105,213,.22),rgba(23,105,213,.07)_42%,transparent_70%)] blur-[2px]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 360 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M84 198C118 226 242 226 276 198" stroke="#d7e7ff" strokeWidth="2" />
        <path d="M112 187C140 207 220 207 248 187" stroke="#b9d4ff" strokeWidth="2" />
        <path d="M180 109V62M180 109L82 150M180 109L278 150" stroke="#b8d2f7" strokeDasharray="4 5" />
        <path d="M180 58C180 41 192 31 207 31" stroke="#1769d5" strokeWidth="2" strokeLinecap="round" />
        <path d="M78 149C78 132 90 122 105 122" stroke="#1769d5" strokeWidth="2" strokeLinecap="round" />
        <path d="M274 149C274 132 286 122 301 122" stroke="#1769d5" strokeWidth="2" strokeLinecap="round" />
        <g filter="url(#cardShadow)">
          <rect x="144" y="30" width="72" height="58" rx="12" fill="white" />
          <rect x="144.8" y="30.8" width="70.4" height="56.4" rx="11.2" stroke="#d8e8ff" strokeWidth="1.6" />
          <path d="M164 62C166 51 179 48 185 56C194 52 204 58 203 68H168C164 68 162 65 164 62Z" stroke="#1769d5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g filter="url(#cardShadow)">
          <rect x="46" y="122" width="72" height="58" rx="12" fill="white" />
          <rect x="46.8" y="122.8" width="70.4" height="56.4" rx="11.2" stroke="#d8e8ff" strokeWidth="1.6" />
          <path d="M75 143L65 151L75 159M89 143L99 151L89 159M86 139L78 164" stroke="#1769d5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g filter="url(#cardShadow)">
          <rect x="242" y="122" width="72" height="58" rx="12" fill="white" />
          <rect x="242.8" y="122.8" width="70.4" height="56.4" rx="11.2" stroke="#d8e8ff" strokeWidth="1.6" />
          <path d="M278 141V135M278 167V161M291 154H297M259 154H265M287 145L291 141M265 167L269 163M269 145L265 141M291 167L287 163" stroke="#1769d5" strokeWidth="4" strokeLinecap="round" />
          <circle cx="278" cy="154" r="9" stroke="#1769d5" strokeWidth="4" />
        </g>
        <g filter="url(#cubeShadow)">
          <path d="M180 111L226 136V191L180 216L134 191V136L180 111Z" fill="#1769d5" />
          <path d="M180 111L226 136L180 162L134 136L180 111Z" fill="#3384ff" />
          <path d="M180 162L226 136V191L180 216V162Z" fill="#075ee8" />
          <path d="M134 136L180 162V216L134 191V136Z" fill="#0d56d4" />
          <path d="M180 105V162" stroke="#8ec1ff" strokeWidth="2" />
        </g>
        <g opacity=".75">
          <rect x="111" y="180" width="19" height="19" rx="3" fill="#d9eaff" />
          <rect x="232" y="177" width="18" height="18" rx="3" fill="#d9eaff" />
          <rect x="282" y="202" width="21" height="21" rx="3" fill="#d9eaff" />
          <rect x="54" y="205" width="20" height="20" rx="3" fill="#d9eaff" />
        </g>
        <defs>
          <filter id="cardShadow" x="30" y="14" width="300" height="185" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#1769d5" floodOpacity=".14" />
          </filter>
          <filter id="cubeShadow" x="104" y="82" width="152" height="164" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#075ee8" floodOpacity=".34" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfdff_0%,#f8fbff_48%,#f4f9ff_100%)]" />
      <div
        className="pointer-events-none absolute -left-16 -top-28 h-80 w-80 rounded-full border border-[#d7e5ff]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 -top-20 h-64 w-64 rounded-full border border-[#d7e5ff]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-4 -top-12 h-48 w-48 rounded-full border border-[#d7e5ff]"
        aria-hidden="true"
      />
      <DotField className="right-8 top-8 hidden lg:block" />
      <DotField className="bottom-[36%] left-8 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <p className="eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-16 after:h-px after:w-16 after:bg-current after:opacity-70">
            WHY CHOOSE US
          </p>

          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.08] text-ink">
            Engineering solutions
            <br />
            built around{" "}
            <span className="text-brand">your business.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-muted">
            We combine technology, expertise and strategic thinking
            <br className="hidden sm:block" />
            to build solutions that create real impact.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)] gap-7 lg:gap-8 items-stretch">
          {/* LEFT INTRO CARD */}
          <div className="relative overflow-hidden rounded-[18px] border border-[#dce8fb] bg-white/82 p-8 shadow-[0_22px_48px_-34px_rgba(23,105,213,.45)] backdrop-blur-sm lg:min-h-[590px]">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,.96),rgba(242,248,255,.72))]" />
            <div className="relative flex min-h-full flex-col">
              <div className="flex items-center justify-center">
                <img
                  src="/Kalpanaaa Logo.svg"
                  alt="Kalpanaaa Software Solutions"
                  className="h-auto w-[140px] max-w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center mt-18px">
                <img
                  src="/Kalpanaaa Company Name.svg"
                  alt="Kalpanaaa Software Solutions"
                  className="h-auto w-[200px] max-w-full object-contain"
                />
              </div>

              {/* Intro Heading */}
              <h3 className="mt-9 font-display text-[30px] leading-[1.2] font-extrabold text-ink">
                Kalpanaaa Software
                <br />
                Solutions is your
                <br />
                <span className="text-brand">
                  Bespoke Engineering
                  <br />
                  Partner.
                </span>
              </h3>

              <div className="mt-5 h-[3px] w-12 rounded-full bg-brand" />

              {/* Intro Description */}
              <p className="mt-6 text-base leading-[1.55] text-muted">
                From ideation to implementation, we partner with you to deliver
                technology solutions that are scalable, reliable and future-ready.
              </p>

              <EngineeringGraphic />
            </div>
          </div>

          {/* RIGHT FEATURE GRID */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.num}
                className="relative min-h-[280px] overflow-hidden rounded-[16px] border border-[#e2ebf8] bg-white/88 p-8 shadow-[0_18px_36px_-30px_rgba(20,35,60,.48)] backdrop-blur-sm"
                style={{
                  boxShadow: `0 16px 32px -30px rgba(20,35,60,.48), inset 0 -7px 0 ${item.color}`,
                }}
              >
                <div
                  className="absolute -right-6 -top-8 h-40 w-40 rounded-full blur-2xl"
                  style={{ backgroundColor: item.glow }}
                />
                <div className="relative flex items-start justify-between gap-5">
                  <span
                    className="text-[62px] sm:text-[66px] leading-none font-extrabold tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.num}
                  </span>

                  <div
                    className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full shadow-[0_12px_24px_-18px_rgba(20,35,60,.58)]"
                    style={{ backgroundColor: item.glow }}
                  >
                    <item.Icon size={44} strokeWidth={3.2} style={{ color: item.color }} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative mt-6">
                  <p className="text-[21px] leading-[1.18] font-extrabold text-ink">
                    {item.titleTop}
                    <br />
                    <span style={{ color: item.color }}>{item.titleBottom}</span>
                  </p>

                  <div
                    className="mt-5 h-[3px] w-10 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />

                  <p className="mt-7 text-[15px] leading-[1.55] text-muted max-w-[330px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mx-auto mt-12 h-px max-w-3xl bg-[linear-gradient(90deg,transparent,#4e9cff,#a42cff,#ff6b18,transparent)]" /> */}
      </div>
    </section>
  );
}
