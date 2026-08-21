import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { SERVICES, NAP } from "../data/site";

export function Services() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kalpanaaa Software Solutions — Services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://kalpanaaasoftwaresolutions.in/services/${service.slug}`,
    })),
  };

  return (
    <div className="site-page min-h-screen">
      <SEO
        title="Software Engineering Services — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)"
        description="Engineering services by Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in): full-stack web, mobile apps, cloud DevOps, enterprise QA, RAG systems, and multi-agent AI."
        canonical="https://kalpanaaasoftwaresolutions.in/services"
        jsonLd={itemList}
      />

      <section className="relative overflow-hidden border-b border-line/70">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center">
          <SectionHeading
            as="h1"
            eyebrow="What we build"
            title="Bespoke engineering capabilities"
            description="A connected delivery system across web, mobile, cloud, QA, RAG, and multi-agent engineering."
          />
          <img src="/Rectangle.svg" alt="" className="mx-auto w-full max-w-[560px]" aria-hidden="true" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="sr-only">Software engineering services</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}

            <Link
              to="/contact"
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl bg-[#0F5BFF] p-8 text-white shadow-[0_24px_48px_-30px_rgba(15,91,255,.72)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,91,255,.86)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(145deg,#075CFF_0%,#0F63FF_48%,#0B49DD_100%)]" />
              <span className="absolute -bottom-28 -left-20 h-[310px] w-[520px] rounded-[50%] border border-white/10 bg-white/[0.055]" />
              <span className="absolute -bottom-44 left-20 h-[330px] w-[560px] rounded-[50%] border border-white/10 bg-white/[0.055]" />
              <span className="absolute -bottom-56 right-[-120px] h-[360px] w-[620px] rounded-[50%] border border-white/10 bg-white/[0.045]" />
              <span className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(255,255,255,.08),transparent)]" />

              <span className="relative z-[1] max-w-[250px] font-display text-3xl font-extrabold leading-tight md:text-4xl">
                Not sure where to start?
              </span>
              <span className="relative z-[1] inline-flex items-center gap-3 text-lg font-bold">
                Book a discovery call
                <ArrowRight size={22} className="rounded-full border border-white/80 p-0.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            Or write to{" "}
            <a href={`mailto:${NAP.email}`} className="text-brand hover:underline">
              {NAP.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
