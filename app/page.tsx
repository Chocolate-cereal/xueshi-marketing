import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const services = [
  {
    title: "SEO audits",
    description:
      "I review search visibility, technical signals and content gaps, then rank the work by relevance and effort.",
  },
  {
    title: "Landing page optimisation",
    description:
      "I trace the visitor journey from first message to next action, looking for unclear choices and conversion friction.",
  },
  {
    title: "Competitor research",
    description:
      "I compare search presence, positioning and page experience to find useful gaps, without copying the market leader.",
  },
];

const approach = [
  "Define the decision",
  "Gather the evidence",
  "Choose what matters",
  "Explain the next move",
];

const caseStudies = [
  {
    label: "Independent case study",
    title: "Green Car Loan landing page and campaign strategy",
    result:
      "A research-led redesign for Member First Credit Union, connecting repayment planning, search intent and paid social.",
    href: "/case-studies/member-first-credit-union-green-car-loan",
  },
];

const tools = [
  "Google Keyword Planner",
  "Figma",
  "Meta Ads Manager",
  "Canva",
  "PageSpeed Insights",
  "Search research",
];

export default function HomePage() {
  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.27fr)_minmax(320px,1fr)] lg:items-start lg:gap-16">
            <div className="enter-up min-w-0 max-w-[700px]">
              <Badge>Digital Marketing Portfolio</Badge>
              <Heading className="mt-7 max-w-[700px]">
                <span className="block">
                  Hello, I’m <span className="text-accent">Xue.</span>
                </span>
                <span className="block">
                  I find the signal in digital marketing data.
                </span>
              </Heading>
              <p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-muted sm:text-xl">
                I work across SEO, landing pages and competitor research. My focus is
                simple: understand the evidence, find the useful opportunity and explain
                what should happen next.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                Based in Ireland and open to digital marketing roles with agencies and
                in-house teams.
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
            </div>
            <div className="enter-up enter-up-delay-2 mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <div
                className="relative aspect-[4/5] overflow-hidden border border-border bg-surface/55"
                aria-label="Abstract composition in the Xueshi Marketing colour palette"
                role="img"
              >
                <div className="absolute inset-7 border border-border/70" />
                <div className="abstract-drift absolute -left-9 top-[18%] h-52 w-64 rounded-[62%_38%_48%_52%] bg-accent-soft" />
                <div className="abstract-drift-reverse absolute right-7 top-[31%] h-52 w-40 rounded-[43%_57%_65%_35%] border border-accent/45 bg-background/45 backdrop-blur-sm" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between border-t border-border pt-5">
                  <span className="font-serif text-6xl text-foreground">X</span>
                  <span className="max-w-24 text-right text-[0.65rem] font-semibold uppercase leading-5 tracking-[0.18em] text-muted">
                    Research
                    <br />
                    with intent
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2" aria-label="Digital marketing skills">
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {[
                  "SEO Audits",
                  "Landing Page Optimisation",
                  "Competitor Research",
                  "Website Performance",
                  "Marketing Analytics",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    className="justify-center rounded-sm bg-transparent px-3 py-3 text-center text-[0.7rem] tracking-[0.14em] text-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35">
        <Container>
          <SectionHeader
            eyebrow="Featured services"
            title="Focused work for real marketing questions."
            description="Each review ends with a short, ranked set of recommendations and the reasoning behind them."
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
              title="A clear route from question to recommendation."
              description="I separate observations from assumptions, then keep the next steps proportionate to the evidence."
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
            title="Research, decisions and the work behind them."
            description="Independent projects show how I investigate a problem and turn the findings into a practical marketing direction."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.title} className="p-7 lg:col-span-2">
                <Badge>{study.label}</Badge>
                <Heading as="h3" className="mt-5">
                  {study.title}
                </Heading>
                <p className="mt-4 text-sm leading-7 text-muted">{study.result}</p>
                <Button href={study.href} variant="ghost" className="mt-7 px-0">
                  Read the case study →
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Tools & methodologies"
            title="Tools chosen for the question."
            description="The method changes with the evidence available. The reasoning stays visible."
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
                title="Careful analysis, explained in plain language."
                description="I show how I reached a recommendation, where the evidence is limited and what I would validate next."
              />
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-foreground">Best fit</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Agencies and in-house teams looking for support with search visibility,
                landing pages, competitor research or campaign planning.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <CallToAction
            eyebrow="Contact"
            title="Have a marketing question worth examining?"
            description="Share the context and the decision you need to make. That is enough to start a useful conversation."
            primaryAction={{ label: "Contact me", href: "/contact" }}
            secondaryAction={{ label: "Review services", href: "/services" }}
          />
        </Container>
      </Section>
    </>
  );
}
