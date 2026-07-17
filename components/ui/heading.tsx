import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" };

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-balance font-serif font-semibold tracking-[-0.035em] text-foreground",
        Tag === "h1" && "text-[2.75rem] leading-[1.05] sm:text-5xl lg:text-[4.5rem]",
        Tag === "h2" && "text-4xl leading-[1.06] sm:text-5xl",
        Tag === "h3" && "text-2xl leading-[1.08] sm:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
