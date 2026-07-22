import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SampleBadgeProps {
  label?: string;
  className?: string;
}

export function SampleBadge({
  label = "Sample content",
  className,
}: SampleBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-gold/40 bg-gold/10 text-[10px] font-medium uppercase tracking-wide text-gold-foreground dark:text-gold",
        className
      )}
    >
      {label}
    </Badge>
  );
}
