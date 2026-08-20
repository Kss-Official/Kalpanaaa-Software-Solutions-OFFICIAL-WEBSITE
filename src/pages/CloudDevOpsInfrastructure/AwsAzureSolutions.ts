import type { Service } from "../../data/site";

export const awsAzureSolutions: Service = {
  slug: "aws-azure-solutions",
  title: "AWS & Azure Solutions",
  tag: "AWS-AZURE",
  description:
    "Cloud-native infrastructure on AWS and Azure for scalable applications, secure networking, managed databases, observability, and resilient deployment patterns.",
  icon: "Cloud",
  keyFeatures: [
    "AWS and Azure environment setup for production workloads",
    "Managed compute, storage, database, and networking design",
    "Identity, access, secrets, and security baseline configuration",
    "Highly available application hosting and autoscaling",
    "Cloud monitoring, logging, alerting, and incident visibility",
    "Cost controls, tagging standards, and resource governance",
  ],
  techStack: [
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "PostgreSQL",
    "Redis",
    "Grafana",
  ],
};
