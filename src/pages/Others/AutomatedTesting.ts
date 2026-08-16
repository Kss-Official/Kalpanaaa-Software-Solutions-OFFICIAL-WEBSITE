import type { Service } from "../../data/site";

export const automatedTesting: Service = {
  slug: "automated-testing",
  title: "Automated Testing",
  tag: "AUTO-QA",
  description:
    "Automated testing systems that protect releases with unit, integration, API, end-to-end, visual, and accessibility checks built into CI/CD pipelines.",
  icon: "TestTube2",
  keyFeatures: [
    "Unit and integration test setup for frontend and backend",
    "End-to-end browser automation for user workflows",
    "API contract, auth, and error-path testing",
    "Visual regression and accessibility automation",
    "CI quality gates with coverage and flaky-test controls",
    "Reusable test fixtures, mocks, and reporting patterns",
  ],
  techStack: [
    "Playwright",
    "Vitest",
    "Jest",
    "GitHub Actions",
    "axe-core",
    "Node.js",
    "FastAPI",
    "TypeScript",
  ],
};
