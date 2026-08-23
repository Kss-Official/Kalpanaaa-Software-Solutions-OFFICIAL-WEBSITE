import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  Circle,
  ExternalLink,
  FileText,
  MessageCircle,
  Rocket,
  UsersRound,
} from "lucide-react";
import { getIcon, Sparkles } from "../components/icons/registry";
import { SEO } from "../components/SEO";
import { INDUSTRIES, CASE_STUDIES } from "../data/site";
import type { CaseStudy } from "../data/site";

const industryToWork: Record<string, string[]> = {
  government: ["railtrace"],
  healthcare: ["medichain"],
  finance: ["finledger"],
  education: ["kucafe"],
};

const featureIconColors = ["#F97316", "#2563EB", "#22D3EE", "#FB923C", "#38BDF8", "#8B5CF6"];

const industryStats = [
  { value: "50+", label: "Projects Delivered", Icon: Rocket },
  { value: "30+", label: "Happy Clients", Icon: UsersRound },
  { value: "5+", label: "Years Experience", Icon: Award },
  { value: "24/7", label: "Support", Icon: MessageCircle },
];

export function IndustryDetail() {
  const { id } = useParams();
  const industry = INDUSTRIES.find((item) => item.slug === id);
  if (!industry) {
    return (
      <div className="site-page min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Industry not found</h1>
        <Link to="/industries" className="mt-6 inline-flex items-center gap-2 text-brand">
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>
    );
  }

  const liveProject = CASE_STUDIES.find((project) => industryToWork[industry.slug]?.includes(project.slug));
  const relatedWork = CASE_STUDIES.filter((project) => project.slug !== liveProject?.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${industry.title} Software Engineering — Kalpanaaa Software Solutions`,
    description: industry.description,
    provider: { "@type": "Organization", name: "Kalpanaaa Software Solutions Pvt. Ltd." },
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0F2A5F]">
      <SEO
        title={`${industry.title} Software Engineering — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)`}
        description={industry.description}
        canonical={`https://kalpanaaasoftwaresolutions.in/industries/${industry.slug}`}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF3FF] to-[#F7FAFF]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-8 pb-6 md:pt-10 md:pb-8">
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#64748B] hover:text-[#1D4ED8] mb-2"
          >
            <ArrowLeft size={14} />
            All industries
          </Link>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(420px,.95fr)] gap-10 items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#DBEAFE] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E3A8A]">
                {industry.title} solution
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 font-display text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B3A82]"
              >
                {industry.title}
              </motion.h1>
              <p className="mt-5 text-base md:text-lg text-[#64748B] max-w-xl leading-relaxed">{industry.description}</p>
              <Link
                to={liveProject ? `/work/${liveProject.slug}` : "/work"}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(29,78,216,.7)] hover:bg-[#1E40AF] transition-colors"
              >
                View Live Project
                <ExternalLink size={16} />
              </Link>
            </div>
            {liveProject && (
              <div className="relative mx-auto w-full max-w-[700px] overflow-hidden rounded-2xl border border-[#D7E4F7] bg-white shadow-[0_24px_60px_-34px_rgba(15,42,95,.45)]">
                <img
                  src={liveProject.image}
                  alt={`${liveProject.title} project preview`}
                  className="block aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-[#B7D4FB] bg-white shadow-[0_16px_40px_-28px_rgba(15,42,95,.35)] sm:grid-cols-2 lg:grid-cols-4">
            {industryStats.map((item, index) => (
              <div
                key={item.label}
                className="flex min-h-[96px] items-center justify-center gap-4 px-5 py-4"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#EEF4FF] text-[#1D4ED8]">
                  <item.Icon size={28} strokeWidth={2.1} />
                </span>
                <div>
                  <p className="text-[32px] font-extrabold leading-none text-[#1D4ED8]">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#0F2A5F]">{item.label}</p>
                </div>
                {index < industryStats.length - 1 && (
                  <span className="ml-auto hidden h-12 w-px bg-[#BFDBFE] lg:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="group rounded-[28px] border border-[#B7D4FB] bg-gradient-to-br from-[#EEF5FF] to-[#F8FBFF] px-7 py-7 md:px-12 md:py-8 shadow-[0_24px_50px_-36px_rgba(29,78,216,.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]">
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-[#0B3A82]">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#BFDBFE] bg-white text-[#1D4ED8] transition-colors duration-300 group-hover:border-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white">
                <FileText size={18} />
              </span>
              Project Overview
            </h2>
            <div className="mt-6 space-y-4 text-[#64748B] leading-relaxed max-w-5xl">
              {industry.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0B3A82]">Key Features</h2>
          <div className="mx-auto mt-2 h-px w-14 bg-[#22D3EE]" />
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.keyFeatureCards.map((feature, index) => {
              const Icon = getIcon(feature.icon, Sparkles);
              const color = featureIconColors[index % featureIconColors.length];
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-2xl border border-[#B7D4FB] bg-white px-6 py-8 text-center shadow-[0_16px_40px_-28px_rgba(15,42,95,.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]"
                >
                  <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${color}18`, color }}>
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-[#0B3A82]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[28px] border border-[#B7D4FB] bg-white p-8 md:p-10 shadow-[0_18px_44px_-32px_rgba(15,42,95,.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]">
            <img src="/ri_target-fill.svg" alt="" className="pointer-events-none absolute bottom-5 right-5 h-28 w-28 opacity-100" aria-hidden="true" />
            <h2 className="relative z-[1] flex items-center gap-3 text-2xl font-extrabold text-[#0B3A82]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#DBEAFE] text-[#1D4ED8]">
                <img src="/ri_target-fill.svg" alt="" className="h-5 w-5" aria-hidden="true" />
              </span>
              The Challenge
            </h2>
            <p className="relative z-[1] mt-5 text-[#64748B] leading-relaxed">{industry.challenge.intro}</p>
            <ul className="relative z-[1] mt-6 space-y-3">
              {industry.challenge.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#475569]">
                  <Circle size={10} className="mt-1.5 shrink-0 fill-[#1D4ED8] text-[#1D4ED8]" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-[28px] border border-[#FED7AA] bg-[#FFF4EB] p-8 md:p-10 shadow-[0_18px_44px_-32px_rgba(234,88,12,.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]">
            <h2 className="relative z-[1] flex items-center gap-3 text-2xl font-extrabold text-[#0B3A82]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FFEDD5] text-[#EA580C]">
                <img src="/Symbol.svg" alt="" className="h-5 w-5" aria-hidden="true" />
              </span>
              Our Solution
            </h2>
            <p className="relative z-[1] mt-5 text-[#64748B] leading-relaxed">{industry.solution.intro}</p>
            <ul className="relative z-[1] mt-6 space-y-3">
              {industry.solution.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#EA580C] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <img src="/Symbol.svg" alt="" className="pointer-events-none absolute bottom-5 right-5 h-28 w-28 opacity-100" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0B3A82]">Related Projects</h2>
          <div className="mx-auto mt-2 h-px w-16 bg-[#1D4ED8]" />
          <div className="mt-7 grid gap-7 md:grid-cols-2">
            {relatedWork.map((project, index) => (
              <RelatedProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1D4ED8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(29,78,216,.7)] hover:bg-[#1E40AF] transition-colors"
            >
              View More
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[28px] border border-[#60A5FA] min-h-[210px] md:min-h-[250px]">
            <div className="absolute inset-0 bg-[linear-gradient(105deg,#1D4ED8_0%,#2563EB_42%,#38BDF8_78%,#7DD3FC_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%] opacity-70">
              <svg viewBox="0 0 640 280" preserveAspectRatio="none" className="h-full w-full">
                <path d="M40 280 C120 160 180 90 280 70 C400 44 460 120 640 20 L640 280 Z" fill="#7DD3FC" opacity="0.45" />
                <path d="M0 280 C90 190 170 130 270 118 C390 102 470 170 640 80 L640 280 Z" fill="#38BDF8" opacity="0.35" />
                <path d="M80 280 C160 210 250 170 360 176 C480 184 540 210 640 140 L640 280 Z" fill="#BAE6FD" opacity="0.28" />
              </svg>
            </div>
            <img
              src="/industry-cta-rocket.png"
              alt=""
              className="pointer-events-none absolute inset-y-2 right-0 hidden w-[58%] max-w-[560px] object-contain object-right pr-3 sm:block md:pr-8"
            />
            <div className="relative z-[1] max-w-xl px-8 py-8 md:px-14 md:py-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Have a project in mind?</h2>
              <p className="mt-2 text-white/90">Let's build something impactful together.</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-bold text-white hover:bg-[#EA580C] transition-colors"
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

function RelatedProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  const Icon = getIcon(project.icon);
  const previewBg = index === 1 ? "bg-[#FFF4EB]" : "bg-[#EEF4FF]";
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#B7D4FB] bg-white shadow-[0_18px_44px_-30px_rgba(15,42,95,.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]">
      <div className={`relative ${previewBg}`}>
        <span className="absolute left-5 top-5 z-[1] rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8]">
          {project.industry}
        </span>
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="block aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
          <Icon size={14} className="text-[#1D4ED8]" />
          {project.client}
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-[#0B3A82]">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold text-[#1D4ED8]">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/work/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 border-t border-[#E2E8F0] pt-4 text-sm font-semibold text-[#1D4ED8] hover:underline"
        >
          View {project.client} Case Study
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

