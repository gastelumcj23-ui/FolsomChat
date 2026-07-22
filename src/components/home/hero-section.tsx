"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Compass, Search } from "lucide-react";
import Link from "next/link";

import { FolsomHeroVisual } from "@/components/home/folsom-hero-visual";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-20">
      <div className="absolute inset-0 folsom-mesh" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lake">
              Folsom, California
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {siteConfig.tagline}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Ask Folsom search"
            >
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Ask Folsom anything…"
                  className="h-14 w-full rounded-2xl border border-border bg-card pl-12 pr-4 text-base shadow-soft outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-lake"
                  aria-label="Ask Folsom search field"
                />
              </div>
              <Button variant="accent" size="lg" className="h-14 px-6" asChild>
                <Link href="/ask-folsom">
                  Ask Folsom
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </form>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="lg" asChild>
                <Link href="/events">
                  <Compass className="size-4" />
                  Explore Folsom
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/events">
                  <CalendarDays className="size-4" />
                  Today in Folsom
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card p-3 shadow-elevated">
              <FolsomHeroVisual />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
              <p className="text-xs font-medium text-muted-foreground">Lake · Trail · Historic District</p>
              <p className="text-sm font-semibold text-foreground">Your local town square</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
