import type { Metadata } from "next";
import { Trees } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Parks & Trails",
  description: "Explore parks and trails in Folsom, California.",
};

export default function ParksPage() {
  return (
    <PlaceholderPage
      title="Parks & Trails"
      description="Folsom Lake, American River Trail, and neighborhood parks — find your next outdoor adventure with amenity and difficulty filters."
      badge="Coming in Phase 2"
      icon={Trees}
      gradient="from-emerald-500/20 via-green-500/10 to-teal-500/20"
      accentColor="text-emerald-500"
    />
  );
}
