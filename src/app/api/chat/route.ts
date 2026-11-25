import { NextRequest, NextResponse } from "next/server";

/**
 * AI Chat API route stub.
 * TODO: Connect to your preferred LLM provider (OpenAI, Gemini, etc.)
 *
 * This stub returns contextual responses based on keyword matching.
 * Replace the logic below with actual LLM API calls.
 */

const SYSTEM_PROMPT = `You are Rahul Verma's AI assistant on his portfolio website.
You help visitors learn about Rahul's work, skills, and experience.

About Rahul:
- AI Engineer specializing in AI, Computer Vision, and Robotics
- Based in Gorakhpur
- Currently working as AI Automation Engineer at Glam Moda WLL
- 1st Place winner at BisB Islamic Investment Hackathon (Tarakum) - BD 5,000
- President & Founder of IoT Club at University of Technology Bahrain
- 1.5+ years of professional experience

Projects:
- Tarakum: Islamic FinTech platform (1st Place hackathon winner)
- Door2Door: Full-stack delivery platform
- AMR Warehouse Robot: Autonomous mobile robot for logistics (1st Place)
- Huawei Innovation Competition: AI Healthcare (5th National)
- FireX Robot: Firefighting robot
- Computer Vision Projects: Object detection, segmentation, tracking
- Sumo X Competition: Combat robotics
- Robonexus: Combat robotics

AI Automation Systems (built for Glam Moda):
- WAZIR: Enterprise AI governance supervisor managing 8 specialist agents
- Instagram Support Agent: Handles 4 brand accounts
- WhatsApp Support Agent: Region-aware customer support
- Email Support Agent: Intelligent inbox processing

Skills:
- Languages: Python, C++, JavaScript, SQL
- Robotics: MQTT, Embedded Systems, Automation
- AI & CV: OpenCV, TensorFlow, YOLO, MindSpore

Services: Websites & Web Apps, Automation & Systems, Robotics, AI Agents & Intelligent Systems, Custom Applications

Be helpful, concise, and professional. If asked something you don't know, say so and suggest contacting Rahul directly at Abdallaelsiddig.m@gmail.com.`;

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = body.messages || [];

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "No user message provided" },
        { status: 400 }
      );
    }

    const query = lastMessage.content.toLowerCase();

    // ── Stub responses based on keywords ──
    // TODO: Replace with actual LLM API call using SYSTEM_PROMPT
    let response = "";

    if (query.includes("project") || query.includes("work")) {
      response =
        "Rahul has worked on 8 major projects including Tarakum (1st Place Islamic FinTech hackathon), an AMR Warehouse Robot (1st Place), and enterprise AI automation systems. Would you like to know more about a specific project?";
    } else if (query.includes("skill") || query.includes("tech")) {
      response =
        "Rahul's technical skills span Python, C++, JavaScript, and SQL for languages; MQTT, Embedded Systems, and Automation for robotics; and OpenCV, TensorFlow, YOLO, and MindSpore for AI & Computer Vision.";
    } else if (query.includes("experience") || query.includes("job")) {
      response =
        "Rahul is currently an AI Automation Engineer at Glam Moda WLL (since Apr 2026). Previously, he served as IT Technical Support & Web Developer there. He's also the President & Founder of the IoT Club at University of Technology Bahrain.";
    } else if (query.includes("contact") || query.includes("email") || query.includes("hire")) {
      response =
        "You can reach Rahul at Abdallaelsiddig.m@gmail.com or through the Contact section on this page, or connect on LinkedIn at linkedin.com/in/abdalla-elradi/";
    } else if (query.includes("service") || query.includes("offer")) {
      response =
        "Rahul offers 5 services: Websites & Web Apps, Automation & Systems, Robotics, AI Agents & Intelligent Systems, and Custom Applications. Would you like details about any specific service?";
    } else if (query.includes("automat") || query.includes("agent") || query.includes("wazir")) {
      response =
        "Rahul built enterprise AI automation systems at Glam Moda including WAZIR (a supervisor AI managing 8 specialist agents), plus dedicated agents for Instagram, WhatsApp, and Email support — all running on local LLMs.";
    } else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
      response =
        "Hello! I'm Rahul's AI assistant. I can tell you about his projects, skills, experience, services, or how to get in touch. What would you like to know?";
    } else {
      response = `That's a great question! While I'm currently a stub assistant with limited knowledge, I'd recommend reaching out to Rahul directly at Abdallaelsiddig.m@gmail.com for detailed answers. You can also explore the sections on this page for more information about his work.`;
    }

    // Simulate a brief delay for realism
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      message: {
        role: "assistant",
        content: response,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
