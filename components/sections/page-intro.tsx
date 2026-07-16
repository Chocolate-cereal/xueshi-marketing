import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Badge>{eyebrow}</Badge>
          <Heading className="mt-6">{title}</Heading>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">{description}</p>
        </div>
      </Container>
    </Section>
  );
}
