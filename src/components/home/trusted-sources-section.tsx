import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { trustedSources } from "@/lib/config";

export function TrustedSourcesSection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <SectionHeader
                eyebrow="Transparency"
                title="Trusted Sources"
                description="FolsomChat summarizes and organizes information from credited official and local sources—and always links to the original publisher."
              />
              <ul className="mt-8 space-y-4">
                {trustedSources.map((source) => (
                  <li key={source} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lake" />
                    {source}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8" asChild>
                <Link href="/source-policy">Read our source policy</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-br from-lake/10 via-muted to-gold/10 p-8 sm:p-12">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-lake/15">
                  <Shield className="size-8 text-lake" />
                </div>
                <p className="mt-6 text-lg font-semibold text-foreground">
                  Credit where it&apos;s due
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We never republish full articles. Every summary includes attribution
                  and a direct link to the original source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
