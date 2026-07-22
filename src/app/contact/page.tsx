import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact FolsomChat for questions, feedback, advertising, and business listings.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Questions, feedback, advertising inquiries, and business listing requests—we'd love to hear from you."
      badge="Get in touch"
      icon={Mail}
      showSampleNotice={false}
      features={[
        "General inquiries and platform feedback",
        "Advertising and sponsorship opportunities",
        "Business listing updates and corrections",
      ]}
      relatedLinks={[
        { href: "/about", label: "About" },
        { href: "/businesses", label: "Business Listings" },
        { href: "/community-guidelines", label: "Community Guidelines" },
      ]}
    />
  );
}
