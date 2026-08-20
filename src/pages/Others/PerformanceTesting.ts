import type { Service } from "../../data/site";

export const performanceTesting: Service = {
  slug: "performance-testing",
  title: "Performance Testing",
  tag: "PERF",
  description:
    "Performance testing and optimization for applications, APIs, databases, and cloud workloads, focused on speed, scale, reliability, and production confidence.",
  icon: "Gauge",
  keyFeatures: [
    "Load, stress, spike, and endurance test planning",
    "API latency, throughput, and bottleneck analysis",
    "Frontend performance audits for Core Web Vitals",
    "Database query, caching, and capacity optimization",
    "Cloud scaling, autoscaling, and resource tuning",
    "Performance reports with thresholds and remediation roadmap",
  ],
  techStack: [
    "k6",
    "Playwright",
    "Prometheus",
    "Grafana",
    "Redis",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
};
