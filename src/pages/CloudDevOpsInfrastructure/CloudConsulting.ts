import type { Service } from "../../data/site";

export const cloudConsulting: Service = {
  slug: "cloud-consulting",
  title: "Cloud Consulting",
  tag: "CLOUD",
  description:
    "Cloud strategy, architecture assessment, migration planning, and cost governance for teams moving from ad hoc infrastructure to reliable production platforms.",
  icon: "CloudCog",
  keyFeatures: [
    "Cloud readiness audits and architecture reviews",
    "Migration roadmap for applications, data, and workloads",
    "Reliability, security, and cost optimization planning",
    "Cloud landing zones with account and network structure",
    "Backup, disaster recovery, and business continuity design",
    "Operating model guidance for DevOps and platform teams",
  ],
  techStack: [
    "AWS",
    "GCP",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
  ],
};
