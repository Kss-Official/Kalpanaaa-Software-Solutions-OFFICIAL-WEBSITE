import type { Service } from "../../data/site";

export const dockerKubernetes: Service = {
  slug: "docker-kubernetes",
  title: "Docker & Kubernetes",
  tag: "CONTAINERS",
  description:
    "Containerized applications and Kubernetes platforms with predictable deployments, service discovery, autoscaling, resilience, and production-grade operations.",
  icon: "Container",
  keyFeatures: [
    "Dockerfile, image, and compose setup for local parity",
    "Kubernetes deployments, services, ingress, and secrets",
    "Autoscaling, health checks, probes, and rollout strategies",
    "Cluster observability with metrics, logs, and dashboards",
    "Container security scanning and image hardening",
    "Production runbooks for upgrades, recovery, and releases",
  ],
  techStack: [
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Redis",
  ],
};
