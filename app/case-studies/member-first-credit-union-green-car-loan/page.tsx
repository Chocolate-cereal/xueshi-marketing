import type { Metadata } from "next";
import Link from "next/link";

import { ContentSection } from "@/components/sections/content-section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  FindingBlock,
  MeasurementGroup,
  NumberedSectionHeader,
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
      <ContentSection className="overflow-hidden pb-0 pt-9 sm:pt-12">
        <div className="relative isolate">
          <div
            className="pointer-events-none absolute -right-52 -top-52 -z-10 hidden size-[38rem] rounded-full bg-[#E8D0C7] md:block lg:-right-40 lg:-top-64 lg:size-[46rem]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-10 top-48 hidden h-28 w-32 md:block lg:right-16 lg:top-44"
            aria-hidden="true"
          >
            <span className="absolute left-0 top-0 size-20 border border-[#B85C4B] lg:size-24" />
            <span className="absolute left-8 top-7 size-20 border border-[#B85C4B] lg:left-10 lg:top-8 lg:size-24" />
            <span className="absolute bottom-0 right-0 size-3 bg-[#B85C4B]" />
          </div>

          <Link
            href="/case-studies"
            className="relative z-10 inline-flex text-[0.8125rem] font-medium text-muted transition hover:text-[#B85C4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-sm"
          >
            ← Back to Case Studies
          </Link>

          <div className="relative z-10 mt-11 max-w-[47rem] pb-14 sm:mt-14 sm:pb-16 lg:pb-20">
            <span className="inline-flex border border-border px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
              Independent portfolio case study
            </span>
            <p className="mt-7 text-sm font-medium text-[#B85C4B]">
              Member First Credit Union
            </p>
            <h1
              className="mt-3 max-w-[47rem] text-[2.5rem] font-normal leading-[1.02] tracking-[-0.025em] text-foreground sm:text-[3.25rem] lg:text-[3.75rem]"
              style={{ fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif' }}
            >
              Green Car Loan Landing Page &amp; Campaign Strategy
            </h1>
            <p className="mt-6 max-w-[44rem] text-[0.9375rem] leading-[1.7] text-muted sm:text-base">
              An independent digital marketing case study exploring how a credit union
              could improve the online journey for a green car loan through landing-page
              optimisation, search research, paid-media planning and campaign creative.
            </p>
          </div>
        </div>

        <dl className="grid gap-px border-y border-border bg-border sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {projectMeta.map((item) => (
            <div key={item.label} className="min-w-0 bg-background px-4 py-5">
              <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-[#B85C4B]">
                {item.label}
              </dt>
              <dd className="mt-2 text-xs leading-[1.6] text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
        <aside className="border-b border-border px-4 py-4 text-[0.6875rem] leading-[1.65] text-muted sm:px-5 sm:text-xs">
          This is an independent portfolio project based on publicly available information
          and my own analysis. It was not commissioned by or produced on behalf of Member
          First Credit Union.
        </aside>
      </ContentSection>

      <ContentSection id="context" className="bg-surface/35 py-14 sm:py-16">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[#E74432] sm:text-xs">
          01 — Context &amp; objectives
        </p>
        <h2
          className="mt-4 max-w-[44rem] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[2.5rem] lg:text-5xl"
          style={{ fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif' }}
        >
          Understanding the original experience
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-14">
          <div className="max-w-sm">
            <h3
              className="text-2xl font-normal leading-[1.15] text-foreground"
              style={{ fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif' }}
            >
              Project context
            </h3>
            <p className="mt-5 text-[0.8125rem] leading-[1.7] text-muted sm:text-sm">
              This independent case study examines the Green Car Loan digital journey and
              how the page communicates the offer, supports decision-making and guides
              prospective borrowers towards application.
            </p>
            <p className="mt-4 text-[0.8125rem] leading-[1.7] text-muted sm:text-sm">
              The review considers the landing-page experience, information hierarchy,
              search visibility and paid-media alignment, with recommendations based on
              publicly available information and independent analysis.
            </p>
            <div className="mt-8">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-[#E74432]">
                Scope
              </p>
              <p className="mt-2 text-[0.8125rem] leading-6 text-foreground">
                UX · Content · SEO · Paid media
              </p>
            </div>
          </div>

          <figure>
            <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden border border-border bg-surface/65 px-8 text-center">
              <p className="max-w-xs text-xs leading-6 text-muted">
                Original MFCU Green Car Loan webpage — image to be added
              </p>
            </div>
            <figcaption className="mt-3 flex flex-col gap-1 text-[0.6875rem] leading-5 text-muted sm:flex-row sm:items-center sm:justify-between sm:text-xs">
              <span>Original MFCU Green Car Loan webpage, captured for analysis.</span>
              <span className="text-muted/60" aria-disabled="true">
                View full original page ↗
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 border-t border-border pt-5 sm:mt-14 sm:pt-6">
          <div className="grid md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective.title}
                className={`grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5 md:px-6 ${
                  index > 0 ? "border-t border-border" : ""
                } ${index === 1 ? "md:border-l md:border-t-0" : ""} ${
                  index === 3 ? "md:border-l" : ""
                }`}
              >
                <p
                  className="text-[1.625rem] font-normal leading-none text-[#E74432] sm:text-[1.875rem]"
                  style={{
                    fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif',
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3
                    className="max-w-sm text-lg font-normal leading-[1.15] text-foreground sm:text-xl"
                    style={{
                      fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif',
                    }}
                  >
                    {objective.title}
                  </h3>
                  <p className="mt-2.5 max-w-sm text-[0.8125rem] leading-[1.6] text-muted">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
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
