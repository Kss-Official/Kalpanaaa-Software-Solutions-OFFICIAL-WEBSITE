import {
  customSoftwareDevelopment,
  eCommerceDevelopment,
  mobileAppDevelopment,
  uiUxDesign,
  webApplicationDevelopment,
} from "../pages/FullStackDevelopment";
import {
  awsAzureSolutions,
  cloudConsulting,
  devOpsCiCd,
  dockerKubernetes,
  infrastructureAsCode,
} from "../pages/CloudDevOpsInfrastructure";
import {
  aiAgents,
  aiChatbots,
  generativeAiSolutions,
  llmIntegration,
  ragApplications,
} from "../pages/GenerativeAI";
import {
  applicationSecurity,
  cloudSecurity,
  identityAccessManagement,
  securityAuditing,
  vulnerabilityAssessment,
} from "../pages/CyberSecurity";
import {
  automatedTesting,
  itConsulting,
  performanceTesting,
  qualityAssurance,
  systemIntegration,
} from "../pages/Others";

export type Statistic = {
  value: string;
  label: string;
};

export type Technology = {
  name: string;
  category: string;
  why: string;
  icon: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  image?: string;
};

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
  overview: [string, string];
  keyFeatureCards: { title: string; description: string; icon: string }[];
  challenge: { intro: string; points: string[] };
  solution: { intro: string; points: string[] };
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  icon: string;
};

export const NAP = {
  name: "Kalpanaaa Software Solutions Pvt. Ltd.",
  email: "info@kalpanaaasoftwaresolutions.in",
  phone: "+918050483560",
  whatsapp: "8050483560",
  city: "Bengaluru",
  region: "Karnataka",
  country: "IN",
  founded: "2026",
  addressLine:
    "822, 9th Main, 1st C Cross, 1st Block, HRBR Layout, Kalyan Nagar, Banaswadi, Bengaluru – 560043",
  pincode: "560043",
};

export const STATISTICS: Statistic[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "< 200ms", label: "API Latency SLA" },
  { value: "24/7", label: "Operations Support" },
  { value: "100%", label: "Operational Security" },
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: "Next.js",
    category: "Frontend Framework",
    why: "Industry-standard production React framework",
    icon: "Code2",
  },
  {
    name: "React",
    category: "UI Library",
    why: "Component-based declarative UI",
    icon: "Component",
  },
  {
    name: "TypeScript",
    category: "Language",
    why: "Strong typing across client & server",
    icon: "FileCode",
  },
  {
    name: "FastAPI",
    category: "Backend API",
    why: "High-performance async Python APIs",
    icon: "Server",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    why: "ACID-compliant relational database",
    icon: "Database",
  },
  {
    name: "Redis",
    category: "Cache",
    why: "Ultra-low latency in-memory store",
    icon: "Zap",
  },
  {
    name: "AWS",
    category: "Cloud",
    why: "Scalable infrastructure with global reach",
    icon: "Cloud",
  },
  {
    name: "Docker",
    category: "Containers",
    why: "Reproducible builds with isolated environments",
    icon: "Box",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    why: "Utility-first for design system consistency",
    icon: "Palette",
  },
  {
    name: "CI/CD Actions",
    category: "DevOps",
    why: "Continuous integration + automated pipelines",
    icon: "GitBranch",
  },
  {
    name: "LangChain",
    category: "AI Orchestration",
    why: "LLM framework for chains and RAG",
    icon: "Brain",
  },
  {
    name: "pgvector",
    category: "Vector DB",
    why: "PostgreSQL-native vector search for RAG",
    icon: "Search",
  },
];

export const FOUNDERS: Founder[] = [
  {
    name: "Gaurav Kr Tripathi",
    role: "Founder, MD & CTO",
    bio: "Systems engineer turned founder. Architecting bespoke digital transformation for regulated industries. Owns technical delivery across all engagements.",
    focus: [
      "Distributed systems",
      "DevOps",
      "AI engineering",
      "Architecture review",
    ],
    image: "/cto-profile.png",
  },
  {
    name: "Akshit Ujjain",
    role: "Co-Founder & CEO",
    bio: "Operator-led growth. Builds the commercial engine, owns client relationships, and runs the delivery playbook for every engagement.",
    focus: [
      "Go-to-market",
      "Strategic accounts",
      "Delivery leadership",
      "Partner ecosystem",
    ],
    image: "/ceo-profile.png",
  },
  {
    name: "Rahul Kr Pathak",
    role: "Chief Operating Officer",
    bio: "Runs day-to-day operations, hiring, and process. Ensures every project ships on time, on spec, with zero-defect standards.",
    focus: ["Operations", "People", "Quality systems", "Compliance"],
  },
];

/* ============================================================
   SERVICES
   ============================================================ */

export const SERVICES: Service[] = [
  webApplicationDevelopment,
  mobileAppDevelopment,
  uiUxDesign,
  eCommerceDevelopment,
  customSoftwareDevelopment,
  cloudConsulting,
  awsAzureSolutions,
  devOpsCiCd,
  dockerKubernetes,
  infrastructureAsCode,
  generativeAiSolutions,
  ragApplications,
  aiAgents,
  aiChatbots,
  llmIntegration,
  applicationSecurity,
  cloudSecurity,
  securityAuditing,
  vulnerabilityAssessment,
  identityAccessManagement,
  qualityAssurance,
  automatedTesting,
  performanceTesting,
  itConsulting,
  systemIntegration,

  {
    slug: "cloud-devops",
    title: "Cloud DevOps & Infrastructure",
    tag: "DEVOPS",
    description:
      "CI/CD pipelines, containerization, infrastructure as code. Resilient cloud on AWS and GCP with automated failover and zero-downtime deployments.",
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
    techStack: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
  },

  {
    slug: "qa-testing",
    title: "Enterprise Quality Assurance",
    tag: "QA-VERIFY",
    description:
      "Automated regression pipelines, unit/integration testing suites, performance load tests. Zero-defect production rollouts.",
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
    techStack: [
      "Playwright",
      "Vitest",
      "k6",
      "axe-core",
      "Jest",
      "GitHub Actions",
      "SonarQube",
    ],
  },

  {
    slug: "rag-systems",
    title: "RAG Systems & AI Engineering",
    tag: "AI-RAG",
    description:
      "Retrieval-Augmented Generation pipelines, vector databases, LLM orchestration, and production-grade AI features engineered for accuracy and observability.",
    icon: "Brain",
    keyFeatures: [
      "Vector search with pgvector + Pinecone",
      "Chunking + embedding strategies",
      "LangChain/LlamaIndex orchestration",
      "Streaming responses with fallback",
      "Guardrails + evals + observability",
      "Fine-tuning + distillation pipelines",
    ],
    techStack: [
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Pinecone",
      "OpenAI",
      "Anthropic",
      "Ollama",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
    ],
  },

  {
    slug: "multi-agent-automation",
    title: "Multi-Agent Automation",
    tag: "AGENTS",
    description:
      "Autonomous agent systems with tool use, memory, and human-in-the-loop oversight. Workflow automation that compounds.",
    icon: "Bot",
    keyFeatures: [
      "LangGraph + CrewAI orchestration",
      "ReAct + planning loop patterns",
      "Tool calling + function routing",
      "Long-term memory with checkpoints",
      "Human-in-the-loop approval gates",
      "Observability + tracing with LangSmith",
    ],
    techStack: [
      "LangGraph",
      "CrewAI",
      "LangSmith",
      "OpenAI",
      "Anthropic",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
];

/* ============================================================
   SERVICES NAVIGATION MENU
   This is ONLY for the Navbar dropdown.
   It does not affect the actual service pages.
   ============================================================ */

export const SERVICE_MENU = [
  {
    title: "Full Stack Development & Design",
    items: [
      {
        title: "Web Application Development",
        slug: "web-engineering",
      },
      {
        title: "Mobile App Development",
        slug: "mobile-apps",
      },
      {
        title: "UI/UX Design",
        slug: "ui-ux-design",
      },
      {
        title: "E-commerce Development",
        slug: "e-commerce-development",
      },
      {
        title: "Custom Software Development",
        slug: "custom-software-development",
      },
    ],
  },

  {
    title: "Cloud DevOps & Infrastructure",
    items: [
      {
        title: "Cloud Consulting",
        slug: "cloud-consulting",
      },
      {
        title: "AWS & Azure Solutions",
        slug: "aws-azure-solutions",
      },
      {
        title: "DevOps & CI/CD",
        slug: "devops-ci-cd",
      },
      {
        title: "Docker & Kubernetes",
        slug: "docker-kubernetes",
      },
      {
        title: "Infrastructure as Code",
        slug: "infrastructure-as-code",
      },
    ],
  },

  {
    title: "Generative AI",
    items: [
      {
        title: "Generative AI Solutions",
        slug: "generative-ai-solutions",
      },
      {
        title: "RAG Applications",
        slug: "rag-applications",
      },
      {
        title: "AI Agents",
        slug: "ai-agents",
      },
      {
        title: "AI Chatbots",
        slug: "ai-chatbots",
      },
      {
        title: "LLM Integration",
        slug: "llm-integration",
      },
    ],
  },

  {
    title: "Cyber Security",
    items: [
      {
        title: "Application Security",
        slug: "application-security",
      },
      {
        title: "Cloud Security",
        slug: "cloud-security",
      },
      {
        title: "Security Auditing",
        slug: "security-auditing",
      },
      {
        title: "Vulnerability Assessment",
        slug: "vulnerability-assessment",
      },
      {
        title: "Identity & Access Management",
        slug: "identity-access-management",
      },
    ],
  },

  {
    title: "Others",
    items: [
      {
        title: "Quality Assurance",
        slug: "quality-assurance",
      },
      {
        title: "Automated Testing",
        slug: "automated-testing",
      },
      {
        title: "Performance Testing",
        slug: "performance-testing",
      },
      {
        title: "IT Consulting",
        slug: "it-consulting",
      },
      {
        title: "System Integration",
        slug: "system-integration",
      },
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "government",
    title: "Government",
    short: "Compliance-first systems for public sector",
    description:
      "Digital portals, licensing workflows, and municipal automation for regulatory transparency and high-volume citizen access.",
    features: [
      "G2C standards compliance",
      "Automated permit workflows",
      "Federal data sovereignty",
      "Accessibility WCAG 2.1 AA",
      "Multi-language support",
      "Citizen service portals",
    ],
    icon: "Landmark",
    overview: [
      "Public-sector platforms must stay transparent, auditable, and available under peak citizen load. We engineer digital portals, licensing workflows, and municipal automation that keep regulatory process visible without slowing service delivery.",
      "Every engagement is built around G2C standards, data sovereignty, and accessibility so agencies can modernize operations while remaining accountable to citizens, auditors, and policy teams.",
    ],
    keyFeatureCards: [
      { title: "G2C standards compliance", description: "Citizen-facing services designed to meet government-to-citizen standards and policy controls from day one.", icon: "ShieldCheck" },
      { title: "Automated permit workflows", description: "Licensing and permit journeys with approvals, status tracking, and fewer manual hand-offs.", icon: "Workflow" },
      { title: "Federal data sovereignty", description: "Hosting, access, and retention patterns that keep sensitive public data inside required jurisdictions.", icon: "Database" },
      { title: "Accessibility WCAG 2.1 AA", description: "Interfaces built for inclusive access across devices, assistive tech, and diverse citizen needs.", icon: "Accessibility" },
      { title: "Multi-language support", description: "Localized experiences so residents can complete services in the language they use every day.", icon: "Languages" },
      { title: "Citizen service portals", description: "High-volume digital counters for applications, payments, and case status in one place.", icon: "Landmark" },
    ],
    challenge: {
      intro: "Agencies still run fragmented portals, paper-heavy permits, and systems that struggle at scale — which slows citizens and weakens audit readiness.",
      points: [
        "Manual licensing and permit routing across departments",
        "Limited transparency for citizens tracking applications",
        "Accessibility and language gaps in public digital services",
        "Data residency and compliance constraints that block modernization",
      ],
    },
    solution: {
      intro: "We deliver compliance-first citizen platforms with automated workflows, WCAG-ready access, and sovereignty-aware architecture for high-volume public use.",
      points: [
        "End-to-end digital portals for licensing and municipal services",
        "Automated approvals with complete audit trails",
        "Multi-language, WCAG 2.1 AA citizen experiences",
        "Sovereign data patterns built for regulatory review",
      ],
    },
  },

  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Clinical and patient-facing platforms",
    description:
      "HIPAA-aligned platforms, EHR integration, patient data management, and telemedicine built for clinical safety.",
    features: [
      "HIPAA-aligned architecture",
      "EHR/EMR integration",
      "Audit logging",
      "End-to-end encryption",
      "Clinical workflow automation",
      "Appointment scheduling",
    ],
    icon: "Stethoscope",
    overview: [
      "Clinical teams need software that protects patient data without adding friction to care. We build HIPAA-aligned platforms for EHR integration, patient data management, and telemedicine with clinical safety as a first-order requirement.",
      "The goal is simpler operations and clearer communication between clinicians and patients — from scheduling and records to encrypted exchange and role-aware access across the care journey.",
    ],
    keyFeatureCards: [
      { title: "Appointment Scheduling", description: "Let patients book, reschedule, and track visits while clinics keep calendars and capacity in sync.", icon: "Calendar" },
      { title: "EHR/EMR integration", description: "Connect clinical systems so patient history, orders, and updates stay consistent across care teams.", icon: "UserRound" },
      { title: "Smart Notifications", description: "Timely alerts for appointments, results, and care tasks without flooding staff or patients.", icon: "Bell" },
      { title: "Audit logging", description: "Complete activity trails so access, changes, and clinical actions are reviewable when it matters.", icon: "BarChart3" },
      { title: "End-to-end encryption", description: "Protect patient data in transit and at rest across portals, records, and messaging flows.", icon: "Lock" },
      { title: "HIPAA-aligned architecture", description: "Role-based access and clinical workflow automation designed around privacy and safety controls.", icon: "Shield" },
    ],
    challenge: {
      intro: "Care delivery is slowed by disconnected records, fragile scheduling, and platforms that were never designed for clinical privacy or audit.",
      points: [
        "Fragmented EHR/EMR data across clinics and departments",
        "Manual scheduling and follow-up that miss patients",
        "Limited visibility into who accessed sensitive records",
        "Communication gaps between clinicians and patients",
      ],
    },
    solution: {
      intro: "We engineer HIPAA-aligned healthcare systems with encrypted records, EHR connectivity, and automated clinical workflows that keep care teams coordinated.",
      points: [
        "Patient platforms with end-to-end encryption and role-based access",
        "EHR/EMR integration for a consistent clinical record",
        "Scheduling, notifications, and workflow automation",
        "Audit logging built for clinical and compliance review",
      ],
    },
  },

  {
    slug: "finance",
    title: "Finance",
    short: "Precision engineering for financial systems",
    description:
      "Trading systems, settlement, compliance reporting, and fraud detection - engineered with millisecond precision.",
    features: [
      "Low-latency trade execution",
      "Settlement reconciliation",
      "Regulatory reporting (RBI/SEBI)",
      "Fraud detection pipelines",
      "Audit trails",
      "Real-time risk dashboards",
    ],
    icon: "TrendingUp",
    overview: [
      "Financial platforms cannot trade accuracy for speed. We engineer trading systems, settlement, compliance reporting, and fraud detection with millisecond-grade precision and controls that stand up to audit.",
      "From execution paths to reconciliation and RBI/SEBI reporting, each layer is designed so operations, risk, and compliance teams share one reliable source of truth.",
    ],
    keyFeatureCards: [
      { title: "Low-latency trade execution", description: "Execution paths engineered for speed and consistency when market conditions leave no room for delay.", icon: "Zap" },
      { title: "Settlement reconciliation", description: "Match trades, positions, and cash movements so breaks surface early instead of after close.", icon: "Scale" },
      { title: "Regulatory reporting (RBI/SEBI)", description: "Structured reporting pipelines that keep filings accurate, timely, and reviewable.", icon: "FileCheck" },
      { title: "Fraud detection pipelines", description: "Streaming checks and scoring to flag suspicious activity before it becomes a loss event.", icon: "ScanSearch" },
      { title: "Audit trails", description: "Immutable event history across orders, settlements, and access for investigation and oversight.", icon: "ScrollText" },
      { title: "Real-time risk dashboards", description: "Live operational views so desks and compliance teams can act on exposure as it changes.", icon: "TrendingUp" },
    ],
    challenge: {
      intro: "Legacy stacks struggle with latency, reconciliation gaps, and reporting that cannot keep pace with market and regulatory pressure.",
      points: [
        "Slow or inconsistent trade execution under load",
        "Settlement breaks that take too long to isolate",
        "Manual RBI/SEBI reporting with weak auditability",
        "Fraud signals arriving after the damage is done",
      ],
    },
    solution: {
      intro: "We build precision financial systems with low-latency execution, automated reconciliation, fraud pipelines, and audit-ready reporting.",
      points: [
        "Millisecond-aware trading and operational paths",
        "Settlement reconciliation with clear exception handling",
        "Regulatory reporting designed for RBI/SEBI review",
        "Fraud detection and complete audit trails",
      ],
    },
  },

  {
    slug: "education",
    title: "Education",
    short: "Learning platforms built for scale",
    description:
      "LMS, student information systems, adaptive learning, and campus management for institutions at scale.",
    features: [
      "LMS + SIS",
      "Adaptive learning paths",
      "Campus management",
      "Online assessment",
      "Parent + student portals",
      "Institution-scale delivery",
    ],
    icon: "GraduationCap",
    overview: [
      "Institutions need learning systems that scale with enrollment, not workarounds. We build LMS, student information systems, adaptive learning, and campus management platforms for universities and schools operating at volume.",
      "Students, faculty, and families get connected experiences — from assessment and attendance to portals — while administrators keep academic operations in one coherent system.",
    ],
    keyFeatureCards: [
      { title: "LMS + SIS", description: "Unify learning delivery and student records so academic operations run from a single connected platform.", icon: "BookOpen" },
      { title: "Adaptive learning paths", description: "Personalize coursework based on progress so learners get the next right module, not a one-size path.", icon: "Route" },
      { title: "Campus management", description: "Coordinate scheduling, facilities, and day-to-day campus operations alongside academic systems.", icon: "Building2" },
      { title: "Online assessment", description: "Secure digital exams and assignments with clearer grading workflows for faculty and students.", icon: "ClipboardCheck" },
      { title: "Parent + student portals", description: "Give families and learners a simple place for results, schedules, fees, and campus updates.", icon: "Users" },
      { title: "Institution-scale delivery", description: "Architecture ready for peak enrollment, concurrent classes, and multi-campus growth.", icon: "GraduationCap" },
    ],
    challenge: {
      intro: "Campuses often run disconnected LMS, records, and portals — which fragments the student journey and overloads staff at peak term.",
      points: [
        "Separate systems for learning, records, and campus ops",
        "Generic coursework that cannot adapt to learner progress",
        "Assessment and grading still tied to manual processes",
        "Parents and students lacking a single source of updates",
      ],
    },
    solution: {
      intro: "We deliver education platforms that combine LMS, SIS, adaptive learning, and campus management so institutions can operate at scale.",
      points: [
        "Connected LMS + SIS for academic operations",
        "Adaptive learning paths and online assessment",
        "Campus management alongside teaching workflows",
        "Parent and student portals built for high enrollment",
      ],
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "railtrace",
    client: "KALPANAAA BBMP",
    title: "Municipal Corporation Automation & Digital E-Governance Portal",
    industry: "Government Infrastructure",
    description:
      "Digital e-governance platform enabling citizens to submit civic requests, upload photo evidence, track live resolution progress, and access essential municipal services and public information online.",
    image: "/project-images/GovernmentProjectImage.svg",
    metrics: [
      { label: "Permit Processing Time Reduced", value: "40%" },
      { label: "Assets Tracked in Real-time", value: "200+" },
      { label: "Uptime", value: "99.97%" },
      { label: "Deployment Time", value: "8 months" },
    ],
    tags: [
      "Python",
      "Django",
      "JavaScript",
      "ReactJS",
      "PostgreSQL",
      "CSS3",
    ],
    icon: "Train",
  },

  {
    slug: "medichain",
    client: "KALPANAAA MEDICAL",
    title: "Smart Next-Gen Digital Healthcare & Unified EHR Management System",
    industry: "Healthcare Data Platform",
    description:
      "Full-stack healthcare platform with multi-role appointments, e-prescriptions, diagnostic tracking, secure lifetime EHRs, passwordless OTP login, and real-time bed and emergency capacity monitoring.",
    image: "/project-images/HealthcareProjectImage.svg",
    metrics: [
      { label: "Uptime over 8 months", value: "99.97%" },
      { label: "Patient records managed", value: "50,000+" },
      { label: "Encryption", value: "End-to-End" },
      { label: "Deployment", value: "8 months" },
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "REST",
      "PostgreSQL",
    ],
    icon: "Stethoscope",
  },

  {
    slug: "finledger",
    client: "Kalpanaaa Finance",
    title: "Enterprise Digital Banking & Wealth Platform",
    industry: "Finance Operations",
    description:
      "An end-to-end enterprise financial platform powering digital wallet transactions, automated loan EMI approvals, fixed-return investment portfolios, live expert consultation booking, and real-time administrative KYC audit workflows.",
    image: "/project-images/FinanceProjectImage.svg",
    metrics: [
      { label: "Reconciliation Accuracy", value: "99.9%" },
      { label: "Transactions Monitored", value: "1M+" },
      { label: "Alert Latency", value: "< 2s" },
      { label: "Manual Review Reduced", value: "35%" },
    ],
    tags: [
      "Java 21",
      "Spring Boot 3",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "REST API",
    ],
    icon: "Finance",
  },

  {
    slug: "kucafe",
    client: "KALPANAAA EDUCATION",
    title: "Real-Time Academic & Administration Portal",
    industry: "Education",
    description:
      "Full-stack institutional portal featuring real-time SSE updates, dynamic course rosters, automated attendance, examinations, fee processing, and bcrypt-hashed security.",
    image: "/project-images/EducationProjectImage.svg",
    metrics: [
      { label: "Orders Processed", value: "12,000+" },
      { label: "Average Order Time", value: "90s" },
      { label: "Student Satisfaction", value: "96%" },
      { label: "Mobile", value: "100%" },
    ],
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
    ],
    icon: "UtensilsCrossed",
  },
];
