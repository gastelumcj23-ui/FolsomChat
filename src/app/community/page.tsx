import type { Metadata } from "next";
import { Users } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Community",
  description: "Community conversations, recommendations, and neighborhood updates in Folsom.",
};

export default function CommunityPage() {
  return (
    <PlaceholderPage
      title="Folsom Community"
      description="Recommendations, local ideas, lost and found, neighborhood updates, and volunteer opportunities—built for neighbors."
      badge="User accounts launching soon"
      icon={Users}
      features={[
        "Share trusted local recommendations",
        "Post neighborhood updates and volunteer needs",
        "Moderated spaces with community guidelines",
      ]}
      relatedLinks={[
        { href: "/community-guidelines", label: "Community Guidelines" },
        { href: "/events", label: "Events" },
        { href: "/ask-folsom", label: "Ask Folsom" },
      ]}
    />
  );
}
