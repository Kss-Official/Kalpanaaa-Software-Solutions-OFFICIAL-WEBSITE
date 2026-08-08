import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Accessibility, Bot, Code2, Database, Workflow } from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { SiAnthropic, SiCrewai, SiDocker, SiExpo, SiFastapi, SiFirebase, SiGithubactions, SiGooglecloud, SiGrafana, SiGraphql, SiJest, SiK6, SiKotlin, SiKubernetes, SiLangchain, SiLanggraph, SiNodedotjs, SiNextdotjs, SiOllama, SiPostgresql, SiPrometheus, SiPython, SiReact, SiRedis, SiSonarqubecloud, SiSwift, SiTailwindcss, SiTerraform, SiTypescript, SiVitest } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { LogoLoop } from "../components/effects/LogoLoop";
import { IndustryCard } from "../components/IndustryCard";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { VisualScene } from "../components/visuals/VisualScene";
import { SERVICES, INDUSTRIES, CASE_STUDIES } from "../data/site";

const techIcons: Record<string, IconType | typeof Accessibility> = {
  "Next.js": SiNextdotjs, React: SiReact, "React Native": SiReact, TypeScript: SiTypescript, "Node.js": SiNodedotjs,
  GraphQL: SiGraphql, PostgreSQL: SiPostgresql, Redis: SiRedis, "Tailwind CSS": SiTailwindcss, Swift: SiSwift,
  Kotlin: SiKotlin, Expo: SiExpo, FastAPI: SiFastapi, Firebase: SiFirebase, AWS: FaAws, GCP: SiGooglecloud,
  Docker: SiDocker, Kubernetes: SiKubernetes, Terraform: SiTerraform, "GitHub Actions": SiGithubactions,
  Prometheus: SiPrometheus, Grafana: SiGrafana, Vitest: SiVitest, k6: SiK6,
  "axe-core": Accessibility, Jest: SiJest, SonarQube: SiSonarqubecloud, LangChain: SiLangchain,
  LlamaIndex: Bot, pgvector: SiPostgresql, Pinecone: Database, OpenAI: TbBrandOpenai, Anthropic: SiAnthropic,
  Ollama: SiOllama, Python: SiPython, LangGraph: SiLanggraph, CrewAI: SiCrewai, LangSmith: Workflow,
};

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((item) => item.slug === id);
  if (!service) return <div className="site-page min-h-screen flex flex-col items-center justify-center p-8 text-center"><h1 className="font-display text-3xl font-bold text-ink">Service not found</h1><p className="mt-2 text-muted">The service you're looking for does not exist.</p><Link to="/services" className="mt-6 text-brand inline-flex gap-2 items-center"><ArrowLeft size={14}/>Back to all services</Link></div>;
  const relatedIndustries = INDUSTRIES.slice(0, 2);
  const relatedWork = CASE_STUDIES.filter((project) => project.tags.some((tag) => service.techStack.includes(tag))).slice(0, 2);
  const techLogos = service.techStack.map((technology) => {
    const Icon = techIcons[technology] ?? Code2;
    const logo = technology === "Playwright"
      ? <img src="https://playwright.dev/img/playwright-logo.svg" alt="" className="h-8 w-8" />
      : <Icon size={32} aria-hidden="true" className="text-brand" />;
    return { title: technology, node: <>{logo}<span className="text-lg font-semibold">{technology}</span></> };
  });
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, serviceType: service.title, provider: { "@type": "Organization", name: "Kalpanaaa Software Solutions Pvt. Ltd." }, areaServed: "IN" };
  return <div className="site-page min-h-screen"><SEO title={`${service.title} — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)`} description={service.description} canonical={`https://kalpanaaasoftwaresolutions.in/services/${service.slug}`} jsonLd={jsonLd} />
    <section className="relative overflow-hidden border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-20"><Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted hover:text-brand mb-7"><ArrowLeft size={14}/>All services</Link><div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(400px,.9fr)] gap-10 items-center"><div><span className="pill px-2.5 py-1">{service.tag}</span><motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-ink max-w-4xl">{service.title}</motion.h1><p className="mt-5 text-lg text-muted max-w-3xl leading-relaxed">{service.description}</p><Link to="/contact" className="button-primary mt-8 px-6 py-3 text-sm font-bold uppercase tracking-widest">Get started <ArrowRight size={14}/></Link></div>
      <div className="relative">
        <VisualScene className="detail-scene" variant={`service-${service.slug}`} title={`${service.title} workload blueprint`}/>
      </div></div></div></section>
    <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Capabilities" title="What's included"/><ul className="grid gap-3 md:grid-cols-2 mt-8">{service.keyFeatures.map((feature, index) => <motion.li key={feature} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="site-card flex items-start gap-3 p-4 rounded-xl"><CheckCircle2 size={18} className="text-brand mt-0.5 shrink-0"/><span className="text-sm text-ink">{feature}</span></motion.li>)}</ul></div></section>
    <section className="py-16 md:py-20 site-surface border-y border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Production stack" title={`Built on ${service.techStack.length} chosen technologies`} description="Every layer is chosen for the workload, not for the resume."/><div className="mt-10"><LogoLoop logos={techLogos} speed={34} gap={64} logoHeight={36} hoverSpeed={0} fadeOut fadeOutColor="var(--surface)" scaleOnHover ariaLabel={`${service.title} technology stack`} /></div></div></section>
    {relatedWork.length > 0 && <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Related work" title="Engagements using this capability"/><div className="mt-8 grid gap-6 md:grid-cols-2">{relatedWork.map((project, index) => <CaseStudyCard key={project.slug} project={project} index={index}/>)}</div></div></section>}
    <section className="py-16 md:py-20 site-surface border-t border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Industry fit" title="Where this capability shines"/><div className="mt-8 grid gap-5 md:grid-cols-2">{relatedIndustries.map((industry, index) => <IndustryCard key={industry.slug} industry={industry} index={index}/>)}</div></div></section>
    <section className="py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink">Ready to scope {service.title}?</h2><p className="mt-3 text-muted">Free 30-minute discovery call. No obligation.</p><Link to="/contact" className="button-primary mt-7 px-7 py-4 text-sm font-bold uppercase tracking-widest">Book a call <ArrowRight size={16}/></Link></div></section>
  </div>;
}
