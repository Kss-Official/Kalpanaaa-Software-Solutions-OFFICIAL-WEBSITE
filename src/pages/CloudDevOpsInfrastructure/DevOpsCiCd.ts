import type { Service } from "../../data/site";

export const devOpsCiCd: Service = {
  slug: "devops-ci-cd",
  title: "DevOps & CI/CD",
  tag: "CI/CD",
  description:
    "Automated build, test, release, and deployment pipelines that help teams ship faster with rollback paths, quality gates, and repeatable delivery controls.",
  icon: "GitBranch",
  keyFeatures: [
    "CI pipelines for linting, testing, security checks, and builds",
    "Automated deployment workflows across staging and production",
    "Release gates, approvals, rollback, and environment promotion",
    "Artifact versioning and container image publishing",
    "Infrastructure and application pipeline observability",
    "Branching, review, and release workflow standardization",
  ],
  techStack: [
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Vitest",
    "Jest",
    "SonarQube",
  ],
};
