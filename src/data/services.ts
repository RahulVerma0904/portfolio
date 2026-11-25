export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites & Web Apps",
    description:
      "Modern, responsive web applications built with cutting-edge frameworks and performance-first architecture.",
    icon: "globe",
  },
  {
    id: "automation",
    title: "Automation & Systems",
    description:
      "End-to-end process automation that eliminates manual work and scales with your business.",
    icon: "zap",
  },
  {
    id: "robotics",
    title: "Robotics",
    description:
      "Custom robotic systems from concept to deployment — sensors, actuators, and intelligent control.",
    icon: "cpu",
  },
  {
    id: "ai-agents",
    title: "AI Agents & Intelligent Systems",
    description:
      "Autonomous AI agents that handle customer support, data processing, and decision-making.",
    icon: "brain",
  },
  {
    id: "custom-apps",
    title: "Custom Applications",
    description:
      "Tailored software solutions designed around your unique workflows and requirements.",
    icon: "code",
  },
];
