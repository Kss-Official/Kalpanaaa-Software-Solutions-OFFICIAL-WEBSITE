import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Learnova",
    category: "Education Platform",
    description:
      "A full-stack e-learning platform designed for students, instructors and administrators with dedicated dashboards and learning management capabilities.",
    image: "/LearnoveImg-1.webp",
    href: "/projects/learnova",
    tags: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    position:
      "lg:absolute lg:left-[7%] lg:top-[30px] lg:w-[35%] lg:-rotate-[5deg] lg:z-10",
  },
  {
    title: "HireBridge",
    category: "Recruitment Platform",
    description:
      "A role-based job scraping and recruitment platform that connects students with job opportunities and provides hiring managers with recruitment tools.",
    image: "/HirebridgeImg-1.webp",
    href: "/projects/hirebridge",
    tags: ["React", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL"],
    position:
      "lg:absolute lg:left-1/2 lg:top-0 lg:w-[35%] lg:-translate-x-1/2 lg:z-30",
  },
  {
    title: "Bondly",
    category: "Travel Discovery",
    description:
      "A travel discovery platform that helps users discover, explore, post stories, chat with people and connect with travel destinations and experiences.",
    image: "/BondlyImg-1.webp",
    href: "/projects/bondly",
    tags: ["React", "Node.js", "Hono", "PostgreSQL", "Redis"],
    position:
      "lg:absolute lg:right-[7%] lg:top-[26px] lg:w-[35%] lg:rotate-[5deg] lg:z-20",
  },
];

export default function ProjectSection() {
  const [frontCard, setFrontCard] = useState<string | null>(null);

  return (
    <section className="relative overflow-x-hidden overflow-y-visible site-surface py-14 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-[52%] h-64 bg-[radial-gradient(circle,rgba(23,105,213,.08),transparent_66%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70">
            Industries we serve
          </p>

          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
            Projects That
            <br />
            <span className="text-brand">Make an Impact</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-ink">
            We build digital solutions that drive growth, solve real problems
            <br className="hidden md:block" />
            and create long-lasting impact for the businesses.
          </p>
        </div>

        {/* ================= PROJECT SHOWCASE ================= */}
        <div className="relative z-0 isolate mt-9 grid grid-cols-1 gap-7 md:grid-cols-3 lg:block lg:h-[505px] lg:pb-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={project.href}
              onMouseEnter={() => setFrontCard(project.title)}
              onMouseLeave={() => setFrontCard(null)}
              className={`
                group relative block overflow-hidden rounded-[24px]
                border-2 border-[#74aefb] bg-white
                shadow-[0_20px_38px_-24px_rgba(23,105,213,.58)]
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:rotate-0 hover:scale-[1.025]
                hover:shadow-[0_30px_52px_-22px_rgba(23,105,213,.72)]
                focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-300
                ${project.position}
              `}
              style={{
                animation: `project-card-rise .7s ${index * 120}ms ease-out both`,
                zIndex: frontCard === project.title ? 50 : undefined,
              }}
            >
              <div className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#8ec1ff] bg-white/90 text-brand shadow-[0_10px_22px_-14px_rgba(23,105,213,.7)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <ExternalLink size={17} strokeWidth={2.5} />
              </div>

              <div className="p-3.5 pb-0">
                <div className="relative h-[200px] overflow-hidden rounded-[16px] bg-[#071021] shadow-[inset_0_0_0_1px_rgba(255,255,255,.15)] md:h-[190px] lg:h-[185px]">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex min-h-[270px] flex-col p-6 md:min-h-[300px] lg:min-h-[250px]">
                <p className="text-xs font-extrabold uppercase tracking-wide text-brand">
                  {project.category}
                </p>

                <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-black md:text-[26px]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm font-semibold leading-[1.45] text-black">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-auto inline-flex items-center justify-end gap-2 pt-5 text-sm font-extrabold text-brand transition-all duration-300 group-hover:gap-3">
                  View project
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes project-card-rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.96);
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
