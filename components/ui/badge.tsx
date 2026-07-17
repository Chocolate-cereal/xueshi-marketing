import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition hover:border-accent hover:bg-accent-soft hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
