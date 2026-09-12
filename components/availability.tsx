import {
  CheckCircle2,
  Globe2,
  Users,
  Rocket,
  Zap,
  Smartphone,
  Laptop,
  MapPin,
  Plane,
  CircleDot,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const CARDS = [
  {
    icon: CheckCircle2,
    iconClass: "text-emerald-400",
    dotClass: "bg-emerald-400",
    title: "Available Now",
    items: [
      { icon: Rocket, label: "Full-time roles" },
      { icon: Zap, label: "Immediate start available" },
    ],
  },
  {
    icon: Globe2,
    iconClass: "text-accent-from",
    dotClass: "bg-accent-from",
    title: "Work Flexibility",
    items: [
      { icon: Smartphone, label: "Onsite/Hybrid preferred" },
      { icon: Globe2, label: "Open to international remote" },
      { icon: Laptop, label: "Adaptable to company needs" },
    ],
  },
  {
    icon: Users,
    iconClass: "text-accent-to",
    dotClass: "bg-accent-to",
    title: "Based in India",
    items: [
      { icon: MapPin, label: "Mumbai, Maharashtra" },
      { icon: Plane, label: "Ready to relocate" },
      { icon: CircleDot, label: "Visa sponsorship welcome" },
    ],
  },
];

export function Availability() {
  return (
    <section className="container pb-8">
      <div className="grid gap-5 sm:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <div className="glow-card h-full rounded-2xl p-6">
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${card.dotClass}`} />
                <card.icon className={`h-4 w-4 ${card.iconClass}`} />
                <h3 className="font-display text-sm font-bold tracking-tight">
                  {card.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {card.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                  >
                    <item.icon className={`h-3.5 w-3.5 shrink-0 ${card.iconClass}`} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
