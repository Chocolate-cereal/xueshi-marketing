import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("siteBadge", className)} {...props}>
      {children}
    </span>
  );
}
