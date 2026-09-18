import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const services = [
  {
    index: "01",
    title: "Search and content audits",
    description:
      "Find technical, editorial and intent gaps, then turn them into priorities a team can act on.",
  },
  {
    index: "02",
    title: "Landing-page reviews",
    description:
      "Evaluate message clarity, conversion paths, proof and page experience before investing in traffic.",
  },
  {
    index: "03",
    title: "Measurement foundations",
    description:
      "Clarify events, reporting views and decision rhythms so performance conversations stay grounded.",
  },
];

const approach = [
  {
    title: "Frame the question",
    description: "Start with the business decision, not a list of disconnected tactics.",
  },
  {
    title: "Audit the evidence",
    description: "Separate observed signals from assumptions and missing information.",
  },
  {
    title: "Prioritise the next move",
    description: "Shape practical experiments around impact, confidence and constraints.",
  },
  {
    title: "Document the reasoning",
    description: "Make the recommendation easy to challenge, understand and build on.",
  },
];

const caseStudies = [
  {
    label: "01 / Independent case study",
    title: "Green Car Loan Landing Page & Campaign Strategy",
    result:
      "A public-facing audit combining landing-page optimisation, search research, paid-media planning and campaign creative.",
    href: "/case-studies/member-first-credit-union-green-car-loan",
  },
  {
    label: "02 / In development",
    title: "More evidence-led work to follow",
    result:
      "New projects will be added when the context, process and outcomes can be shown with the same level of care.",
    href: "/case-studies",
  },
];

const tools = [
  "SEO diagnostics",
  "Landing-page heuristics",
  "Competitor research",
  "Analytics QA",
  "Content briefs",
  "Experiment logs",
];

export default function HomePage() {
  return (
    <div className="marketingPage homePage">
      <Section className="homeHero">
        <Container>
          <div className="homeHeroGrid">
            <div data-reveal>
              <div className="homeEyebrow">
                <span className="homeEyebrowMark" aria-hidden="true" />
                <span>Digital marketing portfolio</span>
                <span className="homeEyebrowMeta">Dublin / IE</span>
              </div>
              <Heading className="homeHeroTitle">
                Evidence into <span className="homeHeroTitleAccent">direction.</span>
              </Heading>
              <p className="homeHeroSummary">
                I’m Xue, a digital marketer focused on SEO, landing-page optimisation,
                paid media and the decisions that connect them.
              </p>
              <div className="homeHeroActions">
                <Button href="/case-studies">
                  View case studies <span aria-hidden="true">↗</span>
                </Button>
                <Button href="/contact" variant="ghost">
                  Start a conversation <span aria-hidden="true">↗</span>
                </Button>
              </div>
              <p className="homeAvailability">
                Open to digital marketing opportunities with thoughtful teams.
              </p>
            </div>

            <div
              className="homeSignalBoard"
              data-reveal
              aria-label="A visual summary of the way Xueshi Marketing works"
            >
              <div className="homeSignalHeader">
                <span>Working signals</span>
                <span>01 / 04</span>
              </div>
              <div className="homeSignalContent">
                <p className="homeSignalStatement">
                  Better marketing starts with a <em>clearer question.</em>
                </p>
                <div className="homeSignalRows" aria-hidden="true">
                  <div className="homeSignalRow">
                    <span>Evidence</span>
                    <span />
                    <span>01</span>
                  </div>
                  <div className="homeSignalRow">
                    <span>Structure</span>
                    <span />
                    <span>02</span>
                  </div>
                  <div className="homeSignalRow">
                    <span>Action</span>
                    <span />
                    <span>03</span>
                  </div>
                </div>
              </div>
              <div className="homeSignalFooter">
                <span>SEO / UX / Paid media</span>
                <span>Observe → decide</span>
              </div>
            </div>
          </div>

          <div className="homeHeroFoot" data-reveal>
            <span>Independent portfolio / research-led work</span>
            <span>Clarity before activity</span>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35">
        <Container>
          <SectionHeader
            eyebrow="01 / Services"
            title="Focused support where marketing teams often lose signal."
            description="Each service produces a decision-ready set of findings rather than a long list of generic tactics."
          />
          <div className="homeServiceGrid">
            {services.map((service) => (
              <Card key={service.title} className="homeServiceCard" data-reveal>
                <div className="homeServiceTopline">
                  <span>{service.index}</span>
                  <span className="homeServiceArrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="homeApproachGrid">
            <SectionHeader
              eyebrow="02 / Approach"
              title="A calm operating model for ambiguous growth problems."
              description="The work separates what is known, what is assumed and what should be tested next."
            />
            <div className="homeApproachList" data-reveal>
              {approach.map((item, index) => (
                <div className="homeApproachItem" key={item.title}>
                  <span className="homeApproachNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35">
        <Container>
          <SectionHeader
            eyebrow="03 / Case studies"
            title="Work that shows the reasoning, not just the result."
            description="Projects are presented with context, evidence, decisions and limitations so the work can be understood rather than simply admired."
          />
          <div className="homeCaseStudyGrid">
            {caseStudies.map((study) => (
              <Card key={study.title} className="homeCaseStudyCard" data-reveal>
                <div className="homeCaseStudyTopline">
                  <span>{study.label}</span>
                  <span className="homeCaseStudyArrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{study.title}</h3>
                <p>{study.result}</p>
                <Button href={study.href} variant="ghost" className="mt-7">
                  Explore <span aria-hidden="true">→</span>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="04 / Working toolkit"
            title="A practical toolkit for finding, prioritising and validating growth work."
            description="Methods are selected for the question at hand, with documentation that keeps assumptions visible."
          />
          <div className="homeToolRibbon" data-reveal>
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="homeFitGrid">
            <Card className="homeFitCard" data-reveal>
              <p className="homeSectionLabel">05 / Why Xueshi Marketing</p>
              <Heading as="h2" className="mt-5">
                A considered second set of eyes for the next decision.
              </Heading>
              <p>
                The portfolio is built for teams that value transparent reasoning,
                practical recommendations and a clear link between evidence and action.
              </p>
            </Card>
            <Card className="homeFitCard" data-reveal>
              <p className="homeSectionLabel">Best fit</p>
              <h3 className="mt-5">Small teams, founders and growing organisations.</h3>
              <p>
                Especially when search visibility, content quality, landing-page
                performance or measurement readiness need a closer look.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div data-reveal>
            <CallToAction
              eyebrow="06 / Contact"
              title="Have a marketing question worth examining?"
              description="Share the context, constraints and decision you are weighing. A clearer scope makes the first conversation more useful."
              primaryAction={{ label: "Start the conversation", href: "/contact" }}
              secondaryAction={{ label: "Review services", href: "/services" }}
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
