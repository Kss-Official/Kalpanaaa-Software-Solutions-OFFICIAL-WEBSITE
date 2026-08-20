import type { Service } from "../../data/site";

export const uiUxDesign: Service = {
  slug: "ui-ux-design",
  title: "UI/UX Design",
  tag: "DESIGN",
  description:
    "Research-led interface design, clickable prototypes, product flows, and design systems that turn complex software into clear, conversion-focused user experiences.",
  icon: "Palette",
  keyFeatures: [
    "User journey mapping and product flow design",
    "Wireframes and clickable high-fidelity prototypes",
    "Design systems with reusable UI components",
    "Responsive web and mobile interface design",
    "Accessibility-minded layouts and interaction states",
    "Developer-ready handoff for faster implementation",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Vitest",
    "axe-core",
  ],
};
