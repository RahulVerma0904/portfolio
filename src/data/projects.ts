export interface Project {
  id: string;
  number: number;
  title: string;
  category: string;
  badge?: string;
  coverImage: string;
  description: string;
  techStack: string[];
  role: string;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "tarakum",
    number: 1,
    title: "Tarakum",
    category: "Islamic FinTech",
    badge: "1st Place",
    coverImage: "/tarakum-card.jpg",
    // TODO: replace with real details
    description:
      "An Islamic FinTech platform developed for the BisB Islamic Investment Hackathon. The solution addresses Sharia-compliant investment challenges through innovative technology and user-centered design.",
    techStack: ["React", "Node.js", "Python", "AI/ML"],
    role: "Lead Developer",
  },
  {
    id: "door2door",
    number: 2,
    title: "Door2Door Delivery Platform",
    category: "Full-Stack Web App",
    coverImage: "/door2door-cover.jpg",
    // TODO: replace with real details
    description:
      "A comprehensive delivery platform connecting customers with local delivery services. Features real-time tracking, route optimization, and a seamless ordering experience.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Maps API"],
    role: "Full-Stack Developer",
  },
  {
    id: "amr-robot",
    number: 3,
    title: "AMR Warehouse Robot",
    category: "Robotics",
    badge: "1st Place",
    coverImage: "/amr-card.jpg",
    // TODO: replace with real details
    description:
      "An Autonomous Mobile Robot designed for warehouse logistics. Implements path planning, obstacle avoidance, and inventory management through computer vision and sensor fusion.",
    techStack: ["ROS", "Python", "OpenCV", "MQTT", "Embedded C"],
    role: "Robotics Engineer",
  },
  {
    id: "huawei-innovation",
    number: 4,
    title: "Huawei Innovation Competition",
    category: "AI Healthcare",
    badge: "5th · National",
    coverImage: "/techtrap-card.jpg",
    // TODO: replace with real details
    description:
      "An AI-powered healthcare solution developed for the Huawei Innovation Competition. Applies deep learning and computer vision to assist in medical diagnostics and patient care workflows.",
    techStack: ["MindSpore", "Python", "TensorFlow", "Computer Vision"],
    role: "AI Developer",
  },
  {
    id: "firex-robot",
    number: 5,
    title: "FireX Robot",
    category: "Robotics",
    coverImage: "/7.jpeg",
    // TODO: replace with real details
    description:
      "A firefighting robot equipped with sensors for flame detection, thermal imaging, and autonomous navigation in hazardous environments. Designed for rapid deployment in emergency scenarios.",
    techStack: ["Arduino", "C++", "Sensors", "IoT"],
    role: "Robotics Engineer",
  },
  {
    id: "cv-projects",
    number: 6,
    title: "Computer Vision Projects",
    category: "Computer Vision",
    coverImage: "/MV.jpeg",
    // TODO: replace with real details
    description:
      "A collection of computer vision projects encompassing object detection, image segmentation, and real-time tracking systems built with industry-standard frameworks.",
    techStack: ["OpenCV", "YOLO", "TensorFlow", "Python"],
    role: "CV Engineer",
  },
  {
    id: "sumo-x",
    number: 7,
    title: "Sumo X Competition",
    category: "Robotics",
    coverImage: "/8.jpeg",
    // TODO: replace with real details
    description:
      "A competitive sumo robot engineered for combat robotics tournaments. Features advanced motor control, opponent detection, and strategic maneuvering algorithms.",
    techStack: ["Arduino", "C++", "Sensors", "3D Printing"],
    role: "Robotics Engineer",
  },
  {
    id: "robonexus",
    number: 8,
    title: "Robonexus",
    category: "Combat Robotics",
    coverImage: "/9.jpeg",
    // TODO: replace with real details
    description:
      "A combat robot built for competitive robotics events. Engineered for durability, speed, and offensive capability with custom-designed weapon systems and reinforced chassis.",
    techStack: ["CAD", "Embedded C", "Electronics", "Mechanical Design"],
    role: "Lead Builder",
  },
];
