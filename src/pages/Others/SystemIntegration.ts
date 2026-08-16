import type { Service } from "../../data/site";

export const systemIntegration: Service = {
  slug: "system-integration",
  title: "System Integration",
  tag: "INTEGRATE",
  description:
    "System integration for applications, APIs, databases, cloud services, CRMs, ERPs, payment systems, and internal tools so business workflows operate as one connected platform.",
  icon: "PlugZap",
  keyFeatures: [
    "API integration across internal and third-party systems",
    "Data synchronization, transformation, and validation pipelines",
    "Legacy application modernization and interoperability layers",
    "Webhook, queue, and event-driven workflow implementation",
    "Authentication, authorization, and audit logging across systems",
    "Monitoring, retry, error handling, and operational dashboards",
  ],
  techStack: [
    "Node.js",
    "FastAPI",
    "GraphQL",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "GitHub Actions",
  ],
};
