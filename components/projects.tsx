"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const PROJECTS = [
  {
    name: "OrderHub",
    tagline: "Canteen Management System",
    period: null as string | null,
    description:
      "Full-stack web app automating college canteen operations — digital food ordering, menu management, and order tracking, deployed via Docker with a cloud MySQL backend.",
    points: [
      "Digital ordering, menu management, and order tracking",
      "JWT-based user authentication",
      "REST APIs connecting frontend and backend",
      "Deployed via Docker on Render with an Aiven MySQL database",
    ],
    tags: ["Spring Boot", "MySQL", "Docker", "JWT", "Bootstrap"],
    github:
      "https://github.com/safwanshaikh053/OrderHub-Canteen-Management-System",
    live: "https://orderhub-zjsu.onrender.com",
  },
  {
    name: "Nexnid-ERP",
    tagline: "Enterprise Resource Planning System",
    period: null as string | null,
    description:
      "Full-stack ERP application for managing leads, projects, employees, and business workflows, with role-based authentication and access control across multiple organizational roles.",
    points: [
      "Responsive UI built with React.js, JavaScript, HTML5, CSS3, and Bootstrap",
      "REST APIs integrated with Spring Boot and MySQL for data processing",
      "Role-based auth and access control using JWT and Spring Security",
      "Delivered through full SDLC — requirements, testing, debugging, deployment",
    ],
    tags: ["React.js", "Spring Boot", "MySQL", "JWT", "Spring Security"],
    github:
      "https://github.com/safwanshaikh053/Nexnid-ERP-Interior-Designing-Company",
    live: null as string | null,
  },
  {
    name: "AI-Powered Recruitment & Talent Management Platform",
    tagline:
      "Full-stack SaaS recruitment platform with AI-powered candidate-job matching and role-based dashboards",
    period: null as string | null,
    description:
      "A full-stack SaaS recruitment platform connecting candidates, recruiters, and admins — covering job posting, applications, interview scheduling, and AI-driven candidate-job matching, built with strict role-based access control throughout.",
    points: [
      "Role-based auth (candidate/recruiter/admin) with protected routes and ownership-scoped server actions",
      "End-to-end hiring pipeline — job posting, applications, stage tracking, and interview scheduling",
      "AI-powered match scoring: a deterministic weighted algorithm paired with AI-generated explanations, cached to avoid repeat API calls",
      "Resume upload with PDF text extraction feeding directly into candidate-job matching",
      "Admin panel with platform analytics, user/company moderation, and full audit logging",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Tailwind CSS",
      "Recharts",
      "Gemini AI",
    ],
    github: "https://github.com/safwanshaikh053/AI-Powered-recruitment-platform",
    live: "https://recruitment-platform-seven.vercel.app/",
  },
  {
    name: "DentalPro Suite",
    tagline: "Dental Clinic Management Platform",
    period: null as string | null,
    description:
      "DentalPro Suite is a full-stack dental clinic management platform designed to streamline day-to-day clinical operations through a centralized digital system. It provides dedicated workflows for managing patients, appointments, check-ins, procedures, and the clinic queue, with a modern dashboard giving clinic staff clear visibility into daily operations.",
    points: [
      "Patient management, appointment scheduling, and check-in workflow",
      "Real-time queue management and procedure management",
      "Dentist/doctor management with role-based workflows",
      "API-driven architecture integrating frontend workflows with backend services",
      "Responsive, modern UI with production-ready deployment",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Authentication",
    ],
    github: "https://github.com/safwanshaikh053/dentalpro-suite",
    live: "https://dentalpro-suite-two.vercel.app/",
  },
  {
    name: "Nova — Banking Dashboard",
    tagline: "Full-stack fintech dashboard with atomic transfers",
    period: null as string | null,
    description:
      "Nova is a banking dashboard built to explore data integrity in financial systems and turn raw transaction history into something actually useful. Every transfer runs inside a database transaction — balances update and a transaction record is created atomically, or nothing happens at all — eliminating any risk of partial, inconsistent state.",
    points: [
      "Atomic fund transfers via database transactions — no partial or inconsistent state",
      "Rule-based insights engine analyzing spending by category and month-over-month trends, with no external API dependency",
      "Live-updating balances and animated data visualizations",
      "Custom dark \"fintech\" design system built with Framer Motion",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Framer Motion",
      "Recharts",
    ],
    github: "https://github.com/safwanshaikh053/Nova-Bank",
    live: "https://nova-bank-coral.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-28">
      <SectionHeading index="04" title="Projects" />
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glow-card rounded-3xl p-8 sm:p-10"
            >
              {project.period && (
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.period}
                </p>
              )}
              <h3 className="font-display mt-2 text-3xl font-bold tracking-tight">
                {project.name}
              </h3>
              <p className="text-gradient mt-1.5 text-sm font-semibold">
                {project.tagline}
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.description}
              </p>

              <ul className="mt-5 max-w-3xl space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-accent-from/40 pl-3 text-sm text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-accent-from hover:text-accent-from"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_-8px_hsl(var(--accent-from)/0.8)]"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    Live app
                  </a>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
