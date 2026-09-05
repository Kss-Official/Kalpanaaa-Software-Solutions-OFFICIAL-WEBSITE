import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

/*
  8 unique services — zero duplicates.

  Row 1:  [Website Dev]  [Mobile App]  [Custom Software]    — 3 × 1/3
  Row 2:  [UI/UX Design ————— 2/3]    [Cloud & DevOps 1/3] — 2/3 + 1/3
  Row 3:  [AI Chatbot ————————2/3]    [Cybersecurity  1/3] — 2/3 + 1/3
  Row 4:  [Software Maintenance & Support ————————— 3/3]   — full width
*/

type CardDef = {
  id: string;
  title: string;
  desc: string;
  href: string;
  img: string;
  /** absolute-positioning + sizing for the PNG overlay */
  imgCls: string;
  /** tailwind col-span override */
  span?: string;
};

const CARDS: CardDef[][] = [
  /* ── Row 1 ── */
  [
    {
      id: "web",
      title: "Website Development",
      desc: "We build fast, responsive and SEO-friendly websites that help your business stand out online.",
      href: "/services/web-engineering",
      img: "/Service-Section-Images/WebsiteDevelopment.webp",
      imgCls: "w-[180px] right-0 bottom-0",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      desc: "Powerful mobile apps for Android & iOS that deliver seamless user experiences.",
      href: "/services/mobile-apps",
      img: "/Service-Section-Images/MobileAppDev.webp",
      imgCls: "w-[140px] right-2 bottom-0",
    },
    {
      id: "custom",
      title: "Custom Software Development",
      desc: "Tailored software solutions designed to solve your unique business challenges.",
      href: "/services",
      img: "/Service-Section-Images/customer-software-dev.webp",
      imgCls: "w-[140px] right-2 bottom-0",
    },
  ],

  /* ── Row 2 ── */
  [
    {
      id: "uiux",
      title: "UI/UX Design",
      desc: "We design intuitive and engaging interfaces that enhance user satisfaction and drive results.",
      href: "/services",
      img: "/Service-Section-Images/UIUXDesign.webp",
      imgCls: "w-[240px] right-0 bottom-0",
      span: "col-span-1 md:col-span-2",
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      desc: "Scalable cloud solutions and DevOps practices to ensure performance, reliability, and security.",
      href: "/services/cloud-devops",
      img: "/Service-Section-Images/CloudAndDevops.webp",
      imgCls: "w-[160px] right-0 bottom-0",
      span: "col-span-1",
    },
  ],

  /* ── Row 3 ── */
  [
    {
      id: "ai",
      title: "AI Chatbot & Automation",
      desc: "Automate conversations, reduce manual work, and improve customer support with AI.",
      href: "/services/multi-agent-automation",
      img: "/Service-Section-Images/AIChatBotAndAutomation.webp",
      imgCls: "w-[220px] right-0 bottom-0",
      span: "col-span-1 md:col-span-2",
    },
    {
      id: "security",
      title: "Cybersecurity",
      desc: "Protect your data and systems with robust security solutions and best practices.",
      href: "/services/qa-testing",
      img: "/Service-Section-Images/Cybersecurity.webp",
      imgCls: "w-[150px] right-2 bottom-0",
      span: "col-span-1",
    },
  ],

  /* ── Row 4 ── */
  [
    {
      id: "support",
      title: "Software Maintenance & Support",
      desc: "We keep your software running smoothly with continuous support and maintenance.",
      href: "/services",
      img: "/Service-Section-Images/SoftwareMaintananceAndSupport.webp",
      imgCls: "w-[200px] right-4 bottom-0",
      span: "col-span-1 md:col-span-3",
    },
  ],
];

/* card heights per row so every row is a tight, uniform strip */
const ROW_HEIGHT = ["min-h-[11rem]", "min-h-[12rem]", "min-h-[12rem]", "min-h-[10rem]"];

function Card({
  card,
  idx,
  rowIdx,
}: {
  card: CardDef;
  idx: number;
  rowIdx: number;
}) {
  const minH = ROW_HEIGHT[rowIdx] ?? "min-h-[11rem]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: idx * 0.04 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#ccdff6]
        bg-white
        shadow-[0_2px_12px_rgba(23,105,213,0.07)]
        hover:shadow-[0_8px_28px_rgba(23,105,213,0.15)] hover:border-brand/40
        transition-all duration-300 ${card.span ?? "col-span-1"} ${minH}`}
    >
      {/* top accent bar */}
      <span className="absolute top-0 left-0 h-[2px] w-0 bg-brand group-hover:w-full transition-all duration-500 z-10" />

      {/* ── Permanent blue radial glow behind artwork (right half) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[62%]"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 85% 60%, rgba(59,130,246,0.18) 0%, rgba(147,197,253,0.10) 45%, transparent 75%)",
        }}
      />
      {/* extra bloom circle centred on image */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 bottom-0 h-44 w-44 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(96,165,250,0.30) 0%, transparent 70%)" }}
      />

      {/* text — right padding carves room for PNG */}
      <div className="relative z-10 flex flex-col justify-between h-full p-5 pr-[38%]">
        <div>
          <p className="font-display text-[14px] font-extrabold text-ink leading-snug group-hover:text-brand transition-colors duration-200">
            {card.title}
          </p>
          <p className="mt-2 text-[12px] text-muted leading-snug line-clamp-3">
            {card.desc}
          </p>
        </div>
        <Link
          to={card.href}
          className="inline-flex items-center gap-1 text-[11.5px] font-bold text-brand uppercase tracking-wider mt-3 w-fit hover:gap-1.5 transition-all"
        >
          Learn more <ArrowRight size={12} />
        </Link>
      </div>

      {/* 3D PNG artwork — absolutely pinned bottom-right */}
      <div
        className={`absolute pointer-events-none select-none flex items-end justify-end ${card.imgCls}`}
        aria-hidden
      >
        <img
          src={card.img}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain
            transition-transform duration-500 ease-out group-hover:scale-105
            drop-shadow-[0_10px_24px_rgba(23,105,213,0.25)]"
        />
      </div>

      {/* hover: intensify the glow */}
      <div className="pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 rounded-full bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">

        {/* header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="What we build"
            title="Bespoke engineering capabilities"
            description="Full-lifecycle software engineering across web, mobile, cloud, QA, RAG, and multi-agent systems."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand hover:underline shrink-0"
          >
            All services <ArrowRight size={13} />
          </Link>
        </div>

        {/* 4 rows — each row is an independent 3-column grid */}
        <div className="flex flex-col gap-4">
          {CARDS.map((rowCards, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {rowCards.map((card, idx) => (
                <Card key={card.id} card={card} idx={idx} rowIdx={rowIdx} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
