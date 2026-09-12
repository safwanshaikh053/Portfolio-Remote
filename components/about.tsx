import { Reveal, SectionHeading } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="container py-28">
      <SectionHeading index="01" title="About" />
      <Reveal>
        <div className="glow-card grid gap-10 rounded-3xl p-8 md:grid-cols-[0.4fr_0.6fr] md:p-12">
          <p className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Grounded in fundamentals,{" "}
            <span className="text-gradient">built for production.</span>
          </p>
          <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm a Full Stack Developer with 3+ years of experience
              building scalable, responsive web applications using
              React.js, JavaScript, Java, Spring Boot, and MySQL —
              delivering enterprise-level ERP systems and RESTful APIs
              across the complete SDLC, with production deployments on
              Docker, Render, and Aiven.
            </p>
            <p>
              I've applied this across ERP and e-commerce style systems:
              role-based authentication with Spring Security and JWT,
              structured data models, and interfaces built to hold up under
              real usage. I recently completed a CDAC PG-DAC diploma to
              deepen my advanced computing fundamentals, and I'm now
              actively looking for my next Full Stack Developer
              opportunity.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
