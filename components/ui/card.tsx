import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-soft transition hover:border-accent/45",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
