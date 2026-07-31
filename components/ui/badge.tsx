import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex rounded-sm border border-border bg-transparent px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted transition hover:border-accent hover:bg-accent-soft hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
