import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" };

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-balance font-bold tracking-[-0.03em] text-foreground",
        Tag === "h1" && "text-4xl leading-[1.1] sm:text-5xl lg:text-6xl",
        Tag === "h2" && "text-3xl leading-[1.12] sm:text-4xl",
        Tag === "h3" && "text-xl leading-tight sm:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
