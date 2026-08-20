import type { Service } from "../../data/site";

export const identityAccessManagement: Service = {
  slug: "identity-access-management",
  title: "Identity & Access Management",
  tag: "IAM",
  description:
    "Identity and access management implementation for apps and cloud platforms, with role-based permissions, approval flows, audit trails, and secure account lifecycle controls.",
  icon: "KeyRound",
  keyFeatures: [
    "Role-based access control for users, admins, and operators",
    "Single sign-on, MFA, and secure session architecture",
    "Cloud IAM policy design and privilege minimization",
    "Service accounts, API keys, secrets, and token governance",
    "Audit logs for sensitive actions and access changes",
    "User provisioning, deprovisioning, and access review workflows",
  ],
  techStack: [
    "AWS",
    "GCP",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "GitHub Actions",
    "Docker",
  ],
};
