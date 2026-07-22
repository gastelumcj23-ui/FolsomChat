import type { Metadata } from "next";
import { Shield } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "FolsomChat privacy policy and data practices.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="How FolsomChat handles your information—transparent practices built on minimal data collection and user control."
      badge="Policy preview"
      icon={Shield}
      showSampleNotice={false}
      features={[
        "Minimal data collection by design",
        "No sale of personal information",
        "Clear opt-in for newsletters and accounts",
      ]}
      relatedLinks={[
        { href: "/community-guidelines", label: "Community Guidelines" },
        { href: "/source-policy", label: "Source Policy" },
        { href: "/contact", label: "Contact" },
      ]}
    />
  );
}
