import type { Metadata } from "next";
import { Newspaper } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "News",
  description: "Latest local news and headlines for Folsom, California.",
};

export default function NewsPage() {
  return (
    <PlaceholderPage
      title="Latest Local News"
      description="Curated headlines from trusted Folsom sources—summarized with full attribution and links to original publishers."
      badge="Coming soon"
      icon={Newspaper}
      features={[
        "Daily digest of city, school, and community headlines",
        "Category filters for civic, recreation, and business news",
        "One-click access to original source articles",
      ]}
      relatedLinks={[
        { href: "/events", label: "Events" },
        { href: "/city-resources", label: "City Resources" },
        { href: "/source-policy", label: "Source Policy" },
      ]}
    />
  );
}
