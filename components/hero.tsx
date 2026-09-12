"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowDownRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="container grid min-h-[92vh] items-center gap-16 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr] md:pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center"
      >
        <motion.span
          variants={item}
          className="glow-card inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-xs sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-semibold uppercase tracking-wide text-emerald-400">
              Available Now
            </span>
          </span>
          <span className="h-4 w-px bg-border" />
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Globe2 className="h-3.5 w-3.5" />
            Remote/Onsite · Full-time · Global
          </span>
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display mt-7 text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
        >
          Mohammed
          <br />
          <span className="text-gradient">Safwan</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-xl font-medium text-foreground/90 md:text-2xl"
        >
          Full Stack Developer — Java · Spring Boot · React.js
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Full Stack Developer with 3+ years of experience building
          scalable, responsive web applications and RESTful APIs across
          the complete Agile SDLC — now sharpened by a CDAC PG-DAC diploma
          in advanced computing.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects">
            <Button size="default">
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="/Mohammed_Safwan_Resume.pdf" download>
            <Button variant="outline" size="default">
              <Download className="h-4 w-4" />
              Download Résumé
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="relative mx-auto flex w-full max-w-sm items-center justify-center md:max-w-none"
      >
        <div className="glow-ring relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-border">
          <Image
            src="/profile.png"
            alt="Mohammed Safwan"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glow-card absolute -left-6 bottom-10 hidden rounded-2xl px-4 py-3 sm:block"
        >
          <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">
            Stack
          </p>
          <p className="font-display text-sm font-semibold text-gradient">
            Java · Spring · React
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
