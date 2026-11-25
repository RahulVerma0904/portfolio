import type { Metadata } from "next";
import { spaceGrotesk, inter, playfairDisplay } from "@/lib/fonts";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Verma | AI & Robotics Engineer",
  description:
    "Portfolio of Rahul Verma — AI & Robotics Engineer specializing in machine learning, computer vision, autonomous systems, and intelligent robotics.",
  keywords: [
    "AI Engineer",
    "Robotics Engineer",
    "Machine Learning",
    "Computer Vision",
    "Autonomous Systems",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Verma" }],
  creator: "Rahul Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rahul Verma | AI & Robotics Engineer",
    description:
      "Portfolio of Rahul Verma — AI & Robotics Engineer specializing in machine learning, computer vision, autonomous systems, and intelligent robotics.",
    siteName: "Rahul Verma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Verma | AI & Robotics Engineer",
    description:
      "Portfolio of Rahul Verma — AI & Robotics Engineer specializing in machine learning, computer vision, autonomous systems, and intelligent robotics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Verma",
  jobTitle: "AI & Robotics Engineer",
  description:
    "AI & Robotics Engineer specializing in machine learning, computer vision, autonomous systems, and intelligent robotics.",
  url: "https://abdallaelsiddig.com",
  sameAs: [],
  knowsAbout: [
    "Artificial Intelligence",
    "Robotics",
    "Machine Learning",
    "Computer Vision",
    "Autonomous Systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${playfairDisplay.variable} dark`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
