import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { IndustryCard } from "../components/IndustryCard";
import { INDUSTRIES } from "../data/site";

export function Industries() {
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "Industries Kalpanaaa Software Solutions serves", itemListElement: INDUSTRIES.map((industry,index)=>({ "@type":"ListItem", position:index+1, name:industry.title, url:`https://kalpanaaasoftwaresolutions.in/industries/${industry.slug}` })) };
  return <div className="site-page min-h-screen">
    <SEO title="Industries Served — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)" description="Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in) engineers for government, healthcare, finance, and education with compliance-aware bespoke delivery." canonical="https://kalpanaaasoftwaresolutions.in/industries" jsonLd={itemList} />
    <section className="relative overflow-hidden border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center"><SectionHeading as="h1" eyebrow="Industries we serve" title="Regulated. Demanding. Built for." description="We engineer for the constraints that matter: compliance, auditability, latency, scale, and accessibility."/><img src="/All_Industries.svg" alt="" className="mx-auto w-full max-w-[560px]" aria-hidden="true" /></div></section>
    <section className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><h2 className="sr-only">Industries we serve</h2><div className="grid gap-5 md:grid-cols-2">{INDUSTRIES.map((industry,index)=><IndustryCard key={industry.slug} industry={industry} index={index}/>)}</div></div></section>
  </div>;
}
