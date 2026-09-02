import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

export function NumberedSectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-5 border-t border-border pt-8 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-8">
      <p className="text-sm font-semibold tracking-[0.18em] text-accent">{number}</p>
      <div className="max-w-3xl">
        <Heading as="h2">{title}</Heading>
        {description ? (
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

export function ProjectMeta({
  items,
}: {
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="min-w-0 bg-surface p-5 sm:p-6">
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {item.label}
          </dt>
          <dd className="mt-3 text-sm leading-7 text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ResearchStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="relative border-l border-border pb-8 pl-8 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-7">
      <span className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full border border-accent bg-background text-[0.6rem] font-bold text-accent md:-top-3 md:left-0">
        {number}
      </span>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{children}</p>
    </li>
  );
}

export function FindingBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-5 border-t border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
      <p className="text-sm font-semibold tracking-[0.18em] text-accent">{number}</p>
      <div className="max-w-3xl">
        <Heading as="h3">{title}</Heading>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {children}
        </p>
      </div>
    </div>
  );
}

export function VisualPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-96 items-center justify-center rounded-2xl border border-dashed border-border bg-surface/45 p-8 text-center",
        className,
      )}
    >
      <div>
        <span
          className="mx-auto block size-2 rounded-full bg-accent"
          aria-hidden="true"
        />
        <p className="mt-5 font-serif text-xl text-muted sm:text-2xl">{label}</p>
      </div>
    </div>
  );
}

export function MeasurementGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6 sm:p-7">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
