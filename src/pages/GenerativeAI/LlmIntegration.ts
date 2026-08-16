import type { Service } from "../../data/site";

export const llmIntegration: Service = {
  slug: "llm-integration",
  title: "LLM Integration",
  tag: "LLM",
  description:
    "LLM integration for existing products and business systems, including provider selection, API orchestration, streaming UX, privacy controls, and cost-aware operations.",
  icon: "Cable",
  keyFeatures: [
    "LLM provider selection and architecture planning",
    "API integration for OpenAI, Anthropic, and local models",
    "Streaming responses, structured outputs, and tool calling",
    "Token budgeting, caching, rate limits, and cost controls",
    "Security controls for sensitive prompts and private data",
    "Fallback models, observability, and reliability patterns",
  ],
  techStack: [
    "OpenAI",
    "Anthropic",
    "Ollama",
    "LangChain",
    "FastAPI",
    "Python",
    "Redis",
    "Docker",
  ],
};
