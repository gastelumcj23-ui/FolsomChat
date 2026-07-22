import {
  Calendar,
  Car,
  Landmark,
  Sparkles,
  Sun,
} from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { folsomTodayCards } from "@/lib/config";
import { cn } from "@/lib/utils";

const iconMap = {
  Sun,
  Car,
  Landmark,
  Calendar,
  Sparkles,
} as const;

export function FolsomTodaySection() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Live dashboard"
          title="Folsom Today"
          description="A quick snapshot of weather, alerts, city updates, and what's ahead—updated automatically when live feeds connect."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {folsomTodayCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <article
                key={card.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-elevated"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-lake/10">
                    <Icon className="size-5 text-lake" />
                  </div>
                  <Badge variant="outline" className="text-[9px] uppercase tracking-wide">
                    Placeholder
                  </Badge>
                </div>
                <h3 className="mt-4 text-sm font-medium text-muted-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-base font-semibold text-foreground">
                  {card.value}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.detail}
                </p>
                <p className={cn("mt-4 text-[10px] uppercase tracking-wide text-gold")}>
                  {card.badge}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
