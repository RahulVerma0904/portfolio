export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "glam-moda-ai",
    role: "AI Automation Engineer",
    company: "Glam Moda WLL",
    period: "Apr 2026 – Present",
    description:
      "Leading AI-driven workflow automation and intelligent systems integration for multi-brand e-commerce operations.",
    highlights: [
      "AI-driven workflow automation",
      "Process optimization",
      "Systems integration",
    ],
  },
  {
    id: "glam-moda-it",
    role: "IT Technical Support & Web Developer",
    company: "Glam Moda",
    period: "Oct 2024 – Jan 2026",
    description:
      "Managed technical infrastructure and developed web solutions for a growing e-commerce business.",
    highlights: [
      "Shopify specialization",
      "System optimization",
      "Digital marketing",
    ],
  },
  {
    id: "iot-club",
    role: "President & Founder – IoT Club",
    company: "University of Technology Bahrain",
    period: "2023 – Present",
    description:
      "Founded and lead the university IoT club, driving innovation and hands-on technical education.",
    highlights: [
      "Led 150+ active members",
      "Organized quarterly innovation challenges",
      "Award-winning projects",
    ],
  },
  {
    id: "workshop-instructor",
    role: "Robotics & IoT Workshop Instructor",
    company: "University of Technology Bahrain",
    period: "2023 – Present",
    description:
      "Designed and delivered practical workshops on robotics, IoT, and embedded systems.",
    highlights: [
      "Led hands-on workshops",
      "Robot competition coaching",
      "Mentored 40+ students",
    ],
  },
];
