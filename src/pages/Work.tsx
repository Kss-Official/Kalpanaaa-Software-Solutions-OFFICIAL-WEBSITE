import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { VisualScene } from "../components/visuals/VisualScene";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { CASE_STUDIES } from "../data/site";

export function Work() {
  const itemList = { "@context":"https://schema.org", "@type":"ItemList", name:"Kalpanaaa Software Solutions — Case Studies", itemListElement:CASE_STUDIES.map((project,index)=>({"@type":"ListItem",position:index+1,name:project.title,url:`https://kalpanaaasoftwaresolutions.in/work/${project.slug}`})) };
  return <div className="site-page min-h-screen">
    <SEO title="Our Work & Case Studies — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)" description="Case studies and engineering work by Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in). Founder-led engagements across government, healthcare, and education." canonical="https://kalpanaaasoftwaresolutions.in/work" jsonLd={itemList} />
    <section className="relative overflow-hidden border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center"><SectionHeading as="h1" eyebrow="Selected work" title="Engineering, not templates." description="Every engagement is founder-led, contractually backed, and shipped with measurable outcomes."/><VisualScene variant="delivery-outcome-rail" labels={["SCOPE","ENGINEER","RELEASE","OUTCOME"]} title="A delivery rail from scope through measurable outcome"/></div></section>
    <section className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><h2 className="sr-only">Kalpanaaaa case studies</h2>{CASE_STUDIES.map((project,index)=><CaseStudyCard key={project.slug} project={project} index={index}/>)}</div></section>
    <section className="pb-20 text-center"><motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-2xl mx-auto px-6"><p className="eyebrow justify-center">Next engagement</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-ink">Want to be the next case study?</h2><Link to="/contact" className="button-primary mt-7 px-7 py-4 text-sm font-bold uppercase tracking-widest">Start a project →</Link></motion.div></section>
  </div>;
}
