import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getIcon } from "./icons/registry";
import type { Service } from "../data/site";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = getIcon(service.icon);
  return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:.5,delay:index*.05}} whileHover={{y:-4}} className="site-card group relative flex flex-col gap-4 p-7 lg:p-8 rounded-2xl overflow-hidden transition-all duration-300">
    <span className="absolute top-0 left-0 h-[2px] w-0 bg-brand group-hover:w-full transition-all duration-500"/>
    <div className="flex items-center justify-between"><span className="pill px-2.5 py-1">{service.tag}</span><Icon size={22} className="text-muted group-hover:text-brand transition-colors"/></div>
    <h3 className="text-xl font-bold text-ink">{service.title}</h3><p className="text-sm text-muted leading-relaxed">{service.description}</p>
    <Link to={`/services/${service.slug}`} className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline">Explore {service.title} <ArrowRight size={14}/></Link>
  </motion.div>;
}
