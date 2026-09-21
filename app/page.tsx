import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const services = [
  {
    index: "01",
    title: "Strategy & planning",
    description: "Turn business goals into clear, actionable marketing direction.",
  },
  {
    index: "02",
    title: "Digital growth",
    description: "Build search presence and improve the journeys that support it.",
  },
  {
    index: "03",
    title: "Content & campaigns",
    description: "Create useful campaigns that connect with people and context.",
  },
  {
    index: "04",
    title: "Audience & insights",
    description: "Understand behaviour, intent and the opportunities between them.",
  },
  {
    index: "05",
    title: "Optimisation",
    description: "Test, learn and improve with decisions grounded in evidence.",
  },
];

const caseStudies = [
  {
    label: "Planned audit / SEO + paid search",
    title: "Organic vs Paid Search Strategy Audit",
    description:
      "A comparative review of search performance, opportunity and the role of paid visibility.",
    variant: "search",
    href: "/case-studies",
    action: "View case studies",
  },
  {
    label: "Planned audit / UX + CRO",
    title: "Revolut Landing Page Conversion Audit",
    description:
      "A closer look at message clarity, page experience and the moments that shape action.",
    variant: "revolut",
    href: "/case-studies",
    action: "View case studies",
  },
  {
    label: "Proposed redesign / UX + content",
    title: "Member First Credit Union Green Car Loan",
    description:
      "A research-led redesign connecting search intent, repayment planning and campaign creative.",
    variant: "mfcu",
    href: "/case-studies/member-first-credit-union-green-car-loan",
    action: "View case study",
  },
];

const process = [
  {
    index: "01",
    title: "Research",
    description: "Understand your goals, market and audience.",
  },
  {
    index: "02",
    title: "Analyse",
    description: "Find what matters through data and insight.",
  },
  {
    index: "03",
    title: "Recommend",
    description: "Develop practical, prioritised solutions.",
  },
  {
    index: "04",
    title: "Measure",
    description: "Track impact and refine what comes next.",
  },
];

const reasons = [
  {
    title: "Strategic thinking",
    description:
      "I see the bigger picture, connect the dots and focus on what drives long-term value.",
  },
  {
    title: "Evidence-led",
    description:
      "I use data to uncover opportunities, validate ideas and make smarter decisions.",
  },
  {
    title: "Practical approach",
    description:
      "I turn ideas into clear, actionable plans and enjoy making things happen.",
  },
];

const insights = [
  {
    date: "Note 01",
    type: "Search",
    title: "Turning search findings into a useful priority list",
    description: "A short note on moving from observations to decisions.",
    variant: "search",
  },
  {
    date: "Note 02",
    type: "UX / content",
    title: "Reading a landing page as a decision journey",
    description: "A practical way to look at clarity, proof and friction.",
    variant: "content",
  },
  {
    date: "Note 03",
    type: "Measurement",
    title: "What a useful marketing measurement plan needs",
    description: "Keeping outcomes, evidence and next steps connected.",
    variant: "measurement",
  },
];

function LandingSectionHeading({
  index,
  title,
  description,
  className = "",
}: {
  index: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`landingSectionHeading ${className}`.trim()} data-reveal>
      <span className="landingSectionIndex">{index}</span>
      <Heading as="h2">{title}</Heading>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function StudyThumb({ variant }: { variant: string }) {
  if (variant === "mfcu") {
    return (
      <div className="landingStudyThumb landingStudyThumbImage">
        <Image
          src="/case-studies/member-first-credit-union-green-car-loan/original-page.png"
          alt="Member First Credit Union Green Car Loan webpage"
          fill
          sizes="(min-width: 64rem) 17rem, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`landingStudyThumb landingStudyThumb-${variant}`}
      aria-label={`${variant} audit visual placeholder`}
      role="img"
    >
      <div className="landingStudyThumbWindow">
        <span />
        <span />
        <span />
      </div>
      <div className="landingStudyThumbLines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="landingStudyThumbLabel">
        {variant === "search" ? "SEARCH / SIGNAL" : "MESSAGE / ACTION"}
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="marketingPage landingPage">
      <Section className="landingHero">
        <Container>
          <div className="landingHeroGrid">
            <div className="landingHeroCopy" data-reveal>
              <p className="landingHeroEyebrow">Marketing insights. Real impact.</p>
              <Heading className="landingHeroTitle">
                Hi, I&apos;m <span>Xue</span>
              </Heading>
              <p className="landingHeroLead">
                I help ambitious brands turn insights into meaningful growth.
              </p>
              <p className="landingHeroDescription">
                A digital marketing specialist with a passion for strategy, data and human
                behaviour — bringing logic and creativity to build marketing that works in
                the real world.
              </p>
              <div className="landingHeroActions">
                <Button href="/case-studies">
                  View case studies <span aria-hidden="true">→</span>
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact me <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>

            <div
              className="landingHeroVisual"
              data-reveal
              aria-label="Branded editorial visual for Xueshi Marketing"
              role="img"
            >
              <div className="landingHeroVisualGrid" aria-hidden="true" />
              <div className="landingHeroVisualDecor" aria-hidden="true">
                <span className="landingHeroVisualCircle" />
                <span className="landingHeroVisualFrame" />
                <span className="landingHeroVisualMarker" />
              </div>
              <div className="landingHeroVisualNote">
                <span>Good marketing</span>
                <span>builds brighter</span>
                <span>possibilities.</span>
              </div>
              <div className="landingHeroVisualFooter">
                <span>Strategy</span>
                <span>Audience</span>
                <span>Better marketing</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="landingServicesSection">
        <Container>
          <div className="landingSectionGrid">
            <LandingSectionHeading index="01" title="What I Can Help With" />
            <div className="landingServices" data-reveal>
              {services.map((service) => (
                <div className="landingService" key={service.index}>
                  <span className="landingServiceIndex">{service.index}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="landingStudiesSection">
        <Container>
          <div className="landingStudiesLayout">
            <div className="landingStudiesIntro" data-reveal>
              <LandingSectionHeading
                index="02"
                title="Selected Case Studies"
                description="Real challenges. Practical solutions. Thoughtful, evidence-led marketing."
              />
              <Button href="/case-studies" variant="ghost">
                View case studies <span aria-hidden="true">→</span>
              </Button>
            </div>
            <div className="landingStudies" data-reveal>
              {caseStudies.map((study) => (
                <article className="landingStudy" key={study.title}>
                  <StudyThumb variant={study.variant} />
                  <div className="landingStudyContent">
                    <p className="landingStudyMeta">
                      <span>{study.label}</span>
                    </p>
                    <h3>{study.title}</h3>
                    <p>{study.description}</p>
                  </div>
                  <Button href={study.href} variant="ghost" className="landingStudyLink">
                    {study.action} <span aria-hidden="true">→</span>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="landingProcessSection">
        <Container>
          <div className="landingSectionGrid landingProcessGrid">
            <LandingSectionHeading
              index="03"
              title="How I Work"
              description="A clear, collaborative process to turn complexity into progress."
            />
            <div className="landingProcess" data-reveal>
              {process.map((step) => (
                <div className="landingProcessStep" key={step.index}>
                  <span className="landingProcessIndex">{step.index}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="landingAboutSection">
        <Container>
          <div className="landingAboutGrid">
            <div data-reveal>
              <LandingSectionHeading index="04" title="About / Why Work With Me" />
              <div className="landingAboutCopy">
                <p>
                  I&apos;m Xue, a digital marketing specialist with experience across
                  brand, performance and content marketing. I enjoy solving problems,
                  finding what makes people tick and turning ideas into real results.
                </p>
                <p>
                  I bring a balance of strategic thinking and hands-on execution, with a
                  genuine interest in the impact good marketing can have on businesses and
                  people&apos;s lives.
                </p>
              </div>
            </div>
            <div className="landingReasons" data-reveal>
              <p className="landingReasonsIntro">
                Three reasons clients and employers value working with me
              </p>
              {reasons.map((reason) => (
                <div className="landingReason" key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="landingInsightsSection">
        <Container>
          <div className="landingInsightsHeader" data-reveal>
            <LandingSectionHeading
              index="05"
              title="Latest Insights"
              description="Thoughts on marketing, strategy and the changing digital landscape."
            />
            <Button href="/insights" variant="ghost">
              All insights <span aria-hidden="true">→</span>
            </Button>
          </div>
          <div className="landingInsights" data-reveal>
            {insights.map((insight) => (
              <article className="landingInsight" key={insight.title}>
                <div
                  className={`landingInsightVisual landingInsightVisual-${insight.variant}`}
                >
                  <span>
                    {insight.variant === "search"
                      ? "01"
                      : insight.variant === "content"
                        ? "02"
                        : "03"}
                  </span>
                </div>
                <p className="landingInsightMeta">
                  {insight.date} <span aria-hidden="true">·</span> {insight.type}
                </p>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <Button href="/insights" variant="ghost">
                  Read more <span aria-hidden="true">→</span>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="landingContactSection">
        <Container>
          <div className="landingContact" data-reveal>
            <div>
              <p className="landingContactIndex">06 / Contact</p>
              <Heading as="h2">Let&apos;s Talk</Heading>
            </div>
            <p>
              Interested in working together or have a question? I&apos;d love to hear
              from you.
            </p>
            <Button href="/contact">
              Contact me <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
