import { cn } from "@/lib/utils";

export function Container({ className, children }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>{children}</div>;
}
