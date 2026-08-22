-- ====================================================================
-- KALPANAAA CMS PRODUCTION DATABASE SEED SCRIPT
-- Ready for Vercel Postgres / Supabase / Neon Cloud Deployment
-- ====================================================================

-- 1. CREATE TABLES SCHEMA
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS blogs (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100) NOT NULL,
  summary TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  author_name VARCHAR(255) NOT NULL,
  author_email VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'PENDING_APPROVAL',
  read_time VARCHAR(50),
  tags TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP
);

-- 2. USERS & AUTHORIZED EMPLOYEE ACCOUNTS
INSERT INTO users (id, name, email, role, password) VALUES 
('usr-admin-1', 'Gaurav Kr Tripathi', 'founder@kalpanaaasoftwaresolutions.in', 'ADMIN', 'admin123'),
('usr-admin-2', 'Akshit Ujjain', 'akshitujjain@kalpanaaasoftwaresolutions.in', 'ADMIN', 'admin123'),
('usr-1', 'SB Akash', 'sb.akash@kalpanaaa.in', 'AUTHOR', 'emp123'),
('usr-2', 'Priyanka Kushwah', 'priyanka.kushwah@kalpanaaa.in', 'AUTHOR', 'emp123')
ON CONFLICT (email) DO NOTHING;

-- 3. INITIAL PUBLISHED BLOG POSTS
INSERT INTO blogs (id, title, slug, category, summary, content, cover_image, author_name, author_email, status, read_time, tags, created_at, published_at) VALUES 
('ai-1', 
 'RAG Systems in Production: Accuracy Is an Engineering Problem', 
 'rag-systems-in-production', 
 'AI', 
 'A practical framework for retrieval quality, chunking, reranking, evaluation, guardrails, and observability — the work required after a chatbot demo succeeds.', 
 '## 1. What "RAG" Actually Means in Production

Retrieval-Augmented Generation (RAG) sounds simple: fetch relevant documents, stuff them into a prompt, let the model answer. In a demo, that works. In production — where thousands of users expect accurate, consistent answers — it breaks in a dozen quiet ways.

The real engineering challenge is not connecting an LLM to a vector database. It is building a system where retrieval quality is measurable, improvable, and reliable at scale.

## 2. Chunking Strategy and Why It Matters

Over-chunking leads to loss of context; under-chunking dilutes relevance scores. Every document type needs a different chunking strategy. API documentation chunks differently from legal contracts, which chunk differently from support transcripts.

Parent-document retrievers — where small chunks are indexed but larger parent chunks are returned — consistently outperform naive fixed-size chunking in enterprise settings.

## 3. Reranking: The Layer Most Teams Skip

Cosine similarity from a vector database is a starting point, not an answer. A Cross-Encoder reranker model (BGE-Reranker, Cohere Rerank) re-scores the top-k candidates using full query-document attention. This single addition reduces hallucination rates by 30–60% in most production deployments.

## 4. Evaluation Without Ground Truth

You cannot improve what you cannot measure. Build an automated evaluation harness using frameworks like Ragas or TruLens that scores faithfulness, answer relevance, and context recall on every query — without needing human labels for every case.', 
 '/blog-covers/rag-systems.jpg', 
 'SB Akash', 
 'sb.akash@kalpanaaa.in', 
 'PUBLISHED', 
 '8 min read', 
 ARRAY['RAG', 'LLM', 'pgvector', 'Evaluation'], 
 '2026-08-01T00:00:00.000Z', 
 '2026-08-01T00:00:00.000Z'),

('ai-2', 
 'Multi-Agent AI Systems: Architecture Patterns for Enterprise Scale', 
 'multi-agent-ai-systems-enterprise', 
 'AI', 
 'How to design orchestrator-worker agent topologies, handle failures gracefully, and build production-grade AI pipelines that go beyond single-model prompting.', 
 '## 1. Why Single-Agent Architectures Break at Scale

A single LLM agent handling complex enterprise workflows quickly hits context limits, latency ceilings, and reliability problems. When one model must reason, retrieve, execute code, and format output simultaneously, failure modes multiply.

The industry solution is multi-agent systems — specialized models working in structured topologies with clean interfaces.

## 2. The Orchestrator-Worker Topology

The most reliable pattern for enterprise tasks is a central Orchestrator agent that decomposes user requests into task DAGs (Directed Acyclic Graphs), assigns sub-tasks to domain-specialized Worker agents (Search Agent, Code Execution Agent, QA Agent), and synthesizes final outputs.

## 3. State Management and Memory Isolation

Shared state between agents must be strictly scoped. Use short-term episodic memory for task execution and long-term semantic memory stored in vector indices. Never let worker agents write directly to shared memory without orchestrator validation.

## 4. Failure Recovery and Fallback Strategies

Every agent invocation must have a fallback. If a specialized model fails to output valid structured JSON after two retries, fall back to a deterministic rule-based parser or escalate to an admin queue.', 
 '/blog-covers/multi-agent.jpg', 
 'Priyanka Kushwah', 
 'priyanka.kushwah@kalpanaaa.in', 
 'PUBLISHED', 
 '10 min read', 
 ARRAY['Multi-Agent', 'LangGraph', 'Architecture', 'AI Engineering'], 
 '2026-08-03T00:00:00.000Z', 
 '2026-08-03T00:00:00.000Z'),

('app-1', 
 'React Native Architecture in 2026: Fabric, TurboModules, and Beyond', 
 'react-native-architecture-2026', 
 'App Development', 
 'A deep dive into the New Architecture, synchronous native calls, concurrent rendering, and real-world performance tuning for high-load mobile applications.', 
 '## 1. The Death of the Asynchronous Bridge

For years, React Native performance was limited by the asynchronous JSON bridge. The New Architecture — powered by Fabric (UI renderer) and TurboModules (lazy-loaded native modules) — eliminates this bottleneck through direct C++ JSI (JavaScript Interface) bindings.

## 2. Fabric Renderer: Concurrent UI on Mobile

Fabric enables React 18 concurrent rendering features directly on mobile devices. Priority-based scheduling means heavy data processing never blocks 60fps gesture animations or user input.

## 3. TurboModules in Practice

TurboModules lazy-load native code only when invoked, cutting mobile app cold startup times by up to 45%.

## 4. Memory Profiling and Native Memory Leaks

JSI allows JS objects to hold direct references to native C++ memory. Use Xcode Instruments and Android Studio Profiler together to trace memory leaks across the JS/native boundary.', 
 '/blog-covers/react-native.jpg', 
 'SB Akash', 
 'sb.akash@kalpanaaa.in', 
 'PUBLISHED', 
 '7 min read', 
 ARRAY['React Native', 'Mobile', 'Fabric', 'Performance'], 
 '2026-08-05T00:00:00.000Z', 
 '2026-08-05T00:00:00.000Z')
ON CONFLICT (id) DO NOTHING;
