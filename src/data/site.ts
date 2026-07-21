export type Statistic = { value: string; label: string };
export type Technology = { name: string; category: string; why: string; icon: string };
export type Founder = { name: string; role: string; bio: string; focus: string[] };
export type Service = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
  keyFeatures: string[];
  techStack: string[];
};
export type Industry = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string;
};
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  icon: string;
};

export const NAP = {
  name: "Kalpanaaaa Software Solutions Pvt. Ltd.",
  email: "hello@kalpanaaa.com",
  city: "Jaipur",
  region: "Rajasthan",
  country: "IN",
  founded: "2026",
  addressLine: "Jaipur, Rajasthan, India",
};

export const STATISTICS: Statistic[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "< 200ms", label: "API Latency SLA" },
  { value: "24/7", label: "Operations Support" },
  { value: "100%", label: "Operational Security" },
];

export const TECHNOLOGIES: Technology[] = [
  { name: "Next.js", category: "Frontend Framework", why: "Industry-standard production React framework", icon: "Code2" },
  { name: "React", category: "UI Library", why: "Component-based declarative UI", icon: "Component" },
  { name: "TypeScript", category: "Language", why: "Strong typing across client & server", icon: "FileCode" },
  { name: "FastAPI", category: "Backend API", why: "High-performance async Python APIs", icon: "Server" },
  { name: "PostgreSQL", category: "Database", why: "ACID-compliant relational database", icon: "Database" },
  { name: "Redis", category: "Cache", why: "Ultra-low latency in-memory store", icon: "Zap" },
  { name: "AWS", category: "Cloud", why: "Scalable infrastructure with global reach", icon: "Cloud" },
  { name: "Docker", category: "Containers", why: "Reproducible builds with isolated environments", icon: "Box" },
  { name: "Tailwind CSS", category: "Styling", why: "Utility-first for design system consistency", icon: "Palette" },
  { name: "CI/CD Actions", category: "DevOps", why: "Continuous integration + automated pipelines", icon: "GitBranch" },
  { name: "LangChain", category: "AI Orchestration", why: "LLM framework for chains and RAG", icon: "Brain" },
  { name: "pgvector", category: "Vector DB", why: "PostgreSQL-native vector search for RAG", icon: "Search" },
];

export const FOUNDERS: Founder[] = [
  {
    name: "Gaurav Kr Tripathi",
    role: "Founder, MD & CTO",
    bio: "Systems engineer turned founder. Architecting bespoke digital transformation for regulated industries. Owns technical delivery across all engagements.",
    focus: ["Distributed systems", "DevOps", "AI engineering", "Architecture review"],
  },
  {
    name: "Akshit Ujjain",
    role: "Co-Founder & CEO",
    bio: "Operator-led growth. Builds the commercial engine, owns client relationships, and runs the delivery playbook for every engagement.",
    focus: ["Go-to-market", "Strategic accounts", "Delivery leadership", "Partner ecosystem"],
  },
  {
    name: "Rahul Kr Pathak",
    role: "Chief Operating Officer",
    bio: "Runs day-to-day operations, hiring, and process. Ensures every project ships on time, on spec, with zero-defect standards.",
    focus: ["Operations", "People", "Quality systems", "Compliance"],
  },
];

export const SERVICES: Service[] = [
  {
    slug: "web-engineering",
    title: "Full-Stack Web Engineering",
    tag: "WEB-ENG",
    description: "Scalable, secure, high-performance web apps using Next.js, React, Node.js, GraphQL/REST. Engineered for enterprise latency thresholds and user conversion.",
    icon: "LayoutTemplate",
    keyFeatures: [
      "Frontend: Next.js 14 App Router",
      "Backend: Node.js + FastAPI",
      "GraphQL & REST APIs",
      "Real-time with WebSockets",
      "Server Components + Streaming SSR",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Tailwind CSS"],
  },
  {
    slug: "mobile-apps",
    title: "Omnichannel Mobile Apps",
    tag: "MOBILE",
    description: "Bespoke iOS and Android solutions with seamless performance, offline-first capabilities, and responsive, fluid interfaces.",
    icon: "Smartphone",
    keyFeatures: [
      "React Native + Expo",
      "Swift (iOS native)",
      "Kotlin (Android native)",
      "Offline-first with sync",
      "Push notifications",
      "App Store + Play Store deployment",
    ],
    techStack: ["React Native", "Swift", "Kotlin", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "Firebase"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud DevOps & Infrastructure",
    tag: "DEVOPS",
    description: "CI/CD pipelines, containerization, infrastructure as code. Resilient cloud on AWS and GCP with automated failover and zero-downtime deployments.",
    icon: "Server",
    keyFeatures: [
      "CI/CD with GitHub Actions",
      "Docker + Kubernetes",
      "Terraform IaC",
      "AWS ECS/Fargate",
      "GCP Cloud Run",
      "Monitoring with Datadog + Prometheus",
      "Zero-downtime blue-green deployments",
    ],
    techStack: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    slug: "qa-testing",
    title: "Enterprise Quality Assurance",
    tag: "QA-VERIFY",
    description: "Automated regression pipelines, unit/integration testing suites, performance load tests. Zero-defect production rollouts.",
    icon: "ShieldCheck",
    keyFeatures: [
      "Playwright E2E",
      "Vitest + Jest unit tests",
      "k6 load testing",
      "Visual regression",
      "Accessibility auditing (axe-core)",
      "Security scanning (SAST/SCA)",
      "100% coverage enforcement",
    ],
    techStack: ["Playwright", "Vitest", "k6", "axe-core", "Jest", "GitHub Actions", "SonarQube"],
  },
  {
    slug: "rag-systems",
    title: "RAG Systems & AI Engineering",
    tag: "AI-RAG",
    description: "Retrieval-Augmented Generation pipelines, vector databases, LLM orchestration, and production-grade AI features engineered for accuracy and observability.",
    icon: "Brain",
    keyFeatures: [
      "Vector search with pgvector + Pinecone",
      "Chunking + embedding strategies",
      "LangChain/LlamaIndex orchestration",
      "Streaming responses with fallback",
      "Guardrails + evals + observability",
      "Fine-tuning + distillation pipelines",
    ],
    techStack: ["LangChain", "LlamaIndex", "pgvector", "Pinecone", "OpenAI", "Anthropic", "Ollama", "FastAPI", "Python", "PostgreSQL", "Redis"],
  },
  {
    slug: "multi-agent-automation",
    title: "Multi-Agent Automation",
    tag: "AGENTS",
    description: "Autonomous agent systems with tool use, memory, and human-in-the-loop oversight. Workflow automation that compounds.",
    icon: "Bot",
    keyFeatures: [
      "LangGraph + CrewAI orchestration",
      "ReAct + planning loop patterns",
      "Tool calling + function routing",
      "Long-term memory with checkpoints",
      "Human-in-the-loop approval gates",
      "Observability + tracing with LangSmith",
    ],
    techStack: ["LangGraph", "CrewAI", "LangSmith", "OpenAI", "Anthropic", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "government",
    title: "Government",
    short: "Compliance-first systems for public sector",
    description: "Digital portals, licensing workflows, and municipal automation for regulatory transparency and high-volume citizen access.",
    features: [
      "G2C standards compliance",
      "Automated permit workflows",
      "Federal data sovereignty",
      "Accessibility WCAG 2.1 AA",
      "Multi-language support",
    ],
    icon: "Landmark",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Clinical and patient-facing platforms",
    description: "HIPAA-aligned platforms, EHR integration, patient data management, and telemedicine built for clinical safety.",
    features: [
      "HIPAA-aligned architecture",
      "EHR/EMR integration",
      "Audit logging",
      "End-to-end encryption",
      "Clinical workflow automation",
    ],
    icon: "Stethoscope",
  },
  {
    slug: "finance",
    title: "Finance",
    short: "Precision engineering for financial systems",
    description: "Trading systems, settlement, compliance reporting, and fraud detection - engineered with millisecond precision.",
    features: [
      "Low-latency trade execution",
      "Settlement reconciliation",
      "Regulatory reporting (RBI/SEBI)",
      "Fraud detection pipelines",
      "Audit trails",
    ],
    icon: "TrendingUp",
  },
  {
    slug: "education",
    title: "Education",
    short: "Learning platforms built for scale",
    description: "LMS, student information systems, adaptive learning, and campus management for institutions at scale.",
    features: [
      "LMS + SIS",
      "Adaptive learning paths",
      "Campus management",
      "Online assessment",
      "Parent + student portals",
    ],
    icon: "GraduationCap",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "railtrace",
    client: "RailTrace",
    title: "Real-time Railway Asset Tracking",
    industry: "Government Infrastructure",
    description: "Real-time railway asset management system with live GPS tracking, automated alert routing, 40% reduction in permit processing time.",
    metrics: [
      { label: "Permit Processing Time Reduced", value: "40%" },
      { label: "Assets Tracked in Real-time", value: "200+" },
      { label: "Uptime", value: "99.97%" },
      { label: "Deployment Time", value: "8 months" },
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "AWS", "WebSocket"],
    icon: "Train",
  },
  {
    slug: "medichain",
    client: "MediChain",
    title: "HIPAA-Aligned Patient Data Platform",
    industry: "Healthcare Data Platform",
    description: "Patient data management platform with end-to-end encryption, role-based access control, 99.97% uptime over 8 months.",
    metrics: [
      { label: "Uptime over 8 months", value: "99.97%" },
      { label: "Patient records managed", value: "50,000+" },
      { label: "Encryption", value: "End-to-End" },
      { label: "Deployment", value: "8 months" },
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "HIPAA", "AWS RDS"],
    icon: "Stethoscope",
  },
  {
    slug: "kucafe",
    client: "KUCafe",
    title: "University Cafe Ordering System",
    industry: "Education",
    description: "University cafe ordering system with real-time menu, payment integration, and live order tracking.",
    metrics: [
      { label: "Orders Processed", value: "12,000+" },
      { label: "Average Order Time", value: "90s" },
      { label: "Student Satisfaction", value: "96%" },
      { label: "Mobile", value: "100%" },
    ],
    tags: ["React Native", "FastAPI", "PostgreSQL", "Stripe", "WebSocket"],
    icon: "UtensilsCrossed",
  },
];
