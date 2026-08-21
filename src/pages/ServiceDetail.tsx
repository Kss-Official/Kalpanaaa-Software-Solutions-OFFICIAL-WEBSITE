import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Accessibility, Bot, Code2, Database, Workflow } from "lucide-react";
import * as Lucide from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { SiAnthropic, SiCrewai, SiDocker, SiExpo, SiFastapi, SiFirebase, SiGithubactions, SiGooglecloud, SiGrafana, SiGraphql, SiJest, SiK6, SiKotlin, SiKubernetes, SiLangchain, SiLanggraph, SiNodedotjs, SiNextdotjs, SiOllama, SiPostgresql, SiPrometheus, SiPython, SiReact, SiRedis, SiSonarqubecloud, SiSwift, SiTailwindcss, SiTerraform, SiTypescript, SiVitest } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { SEO } from "../components/SEO";
import { SERVICES, INDUSTRIES, CASE_STUDIES, SERVICE_MENU } from "../data/site";
import type { CaseStudy, Industry } from "../data/site";

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

const heroArtByCategory: Record<string, string> = {
  "Full Stack Development & Design": "/AllFullStackServicePages.svg",
  "Cloud DevOps & Infrastructure": "/AllCloud&DevopsPages.svg",
  "Generative AI": "/AllGenerativeAIPages.svg",
  "Cyber Security": "/AllCyberSecurityPages.svg",
  Others: "/AllOtherPages.svg",
};

const featureIcons = ["Code2", "ScanSearch", "BarChart3", "Zap", "Archive", "ShieldCheck", "Workflow", "Database"];

const stackLogoByTech: Record<string, string> = {
  Redis: "/tech-stack/stack-01.svg",
  TypeScript: "/tech-stack/stack-02.svg",
  React: "/tech-stack/stack-03.svg",
  "React Native": "/tech-stack/stack-03.svg",
  "Next.js": "/tech-stack/stack-04.svg",
  "Node.js": "/tech-stack/stack-05.svg",
  GraphQL: "/tech-stack/stack-06.svg",
  "Tailwind CSS": "/tech-stack/stack-07.svg",
  PostgreSQL: "/tech-stack/stack-08.svg",
};

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((item) => item.slug === id);

  if (!service) {
    return (
      <div className="site-page min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Service not found</h1>
        <p className="mt-2 text-muted">The service you're looking for does not exist.</p>
        <Link to="/services" className="mt-6 text-brand inline-flex gap-2 items-center">
          <ArrowLeft size={14} />
          Back to all services
        </Link>
      </div>
    );
  }

  const menuCategory = SERVICE_MENU.find((category) => category.items.some((item) => item.slug === service.slug));
  const heroArt = heroArtByCategory[menuCategory?.title ?? "Others"] ?? heroArtByCategory.Others;
  const relatedIndustries = INDUSTRIES.slice(0, 2);
  const relatedWork = CASE_STUDIES;
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, serviceType: service.title, provider: { "@type": "Organization", name: "Kalpanaaa Software Solutions Pvt. Ltd." }, areaServed: "IN" };

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#14233C]">
      <SEO title={`${service.title} — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)`} description={service.description} canonical={`https://kalpanaaasoftwaresolutions.in/services/${service.slug}`} jsonLd={jsonLd} />

      <section className="bg-[#F8FBFF]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16 lg:px-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B] transition-colors hover:text-[#2563EB]">
            <ArrowLeft size={15} />
            All services
          </Link>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,.98fr)]">
            <div>
              <span className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EAF3FF] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">
                {service.tag}
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 max-w-2xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#111827] md:text-6xl lg:text-[64px]"
              >
                {service.title}
              </motion.h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#52637D] md:text-xl">
                {service.description}
              </p>
              <Link to="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_18px_30px_-16px_rgba(37,99,235,.75)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
                Get started
                <ArrowRight size={17} />
              </Link>
            </div>

            <img src={heroArt} alt="" className="mx-auto w-full max-w-[650px] object-contain" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center before:w-12 after:h-px after:w-12 after:bg-current after:opacity-70">Capabilities</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[#14233C] md:text-5xl">What's included</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#52637D]">{service.description}</p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {service.keyFeatures.map((feature, index) => {
              const Icon = (Lucide as any)[featureIcons[index % featureIcons.length]] ?? Code2;
              return (
                <motion.article
                  key={feature}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="relative min-h-[150px] overflow-hidden rounded-lg border border-[#D7E4F7] bg-white px-6 py-6 shadow-[16px_20px_34px_-34px_rgba(20,35,60,.34)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9EC5FE] hover:shadow-[0_20px_42px_-32px_rgba(37,99,235,.42)]"
                >
                  <div className="flex items-center gap-6">
                    <span className="grid h-20 w-20 shrink-0 place-items-center bg-[#EEFFFC] text-[#06B6D4]" style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                      <Icon size={32} strokeWidth={1.9} />
                    </span>
                    <span className="relative h-24 w-px shrink-0 bg-[#06B6D4]">
                      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-extrabold leading-snug text-[#14233C]">{feature}</h3>
                      <p className="mt-2 text-base font-extrabold leading-snug text-[#2563EB]">{feature}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[#52637D]">{service.description}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F8FF] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <p className="eyebrow before:w-12 after:h-px after:w-24 after:bg-current after:opacity-70">Production stack</p>
          <h2 className="mt-8 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-[#111827] md:text-6xl lg:text-[72px]">
            Built on {service.techStack.length} chosen technologies
          </h2>
          <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-[#64748B]">Every layer is chosen for the workload, not for the resume.</p>
          <div className="mt-20 overflow-hidden">
            <div className="flex w-max items-center gap-14 will-change-transform animate-[service-stack-marquee_34s_linear_infinite] hover:[animation-play-state:paused] md:gap-20">
              {[...service.techStack, ...service.techStack, ...service.techStack].map((technology, index) => (
                <TechStackLogo key={`${technology}-${index}`} technology={technology} />
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes service-stack-marquee {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-33.333%, 0, 0); }
          }
        `}</style>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#2563EB]">Our impact across industries</span>
            <h2 className="mt-8 font-display text-4xl font-extrabold leading-tight text-[#111827] md:text-6xl">
              Digital Solutions. <span className="text-[#2563EB]">Real World Impact.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#64748B]">Scalable, secure and intelligent platforms built to solve complex real-world challenges.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {relatedWork.map((project, index) => (
              <ServiceProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/work" className="inline-flex items-center gap-2 rounded-xl bg-[#1D4ED8] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(29,78,216,.7)] transition-colors hover:bg-[#1E40AF]">
              View More
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8FF] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <p className="eyebrow before:w-12 after:h-px after:w-24 after:bg-current after:opacity-70">Industry fit</p>
          <h2 className="mt-8 font-display text-4xl font-extrabold leading-tight text-[#14233C] md:text-6xl">Where this capability shines</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {relatedIndustries.map((industry, index) => (
              <ServiceIndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8FF] pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="relative min-h-[230px] overflow-hidden rounded-[28px] border border-[#60A5FA]">
            <div className="absolute inset-0 bg-[linear-gradient(105deg,#1D4ED8_0%,#2563EB_42%,#38BDF8_78%,#7DD3FC_100%)]" />
            <img src="/industry-cta-rocket.png" alt="" className="pointer-events-none absolute inset-y-2 right-0 hidden w-[58%] max-w-[560px] object-contain object-right pr-3 sm:block md:pr-8" />
            <div className="relative z-[1] max-w-xl px-8 py-9 md:px-14 md:py-12">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">Have a project in mind?</h2>
              <p className="mt-3 text-lg text-white/90">Let's build something impactful together.</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#EA580C]">
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

function ServiceProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  const Icon = (Lucide as any)[project.icon] ?? Lucide.Box;
  const styles = [
    { shell: "border-[#E9D5FF] bg-[#FCF3FF]", tag: "text-[#9333EA] border-[#E9D5FF]", icon: "text-[#9333EA] bg-[#FAE8FF]", button: "text-[#9333EA] border-[#E9D5FF]", chip: "border-[#E9D5FF] bg-[#FAF5FF] text-[#7E22CE]", dot: "bg-[#A855F7]" },
    { shell: "border-[#B7D4FB] bg-[#EFF8FF]", tag: "text-[#047857] border-[#BBF7D0]", icon: "text-[#2563EB] bg-[#EFF6FF]", button: "text-[#2563EB] border-[#BFDBFE]", chip: "border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8]", dot: "bg-[#60A5FA]" },
    { shell: "border-[#FED7AA] bg-[#FFF4EB]", tag: "text-[#EA580C] border-[#FED7AA]", icon: "text-[#EA580C] bg-[#FFF7ED]", button: "text-[#EA580C] border-[#FDBA74]", chip: "border-[#FED7AA] bg-[#FFF7ED] text-[#EA580C]", dot: "bg-[#FB923C]" },
  ][index % 3];

  return (
    <article className={`flex min-h-[640px] flex-col overflow-hidden rounded-[28px] border ${styles.shell} shadow-[0_24px_50px_-36px_rgba(20,35,60,.45)]`}>
      <div className="relative px-5 pt-5">
        <span className={`absolute left-8 top-6 z-[1] rounded-full border bg-white/95 px-4 py-2 text-xs font-extrabold ${styles.tag}`}>
          {project.industry}
        </span>
        <div className="mt-12 h-[230px] overflow-hidden rounded-t-lg bg-white">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white p-8">
        <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#94A3B8]">
          <span className={`grid h-10 w-10 place-items-center rounded-lg border ${styles.icon}`}>
            <Icon size={18} />
          </span>
          {project.client}
        </p>
        <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#111827]">{project.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-[#64748B]">{project.description}</p>
        <div className="mt-5">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]">Tech stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold ${styles.chip}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                {tag}
              </span>
            ))}
          </div>
          <Link to={`/work/${project.slug}`} className={`mt-8 flex items-center justify-between rounded-xl border bg-white px-6 py-4 text-base font-extrabold ${styles.button}`}>
            View {project.client} Case Study
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function TechStackLogo({ technology }: { technology: string }) {
  const image = stackLogoByTech[technology];
  const Icon = techIcons[technology] ?? Code2;

  return (
    <div className="flex shrink-0 items-center gap-4 text-[#64748B] transition-all duration-300 hover:-translate-y-1 hover:text-[#2563EB]">
      {image ? (
        <img src={image} alt={technology} className="h-10 w-10 object-contain md:h-12 md:w-12" loading="lazy" />
      ) : (
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#2563EB] shadow-[0_12px_28px_-24px_rgba(20,35,60,.42)] md:h-12 md:w-12">
          <Icon size={28} aria-hidden="true" />
        </span>
      )}
      <span className="whitespace-nowrap text-lg font-semibold">{technology}</span>
    </div>
  );
}

function ServiceIndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = (Lucide as any)[industry.icon] ?? Lucide.Box;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-[#D7E4F7] bg-white p-9 shadow-[0_18px_44px_-34px_rgba(20,35,60,.38)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9EC5FE] hover:shadow-[0_22px_48px_-34px_rgba(37,99,235,.4)]"
    >
      <h3 className="flex items-center gap-4 text-2xl font-extrabold text-[#14233C]">
        <Icon size={28} className="text-[#06B6D4]" />
        {industry.title}
      </h3>
      <p className="mt-8 text-lg font-extrabold text-[#14233C]">{industry.short}</p>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B]">{industry.description}</p>
      <Link to={`/industries/${industry.slug}`} className="mt-10 inline-flex items-center gap-2 text-base font-extrabold text-[#06B6D4]">
        Explore {industry.title}
        <ArrowRight size={18} />
      </Link>
    </motion.article>
  );
}
