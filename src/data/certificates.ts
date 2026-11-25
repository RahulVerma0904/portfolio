export interface Certificate {
  id: string;
  name: string;
  image: string;
  pdfLink?: string;
}

export const certificates: Certificate[] = [
  {
    id: "hardware-upgrade",
    name: "Hardware and Upgrade Support",
    image: "/certificates/hardware-upgrade.png",
  },
  {
    id: "cisco-packet-tracer",
    name: "Getting Started with Cisco Packet Tracer",
    image: "/certificates/cisco-packet-tracer.png",
  },
  {
    id: "networking",
    name: "Networking",
    image: "/certificates/networking.png",
  },
  {
    id: "ip-network",
    name: "IP Network Fundamental",
    image: "/certificates/ip-network.png",
  },
  {
    id: "1m-prompters",
    name: "1 MILLION PROMPTERS",
    image: "/certificates/1m-prompters.png",
  },
  {
    id: "first-aid",
    name: "First Aid Training",
    image: "/certificates/first-aid.png",
  },
  {
    id: "gemini-student",
    name: "Gemini Certified University Student",
    image: "/certificates/gemini-student.png",
  },
  {
    id: "google-ads",
    name: "Google Ads Creative Certification",
    image: "/certificates/google-ads.png",
  },
  {
    id: "huawei-ict",
    name: "Huawei ICT Competition",
    image: "/certificates/huawei-ict.png",
  },
  {
    id: "iot-cert",
    name: "Internet Of Things Certificate",
    image: "/certificates/iot-cert.png",
  },
  {
    id: "modern-ai",
    name: "Intro to Modern AI Certificate",
    image: "/certificates/modern-ai.png",
  },
  {
    id: "cybersecurity",
    name: "Introduction to Cybersecurity Awareness",
    image: "/certificates/cybersecurity.png",
  },
  {
    id: "microsoft",
    name: "Microsoft Certificate",
    image: "/certificates/microsoft.png",
  },
  {
    id: "networking-career",
    name: "Professional Networking for Career Growth",
    image: "/certificates/networking-career.png",
  },
  {
    id: "python-essentials",
    name: "Python Essentials",
    image: "/certificates/python-essentials.png",
    pdfLink: "/certificates/PythonEssentials1.pdf",
  },
  {
    id: "altaawon",
    name: "Altaawon Secondary School",
    image: "/certificates/altaawon.png",
  },
];
