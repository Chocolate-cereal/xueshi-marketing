import { cn } from "@/lib/utils";

export function Section({ className, children, ...props }: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      {children}
    </section>
  );
}
