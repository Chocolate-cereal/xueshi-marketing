import {
  KeywordOverlapDiagram,
  ResponsiveDataTable,
} from "@/components/case-studies/data-visualisations";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type AnalysisItem = { label: string; copy: string };

const footprints = [
  { brand: "Wise", value: 248100, label: "Approximately 248.1K keywords" },
  { brand: "Revolut", value: 122100, label: "Approximately 122.1K keywords" },
  { brand: "XE", value: 114900, label: "Approximately 114.9K keywords" },
];

const organicAnalysis: AnalysisItem[] = [
  {
    label: "Observed theme",
    copy: "Currency conversion, exchange-rate calculations, currency-pair lookups and related informational utility searches.",
  },
  {
    label: "Possible strategic role",
    copy: "These searches may support reach, brand discovery, user utility and topical authority.",
  },
  {
    label: "Limitation",
    copy: "Their direct acquisition value cannot be determined without first-party conversion and customer data.",
  },
];

const paidAnalysis: AnalysisItem[] = [
  {
    label: "Observed theme",
    copy: "Business accounts, provider comparisons, international transfers and problem-aware searches.",
  },
  {
    label: "Possible strategic role",
    copy: "These themes may be more suitable for targeted acquisition messaging and dedicated landing-page journeys.",
  },
  {
    label: "Limitation",
    copy: "The audit cannot determine which terms produced profitable customers because CTR, conversion rate, CPA, ROAS and revenue data were unavailable.",
  },
];

const channelRoles = [
  {
    title: "Organic search",
    items: [
      "Utility-led and informational keyword themes",
      "Broader awareness and user-utility role",
      "Higher competitor overlap in the captured dataset",
      "Potential support for brand discovery and topical authority",
      "Requires first-party conversion validation",
    ],
    accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
  {
    title: "Paid search",
    items: [
      "Business, comparison and money-transfer themes",
      "More differentiated observed keyword portfolio",
      "Potential support for selective acquisition",
      "Requires cost, conversion and customer-quality validation",
      "No verified profitability conclusions are available",
    ],
    accent: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
];

function FindingHeader({
  number,
  title,
  lead,
  numberClass,
}: {
  number: string;
  title: string;
  lead: string;
  numberClass: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[4.5rem_1fr] sm:items-start">
      <span className={`text-5xl font-semibold leading-none tabular-nums ${numberClass}`}>
        {number}
      </span>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-3 max-w-5xl text-left text-base leading-7 text-muted">{lead}</p>
      </div>
    </div>
  );
}

function AnalysisRows({ items }: { items: AnalysisItem[] }) {
  return (
    <div className="rounded-3xl border border-border bg-surface/70 p-5 sm:p-6">
      <dl className="space-y-5">
        {items.map((item, index) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ring/10 text-xs font-semibold text-ring">
              {index + 1}
            </span>
            <div>
              <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
              <dd className="mt-1 text-left text-sm leading-6 text-muted">{item.copy}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

function MetricHighlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-ring/30 bg-ring/5 p-6">
      <p className="text-sm font-semibold text-muted">{label}</p>
      <p className="mt-2 text-4xl font-semibold tabular-nums text-foreground">{value}</p>
      <p className="mt-2 text-xs leading-5 text-muted">
        Calculated from the captured overlap dataset
      </p>
    </div>
  );
}

function FootprintVisual() {
  const largest = footprints[0].value;

  return (
    <div className="rounded-3xl border border-border bg-surface/70 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        Total observed keywords — captured dataset
      </p>
      <div className="mt-6 space-y-5">
        {footprints.map((item) => (
          <div key={item.brand}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-foreground">{item.brand}</span>
              <span className="text-sm tabular-nums text-muted">{item.label}</span>
            </div>
            <div className="mt-2 h-3 rounded-full border border-border bg-background">
              <div
                className="h-full rounded-full bg-violet-500/60"
                style={{ width: `${(item.value / largest) * 100}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverlapFinding({
  channel,
  value,
  lead,
  analysis,
  number,
  numberClass,
}: {
  channel: "Paid" | "Organic";
  value: "18.3%" | "70.7%";
  lead: string;
  analysis: AnalysisItem[];
  number: string;
  numberClass: string;
}) {
  return (
    <section className="space-y-7">
      <FindingHeader
        number={number}
        title={`${channel} keyword overlap`}
        lead={lead}
        numberClass={numberClass}
      />
      <div className="grid gap-7 xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] xl:items-start">
        <div className="min-w-0">
          <KeywordOverlapDiagram channel={channel} overlap={value} />
        </div>
        <div className="space-y-5">
          <MetricHighlight
            label={`Calculated ${channel.toLowerCase()} overlap`}
            value={value}
          />
          <AnalysisRows items={analysis} />
        </div>
      </div>
    </section>
  );
}

function ThemeAnalysisPanel({ items, note }: { items: AnalysisItem[]; note: string }) {
  return (
    <div className="space-y-4">
      <AnalysisRows items={items} />
      <p className="rounded-2xl border border-border bg-background p-4 text-left text-xs leading-6 text-muted">
        {note}
      </p>
    </div>
  );
}

export function FindingsSection() {
  return (
    <section
      aria-labelledby="findings-heading"
      className="space-y-16 hyphens-none [hyphens:none] [word-break:normal]"
    >
      <div>
        <Heading as="h2" id="findings-heading" className="text-2xl sm:text-3xl">
          Findings
        </Heading>
        <p className="mt-5 max-w-5xl text-left text-base leading-8 text-muted [letter-spacing:normal] [overflow-wrap:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
          The captured dataset revealed distinct patterns in keyword coverage, competitor
          overlap and the different roles of Revolut’s organic and paid search visibility.
          The findings below separate observed evidence from interpretation and
          recommended next steps.
        </p>
      </div>

      <section className="space-y-7">
        <FindingHeader
          number="01"
          title="Keyword coverage and competitive reach"
          lead="Wise showed the broadest total keyword footprint in the captured dataset, although keyword volume alone does not establish campaign quality or commercial performance."
          numberClass="text-violet-600 dark:text-violet-300"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <FootprintVisual />
          <AnalysisRows
            items={[
              {
                label: "What the data shows",
                copy: "Wise displayed approximately 248.1K keywords, compared with approximately 122.1K for Revolut and 114.9K for XE in the captured UK dataset.",
              },
              {
                label: "Interpretation",
                copy: "Revolut had less total observed keyword coverage than Wise. This describes search visibility breadth, not campaign quality, conversions or profitability.",
              },
              {
                label: "Implication",
                copy: "Review relevant competitor keyword gaps using business relevance, user intent, product fit and landing-page suitability rather than pursuing keyword quantity alone.",
              },
            ]}
          />
        </div>
      </section>

      <OverlapFinding
        number="02"
        channel="Paid"
        value="18.3%"
        lead="Revolut’s observed paid keyword portfolio showed less overlap with Wise and XE than its organic portfolio."
        numberClass="text-blue-600 dark:text-blue-300"
        analysis={[
          {
            label: "What the data shows",
            copy: "The captured dataset produced a calculated paid overlap of 18.3% for Revolut against Wise and XE.",
          },
          {
            label: "Interpretation",
            copy: "The lower observed overlap may indicate a more differentiated paid keyword portfolio, but it does not demonstrate campaign effectiveness, conversion quality or profitability.",
          },
          {
            label: "Implication",
            copy: "Validate whether the differentiated keywords produce valuable customer behaviour using first-party conversion, cost and revenue data.",
          },
        ]}
      />

      <OverlapFinding
        number="03"
        channel="Organic"
        value="70.7%"
        lead="Revolut’s organic keyword portfolio showed substantially more competitor overlap than its paid portfolio."
        numberClass="text-emerald-600 dark:text-emerald-300"
        analysis={[
          {
            label: "What the data shows",
            copy: "The captured dataset produced a calculated organic overlap of 70.7% for Revolut against Wise and XE.",
          },
          {
            label: "Interpretation",
            copy: "Organic competition appeared more concentrated around shared currency-conversion, exchange-rate and informational utility searches.",
          },
          {
            label: "Implication",
            copy: "Strengthen content usefulness, topical depth and differentiation within strategically relevant utility themes rather than attempting to avoid all competitor overlap.",
          },
        ]}
      />

      <div className="rounded-3xl border border-border bg-surface/70 p-5 shadow-soft sm:p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              label: "Paid overlap",
              value: 18.3,
              display: "18.3%",
              color: "bg-blue-500/60",
            },
            {
              label: "Organic overlap",
              value: 70.7,
              display: "70.7%",
              color: "bg-emerald-500/60",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                <span className="font-semibold tabular-nums text-foreground">
                  {item.display}
                </span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-background">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.value}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-left text-sm leading-6 text-muted">
          In the captured dataset, Revolut’s organic portfolio overlapped more heavily
          with the competitor set than its paid portfolio.
        </p>
      </div>

      <section className="space-y-7">
        <FindingHeader
          number="04"
          title="Organic keyword themes"
          lead="Revolut’s observed organic visibility was concentrated around utility-led currency searches."
          numberClass="text-amber-600 dark:text-amber-300"
        />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] xl:items-start">
          <ResponsiveDataTable
            caption="Organic keyword examples in the captured Semrush source"
            columns={[
              "Keyword",
              "Position",
              "Search volume",
              "Competitive Density",
              "Results",
            ]}
            rows={[
              [
                "Source rows not transcribed",
                "—",
                "—",
                "—",
                "The original screenshot values could not be read with sufficient confidence, so no values have been guessed.",
              ],
            ]}
            notes={[
              "Competitive Density is a Semrush estimate from 0 to 1 indicating how strongly advertisers compete for a keyword. It is not a conversion rate.",
              "Results represents the approximate number of organic search results reported for the keyword. It does not represent conversions.",
            ]}
          />
          <ThemeAnalysisPanel
            items={organicAnalysis}
            note="Competitive Density is a Semrush estimate from 0 to 1 indicating advertiser competition. It is not a conversion rate."
          />
        </div>
      </section>

      <section className="space-y-7">
        <FindingHeader
          number="05"
          title="Paid keyword themes"
          lead="The observed paid keyword portfolio was more concentrated around business, provider comparison and international money-transfer searches."
          numberClass="text-rose-600 dark:text-rose-300"
        />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] xl:items-start">
          <ResponsiveDataTable
            caption="Paid keyword examples in the captured Semrush source"
            columns={[
              "Keyword",
              "Search volume",
              "Competitive Density",
              "Estimated CPC",
              "Observed position or traffic",
            ]}
            rows={[
              [
                "Source rows not transcribed",
                "—",
                "—",
                "—",
                "The original screenshot values could not be read with sufficient confidence, so no values have been guessed.",
              ],
            ]}
            notes={[
              "Competitive Density is a Semrush estimate from 0 to 1 indicating how strongly advertisers compete for a keyword. It is not a conversion rate.",
              "No figure in this table represents verified conversions or account-level performance.",
            ]}
          />
          <ThemeAnalysisPanel
            items={paidAnalysis}
            note="Higher Competitive Density means more advertisers were competing for a keyword. It does not directly measure conversion intent or campaign performance."
          />
        </div>
      </section>

      <section className="space-y-7">
        <FindingHeader
          number="06"
          title="Organic versus paid: different strategic roles"
          lead="The two observed keyword portfolios suggest different roles, but first-party evidence is required before changing acquisition strategy."
          numberClass="text-teal-600 dark:text-teal-300"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {channelRoles.map((channel) => (
            <Card key={channel.title} className="h-full p-6 hover:translate-y-0">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${channel.accent}`}
              >
                {channel.title}
              </span>
              <ul className="mt-5 space-y-3">
                {channel.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-left text-sm leading-6 text-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ring"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
          <Card className="h-full border-ring/30 bg-ring/5 p-6 hover:translate-y-0">
            <h4 className="text-base font-semibold text-foreground">Key takeaway</h4>
            <p className="mt-4 text-left text-sm leading-7 text-muted">
              The captured dataset suggests that Revolut’s organic and paid visibility
              serve different strategic purposes. Organic visibility appears strongest
              around broad currency utility searches, while paid visibility is more
              concentrated around business and comparison themes. First-party campaign and
              customer data is required before changing bids, budgets or campaign
              structure.
            </p>
          </Card>
        </div>
      </section>

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
            This analysis uses third-party data captured on 26 June 2026 and reflects a
            single point in time. Search visibility, paid auctions and competitor
            strategies may change. Recommendations should be validated against first-party
            campaign, customer and conversion data before implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
