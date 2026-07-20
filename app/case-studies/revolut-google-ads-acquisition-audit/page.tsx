import { FindingsSection } from "@/components/case-studies/findings-section";
import { MethodologySection } from "@/components/case-studies/methodology-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const metadataItems = [
  ["Audit type", "Competitive keyword analysis"],
  ["Market", "United Kingdom"],
  ["Data captured", "26 June 2026"],
  ["Tool", "Semrush"],
  ["Status", "Strategic recommendations, not implemented results"],
];

const observations = [
  {
    title: "Organic visibility is utility-led",
    copy: "Revolut’s observed organic keyword footprint was strongly represented by high-volume currency conversion, exchange-rate and currency-pair searches. These terms may support reach, brand discovery and topical authority, although their acquisition value cannot be verified without first-party data.",
    accent: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    number: "text-blue-700 dark:text-blue-300",
    rule: "bg-blue-500/60",
  },
  {
    title: "Wise showed broader coverage",
    copy: "Wise displayed the largest total keyword footprint in the captured comparison: approximately 248.1K keywords, compared with approximately 122.1K for Revolut and 114.9K for XE. Keyword volume alone does not establish campaign quality or commercial performance.",
    accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    number: "text-emerald-700 dark:text-emerald-300",
    rule: "bg-emerald-500/60",
  },
  {
    title: "Organic competition was higher",
    copy: "Revolut’s observed organic portfolio showed substantially more competitor overlap than its paid portfolio. The 70.7% figure is a calculation from the captured overlap dataset and should not be treated as a permanent market measure.",
    accent: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    number: "text-violet-700 dark:text-violet-300",
    rule: "bg-violet-500/60",
  },
  {
    title: "Paid visibility was more commercially focused",
    copy: "The observed paid keyword portfolio concentrated more heavily on business accounts, provider comparisons and international money-transfer themes. Higher Competitive Density indicates stronger advertiser competition, not verified conversion intent.",
    accent: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    number: "text-rose-700 dark:text-rose-300",
    rule: "bg-rose-500/60",
  },
  {
    title: "Paid keywords appeared more differentiated",
    copy: "The paid keyword portfolio showed less overlap with Wise and XE than the organic portfolio. The calculated 18.3% overlap may indicate a more differentiated keyword set, but it does not demonstrate profitability or campaign effectiveness.",
    accent: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
    number: "text-teal-700 dark:text-teal-300",
    rule: "bg-teal-500/60",
  },
];

const readingNotes = [
  "The analysis uses third-party Semrush data captured on 26 June 2026.",
  "Competitive Density measures advertiser competition from 0 to 1; it is not a conversion rate.",
  "Results refers to the approximate number of organic search results, not conversions.",
  "Recommendations are strategic hypotheses and require validation with first-party data.",
];

export const metadata = {
  title: "Google Ads Acquisition Audit — Revolut | Xueshi Marketing",
  description:
    "Independent portfolio audit of Revolut’s UK organic and paid search acquisition footprint using third-party Semrush data captured on 26 June 2026.",
};

function CopyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[80rem]">
      <Heading as="h2" className="text-2xl sm:text-3xl">
        {title}
      </Heading>
      <div className="mt-5 space-y-5 text-base leading-8 text-muted [&>p]:hyphens-none [&>p]:text-left [&>p]:[hyphens:none] [&>p]:[letter-spacing:normal] [&>p]:[overflow-wrap:normal] [&>p]:[word-break:normal] [&>p]:[word-spacing:normal] sm:[&>p]:text-justify sm:[&>p]:[text-align-last:left] sm:[&>p]:[text-justify:inter-word]">
        {children}
      </div>
    </div>
  );
}

function ObservationIcon({ index }: { index: number }) {
  const paths = [
    <path key="utility" d="m5 12 4 4L19 6M5 6h5M5 18h4" />,
    <path key="coverage" d="M5 19V9m7 10V5m7 14v-7" />,
    <path key="organic" d="M9.5 15a5 5 0 1 1 0-6M14.5 9a5 5 0 1 1 0 6" />,
    <path key="paid" d="M4 8h16v11H4zM8 8V5h8v3m-4 4v3" />,
    <path key="different" d="M5 5v5a4 4 0 0 0 4 4h10m-5-5 5 5-5 5" />,
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

export default function RevolutGoogleAdsAuditPage() {
  return (
    <>
      <Section className="pb-12">
        <Container>
          <Button href="/case-studies" variant="ghost" className="mb-8 px-0">
            ← Back to case studies
          </Button>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <div>
              <Badge>Independent portfolio audit</Badge>
              <Heading className="mt-6">Google Ads Acquisition Audit — Revolut</Heading>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                A strategic review of Revolut’s UK search acquisition footprint across
                organic and paid search.
              </p>
            </div>
            <Card className="p-6">
              <dl className="space-y-4">
                {metadataItems.map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-border pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
          <div className="mt-8 rounded-3xl border border-border bg-surface p-6 text-left text-sm leading-7 text-muted hyphens-none [hyphens:none] [letter-spacing:normal] [overflow-wrap:normal] [word-break:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
            This independent portfolio project uses publicly available third-party data.
            It is not affiliated with, commissioned by or endorsed by Revolut, Wise or XE.
          </div>
        </Container>
      </Section>

      <Section className="pt-8">
        <Container className="max-w-[80rem] space-y-16">
          <CopyBlock title="Executive summary">
            <p>
              The analysis identified a substantial difference between Revolut’s organic
              and paid search footprints. Organic visibility was concentrated around
              high-volume utility searches such as currency conversion and exchange-rate
              queries, while the observed paid keyword portfolio focused more heavily on
              business, comparison and money-transfer terms.
            </p>
            <p>
              Wise showed broader overall keyword coverage in the captured dataset.
              Revolut nevertheless appeared to have a more differentiated paid keyword
              portfolio, with less overlap than its organic portfolio.
            </p>
            <p>
              The central recommendation is to preserve organic utility visibility as a
              brand-awareness and topical-authority asset while concentrating paid-search
              investment on relevant business, comparison and money-transfer queries.
              These recommendations should be tested against first-party campaign and
              conversion data before implementation.
            </p>
          </CopyBlock>

          <section aria-labelledby="key-observations-heading">
            <Heading
              as="h2"
              id="key-observations-heading"
              className="text-2xl sm:text-3xl"
            >
              Key observations
            </Heading>
            <p className="mt-5 max-w-5xl text-left text-base leading-8 text-muted hyphens-none [hyphens:none] [letter-spacing:normal] [overflow-wrap:normal] [word-break:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
              The captured data revealed distinct patterns in keyword coverage, competitor
              overlap and the different roles of Revolut’s organic and paid search
              visibility.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {observations.map((observation, index) => (
                <Card
                  key={observation.title}
                  className="flex h-full flex-col p-6 hover:translate-y-0"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${observation.accent}`}
                    >
                      <ObservationIcon index={index} />
                    </span>
                    <span
                      className={`text-sm font-semibold tabular-nums ${observation.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-7 text-foreground">
                    {observation.title}
                  </h3>
                  <span
                    className={`mt-4 h-0.5 w-10 rounded-full ${observation.rule}`}
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-left text-sm leading-7 text-muted hyphens-none [hyphens:none] [overflow-wrap:normal] [word-break:normal]">
                    {observation.copy}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-7 hover:translate-y-0 sm:p-9">
              <div className="grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ring/10 text-ring">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3a7 7 0 0 0-4 12.75V19h8v-3.25A7 7 0 0 0 12 3Z" />
                      <path d="M9 22h6M9.5 15h5" />
                    </svg>
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    Overall takeaway
                  </h3>
                  <p className="mt-4 text-left text-base leading-8 text-muted hyphens-none [hyphens:none] [letter-spacing:normal] [overflow-wrap:normal] [word-break:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
                    The dataset suggests that Revolut’s organic and paid visibility serve
                    different purposes. Organic visibility appears strongest around broad
                    currency utility searches, while paid visibility is more concentrated
                    around business and comparison themes. The most useful next step is
                    not simply to increase keyword volume, but to validate which search
                    themes produce commercially valuable behaviour using first-party
                    campaign and customer data.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    How to read this
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {readingNotes.map((note, index) => (
                      <li key={note} className="flex items-start gap-3 text-left">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ring/10 text-xs font-semibold text-ring">
                          {index + 1}
                        </span>
                        <span className="text-sm leading-6 text-muted">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          <MethodologySection />

          <FindingsSection />

          <CopyBlock title="Strategic recommendations">
            <h3 className="text-xl font-semibold text-foreground">
              1. Maintain useful organic visibility
            </h3>
            <p>
              Protect useful currency-conversion and exchange-rate content where it
              supports user needs, brand discovery and topical relevance, without assuming
              every high-volume utility keyword should automatically be prioritised.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              2. Validate paid-search intent using first-party data
            </h3>
            <p>
              Evaluate paid keywords using conversion rate, cost per acquisition, lead or
              customer quality, revenue contribution, search-term relevance and
              landing-page alignment. These metrics were unavailable for this audit.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              3. Review low-intent paid search terms
            </h3>
            <p>
              Review currency-converter and informational search terms in Google Ads
              search-term reports. They may become negative-keyword candidates only when
              first-party evidence shows poor relevance or inefficient acquisition.
            </p>
            <p>
              Example themes to review include currency converter, convert pounds,
              exchange rate, currency conversion, free converter, GBP to INR, USD to GBP
              and pound to euro.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              4. Organise campaigns by search intent
            </h3>
            <p>
              A possible framework is to separate brand and high-intent business terms,
              competitor and provider-comparison terms, and problem-aware
              international-transfer terms. Separate campaign or ad-group structures can
              support differentiated messaging, landing pages, budgets and bidding
              decisions.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              5. Investigate competitor keyword gaps
            </h3>
            <p>
              Review relevant keywords where Wise appeared but Revolut did not, filtering
              by business relevance, search intent, location, product availability,
              estimated cost, landing-page suitability, regulatory considerations and
              brand considerations.
            </p>
          </CopyBlock>

          <Card className="p-8 sm:p-10">
            <Heading as="h2">Conclusion</Heading>
            <p className="mt-5 text-left text-base leading-8 text-muted hyphens-none [hyphens:none] [letter-spacing:normal] [overflow-wrap:normal] [word-break:normal] [word-spacing:normal] sm:text-justify sm:[text-align-last:left] sm:[text-justify:inter-word]">
              The dataset suggests that Revolut’s organic and paid search visibility serve
              different purposes. Organic visibility appears strongest around broad
              currency utility searches, while paid activity is more concentrated around
              business and comparison themes. The recommended next step is not simply to
              expand keyword volume, but to validate which search themes produce
              commercially valuable behaviour using first-party campaign and customer
              data.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
