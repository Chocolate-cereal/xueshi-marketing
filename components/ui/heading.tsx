import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" };

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-balance font-serif font-bold tracking-[-0.02em] text-foreground",
        Tag === "h1" && "text-[2.5rem] leading-[1.12] sm:text-[2.875rem] lg:text-[4rem]",
        Tag === "h2" && "text-[2rem] leading-[1.14] sm:text-[2.75rem]",
        Tag === "h3" && "text-2xl leading-[1.14] sm:text-[1.75rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
