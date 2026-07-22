"use client";

import * as React from "react";
import Link from "next/link";

import { SampleBadge } from "@/components/shared/sample-badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { whatsHappeningTabs } from "@/lib/config";
import { cn } from "@/lib/utils";

export function WhatsHappeningSection() {
  const [activeTab, setActiveTab] = React.useState<string>(whatsHappeningTabs[0].id);
  const active = whatsHappeningTabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="section-padding bg-muted/40">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Your calendar"
            title="What's Happening"
            description="Browse by timeframe and interest. Live event feeds will replace these sample listings."
          />
          <SampleBadge label="Sample listings" />
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="What's happening categories"
        >
          {whatsHappeningTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-lake text-lake-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <h3 className="text-lg font-semibold text-foreground">{active.label}</h3>
          <ul className="mt-5 space-y-4">
            {active.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm text-foreground"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="mt-6" asChild>
            <Link href="/events">See all events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
