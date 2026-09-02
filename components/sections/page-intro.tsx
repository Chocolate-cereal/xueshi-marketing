import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ContentSection } from "@/components/sections/content-section";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  supportingText?: string;
  actions?: Array<{
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "ghost";
  }>;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  supportingText,
  actions,
}: PageIntroProps) {
  return (
    <ContentSection className="pb-16 pt-16 sm:pb-20 sm:pt-24">
      <div className="grid gap-8 border-b border-border pb-14 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.42fr)] lg:gap-16">
        <div className="enter-up max-w-4xl">
          <Badge>{eyebrow}</Badge>
          <Heading className="mt-6">{title}</Heading>
        </div>
        <div className="enter-up enter-up-delay-1 max-w-xl lg:pt-12">
          <p className="text-lg leading-8 text-muted">{description}</p>
          {supportingText ? (
            <p className="mt-4 text-sm leading-7 text-muted">{supportingText}</p>
          ) : null}
          {actions?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Button key={action.href} href={action.href} variant={action.variant}>
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </ContentSection>
  );
}
