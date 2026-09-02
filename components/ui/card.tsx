import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "group border border-border bg-surface/70 p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface hover:shadow-soft motion-reduce:transform-none",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
