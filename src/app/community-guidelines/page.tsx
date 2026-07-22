import type { Metadata } from "next";
import { Scale } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "FolsomChat community guidelines for respectful local conversations.",
};

export default function CommunityGuidelinesPage() {
  return (
    <PlaceholderPage
      title="Community Guidelines"
      description="FolsomChat is a town square for neighbors. These guidelines keep conversations helpful, respectful, and locally focused."
      badge="Guidelines preview"
      icon={Scale}
      showSampleNotice={false}
      features={[
        "Be respectful and locally relevant",
        "No harassment, spam, or misinformation",
        "Credit sources and verify before sharing",
      ]}
      relatedLinks={[
        { href: "/community", label: "Community" },
        { href: "/privacy", label: "Privacy" },
        { href: "/contact", label: "Contact" },
      ]}
    />
  );
}
