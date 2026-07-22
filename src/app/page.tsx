import type { Metadata } from "next";

import { AskFolsomPreviewSection } from "@/components/home/ask-folsom-preview-section";
import { CommunityPreviewSection } from "@/components/home/community-preview-section";
import { ExploreFolsomSection } from "@/components/home/explore-folsom-section";
import { FolsomTodaySection } from "@/components/home/folsom-today-section";
import { HeroSection } from "@/components/home/hero-section";
import { LatestNewsSection } from "@/components/home/latest-news-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { TrustedSourcesSection } from "@/components/home/trusted-sources-section";
import { WhatsHappeningSection } from "@/components/home/whats-happening-section";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FolsomTodaySection />
      <LatestNewsSection />
      <WhatsHappeningSection />
      <ExploreFolsomSection />
      <AskFolsomPreviewSection />
      <CommunityPreviewSection />
      <TrustedSourcesSection />
      <NewsletterSection />
    </>
  );
}
