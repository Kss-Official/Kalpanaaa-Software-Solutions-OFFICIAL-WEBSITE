import type { Service } from "../../data/site";

export const aiAgents: Service = {
  slug: "ai-agents",
  title: "AI Agents",
  tag: "AGENTS",
  description:
    "Goal-driven AI agent systems that plan, use tools, call APIs, coordinate multi-step tasks, and keep humans in control for high-impact decisions.",
  icon: "Bot",
  keyFeatures: [
    "Agent workflow design with planning, memory, and tool use",
    "Multi-agent collaboration for research, operations, and support",
    "Human approval gates for sensitive actions",
    "API, database, CRM, and internal tool integrations",
    "Tracing, evaluation, and guardrails for reliable execution",
    "Recovery flows for failed tools and incomplete tasks",
  ],
  techStack: [
    "LangGraph",
    "CrewAI",
    "LangSmith",
    "OpenAI",
    "Anthropic",
    "FastAPI",
    "PostgreSQL",
    "Docker",
  ],
};
