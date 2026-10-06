import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Code2,
  ShieldCheck,
  Handshake,
  Search,
  FileText,
  PenTool,
  Star,
  PackageCheck,
} from "lucide-react";
import { SEO } from "../../components/SEO";

// Section 1 Metrics Data
const METRICS = [
  { icon: Briefcase, value: "100+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Globe, value: "10+", label: "Industries Served" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

// Section 2 Principles Data
const PRINCIPLES = [
  {
    number: "01",
    icon: Target,
    title: "Strategy",
    description:
      "We start with clarity and purpose — understanding your goals to build the right strategy.",
    numColor: "text-brand",
    iconColor: "text-brand",
    lineColor: "bg-brand",
    bgGradient: "from-[#eaf2ff] to-[#d4e4ff]",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We turn ideas into experiences that are meaningful, engaging and impactful.",
    numColor: "text-emerald-600",
    iconColor: "text-emerald-500",
    lineColor: "bg-emerald-500",
    bgGradient: "from-[#e6faf5] to-[#bdf0e4]",
  },
  {
    number: "03",
    icon: Code2,
    title: "Technology",
    description:
      "We leverage the right technologies to build scalable, secure and future-ready solutions.",
    numColor: "text-amber-600",
    iconColor: "text-amber-500",
    lineColor: "bg-amber-500",
    bgGradient: "from-[#fff5e6] to-[#ffe0b8]",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "We believe in honest communication, clear processes and complete transparency.",
    numColor: "text-brand",
    iconColor: "text-brand",
    lineColor: "bg-brand",
    bgGradient: "from-[#eaf2ff] to-[#d4e4ff]",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Partnership",
    description:
      "We work with you, not just for you — building lasting relationships that grow together.",
    numColor: "text-cyan-600",
    iconColor: "text-cyan-500",
    lineColor: "bg-cyan-500",
    bgGradient: "from-[#e6f8fa] to-[#bbf0f6]",
  },
];

// Section 3 Process Steps Data
const PROCESS_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    description:
      "We start with a deep dive into your goals, audience, and vision to lay the foundation for impactful creative work.",
    icon: Search,
  },
  {
    step: "02",
    title: "STRATEGIZE",
    description:
      "Our team develops a tailored concept and storyboard, aligning every detail with your brand message and objectives.",
    icon: FileText,
  },
  {
    step: "03",
    title: "CREATE",
    description:
      "The magic happens here. From crafting stunning visuals to refining animations, we bring your vision to life with precision.",
    icon: PenTool,
  },
  {
    step: "04",
    title: "REFINE",
    description:
      "Collaboration is key. We incorporate your feedback to ensure the final product aligns perfectly with your expectations.",
    icon: Star,
  },
  {
    step: "05",
    title: "DELIVER",
    description:
      "On time and optimized for every platform, we hand over a polished project ready to captivate your audience.",
    icon: PackageCheck,
  },
];

export function WhyKalpanaaa() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Why Kalpanaaa — Technology that moves businesses forward"
        description="Learn why businesses choose Kalpanaaa Software Solutions. Discover our 5 core principles, creative process, and proven track record."
        canonical="https://kalpanaaasoftwaresolutions.in/about/why-kalpanaaa"
      />

      {/* =========================================================================
          SECTION 1: HERO & METRICS ("WHY KALPANAAA")
          ========================================================================= */}
      <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24 border-b border-line/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                  WHY KALPANAAA
                </span>
                <span className="h-[2px] w-8 bg-brand"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink font-display leading-[1.1]">
                Technology that moves{" "}
                <span className="text-brand">businesses</span> forward.
              </h1>

              <div className="space-y-2 text-base sm:text-lg text-muted leading-relaxed">
                <p>
                  We build intelligent digital solutions that turn ideas into
                  scalable, meaningful experiences.
                </p>
                <p>Helping businesses automate, innovate and grow with confidence.</p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="button-primary px-7 py-3.5 text-sm font-bold tracking-wide inline-flex items-center gap-2 group shadow-md"
                >
                  Start a Conversation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src="/about/why-banner-team.webp"
                  alt="Kalpanaaa software engineering team working at workstations"
                  className="w-full h-auto max-h-[380px] object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Bottom Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {METRICS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 px-2 sm:px-4 border-r last:border-r-0 border-slate-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#eaf4ff] flex items-center justify-center text-brand shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold text-brand font-mono">
                        {item.value}
                      </p>
                      <p className="text-xs font-semibold text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PRINCIPLES ("WHAT MAKES US DIFFERENT")
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-line/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                WHAT MAKES US DIFFERENT
              </span>
              <span className="h-[2px] w-8 bg-brand"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink font-display">
              Principles that guide how we work<span className="text-brand">.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Five principles that shape our thinking, spark innovation and help us build
              meaningful digital solutions.
            </p>
          </div>

          {/* 5 Gradient Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-4">
            {PRINCIPLES.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className={`bg-gradient-to-b ${p.bgGradient} rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 border border-white/60`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon badge with colorful icon */}
                    <div className={`w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center ${p.iconColor}`}>
                      <Icon size={18} />
                    </div>

                    {/* Number Badge */}
                    <p className={`text-3xl font-extrabold font-mono ${p.numColor}`}>
                      {p.number}
                    </p>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-ink font-display">
                        {p.title}
                      </h3>
                      <div className={`h-[2px] w-8 ${p.lineColor} mt-1 rounded-full`} />
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CREATIVE PROCESS ("KALPANAAA WHY")
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                KALPANAAA WHY
              </span>
              <span className="h-[2px] w-8 bg-brand"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink font-display">
              Our Creative Process <br className="hidden sm:inline" />
              From Concept to Completion
            </h2>

            <p className="text-base text-muted leading-relaxed">
              Here's how we ensure every project delivers exceptional results across
              motion graphics, short-form videos, and graphic creatives.
            </p>
          </div>

          {/* Process Grid (3 Cards on Row 1, 2 Cards on Row 2) */}
          <div className="space-y-6 pt-2">
            {/* Row 1: Cards 01, 02, 03 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROCESS_STEPS.slice(0, 3).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="bg-[#f5f7fb] hover:bg-[#eef3fb] border border-slate-200/60 rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="bg-brand/90 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-full">
                        {item.step}
                      </span>
                      <div className="text-slate-800">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase tracking-wider text-ink font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Row 2: Cards 04, 05 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {PROCESS_STEPS.slice(3, 5).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="bg-[#f5f7fb] hover:bg-[#eef3fb] border border-slate-200/60 rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="bg-brand/90 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-full">
                        {item.step}
                      </span>
                      <div className="text-slate-800">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase tracking-wider text-ink font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Full Width CTA Button */}
          <div className="pt-6">
            <Link
              to="/contact"
              className="w-full button-primary py-4 text-base font-bold tracking-wide rounded-xl shadow-lg shadow-brand/25 inline-flex items-center justify-between px-8 group transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
