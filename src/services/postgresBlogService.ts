import { BlogPost, CreateBlogSubmission, User } from '../types/blog';

const STORAGE_KEY_BLOGS = 'kalpana_postgres_blogs_v4';
const STORAGE_KEY_AUTH = 'kalpana_postgres_auth_user_v1';

const INITIAL_BLOGS: BlogPost[] = [
  // ── AI ──────────────────────────────────────────────────────────────────
  {
    coverImage: '/blog-covers/rag-systems.jpg',
    id: 'ai-1',
    slug: 'rag-systems-in-production',
    title: 'RAG Systems in Production: Accuracy Is an Engineering Problem',
    summary: 'A practical framework for retrieval quality, chunking, reranking, evaluation, guardrails, and observability — the work required after a chatbot demo succeeds.',
    content: `## 1. What "RAG" Actually Means in Production

Retrieval-Augmented Generation (RAG) sounds simple: fetch relevant documents, stuff them into a prompt, let the model answer. In a demo, that works. In production — where thousands of users expect accurate, consistent answers — it breaks in a dozen quiet ways.

The real engineering challenge is not connecting an LLM to a vector database. It is building a system where retrieval quality is measurable, improvable, and reliable at scale.

## 2. Chunking Strategy and Why It Matters

Over-chunking leads to loss of context; under-chunking dilutes relevance scores. Every document type needs a different chunking strategy. API documentation chunks differently from legal contracts, which chunk differently from support transcripts.

Parent-document retrievers — where small chunks are indexed but larger parent chunks are returned — consistently outperform naive fixed-size chunking in enterprise settings.

## 3. Reranking: The Layer Most Teams Skip

Cosine similarity from a vector database is a starting point, not an answer. A Cross-Encoder reranker model (BGE-Reranker, Cohere Rerank) re-scores the top-k candidates using full query-document attention. This single addition reduces hallucination rates by 30–60% in most production deployments.

## 4. Evaluation Without Ground Truth

You cannot improve what you cannot measure. Build an automated evaluation harness using frameworks like Ragas or TruLens that scores faithfulness, answer relevance, and context recall on every query — without needing human labels for every case.`,
    category: 'AI',
    tags: ['RAG', 'LLM', 'pgvector', 'Evaluation'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-01').toISOString(),
    publishedAt: new Date('2026-08-01').toISOString(),
    readTime: '8 min read',
  },
  {
    coverImage: '/blog-covers/multi-agent.jpg',
    id: 'ai-2',
    slug: 'multi-agent-ai-systems-enterprise',
    title: 'Multi-Agent AI Systems: Architecture Patterns for Enterprise Scale',
    summary: 'How to design orchestrator-worker agent topologies, handle failures gracefully, and build production-grade AI pipelines that go beyond single-model prompting.',
    content: `## 1. Why Single-Agent Architectures Break at Scale

A single LLM agent handling complex enterprise workflows quickly hits context limits, latency ceilings, and reliability problems. When one model must reason, retrieve, execute code, and format output simultaneously, failure modes multiply.

Multi-agent architectures solve this by decomposing tasks across specialized agents coordinated by an orchestrator.

## 2. Orchestrator-Worker Topology

The orchestrator receives the user intent, decomposes it into subtasks, delegates to specialist workers (retrieval agent, code execution agent, data formatting agent), and synthesises their outputs into a final response.

This pattern scales horizontally — add more worker agents as load increases — and isolates failures to individual workers rather than bringing down the entire pipeline.

## 3. Inter-Agent Communication Standards

Use structured message passing with JSON schemas validated at every agent boundary. Unstructured string passing between agents is the primary source of cascading failures in production multi-agent systems.

## 4. Observability and Debugging Multi-Agent Flows

Distributed tracing with OpenTelemetry spans across agent boundaries is essential. You need to know which agent made which decision, with what inputs, and in what time — especially when diagnosing incorrect final outputs.`,
    category: 'AI',
    tags: ['Multi-Agent', 'LangGraph', 'Architecture', 'AI'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-03').toISOString(),
    publishedAt: new Date('2026-08-03').toISOString(),
    readTime: '10 min read',
  },

  // ── APP DEVELOPMENT ────────────────────────────────────────────────────
  {
    coverImage: '/blog-covers/react-native.jpg',
    id: 'app-1',
    slug: 'react-native-architecture-2026',
    title: 'React Native Architecture in 2026: What Senior Engineers Actually Use',
    summary: 'From the New Architecture (Fabric + JSI) to Expo Router, state management choices, and testing strategies — the real decisions behind production mobile apps.',
    content: `## 1. The New Architecture Changes Everything

React Native's Fabric renderer and JSI (JavaScript Interface) eliminate the async bridge bottleneck that plagued earlier versions. Native modules now execute synchronously, enabling 60 fps animations and touch responsiveness previously impossible in JavaScript-driven mobile apps.

Understanding when and how to leverage the New Architecture directly impacts your app's perceived performance.

## 2. File-Based Routing with Expo Router

Expo Router brings Next.js-style file-based routing to React Native. Routes live in the \`app/\` directory, deep linking is automatic, and shared layout components eliminate boilerplate that previously required manual navigation stack configuration.

For new projects in 2026, Expo Router is the default choice over React Navigation configured manually.

## 3. State Management: Zustand over Redux

Redux Toolkit remains viable for large teams with existing codebases. For new projects, Zustand's minimal API, TypeScript-first design, and zero-boilerplate slices consistently outperform Redux in developer velocity metrics.

## 4. Testing Strategy for Mobile

Unit test business logic with Jest. Component test with React Native Testing Library. End-to-end test critical user paths (onboarding, checkout, auth) with Maestro — the only E2E tool that reliably handles both iOS and Android in CI without Appium's setup complexity.`,
    category: 'App Development',
    tags: ['React Native', 'Mobile', 'Expo', 'Architecture'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-05').toISOString(),
    publishedAt: new Date('2026-08-05').toISOString(),
    readTime: '9 min read',
  },
  {
    coverImage: '/blog-covers/flutter-rn.jpg',
    id: 'app-2',
    slug: 'flutter-vs-react-native-2026',
    title: 'Flutter vs React Native in 2026: An Honest Engineering Comparison',
    summary: 'Performance benchmarks, ecosystem maturity, hiring market realities, and the specific project types where each framework genuinely wins.',
    content: `## 1. Performance: Closer Than Ever, Different in Ways That Matter

Flutter's Impeller rendering engine and React Native's Fabric renderer have largely closed the raw performance gap. Both achieve 60 fps on modern hardware for standard UI. The differences now appear in specific scenarios: complex animations with many concurrent state changes (Flutter wins) and deep native module integration (React Native wins).

## 2. Ecosystem and Package Availability

React Native's npm ecosystem (1M+ packages) vastly outnumbers Flutter's pub.dev (35K packages). For enterprise integrations — Salesforce SDKs, payment processors, analytics — React Native typically has a maintained package; Flutter often requires writing native bindings yourself.

## 3. Team and Hiring Realities

JavaScript/TypeScript developers — the largest engineering talent pool globally — can contribute to React Native projects within days. Dart, Flutter's language, requires dedicated learning time and a narrower hiring market.

## 4. When to Choose Flutter

Flutter wins when you need pixel-perfect custom UI that matches a design system exactly, when you are shipping on non-standard platforms (embedded, desktop, TV), or when your team already has Dart expertise.`,
    category: 'App Development',
    tags: ['Flutter', 'React Native', 'Mobile', 'Comparison'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-07').toISOString(),
    publishedAt: new Date('2026-08-07').toISOString(),
    readTime: '11 min read',
  },

  // ── WEB DEVELOPMENT ──────────────────────────────────────────────────
  {
    coverImage: '/blog-covers/zero-defect.jpg',
    id: 'web-1',
    slug: 'zero-defect-release-process',
    title: 'What a Zero-Defect Release Process Actually Looks Like',
    summary: 'From unit and integration tests to Playwright E2E, accessibility checks, SAST, load testing, and release gates: a practical delivery standard for business-critical systems.',
    content: `## 1. The Real Cost of "Move Fast and Break Things"

Enterprise clients do not accept broken production deployments. A single payment flow outage or data corruption event costs more in customer trust and regulatory scrutiny than months of feature velocity gains.

Zero-defect engineering is not about working slower — it is about building verification pipelines that make shipping broken code statistically improbable.

## 2. The Four-Layer Test Pyramid

Layer one: Unit tests covering all business logic in isolation (Jest/Vitest). Layer two: Integration tests verifying database queries, API contracts, and service boundaries. Layer three: Playwright E2E tests on production-identical staging covering critical user paths. Layer four: Accessibility (axe-core), performance (Lighthouse CI), and security (SAST) gates that block merge on failure.

## 3. Release Gates That Actually Block

Automated gates that fail a pipeline when thresholds are missed — not warnings, actual failures — are what convert a test suite from documentation into a delivery guarantee. Coverage gates, bundle size budgets, and Core Web Vitals thresholds should all be hard failures.

## 4. Canary Deployments and Automatic Rollback

Route 5% of production traffic to the new release. Monitor error rates, latency p99, and business metrics. If any metric degrades by more than a defined threshold within 15 minutes, the deployment platform rolls back automatically without human intervention.`,
    category: 'Web Development',
    tags: ['QA', 'Playwright', 'CI/CD', 'Testing'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-09').toISOString(),
    publishedAt: new Date('2026-08-09').toISOString(),
    readTime: '7 min read',
  },
  {
    coverImage: '/blog-covers/nextjs.jpg',
    id: 'web-2',
    slug: 'nextjs-app-router-production-guide',
    title: 'Next.js App Router in Production: What the Docs Do Not Tell You',
    summary: 'Server Components, streaming, cache invalidation pitfalls, and the deployment configuration decisions that determine whether your Next.js app is fast or frustrating.',
    content: `## 1. Server Components Are Not a Silver Bullet

React Server Components eliminate client-side JavaScript for components that do not need interactivity — a genuine performance win. The architecture mistake teams make is over-using them: wrapping interactive components in Server Components and debugging hydration mismatches at 2 AM.

The rule is simple: data fetching and static display — Server Components. Anything with event handlers, useState, or useEffect — Client Components.

## 2. Cache Invalidation: The Real Complexity

Next.js App Router's caching model has four distinct layers: Request Memoisation, Data Cache, Full Route Cache, and Router Cache. Understanding which layer caches what, and how to selectively invalidate without a full rebuild, is the primary source of "why is my data stale?" bugs in production.

Use \`revalidateTag\` and \`revalidatePath\` deliberately. Document your cache strategy in comments next to every \`fetch\` call.

## 3. Streaming and Suspense for Perceived Performance

Wrap slow data-fetching components in \`<Suspense>\` with meaningful skeleton fallbacks. Users perceive a page that progressively loads as faster than one that waits for all data before rendering anything, even if total load time is identical.

## 4. Deployment on Vercel vs Self-Hosted

Vercel provides ISR, edge functions, and image optimisation out of the box. Self-hosting on a Node.js container with standalone output mode requires manually configuring a CDN, image optimisation service, and cache headers — but gives you full control over costs at scale.`,
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Performance', 'App Router'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-11').toISOString(),
    publishedAt: new Date('2026-08-11').toISOString(),
    readTime: '12 min read',
  },

  // ── CLOUD ─────────────────────────────────────────────────────────────
  {
    coverImage: '/blog-covers/cloud-reliability.jpg',
    id: 'cloud-1',
    slug: 'designing-for-reliability-before-first-incident',
    title: 'Designing for Reliability Before Your First Production Incident',
    summary: 'The AWS, Docker, Terraform, monitoring, backup, and incident-response decisions that turn a prototype into an accountable production platform.',
    content: `## 1. Reliability Is an Architecture Decision, Not an Operations Reaction

Most reliability problems are architectural — single points of failure, missing health checks, absent circuit breakers, no backup strategy. These decisions are made (or not made) during system design, long before the first production incident.

Retrofitting reliability onto an unreliable architecture is expensive and incomplete. Building it from the start is cheaper than the alternative.

## 2. Infrastructure as Code from Day One

Every cloud resource — VPCs, security groups, ECS clusters, RDS instances, S3 buckets — must be provisioned through Terraform or CDK. Manual console clicks create configuration drift that cannot be audited, reproduced, or recovered from reliably.

Version-controlled infrastructure makes disaster recovery a Terraform apply, not a multi-day manual reconstruction.

## 3. The Observability Triad

Metrics (Prometheus/CloudWatch): What is the system doing right now? Logs (Loki/CloudWatch Logs): What happened and in what sequence? Traces (OpenTelemetry/X-Ray): Which service call caused this latency or error?

All three are required. Metrics without logs cannot explain why. Logs without traces cannot locate where in a distributed system.

## 4. Backup and Recovery Testing

A backup that has never been tested is not a backup — it is a hope. Schedule monthly restoration drills where you actually restore from backup to a test environment and verify data integrity. Document the recovery time. Most teams discover their RTO is 10x their assumption during the first drill.`,
    category: 'Cloud',
    tags: ['AWS', 'Terraform', 'Reliability', 'DevOps'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-13').toISOString(),
    publishedAt: new Date('2026-08-13').toISOString(),
    readTime: '10 min read',
  },
  {
    coverImage: '/blog-covers/kubernetes.jpg',
    id: 'cloud-2',
    slug: 'kubernetes-cost-optimisation-enterprise',
    title: 'Kubernetes Cost Optimisation: Cutting Cloud Bills Without Cutting Performance',
    summary: 'Right-sizing workloads, spot instance strategies, namespace resource quotas, and the monitoring setup that reveals where your Kubernetes budget is actually going.',
    content: `## 1. Why Kubernetes Costs Spiral

Kubernetes makes it easy to provision resources and difficult to reclaim them. Teams set generous resource requests during initial deployment ("just to be safe") and never revisit them. Nodes run at 20% utilisation. Costs double every six months.

The solution is not cutting resources — it is measuring actual utilisation and setting requests and limits that match reality.

## 2. Right-Sizing with Vertical Pod Autoscaler

VPA in recommendation mode monitors actual CPU and memory usage and suggests correct resource requests without enforcing them automatically. Run VPA in recommendation mode for four weeks, review the suggestions, and apply them incrementally.

This single intervention typically reduces cluster costs by 30–50% without any performance degradation.

## 3. Spot Instances for Non-Critical Workloads

Batch processing, CI runners, background jobs, and development environments do not need guaranteed compute. Running these workloads on spot (AWS) or preemptible (GCP) instances reduces their compute cost by 60–80%.

Use node selectors and tolerations to ensure spot-incompatible workloads (databases, stateful services) always land on on-demand nodes.

## 4. Namespace Resource Quotas and LimitRanges

Without quotas, a single team's misconfigured deployment can consume an entire cluster's capacity. Set ResourceQuota objects per namespace with CPU, memory, and pod count limits. Set LimitRange defaults so pods without explicit resource requests receive sensible defaults rather than unlimited access.`,
    category: 'Cloud',
    tags: ['Kubernetes', 'AWS', 'Cost', 'DevOps'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    createdAt: new Date('2026-08-15').toISOString(),
    publishedAt: new Date('2026-08-15').toISOString(),
    readTime: '9 min read',
  },
];

function loadStoredBlogs(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BLOGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(INITIAL_BLOGS));
      return INITIAL_BLOGS;
    }
    const stored: BlogPost[] = JSON.parse(raw);
    const storedIds = new Set(stored.map((b) => b.id));
    const missing = INITIAL_BLOGS.filter((b) => !storedIds.has(b.id));
    if (missing.length > 0) {
      const merged = [...stored, ...missing];
      localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(merged));
      return merged;
    }
    return stored;
  } catch {
    return INITIAL_BLOGS;
  }
}

function saveStoredBlogs(blogs: BlogPost[]) {
  try {
    localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(blogs));
  } catch (e) {
    console.error('Failed to persist blogs', e);
  }
}

const AUTHORIZED_EMPLOYEES: Record<string, string> = {
  'priyanka.kushwah@kalpanaaa.in': 'Priyanka Kushwah',
  'ritish.krishna.devadiga@kalpanaaa.in': 'Ritish Krishna Devadiga',
  'kuruva.mahesh@kalpanaaa.in': 'Kuruva Mahesh',
  'asbin.t.s@kalpanaaa.in': 'Asbin T.S.',
  'jasonkennethn@kalpanaaa.in': 'Jason Kenneth N',
  'pratiksha.harode@kalpanaaa.in': 'Pratiksha Harode',
  'satya.ranjan.dash@kalpanaaa.in': 'Satya Ranjan Dash',
  'i.thabeethal.asnath@kalpanaaa.in': 'I. Thabeethal Asnath',
  'sb.akash@kalpanaaa.in': 'SB Akash',
  'prahlad.sharma@kalpanaaa.in': 'Prahlad Sharma',
  'd.koushik@kalpanaaasoftwaresolutions.in': 'D. Koushik',
  'abhinayav1919@kalpanaaa.in': 'Abhinaya V',
};

const AUTHORIZED_ADMINS: Record<string, string> = {
  'founder@kalpanaaasoftwaresolutions.in': 'Gaurav Kr Tripathi',
  'akshitujjain@kalpanaaasoftwaresolutions.in': 'Akshit Ujjain',
};

const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const API_BASE_URL = isLocal ? 'http://localhost:5000/api' : '/api';

export const postgresBlogService = {
  async authenticateUser(email: string, password_hash?: string): Promise<User | null> {
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) return null;

    try {
      const endpoint = password_hash ? `${API_BASE_URL}/auth/admin-login` : `${API_BASE_URL}/auth/verify-email`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password: password_hash }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(data.user));
        return data.user;
      }
    } catch {
      console.warn('Backend API server offline, using local verification');
    }

    // 1. Check Admin List
    if (AUTHORIZED_ADMINS[trimmedEmail]) {
      if (password_hash && password_hash !== 'admin123') return null;
      const user: User = {
        id: `admin-${trimmedEmail.split('@')[0]}`,
        email: trimmedEmail,
        name: AUTHORIZED_ADMINS[trimmedEmail],
        role: 'ADMIN',
      };
      localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(user));
      return user;
    }

    // 2. Check Employee Whitelist (Strict Full Email Verification)
    if (AUTHORIZED_EMPLOYEES[trimmedEmail]) {
      const user: User = {
        id: `emp-${trimmedEmail.split('@')[0]}`,
        email: trimmedEmail,
        name: AUTHORIZED_EMPLOYEES[trimmedEmail],
        role: 'EMPLOYEE',
      };
      localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(user));
      return user;
    }

    return null;
  },

  getCurrentUser(): User | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_AUTH);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },

  logout() { localStorage.removeItem(STORAGE_KEY_AUTH); },

  async submitBlog(data: CreateBlogSubmission): Promise<BlogPost> {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      console.warn('Backend API server offline, saving to local storage');
    }

    const blogs = loadStoredBlogs();
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + Math.floor(Math.random() * 1000);
    const newBlog: BlogPost = {
      id: `blog-${Date.now()}`,
      slug,
      title: data.title,
      summary: data.summary,
      content: data.content,
      category: data.category || 'Web Development',
      tags: data.tags.length > 0 ? data.tags : ['Engineering'],
      authorName: data.authorName || 'SB Akash',
      authorEmail: data.authorEmail,
      status: 'PENDING_APPROVAL',
      createdAt: new Date().toISOString(),
      readTime: `${Math.max(3, Math.ceil(data.content.split(' ').length / 200))} min read`,
      coverImage: data.coverImage,
    };
    blogs.unshift(newBlog);
    saveStoredBlogs(blogs);
    return newBlog;
  },

  async getPublishedBlogs(): Promise<BlogPost[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs?status=PUBLISHED`);
      if (res.ok) {
        const blogs = await res.json();
        saveStoredBlogs(blogs);
        return blogs;
      }
    } catch {
      console.warn('Backend API server offline, loading from local storage');
    }
    return loadStoredBlogs().filter((b) => b.status === 'PUBLISHED');
  },

  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const raw = slug.trim();
    const decoded = decodeURIComponent(raw).trim();
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${encodeURIComponent(raw)}`);
      if (res.ok) return await res.json();
    } catch {
      console.warn('Backend API server offline, loading from local storage');
    }
    const blogs = loadStoredBlogs();
    const match = blogs.find((b) =>
      b.slug === raw ||
      b.slug === decoded ||
      b.id === raw ||
      b.id === decoded ||
      b.slug?.toLowerCase() === decoded.toLowerCase() ||
      b.title?.toLowerCase() === decoded.toLowerCase()
    );
    return match ?? null;
  },

  async getBlogsByStatus(status?: string): Promise<BlogPost[]> {
    try {
      const url = status && status !== 'ALL' ? `${API_BASE_URL}/blogs?status=${status}` : `${API_BASE_URL}/blogs`;
      const res = await fetch(url);
      if (res.ok) {
        const blogs = await res.json();
        saveStoredBlogs(blogs);
        return blogs;
      }
    } catch {
      console.warn('Backend API server offline, loading from local storage');
    }
    const blogs = loadStoredBlogs();
    if (!status || status === 'ALL') return blogs;
    return blogs.filter((b) => b.status === status);
  },

  async approveBlog(id: string): Promise<BlogPost | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${id}/approve`, { method: 'PUT' });
      if (res.ok) {
        const result = await res.json();
        return result.blog;
      }
    } catch {
      console.warn('Backend API server offline, approving locally');
    }

    const blogs = loadStoredBlogs();
    const index = blogs.findIndex((b) => b.id === id);
    if (index !== -1) {
      blogs[index].status = 'PUBLISHED';
      blogs[index].publishedAt = new Date().toISOString();
      saveStoredBlogs(blogs);
      return blogs[index];
    }
    return null;
  },

  async rejectBlog(id: string, reason?: string): Promise<BlogPost | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${id}/reject`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason }),
      });
      if (res.ok) {
        const result = await res.json();
        return result.blog;
      }
    } catch {
      console.warn('Backend API server offline, rejecting locally');
    }

    const blogs = loadStoredBlogs();
    const index = blogs.findIndex((b) => b.id === id);
    if (index !== -1) {
      blogs[index].status = 'REJECTED';
      blogs[index].rejectionReason = reason || 'Does not meet current submission guidelines.';
      saveStoredBlogs(blogs);
      return blogs[index];
    }
    return null;
  },

  async deleteBlog(id: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) return true;
    } catch {
      console.warn('Backend API server offline, deleting locally');
    }

    let blogs = loadStoredBlogs();
    const initial = blogs.length;
    blogs = blogs.filter((b) => b.id !== id);
    saveStoredBlogs(blogs);
    return blogs.length < initial;
  },
};
