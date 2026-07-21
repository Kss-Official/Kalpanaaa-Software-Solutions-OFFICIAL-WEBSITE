import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import * as Lucide from "lucide-react";
import { MetricCounter } from "./effects/Counter";
import type { CaseStudy } from "../data/site";

export function CaseStudyCard({ project, index = 0 }: { project: CaseStudy; index?: number }) {
  const Icon = (Lucide as any)[project.icon] ?? Lucide.Box;
  return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:.5,delay:index*.05}} whileHover={{y:-4}} className="site-card group flex flex-col rounded-2xl overflow-hidden transition-all duration-300">
    <div className="relative w-full flex items-center justify-center bg-[linear-gradient(135deg,#e4f0ff,#fafdff)] border-b border-line" style={{aspectRatio:"16/9"}}><Icon size={64} className="text-brand/30 group-hover:text-brand/55 transition-colors"/><span className="absolute top-3 left-3 pill px-2.5 py-1">{project.industry}</span></div>
    <div className="flex flex-col flex-1 gap-3 p-6 lg:p-7"><p className="text-[10px] font-mono uppercase tracking-widest text-muted">{project.client}</p><h3 className="text-lg font-bold text-ink group-hover:text-brand transition-colors">{project.title}</h3><p className="text-sm text-muted leading-relaxed line-clamp-2">{project.description}</p><div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-line">{project.metrics.slice(0,2).map((metric)=><div key={metric.label} className="min-w-0 flex flex-col gap-1"><MetricCounter value={metric.value}/><span className="text-[10px] font-semibold uppercase tracking-widest text-muted">{metric.label}</span></div>)}</div><Link to={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline mt-1">Read {project.client} case study <ArrowRight size={14}/></Link></div>
  </motion.div>;
}
