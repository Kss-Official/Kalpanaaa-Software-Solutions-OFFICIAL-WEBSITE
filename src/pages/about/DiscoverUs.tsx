import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flag, Box, Target } from "lucide-react";
import { SEO } from "../../components/SEO";

const JOURNEY_MILESTONES = [
  {
    year: "2026",
    title: "The Beginning",
    description:
      "Our journey began in 2026 with a simple idea and a clear vision. We took our first step toward turning that vision into something meaningful.",
    image: "/about/journey-beginning.svg",
  },
  {
    year: "2026",
    title: "Building the Foundation",
    description:
      "With a strong vision in place, we started building the foundation for our company, bringing ideas, people, and possibilities together.",
    image: "/about/journey-foundation.svg",
  },
  {
    year: "2026",
    title: "First Milestone",
    description:
      "Our first milestone was a reminder that small steps can create meaningful progress. It gave us the confidence to dream bigger and move forward.",
    image: "/about/journey-milestone.svg",
  },
  {
    year: "2026",
    title: "Growing Forward",
    description:
      "We're only getting started. With every new challenge, achievement, and experience, we continue to grow and shape what comes next.",
    image: "/about/journey-growing.svg",
  },
];

export function DiscoverUs() {
  const scrollToJourney = () => {
    const el = document.getElementById("our-journey-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Discover Kalpanaaa — Our Story, Vision & Journey"
        description="Discover Kalpanaaa Software Solutions. We build intelligent digital solutions that empower businesses, inspire users, and create lasting impact."
        canonical="https://kalpanaaasoftwaresolutions.in/about/discover-us"
      />

      {/* =========================================================================
          SECTION 1: HERO / BANNER SECTION ("OUR JOURNEY")
          ========================================================================= */}
      <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24 border-b border-line/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Eyebrow badge with blue accent lines */}
              <div className="inline-flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                  OUR JOURNEY
                </span>
                <span className="h-[2px] w-8 bg-brand"></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink font-display leading-[1.1]">
                Discover <span className="text-brand">Kalpanaaa</span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                We build intelligent digital solutions that empower businesses,
                inspire users, and create lasting impact.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToJourney}
                  className="button-primary px-7 py-3.5 text-sm font-bold tracking-wide inline-flex items-center gap-2 group shadow-md"
                >
                  Explore Our Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right Banner Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 flex justify-center"
            >
              <img
                src="/about/discover-hero-laptop.svg"
                alt="Discover Kalpanaaa - Solutions that drive growth"
                className="w-full max-w-[620px] h-auto object-contain drop-shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "WHO WE ARE" SECTION
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#f4f8fd] border-b border-line/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16">
          {/* Top Row: Heading + Paragraph (Left) & Team Image (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                  WHO WE ARE
                </span>
                <span className="h-[2px] w-8 bg-brand"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-ink font-display leading-[1.2]">
                We turn ideas into digital experiences that{" "}
                <span className="text-brand">move businesses forward.</span>
              </h2>

              <p className="text-base text-muted leading-relaxed">
                Kalpanaaa is a digital solutions company passionate about building
                intelligent, scalable and user-centric products. We combine
                technology, creativity and strategy to deliver impact that lasts.
              </p>
            </motion.div>

            {/* Right Team Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
                <img
                  src="/about/who-we-are-team.svg"
                  alt="Kalpanaaa Team - We turn ideas into digital experiences"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Card 1: Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/80 hover:border-brand/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#eaf4ff] flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flag size={22} />
              </div>
              <h3 className="text-xl font-bold text-ink font-display mb-3 group-hover:text-brand transition-colors">
                Our Story
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We started with a vision to solve real problems and create value
                through technology. Every milestone reflects our growth, learning
                and dedication.
              </p>
            </motion.div>

            {/* Card 2: What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="bg-white border border-slate-200/80 hover:border-brand/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#eaf4ff] flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                <Box size={22} />
              </div>
              <h3 className="text-xl font-bold text-ink font-display mb-3 group-hover:text-brand transition-colors">
                What We Do
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We design, develop and deliver digital products and platforms that
                help businesses innovate, automate and scale.
              </p>
            </motion.div>

            {/* Card 3: Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white border border-slate-200/80 hover:border-brand/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#eaf4ff] flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-bold text-ink font-display mb-3 group-hover:text-brand transition-colors">
                Our Approach
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We combine human-centered design, agile thinking and cutting-edge
                technology to build solutions that are smart, scalable and
                future-ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "OUR JOURNEY" (TIMELINE SECTION)
          ========================================================================= */}
      <section
        id="our-journey-section"
        className="py-16 md:py-24 bg-white border-b border-line/60 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sticky Left Column Header */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="inline-flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-brand"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                    OUR JOURNEY
                  </span>
                  <span className="h-[2px] w-8 bg-brand"></span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink font-display leading-[1.15]">
                  Where It All Began
                </h2>

                <p className="text-base text-muted leading-relaxed">
                  Our journey began in 2026 with a simple idea and a clear vision.
                  Since then, we've been turning that vision into meaningful
                  experiences, taking every step with purpose and looking forward
                  to what comes next.
                </p>
              </div>
            </div>

            {/* Right Column Stacked Milestone Cards */}
            <div className="lg:col-span-7 space-y-6">
              {JOURNEY_MILESTONES.map((item, idx) => (
                <motion.div
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-line rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Content Area (Left on card) */}
                    <div className="sm:col-span-7 space-y-2.5">
                      <span className="text-xs font-bold text-brand font-mono uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink font-display group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Image Area (Right on card) */}
                    <div className="sm:col-span-5">
                      <div className="relative h-44 sm:h-36 rounded-2xl overflow-hidden border border-line bg-surface group-hover:border-brand/40 transition-colors">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "OUR VISION" SECTION
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column Text & Action */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                  OUR VISION
                </span>
                <span className="h-[2px] w-8 bg-brand"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink font-display leading-[1.15]">
                Building technology for{" "}
                <span className="text-brand">what comes next.</span>
              </h2>

              <p className="text-base text-muted leading-relaxed max-w-lg">
                We create intelligent digital solutions that help businesses
                adapt, grow, and move forward with confidence.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="button-secondary px-7 py-3.5 text-sm font-bold tracking-wide border-brand text-brand hover:bg-brand hover:text-white transition-all inline-flex items-center gap-2 group shadow-sm"
                >
                  Start a Conversation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column Vision Skyline Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 flex justify-center"
            >
              <img
                src="/about/our-vision-skyline.svg"
                alt="Building technology for what comes next"
                className="w-full max-w-[620px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
