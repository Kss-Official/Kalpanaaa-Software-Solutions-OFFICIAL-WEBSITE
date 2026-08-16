import type { Service } from "../../data/site";

export const applicationSecurity: Service = {
  slug: "application-security",
  title: "Application Security",
  tag: "APP-SEC",
  description:
    "Security engineering for web and mobile applications, covering secure architecture, code review, automated scanning, authentication, authorization, and release controls.",
  icon: "ShieldCheck",
  keyFeatures: [
    "Secure architecture review for frontend, backend, and APIs",
    "SAST, dependency, and secret scanning in CI pipelines",
    "Authentication, authorization, and session security hardening",
    "Input validation, API abuse prevention, and secure data handling",
    "OWASP-aligned remediation for application risks",
    "Security regression checks before production releases",
  ],
  techStack: [
    "SonarQube",
    "GitHub Actions",
    "Playwright",
    "Jest",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "Docker",
  ],
};
