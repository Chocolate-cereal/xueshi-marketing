import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const contextPoints = [
  "The marketing question or opportunity",
  "Your team and working context",
  "Relevant timing or constraints",
  "The decision the work should support",
];

export default function ContactPage() {
  return (
    <div className="marketingPage contactPage">
      <PageIntro
        eyebrow="Contact"
        title="Start with the marketing question you need to answer."
        description="I’m currently open to digital marketing opportunities with agencies, in-house teams and growing organisations."
        supportingText="Share a little context about the team, the challenge and the next decision. Please do not include confidential information in an initial message."
      />

      <ContentSection className="pt-0">
        <div className="contactGrid">
          <Card className="contactPrimary" data-reveal>
            <p className="contactLabel">Contact details</p>
            <Heading as="h2">A direct contact route is being prepared.</Heading>
            <p className="contactPrimaryCopy">
              Verified contact details will be added here before the portfolio is shared
              publicly. Until then, this page establishes the information that will make
              an enquiry easier to assess.
            </p>
            <div className="contactStatus">
              <span aria-hidden="true" />
              <span>Portfolio in progress / enquiries welcome soon</span>
            </div>
          </Card>

          <Card className="contactContext" data-reveal>
            <p className="contactLabel">Helpful context</p>
            <ul>
              {contextPoints.map((point, index) => (
                <li key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <div className="contactNote" data-reveal>
          <p className="contactLabel">A useful first message</p>
          <p>
            The best starting point is usually a short description of the situation,
            what you already know and what decision is currently difficult.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
