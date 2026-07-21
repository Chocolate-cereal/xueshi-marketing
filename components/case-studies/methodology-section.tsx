import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type IconName =
  | "database"
  | "calendar"
  | "location"
  | "globe"
  | "search"
  | "paid"
  | "overlap"
  | "chart"
  | "results"
  | "filter"
  | "list"
  | "trend"
  | "tag"
  | "idea"
  | "warning";

const scopeCards: Array<{
  title: string;
  value: string | string[];
  icon: IconName;
}> = [
  { title: "Data source", value: "Semrush Competitive Intelligence", icon: "database" },
  { title: "Capture date", value: "26 June 2026", icon: "calendar" },
  { title: "Market", value: "United Kingdom — Google Search", icon: "location" },
  {
    title: "Domains analysed",
    value: ["revolut.com", "wise.com", "xe.com"],
    icon: "globe",
  },
];

const includedItems: Array<{ title: string; description: string; icon: IconName }> = [
  {
    title: "Organic keywords",
    description: "Observed ranking keywords and search volume.",
    icon: "search",
  },
  {
    title: "Paid keywords",
    description: "Observed paid-keyword visibility and search volume.",
    icon: "paid",
  },
  {
    title: "Keyword overlap",
    description: "Shared and unique keywords across Revolut, Wise and XE.",
    icon: "overlap",
  },
  {
    title: "Competitive Density",
    description: "Estimated advertiser competition measured from 0 to 1.",
    icon: "chart",
  },
  {
    title: "Search results",
    description: "Approximate number of organic search results reported for a keyword.",
    icon: "results",
  },
];

const analysisSteps: Array<{ title: string; description: string; icon: IconName }> = [
  {
    title: "Data extraction",
    description:
      "Extract comparable observed organic and paid keyword data for all three domains.",
    icon: "filter",
  },
  {
    title: "Comparison setup",
    description:
      "Align the available Semrush fields and terminology across the three captured domain views.",
    icon: "list",
  },
  {
    title: "Overlap analysis",
    description:
      "Calculate unique and shared keyword groups across Revolut, Wise and XE.",
    icon: "overlap",
  },
  {
    title: "Metric evaluation",
    description:
      "Compare search volume, Competitive Density and approximate search-result counts.",
    icon: "trend",
  },
  {
    title: "Theme grouping",
    description:
      "Group observed keywords into utility, business, comparison and money-transfer themes.",
    icon: "tag",
  },
  {
    title: "Interpretation",
    description:
      "Develop evidence-led observations, limitations and strategic recommendations.",
    icon: "idea",
  },
];

const iconPaths: Record<IconName, React.ReactNode> = {
  database: (
    <path d="M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Zm0 0v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  ),
  calendar: (
    <path d="M6 3v3m12-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 7h3m2 0h3m-8 4h3m2 0h3" />
  ),
  location: (
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  globe: (
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18a9 9 0 1 0 0-18Z" />
  ),
  search: <path d="m20 20-4.5-4.5M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  paid: <path d="M4 7h16v12H4zM8 7V4h8v3m-4 4v4m2-2h-4" />,
  overlap: <path d="M9.5 17a6 6 0 1 1 0-10M14.5 7a6 6 0 1 1 0 10" />,
  chart: <path d="M5 20V10m7 10V4m7 16v-7" />,
  results: <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />,
  filter: <path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" />,
  list: <path d="m4 6 2 2 3-3m2 2h9M4 13l2 2 3-3m2 2h9M4 20l2 2 3-3m2 2h9" />,
  trend: <path d="m4 17 5-5 4 3 7-8m-5 0h5v5" />,
  tag: <path d="m20 13-7 7L4 11V4h7l9 9ZM8 8h.01" />,
  idea: <path d="M9 18h6m-5 3h4m-2-18a7 7 0 0 0-4 12.75V17h8v-1.25A7 7 0 0 0 12 3Z" />,
  warning: <path d="M12 4 3 20h18L12 4Zm0 6v4m0 3h.01" />,
};

function MethodologyIcon({ name }: { name: IconName }) {
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
      {iconPaths[name]}
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-foreground">{children}</h3>;
}

export function MethodologySection() {
  return (
    <section
      aria-labelledby="methodology-heading"
      className="hyphens-none [hyphens:none] [word-break:normal]"
    >
      <Heading as="h2" id="methodology-heading" className="text-2xl sm:text-3xl">
        Methodology
      </Heading>
      <span
        className="mt-4 block h-0.5 w-12 rounded-full bg-ring/70"
        aria-hidden="true"
      />
      <p className="mt-5 max-w-5xl text-left text-base leading-8 text-muted [letter-spacing:normal] [overflow-wrap:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
        This analysis compares Revolut, Wise and XE in the UK search market using Semrush
        competitive intelligence. The goal is to understand how each brand attracts
        visibility across organic and paid search, where their observed keyword portfolios
        overlap and which themes shape that visibility.
      </p>

      <div className="mt-10">
        <SectionLabel>1. Data source &amp; scope</SectionLabel>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {scopeCards.map((item) => (
            <Card key={item.title} className="h-full p-5 hover:translate-y-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ring/10 text-ring">
                <MethodologyIcon name={item.icon} />
              </span>
              <h4 className="mt-5 text-sm font-semibold text-muted">{item.title}</h4>
              {Array.isArray(item.value) ? (
                <ul className="mt-2 space-y-1 text-left text-base font-medium text-foreground">
                  {item.value.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-left text-base font-medium leading-6 text-foreground">
                  {item.value}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionLabel>2. What was included</SectionLabel>
        <div className="mt-5 grid overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-soft sm:grid-cols-2 xl:grid-cols-5">
          {includedItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-border p-5 last:border-b-0 xl:border-b-0 xl:border-l xl:first:border-l-0"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ring/10 text-ring">
                <MethodologyIcon name={item.icon} />
              </span>
              <h4 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h4>
              <p className="mt-2 text-left text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionLabel>3. Analysis approach</SectionLabel>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {analysisSteps.map((step, index) => (
            <Card key={step.title} className="h-full p-5 hover:translate-y-0">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ring/10 text-ring">
                  <MethodologyIcon name={step.icon} />
                </span>
                <span className="text-sm font-semibold tabular-nums text-ring">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mt-5 text-base font-semibold text-foreground">
                {step.title}
              </h4>
              <p className="mt-2 text-left text-sm leading-6 text-muted">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-start gap-4 rounded-3xl border border-amber-300/50 bg-amber-100/50 p-6 text-left dark:border-amber-700/40 dark:bg-amber-950/20 sm:p-7">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300">
          <MethodologyIcon name="warning" />
        </span>
        <div>
          <h3 className="font-semibold text-foreground">Important note</h3>
          <p className="mt-2 text-sm leading-7 text-muted">
            This analysis uses third-party data captured at a single point in time. Search
            visibility, paid auctions and competitor strategies may change.
            Recommendations should be validated against first-party campaign, customer and
            conversion data before implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
