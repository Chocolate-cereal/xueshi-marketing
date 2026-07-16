import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" };

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-balance font-semibold tracking-tight text-foreground",
        Tag === "h1" && "text-4xl sm:text-5xl lg:text-6xl",
        Tag === "h2" && "text-3xl sm:text-4xl",
        Tag === "h3" && "text-xl sm:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
