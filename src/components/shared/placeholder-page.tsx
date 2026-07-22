import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { SampleBadge } from "@/components/shared/sample-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlaceholderPageProps {
  title: string;
  description: string;
  badge?: string;
  icon: LucideIcon;
  gradient?: string;
  accentColor?: string;
  backHref?: string;
  features?: readonly string[];
  relatedLinks?: readonly { href: string; label: string }[];
  showSampleNotice?: boolean;
}

export function PlaceholderPage({
  title,
  description,
  badge = "Coming soon",
  icon: Icon,
  gradient = "from-lake/20 via-gold/10 to-lake/5",
  accentColor = "text-lake",
  backHref = "/",
  features = [],
  relatedLinks = [],
  showSampleNotice = true,
}: PlaceholderPageProps) {
  return (
    <div className="pt-24 pb-16 lg:pb-24">
      <div className="container-page">
        <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
          <Link href={backHref}>
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <div
            className={cn(
              "relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br sm:min-h-[300px]",
              gradient
            )}
          >
            <div className="absolute inset-0 folsom-mesh opacity-60" aria-hidden="true" />
            <div className="relative rounded-3xl border border-border/50 bg-surface/70 p-10 shadow-soft backdrop-blur-sm">
              <Icon className={cn("size-16 opacity-70 sm:size-20", accentColor)} />
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{badge}</Badge>
              {showSampleNotice && <SampleBadge label="Preview" />}
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lake" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {showSampleNotice && (
              <p className="mt-8 rounded-2xl border border-dashed border-gold/30 bg-gold/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                This page is a polished placeholder. Live data, search, and interactive
                features will connect here as FolsomChat launches each section.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="accent" asChild>
                <Link href="/ask-folsom">
                  Ask Folsom
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Return home</Link>
              </Button>
            </div>

            {relatedLinks.length > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm font-medium text-foreground">Related</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedLinks.map((link) => (
                    <Button key={link.href} variant="secondary" size="sm" asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Logo size="sm" />
        </div>
      </div>
    </div>
  );
}
