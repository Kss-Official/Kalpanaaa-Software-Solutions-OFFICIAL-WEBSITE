import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { TechBadge } from "../components/TechBadge";
import { IndustryCard } from "../components/IndustryCard";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { VisualScene } from "../components/visuals/VisualScene";
import { SERVICES, INDUSTRIES, CASE_STUDIES } from "../data/site";
import "../components/effects/galaxy.css";
const GalaxyField = lazy(() => import("../components/effects/GalaxyField").then((module) => ({ default: module.GalaxyField })));

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((item) => item.slug === id);
  if (!service) return <div className="site-page min-h-screen flex flex-col items-center justify-center p-8 text-center"><h1 className="font-display text-3xl font-bold text-ink">Service not found</h1><p className="mt-2 text-muted">The service you're looking for does not exist.</p><Link to="/services" className="mt-6 text-brand inline-flex gap-2 items-center"><ArrowLeft size={14}/>Back to all services</Link></div>;
  const relatedIndustries = INDUSTRIES.slice(0, 2);
  const relatedWork = CASE_STUDIES.filter((project) => project.tags.some((tag) => service.techStack.includes(tag))).slice(0, 2);
  const isAI = service.slug === "rag-systems" || service.slug === "multi-agent-automation";
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, serviceType: service.title, provider: { "@type": "Organization", name: "Kalpanaaa Software Solutions Pvt. Ltd." }, areaServed: "IN" };
  return <div className="site-page min-h-screen"><SEO title={`${service.title} — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.com)`} description={service.description} canonical={`https://kalpanaaasoftwaresolutions.com/services/${service.slug}`} jsonLd={jsonLd} />
    <section className="relative overflow-hidden border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-20"><Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted hover:text-brand mb-7"><ArrowLeft size={14}/>All services</Link><div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(400px,.9fr)] gap-10 items-center"><div><span className="pill px-2.5 py-1">{service.tag}</span><motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-ink max-w-4xl">{service.title}</motion.h1><p className="mt-5 text-lg text-muted max-w-3xl leading-relaxed">{service.description}</p><Link to="/contact" className="button-primary mt-8 px-6 py-3 text-sm font-bold uppercase tracking-widest">Get started <ArrowRight size={14}/></Link></div>
      <div className={`relative ${isAI ? "ai-detail-scene" : ""}`}>
        {isAI && <Suspense fallback={null}><div className="absolute inset-0 ai-galaxy"><GalaxyField mouseInteraction density={1} glowIntensity={0.35} saturation={0.18} hueShift={210} starSpeed={0.35} rotationSpeed={0.06} twinkleIntensity={0.45} transparent /></div></Suspense>}
        <VisualScene className="detail-scene" variant={`service-${service.slug}`} title={`${service.title} workload blueprint`}/>
      </div></div></div></section>
    <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Capabilities" title="What's included"/><ul className="grid gap-3 md:grid-cols-2 mt-8">{service.keyFeatures.map((feature, index) => <motion.li key={feature} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="site-card flex items-start gap-3 p-4 rounded-xl"><CheckCircle2 size={18} className="text-brand mt-0.5 shrink-0"/><span className="text-sm text-ink">{feature}</span></motion.li>)}</ul></div></section>
    <section className="py-16 md:py-20 site-surface border-y border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Production stack" title={`Built on ${service.techStack.length} chosen technologies`} description="Every layer is chosen for the workload, not for the resume."/><div className="mt-8 flex flex-wrap gap-2.5">{service.techStack.map((technology) => <TechBadge key={technology} tech={{ name: technology, category: "Stack", why: "Production-grade", icon: "Code2" }}/>)}</div></div></section>
    {relatedWork.length > 0 && <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Related work" title="Engagements using this capability"/><div className="mt-8 grid gap-6 md:grid-cols-2">{relatedWork.map((project, index) => <CaseStudyCard key={project.slug} project={project} index={index}/>)}</div></div></section>}
    <section className="py-16 md:py-20 site-surface border-t border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Industry fit" title="Where this capability shines"/><div className="mt-8 grid gap-5 md:grid-cols-2">{relatedIndustries.map((industry, index) => <IndustryCard key={industry.slug} industry={industry} index={index}/>)}</div></div></section>
    <section className="py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink">Ready to scope {service.title}?</h2><p className="mt-3 text-muted">Free 30-minute discovery call. No obligation.</p><Link to="/contact" className="button-primary mt-7 px-7 py-4 text-sm font-bold uppercase tracking-widest">Book a call <ArrowRight size={16}/></Link></div></section>
  </div>;
}
