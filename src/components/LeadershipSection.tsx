import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Code2, User, type LucideIcon } from "lucide-react";

const ORANGE = "#FF4F0A";
const BLUE = "#0B55F4";

const LEADERSHIP = [
  {
    id: 1,
    name: "Gaurav Kr Tripathi",
    role: "Founder, MD & CTO",
    banner: "FOUNDER",
    image: "/Gaurav-2.webp",
    icon: Code2,
    shortQuote:
      "Hi, I've been leading technology teams and building innovative solutions for years now...",
  },
  {
    id: 2,
    name: "Akshit Ujjain",
    role: "Co-Founder & CEO",
    banner: "CO-FOUNDER",
    image: "/Akshit-2.webp",
    icon: User,
    shortQuote:
      "Hi, we have been building, managing and growing innovative technology solutions together...",
  },
];

const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Ananya Deshmukh",
    role: "Founder & Director",
    location: "Mumbai, India",
    image: "/Priya_Portraits.webp",
    quote:
      "I must say, Kalpanaaa truly understands what its clients want. Their exceptional problem-solving skills, proactive methods and appealing front-end designs make them a trusted technology partner.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Technology Director",
    location: "Bengaluru, India",
    image: "/Anmol_Portraits.webp",
    quote:
      "The team consistently delivers thoughtful engineering solutions with strong attention to quality, scalability and user experience. Their approach made the entire development process smooth and reliable.",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Founder & CEO",
    location: "Hyderabad, India",
    image: "/Priya_Portraits.webp",
    quote:
      "Their ability to understand complex business requirements and turn them into reliable digital products has been exceptional. The team delivered a solution that exceeded our expectations.",
  },
];

function LeaderCard({
  name,
  role,
  banner,
  image,
  icon: Icon,
  shortQuote,
}: {
  name: string;
  role: string;
  banner: string;
  image: string;
  icon: LucideIcon;
  shortQuote: string;
}) {
  return (
    <article className="group flex h-full min-h-0 sm:min-h-[420px] flex-col overflow-hidden rounded-[20px] border border-[#E9EDF5] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.075)]">
      <div className="relative isolate h-[240px] sm:h-[264px] overflow-hidden bg-white">
        <div
          className="absolute left-0 top-0 z-0 flex h-full w-[60px] sm:w-[70px] items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #FF4B08 0%, #FF6500 100%)",
          }}
        >
          <span
            className="select-none font-display font-black leading-none"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: banner.length > 8 ? 24 : 30,
              letterSpacing: "0",
              color: "transparent",
              WebkitTextStroke: "1.4px #ffffff",
            }}
          >
            {banner}
          </span>
        </div>

        <img
          src={image}
          alt={name}
          width={800}
          height={800}
          loading="lazy"
          decoding="async"
          className="absolute left-0 right-0 top-0 z-10 mx-auto h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-[21px] sm:text-[23px] font-extrabold leading-tight text-black md:text-[25px]">
          {name}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-[15px] font-bold leading-none text-[#65647F]">{role}</p>

        <div className="mt-3 sm:mt-4 flex min-h-0 items-center gap-3 rounded-[16px] border border-[#E8EBF2] bg-white px-3 py-2.5 sm:px-3.5 sm:py-3 shadow-[0_8px_18px_rgba(15,23,42,0.035)]">
          <span
            className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full shadow-[0_8px_18px_rgba(255,79,10,0.22)]"
            style={{
              background: "linear-gradient(135deg, #FF4B08 0%, #FF6500 100%)",
            }}
          >
            <Icon size={18} className="text-white" strokeWidth={2.7} />
          </span>
          <p className="text-[13px] sm:text-[14px] font-medium leading-[1.45] text-black">{shortQuote}</p>
        </div>
      </div>
    </article>
  );
}

export function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = CUSTOMER_REVIEWS[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? CUSTOMER_REVIEWS.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === CUSTOMER_REVIEWS.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] py-14 md:py-16">
      <div className="mx-auto max-w-[1410px] px-5 md:px-8 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <p className="eyebrow justify-start text-sm font-semibold tracking-widest text-brand before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70">
              Leadership
            </p>
          </div>

          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
            Meet the people behind <span className="text-brand">our success</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            Meet the experienced leaders who bring together technology, strategy and
            innovation to build meaningful digital solutions.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 items-stretch gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.22fr]">
          {LEADERSHIP.map((leader) => (
            <LeaderCard key={leader.id} {...leader} />
          ))}

          <article className="relative isolate flex min-h-[438px] flex-col overflow-hidden rounded-[20px] border border-[#E9EDF5] bg-white px-7 pb-6 pt-7 shadow-[0_14px_34px_rgba(15,23,42,0.075)] md:col-span-2 md:px-8 lg:col-span-1">
            <div
              className="pointer-events-none absolute -right-[1px] top-[18px] z-0 h-[240px] w-[128px] rounded-l-full opacity-70"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,132,80,0.72) 0%, rgba(255,198,164,0.54) 54%, rgba(255,255,255,0.16) 100%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-[86px] top-[168px] z-0 h-[118px] w-[340px] -rotate-[43deg] rounded-[100%] opacity-85"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,238,229,0.8) 31%, rgba(255,197,166,0.72) 66%, rgba(255,255,255,0.28) 100%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-[120px] top-[264px] z-0 h-[96px] w-[370px] -rotate-[35deg] rounded-[100%] opacity-95"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,246,241,0.88) 35%, rgba(255,217,196,0.78) 67%, rgba(255,255,255,0.62) 100%)",
              }}
              aria-hidden="true"
            />

            <span
              className="relative -mt-1 font-display text-[74px] font-extrabold leading-none"
              style={{ color: ORANGE }}
            >
              &ldquo;
            </span>

            <div
              className="relative mt-1 flex-1 border-l-2 pl-5"
              style={{ borderColor: ORANGE }}
            >
              <p className="max-w-[500px] text-[14px] font-medium leading-[1.95] text-black md:text-[15px]">
                {featured.quote}
              </p>
            </div>

            <div className="relative mt-7 border-t border-[#DDE3EE] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-[#F1F3F5]">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      width={200}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-extrabold leading-tight text-black">
                      {featured.name}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#65647F]">
                      {featured.role}
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ backgroundColor: ORANGE }}
                        aria-hidden="true"
                      />
                      {featured.location}
                    </p>
                  </div>
                </div>

                <span
                  className="inline-flex min-h-[54px] items-center gap-3 rounded-[10px] border bg-white px-4 py-2 text-[13px] font-bold shadow-[0_8px_18px_rgba(255,79,10,0.08)]"
                  style={{ borderColor: ORANGE, color: ORANGE }}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Check size={15} className="text-white" strokeWidth={3} />
                  </span>
                  Verified Client
                </span>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 flex items-center justify-between lg:pl-[43%]">
          <div className="flex items-center gap-8">
            {CUSTOMER_REVIEWS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to customer review ${index + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === index ? 36 : 32,
                  backgroundColor: activeIndex === index ? BLUE : "#CDD4DF",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous customer review"
              className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-black shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all duration-200 hover:shadow-md"
            >
              <ChevronLeft size={27} strokeWidth={3} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next customer review"
              className="flex h-[58px] w-[58px] items-center justify-center rounded-full text-white shadow-[0_14px_26px_rgba(11,85,244,0.32)] transition-all duration-200 hover:shadow-md"
              style={{ backgroundColor: BLUE }}
            >
              <ChevronRight size={27} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
