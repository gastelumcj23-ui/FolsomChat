import type { Metadata } from "next";
import { Map } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Interactive Map",
  description: "Explore Folsom on an interactive map.",
};

export default function MapPage() {
  return (
    <PlaceholderPage
      title="Interactive Map"
      description="See all of Folsom at a glance — restaurants, parks, events, and businesses on a beautiful map with clustered pins and category filters."
      badge="Coming in Phase 3"
      icon={Map}
      gradient="from-indigo-500/20 via-violet-500/10 to-purple-500/20"
      accentColor="text-indigo-500"
    />
  );
}
