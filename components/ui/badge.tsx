import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex border-l border-accent px-3 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
