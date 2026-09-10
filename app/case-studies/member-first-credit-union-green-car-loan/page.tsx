import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContentSection } from "@/components/sections/content-section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  MeasurementGroup,
  NumberedSectionHeader,
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
  {
    title: "Prioritise",
    description:
      "Place the repayment calculator directly after the hero and make it the primary action.",
  },
  {
    title: "Simplify",
    description:
      "Give essential financial information a clearer hierarchy and reduce competing figures.",
  },
  {
    title: "Connect",
    description:
      "Keep benefits close to repayment exploration, then link eligibility with application steps.",
  },
  {
    title: "Distinguish",
    description:
      "Give the environmental initiative a separate place within the proposed page.",
  },
];

function StrategyIcon({
  kind,
}: {
  kind: "calculator" | "gift" | "document" | "arrow" | "leaf";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
      aria-hidden="true"
    >
      {kind === "calculator" && (
        <>
          <rect x="5" y="2" width="14" height="20" rx="1" />
          <path d="M8 5h8v4H8zM8 12h1m3 0h1m3 0h0M8 15h1m3 0h1m3 0h0M8 18h1m3 0h1m3 0h0" />
        </>
      )}
      {kind === "gift" && (
        <>
          <path d="M4 11h16v10H4zM3 7h18v4H3zM12 7v14" />
          <path d="M12 7H8a2.5 2.5 0 1 1 2.5-2.5L12 7Zm0 0h4a2.5 2.5 0 1 0-2.5-2.5L12 7Z" />
        </>
      )}
      {kind === "document" && (
        <>
          <rect x="5" y="2" width="14" height="20" rx="1" />
          <path d="M8 6h8M8 10h8M8 14h5M8 18h3" />
        </>
      )}
      {kind === "arrow" && <path d="M3 12h17m-6-6 6 6-6 6" />}
      {kind === "leaf" && (
        <>
          <path d="M20 3C9 3 3 8 5 15c2 6 14 6 15-12Z" />
          <path d="m3 22 12-14m-8 9-1-6m5 2 5 1" />
        </>
      )}
    </svg>
  );
}

function StrategyLines() {
  return (
    <div className="mt-2 space-y-1.5">
      <span className="block h-1 w-4/5 rounded-sm bg-foreground/15" />
      <span className="block h-1 w-1/2 rounded-sm bg-foreground/10" />
    </div>
  );
}

function StrategyVisual({ index }: { index: number }) {
  const panel = "rounded-[3px] border border-border bg-surface/65";
  if (index === 0)
    return (
      <div aria-hidden="true" className={`${panel} w-full p-2.5`}>
        <div className="mb-2.5 flex gap-1">
          <span className="size-1 rounded-full bg-[#B85C4B]/70" />
          <span className="size-1 rounded-full bg-foreground/30" />
          <span className="size-1 rounded-full bg-foreground/20" />
        </div>
        <div className="rounded-[2px] bg-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold">Hero</p>
          <StrategyLines />
        </div>
        <div className="mt-2 flex items-center gap-2.5 rounded-[2px] bg-[#B85C4B]/10 px-3 py-2.5 text-[#B85C4B]">
          <StrategyIcon kind="calculator" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold">Calculator</p>
            <StrategyLines />
          </div>
          <span className="text-lg">›</span>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div aria-hidden="true" className="w-full space-y-1.5">
        {["Monthly repayments", "Total cost", "Representative example"].map((label) => (
          <div key={label} className={`${panel} flex items-center gap-3 px-2.5 py-2`}>
            <span className="shrink-0 text-[8px] text-muted">{label}</span>
            <span className="h-1 w-1/3 rounded-sm bg-foreground/10" />
          </div>
        ))}
        <div className="flex items-center justify-between gap-3 rounded-[3px] bg-[#B85C4B]/20 px-3 py-3 text-[#B85C4B]">
          <div className="flex-1">
            <p className="text-[10px] font-semibold">Your monthly repayment</p>
            <StrategyLines />
          </div>
          <StrategyIcon kind="calculator" />
        </div>
      </div>
    );
  if (index === 2)
    return (
      <div aria-hidden="true" className="flex w-full items-center">
        {(["Benefits", "Eligibility", "Apply"] as const).map((label, i) => (
          <div key={label} className="flex min-w-0 flex-1 items-center">
            {i > 0 && <span className="h-px w-3 shrink-0 bg-[#B85C4B]/65" />}
            <div className={`${panel} min-w-0 flex-1 px-2 py-3`}>
              <span className="flex justify-center text-[#B85C4B]">
                <StrategyIcon kind={i === 0 ? "gift" : i === 1 ? "document" : "arrow"} />
              </span>
              <p className="mt-2 text-center text-[9px] font-semibold">{label}</p>
              <StrategyLines />
            </div>
          </div>
        ))}
      </div>
    );
  return (
    <div aria-hidden="true" className={`${panel} w-full p-2.5`}>
      <div className="space-y-1.5 pb-3">
        <span className="block h-1.5 w-11/12 rounded-sm bg-foreground/15" />
        <span className="block h-1.5 w-3/4 rounded-sm bg-foreground/15" />
        <span className="block h-1.5 w-1/2 rounded-sm bg-foreground/15" />
        <span className="block h-1.5 w-4/5 rounded-sm bg-foreground/15" />
      </div>
      <div className="flex items-center gap-2.5 rounded-[2px] bg-[#B85C4B]/10 px-2.5 py-3 text-[#B85C4B]">
        <StrategyIcon kind="leaf" />
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-semibold">Environmental initiative</p>
          <StrategyLines />
        </div>
      </div>
    </div>
  );
}

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
        <div>
          <Link
            href="/case-studies"
            className="inline-flex text-[0.8125rem] font-medium text-muted transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-sm"
          >
            ← Back to Case Studies
          </Link>

          <div className="mt-11 grid items-center gap-12 pb-14 sm:mt-14 sm:pb-16 lg:grid-cols-[minmax(0,1.85fr)_minmax(15rem,1fr)] lg:gap-16 lg:pb-20">
            <div className="min-w-0">
              <span className="inline-flex border border-border px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Independent portfolio case study
              </span>
              <p className="mt-7 text-sm font-medium text-accent">
                Member First Credit Union
              </p>
              <Heading className="mt-3 max-w-[47rem] text-[2.5rem] font-normal leading-[1.04] sm:text-[3.25rem] lg:text-[3.75rem]">
                Green Car Loan Landing Page &amp; Campaign Strategy
              </Heading>
              <p className="mt-6 max-w-[44rem] text-[0.9375rem] leading-[1.7] text-muted sm:text-base">
                An independent digital marketing case study exploring how a credit union
                could improve the online journey for a green car loan through landing-page
                optimisation, search research, paid-media planning and campaign creative.
              </p>
            </div>

            <div
              className="mx-auto flex h-[19rem] w-full max-w-[17rem] items-center justify-center bg-accent-soft p-7 sm:h-[22rem] sm:max-w-[19rem] sm:p-8 lg:mx-0 lg:ml-auto lg:h-[25rem] lg:max-w-none"
              aria-hidden="true"
            >
              <div className="w-full max-w-[13rem]">
                <div className="flex h-24 flex-col justify-center gap-3 bg-surface px-5">
                  <span className="block h-1.5 w-full bg-accent" />
                  <span className="block h-1.5 w-3/5 bg-accent" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <span className="aspect-square border border-accent" />
                  <span className="aspect-square bg-accent" />
                  <span className="aspect-square border border-accent" />
                  <span className="aspect-square border border-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <dl className="grid gap-px border-y border-border bg-border sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {projectMeta.map((item) => (
            <div key={item.label} className="min-w-0 bg-background px-5 py-6">
              <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-accent">
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
            <div
              className="h-96 w-full overflow-x-hidden overflow-y-auto border border-border bg-surface/65 md:h-[440px] lg:h-[480px]"
              aria-label="Original Member First Credit Union Green Car Loan landing page"
              tabIndex={0}
            >
              <Image
                src="/case-studies/member-first-credit-union-green-car-loan/original-page.png"
                alt="Original Member First Credit Union Green Car Loan landing page"
                width={854}
                height={1842}
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="block h-auto w-full"
              />
            </div>
            <p className="mt-2 text-[0.6875rem] leading-5 text-muted">
              Scroll to explore the original page ↓
            </p>
            <figcaption className="mt-1 flex flex-col gap-1 text-[0.6875rem] leading-5 text-muted sm:flex-row sm:items-center sm:justify-between sm:text-xs">
              <span>Original MFCU Green Car Loan webpage, captured for analysis.</span>
              <Link
                href="/case-studies/member-first-credit-union-green-car-loan/original-page.png"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#E74432] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View full original page ↗
              </Link>
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
        <header className="grid gap-5 border-y border-border py-8 md:grid-cols-[minmax(0,0.22fr)_minmax(0,0.78fr)] md:gap-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#B85C4B]">02</p>
          <div className="max-w-3xl">
            <h2
              className="text-[2.625rem] font-normal leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl"
              style={{ fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif' }}
            >
              Research approach
            </h2>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.65] text-muted sm:text-base">
              A seven-stage process connected discovery and analysis to the proposed
              experience and campaign execution.
            </p>
          </div>
        </header>

        {[
          { title: "Discover", steps: researchSteps.slice(0, 2) },
          { title: "Analyse", steps: researchSteps.slice(2, 4) },
          { title: "Develop", steps: researchSteps.slice(4, 7) },
        ].map((phase, phaseIndex) => {
          const stepOffset = phaseIndex * 2;
          const isDevelop = phase.title === "Develop";

          return (
            <div
              key={phase.title}
              className={`grid border-b border-border px-0 py-8 md:grid-cols-[minmax(0,0.22fr)_minmax(0,0.78fr)] md:gap-10 ${
                phase.title === "Analyse" ? "bg-accent-soft/25" : ""
              }`}
            >
              <div className="pb-7 md:pb-0">
                <span className="block h-0.5 w-12 bg-[#B85C4B]" aria-hidden="true" />
                <h3
                  className="mt-4 text-[2rem] font-normal leading-none text-foreground sm:text-[2.5rem]"
                  style={{
                    fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif',
                  }}
                >
                  {phase.title}
                </h3>
              </div>

              <ol
                className={`grid ${
                  isDevelop ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {phase.steps.map(([title, description], stepIndex) => (
                  <li
                    key={title}
                    className={`border-t border-border py-6 first:border-t-0 md:border-l md:border-t-0 md:px-7 md:py-0 md:first:border-l-0 md:first:pl-0 md:last:pr-0 ${
                      isDevelop && stepIndex === 2
                        ? "md:col-span-2 md:mt-7 md:border-l-0 md:border-t md:pt-7 lg:col-span-1 lg:mt-0 lg:border-l lg:border-t-0 lg:pt-0"
                        : ""
                    }`}
                  >
                    <p
                      className="text-[1.0625rem] font-medium leading-none text-[#B85C4B]"
                      style={{
                        fontFamily: '"Baskerville", "Iowan Old Style", Georgia, serif',
                      }}
                    >
                      {String(stepOffset + stepIndex + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-4 text-base font-semibold leading-snug text-foreground sm:text-[1.0625rem]">
                      {title}
                    </h4>
                    <p className="mt-3 max-w-sm text-[0.8125rem] leading-[1.6] text-muted sm:text-sm">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </ContentSection>

      <ContentSection id="findings" className="bg-surface/35">
        <div className="grid lg:grid-cols-[minmax(0,0.63fr)_minmax(18rem,0.37fr)]">
          <div className="min-w-0 lg:pr-12">
            <div className="grid gap-5 border-t border-border pt-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8">
              <p className="text-sm font-semibold tracking-[0.18em] text-accent">03</p>
              <div>
                <Heading as="h2">Key findings</Heading>
                <p className="mt-5 max-w-2xl text-base leading-[1.6] text-muted">
                  Four issues stood out across the landing-page experience, information
                  hierarchy and search content.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-accent">01</p>
                <div>
                  <h3 className="font-serif text-xl font-bold leading-[1.25] text-foreground sm:text-[1.375rem]">
                    The repayment calculator was difficult to reach
                  </h3>
                  <p className="mt-4 text-base leading-[1.6] text-muted">
                    The calculator appeared too far down the page, even though repayment
                    cost is likely to be one of the main questions users have when
                    considering the loan.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-accent">02</p>
                <div>
                  <h3 className="font-serif text-xl font-bold leading-[1.25] text-foreground sm:text-[1.375rem]">
                    Financial information lacked clarity and consistency
                  </h3>
                  <p className="mt-4 text-base leading-[1.6] text-muted">
                    The page presented the promotional rate, APR, calculator and repayment
                    tables without a clear hierarchy. Some examples, including the 10-year
                    term, appeared inconsistent with information elsewhere on the page.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-accent">03</p>
                <div>
                  <h3 className="font-serif text-xl font-bold leading-[1.25] text-foreground sm:text-[1.375rem]">
                    The journey from research to application was unclear
                  </h3>
                  <p className="mt-4 text-base leading-[1.6] text-muted">
                    Eligibility, loan benefits, repayment details and application steps
                    appeared in separate sections. Their order did not clearly guide users
                    from exploring the loan to checking eligibility and applying.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-y border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-accent">04</p>
                <div>
                  <h3 className="font-serif text-xl font-bold leading-[1.25] text-foreground sm:text-[1.375rem]">
                    Search content did not fully address user questions
                  </h3>
                  <p className="mt-4 text-base leading-[1.6] text-muted">
                    The page provided limited answers to likely search queries about
                    qualifying vehicles, eligibility, repayment calculations and the
                    difference between the interest rate and APR.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="mt-12 min-w-0 border-t border-border pt-10 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-8">
            <h3 className="font-serif text-[1.75rem] font-bold leading-[1.2] text-foreground sm:text-[2rem]">
              Supporting evidence
            </h3>
            <div className="mt-8 grid gap-8">
              <figure className="min-w-0">
                <a
                  href="/case-studies/member-first-credit-union-green-car-loan/calculator-position.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  aria-label="View calculator position image at full resolution (opens in a new tab)"
                >
                  <Image
                    src="/case-studies/member-first-credit-union-green-car-loan/calculator-position.png"
                    alt="Annotated MFCU Green Car Loan page showing the hero, rate highlights and repayment table above the loan calculator."
                    width={1202}
                    height={1309}
                    sizes="(min-width: 1024px) 37vw, 100vw"
                    className="block h-auto w-full border border-border"
                  />
                </a>
                <figcaption className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#B85C4B]">
                    Finding 01 · Calculator position
                  </p>
                  <p className="mt-1 text-sm leading-[1.6] text-muted">
                    The calculator sits below the hero, offer highlights and repayment
                    table.
                  </p>
                </figcaption>
                <a
                  href="/case-studies/member-first-credit-union-green-car-loan/calculator-position.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm text-[#B85C4B] underline underline-offset-4 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  View larger image ↗
                </a>
              </figure>
              <figure className="min-w-0">
                <a
                  href="/case-studies/member-first-credit-union-green-car-loan/repayment-tables.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  aria-label="View repayment tables image at full resolution (opens in a new tab)"
                >
                  <Image
                    src="/case-studies/member-first-credit-union-green-car-loan/repayment-tables.png"
                    alt="Comparison of the MFCU repayment tables above and below the calculator, showing different labels and financial details."
                    width={614}
                    height={370}
                    sizes="(min-width: 1024px) 37vw, 100vw"
                    className="block h-auto w-full border border-border"
                  />
                </a>
                <figcaption className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#B85C4B]">
                    Finding 02 · Repayment information
                  </p>
                  <p className="mt-1 text-sm leading-[1.6] text-muted">
                    Compare the labels and financial details in the repayment tables
                    above and below the calculator.
                  </p>
                </figcaption>
                <a
                  href="/case-studies/member-first-credit-union-green-car-loan/repayment-tables.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm text-[#B85C4B] underline underline-offset-4 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  View larger image ↗
                </a>
              </figure>
            </div>
          </aside>
        </div>
      </ContentSection>

      <ContentSection id="strategy" className="bg-background">
        <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <div className="flex items-baseline gap-6 sm:gap-12">
            <p className="text-sm font-medium text-[#B85C4B]">04</p>
            <Heading
              as="h2"
              className="text-[2rem] font-bold leading-tight sm:text-[2.5rem]"
            >
              Landing-page strategy
            </Heading>
          </div>
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-[#B85C4B]">
            Decisions first
          </p>
        </header>

        <div className="my-10 grid gap-6 sm:my-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <h3 className="font-serif text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.5rem]">
            Make <span className="text-[#B85C4B]">affordability</span> the starting point.
          </h3>
          <p className="max-w-md border-l border-border py-2 pl-6 text-base leading-[1.7] text-muted lg:py-6 lg:pl-8">
            A calculator-led journey that helps visitors understand the offer before
            applying.
          </p>
        </div>

        <ol className="grid md:grid-cols-2">
          {strategyPoints.map((point, index) => (
            <li
              key={point.title}
              className={`grid items-center gap-6 py-8 min-[420px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ${
                index > 0 ? "border-t border-border" : ""
              } ${index === 1 ? "md:border-t-0" : ""} ${
                index % 2 === 1 ? "md:border-l md:pl-7" : "md:pr-7"
              }`}
            >
              <div className="min-w-0 self-start">
                <p className="text-xs font-medium text-[#B85C4B]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 font-serif text-[2rem] font-bold leading-tight tracking-[-0.02em] lg:text-[2.25rem]">
                  {point.title}
                </h4>
                <p className="mt-3 text-sm leading-[1.6] text-muted">
                  {point.description}
                </p>
              </div>
              <div className="mx-auto w-full max-w-[16rem] min-[420px]:max-w-none md:max-w-[16rem] lg:max-w-none">
                <StrategyVisual index={index} />
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2 border-t border-border pt-5 text-xs leading-6 text-muted">
          <p className="font-semibold">Proposed order:</p>
          <ol className="flex flex-wrap items-baseline gap-x-2">
            {journey.map((item, index) => (
              <li key={item} className="flex items-baseline gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-[#B85C4B]/60">
                    ·
                  </span>
                )}
                <span>
                  {
                    [
                      "Hero",
                      "Calculator",
                      "Benefits",
                      "Eligibility",
                      "How to apply",
                      "Environmental initiative",
                      "Final CTA",
                    ][index]
                  }
                </span>
              </li>
            ))}
          </ol>
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
