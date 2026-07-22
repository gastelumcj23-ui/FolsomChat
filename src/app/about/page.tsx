import type { Metadata } from "next";
import { Heart } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "About",
  description: "About FolsomChat — an independent community platform for Folsom, California.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About FolsomChat"
      description="FolsomChat is an independent digital town square for Folsom residents—organizing local news, events, businesses, community conversations, and trusted city resources in one place."
      badge="Our mission"
      icon={Heart}
      showSampleNotice={false}
      features={[
        "Independent — not affiliated with the City of Folsom",
        "Source-first — every summary links to the original publisher",
        "Community-built — designed for neighbors, by neighbors",
      ]}
      relatedLinks={[
        { href: "/contact", label: "Contact" },
        { href: "/source-policy", label: "Source Policy" },
        { href: "/community-guidelines", label: "Community Guidelines" },
      ]}
    />
  );
}
