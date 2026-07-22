import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { SampleBadge } from "@/components/shared/sample-badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sampleNews } from "@/lib/config";

export function LatestNewsSection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Local headlines"
            title="Latest Local News"
            description="Curated summaries from trusted Folsom sources. Every story links back to the original publisher."
          />
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/news">View all news</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sampleNews.map((story, index) => (
            <article
              key={story.id}
              className={`flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elevated ${
                index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{story.category}</Badge>
                <SampleBadge />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span>{story.source}</span>
                <span aria-hidden="true">·</span>
                <time>{story.time}</time>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                {story.headline}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {story.summary}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="mt-5 w-full sm:w-auto"
                disabled
                title="Sample content — original source links coming soon"
              >
                <ExternalLink className="size-3.5" />
                Read Original Source
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
