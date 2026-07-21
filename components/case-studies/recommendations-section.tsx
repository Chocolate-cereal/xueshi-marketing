import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type Recommendation = {
  title: string;
  description: string;
  focusAreas: string[];
  validation: string;
  accent: string;
  numberClass: string;
};

const recommendations: Recommendation[] = [
  {
    title: "Investigate relevant organic gaps",
    description:
      "Review search themes where competitors have visibility and Revolut appears less represented. Prioritise only the gaps that align with genuine user needs, available products and appropriate landing-page content.",
    focusAreas: [
      "Relevant competitor-only keywords",
      "Currency and transfer questions",
      "Long-tail informational needs",
      "Supporting guides, calculators and tools",
    ],
    validation:
      "Filter by search intent, product relevance, location, estimated demand, content suitability and regulatory considerations.",
    accent: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    numberClass: "text-violet-700 dark:text-violet-300",
  },
  {
    title: "Preserve paid-search differentiation",
    description:
      "Review the paid keyword areas where Revolut’s observed portfolio differed from Wise and XE, then determine whether that differentiation is producing commercially valuable behaviour.",
    focusAreas: [
      "Business-account searches",
      "Provider-comparison searches",
      "International-transfer searches",
      "Problem-aware queries",
    ],
    validation:
      "Test differentiation using conversion rate, CPA, customer quality, revenue contribution and search-term relevance; lower overlap alone proves no advantage.",
    accent: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    numberClass: "text-blue-700 dark:text-blue-300",
  },
  {
    title: "Align landing pages with search intent",
    description:
      "Evaluate whether landing-page messaging, proof, structure and calls to action match the needs expressed by each important keyword theme.",
    focusAreas: [
      "Message match",
      "Clear value propositions",
      "Relevant trust and proof",
      "Simple conversion journeys",
    ],
    validation:
      "Treat this as a proposed next-stage audit; the keyword analysis did not comprehensively test current landing pages or establish conversion impact.",
    accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    numberClass: "text-emerald-700 dark:text-emerald-300",
  },
  {
    title: "Review budget allocation using first-party data",
    description:
      "Use account-level performance evidence to determine which keyword themes deserve greater investment, reduced bidding or exclusion.",
    focusAreas: [
      "Conversion and acquisition cost",
      "Customer or lead quality",
      "Revenue contribution",
      "Search-term efficiency",
    ],
    validation:
      "Do not reallocate budget, favour lower-overlap terms or label themes as underperformers using Semrush keyword data alone.",
    accent: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    numberClass: "text-rose-700 dark:text-rose-300",
  },
  {
    title: "Build a stronger measurement framework",
    description:
      "Connect keyword and campaign decisions with meaningful customer and business outcomes so future recommendations can be assessed using verified performance evidence.",
    focusAreas: [
      "Conversion tracking",
      "Customer-quality signals",
      "Attribution and assisted journeys",
      "Ongoing performance reviews",
    ],
    validation:
      "These are the evidence requirements for validating this portfolio audit, not a claim that Revolut currently lacks measurement systems.",
    accent: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
    numberClass: "text-teal-700 dark:text-teal-300",
  },
];

const summaryRows = [
  {
    recommendation: "Investigate relevant organic gaps",
    sequence: "Next",
    evidence: "Keyword relevance, intent, product fit and content feasibility",
    effort: "Medium",
    horizon: "Medium term",
  },
  {
    recommendation: "Preserve paid-search differentiation",
    sequence: "Now",
    evidence: "Search-term reports, conversion rate, CPA and customer quality",
    effort: "Medium",
    horizon: "Short term",
  },
  {
    recommendation: "Align landing pages with search intent",
    sequence: "Next",
    evidence: "Landing-page review, message match and conversion behaviour",
    effort: "Medium",
    horizon: "Short to medium term",
  },
  {
    recommendation: "Review budget allocation using first-party data",
    sequence: "Later",
    evidence: "Cost, conversion, revenue and incrementality evidence",
    effort: "Medium",
    horizon: "After measurement validation",
  },
  {
    recommendation: "Build a stronger measurement framework",
    sequence: "Now",
    evidence: "Tracking design, conversion definitions and customer-value signals",
    effort: "High",
    horizon: "Ongoing",
  },
];

const iconPaths = [
  "M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5m-5 0 8-8m0 0v5m0-5h-5",
  "M4 16 9 11l4 3 7-8m-5 0h5v5",
  "M4 7h16v12H4zM8 7V4h8v3m-8 5h8m-8 3h5",
  "M5 20V10m7 10V4m7 16v-7M3 20h18",
  "M5 7h14M7 3v4m10-4v4M5 11h14v10H5zM9 15h6m-6 3h4",
];

function RecommendationIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[index]} />
    </svg>
  );
}

function RecommendationCard({ item, index }: { item: Recommendation; index: number }) {
  return (
    <Card className="flex h-full flex-col p-6 hover:translate-y-0">
      <div className="flex items-center justify-between gap-4">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full ${item.accent}`}
        >
          <RecommendationIcon index={index} />
        </span>
        <span className={`text-sm font-semibold tabular-nums ${item.numberClass}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-7 text-foreground">
        {item.title}
      </h3>
      <p className="mt-3 text-left text-sm leading-7 text-muted">{item.description}</p>
      <div className="my-5 border-t border-border" />
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        Focus areas
      </h4>
      <ul className="mt-3 space-y-2.5">
        {item.focusAreas.map((area) => (
          <li
            key={area}
            className="flex items-start gap-2.5 text-left text-sm leading-6 text-foreground"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ring"
              aria-hidden="true"
            />
            {area}
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-2xl bg-background p-4 text-left text-xs leading-6 text-muted">
        {item.validation}
      </p>
    </Card>
  );
}

function SequenceBadge({ value }: { value: string }) {
  const styles: Record<string, string> = {
    Now: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    Next: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    Later: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${styles[value]}`}
    >
      {value}
    </span>
  );
}

function PrioritySummary() {
  const labels = [
    ["Suggested sequence", "sequence"],
    ["Evidence required", "evidence"],
    ["Relative effort", "effort"],
    ["Review horizon", "horizon"],
  ] as const;

  return (
    <div className="rounded-3xl border border-border bg-surface/70 p-5 shadow-soft sm:p-7">
      <h3 className="text-xl font-semibold text-foreground">
        Priority and validation summary
      </h3>
      <div className="mt-6 hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-y border-border bg-background">
              {[
                "Recommendation",
                "Suggested sequence",
                "Evidence required",
                "Relative effort",
                "Review horizon",
              ].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="px-3 py-3 font-semibold text-foreground"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {summaryRows.map((row) => (
              <tr
                key={row.recommendation}
                className="border-b border-border last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-3 py-4 align-top font-medium text-foreground"
                >
                  {row.recommendation}
                </th>
                <td className="px-3 py-4 align-top">
                  <SequenceBadge value={row.sequence} />
                </td>
                <td className="px-3 py-4 align-top leading-6 text-muted">
                  {row.evidence}
                </td>
                <td className="px-3 py-4 align-top text-muted">{row.effort}</td>
                <td className="px-3 py-4 align-top leading-6 text-muted">
                  {row.horizon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 space-y-4 md:hidden">
        {summaryRows.map((row) => (
          <article
            key={row.recommendation}
            className="rounded-2xl border border-border bg-background p-5"
          >
            <h4 className="font-semibold text-foreground">{row.recommendation}</h4>
            <dl className="mt-4 space-y-3">
              {labels.map(([label, key]) => (
                <div key={key} className="grid gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {label}
                  </dt>
                  <dd className="text-sm leading-6 text-foreground">
                    {key === "sequence" ? <SequenceBadge value={row[key]} /> : row[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-5 text-left text-xs leading-6 text-muted">
        Suggested sequence reflects the order in which evidence should be gathered and
        reviewed, not a confirmed implementation roadmap.
      </p>
    </div>
  );
}

export function RecommendationsSection() {
  return (
    <section
      aria-labelledby="recommendations-heading"
      className="space-y-10 hyphens-none [hyphens:none] [word-break:normal]"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div>
          <Heading as="h2" id="recommendations-heading" className="text-2xl sm:text-3xl">
            Strategic recommendations
          </Heading>
          <span
            className="mt-4 block h-0.5 w-12 rounded-full bg-ring/70"
            aria-hidden="true"
          />
          <p className="mt-5 text-left text-base leading-8 text-muted [letter-spacing:normal] [overflow-wrap:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
            These recommendations are based on the captured Semrush dataset and the
            observed search patterns identified in this audit. They are strategic
            hypotheses intended to guide further investigation and prioritisation. Each
            recommendation should be validated using first-party campaign, conversion,
            cost and customer data before implementation.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface/70 p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ring/10 text-ring">
            <RecommendationIcon index={0} />
          </span>
          <h3 className="mt-4 font-semibold text-foreground">Purpose</h3>
          <p className="mt-2 text-left text-sm leading-7 text-muted">
            To identify practical opportunities for improving search relevance, keyword
            coverage and acquisition decision-making while preserving a clear distinction
            between observed evidence and unverified commercial impact.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {recommendations.map((item, index) => (
          <RecommendationCard key={item.title} item={item} index={index} />
        ))}
      </div>

      <PrioritySummary />

      <div className="flex items-start gap-4 rounded-3xl border border-amber-300/50 bg-amber-100/50 p-6 text-left dark:border-amber-700/40 dark:bg-amber-950/20 sm:p-7">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4 3 20h18L12 4Zm0 6v4m0 3h.01" />
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-foreground">Important note</h3>
          <p className="mt-2 text-sm leading-7 text-muted">
            These recommendations are based on third-party data captured on 26 June 2026
            and reflect a single point in time. Search visibility, advertiser activity and
            competitor strategies may change. All actions should be validated using
            first-party campaign, conversion, cost, revenue and customer-quality data
            before implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
