import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CloudUpload,
  Code2,
  Headphones,
  LayoutPanelTop,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

type CardVariant = "tall" | "wide" | "square";

/**
 * `width`/`height` are the intrinsic pixel sizes of the WebP files. The card CSS constrains
 * both axes, so these do not change layout — they give the browser the aspect ratio up front
 * so nothing reflows as the images stream in.
 */
const services: Array<{
  title: string;
  description: string;
  href: string;
  image: string;
  width: number;
  height: number;
  Icon: LucideIcon;
  variant: CardVariant;
  className: string;
  imageClassName?: string;
}> = [
    {
      title: "Website Development",
      description:
        "We build fast, responsive and SEO-friendly websites that help your business stand out online.",
      href: "/services/web-engineering",
      image: "/service-website.webp",
      width: 800,
      height: 534,
      Icon: LayoutPanelTop,
      variant: "tall",
      className: "lg:col-start-1 lg:row-start-1 lg:row-end-3",
      imageClassName: "!w-[100%] !max-w-[400px] lg:-translate-y-12 lg:scale-[1.12] origin-bottom",
    },
    {
      title: "Mobile App Development",
      description:
        "Powerful mobile applications for Android & iOS that deliver seamless user experiences.",
      href: "/services/mobile-apps",
      image: "/service-mobile-app.webp",
      width: 800,
      height: 1201,
      Icon: Smartphone,
      variant: "square",
      className: "lg:col-start-2 lg:row-start-1",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to solve your unique business challenges.",
      href: "/services/custom-software-development",
      image: "/service-custom-software.webp",
      width: 800,
      height: 532,
      Icon: Code2,
      variant: "square",
      className: "lg:col-start-3 lg:row-start-1",
      imageClassName: "lg:!h-[140%] lg:!w-[140%] lg:scale-[1.35] origin-bottom-right",
    },
    {
      title: "AI Chatbox & Automation",
      description:
        "Automate conversations, reduce manual work, and improve customer support with AI.",
      href: "/services/ai-chatbots",
      image: "/service-ai-chatbot.webp",
      width: 800,
      height: 518,
      Icon: Bot,
      variant: "wide",
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2",
    },
    {
      title: "UI/UX Design",
      description:
        "We design intuitive and engaging interfaces that enhance user satisfaction and drive results.",
      href: "/services/ui-ux-design",
      image: "/service-ui-ux.webp",
      width: 800,
      height: 534,
      Icon: MonitorSmartphone,
      variant: "wide",
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-3",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Scalable cloud solutions and DevOps practices to ensure performance, reliability, and security.",
      href: "/services/cloud-devops",
      image: "/service-cloud-devops.webp",
      width: 800,
      height: 533,
      Icon: CloudUpload,
      variant: "tall",
      className: "lg:col-start-3 lg:row-start-3 lg:row-end-5",
      imageClassName: "!w-[100%] !max-w-[400px] lg:-translate-y-12 lg:scale-[1.12] origin-bottom",
    },
    {
      title: "Cyber Security",
      description:
        "Protect your data and systems with our robust security solutions and best practices.",
      href: "/services/application-security",
      image: "/service-cybersecurity.webp",
      width: 800,
      height: 533,
      Icon: ShieldCheck,
      variant: "square",
      className: "lg:col-start-1 lg:row-start-4",
      imageClassName: "lg:!h-[140%] lg:!w-[140%] lg:scale-[1.35] origin-bottom-right",
    },
    {
      title: "Software Maintenance & Support",
      description:
        "We keep your software running smoothly with continuous support and maintenance.",
      href: "/services/it-consulting",
      image: "/service-maintenance.webp",
      width: 800,
      height: 534,
      Icon: Headphones,
      variant: "square",
      className: "lg:col-start-2 lg:row-start-4",
      imageClassName: "lg:!h-[140%] lg:!w-[140%] lg:scale-[1.35] origin-bottom-right",
    },
  ];

const gradients: Record<CardVariant, string> = {
  tall: "linear-gradient(180deg, #ffffff 38%, #eaf3ff 72%, #7eb6ff 100%)",
  wide: "linear-gradient(90deg, #ffffff 42%, #eaf3ff 72%, #7eb6ff 100%)",
  square: "linear-gradient(135deg, #ffffff 48%, #eaf3ff 78%, #7eb6ff 100%)",
};

function ServiceMosaicCard({
  title,
  description,
  href,
  image,
  width,
  height,
  Icon,
  variant,
  className,
  imageClassName = "",
}: (typeof services)[number]) {
  const isTall = variant === "tall";

  return (
    <Link
      to={href}
      className={`group relative isolate flex min-h-[210px] overflow-hidden rounded-[20px] bg-white shadow-[0_8px_22px_rgba(15,40,80,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,40,80,0.13)] ${isTall ? "flex-col lg:min-h-0" : "flex-col sm:flex-row lg:min-h-0"
        } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: gradients[variant] }}
      />

      <div
        className={`relative z-10 flex min-w-0 flex-col p-4 sm:p-5 md:p-6 ${isTall ? "shrink-0" : "w-full sm:w-[62%] sm:pr-3 lg:w-[60%]"
          }`}
      >
        <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] border border-[#D0E2FB] text-brand shadow-sm">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
        </div>

        <h3 className="font-display text-xl sm:text-[26px] md:text-[32px] font-extrabold leading-[1.08] sm:leading-[0.98] tracking-tight text-brand">
          {title}
        </h3>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-[18px] font-semibold leading-[1.3] sm:leading-[1.1] text-[#344052]">
          {description}
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand transition-transform duration-300 group-hover:translate-x-1">
          Learn more <ArrowRight size={14} />
        </span>
      </div>

      <div
        className={`relative z-0 flex min-h-[140px] items-end justify-center overflow-hidden ${isTall
            ? "min-h-[160px] flex-1 px-2 pb-0 pt-1"
            : "w-full flex-1 sm:w-[38%] sm:min-h-0 lg:w-[40%] lg:self-stretch"
          }`}
      >
        <img
          src={image}
          alt=""
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`pointer-events-none object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04] ${isTall
              ? "h-full w-[86%] max-w-[320px]"
              : "h-[85%] w-[88%] max-h-[170px] object-right-bottom sm:absolute sm:bottom-0 sm:right-0 sm:h-[86%] sm:w-[92%] sm:max-h-none"
            } ${imageClassName}`}
        />
      </div>
    </Link>
  );
}

export default function ServiceSection() {
  return (
    <section className="py-16 md:py-16">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we build"
            title="Bespoke engineering capabilities"
            description="Full-lifecycle software engineering across web, mobile, cloud, QA, RAG, and multi-agent systems."
          />

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand transition-all duration-300 hover:underline"
          >
            All services
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[minmax(200px,auto)_minmax(168px,auto)_minmax(176px,auto)_minmax(200px,auto)]">
          {services.map((service) => (
            <ServiceMosaicCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
