"use client";

import {
  Building2,
  Calendar,
  Home,
  Landmark,
  Menu,
  Newspaper,
  Trees,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/config";
import { cn } from "@/lib/utils";

const iconMap = {
  Home,
  Newspaper,
  Calendar,
  UtensilsCrossed,
  Trees,
  Building2,
  Users,
  Landmark,
} as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const desktopLinks = navLinks.filter((link) => link.href !== "/");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-page">
          <div className="mt-3 flex h-14 items-center justify-between gap-3 rounded-2xl border border-border/60 bg-surface/85 px-3 shadow-soft backdrop-blur-xl glass-dark sm:px-4">
            <Logo size="sm" className="shrink-0" />

            <nav
              className="hidden items-center gap-0.5 xl:flex"
              aria-label="Main navigation"
            >
              {desktopLinks.map((link) => {
                const Icon = iconMap[link.icon];
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-lake/10 text-lake"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    <Icon className="size-3.5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1">
              <ThemeToggle className="hidden sm:inline-flex" />
              <Button
                variant="accent"
                size="sm"
                className="hidden md:inline-flex"
                asChild
              >
                <Link href="/ask-folsom">Ask Folsom</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl xl:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] xl:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-surface shadow-elevated transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-border p-4">
            <Logo size="sm" />
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </Button>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const Icon = iconMap[link.icon];
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-lake/10 text-lake"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <Icon className="size-5" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-border p-4">
            <Button variant="accent" className="w-full" asChild>
              <Link href="/ask-folsom">Ask Folsom</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
