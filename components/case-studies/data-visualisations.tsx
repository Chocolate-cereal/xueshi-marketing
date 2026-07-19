import { Card } from "@/components/ui/card";

export function FigureCaption({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-sm leading-6 text-muted">{children}</p>;
}

const footprints = [
  { brand: "Wise", value: 248100, label: "Approximately 248.1K keywords" },
  { brand: "Revolut", value: 122100, label: "Approximately 122.1K keywords" },
  { brand: "XE", value: 114900, label: "Approximately 114.9K keywords" },
];

export function KeywordFootprintComparison() {
  const largest = Math.max(...footprints.map(({ value }) => value));

  return (
    <figure aria-labelledby="keyword-footprint-title">
      <h4 id="keyword-footprint-title" className="text-lg font-semibold text-foreground">
        Captured keyword footprint
      </h4>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {footprints.map(({ brand, label }) => (
          <Card key={brand} className="p-5 hover:translate-y-0">
            <p className="text-sm text-muted">{brand}</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{label}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 space-y-4 rounded-3xl border border-border bg-surface p-5 sm:p-6">
        {footprints.map(({ brand, value, label }) => (
          <div key={brand}>
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <span className="font-semibold text-foreground">{brand}</span>
              <span className="text-muted">{label}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full border border-border bg-background">
              <div
                className="h-full rounded-full bg-foreground"
                style={{ width: `${(value / largest) * 100}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
      <FigureCaption>
        Proportional comparison of third-party keyword estimates captured on 26 June 2026.
        Bar length is relative to Wise, the largest footprint in this comparison; the
        written values provide the complete information.
      </FigureCaption>
    </figure>
  );
}

type OverlapDiagramProps = {
  channel: "Paid" | "Organic";
  overlap: "18.3%" | "70.7%";
};

export function KeywordOverlapDiagram({ channel, overlap }: OverlapDiagramProps) {
  const id = channel.toLowerCase();

  return (
    <figure aria-labelledby={`${id}-overlap-heading`}>
      <h4 id={`${id}-overlap-heading`} className="text-lg font-semibold text-foreground">
        {channel} keyword overlap
      </h4>
      <div className="mt-5 rounded-3xl border border-border bg-surface p-3 sm:p-6">
        <svg
          viewBox="0 0 720 390"
          className="h-auto w-full"
          role="img"
          aria-labelledby={`${id}-overlap-title ${id}-overlap-description`}
        >
          <title id={`${id}-overlap-title`}>
            {channel} keyword groups for Revolut, Wise and XE
          </title>
          <desc id={`${id}-overlap-description`}>
            Three labelled, overlapping groups. The calculated overlap in the captured
            dataset is {overlap}. Exact region counts could not be confidently transcribed
            from the source image.
          </desc>
          <defs>
            <pattern
              id={`${id}-dots`}
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" className="fill-foreground/30" />
            </pattern>
            <pattern
              id={`${id}-lines`}
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="12"
                className="stroke-foreground/35"
                strokeWidth="3"
              />
            </pattern>
          </defs>
          <circle
            cx="270"
            cy="175"
            r="125"
            className="fill-surface stroke-foreground"
            strokeWidth="4"
          />
          <circle
            cx="450"
            cy="175"
            r="125"
            fill={`url(#${id}-dots)`}
            className="stroke-foreground"
            strokeWidth="4"
            strokeDasharray="12 8"
          />
          <circle
            cx="360"
            cy="265"
            r="110"
            fill={`url(#${id}-lines)`}
            className="stroke-foreground"
            strokeWidth="4"
            strokeDasharray="3 8"
          />
          <g className="fill-foreground text-[22px] font-semibold">
            <text x="190" y="120">
              Revolut
            </text>
            <text x="485" y="120">
              Wise
            </text>
            <text x="340" y="340">
              XE
            </text>
          </g>
          <g className="fill-foreground text-center">
            <text
              x="360"
              y="185"
              textAnchor="middle"
              className="text-[34px] font-semibold"
            >
              {overlap}
            </text>
            <text x="360" y="215" textAnchor="middle" className="text-[17px]">
              calculated overlap
            </text>
          </g>
        </svg>
      </div>
      <ResponsiveDataTable
        caption={`${channel} keyword overlap values available from the captured comparison`}
        columns={["Measure", "Captured value", "Scope"]}
        rows={[
          [
            `${channel} overlap`,
            overlap,
            "Calculation from the dataset captured on 26 June 2026",
          ],
          [
            "Individual diagram regions",
            "Not transcribed",
            "The source values were not readable with sufficient confidence; no values have been guessed.",
          ],
        ]}
      />
      <FigureCaption>
        The diagram is supplementary to the semantic table. Brands are differentiated by
        labels, borders and patterns as well as fill. The percentage is a calculation from
        one captured dataset, not a universal or permanent market fact.
      </FigureCaption>
    </figure>
  );
}

type ResponsiveDataTableProps = {
  caption: string;
  columns: string[];
  rows: string[][];
  notes?: string[];
};

export function ResponsiveDataTable({
  caption,
  columns,
  rows,
  notes = [],
}: ResponsiveDataTableProps) {
  return (
    <div className="mt-5 rounded-3xl border border-border bg-surface p-3 sm:p-5">
      <p className="px-3 pb-2 text-xs text-muted sm:hidden">
        Scroll horizontally to review every column.
      </p>
      <div
        className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        role="region"
        aria-label={`${caption} table`}
        tabIndex={0}
      >
        <table className="w-full border-collapse text-left text-sm">
          <caption className="px-3 pb-4 text-left text-base font-semibold text-foreground">
            {caption}
          </caption>
          <thead>
            <tr className="border-y border-border bg-background">
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-3 py-3 font-semibold text-foreground"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")} className="border-b border-border last:border-b-0">
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th
                      key={columns[index]}
                      scope="row"
                      className="px-3 py-4 align-top font-medium text-foreground"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td
                      key={columns[index]}
                      className="px-3 py-4 align-top tabular-nums text-muted"
                    >
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notes.map((note) => (
        <p key={note} className="mt-3 px-3 text-xs leading-5 text-muted">
          {note}
        </p>
      ))}
    </div>
  );
}

const channels = [
  {
    name: "Organic search",
    items: [
      [
        "Observed evidence",
        "Currency converters, exchange-rate calculations and currency-pair lookups.",
      ],
      ["Interpretation", "May support reach, awareness and topical authority."],
      [
        "Competitive pattern",
        "Greater captured overlap with Wise and XE around common utility topics.",
      ],
      ["Strengths", "Broad utility-led discovery and topical relevance."],
      [
        "Limitations",
        "Direct acquisition value is unknown without first-party conversion data.",
      ],
      [
        "Recommended validation",
        "Connect landing-page and query performance to first-party customer outcomes.",
      ],
    ],
  },
  {
    name: "Paid search",
    items: [
      [
        "Observed evidence",
        "Business accounts, provider comparisons and international money-transfer queries.",
      ],
      [
        "Interpretation",
        "May suit selected business, comparison and problem-aware searches.",
      ],
      [
        "Competitive pattern",
        "Less captured overlap with Wise and XE than the organic portfolio.",
      ],
      [
        "Strengths",
        "More differentiated observed themes and controllable query targeting.",
      ],
      [
        "Limitations",
        "No account-level CTR, CPA, ROAS, conversion or budget data was available.",
      ],
      [
        "Recommended validation",
        "Test search-term relevance, landing-page alignment and first-party conversion economics.",
      ],
    ],
  },
];

export function ChannelComparison() {
  return (
    <figure aria-labelledby="channel-comparison-title">
      <h4 id="channel-comparison-title" className="text-lg font-semibold text-foreground">
        Organic and paid search roles
      </h4>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {channels.map((channel) => (
          <Card key={channel.name} className="p-6 hover:translate-y-0">
            <h5 className="text-xl font-semibold text-foreground">{channel.name}</h5>
            <dl className="mt-5 space-y-4">
              {channel.items.map(([label, value]) => (
                <div
                  key={label}
                  className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        ))}
      </div>
      <FigureCaption>
        Evidence, interpretation and recommended validation are separated so strategic
        hypotheses are not presented as measured outcomes.
      </FigureCaption>
    </figure>
  );
}
