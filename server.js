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
// Vercel rejects serverless request bodies over 4.5 MB at the edge, so a limit
// above that can never actually be reached in production. Cover images are
// downscaled client-side (see BlogSubmissionModal.compressImage).
app.use(express.json({ limit: '4mb' }));

// ── PostgreSQL / Neon Connection ─────────────────────────────────────────────
// Resolve the connection string from every name Vercel + Neon integrations use.
// Vercel's Neon integration injects DATABASE_URL / POSTGRES_URL / POSTGRES_PRISMA_URL
// depending on which template created it, so accept all of them instead of
// silently falling back to localhost (which is unreachable inside a lambda and
// was the reason every write failed in production).
const CONNECTION_ENV_KEYS = [
  'DATABASE_URL',
  'POSTGRES_URL',
  'POSTGRES_PRISMA_URL',
  'NEON_DATABASE_URL',
  'POSTGRES_URL_NON_POOLING',
  'DATABASE_URL_UNPOOLED',
];

const resolvedKey = CONNECTION_ENV_KEYS.find((k) => (process.env[k] || '').trim());
const connectionString = resolvedKey ? process.env[resolvedKey].trim() : null;

const IS_SERVERLESS = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);

if (!connectionString) {
  // Loud, actionable failure. Previously this fell through to localhost:5432 and
  // produced ECONNREFUSED on every query, which the frontend swallowed.
  console.error(
    '❌ FATAL: No Postgres connection string found. Set DATABASE_URL (or POSTGRES_URL) ' +
    `to your Neon connection string. Checked: ${CONNECTION_ENV_KEYS.join(', ')}`
  );
} else {
  console.log(`🔌 Postgres connection string loaded from ${resolvedKey}`);
  if (IS_SERVERLESS && !/-pooler\./.test(connectionString)) {
    console.warn(
      '⚠️  Neon direct (non-pooled) endpoint detected in a serverless runtime. ' +
      'Use the "-pooler" host from the Neon dashboard to avoid exhausting connections.'
    );
  }
}

const pool = new Pool({
  connectionString: connectionString || undefined,
  // Neon terminates TLS with a cert chain Node doesn't bundle.
  ssl: { rejectUnauthorized: false },
  // Each serverless invocation gets its own isolated process. Holding more than
  // one socket per instance is what exhausts Neon's connection limit under load.
  max: IS_SERVERLESS ? 1 : 10,
  // Fail fast instead of hanging until the function timeout, so the client gets
  // a real error response rather than a dead request.
  connectionTimeoutMillis: 10_000,
  idleTimeoutMillis: IS_SERVERLESS ? 10_000 : 30_000,
  keepAlive: true,
  allowExitOnIdle: IS_SERVERLESS,
});

// A pool-level error must never take down the process.
pool.on('error', (err) => {
  console.error('Postgres pool error (idle client):', err.message);
});


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

// Bump this whenever the migration block below changes so deployed instances
// re-run it once. Stored in schema_meta so the warm path costs one cheap query.
const SCHEMA_VERSION = '2026-08-24.2';

// Initialize Database Tables and Initial Data
// NOTE: Does NOT catch internally — errors propagate to the caller so routes
// receive the rejection instead of querying a broken DB.
async function initDb() {
  if (!connectionString) {
    throw new Error(
      'No Postgres connection string configured. Set DATABASE_URL in your Vercel ' +
      'project environment variables to the Neon connection string, then redeploy.'
    );
  }

  // Fast path: one query. Skips all DDL, bcrypt hashing and seeding once the
  // schema is at the current version. Previously every Vercel cold start re-ran
  // the full DDL + 2 bcrypt hashes at cost 12 + ~14 sequential Neon round-trips,
  // which routinely blew the function timeout.
  try {
    const { rows } = await pool.query(`SELECT value FROM schema_meta WHERE key = 'version'`);
    if (rows[0]?.value === SCHEMA_VERSION) return;
  } catch {
    /* schema_meta does not exist yet — fall through to the full migration */
  }

  console.log('Running schema migration…');

  // 1. Enums, tables and the version marker.
  await pool.query(`
    DO $$ BEGIN CREATE TYPE user_role AS ENUM ('EMPLOYEE', 'ADMIN'); EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN CREATE TYPE blog_status AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'PUBLISHED', 'REJECTED'); EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);

    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255),
      name VARCHAR(255) NOT NULL,
      role VARCHAR(50) NOT NULL DEFAULT 'EMPLOYEE',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS blogs (
      id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      summary TEXT,
      content TEXT NOT NULL,
      category VARCHAR(100) NOT NULL,
      tags TEXT[] DEFAULT '{}',
      author_name VARCHAR(255) NOT NULL,
      author_email VARCHAR(255),
      status VARCHAR(50) NOT NULL DEFAULT 'PENDING_APPROVAL',
      rejection_reason TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      published_at TIMESTAMP,
      read_time VARCHAR(50),
      cover_image TEXT
    );
  `);

  // 2. Reconcile a pre-existing schema.
  //
  // The live Neon database was seeded by an earlier, different schema
  // (seed_production_data.sql): blogs.id and users.id are VARCHAR with NO
  // DEFAULT, there is no rejection_reason, and users store a plaintext
  // `password` rather than `password_hash`. CREATE TABLE IF NOT EXISTS never
  // alters an existing table, so that drift was permanent and silent — every
  // INSERT died on "null value in column id violates not-null constraint".
  // These statements are individually idempotent and safe on a fresh database.
  await pool.query(`
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS read_time VARCHAR(50);
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS cover_image TEXT;
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS rejection_reason TEXT;
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS author_email VARCHAR(255);
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS published_at TIMESTAMP;
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

    ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);
    ALTER TABLE users ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

    -- The legacy schema had a NOT NULL "password" column (plaintext). Every
    -- INSERT that only supplies password_hash was rejected with:
    --   "null value in column 'password' violates not-null constraint"
    -- Make it optional so password_hash-only inserts succeed.
    ALTER TABLE users ALTER COLUMN password DROP NOT NULL;
    ALTER TABLE users ALTER COLUMN password SET DEFAULT '';

    CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
    CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
  `);

  // Give the id columns a server-side default so INSERTs can omit them. Done
  // separately because it must not fail if the column type is already uuid.
  for (const table of ['blogs', 'users']) {
    const { rows } = await pool.query(
      `SELECT data_type FROM information_schema.columns
        WHERE table_name = $1 AND column_name = 'id'`,
      [table]
    );
    const type = rows[0]?.data_type;
    if (!type) continue;
    const expr = type === 'uuid' ? 'gen_random_uuid()' : 'gen_random_uuid()::text';
    await pool.query(`ALTER TABLE ${table} ALTER COLUMN id SET DEFAULT ${expr}`);
  }

  // Ensure the email uniqueness the upserts below depend on.
  await pool.query(`
    DO $$ BEGIN
      ALTER TABLE users ADD CONSTRAINT users_email_key UNIQUE (email);
    EXCEPTION WHEN duplicate_table OR duplicate_object OR unique_violation THEN null; END $$;
  `);

  // 3. Seed / upgrade credentials.
  //
  // The live rows hold plaintext passwords ('emp123', 'admin123') in a legacy
  // `password` column while admin-login verifies against `password_hash`, so
  // admin sign-in could never succeed against this database. Write real bcrypt
  // hashes into password_hash for every known account.
  const empHash = await bcrypt.hash('emp123', 12);
  const adminHash = await bcrypt.hash('admin123', 12);

  for (const [group, hash, role] of [
    [AUTHORIZED_EMPLOYEES, empHash, 'EMPLOYEE'],
    [AUTHORIZED_ADMINS, adminHash, 'ADMIN'],
  ]) {
    for (const [email, name] of Object.entries(group)) {
      await pool.query(
        `INSERT INTO users (email, password_hash, name, role)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (email) DO UPDATE
           SET password_hash = EXCLUDED.password_hash,
               name = COALESCE(users.name, EXCLUDED.name),
               role = EXCLUDED.role
           WHERE users.password_hash IS NULL
              OR users.password_hash NOT LIKE '$2%'`,
        [email, hash, name, role]
      );
    }
  }

  // 4. Seed Initial Articles ONLY if the table is empty.
  const blogCountRes = await pool.query(`SELECT COUNT(*) FROM blogs`);
  const blogCount = parseInt(blogCountRes.rows[0]?.count || '0', 10);

  if (blogCount === 0) {
    console.log('Seeding initial blog articles into empty PostgreSQL table...');
    for (const blog of INITIAL_SEED_BLOGS) {
      await pool.query(
        `INSERT INTO blogs (slug, title, summary, content, category, tags, author_name, author_email, status, read_time, cover_image, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_TIMESTAMP)
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

  await pool.query(
    `INSERT INTO schema_meta (key, value) VALUES ('version', $1)
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
    [SCHEMA_VERSION]
  );
  console.log(`✅ Schema migration complete (version ${SCHEMA_VERSION}).`);
}

// Lazy, retryable schema initialization.
//
// Previously this was `const dbReady = initDb()` at module load: a single shared
// promise. If the very first cold-start attempt failed (Neon still waking from
// suspend, a transient TLS blip, a cold-start timeout) that rejection was cached
// for the entire life of the warm instance, so EVERY later request kept failing
// even after the database came back. Now a failed attempt is discarded and the
// next request retries.
let initPromise = null;

function ensureDb() {
  if (!initPromise) {
    initPromise = initDb().catch((err) => {
      console.error('❌ DB initialization failed:', err.message);
      initPromise = null; // allow the next request to retry
      throw err;
    });
  }
  return initPromise;
}

// Backwards-compatible alias for any route still awaiting the old name.
const dbReady = { then: (onOk, onErr) => ensureDb().then(onOk, onErr) };

// Warm the schema check at boot without poisoning anything on failure.
ensureDb().catch(() => {});

// Centralised error responder: distinguishes "database is unreachable /
// misconfigured" (503) from a genuine application bug (500), and never returns
// a silent success that the client could mistake for a saved record.
function failRequest(res, err, context) {
  const msg = err?.message || 'Unknown error';
  const isInfra =
    !connectionString ||
    /ECONNREFUSED|ENOTFOUND|ETIMEDOUT|connection string|terminating connection|timeout expired|too many connections|password authentication/i.test(msg);

  console.error(`[${context}] ${isInfra ? 'DB UNAVAILABLE' : 'ERROR'}: ${msg}`);

  return res.status(isInfra ? 503 : 500).json({
    error: isInfra
      ? 'Database unavailable. The server could not reach Postgres, so nothing was saved.'
      : msg,
    context,
    detail: msg,
    dbConfigured: Boolean(connectionString),
  });
}

// ── REST API ROUTES ──────────────────────────────────────────────────────────

// GET /api/health — Diagnostic endpoint. Hit this first when debugging a
// deployment: it proves in one request whether Vercel can actually reach Neon.
app.get('/api/health', async (req, res) => {
  const report = {
    ok: false,
    dbConfigured: Boolean(connectionString),
    connectionSource: resolvedKey || null,
    serverless: IS_SERVERLESS,
    pooledEndpoint: connectionString ? /-pooler\./.test(connectionString) : null,
  };

  if (!connectionString) {
    report.error =
      'No connection string. Set DATABASE_URL in Vercel → Settings → Environment ' +
      'Variables to your Neon connection string, then redeploy.';
    return res.status(503).json(report);
  }

  try {
    const started = Date.now();
    await ensureDb();
    const { rows } = await pool.query(
      `SELECT current_database() AS db,
              (SELECT COUNT(*) FROM blogs) AS blog_count,
              (SELECT COUNT(*) FROM blogs WHERE status = 'PUBLISHED') AS published_count,
              (SELECT COUNT(*) FROM blogs WHERE status = 'PENDING_APPROVAL') AS pending_count,
              (SELECT COUNT(*) FROM users) AS user_count`
    );
    report.ok = true;
    report.latencyMs = Date.now() - started;
    report.database = rows[0].db;
    report.blogCount = Number(rows[0].blog_count);
    report.publishedCount = Number(rows[0].published_count);
    report.pendingCount = Number(rows[0].pending_count);
    report.userCount = Number(rows[0].user_count);
    return res.json(report);
  } catch (err) {
    report.error = err.message;
    return res.status(503).json(report);
  }
});

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
      // Compare as text, not as ::blog_status. The live table's status column is
      // VARCHAR (created by an older schema), so casting the parameter to the
      // enum made every filtered read fail with an operator-mismatch error.
      // status::text works for both the VARCHAR and enum column types.
      conditions.push(`status::text = $${params.length}`);
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
    failRequest(res, err, 'GET /api/blogs');
  }
});

// GET /api/blogs/:slug — Fetch single blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    await ensureDb();
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
    failRequest(res, err, 'GET /api/blogs/:slug');
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

    await ensureDb(); // schema must exist before the INSERT on a cold start

    const baseSlug =
      safeTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || 'post';
    const wordCount = safeContent.split(/\s+/).length;
    const readTime = `${Math.max(3, Math.ceil(wordCount / 200))} min read`;

    // Deterministic, collision-free slug. `slug` is UNIQUE, and the previous
    // `-${random(1000)}` suffix threw a duplicate-key 500 once a number repeated.
    // Let Postgres resolve contention by retrying with an incrementing suffix.
    let result;
    for (let attempt = 0; attempt < 6; attempt++) {
      const slug = attempt === 0 ? baseSlug : `${baseSlug}-${attempt + 1}`;
      try {
        result = await pool.query(
          `INSERT INTO blogs (slug, title, summary, content, category, tags, author_name, author_email, status, read_time, cover_image)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'PENDING_APPROVAL', $9, $10)
           RETURNING *`,
          [slug, safeTitle, safeSummary, safeContent, category || 'Web Development', tags || [], authorName || 'SB Akash', authorEmail, readTime, coverImage || null]
        );
        break;
      } catch (e) {
        if (e.code !== '23505') throw e; // 23505 = unique_violation
      }
    }
    if (!result) {
      return res.status(409).json({ error: 'A post with this title already exists. Please adjust the title.' });
    }

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
    failRequest(res, err, 'POST /api/blogs');
  }
});

// Blog ids are VARCHAR, not UUID — the live table contains legacy ids such as
// `ai-1` and `app-1` alongside the generated UUIDs. This guard only rejects
// obviously malformed input so a bad id returns 400 rather than a raw Postgres
// 500; it must NOT require UUID shape or the seeded posts become unmanageable.
const BLOG_ID_RE = /^[A-Za-z0-9_-]{1,255}$/;

// PUT /api/blogs/:id/approve — Approve blog (publish live)
app.put('/api/blogs/:id/approve', async (req, res) => {
  try {
    const { id } = req.params;
    if (!BLOG_ID_RE.test(id)) {
      return res.status(400).json({ error: `Invalid blog id "${id}".` });
    }
    await ensureDb();
    const result = await pool.query(
      `UPDATE blogs SET status = 'PUBLISHED', published_at = CURRENT_TIMESTAMP WHERE id::text = $1 RETURNING *`,
      [id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog approved and published successfully', blog: result.rows[0] });
  } catch (err) {
    failRequest(res, err, 'PUT /api/blogs/:id/approve');
  }
});

// PUT /api/blogs/:id/reject — Reject blog
app.put('/api/blogs/:id/reject', async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    if (!BLOG_ID_RE.test(id)) {
      return res.status(400).json({ error: `Invalid blog id "${id}".` });
    }
    await ensureDb();
    const result = await pool.query(
      `UPDATE blogs SET status = 'REJECTED', rejection_reason = $1 WHERE id::text = $2 RETURNING *`,
      [reason || 'Does not meet current submission guidelines.', id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog rejected', blog: result.rows[0] });
  } catch (err) {
    failRequest(res, err, 'PUT /api/blogs/:id/reject');
  }
});

// DELETE /api/blogs/:id — Delete blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!BLOG_ID_RE.test(id)) {
      return res.status(400).json({ error: `Invalid blog id "${id}".` });
    }
    await ensureDb();
    const result = await pool.query(`DELETE FROM blogs WHERE id::text = $1 RETURNING id`, [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    failRequest(res, err, 'DELETE /api/blogs/:id');
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

    await ensureDb();

    // Query the users table for an exact full-email match. Database errors are
    // NOT swallowed here any more: the previous version caught them and fell
    // through to the in-process whitelist, so employee sign-in kept "working"
    // while the database was unreachable — which is exactly what made the
    // broken blog pipeline invisible.
    const dbUser = await pool.query(`SELECT * FROM users WHERE LOWER(email) = $1`, [trimmed]);
    if (dbUser.rows.length > 0) {
      const u = dbUser.rows[0];
      return res.json({
        user: { id: u.id, email: u.email, name: u.name, role: u.role || 'EMPLOYEE' }
      });
    }

    return res.status(401).json({ error: 'Unauthorized Email: This email address is not registered in the employee database.' });
  } catch (err) {
    failRequest(res, err, 'POST /api/auth/verify-email');
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

    await ensureDb();

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

    // 2. Verify submitted password against the bcrypt hash.
    // password_hash can be NULL on rows created by the legacy schema (which
    // stored a plaintext `password` column). initDb backfills the hash, but
    // guard anyway so bcrypt.compare never gets null and throws a 500 that
    // would read as a server fault rather than a credential rejection.
    if (!u.password_hash) {
      return res.status(401).json({ error: 'Invalid admin email or password.' });
    }
    const passwordValid = await bcrypt.compare(password, u.password_hash);
    if (!passwordValid) {
      return res.status(401).json({ error: 'Invalid admin email or password.' });
    }

    // 3. Ensure only ADMIN role users can log in through this endpoint
    if (String(u.role).toUpperCase() !== 'ADMIN') {
      return res.status(403).json({ error: 'Access denied: admin privileges required.' });
    }

    return res.json({
      user: { id: u.id, email: u.email, name: u.name, role: u.role }
    });
  } catch (err) {
    failRequest(res, err, 'POST /api/auth/admin-login');
  }
});

// Start Server (local dev only — Vercel uses module export below)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Express API Backend running on http://localhost:${PORT}`);
  });
}

export default app;
