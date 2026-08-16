import type { Service } from "../../data/site";

export const cloudSecurity: Service = {
  slug: "cloud-security",
  title: "Cloud Security",
  tag: "CLOUD-SEC",
  description:
    "Cloud security design and hardening for production environments, including identity, networks, secrets, monitoring, backup, and least-privilege infrastructure controls.",
  icon: "CloudCog",
  keyFeatures: [
    "Cloud account, network, and workload security baseline",
    "IAM role design with least-privilege access policies",
    "Secrets, encryption, backup, and recovery controls",
    "Container, Kubernetes, and infrastructure hardening",
    "Logging, alerting, and incident visibility for cloud systems",
    "Security review for Terraform and deployment pipelines",
  ],
  techStack: [
    "AWS",
    "GCP",
    "Terraform",
    "Kubernetes",
    "Docker",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
  ],
};
