import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type CallToActionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  className?: string;
};

export function CallToAction({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CallToActionProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-accent/30 p-8 hover:translate-y-0 sm:p-10",
        className,
      )}
    >
      <span
        className="abstract-drift pointer-events-none absolute -right-16 -top-20 size-64 rounded-[42%_58%_64%_36%] border border-accent/20 bg-accent-soft/35"
        aria-hidden="true"
      />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
              {eyebrow}
            </p>
          ) : null}
          <Heading as="h2" className="mt-4">
            {title}
          </Heading>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button href={primaryAction.href}>{primaryAction.label}</Button>
          {secondaryAction ? (
            <Button href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
