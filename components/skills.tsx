import { Reveal, SectionHeading } from "@/components/reveal";

const GROUPS = [
  {
    label: "Languages & Core",
    items: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3", "OOP"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "React Hooks",
      "Redux (Basic)",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "REST API Development",
    ],
  },
  {
    label: "Database & Tools",
    items: ["MySQL", "Axios", "Maven", "Git", "GitHub", "Docker"],
  },
  {
    label: "Practices",
    items: [
      "SDLC",
      "Agile",
      "Full Stack Development",
      "Debugging",
      "Performance Optimization",
      "System Integration",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="container py-28">
      <SectionHeading index="03" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <div className="glow-card flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {group.label}
                </h3>
                <span className="text-gradient font-display text-xs font-bold">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-accent-from hover:text-accent-from hover:shadow-[0_0_20px_-8px_hsl(var(--accent-from)/0.7)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
