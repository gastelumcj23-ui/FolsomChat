import type { Metadata } from "next";
import { Calendar } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Events",
  description: "Local events calendar for Folsom, California.",
};

export default function EventsPage() {
  return (
    <PlaceholderPage
      title="What's Happening in Folsom"
      description="Farmers markets, live music, community festivals, city meetings, and sports—organized by date, category, and neighborhood."
      badge="Coming soon"
      icon={Calendar}
      features={[
        "Today, weekend, and family activity views",
        "City meeting and recreation calendars",
        "Save and share events with neighbors",
      ]}
      relatedLinks={[
        { href: "/eat-drink", label: "Eat & Drink" },
        { href: "/parks-trails", label: "Parks & Trails" },
        { href: "/community", label: "Community" },
      ]}
    />
  );
}
