import type { Service } from "../../data/site";

export const qualityAssurance: Service = {
  slug: "quality-assurance",
  title: "Quality Assurance",
  tag: "QA",
  description:
    "End-to-end quality assurance for web, mobile, cloud, and AI products, combining manual review, automated test coverage, release gates, and defect prevention.",
  icon: "ShieldCheck",
  keyFeatures: [
    "Functional, regression, integration, and smoke testing",
    "Manual exploratory QA for critical user journeys",
    "Release readiness checks with defect triage",
    "Cross-browser and responsive interface validation",
    "Accessibility and usability quality checks",
    "QA reporting with risk, coverage, and remediation status",
  ],
  techStack: [
    "Playwright",
    "Vitest",
    "Jest",
    "axe-core",
    "GitHub Actions",
    "SonarQube",
    "React",
    "TypeScript",
  ],
};
