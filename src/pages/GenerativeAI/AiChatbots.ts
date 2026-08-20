import type { Service } from "../../data/site";

export const aiChatbots: Service = {
  slug: "ai-chatbots",
  title: "AI Chatbots",
  tag: "CHATBOT",
  description:
    "Conversational AI chatbots for websites, support desks, sales funnels, and internal teams with grounded knowledge, handoff logic, and measurable quality.",
  icon: "MessagesSquare",
  keyFeatures: [
    "Website, WhatsApp, and in-app chatbot experiences",
    "Knowledge-base answers with RAG and source grounding",
    "Lead qualification, support triage, and ticket handoff flows",
    "Conversation memory, user context, and escalation rules",
    "Admin controls for content updates and response tuning",
    "Analytics for intent coverage, deflection, and satisfaction",
  ],
  techStack: [
    "OpenAI",
    "LangChain",
    "pgvector",
    "FastAPI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Redis",
  ],
};
