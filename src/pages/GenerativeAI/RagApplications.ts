import type { Service } from "../../data/site";

export const ragApplications: Service = {
  slug: "rag-applications",
  title: "RAG Applications",
  tag: "AI-RAG",
  description:
    "Retrieval-Augmented Generation applications that connect LLMs to your documents, databases, and knowledge sources for grounded answers users can trust.",
  icon: "Brain",
  keyFeatures: [
    "Document ingestion, chunking, embeddings, and indexing",
    "Hybrid search, reranking, and source-aware retrieval",
    "Grounded answer generation with citations and fallback paths",
    "Admin workflows for refreshing and governing knowledge bases",
    "Accuracy evaluation sets and retrieval quality dashboards",
    "Secure access controls across private and shared content",
  ],
  techStack: [
    "LangChain",
    "LlamaIndex",
    "pgvector",
    "Pinecone",
    "OpenAI",
    "Anthropic",
    "FastAPI",
    "PostgreSQL",
  ],
};
