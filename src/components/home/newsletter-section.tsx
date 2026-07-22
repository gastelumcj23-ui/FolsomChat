"use client";

import { Mail } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
          <SectionHeader
            title="Folsom in five minutes."
            description="A weekday digest of local news, events, and community highlights—delivered to your inbox."
            align="center"
          />

          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup placeholder"
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-lake"
                aria-label="Email address"
                disabled
              />
            </div>
            <Button type="submit" variant="accent" className="h-12" disabled>
              Sign up
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            Newsletter signup is a nonfunctional placeholder. No data is collected yet.
          </p>
        </div>
      </div>
    </section>
  );
}
