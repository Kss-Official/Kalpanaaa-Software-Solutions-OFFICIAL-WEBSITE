import type { Service } from "../../data/site";

export const generativeAiSolutions: Service = {
  slug: "generative-ai-solutions",
  title: "Generative AI Solutions",
  tag: "GEN-AI",
  description:
    "Production-grade generative AI features for business workflows, customer experiences, knowledge work, and internal automation with security, evaluation, and observability built in.",
  icon: "Sparkles",
  keyFeatures: [
    "AI use-case discovery and solution architecture",
    "Custom assistants for content, support, research, and operations",
    "Prompt systems, context design, and response quality controls",
    "Secure application integration with APIs and business data",
    "Evaluation workflows for accuracy, safety, and consistency",
    "Monitoring, feedback loops, and continuous improvement",
  ],
  techStack: [
    "OpenAI",
    "Anthropic",
    "LangChain",
    "LangSmith",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Redis",
  ],
};
