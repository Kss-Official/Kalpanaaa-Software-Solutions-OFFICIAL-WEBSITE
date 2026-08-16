import type { Service } from "../../data/site";

export const securityAuditing: Service = {
  slug: "security-auditing",
  title: "Security Auditing",
  tag: "AUDIT",
  description:
    "Structured security audits for applications, cloud infrastructure, APIs, and release processes with prioritized findings, remediation guidance, and verification support.",
  icon: "ClipboardCheck",
  keyFeatures: [
    "Application, API, cloud, and CI/CD security assessment",
    "Access control, data flow, and dependency review",
    "Configuration checks for infrastructure and deployments",
    "Risk-ranked findings with practical remediation steps",
    "Evidence collection for internal compliance and governance",
    "Post-fix validation to confirm vulnerabilities are closed",
  ],
  techStack: [
    "SonarQube",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "PostgreSQL",
    "Grafana",
  ],
};
