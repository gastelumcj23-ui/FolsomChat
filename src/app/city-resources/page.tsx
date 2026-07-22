import type { Metadata } from "next";
import { Landmark } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "City Resources",
  description: "City services, permits, schools, and civic resources for Folsom, California.",
};

export default function CityResourcesPage() {
  return (
    <PlaceholderPage
      title="City Resources & Civic Information"
      description="Permits, utilities, public safety, school district links, Historic Folsom heritage, and official city notices—organized and easy to find."
      badge="Coming soon"
      icon={Landmark}
      features={[
        "Links to official City of Folsom services",
        "School district calendars and announcements",
        "Historic Folsom and heritage resources",
      ]}
      relatedLinks={[
        { href: "/news", label: "News" },
        { href: "/source-policy", label: "Source Policy" },
        { href: "/ask-folsom", label: "Ask Folsom" },
      ]}
    />
  );
}
