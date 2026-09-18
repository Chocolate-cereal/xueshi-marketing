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
    <ContentSection className="marketingPageIntro">
      <div className="marketingPageIntroInner" data-reveal>
        <div className="marketingPageIntroLead">
          <div className="marketingPageIntroLine">
            <span className="marketingIntroIndex" aria-hidden="true">
              00
            </span>
            <Badge>{eyebrow}</Badge>
          </div>
          <Heading className="marketingPageIntroTitle mt-6">{title}</Heading>
        </div>
        <div className="marketingPageIntroAside">
          <p className="marketingPageIntroDescription">{description}</p>
          {supportingText ? (
            <p className="marketingPageIntroSupporting mt-4">{supportingText}</p>
          ) : null}
          {actions?.length ? (
            <div className="marketingPageIntroActions">
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
