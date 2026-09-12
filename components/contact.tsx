"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const CHANNELS = [
  {
    label: "Email",
    value: "safwanshaikh053@gmail.com",
    href: "mailto:safwanshaikh053@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "safwan-shaikh-715007250",
    href: "https://www.linkedin.com/in/safwan-shaikh-715007250/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "safwanshaikh053",
    href: "https://github.com/safwanshaikh053",
    icon: Github,
  },
  {
    label: "Phone",
    value: "+91 77982 24765",
    href: "tel:+917798224765",
    icon: Phone,
  },
];

export function Contact() {
  return (
    <section id="contact" className="container py-28 pb-32">
      <SectionHeading index="06" title="Contact" />

      <Reveal>
        <h3 className="font-display max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Let&apos;s build{" "}
          <span className="text-gradient">something together.</span>
        </h3>
        <p className="mt-5 max-w-prose text-base text-muted-foreground md:text-lg">
          Open to entry-level Full Stack / Java Developer roles in Mumbai
          and remote. Reach out directly through any of the channels below —
          I reply quickly.
        </p>
      </Reveal>

      {/* Quick connect row */}
      <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-3">
        {CHANNELS.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={channel.label}
            className="glow-card flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-colors hover:text-accent-from"
          >
            <channel.icon className="h-5 w-5" />
          </a>
        ))}
      </Reveal>

      {/* Detailed contact cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map((channel, i) => (
          <Reveal key={channel.label} delay={0.14 + i * 0.06}>
            <motion.a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glow-card group flex h-full flex-col justify-between gap-8 rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20">
                <channel.icon className="h-5 w-5 text-accent-from" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">
                  {channel.label}
                </p>
                <p className="mt-1 break-words text-sm font-semibold">
                  {channel.value}
                </p>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
