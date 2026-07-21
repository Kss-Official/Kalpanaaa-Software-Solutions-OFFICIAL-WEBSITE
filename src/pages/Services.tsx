import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { VisualScene } from "../components/visuals/VisualScene";
import { SERVICES, NAP } from "../data/site";

export function Services() {
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "Kalpanaaaa Software Solutions — Services", itemListElement: SERVICES.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: service.title, url: `https://kalpanaaasoftwaresolutions.in/services/${service.slug}` })) };
  return <div className="site-page min-h-screen">
    <SEO title="Services — Web, Mobile, DevOps, QA, RAG, Multi-Agent | Kalpanaaaa" description="Full-lifecycle software engineering: full-stack web, mobile apps, cloud DevOps, enterprise QA, RAG systems, and multi-agent automation." canonical="https://kalpanaaasoftwaresolutions.in/services" jsonLd={itemList} />
    <section className="relative overflow-hidden border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center"><SectionHeading as="h1" eyebrow="What we build" title="Bespoke engineering capabilities" description="A connected delivery system across web, mobile, cloud, QA, RAG, and multi-agent engineering."/><VisualScene variant="capability-mesh" labels={SERVICES.map((service)=>service.tag)} title="Capability mesh connecting six Kalpanaaaa engineering services" /></div></section>
    <section className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><h2 className="sr-only">Software engineering services</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map((service,index)=><ServiceCard key={service.slug} service={service} index={index}/>)}</div></div></section>
    <section className="pb-20"><div className="max-w-3xl mx-auto px-6 text-center"><p className="eyebrow justify-center">Choose the right route</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-ink">Not sure which service fits?</h2><p className="mt-3 text-muted">We will scope it with you in a 30-minute discovery call.</p><Link to="/contact" className="button-primary mt-7 px-7 py-4 text-sm font-bold uppercase tracking-widest">Book discovery call <ArrowRight size={16}/></Link><p className="mt-5 text-xs text-muted">Or write to <a href={`mailto:${NAP.email}`} className="text-brand hover:underline">{NAP.email}</a></p></div></section>
  </div>;
}
