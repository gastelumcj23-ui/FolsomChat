import type { Metadata } from "next";
import { Search } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Search",
  description: "Search restaurants, parks, events, and businesses in Folsom.",
};

export default function SearchPage() {
  return (
    <PlaceholderPage
      title="Search Folsom"
      description="Global search across restaurants, parks, trails, events, and businesses. Press Cmd+K (or Ctrl+K) when search is fully implemented."
      badge="Coming in Phase 2"
      icon={Search}
      gradient="from-zinc-500/20 via-neutral-500/10 to-stone-500/20"
      accentColor="text-zinc-500"
    />
  );
}
