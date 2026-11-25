export interface SkillGroup {
  category: string;
  items: { name: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Python" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "Robotics",
    items: [
      { name: "MQTT" },
      { name: "Embedded Systems" },
      { name: "Automation" },
    ],
  },
  {
    category: "AI & CV",
    items: [
      { name: "OpenCV" },
      { name: "TensorFlow" },
      { name: "YOLO" },
      { name: "MindSpore" },
    ],
  },
];
