import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const services = [
  {
    title: "Search and content audits",
    description:
      "Find technical, editorial, and intent gaps with prioritized recommendations tied to measurable demand.",
  },
  {
    title: "Landing page reviews",
    description:
      "Evaluate message clarity, conversion paths, proof, speed, and accessibility before investing in traffic.",
  },
  {
    title: "Measurement foundations",
    description:
      "Clarify events, reporting views, and decision rhythms so performance conversations stay grounded in evidence.",
  },
];

const approach = [
  "Understand the business question",
  "Audit the available evidence",
  "Prioritize constrained experiments",
  "Document what changed and why",
];

const caseStudies = [
  {
    label: "Placeholder case study",
    title: "B2B service positioning and search visibility review",
    result:
      "Reserved for a future narrative with baseline context, interventions, and verified outcomes.",
  },
  {
    label: "Placeholder case study",
    title: "Conversion-focused landing page analysis",
    result:
      "Reserved for a future narrative covering research inputs, recommendations, and post-launch learning.",
  },
];

const tools = [
  "SEO diagnostics",
  "Analytics QA",
  "Content briefs",
  "CRO heuristics",
  "Accessibility checks",
  "Experiment logs",
];

export default function HomePage() {
  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <Badge>Evidence-led digital marketing portfolio</Badge>
              <Heading className="mt-7 max-w-4xl">
                Marketing clarity for teams that need better decisions, not louder claims.
              </Heading>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Xueshi Marketing documents practical audit work across search, content,
                conversion, and measurement. The focus is simple: make the next growth
                decision easier to explain, test, and improve.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Discuss a focused audit</Button>
                <Button href="/case-studies" variant="secondary">
                  View case study placeholders
                </Button>
              </div>
            </div>
            <Card className="p-8 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
                Working standards
              </p>
              <div className="mt-8 space-y-6">
                {[
                  [
                    "Evidence before opinion",
                    "Recommendations start with observed constraints, customer intent, and available performance data.",
                  ],
                  [
                    "Clear tradeoffs",
                    "Priorities include expected impact, implementation effort, and the risk of misreading results.",
                  ],
                  [
                    "Reusable documentation",
                    "Findings are written so future teams can understand the decision path.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="border-t border-border pt-6 first:border-t-0 first:pt-0"
                  >
                    <h2 className="text-base font-semibold text-foreground">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35">
        <Container>
          <SectionHeader
            eyebrow="Featured services"
            title="Focused support where marketing teams often lose signal."
            description="Each service is designed to produce a decision-ready set of findings rather than a long list of generic tactics."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <Heading as="h3">{service.title}</Heading>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="My approach"
              title="A calm operating model for ambiguous growth problems."
              description="The work is structured to separate what is known, what is assumed, and what should be tested next."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {approach.map((item, index) => (
                <Card key={item} className="p-6">
                  <span className="text-sm font-semibold text-muted">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item}</h3>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35">
        <Container>
          <SectionHeader
            eyebrow="Featured case studies"
            title="Outcome stories will be added only when the evidence is ready."
            description="These placeholders preserve the structure for future portfolio entries without inventing metrics or client details."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.title} className="p-7">
                <Badge>{study.label}</Badge>
                <Heading as="h3" className="mt-5">
                  {study.title}
                </Heading>
                <p className="mt-4 text-sm leading-7 text-muted">{study.result}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Tools & methodologies"
            title="A practical toolkit for finding, prioritizing, and validating growth work."
            description="Methods are selected for the question at hand, with documentation that keeps assumptions visible."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Badge
                key={tool}
                className="bg-surface px-4 py-2 normal-case tracking-normal text-foreground"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <SectionHeader
                eyebrow="Why Xueshi Marketing"
                title="Built for professional teams that value thoughtful analysis."
                description="The portfolio emphasizes transparent reasoning, restrained recommendations, and repeatable decision frameworks over broad promises."
              />
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-foreground">Best fit</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Small teams, founders, and operators who need a clear second set of eyes
                on search visibility, content quality, landing page performance, or
                measurement readiness.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <CallToAction
            eyebrow="Contact CTA"
            title="Have a specific marketing question to examine?"
            description="Use the contact page to share the context, constraints, and decisions you are weighing. A clearer scope makes the first conversation more useful. Contact details will follow the existing site configuration as the portfolio matures."
            primaryAction={{ label: "Start the conversation", href: "/contact" }}
            secondaryAction={{ label: "Review services", href: "/services" }}
          />
        </Container>
      </Section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <Heading as="h2" className="mt-5">
        {title}
      </Heading>
      <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
