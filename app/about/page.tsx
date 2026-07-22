import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about FolsomChat and our mission to connect the Folsom community.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About FolsomChat"
      description="FolsomChat is the digital home for the Folsom, California community. We're building a platform where neighbors can connect, discover local events, stay informed, and support local businesses."
      comingSoon={false}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      }
    />
  );
}
