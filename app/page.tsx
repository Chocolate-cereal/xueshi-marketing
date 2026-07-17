import Image from "next/image";

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

// Set this to "/profile.jpg" after the final portrait is added to public/profile.jpg.
const portraitImageSrc: string | null = null;

export default function HomePage() {
  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.27fr)_minmax(320px,1fr)] lg:items-center lg:gap-16">
            <div className="min-w-0 max-w-[680px]">
              <Badge>Digital Marketing Portfolio</Badge>
              <Heading className="mt-7 max-w-[680px]">
                <span className="block">
                  Hello, I’m <span className="text-accent">Xue</span>.
                </span>
                I turn data and research into clear marketing decisions.
              </Heading>
              <p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-muted sm:text-xl">
                I’m a digital marketer specialising in SEO, landing page optimisation,
                website performance and competitor research. I create evidence-based
                audits that identify opportunities and recommend practical next steps.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                Currently seeking digital marketing opportunities with agencies, in-house
                teams and growing organisations.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/case-studies">View My Case Studies</Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  className="px-1 underline decoration-accent/35 underline-offset-6 hover:bg-transparent hover:decoration-accent-hover"
                >
                  Contact Me
                </Button>
              </div>
              <div
                className="mt-8 flex flex-wrap gap-3"
                aria-label="Digital marketing skills"
              >
                {[
                  "SEO Audits",
                  "Landing Page Optimisation",
                  "Competitor Analysis",
                  "Website Performance",
                  "Marketing Analytics",
                  "Keyword Research",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    className="rounded-sm bg-transparent px-3 py-1.5 text-[0.7rem] tracking-[0.14em] text-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                {portraitImageSrc ? (
                  <Image
                    src={portraitImageSrc}
                    alt="Portrait of Xue, digital marketing professional"
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div
                    className="flex h-full flex-col justify-between bg-surface p-8"
                    role="img"
                    aria-label="Portrait placeholder for Xue, digital marketing professional"
                  >
                    <div className="flex justify-end">
                      <span className="rounded-md border border-border bg-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur">
                        Portfolio
                      </span>
                    </div>
                    <div className="mx-auto flex size-44 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft backdrop-blur sm:size-52">
                      <span className="text-6xl tracking-[-0.02em] text-foreground sm:text-7xl">
                        X
                      </span>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/75 p-5 backdrop-blur">
                      <p className="text-sm font-semibold text-foreground">Xue</p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Digital marketing professional focused on evidence-led growth
                        recommendations.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
                className="rounded-sm bg-transparent px-3 py-1.5 text-[0.7rem] tracking-[0.14em] text-foreground"
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
