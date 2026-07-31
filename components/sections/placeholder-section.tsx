import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type PlaceholderSectionProps = {
  label: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
};

export function PlaceholderSection({
  label,
  title,
  description,
  action,
}: PlaceholderSectionProps) {
  return (
    <Card className="flex min-h-64 flex-col justify-between p-7 sm:p-9">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {label}
      </p>
      <div className="mt-12 max-w-2xl">
        <Heading as="h3">{title}</Heading>
        <p className="mt-4 text-base leading-8 text-muted">{description}</p>
        {action ? (
          <Button href={action.href} variant="ghost" className="mt-5 h-auto px-0 py-1">
            {action.label}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
