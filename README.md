Mohammed Safwan — Portfolio

Personal portfolio site for Mohammed Safwan, a Full Stack Developer with 3+ years of experience in Java, Spring Boot, React.js, and MySQL.

Live site: https://mohammed-safwan-portfolio.vercel.app

Tech Stack
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Animation: Framer Motion
Icons: Lucide React
UI primitives: shadcn/ui-style components (hand-built, no CLI dependency)
Deployment: Vercel
Sections
Section	What it covers
Hero	Name, role, photo, résumé download, availability badge
Availability	Quick-glance status: open to work, flexibility, location
About	Professional summary
Experience	Work history
Skills	Technical skills grouped by category
Projects	Nova (banking dashboard), Nexnid-ERP, OrderHub — with live/GitHub links
Education	Academic timeline
Contact	Direct links — email, LinkedIn, GitHub, phone
Design

Dark-first, "futuristic tech" aesthetic — animated ambient gradient background, glassmorphic cards with glow-on-hover, and a cyan → violet gradient accent used across headings, buttons, and interactive elements.

Getting Started
bash
npm install
npm run dev

Open http://localhost:3000 to view it.

Project Structure
app/            Routes, global styles, SEO (metadata, robots.ts, sitemap.ts)
components/     Page sections (hero, about, experience, skills, projects, education, contact)
components/ui/  Reusable primitives (Button)
lib/            cn() class-merging helper
public/         Résumé PDF, profile photo
Deployment

Deployed on Vercel, connected to this repo's main branch — every push auto-redeploys. No build configuration overrides needed; Vercel auto-detects Next.js.

Contact
Email: safwanshaikh053@gmail.com
LinkedIn: safwan-shaikh-715007250
GitHub: @safwanshaikh053
