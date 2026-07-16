import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';
import { Heading } from './heading';

export function CaseStudyCard({ title, summary, tags }: { title: string; summary: string; tags: string[] }) {
  return (
    <Card className="flex h-full flex-col">
      <Heading as="h3" size="h3">{title}</Heading>
      <p className="mt-4 flex-1 text-base leading-7 text-neutral-600 dark:text-neutral-300">{summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
      <div className="mt-8"><Button href="#case-studies" variant="secondary">Read Case Study</Button></div>
    </Card>
  );
}
