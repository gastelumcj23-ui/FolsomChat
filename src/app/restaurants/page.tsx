import type { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Restaurants",
  description: "Discover the best restaurants in Folsom, California.",
};

export default function RestaurantsPage() {
  return (
    <PlaceholderPage
      title="Restaurant Directory"
      description="Browse curated Folsom restaurants — from Historic District favorites to lakeside dining. Filter by cuisine, price, and rating."
      badge="Coming in Phase 2"
      icon={UtensilsCrossed}
      gradient="from-orange-500/20 via-amber-500/10 to-yellow-500/20"
      accentColor="text-orange-500"
    />
  );
}
