import { KeywordOverlapDiagram } from "@/components/case-studies/data-visualisations";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type AnalysisItem = { label: string; copy: string };

const footprints = [
  { brand: "Wise", value: 248100, display: "248.1K", color: "#acd4f6" },
  { brand: "Revolut", value: 122100, display: "122.1K", color: "#f4b8c2" },
  { brand: "XE", value: 114900, display: "114.9K", color: "#b9e5d2" },
];

const organicAnalysis: AnalysisItem[] = [
  {
    label: "Evidence",
    copy: "The captured Semrush snapshot showed that Revolut’s organic visibility was strongly represented by currency-conversion, exchange-rate and currency-pair searches.",
  },
  {
    label: "Interpretation",
    copy: "These themes may support broad reach, brand discovery, recurring user utility and topical authority.",
  },
  {
    label: "Limitation",
    copy: "The audit cannot determine whether these searches generated accounts, revenue or other commercial outcomes because first-party conversion data was unavailable.",
  },
];

const paidAnalysis: AnalysisItem[] = [
  {
    label: "Evidence",
    copy: "The observed paid keyword examples focused more heavily on business, provider comparison and international money-transfer themes than the organic examples.",
  },
  {
    label: "Interpretation",
    copy: "These themes may be more suitable for targeted acquisition messaging and dedicated landing-page journeys.",
  },
  {
    label: "Limitation",
    copy: "No verified CTR, conversion rate, CPA, ROAS, revenue or customer-quality data was available, so the commercial performance of these themes cannot be established.",
  },
];

const organicThemes = [
  {
    title: "Currency conversion",
    description:
      "Queries relating to converting money between currencies and using currency-conversion tools.",
  },
  {
    title: "Exchange rates",
    description: "Searches for current or calculated exchange rates between currencies.",
  },
  {
    title: "Currency-pair lookups",
    description:
      "Queries focused on specific currency pairs, such as GBP, EUR, USD and INR combinations.",
  },
  {
    title: "Informational utility",
    description:
      "Practical searches where users are seeking a calculation, reference value or currency information rather than clearly expressing purchase intent.",
  },
];

const paidThemes = [
  {
    title: "Business accounts",
    description:
      "Queries relating to business banking, business accounts and financial services for companies.",
  },
  {
    title: "Provider comparisons",
    description:
      "Searches comparing Revolut with other financial-service or money-transfer providers.",
  },
  {
    title: "International transfers",
    description:
      "Queries focused on sending money internationally, transfer services and cross-border payments.",
  },
  {
    title: "Problem-aware searches",
    description:
      "Searches from users exploring costs, transfer options or solutions to an international payment need.",
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
  const scaleMaximum = 300000;
  const plotTop = 24;
  const plotBottom = 240;
  const plotHeight = plotBottom - plotTop;
  const ticks = [0, 50000, 100000, 150000, 200000, 250000, 300000];

  return (
    <div className="rounded-3xl border border-border bg-surface/70 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        Total observed keywords — captured dataset
      </p>
      <svg
        viewBox="0 0 420 290"
        className="mt-4 h-72 w-full"
        role="img"
        aria-labelledby="keyword-footprint-chart-title keyword-footprint-chart-description"
      >
        <title id="keyword-footprint-chart-title">
          Total observed keyword comparison
        </title>
        <desc id="keyword-footprint-chart-description">
          Vertical bar chart showing Wise with 248,100 keywords, Revolut with 122,100
          keywords and XE with 114,900 keywords. The vertical scale runs from zero to
          300,000 keywords.
        </desc>
        {ticks.map((tick) => {
          const y = plotBottom - (tick / scaleMaximum) * plotHeight;
          return (
            <g key={tick}>
              <line
                x1="48"
                x2="404"
                y1={y}
                y2={y}
                className="stroke-border"
                strokeWidth="1"
              />
              <text
                x="40"
                y={y + 4}
                textAnchor="end"
                className="fill-muted text-[10px] tabular-nums"
              >
                {tick === 0 ? "0" : `${tick / 1000}K`}
              </text>
            </g>
          );
        })}
        {footprints.map((item, index) => {
          const height = (item.value / scaleMaximum) * plotHeight;
          const x = 82 + index * 112;
          const center = x + 64 / 2;
          return (
            <g key={item.brand}>
              <rect
                x={x}
                y={plotBottom - height}
                width="64"
                height={height}
                rx="7"
                fill={item.color}
                className="stroke-foreground/20"
                strokeWidth="1"
              />
              <text
                x={center}
                y={plotBottom - height - 9}
                textAnchor="middle"
                className="fill-foreground text-[11px] font-semibold tabular-nums"
              >
                {item.display}
              </text>
              <text
                x={center}
                y="263"
                textAnchor="middle"
                className="fill-foreground text-[12px] font-semibold"
              >
                {item.brand}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-2 text-left text-xs leading-5 text-muted">
        Approximate keyword totals reported in the captured Semrush comparison.
      </p>
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

function ThemeGrid({
  themes,
  accent,
}: {
  themes: Array<{ title: string; description: string }>;
  accent: string;
}) {
  const iconPaths = [
    "M5 12h14M12 5v14",
    "M4 8h16M6 12h12M8 16h8",
    "M7 7h4v4H7zM13 13h4v4h-4zM11 9l2 2m-2 4 2-2",
    "M12 3a7 7 0 0 0-4 12.75V18h8v-2.25A7 7 0 0 0 12 3Zm-2 18h4",
  ];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {themes.map((theme, index) => (
          <Card key={theme.title} className="h-full p-5 hover:translate-y-0">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent}`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={iconPaths[index]} />
              </svg>
            </span>
            <h4 className="mt-4 text-base font-semibold text-foreground">
              {theme.title}
            </h4>
            <p className="mt-2 text-left text-sm leading-6 text-muted">
              {theme.description}
            </p>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-left text-xs leading-6 text-muted">
        Observed thematic grouping from a third-party Semrush snapshot; it is not a
        measured campaign outcome or proof of search intent or profitability.
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
        <ThemeGrid
          themes={organicThemes}
          accent="bg-amber-500/10 text-amber-700 dark:text-amber-300"
        />
        <AnalysisRows items={organicAnalysis} />
      </section>

      <section className="space-y-7">
        <FindingHeader
          number="05"
          title="Paid keyword themes"
          lead="The observed paid keyword portfolio was more concentrated around business, provider comparison and international money-transfer searches."
          numberClass="text-rose-600 dark:text-rose-300"
        />
        <ThemeGrid
          themes={paidThemes}
          accent="bg-rose-500/10 text-rose-700 dark:text-rose-300"
        />
        <AnalysisRows items={paidAnalysis} />
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
