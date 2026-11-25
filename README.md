# Abdalla Elradi — AI & Robotics Engineer Portfolio

A dark, high-tech single-page personal portfolio for **Abdalla Elradi (Abdalla Elsiddig)**, Informatics Engineer specializing in AI, Computer Vision, and Robotics, based in Manama, Bahrain.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP ScrollTrigger**.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:

   ```bash
   npm run build
   npm start
   ```

## Editing Content

All portfolio content is stored in typed data files under `src/data/` so you can update copy, projects, skills, and availability without touching any UI components:

- `src/data/personal.ts` — Hero text, quick stats, bio, About bento cards, and Contact info
- `src/data/projects.ts` — Featured projects (replace the `// TODO: replace with real details` descriptions, roles, tech stacks, and links)
- `src/data/automations.ts` — Enterprise AI automation systems & intro copy
- `src/data/skills.ts` — Grouped technical skills
- `src/data/services.ts` — Services offered
- `src/data/availability.ts` — Available weekdays (`0` = Sun … `6` = Sat), time slots, and call duration
- `src/data/certificates.ts` — Certificates list, badge images, and PDF links
- `src/data/experience.ts` — Professional experience timeline
- `src/data/navigation.ts` — Sticky navbar anchor links
- `src/data/socials.ts` — GitHub, LinkedIn, Linktree, and email links

## Replacing Assets

Place your media files in `public/` with the following paths (missing files render graceful gradient placeholders so the build never breaks):

- **Profile & About**: `public/profile.png`, `public/c1.jpg`, `public/manama.jpg`
- **Projects**: `public/tarakum-card.jpg`, `public/door2door-cover.jpg`, `public/amr-card.jpg`, `public/techtrap-card.jpg`, `public/7.jpeg`, `public/MV.jpeg`, `public/8.jpeg`, `public/9.jpeg`
- **Automations Video**: `public/systems-preview.mp4` and `public/systems-preview-poster.jpg`
- **Certificates**: `public/certificates/<name>.png` and `public/certificates/PythonEssentials1.pdf`
- **Resume**: `public/Abdalla-Elsiddig.Resume.pdf`

## Connecting API Stubs

- **AI Chat (`src/app/api/chat/route.ts`)**: Currently returns keyword-based stub responses. Replace the stub logic with your preferred LLM provider (e.g., OpenAI, Gemini, Anthropic) using the seeded `SYSTEM_PROMPT`.
- **Call Booking (`src/app/api/book/route.ts`)**: Currently validates input and logs the booking request. Connect Resend or Nodemailer and add your `RESEND_API_KEY` (or SMTP credentials) to `.env.local` to receive email notifications.

## Deployment

Deploy directly to **Vercel** or **Netlify** with zero extra configuration:

- **Vercel**: Push to GitHub and import the repository in Vercel.
- **Netlify**: Connect the repository and use `npm run build` as the build command (with the Next.js runtime).

Before deploying, update `baseUrl` in `src/app/sitemap.ts`, `src/app/robots.ts`, and `url` in `src/app/layout.tsx` to your production domain.
