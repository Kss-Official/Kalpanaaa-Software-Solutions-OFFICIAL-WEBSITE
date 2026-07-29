import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { TechBadge } from "../components/TechBadge";
import { VisualScene } from "../components/visuals/VisualScene";
import { MetricCounter } from "../components/effects/Counter";
import { CASE_STUDIES } from "../data/site";
export function CaseStudyDetail() {
 const {id}=useParams(); const project=CASE_STUDIES.find((item)=>item.slug===id);
 if(!project)return <div className="site-page min-h-screen flex flex-col items-center justify-center p-8 text-center"><h1 className="font-display text-3xl font-bold text-ink">Case study not found</h1><Link to="/work" className="mt-6 inline-flex items-center gap-2 text-brand"><ArrowLeft size={14}/>Back to all work</Link></div>;
 const jsonLd={"@context":"https://schema.org","@type":"Article",headline:project.title,description:project.description,author:{"@type":"Organization",name:"Kalpanaaaa Software Solutions Pvt. Ltd."},publisher:{"@type":"Organization",name:"Kalpanaaaa Software Solutions Pvt. Ltd."},about:project.industry};
 return <div className="site-page min-h-screen"><SEO title={`${project.client} — ${project.title} | Kalpanaaaa`} description={project.description} canonical={`https://kalpanaaasoftwaresolutions.com/work/${project.slug}`} jsonLd={jsonLd}/>
  <section className="relative overflow-hidden border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-20"><Link to="/work" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted hover:text-brand mb-7"><ArrowLeft size={14}/>All work</Link><div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(400px,.9fr)] gap-10 items-center"><div><div className="flex items-center gap-3"><span className="pill px-2.5 py-1">{project.client}</span><span className="text-[10px] font-mono text-muted uppercase tracking-widest">{project.industry}</span></div><motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-ink max-w-4xl">{project.title}</motion.h1><p className="mt-5 text-lg text-muted max-w-3xl leading-relaxed">{project.description}</p></div><VisualScene className="detail-scene" variant={`case-${project.slug}`} title={`${project.client} delivery and outcome route`}/></div></div></section>
  <section className="py-14 md:py-18"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{project.metrics.map((metric,index)=><motion.div key={metric.label} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}} className="site-card p-6 rounded-2xl"><MetricCounter value={metric.value}/><p className="text-xs font-bold uppercase tracking-widest text-muted mt-3">{metric.label}</p></motion.div>)}</div></section>
  <section className="py-16 md:py-20 site-surface border-y border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"><SectionHeading eyebrow="Production stack" title="Technologies used"/><div className="mt-6 flex flex-wrap gap-2.5">{project.tags.map((technology)=><TechBadge key={technology} tech={{name:technology,category:"Stack",why:"Production-grade",icon:"Code2"}}/>)}</div></div></section>
  <section className="py-20"><div className="max-w-3xl mx-auto px-6 text-center"><h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink">Want outcomes like this?</h2><p className="mt-3 text-muted">Same SLA-backed delivery playbook. Different problem space.</p><Link to="/contact" className="button-primary mt-7 px-7 py-4 text-sm font-bold uppercase tracking-widest">Start a project <ArrowRight size={16}/></Link></div></section>
 </div>;
}
