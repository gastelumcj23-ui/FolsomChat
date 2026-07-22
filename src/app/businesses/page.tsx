import type { Metadata } from "next";
import { Building2 } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Local Businesses",
  description: "Local business directory for Folsom, California.",
};

export default function BusinessesPage() {
  return (
    <PlaceholderPage
      title="Local Business Directory"
      description="Discover shops, services, and professionals in Folsom. Support local and find what you need nearby."
      badge="Coming soon"
      icon={Building2}
      features={[
        "Search by category, neighborhood, and keyword",
        "Verified listings with contact and hours",
        "Business listing requests and updates",
      ]}
      relatedLinks={[
        { href: "/eat-drink", label: "Eat & Drink" },
        { href: "/contact", label: "List Your Business" },
        { href: "/community", label: "Community" },
      ]}
    />
  );
}
