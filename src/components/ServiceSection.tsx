import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {SectionHeading} from "../components/SectionHeading";


export default function ServiceSection() {
  return (
    <section className="py-16 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">

        {/* ================= SECTION HEADING ================= */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <SectionHeading
            eyebrow="What we build"
            title="Bespoke engineering capabilities"
            description="Full-lifecycle software engineering across web, mobile, cloud, QA, RAG, and multi-agent systems."
          />

          <Link
            to="/services"
            className="text-brand text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 hover:underline transition-all duration-300"
          >
            All services
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 lg:auto-rows-[185px]">

          {/* =====================================================
          01 — WEBSITE DEVELOPMENT
      ===================================================== */}
      <Link
        to="/services/website-development"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-white
          lg:row-span-2
          min-h-[380px]
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Visual background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50" />

        {/* Decorative website illustration */}
        <div
          className="
            absolute right-[-35px] bottom-[-25px]
            w-[330px] h-[280px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.03]
          "
        >
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-blue-100/70 via-blue-50/60 to-blue-400/70 rotate-[-8deg]" />

          <div className="absolute right-4 bottom-5 w-[275px] h-[190px] rounded-xl bg-white shadow-2xl rotate-[-7deg] border border-blue-100 overflow-hidden">
            <div className="h-7 border-b border-blue-100 flex items-center gap-1.5 px-3">
              <span className="w-2 h-2 rounded-full bg-blue-200" />
              <span className="w-2 h-2 rounded-full bg-blue-200" />
              <span className="w-2 h-2 rounded-full bg-blue-200" />
            </div>

            <div className="p-5">
              <div className="w-24 h-3 rounded bg-blue-100" />
              <div className="mt-3 w-36 h-5 rounded bg-blue-500/80" />
              <div className="mt-2 w-28 h-2 rounded bg-blue-100" />

              <div className="mt-6 flex gap-3">
                <div className="w-20 h-14 rounded-lg bg-blue-50" />

                <div className="flex-1 space-y-2">
                  <div className="w-full h-2 rounded bg-blue-100" />
                  <div className="w-3/4 h-2 rounded bg-blue-100" />
                  <div className="w-1/2 h-2 rounded bg-blue-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 h-full flex flex-col">
          <div className="text-brand mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="4"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M8 21h8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-extrabold text-ink leading-tight">
            Website Development
          </h3>

          <p className="mt-5 max-w-[285px] text-sm md:text-[15px] leading-[1.45] text-ink">
            We build fast, responsive and SEO-friendly websites that help
            your business stand out online.
          </p>

          <span className="mt-7 inline-flex items-center gap-2 text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          02 — MOBILE APP DEVELOPMENT
      ===================================================== */}
      <Link
        to="/services/mobile-app-development"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-br from-white via-white to-blue-50
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        <div className="absolute right-[-15px] top-[-15px] w-40 h-40 rounded-full bg-blue-100/70 blur-2xl" />

        {/* Phone visual */}
        <div
          className="
            absolute right-4 bottom-[-15px]
            w-[105px] h-[190px]
            rounded-[22px]
            bg-gradient-to-br from-blue-100 to-blue-500
            rotate-[8deg] p-1 shadow-xl
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="w-full h-full bg-white rounded-[19px] p-3">
            <div className="mx-auto w-8 h-1 rounded-full bg-slate-200" />
            <div className="mt-5 w-full h-3 rounded bg-blue-100" />
            <div className="mt-2 w-3/4 h-2 rounded bg-blue-200" />

            <div className="mt-6 h-16 rounded-lg bg-blue-50 relative overflow-hidden">
              <div className="absolute left-2 bottom-3 w-3 h-7 rounded bg-blue-300" />
              <div className="absolute left-7 bottom-3 w-3 h-10 rounded bg-blue-400" />
              <div className="absolute left-12 bottom-3 w-3 h-5 rounded bg-blue-500" />
            </div>
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
              <rect
                x="6"
                y="2"
                width="12"
                height="20"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="18" r="1" fill="currentColor" />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink leading-tight max-w-[300px]">
            Mobile App Development
          </h3>

          <p className="mt-2 text-sm leading-[1.4] text-ink max-w-[250px]">
            Powerful mobile applications for Android & iOS that deliver
            seamless user experiences.
          </p>

          <span className="mt-auto text-orange-500 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          03 — CUSTOM SOFTWARE DEVELOPMENT
      ===================================================== */}
      <Link
        to="/services/custom-software-development"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-br from-white via-white to-blue-50
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Decorative code blocks */}
        <div
          className="
            absolute right-[-10px] top-[-15px] opacity-80
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="w-36 h-36 rounded-2xl bg-blue-50 border border-blue-100 rotate-12" />

          <div className="absolute top-10 right-8 w-24 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-blue-500 shadow-xl -rotate-6 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">
              {"</>"}
            </span>
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink leading-tight">
            Custom Software Development
          </h3>

          <p className="mt-2 text-sm leading-[1.4] text-ink max-w-[280px]">
            Tailored software solutions designed to solve your unique
            business challenges.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          04 — UI/UX DESIGN
      ===================================================== */}
      <Link
        to="/services/ui-ux-design"
        className="
          group relative overflow-hidden rounded-2xl
          border border-orange-200
          bg-gradient-to-br from-white via-white to-orange-50
          shadow-[0_4px_20px_rgba(249,115,22,0.07)]
          lg:col-span-2
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-orange-300
          hover:shadow-[0_14px_35px_rgba(249,115,22,0.16)]
        "
      >
        {/* UI visual */}
        <div
          className="
            absolute right-[-15px] bottom-[-30px]
            w-[420px] h-[220px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.03]
          "
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70 rotate-[-3deg]" />

          <div className="absolute right-6 bottom-4 w-[320px] h-[170px] rounded-xl bg-white border border-orange-100 shadow-xl p-4">
            <div className="flex gap-2">
              <div className="w-20 h-3 rounded bg-orange-100" />
              <div className="ml-auto w-8 h-3 rounded bg-orange-200" />
            </div>

            <div className="mt-5 flex gap-3">
              <div className="w-20 h-24 rounded-lg bg-orange-50" />

              <div className="flex-1">
                <div className="w-32 h-4 rounded bg-orange-200" />

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-14 rounded bg-orange-50" />
                  <div className="h-14 rounded bg-orange-100" />
                  <div className="h-14 rounded bg-orange-200" />
                </div>

                <div className="mt-3 w-full h-2 rounded bg-orange-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M7 8h4M7 12h10M7 16h6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink">
            UI/UX Design
          </h3>

          <p className="mt-3 text-sm md:text-[15px] leading-[1.4] text-ink max-w-[390px]">
            We design intuitive and engaging interfaces that enhance user
            satisfaction and drive results.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          05 — AI CHATBOT & AUTOMATION
      ===================================================== */}
      <Link
        to="/services/ai-chatbot-automation"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-r from-white to-blue-100
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          lg:col-span-2
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* AI Robot visual */}
        <div
          className="
            absolute right-10 bottom-[-20px]
            w-[220px] h-[180px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="absolute right-5 bottom-8 w-[130px] h-[95px] rounded-[35px] bg-gradient-to-br from-white to-blue-200 shadow-xl border border-blue-100">
            <div className="absolute top-8 left-8 right-8 h-10 rounded-full bg-slate-900 flex items-center justify-center gap-4">
              <span className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
              <span className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
            </div>
          </div>

          <div className="absolute right-[-5px] top-2 w-14 h-10 rounded-full bg-blue-500 rotate-12 opacity-80" />
          <div className="absolute left-3 bottom-4 w-12 h-12 rounded-full bg-blue-100" />
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 8h10a4 4 0 014 4v1a4 4 0 01-4 4H9l-4 3v-7a5 5 0 012-5z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="13" r="1" fill="currentColor" />
              <circle cx="12" cy="13" r="1" fill="currentColor" />
              <circle cx="15" cy="13" r="1" fill="currentColor" />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink">
            AI Chatbot & Automation
          </h3>

          <p className="mt-3 text-sm md:text-[15px] leading-[1.4] text-ink max-w-[390px]">
            Automate conversations, reduce manual work, and improve customer
            support with AI.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          06 — CLOUD & DEVOPS
      ===================================================== */}
      <Link
        to="/services/cloud-devops"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-br from-white via-white to-blue-100
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          lg:row-span-2
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Cloud visual */}
        <div
          className="
            absolute bottom-[-10px] right-[-10px]
            w-[250px] h-[260px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="absolute bottom-4 right-8 w-[170px] h-[120px] rounded-[50%] bg-blue-100 blur-xl" />

          <div className="absolute bottom-14 right-12 w-[150px] h-[75px] rounded-full bg-white shadow-xl border border-blue-100" />

          <div className="absolute bottom-16 right-20 w-[115px] h-[70px] rounded-full bg-blue-100">
            <div className="absolute inset-4 rounded-full bg-blue-50" />
          </div>

          {/* Server */}
          <div className="absolute bottom-0 right-12 w-[130px] h-[90px] rounded-xl bg-gradient-to-br from-white to-blue-100 border border-blue-200 shadow-lg">
            <div className="p-3 space-y-2">
              <div className="h-4 rounded bg-blue-200" />
              <div className="h-4 rounded bg-blue-100" />
              <div className="h-4 rounded bg-blue-200" />
            </div>
          </div>
        </div>

        <div className="relative z-10 p-7 h-full flex flex-col">
          <div className="text-brand mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 18h10a4 4 0 00.5-7.97A5.5 5.5 0 007 9.5a4.5 4.5 0 000 9z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M9 14l-2 2 2 2M15 14l2 2-2 2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-extrabold text-ink">
            Cloud & DevOps
          </h3>

          <p className="mt-5 text-sm md:text-[15px] leading-[1.45] text-ink max-w-[285px]">
            Scalable cloud solutions and DevOps practices to ensure
            performance, reliability, and security.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          07 — CYBERSECURITY
      ===================================================== */}
      <Link
        to="/services/cybersecurity"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-br from-white to-blue-50
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Shield visual */}
        <div
          className="
            absolute right-5 bottom-[-10px]
            w-32 h-36
            transition-transform duration-500 ease-out
            group-hover:scale-[1.05]
          "
        >
          <div className="absolute inset-3 bg-blue-500/15 blur-xl rounded-full" />

          <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-blue-700 [clip-path:polygon(50%_0%,90%_15%,85%_65%,50%_100%,15%_65%,10%_15%)] shadow-xl" />

          <div className="absolute inset-[42px] border-2 border-white rounded-full" />
        </div>

        <div className="relative z-10 p-5 h-full flex flex-col">
          <div className="text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l7 3v5c0 4.5-2.9 8.1-7 10-4.1-1.9-7-5.5-7-10V6l7-3z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink">
            Cybersecurity
          </h3>

          <p className="mt-2 text-sm leading-[1.35] text-ink max-w-[260px]">
            Protect your data and systems with our robust security solutions
            and best practices.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          08 — SOFTWARE MAINTENANCE & SUPPORT
      ===================================================== */}
      <Link
        to="/services/software-maintenance"
        className="
          group relative overflow-hidden rounded-2xl
          border border-orange-200
          bg-gradient-to-br from-white via-white to-orange-50
          shadow-[0_4px_20px_rgba(249,115,22,0.07)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-orange-300
          hover:shadow-[0_14px_35px_rgba(249,115,22,0.16)]
        "
      >
        {/* Gear visual */}
        <div
          className="
            absolute right-5 bottom-[-10px]
            w-32 h-32
            transition-transform duration-500 ease-out
            group-hover:scale-[1.05]
            group-hover:rotate-3
          "
        >
          <div className="absolute inset-2 rounded-full border-[18px] border-orange-100" />
          <div className="absolute inset-7 rounded-full bg-orange-500" />
          <div className="absolute inset-[43px] rounded-full bg-white" />
        </div>

        <div className="relative z-10 p-5 h-full flex flex-col">
          <div className="text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8a6 6 0 00-11.5 2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M6 16a6 6 0 0011.5-2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M4 10l2-2 2 2M20 14l-2 2-2-2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink leading-tight">
            Software Maintenance & Support
          </h3>

          <p className="mt-2 text-sm leading-[1.35] text-ink max-w-[300px]">
            We keep your software running smoothly with continuous support
            and maintenance.
          </p>

          <span className="mt-auto text-orange-500 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          09 — QUALITY ASSURANCE
      ===================================================== */}
      <Link
        to="/services/quality-assurance"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-white
          lg:row-span-2
          min-h-[380px]
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50" />

        {/* QA visual */}
        <div
          className="
            absolute right-[-25px] bottom-[-15px]
            w-[280px] h-[260px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="absolute inset-0 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="absolute right-8 bottom-8 w-[190px] h-[170px] rounded-2xl bg-white border border-blue-100 shadow-xl rotate-[-6deg] p-5">
            <div className="flex items-center justify-between">
              <div className="w-20 h-3 rounded bg-blue-100" />

              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 text-sm">✓</span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center">
                  ✓
                </span>
                <div className="w-24 h-2 rounded bg-blue-100" />
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-400 text-white text-[10px] flex items-center justify-center">
                  ✓
                </span>
                <div className="w-20 h-2 rounded bg-blue-100" />
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-300 text-white text-[10px] flex items-center justify-center">
                  ✓
                </span>
                <div className="w-28 h-2 rounded bg-blue-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 p-7 h-full flex flex-col">
          <div className="text-brand mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l7 3v5c0 4.5-2.9 8.1-7 10-4.1-1.9-7-5.5-7-10V6l7-3z"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M8 12l2.5 2.5L16 9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-extrabold text-ink">
            Quality Assurance (QA)
          </h3>

          <p className="mt-5 max-w-[285px] text-sm md:text-[15px] leading-[1.45] text-ink">
            Rigorous testing and quality processes to deliver reliable,
            high-performance and bug-free software.
          </p>

          <span className="mt-7 inline-flex items-center gap-2 text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          10 — IT CONSULTING
      ===================================================== */}
      <Link
        to="/services/it-consulting"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-br from-white via-white to-blue-50
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Background visual */}
        <div
          className="
            absolute right-[-15px] bottom-[-20px]
            w-[190px] h-[180px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="absolute inset-0 rounded-full bg-blue-100/70 blur-2xl" />

          <div className="absolute right-5 bottom-5 w-[125px] h-[120px] rounded-2xl bg-white border border-blue-100 shadow-xl p-4 rotate-6">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100" />
              <div className="w-12 h-2 rounded bg-blue-100 mt-1" />
            </div>

            <div className="mt-5 space-y-2">
              <div className="w-full h-2 rounded bg-blue-200" />
              <div className="w-3/4 h-2 rounded bg-blue-100" />
              <div className="w-full h-2 rounded bg-blue-100" />
            </div>

            <div className="mt-4 w-12 h-8 rounded bg-blue-500" />
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 20V9l8-5 8 5v11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M8 20v-6h8v6M9 9h6"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink">
            IT Consulting
          </h3>

          <p className="mt-2 text-sm leading-[1.4] text-ink max-w-[260px]">
            Strategic technology guidance that helps businesses make smarter
            decisions.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          11 — VC FUNDING
      ===================================================== */}
      <Link
        to="/services/vc-funding"
        className="
          group relative overflow-hidden rounded-2xl
          border border-blue-200
          bg-gradient-to-br from-white via-white to-blue-50
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]
        "
      >
        {/* Growth visual */}
        <div
          className="
            absolute right-[-10px] bottom-[-5px]
            w-[190px] h-[170px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
          "
        >
          <div className="absolute inset-0 bg-blue-100/50 blur-3xl rounded-full" />

          <div className="absolute right-8 bottom-8 flex items-end gap-3">
            <div className="w-7 h-12 rounded-t-md bg-blue-200" />
            <div className="w-7 h-20 rounded-t-md bg-blue-300" />
            <div className="w-7 h-28 rounded-t-md bg-blue-500" />

            <div className="absolute right-[-15px] top-[-20px] text-blue-600 text-4xl font-bold">
              ↗
            </div>
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 18V9M9 18v-5M14 18v-8M19 18V4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M4 7l5-3 5 2 5-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink">
            VC Funding
          </h3>

          <p className="mt-2 text-sm leading-[1.4] text-ink max-w-[270px]">
            Helping startups and growing businesses connect with the right
            funding opportunities.
          </p>

          <span className="mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>


      {/* =====================================================
          12 — DIGITAL MARKETING & SEO
      ===================================================== */}
      <Link
        to="/services/digital-marketing-seo"
        className="
          group relative overflow-hidden rounded-2xl
          border border-orange-200
          bg-gradient-to-br from-white via-white to-orange-50
          shadow-[0_4px_20px_rgba(249,115,22,0.07)]
          lg:col-span-2
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-orange-300
          hover:shadow-[0_14px_35px_rgba(249,115,22,0.16)]
        "
      >
        {/* Marketing visual */}
        <div
          className="
            absolute right-[-15px] bottom-[-25px]
            w-[400px] h-[220px]
            transition-transform duration-500 ease-out
            group-hover:scale-[1.03]
          "
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70 rotate-[-3deg]" />

          <div className="absolute right-8 bottom-5 w-[300px] h-[155px] rounded-xl bg-white border border-orange-100 shadow-xl p-5">
            <div className="flex items-end gap-4 h-full">

              <div className="flex-1">
                <div className="w-20 h-3 rounded bg-orange-100" />

                <div className="mt-5 flex items-end gap-2 h-20">
                  <div className="w-5 h-8 rounded-t bg-orange-200" />
                  <div className="w-5 h-12 rounded-t bg-orange-300" />
                  <div className="w-5 h-16 rounded-t bg-orange-400" />
                  <div className="w-5 h-20 rounded-t bg-orange-500" />
                </div>
              </div>

              <div className="w-28 h-20 rounded-lg bg-orange-50 flex items-center justify-center">
                <span className="text-orange-500 text-3xl font-bold">
                  ↗
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 18V9M9 18v-5M14 18v-8M19 18V4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M4 7l5-3 5 2 5-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-xl font-extrabold text-ink">
            Digital Marketing & SEO
          </h3>

          <p className="mt-3 text-sm md:text-[15px] leading-[1.4] text-ink max-w-[390px]">
            Data-driven digital marketing and SEO strategies that improve
            visibility, reach and business growth.
          </p>

          <span className="mt-auto text-orange-500 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>

        </div>
      </div>
    </section>
  );
}
