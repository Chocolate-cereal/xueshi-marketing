import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article className={cn("siteCard p-6", className)} {...props}>
      {children}
    </article>
  );
}
