import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const principles = [
  {
    title: "Evidence before assumptions",
    description:
      "Research, analytics and direct observation form the starting point for every recommendation.",
  },
  {
    title: "Clarity over volume",
    description:
      "The goal is a focused set of priorities that a team can understand, discuss and act on.",
  },
  {
    title: "Practical next steps",
    description:
      "Recommendations account for context and constraints rather than relying on generic best-practice lists.",
  },
];

const workingStyle = [
  "Structured enough to make the reasoning visible.",
  "Curious enough to question the first explanation.",
  "Practical enough to keep the next step realistic.",
];

export default function AboutPage() {
  return (
    <div className="marketingPage aboutPage">
      <PageIntro
        eyebrow="About Xue"
        title="Thoughtful marketing analysis, communicated with clarity."
        description="I approach digital marketing as a structured process: understand the question, examine the available evidence and turn the findings into useful decisions."
        supportingText="This portfolio documents the working approach, learning and selected project work as it develops."
        actions={[{ label: "Start a conversation", href: "/contact" }]}
      />

      <ContentSection className="pt-0">
        <div className="aboutStatementGrid" data-reveal>
          <div>
            <p className="aboutSectionLabel">A working note</p>
            <Heading as="h2" className="aboutStatement">
              Good marketing work gives people a clearer next move.
            </Heading>
          </div>
          <div className="aboutStatementCopy">
            <p>
              My background sits between search, campaign execution, research and
              website experience. I enjoy the point where those areas meet: finding the
              signal, explaining it plainly and deciding what deserves attention first.
            </p>
            <p>
              The work here is intentionally transparent. It shows the context, the
              judgement calls and the limitations alongside the recommendation.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Working principles"
          title="A professional approach for teams that value clear reasoning."
          description="These principles shape how I investigate marketing questions and present recommendations."
        />
        <div className="aboutPrinciplesGrid">
          {principles.map((principle, index) => (
            <Card key={principle.title} className="aboutPrinciple" data-reveal>
              <div className="aboutPrincipleTopline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <div className="aboutStyleStrip" data-reveal>
          <p className="aboutSectionLabel">How I work</p>
          <ul>
            {workingStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <div data-reveal>
          <CallToAction
            eyebrow="Work with me"
            title="Looking for a considered view of a marketing challenge?"
            description="Share the context and the decision you are working toward. I’ll use that information to make the first conversation focused and useful."
            primaryAction={{ label: "Contact me", href: "/contact" }}
            secondaryAction={{ label: "Explore services", href: "/services" }}
          />
        </div>
      </ContentSection>
    </div>
  );
}
