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
      className={cn("marketingSectionHeader", align === "center" && "mx-auto text-center", className)}
      data-reveal
    >
      {eyebrow ? (
        <div className="marketingSectionEyebrow">
          <Badge>{eyebrow}</Badge>
        </div>
      ) : null}
      <Heading as="h2" className="marketingSectionTitle">
        {title}
      </Heading>
      {description ? (
        <p className="marketingSectionDescription">{description}</p>
      ) : null}
    </div>
  );
}
