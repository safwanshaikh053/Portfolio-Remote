import { Reveal, SectionHeading } from "@/components/reveal";

const ROLE = {
  title: "Junior Developer",
  company: "Wonder Travels",
  location: "Chh. Sambhajinagar (Aurangabad), Maharashtra",
  period: "Jul 2022 – Aug 2025",
  points: [
    "Built and maintained responsive, scalable web applications end-to-end using React.js, JavaScript, HTML5, CSS3, Bootstrap, and Java Spring Boot — integrating RESTful APIs (Axios) with MySQL databases via React Hooks and Redux for reliable state management.",
    "Drove the complete Agile SDLC — requirement gathering, code reviews, testing, debugging, deployment, and performance optimization — collaborating with backend teams to ship reliable, production-ready features and resolve production issues.",
  ],
};

export function Experience() {
  return (
    <section id="experience" className="container py-28">
      <SectionHeading index="02" title="Experience" />
      <Reveal>
        <div className="glow-card rounded-3xl p-8 sm:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {ROLE.title} ·{" "}
              <span className="text-gradient">{ROLE.company}</span>
            </h3>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {ROLE.period}
            </p>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {ROLE.location}
          </p>
          <ul className="mt-6 max-w-3xl space-y-3">
            {ROLE.points.map((point) => (
              <li
                key={point}
                className="border-l-2 border-accent-from/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
