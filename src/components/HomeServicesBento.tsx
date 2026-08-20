import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code2,
  Palette,
  Bot,
  Server,
  ShieldCheck,
  Wrench
} from "lucide-react";

export function HomeServicesBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
      {/* 1. Website Development (Tall Card - Left Column, Rows 1-2) */}
      <div className="lg:col-span-4 lg:row-span-2 group relative rounded-3xl bg-gradient-to-b from-white via-white to-sky-50/40 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
            <Globe size={20} />
          </div>
          <h3 className="font-display text-2xl font-extrabold text-ink group-hover:text-brand transition-colors">
            Website Development
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
            We build fast, responsive and SEO-friendly websites that help your business stand out online.
          </p>
          <Link
            to="/services/web-engineering"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-5 hover:gap-2.5 transition-all"
          >
            Learn more <ArrowRight size={14} />
          </Link>
        </div>
        <div className="relative mt-6 pt-4 flex items-end justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
          <img
            src="/Service-Section-Images/WebsiteDevelopment.png"
            alt="Website Development"
            className="relative w-full max-w-[340px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(23,105,213,0.15)]"
          />
        </div>
      </div>

      {/* 2. Mobile App Development (Middle Column, Top) */}
      <div className="lg:col-span-4 group relative rounded-3xl bg-gradient-to-br from-white via-white to-sky-50/40 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 items-center relative z-10">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <Smartphone size={20} />
            </div>
            <h3 className="font-display text-xl font-extrabold text-ink group-hover:text-brand transition-colors">
              Mobile App Development
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              Powerful mobile applications for Android & iOS that deliver seamless user experiences.
            </p>
            <Link
              to="/services/mobile-apps"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-4 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/10 rounded-full blur-xl opacity-50 pointer-events-none" />
            <img
              src="/Service-Section-Images/MobileAppDev.png"
              alt="Mobile App Development"
              className="relative w-full max-w-[160px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(23,105,213,0.15)]"
            />
          </div>
        </div>
      </div>

      {/* 3. Custom Software Development (Right Column, Top) */}
      <div className="lg:col-span-4 group relative rounded-3xl bg-gradient-to-br from-white via-white to-sky-50/40 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 items-center relative z-10">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <Code2 size={20} />
            </div>
            <h3 className="font-display text-xl font-extrabold text-ink group-hover:text-brand transition-colors">
              Custom Software Development
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              Tailored software solutions designed to solve your unique business challenges.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-4 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/10 rounded-full blur-xl opacity-50 pointer-events-none" />
            <img
              src="/Service-Section-Images/customer-software-dev.png"
              alt="Custom Software Development"
              className="relative w-full max-w-[150px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(23,105,213,0.15)]"
            />
          </div>
        </div>
      </div>

      {/* 4. UI/UX Design (Wide Card - Spans Middle & Right Columns, Row 2) */}
      <div className="lg:col-span-8 group relative rounded-3xl bg-gradient-to-r from-white via-white to-blue-50/50 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="grid sm:grid-cols-[1fr_1fr] gap-6 items-center relative z-10">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <Palette size={20} />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink group-hover:text-brand transition-colors">
              UI/UX Design
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
              We design intuitive and engaging interfaces that enhance user satisfaction and drive results.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-5 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/15 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <img
              src="/Service-Section-Images/UIUXDesign.png"
              alt="UI/UX Design"
              className="relative w-full max-w-[320px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(23,105,213,0.18)]"
            />
          </div>
        </div>
      </div>

      {/* 5. AI Chatbot & Automation (Wide Card - Spans Left & Middle Columns, Row 3) */}
      <div className="lg:col-span-8 group relative rounded-3xl bg-gradient-to-r from-white via-white to-sky-50/50 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="grid sm:grid-cols-[1fr_1fr] gap-6 items-center relative z-10">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <Bot size={20} />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink group-hover:text-brand transition-colors">
              AI Chatbot & Automation
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
              Automate conversations, reduce manual work, and improve customer support with AI.
            </p>
            <Link
              to="/services/multi-agent-automation"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-5 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/15 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <img
              src="/Service-Section-Images/AIChatBotAndAutomation.png"
              alt="AI Chatbot & Automation"
              className="relative w-full max-w-[260px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(23,105,213,0.18)]"
            />
          </div>
        </div>
      </div>

      {/* 6. Cloud & DevOps (Tall Card - Right Column, Rows 3-4) */}
      <div className="lg:col-span-4 lg:row-span-2 group relative rounded-3xl bg-gradient-to-b from-white via-white to-sky-50/40 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
            <Server size={20} />
          </div>
          <h3 className="font-display text-2xl font-extrabold text-ink group-hover:text-brand transition-colors">
            Cloud & DevOps
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
            Scalable cloud solutions and DevOps practices to ensure performance, reliability, and security.
          </p>
          <Link
            to="/services/cloud-devops"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-5 hover:gap-2.5 transition-all"
          >
            Learn more <ArrowRight size={14} />
          </Link>
        </div>
        <div className="relative mt-6 pt-4 flex items-end justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
          <img
            src="/Service-Section-Images/CloudAndDevops.png"
            alt="Cloud & DevOps"
            className="relative w-full max-w-[280px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(23,105,213,0.15)]"
          />
        </div>
      </div>

      {/* 7. Cybersecurity (Bottom Left Column) */}
      <div className="lg:col-span-4 group relative rounded-3xl bg-gradient-to-br from-white via-white to-sky-50/40 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 items-center relative z-10">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display text-xl font-extrabold text-ink group-hover:text-brand transition-colors">
              Cybersecurity
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              Protect your data and systems with our robust security solutions and best practices.
            </p>
            <Link
              to="/services/qa-testing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-4 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/10 rounded-full blur-xl opacity-50 pointer-events-none" />
            <img
              src="/Service-Section-Images/Cybersecurity.png"
              alt="Cybersecurity"
              className="relative w-full max-w-[150px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(23,105,213,0.15)]"
            />
          </div>
        </div>
      </div>

      {/* 8. Software Maintenance & Support (Bottom Middle Column) */}
      <div className="lg:col-span-4 group relative rounded-3xl bg-gradient-to-br from-white via-white to-sky-50/40 border border-line/70 p-7 lg:p-8 shadow-[0_10px_30px_rgba(23,105,213,0.06)] hover:shadow-[0_20px_45px_rgba(23,105,213,0.12)] hover:border-brand/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 items-center relative z-10">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <Wrench size={20} />
            </div>
            <h3 className="font-display text-xl font-extrabold text-ink group-hover:text-brand transition-colors">
              Software Maintenance & Support
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              We keep your software running smoothly with continuous support and maintenance.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mt-4 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/10 rounded-full blur-xl opacity-50 pointer-events-none" />
            <img
              src="/Service-Section-Images/SoftwareMaintananceAndSupport.png"
              alt="Software Maintenance & Support"
              className="relative w-full max-w-[150px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(23,105,213,0.15)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
