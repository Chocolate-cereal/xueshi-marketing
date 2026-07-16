import { Card } from './card';
import { Heading } from './heading';

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return <Card><Heading as="h3" size="h3">{title}</Heading><p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">{description}</p></Card>;
}
