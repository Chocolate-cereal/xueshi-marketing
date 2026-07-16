import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-border bg-muted/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
