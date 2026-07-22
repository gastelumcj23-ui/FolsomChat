import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { askFolsomExamples } from "@/lib/config";

export function AskFolsomPreviewSection() {
  return (
    <section className="section-padding bg-navy text-primary-foreground dark:bg-[#0a0e14]">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
              AI local guide
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ask Folsom
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
              Get clear answers about events, parks, dining, and city services—grounded in credited local sources.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90"
              asChild
            >
              <Link href="/ask-folsom">
                Try Ask Folsom
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="size-4 text-gold" />
              Example questions
            </div>
            <ul className="mt-5 space-y-3">
              {askFolsomExamples.map((question) => (
                <li key={question}>
                  <Link
                    href="/ask-folsom"
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-colors hover:bg-white/10"
                  >
                    <MessageSquare className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>{question}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
