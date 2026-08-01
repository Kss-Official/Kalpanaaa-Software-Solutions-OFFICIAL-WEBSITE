import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Sparkles, Bot, Brain, CheckCircle2 } from "lucide-react";
import * as Lucide from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { IndustryCard } from "../components/IndustryCard";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { TechBadge } from "../components/TechBadge";
import { VisualScene } from "../components/visuals/VisualScene";
import { LogoLoop } from "../components/effects/LogoLoop";
import { MetricCounter } from "../components/effects/Counter";
import { SERVICES, INDUSTRIES, CASE_STUDIES, STATISTICS, TECHNOLOGIES, NAP } from "../data/site";

export function Home() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const industry = INDUSTRIES[activeIndustry];
  const technologyLogos = useMemo(() => TECHNOLOGIES.map((technology) => {
    const Icon = (Lucide as any)[technology.icon] ?? Lucide.Code2;
    return { title: technology.name, node: <><Icon size={22} aria-hidden="true" /><span className="text-sm font-semibold">{technology.name}</span></> };
  }), []);
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What is Kalpanaaaa Software Solutions?", acceptedAnswer: { "@type": "Answer", text: "Kalpanaaaa Software Solutions Pvt. Ltd. is a Jaipur-based bespoke engineering partner delivering production-grade full-stack web, mobile, cloud, DevOps, QA, RAG and multi-agent AI systems for government, healthcare, finance, and education." } },
      { "@type": "Question", name: "How much does a custom software project cost?", acceptedAnswer: { "@type": "Answer", text: "Engagements start at INR 10,000 per month for our Dedicated Engineering Pod. Fixed-price milestone contracts are available for well-scoped v1 builds. Every project is custom-quoted against requirements and SLA." } },
      { "@type": "Question", name: "Do you build RAG and AI agent systems?", acceptedAnswer: { "@type": "Answer", text: "Yes. We engineer production RAG pipelines and multi-agent automations with guardrails, evals, and observability built in from day one." } },
    ],
  };
  return <div className="site-page min-h-screen">
    <SEO title="Kalpanaaa Software Solutions — Bespoke Engineering Partner | kalpanaaasoftwaresolutions.com" description="Official website of Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.com). Production-grade software engineering for government, healthcare, finance, education. RAG, multi-agent automation, full-stack web, mobile, DevOps, QA." canonical="https://kalpanaaasoftwaresolutions.com/" jsonLd={faqJsonLd} />

    <section className="relative overflow-hidden border-b border-line/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(81,155,255,.18),transparent_29%),radial-gradient(circle_at_13%_72%,rgba(23,105,213,.08),transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="pill px-3.5 py-1.5"><Terminal size={13} /><span>Bespoke engineering partner</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="mt-7 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.03] text-ink max-w-4xl pr-4 sm:pr-0">Architecting digital <span className="gradient-text">transformation.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-6 text-lg md:text-xl text-muted max-w-3xl leading-relaxed">Bespoke engineering for IT automation, RAG systems, multi-agent workflows, and production software across government, healthcare, finance, and education.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="button-primary px-7 py-4 text-sm font-bold uppercase tracking-widest">Start a project <ArrowRight size={16} /></Link>
            <Link to="/work" className="button-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-widest">View case studies</Link>
          </motion.div>
        </div>
        <VisualScene className="hero-scene" variant="service-constellation" labels={SERVICES.map((service) => service.tag)} title="Six Kalpanaaaa service disciplines connected to one engineering hub" />
      </div>
    </section>

    <section className="border-b border-line/80 site-surface"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-5">{STATISTICS.map((statistic) => <div key={statistic.label} className="min-w-0"><MetricCounter value={statistic.value} /><p className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted">{statistic.label}</p></div>)}</div></section>

    <section className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><div className="flex items-end justify-between flex-wrap gap-6 mb-12"><SectionHeading eyebrow="What we build" title="Bespoke engineering capabilities" description="Full-lifecycle software engineering across web, mobile, cloud, QA, RAG, and multi-agent systems." /><Link to="/services" className="text-brand text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 hover:underline">All services <ArrowRight size={14}/></Link></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></div></section>

    <section className="py-20 md:py-28 site-surface border-y border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><div className="flex items-end justify-between flex-wrap gap-6 mb-12"><SectionHeading eyebrow="Industries we serve" title="Regulated. Demanding. Built for." description="Engineering for the constraints that matter: compliance, auditability, latency, scale, and accessibility." /><Link to="/industries" className="text-brand text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 hover:underline">All industries <ArrowRight size={14}/></Link></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{INDUSTRIES.map((item, index) => <IndustryCard key={item.slug} industry={item} index={index} />)}</div></div></section>

    <section className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center"><div><p className="eyebrow">Industry focus</p><h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-ink">A system for the context it must serve.</h2><div className="mt-8 flex flex-wrap gap-2">{INDUSTRIES.map((item,index)=><button type="button" key={item.slug} onClick={()=>setActiveIndustry(index)} className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${index===activeIndustry ? "bg-brand text-white border-brand" : "bg-white text-muted border-line hover:border-brand hover:text-brand"}`}>{item.title}</button>)}</div><h3 className="mt-8 text-2xl font-bold text-ink">{industry.title}</h3><p className="mt-2 text-brand font-semibold">{industry.short}</p><p className="mt-4 text-muted leading-relaxed">{industry.description}</p><ul className="mt-5 grid sm:grid-cols-2 gap-2">{industry.features.slice(0,4).map((feature)=><li key={feature} className="flex gap-2 text-sm text-ink"><CheckCircle2 size={16} className="mt-0.5 text-brand shrink-0"/>{feature}</li>)}</ul><Link to={`/industries/${industry.slug}`} className="mt-7 text-brand text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 hover:underline">Explore {industry.title}<ArrowRight size={14}/></Link></div><VisualScene variant={`industry-${industry.slug}`} title={`${industry.title} system flow`} /></div></div></section>

    <section className="py-20 md:py-28 site-surface border-y border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><div className="flex items-end justify-between flex-wrap gap-6 mb-12"><SectionHeading eyebrow="Selected work" title="Engineering, not templates." description="Three engagements. Three measurable outcomes."/><Link to="/work" className="text-brand text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 hover:underline">All case studies <ArrowRight size={14}/></Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{CASE_STUDIES.map((project,index)=><CaseStudyCard key={project.slug} project={project} index={index}/>)}</div></div></section>

    <section className="py-20 md:py-28 overflow-hidden"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Production-grade stack" title="Tools we build with" description="Technology choices selected for stability, scale, and long-term maintainability." align="center"/><div className="mt-8"><LogoLoop logos={technologyLogos} speed={38} gap={44} logoHeight={22} hoverSpeed={0} fadeOut fadeOutColor="var(--canvas)" scaleOnHover /></div><div className="mt-10 flex flex-wrap justify-center gap-2.5">{TECHNOLOGIES.map((technology)=><TechBadge key={technology.name} tech={technology}/>)}</div></div></section>

    <section className="py-20 md:py-28 site-surface border-y border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center"><div><SectionHeading eyebrow="AI engineering" title="RAG & multi-agent systems, in production." description="Guardrails, evals, observability, fallback, and measurable engineering around every AI feature."/><div className="mt-7 flex flex-wrap gap-3"><Link to="/services/rag-systems" className="button-primary px-5 py-3 text-xs font-bold uppercase tracking-widest"><Brain size={15}/>RAG systems</Link><Link to="/services/multi-agent-automation" className="button-secondary px-5 py-3 text-xs font-bold uppercase tracking-widest"><Bot size={15}/>Multi-agent</Link></div></div><div className="grid grid-cols-2 gap-4">{[{icon:Brain,label:"Retrieval",desc:"Hybrid search and re-ranking"},{icon:Bot,label:"Orchestration",desc:"Planning, tools, and memory"},{icon:Shield,label:"Guardrails",desc:"Evals and safe fallback"},{icon:Sparkles,label:"Optimisation",desc:"Fine-tuning pipelines"}].map((item)=><div key={item.label} className="site-card rounded-2xl p-5"><item.icon size={20} className="text-brand mb-3"/><p className="font-bold text-ink">{item.label}</p><p className="text-xs text-muted mt-1">{item.desc}</p></div>)}</div></div></section>

    <section className="py-20 md:py-28"><div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12"><div className="rounded-3xl border border-line bg-[radial-gradient(circle_at_88%_10%,rgba(77,145,243,.24),transparent_30%),linear-gradient(135deg,#eef6ff,#fff)] p-10 md:p-16 text-center"><p className="eyebrow justify-center">Start a conversation</p><h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-ink">Let’s build something great.</h2><p className="mt-4 text-muted max-w-2xl mx-auto">Share your requirements and we will prepare a bespoke technical proposal tailored to your enterprise goals.</p><p className="mt-6 text-sm text-muted">Inquiries: <a href={`mailto:${NAP.email}`} className="text-brand font-semibold hover:underline">{NAP.email}</a></p><Link to="/contact" className="button-primary mt-8 px-7 py-4 text-sm font-bold uppercase tracking-widest">Submit proposal request <ArrowRight size={16}/></Link></div></div></section>
  </div>;
}
