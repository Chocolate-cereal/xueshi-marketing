import type { Metadata } from "next";
import Link from "next/link";

import { ContentSection } from "@/components/sections/content-section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  FindingBlock,
  MeasurementGroup,
  NumberedSectionHeader,
  ProjectMeta,
  ResearchStep,
  VisualPlaceholder,
} from "./case-study-components";

export const metadata: Metadata = {
  title: "Green Car Loan Landing Page & Campaign Strategy",
  description:
    "An independent digital marketing case study for Member First Credit Union, covering landing-page strategy, search research and paid-media planning.",
};

const projectMeta = [
  { label: "Project type", value: "Independent digital marketing case study" },
  { label: "Industry", value: "Financial services / Credit union" },
  { label: "Market", value: "Dublin, Ireland" },
  {
    label: "My role",
    value: "Research, UX recommendations, wireframing, media planning and ad creative",
  },
  {
    label: "Deliverables",
    value: "Research findings, landing-page wireframe, paid-social plan and ad concept",
  },
  {
    label: "Tools",
    value:
      "Figma, Canva, Google Keyword Planner, Meta Ads Manager and supporting SEO research tools",
  },
];

const objectives = [
  {
    title: "Clarify the proposition",
    description:
      "Make the product, financial information and benefits easier to understand.",
  },
  {
    title: "Increase visibility for relevant local search queries",
    description:
      "Identify realistic opportunities to reach Dublin-based users searching for green car finance through conventional and AI-powered search.",
  },
  {
    title: "Create a clearer journey",
    description:
      "Connect product benefits, eligibility, application information and calls to action more logically.",
  },
  {
    title: "Develop a focused acquisition approach",
    description:
      "Create a locally relevant paid-media concept suitable for a constrained test budget.",
  },
];

const researchSteps = [
  [
    "Landing-page review",
    "Reviewed content hierarchy, financial information, calls to action and the overall user journey.",
  ],
  [
    "Keyword research",
    "Explored product-related search demand, local search terms and relevant user queries.",
  ],
  [
    "Competitor & SERP research",
    "Reviewed how comparable financial products and search results presented relevant information.",
  ],
  [
    "SEO & AI-search review",
    "Considered content discoverability across traditional search and AI-assisted search experiences.",
  ],
  [
    "UX strategy",
    "Translated the research into a revised content and information hierarchy.",
  ],
  [
    "Campaign planning",
    "Developed the audience, channel, objective and forecasting methodology for a focused paid-social concept.",
  ],
  [
    "Creative development",
    "Translated the product proposition into campaign messaging and a visual advertising concept.",
  ],
];

const journey = [
  "Hero & value proposition",
  "Repayment calculator",
  "Product benefits",
  "Eligibility",
  "How to apply",
  "Environmental initiative",
  "Final application CTA",
];

const strategyPoints = [
  [
    "Calculator-led primary action",
    "Shift the initial emphasis from immediate application toward repayment exploration.",
  ],
  [
    "Clearer financial hierarchy",
    "Reduce visual competition between multiple financial figures and prioritise the information most useful for decision-making.",
  ],
  [
    "Benefits closer to consideration",
    "Position key product benefits closer to the calculator and decision stage.",
  ],
  [
    "Eligibility connected to application",
    "Connect qualification information more clearly with the steps required to apply.",
  ],
  [
    "Distinct sustainability story",
    "Keep the tree-planting initiative visually distinct rather than absorbing it into a generic benefits list.",
  ],
];

const mediaPlan = [
  ["Platforms", "Facebook and Instagram"],
  ["Objective", "Drive relevant users to the landing page"],
  ["Geography", "Relevant Dublin service area"],
  ["Audience", "People considering an electric or qualifying hybrid vehicle"],
  ["Campaign approach", "Concentrated single-campaign test"],
  ["Message", "Financing, affordability and repayment planning"],
  ["Primary action", "Calculate repayments"],
];

export default function MemberFirstGreenCarLoanCaseStudy() {
  return (
    <article>
      <ContentSection className="pb-14 pt-10 sm:pb-20 sm:pt-14">
        <Link
          href="/case-studies"
          className="inline-flex text-sm font-semibold text-muted transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          ← Back to Case Studies
        </Link>
        <div className="mt-12 max-w-5xl">
          <Badge>Independent portfolio case study</Badge>
          <p className="mt-7 text-sm font-semibold text-accent">
            Member First Credit Union
          </p>
          <Heading className="mt-4 max-w-4xl">
            Green Car Loan Landing Page &amp; Campaign Strategy
          </Heading>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            An independent digital marketing case study exploring how a credit union could
            improve the online journey for a green car loan through landing-page
            optimisation, search research, paid-media planning and campaign creative.
          </p>
        </div>
        <div className="mt-12">
          <ProjectMeta items={projectMeta} />
        </div>
        <aside className="mt-6 rounded-xl border border-border bg-accent-soft/45 px-5 py-4 text-sm leading-7 text-muted sm:px-6">
          This is an independent portfolio project based on publicly available information
          and my own analysis. It was not commissioned by or produced on behalf of Member
          First Credit Union.
        </aside>
      </ContentSection>

      <ContentSection id="context" className="bg-surface/35 py-14 sm:py-16">
        <p className="text-[0.8125rem] font-medium text-accent sm:text-sm">
          01 — Context &amp; objectives
        </p>
        <span className="mt-2 block h-px w-10 bg-accent/55" aria-hidden="true" />
        <h2
          className="mt-2 max-w-[43.75rem] text-[2rem] font-normal leading-[1.06] tracking-[-0.02em] text-foreground sm:text-[2.5rem] lg:text-[2.75rem]"
          style={{ fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif' }}
        >
          Making a complex loan page easier to understand and act on.
        </h2>

        <div className="mt-8 grid items-start gap-9 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-10">
          <aside className="border border-border bg-accent-soft/35 p-6">
            <dl>
              {[
                ["Organisation", "Member First Credit Union"],
                ["Page", "Green Car Loan landing page"],
                [
                  "Focus",
                  "Landing-page experience, search visibility and paid acquisition",
                ],
                ["Project type", "Independent portfolio case study"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={index === 0 ? "pb-3.5" : "border-t border-border py-3.5"}
                >
                  <dt className="text-xs font-medium leading-5 text-accent">{label}</dt>
                  <dd className="mt-1 text-[0.8125rem] font-normal leading-[1.55] text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-border pt-4 text-[0.8125rem] leading-[1.6] text-muted">
              This independent case study reviews Member First Credit Union’s Green Car
              Loan journey and explores how clearer information architecture, stronger
              search relevance and a more focused acquisition approach could support
              prospective borrowers.
            </p>
          </aside>

          <div>
            <h3
              className="text-xl font-normal leading-[1.15] text-foreground"
              style={{ fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif' }}
            >
              What the project needed to do
            </h3>
            <div className="mt-2 grid border-t border-border lg:grid-cols-2">
              {objectives.map((objective, index) => (
                <div
                  key={objective.title}
                  className={`py-5 lg:px-5 lg:py-5 ${
                    index > 0 ? "border-t border-border" : ""
                  } ${index === 1 ? "lg:border-l lg:border-t-0" : ""} ${
                    index === 3 ? "lg:border-l" : ""
                  }`}
                >
                  <p
                    className="text-[1.625rem] font-normal leading-none text-accent"
                    style={{
                      fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif',
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4
                    className="mt-3 max-w-sm text-xl font-normal leading-[1.12] text-foreground lg:text-[1.3125rem]"
                    style={{
                      fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif',
                    }}
                  >
                    {objective.title}
                  </h4>
                  <p className="mt-2.5 max-w-xs text-[0.8125rem] leading-[1.6] text-muted">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="research">
        <NumberedSectionHeader
          number="02"
          title="Research approach"
          description="A seven-stage process connected discovery and analysis to the proposed experience and campaign execution."
        />
        <ol className="mt-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-10">
          {researchSteps.map(([title, description], index) => (
            <ResearchStep
              key={title}
              number={String(index + 1).padStart(2, "0")}
              title={title}
            >
              {description}
            </ResearchStep>
          ))}
        </ol>
      </ContentSection>

      <ContentSection id="findings" className="bg-surface/35">
        <NumberedSectionHeader
          number="03"
          title="Key findings"
          description="Five issues stood out across the landing-page experience, information hierarchy and search content."
        />
        <div className="mt-12">
          <FindingBlock
            number="01"
            title="The repayment calculator was difficult to reach"
          >
            The calculator appeared too far down the page, even though repayment cost is
            likely to be one of the main questions users have when considering the loan.
          </FindingBlock>
          <FindingBlock
            number="02"
            title="Financial information lacked clarity and consistency"
          >
            The page presented the promotional rate, APR, calculator and repayment tables
            without a clear hierarchy. Some examples, including the 10-year term, appeared
            inconsistent with information elsewhere on the page.
          </FindingBlock>
          <FindingBlock
            number="03"
            title="The journey from research to application was unclear"
          >
            Eligibility, loan benefits, repayment details and application steps appeared
            in separate sections. Their order did not clearly guide users from exploring
            the loan to checking eligibility and applying.
          </FindingBlock>
          <FindingBlock
            number="04"
            title="Search content did not fully address user questions"
          >
            The page provided limited answers to likely search queries about qualifying
            vehicles, eligibility, repayment calculations and the difference between the
            interest rate and APR.
          </FindingBlock>
          <FindingBlock
            number="05"
            title="A distinctive sustainability benefit was easy to overlook"
          >
            MFCU’s tree-planting initiative helped distinguish the Green Car Loan, but its
            placement and presentation gave it limited prominence compared with other page
            content.
          </FindingBlock>
        </div>
      </ContentSection>

      <ContentSection id="strategy">
        <NumberedSectionHeader
          number="04"
          title="Landing-page strategy"
          description="The proposed hierarchy moves from proposition and affordability through product consideration, qualification and application."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-16">
          <ol className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            {journey.map((item, index) => (
              <li key={item} className="flex items-stretch gap-4">
                <div className="flex w-7 shrink-0 flex-col items-center">
                  <span className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                    {index + 1}
                  </span>
                  {index < journey.length - 1 ? (
                    <span
                      className="my-1 min-h-7 w-px flex-1 bg-border"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <p className="pb-7 pt-1 text-sm font-semibold text-foreground">{item}</p>
              </li>
            ))}
          </ol>
          <div className="grid gap-4 sm:grid-cols-2">
            {strategyPoints.map(([title, description]) => (
              <Card key={title} className="p-6 shadow-none">
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection id="redesign" className="bg-surface/35">
        <NumberedSectionHeader
          number="05"
          title="Landing-page redesign"
          description="The wireframe is a major project deliverable and will be presented here when the final Figma export is ready."
        />
        <VisualPlaceholder
          label="Landing-page wireframe — to be added"
          className="mt-12 min-h-[32rem]"
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Hero",
            "Calculator",
            "Benefits & qualification",
            "Environmental message",
          ].map((label) => (
            <Card
              key={label}
              className="min-h-36 border-dashed bg-surface/50 p-5 shadow-none"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Future annotation
              </p>
              <h3 className="mt-4 font-semibold text-muted">{label}</h3>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="search">
        <NumberedSectionHeader
          number="06"
          title="Search & AI visibility"
          description="The research considered how relevant product information could be discovered and interpreted across traditional and AI-assisted search experiences."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card>
            <Heading as="h3">Keyword research</Heading>
            <p className="mt-4 text-sm leading-7 text-muted">
              I investigated product-related search demand and relevant search themes.
              Keyword evidence and prioritisation will be added in a later iteration.
            </p>
          </Card>
          <Card>
            <Heading as="h3">Local intent</Heading>
            <p className="mt-4 text-sm leading-7 text-muted">
              Low-volume local keywords should not automatically be dismissed. Search
              volume needs to be considered alongside geographic relevance, product fit
              and user intent.
            </p>
          </Card>
          <Card>
            <Heading as="h3">Content opportunities</Heading>
            <p className="mt-4 text-sm leading-7 text-muted">
              Reserved for supported opportunities around questions, eligibility
              information and useful decision-support content.
            </p>
          </Card>
          <Card>
            <Heading as="h3">AI-assisted discovery</Heading>
            <p className="mt-4 text-sm leading-7 text-muted">
              Clearer question-and-answer content, entity information and structured
              content could make information easier for search and AI-assisted discovery
              systems to interpret. These practices do not guarantee inclusion in
              AI-generated answers.
            </p>
          </Card>
        </div>
      </ContentSection>

      <ContentSection id="media" className="bg-surface/35">
        <NumberedSectionHeader
          number="07"
          title="Paid-media plan"
          description="A focused strategic summary connects the landing-page proposition to a locally relevant acquisition concept."
        />
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {mediaPlan.map(([label, value]) => (
            <div key={label} className="bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {label}
              </dt>
              <dd className="mt-3 text-sm leading-7 text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <Card className="shadow-none">
            <h3 className="font-semibold text-foreground">Why Meta</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Facebook and Instagram provide visual formats and audience controls suited
              to an initial product-awareness and landing-page traffic test.
            </p>
          </Card>
          <Card className="shadow-none">
            <h3 className="font-semibold text-foreground">Why location matters</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Geographic targeting keeps the concept aligned with the relevant Dublin
              service area rather than paying to reach users outside the intended market.
            </p>
          </Card>
          <Card className="shadow-none">
            <h3 className="font-semibold text-foreground">Why concentrate the test</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              A constrained test budget should avoid unnecessary fragmentation so that the
              initial campaign has a clearer learning objective.
            </p>
          </Card>
        </div>
        <p className="mt-6 rounded-xl border border-border bg-surface/55 p-5 text-sm leading-7 text-muted">
          Forecasts were planning estimates based on platform audience estimates and
          external advertising benchmarks rather than live campaign performance.
        </p>
      </ContentSection>

      <ContentSection id="creative">
        <NumberedSectionHeader
          number="08"
          title="Creative concept"
          description="The campaign presentation will connect product positioning and repayment planning to a focused advertising concept."
        />
        <VisualPlaceholder
          label="Campaign creative — to be added"
          className="mt-12 min-h-[28rem]"
        />
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
          The final portfolio presentation will focus on the strongest creative concept
          and selected copy variations rather than reproducing every version produced
          during the project.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Selected primary text", "Selected headlines", "Creative rationale"].map(
            (item) => (
              <Card
                key={item}
                className="min-h-32 border-dashed bg-surface/45 shadow-none"
              >
                <p className="text-sm font-semibold text-muted">{item} — to be added</p>
              </Card>
            ),
          )}
        </div>
      </ContentSection>

      <ContentSection id="measurement" className="bg-surface/35">
        <NumberedSectionHeader
          number="09"
          title="How I would measure success"
          description="These are proposed metrics for validating the experience and campaign, not existing performance results."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MeasurementGroup
            title="Landing-page engagement"
            items={[
              "Calculator starts",
              "Calculator completions",
              "Interaction with eligibility and application content",
            ]}
          />
          <MeasurementGroup
            title="Conversion journey"
            items={[
              "Application CTA clicks",
              "Application starts",
              "Application completion rate",
            ]}
          />
          <MeasurementGroup
            title="Campaign"
            items={[
              "Landing-page views",
              "Click-through rate",
              "Cost per landing-page view",
              "Conversion rate by audience and creative",
            ]}
          />
          <MeasurementGroup
            title="Search"
            items={[
              "Impressions for priority queries",
              "Organic clicks",
              "Search visibility trends",
              "Search Console query development",
            ]}
          />
        </div>
      </ContentSection>

      <ContentSection id="limitations">
        <NumberedSectionHeader number="10" title="Limitations" />
        <aside className="mt-10 rounded-2xl border border-border bg-accent-soft/40 p-6 text-base leading-8 text-muted sm:p-8">
          This was a strategic portfolio project rather than an implemented campaign. I
          did not have access to first-party analytics, customer research, campaign
          conversion data, the production CMS or post-launch results. Recommendations
          therefore represent evidence-led hypotheses based on publicly available
          information, third-party research tools and established UX and marketing
          principles.
        </aside>
      </ContentSection>

      <ContentSection id="reflection" className="bg-surface/35">
        <NumberedSectionHeader number="11" title="Reflection & next steps" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="p-7 sm:p-8">
            <Heading as="h3">With first-party access, my next steps would be to:</Heading>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
              {[
                "Validate calculator and CTA behaviour through analytics",
                "Analyse application drop-off",
                "Compare keyword opportunities against Search Console and paid-search data",
                "Test calculator-led versus application-led messaging",
                "Validate relevant structured data and CMS implementation",
                "Run an initial campaign test and optimise using actual performance",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-3 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <div className="flex items-center rounded-2xl border border-border bg-surface p-7 sm:p-9">
            <p className="font-serif text-xl leading-9 text-foreground sm:text-2xl sm:leading-10">
              This project reinforced the importance of connecting search research, user
              experience and campaign planning rather than treating each channel in
              isolation. The strongest recommendations were those that could be traced
              from an observed user or search need through to a specific page or campaign
              decision.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="py-10 sm:py-12">
        <nav
          aria-label="Case study navigation"
          className="flex items-center justify-between border-t border-border pt-8"
        >
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-muted transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            ← All Case Studies
          </Link>
          <span className="text-sm text-muted/60">Next Case Study →</span>
        </nav>
      </ContentSection>
    </article>
  );
}
