import Link from "next/link";
import {
  Building2,
  Calendar,
  GraduationCap,
  Landmark,
  Train,
  Trees,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { exploreCards } from "@/lib/config";
import { cn } from "@/lib/utils";

const iconMap = {
  UtensilsCrossed,
  Calendar,
  Trees,
  Building2,
  GraduationCap,
  Landmark,
  Train,
  Waves,
} as const;

export function ExploreFolsomSection() {
  return (
    <section id="explore" className="section-padding">
      <div className="container-page">
        <SectionHeader
          eyebrow="Discover"
          title="Explore Folsom"
          description="From Historic Sutter Street to Folsom Lake—find restaurants, recreation, schools, and city services in one organized hub."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exploreCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-xl bg-gradient-to-br",
                    card.gradient
                  )}
                >
                  <Icon className="size-6 text-lake" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground group-hover:text-lake">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <span className="mt-4 text-sm font-medium text-lake">Explore →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
