import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-border bg-surface/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
