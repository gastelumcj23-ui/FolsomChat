import Link from "next/link";
import {
  Heart,
  Lightbulb,
  MapPin,
  Search,
  ThumbsUp,
} from "lucide-react";

import { SampleBadge } from "@/components/shared/sample-badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { communitySections } from "@/lib/config";

const iconMap = {
  ThumbsUp,
  Lightbulb,
  Search,
  MapPin,
  Heart,
} as const;

export function CommunityPreviewSection() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Neighbors helping neighbors"
            title="Community"
            description="Share recommendations, local ideas, and neighborhood updates. User accounts launch soon—preview sections below."
          />
          <SampleBadge label="Until accounts launch" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communitySections.map((section) => {
            const Icon = iconMap[section.icon];
            return (
              <article
                key={section.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-gold/15">
                  <Icon className="size-5 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <SampleBadge label="Sample" className="mt-4" />
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/community">Explore community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
