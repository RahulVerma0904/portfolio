export interface Automation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const automationsIntro =
  "Production AI agent systems built for real business operations — customer support automation across Instagram, WhatsApp, and email, plus a governance layer that supervises them all.";

export const automations: Automation[] = [
  {
    id: "wazir",
    title: "WAZIR — Agent Department",
    subtitle: "Enterprise AI Governance",
    description:
      "A supervisor AI that runs eight specialist agents — with a kill switch.",
    tags: [
      "Custom Automation Engine",
      "Multi-Agent Orchestration",
      "Governance & Permissions",
    ],
  },
  {
    id: "instagram-agent",
    title: "Instagram Support Agent",
    subtitle: "Social Commerce Automation",
    description: "One AI, four brand accounts, zero public order leaks.",
    tags: ["Custom Automation Engine", "Instagram Graph API", "Local LLM"],
  },
  {
    id: "whatsapp-agent",
    title: "WhatsApp Support Agent",
    subtitle: "Regional Customer Support",
    description:
      "Region-aware support that knows which store your order is in.",
    tags: ["Custom Automation Engine", "WhatsApp Business API", "Local LLM"],
  },
  {
    id: "email-agent",
    title: "Email Support Agent",
    subtitle: "Intelligent Email Processing",
    description:
      "Reads the inbox, checks three stores, drafts before it ever sends.",
    tags: ["Custom Automation Engine", "Outlook / Graph API", "Local LLM"],
  },
];
