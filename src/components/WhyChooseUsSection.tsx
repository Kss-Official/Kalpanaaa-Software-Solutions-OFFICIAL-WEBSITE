import {
  Award,
  Headphones,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Target,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const BLUE = "#0B55F4";
const ORANGE = "#FF5A0A";

const benefits: Array<{
  title: string;
  desc: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Client First Approach",
    desc: "We prioritize your goals and put your success at the center of everything we do.",
    Icon: UserRoundCheck,
  },
  {
    title: "Result-Oriented Solutions",
    desc: "We focus on measurable outcomes that deliver real impact and business growth.",
    Icon: Target,
  },
  {
    title: "Quality & Reliability",
    desc: "We follow best practices to ensure high quality, secure and timely delivery every time.",
    Icon: ShieldCheck,
  },
  {
    title: "Innovative Thinking",
    desc: "We embrace new ideas and technologies to build smart and future-ready solutions.",
    Icon: Lightbulb,
  },
  {
    title: "Expert Team",
    desc: "Our skilled professionals bring diverse expertise and are committed to your success.",
    Icon: UsersRound,
  },
  {
    title: "Ongoing Support",
    desc: "We build long-term relationships and provide continuous support whenever you need us.",
    Icon: Headphones,
  },
];

const stats: Array<{
  value: string;
  label: string;
  Icon: LucideIcon;
}> = [
  { value: "50+", label: "Projects Delivered", Icon: Rocket },
  { value: "30+", label: "Happy Clients", Icon: UsersRound },
  { value: "5+", label: "Years Experience", Icon: Award },
  { value: "24/7", label: "Support", Icon: MessageCircle },
];

function BenefitCard({ title, desc, Icon }: (typeof benefits)[number]) {
  return (
    <article className="flex min-h-[184px] flex-col items-center justify-center rounded-[16px] border border-[#DDE8FF] bg-white px-4 py-5 text-center shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#EEF3FF]">
        <Icon size={36} strokeWidth={2.1} style={{ color: BLUE }} />
      </div>

      <h3 className="mt-4 text-[17px] font-extrabold leading-tight text-black">{title}</h3>
      <div className="mt-3 h-[3px] w-9 rounded-full" style={{ backgroundColor: BLUE }} />
      <p className="mt-3 max-w-[245px] text-[14px] font-medium leading-[1.55] text-[#12215D]">
        {desc}
      </p>
    </article>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFF] py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1510px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow justify-center text-sm font-semibold tracking-widest text-brand before:w-16 after:h-px after:w-16 after:bg-current after:opacity-70">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
            Engineering solutions
            <br />
            built around <span className="text-brand">your business.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            We combine technology, expertise and strategic thinking
            <br className="hidden sm:block" />
            to build solutions that create real impact.
          </p>

          {/* <div className="mx-auto mt-4 h-[3px] w-14 rounded-full" style={{ backgroundColor: BLUE }} /> */}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.45fr_1fr]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>

          <article className="relative flex min-h-[380px] overflow-hidden rounded-[16px] border border-[#DDE8FF] bg-[#F1F6FF] shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
            <div
              className="pointer-events-none absolute -right-6 -top-24 h-[360px] w-[230px] rotate-[32deg] rounded-[110px] bg-[#E4ECFF] opacity-70"
              aria-hidden="true"
            />
            {/* <div
              className="pointer-events-none absolute right-14 top-8 grid grid-cols-4 gap-2 opacity-45"
              aria-hidden="true"
            >
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-2 w-2 rounded-full bg-[#8EA8EE]" />
              ))}
            </div> */}
            <div
              className="pointer-events-none absolute right-24 top-32 h-14 w-14 rounded-full bg-[#DDE7FF]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex w-full flex-col px-8 pb-0 pt-8">
              <div className="max-w-[320px]">
                <h3 className="font-display text-[26px] font-extrabold leading-tight text-black md:text-[28px]">
                  Your Vision.
                  <br />
                  <span style={{ color: ORANGE }}>Our Commitment.</span>
                </h3>
                <div className="mt-3 h-[3px] w-12 rounded-full" style={{ backgroundColor: ORANGE }} />
                <p className="mt-5 text-[16px] font-medium leading-[1.55] text-[#12215D]">
                  At Kalpanaaa Software Solutions, we don&apos;t just develop
                  software, we build trusted partnerships that create value and drive
                  long-term business growth.
                </p>
              </div>

              <img
                src="/At the office-pana 1.svg"
                alt="Team working together in an office"
                className="pointer-events-none absolute bottom-0 right-[-10px] z-0 w-[88%] max-w-[610px] object-contain object-bottom"
              />
            </div>
          </article>
        </div>

        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-[16px] border border-[#E2EBFF] bg-[#F0F5FF] shadow-[0_10px_26px_rgba(11,85,244,0.05)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="flex min-h-[104px] items-center justify-center gap-5 px-5 py-5 lg:justify-center"
            >
              <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#E4ECFF]">
                <item.Icon size={39} strokeWidth={2.1} style={{ color: BLUE }} />
              </div>
              <div>
                <p className="text-[38px] font-extrabold leading-none" style={{ color: BLUE }}>
                  {item.value}
                </p>
                <p className="mt-1 text-[16px] font-semibold leading-tight text-black">{item.label}</p>
              </div>
              {index < stats.length - 1 && (
                <span className="ml-auto hidden h-14 w-px bg-[#9DB6FF] lg:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
