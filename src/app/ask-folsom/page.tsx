import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Ask Folsom",
  description: "Ask FolsomChat anything about local life in Folsom, California.",
};

export default function AskFolsomPage() {
  return (
    <PlaceholderPage
      title="Ask Folsom"
      description="Your local guide for events, parks, dining, and city services—grounded in credited Folsom sources with links to originals."
      badge="AI assistant launching soon"
      icon={MessageSquare}
      showSampleNotice={false}
      features={[
        "Natural-language answers about local life",
        "Responses cite official and local sources",
        "Follow-up questions and saved conversations",
      ]}
      relatedLinks={[
        { href: "/events", label: "Events" },
        { href: "/parks-trails", label: "Parks & Trails" },
        { href: "/source-policy", label: "Source Policy" },
      ]}
    />
  );
}
