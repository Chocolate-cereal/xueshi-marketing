import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";

const principles = [
  {
    title: "Evidence before assumptions",
    description:
      "I start with what can be observed or measured, and label assumptions when the evidence runs out.",
  },
  {
    title: "Clarity over volume",
    description:
      "A short, ranked set of priorities is more useful than a long audit that leaves the decision to the reader.",
  },
  {
    title: "Practical next steps",
    description:
      "Recommendations should fit the team, the available data and the size of the opportunity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Xue"
        title="I like marketing questions with evidence behind them."
        description="My background is in digital marketing and campaign optimisation. I now focus on SEO, landing-page experience and research that helps teams make clearer choices."
        supportingText="This portfolio documents how I work: the question I started with, what I found and why I recommended a particular direction."
        actions={[{ label: "Start a conversation", href: "/contact" }]}
      />
      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Working principles"
          title="Three principles I use in every project."
          description="They keep the work honest, focused and easier to act on."
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
          title="Need a second view of a marketing problem?"
          description="Tell me what you are trying to decide and what evidence you already have."
          primaryAction={{ label: "Contact me", href: "/contact" }}
          secondaryAction={{ label: "Explore services", href: "/services" }}
        />
      </ContentSection>
    </>
  );
}
