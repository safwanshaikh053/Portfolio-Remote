import { Reveal, SectionHeading } from "@/components/reveal";

const TIMELINE = [
  {
    title: "PG Diploma in Advanced Computing",
    org: "CDAC, AIT YCC",
    detail: "GPA 60.25",
  },
  {
    title: "B.E., Computer Science",
    org: "Dr. Babasaheb Ambedkar Marathwada University",
    detail: "GPA 6.8",
  },
  {
    title: "High School (Science)",
    org: "Dr. Rafik Zakaria College",
    detail: "GPA 69",
  },
];

export function Education() {
  return (
    <section id="education" className="container py-28">
      <SectionHeading index="05" title="Education" />
      <div className="glow-card max-w-3xl rounded-3xl p-8 sm:p-10">
        <div className="border-l-2 border-accent-from/30">
          {TIMELINE.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08}>
              <div className="relative py-6 pl-8">
                <span className="absolute -left-[7px] top-[1.85rem] h-3 w-3 rounded-full bg-gradient-to-r from-accent-from to-accent-to shadow-[0_0_16px_-2px_hsl(var(--accent-from)/0.9)]" />
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {entry.title}
                </h3>
                <p className="text-gradient mt-0.5 text-sm font-semibold">
                  {entry.org}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
