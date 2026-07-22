import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: "size-7", text: "text-sm", fc: "text-[10px]" },
  md: { icon: "size-8", text: "text-base", fc: "text-[11px]" },
  lg: { icon: "size-10", text: "text-lg", fc: "text-xs" },
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizes = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 transition-opacity hover:opacity-85",
        className
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lake to-[#1a4d7a] shadow-glow",
          sizes.icon
        )}
      >
        <span
          className={cn(
            "font-bold tracking-tighter text-white",
            sizes.fc
          )}
        >
          FC
        </span>
        <div className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-gold ring-2 ring-surface" />
      </div>
      {showText && (
        <span className={cn("font-semibold tracking-tight text-foreground", sizes.text)}>
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
