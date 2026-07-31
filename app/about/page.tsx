import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";

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

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Xue"
        title="Thoughtful marketing analysis, communicated with clarity."
        description="I approach digital marketing as a structured process: understand the question, examine the available evidence and turn the findings into useful decisions."
        supportingText="This portfolio will continue to document my working approach, learning and selected project work as it develops."
        actions={[{ label: "Start a conversation", href: "/contact" }]}
      />
      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Working principles"
          title="A professional approach for teams that value clear reasoning."
          description="These principles shape how I investigate marketing questions and present recommendations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Card key={principle.title}>
              <span className="text-xs font-semibold tracking-[0.18em] text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection className="pt-0">
        <CallToAction
          eyebrow="Work with me"
          title="Looking for a considered view of a marketing challenge?"
          description="Share the context and the decision you are working toward. I’ll use that information to make the first conversation focused and useful."
          primaryAction={{ label: "Contact me", href: "/contact" }}
          secondaryAction={{ label: "Explore services", href: "/services" }}
        />
      </ContentSection>
    </>
  );
}
