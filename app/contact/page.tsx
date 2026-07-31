import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with the marketing question you need to answer."
        description="I’m currently open to digital marketing opportunities with agencies, in-house teams and growing organisations."
        supportingText="Share a little context about your team, the challenge and the next decision. Please do not include confidential information in an initial message."
      />
      <ContentSection className="pt-0">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)]">
          <Card className="p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Contact details
            </p>
            <Heading as="h2" className="mt-5">
              A direct contact route is being prepared.
            </Heading>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Verified contact details will be added here before the portfolio is shared
              publicly. Until then, this page establishes the information that will make
              an enquiry easier to assess.
            </p>
          </Card>
          <Card className="p-7 sm:p-9">
            <h2 className="text-lg font-semibold text-foreground">Helpful context</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <li>The marketing question or opportunity</li>
              <li>Your team and working context</li>
              <li>Relevant timing or constraints</li>
              <li>The decision the work should support</li>
            </ul>
          </Card>
        </div>
      </ContentSection>
    </>
  );
}
