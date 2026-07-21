import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import * as Lucide from "lucide-react";
import type { Industry } from "../data/site";

export function IndustryCard({ industry, index = 0 }: { industry: Industry; index?: number }) {
  const Icon = (Lucide as any)[industry.icon] ?? Lucide.Box;
  return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:.5,delay:index*.05}} whileHover={{y:-4}} className="site-card group relative p-7 lg:p-8 rounded-2xl overflow-hidden transition-all duration-300">
    <span className="absolute top-0 left-0 h-[2px] w-0 bg-brand group-hover:w-full transition-all duration-500"/>
    <div className="flex items-center gap-3 mb-4"><span className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors"><Icon size={20}/></span><h3 className="text-xl font-bold text-ink">{industry.title}</h3></div>
    <p className="text-sm font-semibold text-ink mb-2">{industry.short}</p><p className="text-sm text-muted leading-relaxed mb-5">{industry.description}</p>
    <Link to={`/industries/${industry.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline">Explore {industry.title} <ArrowRight size={14}/></Link>
  </motion.div>;
}
