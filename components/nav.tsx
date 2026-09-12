"use client";

import * as React from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">SAFWAN</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/Mohammed_Safwan_Resume.pdf" download>
            <Button size="sm" variant="primary">
              <Download className="h-3.5 w-3.5" />
              Résumé
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Mohammed_Safwan_Resume.pdf"
              download
              className="py-2.5 text-sm font-medium text-gradient"
            >
              Download Résumé
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
