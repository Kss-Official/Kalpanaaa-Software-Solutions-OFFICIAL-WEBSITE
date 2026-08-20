import type { Service } from "../../data/site";

export const itConsulting: Service = {
  slug: "it-consulting",
  title: "IT Consulting",
  tag: "CONSULT",
  description:
    "Strategic IT consulting for product planning, system architecture, cloud modernization, automation, security, and delivery execution across growing businesses.",
  icon: "Lightbulb",
  keyFeatures: [
    "Technology roadmap and product architecture advisory",
    "Build-versus-buy guidance for platforms and integrations",
    "Cloud, DevOps, AI, security, and QA strategy alignment",
    "Technical due diligence for vendors, systems, and codebases",
    "Delivery planning, team workflows, and engineering governance",
    "Cost, risk, scalability, and maintainability recommendations",
  ],
  techStack: [
    "Next.js",
    "React",
    "FastAPI",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Terraform",
    "GitHub Actions",
  ],
};
