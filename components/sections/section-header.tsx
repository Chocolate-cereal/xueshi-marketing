import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Heading as="h2" className={cn(eyebrow && "mt-5")}>
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
