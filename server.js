import express from 'express';
import cors from 'cors';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// PostgreSQL Connection Pool
const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
const poolConfig = connectionString
  ? {
      connectionString,
      ssl: { rejectUnauthorized: false },
    }
  : {
      user: process.env.PGUSER || 'postgres',
      host: process.env.PGHOST || 'localhost',
      database: process.env.PGDATABASE || 'kalpana_cms',
      password: process.env.PGPASSWORD || 'postgres',
      port: parseInt(process.env.PGPORT || '5432', 10),
    };

const pool = new Pool(poolConfig);


// Whitelisted Authorized Accounts
const AUTHORIZED_EMPLOYEES = {
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

const AUTHORIZED_ADMINS = {
  'founder@kalpanaaasoftwaresolutions.in': 'Gaurav Kr Tripathi',
  'akshitujjain@kalpanaaasoftwaresolutions.in': 'Akshit Ujjain',
};

// Initial Seed Articles with Comprehensive Multi-Paragraph Content
const INITIAL_SEED_BLOGS = [
  {
    slug: 'rag-systems-in-production',
    title: 'RAG Systems in Production: Accuracy Is an Engineering Problem',
    summary: 'A practical framework for retrieval quality, chunking, reranking, evaluation, and observability.',
    content: `## 1. What RAG Means in Production

Retrieval-Augmented Generation (RAG) is far more than gluing a vector database to an OpenAI endpoint. In enterprise environments, RAG is a software engineering discipline focused on context relevance, low-latency document retrieval, and deterministic grounding.

When deploying RAG to production, naive vector search often fails due to semantic ambiguity, context dilution, and out-of-date document indices. Engineering teams must treat the retrieval pipeline as a core distributed system with measurable SLA metrics.

## 2. Chunking Strategy & Overlap Optimization

Selecting the right chunk size is critical for retrieval quality. Fixed-size chunking (e.g. 512 tokens with 50-token overlap) works for simple prose, but structured technical documentation requires semantic chunking.

- **Fixed Chunking:** Fast, but frequently cuts sentences in half or breaks code blocks.
- **Hierarchical Chunking:** Preserves parent document context while retrieving small child snippets for precise LLM embedding matching.
- **Semantic Chunking:** Splits text by paragraph embeddings and semantic drift boundaries.

## 3. Reranking Layer & Cross-Encoders

Standard vector similarity (cosine distance over dense embeddings) is fast but imprecise for long-tail technical queries. Adding a **Cross-Encoder Reranking Model** (such as Cohere Rerank or BGE-Reranker) yields a massive boost in precision.

1. **Phase 1 (Bi-Encoder):** Retrieve the top 50 candidate document chunks in < 20ms using vector indices like HNSW.
2. **Phase 2 (Cross-Encoder):** Pass query + top 50 chunks into a cross-encoder to re-score full cross-attention matches, selecting the top 5 most relevant chunks.

## 4. Automated Evaluation & Observability

You cannot optimize what you do not measure. Modern RAG architectures rely on continuous automated evaluation pipelines using key metrics:

- **Faithfulness:** Does the generated response contain facts not present in the retrieved context?
- **Answer Relevance:** Does the response directly answer the user query without hallucinating off-topic text?
- **Context Recall:** Did the vector retrieval step fetch all necessary information required to form the correct answer?`,
    category: 'AI',
    tags: ['RAG', 'LLM', 'AI', 'Evaluation'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '8 min read',
    coverImage: '/blog-covers/rag-systems.jpg',
  },
  {
    slug: 'multi-agent-ai-systems-enterprise',
    title: 'Multi-Agent AI Systems: Architecture Patterns for Enterprise Scale',
    summary: 'How to design orchestrator-worker agent topologies and build production-grade AI pipelines.',
    content: `## 1. Why Single-Agent Systems Break at Scale

Single-prompt LLM agents handling complex multi-step tasks quickly hit context limits and reasoning degradation. When one model is forced to plan, write code, run terminal commands, and format response outputs simultaneously, failure rates multiply exponentially.

Multi-agent architectures solve this bottleneck by breaking complex tasks into specialized worker agents coordinated by a central orchestrator.

## 2. Orchestrator-Worker Topology

In an orchestrator-worker pattern, the primary Orchestrator Agent receives user intent, decomposes the prompt into subtasks, and delegates work to domain-specific subagents:

- **Research Agent:** Performs read-only code search and external documentation lookups.
- **Execution Agent:** Executes terminal commands, compiles code, and runs test suites.
- **Quality Assurance Agent:** Audits code changes against design patterns and static analysis rules.

## 3. Inter-Agent Communication Standards

Agents communicate using strict JSON protocol schemas rather than free-form natural language. This prevents misinterpretation and allows structured tool parameter passing across process boundaries.

\`\`\`json
{
  "taskId": "task-801",
  "targetAgent": "ExecutionAgent",
  "action": "RUN_TESTS",
  "parameters": { "command": "npm test" }
}
\`\`\`

## 4. Observability and Debugging Multi-Agent Flows

Debugging asynchronous multi-agent loops requires distributed tracing tools like OpenTelemetry and Jaeger. Every message exchanged between agents includes a unified \`trace_id\` and \`span_id\` so developers can inspect the execution timeline visually.`,
    category: 'AI',
    tags: ['Multi-Agent', 'LangGraph', 'Architecture', 'AI'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '10 min read',
    coverImage: '/blog-covers/multi-agent.jpg',
  },
  {
    slug: 'react-native-architecture-2026',
    title: 'React Native Architecture in 2026: What Senior Engineers Actually Use',
    summary: 'From Fabric + JSI to Expo Router, state management choices, and testing strategies.',
    content: `## 1. The New Architecture (Fabric & JSI)

The legacy React Native asynchronous bridge is officially obsolete. Modern mobile applications rely entirely on the Fabric Renderer and JavaScript Interface (JSI).

JSI enables direct, synchronous JavaScript-to-C++ function calls without serializing messages into JSON strings over an async bridge. This results in instant 120 FPS UI list rendering and zero lag when interacting with native camera or location APIs.

## 2. File-Based Routing with Expo Router

Expo Router has redefined navigation in React Native by bringing Next.js file-based routing to mobile apps.

- **Nested Layouts:** Share header bars and tab bar navigation cleanly across screen sub-trees.
- **Deep Linking:** URLs automatically map to native mobile screens (e.g. \`myapp://blog/react-native-architecture\`).
- **Universal Web Support:** Compile the exact same route tree for iOS, Android, and Web applications seamlessly.

## 3. Lightweight State Management with Zustand

Redux Toolkit is increasingly replaced by minimal, hook-based state management libraries like Zustand and TanStack Query.

Zustand eliminates boilerplate action types and reducers, storing transient UI state in un-nested, TypeScript-typed stores with zero provider wrapper overhead.

## 4. End-to-End Testing with Maestro

UI testing in mobile apps used to be slow and brittle with Detox or Appium. Maestro simplifies E2E mobile testing with human-readable YAML test flows that run natively on iOS Simulators and Android Emulators in local CI pipelines.`,
    category: 'App Development',
    tags: ['React Native', 'Mobile', 'Expo'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '9 min read',
    coverImage: '/blog-covers/react-native.jpg',
  },
  {
    slug: 'flutter-vs-react-native-2026',
    title: 'Flutter vs React Native in 2026: An Honest Engineering Comparison',
    summary: 'Performance benchmarks, ecosystem maturity, and specific project trade-offs.',
    content: `## 1. Rendering Engine Performance

The core architectural difference between Flutter and React Native comes down to how pixels reach the phone screen:

- **Flutter (Impeller Engine):** Renders every pixel directly using Skia/Impeller over GPU shaders. Ensures consistent performance across iOS and Android regardless of OS updates.
- **React Native (Fabric + Native Components):** Renders actual native iOS (\`UIView\`) and Android (\`android.view.View\`) UI elements, preserving true native OS feel and accessibility defaults.

## 2. Ecosystem & Package Maturity

React Native leverages the vast npm ecosystem, allowing web developers to share code, utility libraries, and state logic directly between web and mobile apps.

Flutter relies on pub.dev, which features exceptional, highly maintained UI package widgets tailored for custom design systems.

## 3. Developer Talent Pool & Hiring

JavaScript/TypeScript developers are plentiful in the tech market, making React Native easier to staff for web-first engineering teams.

Dart is easy to learn for OOP developers coming from Java or C#, but requires dedicated mobile team onboarding.

## 4. Architectural Verdict

- Choose **Flutter** if your app requires heavy custom UI animations, pixel-perfect design across platforms, or non-standard custom canvas drawing.
- Choose **React Native** if your engineering team is JavaScript-proficient, requires deep web code sharing, or needs standard native OS controls.`,
    category: 'App Development',
    tags: ['Flutter', 'React Native', 'Mobile'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '11 min read',
    coverImage: '/blog-covers/flutter-rn.jpg',
  },
  {
    slug: 'zero-defect-release-process',
    title: 'What a Zero-Defect Release Process Actually Looks Like',
    summary: 'A practical delivery standard for business-critical web applications.',
    content: `## 1. The Real Cost of Untested Production Code

Production outages cost companies far more in lost user trust and emergency debugging time than feature release velocity gains. A zero-defect release process does not mean zero code changes — it means establishing engineering guardrails so bugs are caught automatically in CI pipelines before deployment.

## 2. The Four-Layer Test Pyramid

High-performing engineering teams implement automated testing across four complementary layers:

- **Static Analysis (TypeScript + ESLint):** Catches type mismatches and syntax bugs instantly as developers type.
- **Unit Tests (Vitest / Jest):** Verifies pure functions, utility math, and domain logic in milliseconds.
- **Component Tests (React Testing Library):** Verifies UI component rendering, state changes, and user event handling.
- **End-to-End Tests (Playwright):** Simulates real user browser sessions across complete critical paths (login, checkout, article submission).

## 3. Automated CI/CD Release Gates

In a zero-defect pipeline, GitHub Actions run automated checks on every pull request. Merging is blocked automatically if:

1. Test code coverage falls below defined thresholds (e.g. 85%).
2. Bundle size increases beyond specified performance budgets.
3. Accessibility checks fail WCAG AA compliance audit.

## 4. Progressive Canary Deployments

Deploying code to 100% of users simultaneously is a recipe for disaster. Canary deployments route 5% of live traffic to new application builds while monitoring real-time error rates, automatically rolling back if error metrics spike.`,
    category: 'Web Development',
    tags: ['QA', 'Playwright', 'CI/CD', 'Testing'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '7 min read',
    coverImage: '/blog-covers/zero-defect.jpg',
  },
  {
    slug: 'nextjs-app-router-production-guide',
    title: 'Next.js App Router in Production: What the Docs Do Not Tell You',
    summary: 'Server Components, streaming, cache invalidation pitfalls, and deployment tuning.',
    content: `## 1. Server Component Boundaries & Performance

Next.js App Router defaults all components inside the \`app/\` directory to React Server Components (RSC). Understanding where to place the \`'use client'\` boundary is essential for fast page loads.

Keep Server Components at the root of your page layout to perform direct database queries and fetch data on the server without shipping JavaScript bundles to the browser. Move \`'use client'\` down to interactive leaf nodes like buttons or modal toggles.

## 2. Master Cache Invalidation Patterns

Next.js employs multi-layer caching (Full Route Cache, Data Cache, Request Memoization). Unintentional caching is the #1 cause of stale data in production App Router applications.

- Use \`revalidateTag('blogs')\` for instant, targeted cache clearing when data is mutated via Server Actions or API endpoints.
- Use \`export const revalidate = 0\` on dynamic routes that must reflect live database updates on every page load.

## 3. Streaming and Suspense Fallbacks

Instead of showing a blank screen while server data fetches, wrap slow data components in React \`<Suspense>\` boundaries. Next.js streams HTML directly to the browser as it renders, giving users instant visual feedback with skeleton loaders.

## 4. Production Docker Deployment Tuning

When deploying Next.js outside Vercel on Docker or Kubernetes, enable \`output: 'standalone'\` in \`next.config.js\`. This creates a lightweight standalone Node.js server bundle that drops Docker image size from 1.2 GB down to 120 MB.`,
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Performance'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '12 min read',
    coverImage: '/blog-covers/nextjs.jpg',
  },
  {
    slug: 'designing-for-reliability-before-first-incident',
    title: 'Designing for Reliability Before Your First Production Incident',
    summary: 'AWS, Terraform, monitoring, and backup decisions for production systems.',
    content: `## 1. Reliability as an Architectural Requirement

Site Reliability Engineering (SRE) is not something you add after your first major production crash. Building resilient applications requires designing failure handling directly into your system architecture from day one.

- **Circuit Breakers:** Prevent cascading database failures by gracefully degrading secondary non-essential features when load surges.
- **Graceful Retries with Exponential Backoff:** Avoid overwhelming recovering database clusters with instant retry spikes.

## 2. Infrastructure as Code with Terraform

Never configure production cloud resources manually via AWS Console buttons. Define all servers, VPC networks, S3 buckets, and PostgreSQL instances using Terraform scripts.

Infrastructure as Code (IaC) guarantees that your staging and production environments are 100% identical, making infrastructure changes audited and reproducible in minutes.

## 3. The Observability Triad

Monitoring a production system requires three pillars of observability:

1. **Metrics (Prometheus):** Track CPU utilization, memory pressure, HTTP 5xx error rates, and API latency percentiles (p95, p99).
2. **Logs (Grafana Loki / ELK):** Centralized log aggregation for searching exceptions and stack trace errors across application pods.
3. **Traces (OpenTelemetry):** Trace single HTTP requests as they flow through frontend API gateways down to database SQL queries.

## 4. Disaster Recovery & Monthly Restoration Drills

Backups are useless if they cannot be restored. Perform monthly automated database restoration drills to verify that your Recovery Time Objective (RTO) and Recovery Point Objective (RPO) targets are strictly met.`,
    category: 'Cloud',
    tags: ['AWS', 'Terraform', 'Reliability', 'DevOps'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '10 min read',
    coverImage: '/blog-covers/cloud-reliability.jpg',
  },
  {
    slug: 'kubernetes-cost-optimisation-enterprise',
    title: 'Kubernetes Cost Optimisation: Cutting Cloud Bills Without Cutting Performance',
    summary: 'Right-sizing workloads, spot instances, resource quotas, and monitoring.',
    content: `## 1. The Root Cause of Kubernetes Cost Inflation

Most enterprise Kubernetes clusters overspend on cloud compute by 40% to 60%. The culprit is almost always developer over-provisioning: setting excessive CPU and memory requests on pod manifests to prevent Out-Of-Memory (OOM) crashes.

Because Kubernetes schedules nodes based on **requested** resources rather than **actual** usage, cloud provider bills balloon while server CPUs sit 80% idle.

## 2. Vertical Pod Autoscaler (VPA) in Recommendation Mode

Run the Kubernetes Vertical Pod Autoscaler in \`Off\` (recommendation) mode to collect real-world CPU and memory usage statistics over 14 days.

VPA provides exact data-driven recommendations on true resource limits, allowing engineering teams to right-size pod deployment manifests safely without risking downtime.

## 3. Leveraging Spot / Preemptible Instances

Cloud providers offer Spot Instances (AWS Spot / GCP Preemptible) at an 70% to 90% discount compared to standard On-Demand instance pricing.

- Use Spot Instances for stateless background worker pods, queue consumers, and batch processing jobs that tolerate pod rescheduling.
- Keep master control planes and critical database pods on On-Demand instances.

## 4. Namespace Resource Quotas & Cost Allocation

Enforce strict \`ResourceQuota\` rules per team Kubernetes namespace. Tools like Kubecost provide transparent cost allocation dashboards, attributing cloud spending down to individual dev teams, microservices, and pull requests.`,
    category: 'Cloud',
    tags: ['Kubernetes', 'AWS', 'Cost', 'DevOps'],
    authorName: 'SB Akash',
    authorEmail: 'sb.akash@kalpanaaa.in',
    status: 'PUBLISHED',
    readTime: '9 min read',
    coverImage: '/blog-covers/kubernetes.jpg',
  },
];

// Initialize Database Tables and Initial Data
// NOTE: Does NOT catch internally — errors propagate to dbReady so routes
// that await dbReady receive the rejection instead of querying a broken DB.
async function initDb() {
  // 1. Enums & Tables
  await pool.query(`
    DO $$ BEGIN CREATE TYPE user_role AS ENUM ('EMPLOYEE', 'ADMIN'); EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN CREATE TYPE blog_status AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'PUBLISHED', 'REJECTED'); EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role user_role NOT NULL DEFAULT 'EMPLOYEE',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS blogs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      summary TEXT NOT NULL,
      content TEXT NOT NULL,
      category VARCHAR(100) NOT NULL,
      tags TEXT[] DEFAULT '{}',
      author_id UUID REFERENCES users(id) ON DELETE SET NULL,
      author_name VARCHAR(255) NOT NULL,
      author_email VARCHAR(255) NOT NULL,
      status blog_status NOT NULL DEFAULT 'PENDING_APPROVAL',
      rejection_reason TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      published_at TIMESTAMP WITH TIME ZONE,
      read_time VARCHAR(50),
      cover_image TEXT
    );

    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS read_time VARCHAR(50);
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS cover_image TEXT;

    CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
    CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
  `);

  // 2. Seed Employees & Admins with BCRYPT-HASHED passwords
  // ON CONFLICT: insert if new, or upgrade plaintext passwords to bcrypt hash
  const empHash = await bcrypt.hash('emp123', 12);
  for (const [email, name] of Object.entries(AUTHORIZED_EMPLOYEES)) {
    await pool.query(
      `INSERT INTO users (email, password_hash, name, role)
       VALUES ($1, $2, $3, 'EMPLOYEE')
       ON CONFLICT (email) DO UPDATE
         SET password_hash = EXCLUDED.password_hash
         WHERE users.password_hash NOT LIKE '$2b$%'`,
      [email, empHash, name]
    );
  }
  const adminHash = await bcrypt.hash('admin123', 12);
  for (const [email, name] of Object.entries(AUTHORIZED_ADMINS)) {
    await pool.query(
      `INSERT INTO users (email, password_hash, name, role)
       VALUES ($1, $2, $3, 'ADMIN')
       ON CONFLICT (email) DO UPDATE
         SET password_hash = EXCLUDED.password_hash
         WHERE users.password_hash NOT LIKE '$2b$%'`,
      [email, adminHash, name]
    );
  }

  // 3. Seed Initial Articles ONLY if table is empty
  const blogCountRes = await pool.query(`SELECT COUNT(*) FROM blogs`);
  const blogCount = parseInt(blogCountRes.rows[0]?.count || '0', 10);

  if (blogCount === 0) {
    console.log('Seeding initial blog articles into empty PostgreSQL table...');
    for (const blog of INITIAL_SEED_BLOGS) {
      await pool.query(
        `INSERT INTO blogs (slug, title, summary, content, category, tags, author_name, author_email, status, read_time, cover_image, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::blog_status, $10, $11, CURRENT_TIMESTAMP)
         ON CONFLICT (slug) DO NOTHING`,
        [
          blog.slug, blog.title, blog.summary, blog.content, blog.category,
          blog.tags, blog.authorName, blog.authorEmail, blog.status,
          blog.readTime, blog.coverImage
        ]
      );
    }
  } else {
    console.log(`✅ PostgreSQL Database connected with ${blogCount} live blog records.`);
  }
}

// Run initDb at module load. dbReady rejects if initDb() throws,
// so routes that `await dbReady` receive the rejection and return 503.
// The .catch() here is for logging only — it does NOT suppress the rejection.
const dbReady = initDb();
dbReady.catch((err) => {
  console.error('❌ DB initialization failed — all API routes will reject:', err.message);
});

// ── REST API ROUTES ──────────────────────────────────────────────────────────

// GET /api/blogs — Fetch blogs (filtered by status or category)
app.get('/api/blogs', async (req, res) => {
  try {
    await dbReady; // Ensure DB is initialized on Vercel serverless cold start
    const { status, category } = req.query;
    let query = `SELECT * FROM blogs`;
    const params = [];
    const conditions = [];

    if (status && status !== 'ALL') {
      params.push(status);
      conditions.push(`status = $${params.length}::blog_status`);
    }
    if (category && category !== 'All') {
      params.push(category);
      conditions.push(`category = $${params.length}`);
    }

    if (conditions.length > 0) {
      query += ` WHERE ` + conditions.join(' AND ');
    }

    query += ` ORDER BY created_at DESC`;
    const result = await pool.query(query, params);

    const formatted = result.rows.map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      summary: row.summary,
      content: row.content,
      category: row.category,
      tags: row.tags || [],
      authorName: row.author_name,
      authorEmail: row.author_email,
      status: row.status,
      rejectionReason: row.rejection_reason,
      createdAt: row.created_at,
      publishedAt: row.published_at,
      readTime: row.read_time,
      coverImage: row.cover_image,
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/blogs/:slug — Fetch single blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const rawSlug = req.params.slug;
    const decodedSlug = decodeURIComponent(rawSlug).trim();
    const result = await pool.query(
      `SELECT * FROM blogs 
       WHERE (slug = $1 OR slug = $2 OR LOWER(slug) = LOWER($2) OR LOWER(title) = LOWER($2) OR id::text = $1) 
         AND status = 'PUBLISHED'`, 
      [rawSlug, decodedSlug]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    const row = result.rows[0];
    res.json({
      id: row.id,
      slug: row.slug,
      title: row.title,
      summary: row.summary,
      content: row.content,
      category: row.category,
      tags: row.tags || [],
      authorName: row.author_name,
      authorEmail: row.author_email,
      status: row.status,
      rejectionReason: row.rejection_reason,
      createdAt: row.created_at,
      publishedAt: row.published_at,
      readTime: row.read_time,
      coverImage: row.cover_image,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function sanitizeHtml(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// POST /api/blogs — Submit new blog (pending approval)
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, summary, content, category, tags, authorName, authorEmail, coverImage } = req.body;
    if (!title || !summary || !content) {
      return res.status(400).json({ error: 'Title, summary, and content are required' });
    }

    const safeTitle = sanitizeHtml(title.trim());
    const safeSummary = sanitizeHtml(summary.trim());
    const safeContent = sanitizeHtml(content.trim());

    const baseSlug = safeTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const slug = `${baseSlug}-${Math.floor(Math.random() * 1000)}`;
    const wordCount = safeContent.split(/\s+/).length;
    const readTime = `${Math.max(3, Math.ceil(wordCount / 200))} min read`;

    const result = await pool.query(
      `INSERT INTO blogs (slug, title, summary, content, category, tags, author_name, author_email, status, read_time, cover_image)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'PENDING_APPROVAL', $9, $10)
       RETURNING *`,
      [slug, safeTitle, safeSummary, safeContent, category || 'Web Development', tags || [], authorName || 'SB Akash', authorEmail, readTime, coverImage || null]
    );

    const row = result.rows[0];
    res.status(201).json({
      id: row.id,
      slug: row.slug,
      title: row.title,
      summary: row.summary,
      content: row.content,
      category: row.category,
      tags: row.tags || [],
      authorName: row.author_name,
      authorEmail: row.author_email,
      status: row.status,
      createdAt: row.created_at,
      readTime: row.read_time,
      coverImage: row.cover_image,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/blogs/:id/approve — Approve blog (publish live)
app.put('/api/blogs/:id/approve', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `UPDATE blogs SET status = 'PUBLISHED', published_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
      [id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog approved and published successfully', blog: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/blogs/:id/reject — Reject blog
app.put('/api/blogs/:id/reject', async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const result = await pool.query(
      `UPDATE blogs SET status = 'REJECTED', rejection_reason = $1 WHERE id = $2 RETURNING *`,
      [reason || 'Does not meet current submission guidelines.', id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog rejected', blog: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/blogs/:id — Delete blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`DELETE FROM blogs WHERE id = $1 RETURNING id`, [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/verify-email — Verify employee email strictly by full email address
app.post('/api/auth/verify-email', async (req, res) => {
  try {
    const { email } = req.body;
    const trimmed = (email || '').trim().toLowerCase();

    if (!trimmed) {
      return res.status(400).json({ error: 'Email address is required.' });
    }

    // 1. Query PostgreSQL users table FIRST for exact full email match
    try {
      const dbUser = await pool.query(`SELECT * FROM users WHERE LOWER(email) = $1`, [trimmed]);
      if (dbUser.rows.length > 0) {
        const u = dbUser.rows[0];
        return res.json({
          user: { id: u.id, email: u.email, name: u.name, role: u.role || 'EMPLOYEE' }
        });
      }
    } catch (dbErr) {
      console.warn('DB query error on verify-email:', dbErr.message);
    }

    // 2. Check strict authorized employee whitelist (exact match)
    if (AUTHORIZED_EMPLOYEES[trimmed]) {
      return res.json({
        user: { id: `emp-${trimmed.split('@')[0]}`, email: trimmed, name: AUTHORIZED_EMPLOYEES[trimmed], role: 'EMPLOYEE' }
      });
    }

    return res.status(401).json({ error: 'Unauthorized Email: This email address is not registered in the employee database.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/admin-login — Authenticate admin login with bcrypt verification
app.post('/api/auth/admin-login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const trimmed = (email || '').trim().toLowerCase();

    if (!trimmed || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    await dbReady;

    // 1. Fetch user by email only (never compare plaintext in SQL)
    const dbResult = await pool.query(
      `SELECT id, email, name, role, password_hash FROM users WHERE LOWER(email) = $1`,
      [trimmed]
    );

    if (dbResult.rows.length === 0) {
      // Use a generic message to prevent email enumeration
      return res.status(401).json({ error: 'Invalid admin email or password.' });
    }

    const u = dbResult.rows[0];

    // 2. Verify submitted password against bcrypt hash
    const passwordValid = await bcrypt.compare(password, u.password_hash);
    if (!passwordValid) {
      return res.status(401).json({ error: 'Invalid admin email or password.' });
    }

    // 3. Ensure only ADMIN role users can log in through this endpoint
    if (u.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Access denied: admin privileges required.' });
    }

    return res.json({
      user: { id: u.id, email: u.email, name: u.name, role: u.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server (local dev only — Vercel uses module export below)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Express API Backend running on http://localhost:${PORT}`);
  });
}

export default app;
