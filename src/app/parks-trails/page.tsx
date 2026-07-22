import type { Metadata } from "next";
import { Trees } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Parks & Trails",
  description: "Parks, trails, Folsom Lake, and outdoor recreation in Folsom, California.",
};

export default function ParksTrailsPage() {
  return (
    <PlaceholderPage
      title="Parks, Trails & Lake Recreation"
      description="American River Trail, neighborhood parks, Folsom Lake, and Lake Natoma—find your next outdoor adventure."
      badge="Coming soon"
      icon={Trees}
      features={[
        "Trail maps, difficulty, and amenity filters",
        "Shaded playgrounds and dog-friendly routes",
        "Lake access, boat ramps, and seasonal alerts",
      ]}
      relatedLinks={[
        { href: "/events", label: "Events" },
        { href: "/city-resources", label: "City Resources" },
        { href: "/ask-folsom", label: "Ask Folsom" },
      ]}
    />
  );
}
