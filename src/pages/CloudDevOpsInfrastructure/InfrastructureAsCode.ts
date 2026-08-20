import type { Service } from "../../data/site";

export const infrastructureAsCode: Service = {
  slug: "infrastructure-as-code",
  title: "Infrastructure as Code",
  tag: "IAC",
  description:
    "Version-controlled cloud infrastructure using reusable modules, reviewable changes, secure state management, and predictable provisioning workflows.",
  icon: "FileCode",
  keyFeatures: [
    "Terraform modules for repeatable cloud infrastructure",
    "Environment separation for development, staging, and production",
    "Remote state, locking, secrets handling, and access controls",
    "Plan, review, apply, and drift detection workflows",
    "Network, compute, database, and observability provisioning",
    "Documentation and handover for long-term platform ownership",
  ],
  techStack: [
    "Terraform",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "PostgreSQL",
    "Grafana",
  ],
};
