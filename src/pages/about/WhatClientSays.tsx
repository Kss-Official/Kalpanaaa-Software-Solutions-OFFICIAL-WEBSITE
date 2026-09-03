import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Users, Star, ShieldCheck } from "lucide-react";
import { SEO } from "../../components/SEO";
import Testimonials from "../../components/Testimonials";

export function WhatClientSays() {
  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="What Our Clients Say — Real Stories, Happy Clients"
        description="Hear what clients say about partnering with Kalpanaaa Software Solutions. Over 250+ projects delivered with 98% client satisfaction."
        canonical="https://kalpanaaasoftwaresolutions.in/about/what-client-says"
      />

      {/* =========================================================================
          SECTION 1: HERO ("WHAT OUR CLIENTS SAY")
          ========================================================================= */}
      <section className="relative bg-[#f4f8fd] pt-16 pb-20 md:pt-24 md:pb-28 border-b border-line/60 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="h-[2px] w-8 bg-brand"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                WHAT OUR CLIENTS SAY
              </span>
              <span className="h-[2px] w-8 bg-brand"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15]">
              <span className="text-[#1c55e8]">Real Stories,</span> <br />
              <span className="text-cyan-400">Happy Clients</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed font-sans">
              Hear what our clients have to say about us.
            </p>
          </motion.div>

          {/* Metrics Card Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100/80"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {/* Metric 1 */}
              <div className="flex items-center justify-center sm:justify-start gap-4 px-3 pt-2 sm:pt-0">
                <div className="w-12 h-12 rounded-full bg-[#eaf4ff] flex items-center justify-center text-cyan-500 shrink-0">
                  <Users size={20} />
                </div>
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-ink font-mono">
                    50+
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Happy Clients
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center justify-center sm:justify-start gap-4 px-3 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-full bg-[#eaf4ff] flex items-center justify-center text-cyan-500 shrink-0">
                  <Star size={20} />
                </div>
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-ink font-mono">
                    250+
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Projects Delivered
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center justify-center sm:justify-start gap-4 px-3 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-full bg-[#eaf4ff] flex items-center justify-center text-cyan-500 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-ink font-mono">
                    98%
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Indicator with Live Animated Motion */}
          <div className="pt-6 flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand font-mono">
              SCROLL
            </span>
            <div className="relative flex items-center justify-center">
              {/* Soft Ambient Ripple Pulse Ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-brand/20"
                animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              />
              {/* Live Bouncing Button */}
              <motion.button
                type="button"
                onClick={scrollToTestimonials}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                aria-label="Scroll to Testimonials section"
                className="w-10 h-10 rounded-full border border-brand/40 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors shadow-sm group relative z-10 bg-white/80 backdrop-blur-xs"
              >
                <motion.div
                  animate={{ y: [0, 2.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              </motion.button>
            </div>
            {/* Live Pulsing Line */}
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.85, 1.15, 0.85] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-8 w-[1.5px] bg-brand/40 rounded-full origin-top"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TESTIMONIALS SECTION (Imported Component)
          ========================================================================= */}
      <div id="testimonials-section" className="scroll-mt-12">
        <Testimonials />
      </div>

      {/* =========================================================================
          SECTION 3: ROCKET PROJECT CTA BANNER
          ========================================================================= */}
      <section className="bg-white py-16 md:py-24 border-t border-line/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="relative min-h-[230px] overflow-hidden rounded-[28px] border border-[#60A5FA]">
            <div className="absolute inset-0 bg-[linear-gradient(105deg,#1D4ED8_0%,#2563EB_42%,#38BDF8_78%,#7DD3FC_100%)]" />
            <img
              src="/industry-cta-rocket.png"
              alt="Start a project rocket"
              width={459}
              height={199}
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute inset-y-2 right-0 hidden w-[58%] max-w-[560px] object-contain object-right pr-3 sm:block md:pr-8"
            />
            <div className="relative z-[1] max-w-xl px-8 py-9 md:px-14 md:py-12">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-lg text-white/90">
                Let's build something impactful together.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#EA580C] shadow-lg shadow-orange-500/20"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
