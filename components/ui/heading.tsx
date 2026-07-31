import { libreBaskerville } from "@/app/fonts";
import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" };

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        libreBaskerville.className,
        "text-balance tracking-[-0.02em] text-foreground",
        Tag === "h1" &&
          "text-[2.5rem] font-normal leading-[1.1] sm:text-[2.75rem] lg:text-[3.5rem]",
        Tag === "h2" && "text-[2rem] font-bold leading-[1.12] sm:text-[2.75rem]",
        Tag === "h3" && "text-2xl font-bold leading-[1.12] sm:text-[1.75rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
