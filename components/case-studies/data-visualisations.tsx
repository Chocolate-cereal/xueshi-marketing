"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export function FigureCaption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-left text-sm leading-6 text-muted hyphens-none [hyphens:none] [letter-spacing:normal] [overflow-wrap:normal] [word-break:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
      {children}
    </p>
  );
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

type SegmentName =
  | "Revolut only"
  | "Wise only"
  | "XE only"
  | "Revolut + Wise"
  | "Revolut + XE"
  | "Wise + XE"
  | "Shared by all three";

const overlapCompanies = [
  {
    name: "Revolut",
    domain: "revolut.com",
    value: "111,662",
    color: "#f4b8c2",
  },
  { name: "Wise", domain: "wise.com", value: "232,819", color: "#acd4f6" },
  { name: "XE", domain: "xe.com", value: "109,767", color: "#b9e5d2" },
];

const focusRegions: Array<{ name: SegmentName; x: number; y: number; radius: number }> = [
  { name: "Revolut only", x: 225, y: 145, radius: 62 },
  { name: "Wise only", x: 495, y: 145, radius: 62 },
  { name: "XE only", x: 360, y: 320, radius: 45 },
  { name: "Revolut + Wise", x: 360, y: 112, radius: 42 },
  { name: "Revolut + XE", x: 285, y: 245, radius: 42 },
  { name: "Wise + XE", x: 435, y: 245, radius: 42 },
  { name: "Shared by all three", x: 360, y: 205, radius: 38 },
];

export function KeywordOverlapDiagram({ channel, overlap }: OverlapDiagramProps) {
  const id = channel.toLowerCase();
  const diagramRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    segment: SegmentName;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    function closeOnOutsideTap(event: PointerEvent) {
      if (!diagramRef.current?.contains(event.target as Node)) setTooltip(null);
    }

    document.addEventListener("pointerdown", closeOnOutsideTap);
    return () => document.removeEventListener("pointerdown", closeOnOutsideTap);
  }, []);

  function segmentAtPoint(event: React.PointerEvent<SVGSVGElement>): SegmentName | null {
    const matrix = event.currentTarget.getScreenCTM();
    if (!matrix) return null;

    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(
      matrix.inverse(),
    );
    const inside = (cx: number, cy: number, radius: number) =>
      Math.hypot(point.x - cx, point.y - cy) <= radius;
    const revolut = inside(270, 175, 125);
    const wise = inside(450, 175, 125);
    const xe = inside(360, 265, 110);

    if (revolut && wise && xe) return "Shared by all three";
    if (revolut && wise) return "Revolut + Wise";
    if (revolut && xe) return "Revolut + XE";
    if (wise && xe) return "Wise + XE";
    if (revolut) return "Revolut only";
    if (wise) return "Wise only";
    if (xe) return "XE only";
    return null;
  }

  function placeTooltip(segment: SegmentName, x: number, y: number) {
    const bounds = diagramRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const width = Math.min(280, Math.max(0, bounds.width - 16));
    const height = 210;
    const offset = 14;
    const nextX = x + offset + width > bounds.width ? x - width - offset : x + offset;
    const nextY = y + offset + height > bounds.height ? y - height - offset : y + offset;

    setTooltip({
      segment,
      x: Math.max(8, Math.min(nextX, bounds.width - width - 8)),
      y: Math.max(8, Math.min(nextY, bounds.height - height - 8)),
    });
  }

  function updateFromPointer(event: React.PointerEvent<SVGSVGElement>) {
    const bounds = diagramRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const segment = segmentAtPoint(event);
    if (!segment) {
      setTooltip(null);
      return;
    }

    placeTooltip(segment, event.clientX - bounds.left, event.clientY - bounds.top);
  }

  function companiesFor(segment: SegmentName) {
    if (segment === "Revolut only") return overlapCompanies.slice(0, 1);
    if (segment === "Wise only") return overlapCompanies.slice(1, 2);
    if (segment === "XE only") return overlapCompanies.slice(2, 3);
    if (segment === "Revolut + Wise") return overlapCompanies.slice(0, 2);
    if (segment === "Revolut + XE") return [overlapCompanies[0], overlapCompanies[2]];
    if (segment === "Wise + XE") return overlapCompanies.slice(1, 3);
    return overlapCompanies;
  }

  function valueFor(segment: SegmentName) {
    if (segment === "Revolut only") return overlapCompanies[0].value;
    if (segment === "Wise only") return overlapCompanies[1].value;
    if (segment === "XE only") return overlapCompanies[2].value;
    if (segment === "Shared by all three") return "87,916";
    return overlap;
  }

  const activeCompanies = tooltip ? companiesFor(tooltip.segment) : [];
  const tooltipTitle = tooltip?.segment.endsWith("only") ? "All keywords" : "Shared";

  return (
    <figure aria-labelledby={`${id}-overlap-heading`}>
      <h4 id={`${id}-overlap-heading`} className="text-lg font-semibold text-foreground">
        {channel} keyword overlap
      </h4>
      <div className="mt-5 rounded-3xl border border-border bg-surface p-3 sm:p-6">
        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <div ref={diagramRef} className="relative">
            <svg
              viewBox="0 0 720 390"
              className="h-auto w-full cursor-pointer"
              role="img"
              aria-labelledby={`${id}-overlap-title ${id}-overlap-description`}
              onPointerMove={updateFromPointer}
              onPointerDown={updateFromPointer}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") setTooltip(null);
              }}
              style={{ touchAction: "manipulation" }}
            >
              <title id={`${id}-overlap-title`}>
                {channel} keyword groups for Revolut, Wise and XE
              </title>
              <desc id={`${id}-overlap-description`}>
                Three overlapping keyword groups. Pointer movement reveals the region
                under the cursor. Keyboard users can focus each labelled region to read
                the same information. The captured overlap rate is {overlap}.
              </desc>
              <circle
                cx="270"
                cy="175"
                r="125"
                fill="#f4b8c2"
                fillOpacity="0.66"
                stroke="#d99aa6"
                strokeWidth="1.5"
                pointerEvents="none"
              />
              <circle
                cx="450"
                cy="175"
                r="125"
                fill="#acd4f6"
                fillOpacity="0.66"
                stroke="#82b8e5"
                strokeWidth="1.5"
                pointerEvents="none"
              />
              <circle
                cx="360"
                cy="265"
                r="110"
                fill="#b9e5d2"
                fillOpacity="0.66"
                stroke="#8bcbb1"
                strokeWidth="1.5"
                pointerEvents="none"
              />
              {focusRegions.map((region) => (
                <circle
                  key={region.name}
                  cx={region.x}
                  cy={region.y}
                  r={region.radius}
                  fill="transparent"
                  stroke="transparent"
                  className="outline-none"
                  role="button"
                  tabIndex={0}
                  aria-label={`${region.name}. ${valueFor(region.name)}. ${companiesFor(
                    region.name,
                  )
                    .map((company) => `${company.domain}: ${company.value} keywords`)
                    .join(", ")}.`}
                  onFocus={() => {
                    const bounds = diagramRef.current?.getBoundingClientRect();
                    if (!bounds) return;
                    placeTooltip(
                      region.name,
                      (region.x / 720) * bounds.width,
                      (region.y / 390) * bounds.height,
                    );
                  }}
                  onBlur={() => setTooltip(null)}
                  onClick={(event) => event.currentTarget.focus()}
                />
              ))}
            </svg>
            {tooltip ? (
              <div
                className="pointer-events-none absolute z-20 w-[min(17.5rem,calc(100%-1rem))] rounded-xl border border-border bg-background p-4 text-sm shadow-lg"
                style={{ left: tooltip.x, top: tooltip.y }}
                aria-hidden="true"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium text-foreground">{tooltipTitle}</span>
                  <strong className="tabular-nums text-foreground">
                    {valueFor(tooltip.segment)}
                  </strong>
                </div>
                <div className="my-3 border-t border-border" />
                <ul className="space-y-2.5">
                  {activeCompanies.map((company) => (
                    <li key={company.domain} className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: company.color }}
                      />
                      <span className="min-w-0 flex-1 text-foreground">
                        {company.domain}
                      </span>
                      <span className="shrink-0 tabular-nums text-muted">
                        {company.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div
            className="rounded-2xl border border-border bg-background p-4"
            aria-label="Company legend"
          >
            <ul className="space-y-4">
              {overlapCompanies.map((company) => (
                <li key={company.name} className="flex items-center gap-3">
                  <span
                    className="h-4 w-4 shrink-0 rounded-full border border-border"
                    style={{ backgroundColor: company.color }}
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      {company.name}
                    </span>
                    <span className="block text-xs text-muted">
                      {company.value} keywords
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span className="sr-only">
        The {channel.toLowerCase()} overlap rate calculated from the captured dataset is{" "}
        {overlap}. Region details are available from the focusable SVG regions.
      </span>
      <FigureCaption>
        Move the pointer across the coloured regions to inspect them. Keyboard users can
        focus each SVG region, and touch users can tap a region. The percentage is a
        calculation from one captured dataset, not a universal or permanent market fact.
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
