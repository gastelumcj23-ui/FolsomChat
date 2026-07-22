import type { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Eat & Drink",
  description: "Restaurants, cafes, and dining in Folsom, California.",
};

export default function EatDrinkPage() {
  return (
    <PlaceholderPage
      title="Eat & Drink in Folsom"
      description="From Historic Sutter Street to lakeside patios—discover restaurants, cafes, breweries, and local favorites."
      badge="Coming soon"
      icon={UtensilsCrossed}
      features={[
        "Browse by cuisine, neighborhood, and occasion",
        "Dog-friendly patios and family-friendly picks",
        "Hours, menus, and links to official listings",
      ]}
      relatedLinks={[
        { href: "/businesses", label: "Local Businesses" },
        { href: "/events", label: "Events" },
        { href: "/ask-folsom", label: "Ask Folsom" },
      ]}
    />
  );
}
