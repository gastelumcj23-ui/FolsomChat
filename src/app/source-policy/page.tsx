import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Source Policy",
  description: "How FolsomChat credits and links to original local sources.",
};

export default function SourcePolicyPage() {
  return (
    <PlaceholderPage
      title="Source Policy"
      description="FolsomChat summarizes and organizes information from credited official and local sources—and always links to the original publisher."
      badge="Transparency"
      icon={BookOpen}
      showSampleNotice={false}
      features={[
        "Every summary includes source attribution",
        "Direct links to original articles and notices",
        "No full republication of copyrighted content",
        "Corrections welcome — contact us to update",
      ]}
      relatedLinks={[
        { href: "/news", label: "News" },
        { href: "/city-resources", label: "City Resources" },
        { href: "/about", label: "About" },
      ]}
    />
  );
}
