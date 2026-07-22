import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";

import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "AI Chat",
  description: "Ask FolsomChat anything about local life in Folsom, California.",
};

export default function ChatPage() {
  return (
    <PlaceholderPage
      title="Ask Folsom"
      description="This page has moved. Ask Folsom is your local guide for events, parks, dining, and city services."
      badge="Redirecting"
      icon={MessageSquare}
      backHref="/ask-folsom"
    />
  );
}
