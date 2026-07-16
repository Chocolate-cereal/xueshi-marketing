import { Button } from './button';
import { Heading } from './heading';

export function CtaBanner({ title, description, buttonLabel, buttonHref }: { title: string; description: string; buttonLabel: string; buttonHref: string }) {
  return (
    <div className="rounded-[2rem] border bg-navy-950 p-8 text-white shadow-soft dark:bg-white dark:text-charcoal-950 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
      <div><Heading as="h2" size="h2" className="text-white dark:text-charcoal-950">{title}</Heading><p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 dark:text-neutral-600">{description}</p></div>
      <div className="mt-8 shrink-0 lg:mt-0"><Button href={buttonHref} variant="primary">{buttonLabel}</Button></div>
    </div>
  );
}
