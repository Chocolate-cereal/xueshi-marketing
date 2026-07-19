import {
  ChannelComparison,
  KeywordFootprintComparison,
  KeywordOverlapDiagram,
  ResponsiveDataTable,
} from "@/components/case-studies/data-visualisations";
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
  "Wise showed approximately 248.1K keywords in the captured comparison, compared with approximately 122.1K for Revolut and 114.9K for XE.",
  "Revolut’s observed paid keyword portfolio had less competitor overlap than its organic portfolio.",
  "Organic visibility was concentrated around high-volume currency utility searches.",
  "Paid visibility was more concentrated around business and comparison terms.",
  "The figures are third-party estimates captured on one date and are not account-level performance data.",
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

          <Card className="p-8 sm:p-10">
            <Badge>Key observations</Badge>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {observations.map((observation, index) => (
                <div
                  key={observation}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <span className="text-sm font-semibold text-muted">0{index + 1}</span>
                  <p className="mt-3 text-sm leading-7 text-foreground">{observation}</p>
                </div>
              ))}
            </div>
          </Card>

          <CopyBlock title="Methodology">
            <h3 className="text-xl font-semibold text-foreground">
              Data source and scope
            </h3>
            <p>
              The analysis used Semrush competitive intelligence to compare Revolut, Wise
              and XE in the UK search market. The dataset included observed organic
              keyword rankings, paid keyword visibility, search volume, competitive
              density and keyword overlap.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Analysis approach</h3>
            <p>
              The project compared total keyword footprint, unique and shared keywords,
              organic versus paid keyword themes, search volume, Competitive Density,
              estimated search visibility and potential gaps between utility, comparison
              and business-focused searches.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Limitations</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Only publicly available and limited-access Semrush data was used.</li>
              <li>No Google Ads account or Google Analytics data was available.</li>
              <li>
                No verified CTR, conversion rate, CPA, ROAS or revenue data was available.
              </li>
              <li>
                Semrush figures are estimates and may not represent the complete active
                keyword portfolio.
              </li>
              <li>The snapshot was captured on one date and rankings may change.</li>
              <li>
                Recommendations are strategic hypotheses requiring validation against
                first-party data.
              </li>
            </ul>
          </CopyBlock>

          <div className="space-y-12">
            <CopyBlock title="Findings">
              <h3 className="text-xl font-semibold text-foreground">
                1. Keyword coverage and competitive reach
              </h3>
              <p>
                Wise showed the broadest total keyword footprint in the captured dataset.
                Revolut’s smaller footprint suggests lower overall search reach, although
                keyword quantity alone does not establish campaign quality or business
                performance.
              </p>
              <KeywordFootprintComparison />
              <h3 className="text-xl font-semibold text-foreground">
                2. Paid keyword overlap
              </h3>
              <p>
                Revolut’s observed paid keyword portfolio had relatively limited overlap
                with Wise and XE. Lower overlap may indicate a more differentiated
                paid-search portfolio, but it does not by itself demonstrate campaign
                effectiveness or profitability.
              </p>
            </CopyBlock>
            <KeywordOverlapDiagram channel="Paid" overlap="18.3%" />
            <CopyBlock title="3. Organic keyword overlap">
              <p>
                Revolut’s organic portfolio had considerably more overlap with Wise and XE
                than its paid portfolio. The three brands compete more directly for
                organic visibility around common currency and exchange-rate topics.
              </p>
            </CopyBlock>
            <KeywordOverlapDiagram channel="Organic" overlap="70.7%" />
            <CopyBlock title="4. Organic keyword themes">
              <p>
                Revolut’s observed organic rankings were strongly represented by utility
                searches, including currency converters, exchange-rate calculations and
                currency-pair lookups. These queries can generate substantial awareness
                and support topical authority, although their direct acquisition value
                cannot be determined without first-party conversion data.
              </p>
            </CopyBlock>
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
            <CopyBlock title="5. Paid keyword themes">
              <p>
                The observed paid keyword portfolio focused more strongly on business
                accounts, provider comparisons and international money-transfer queries.
                These terms showed higher paid-search Competitive Density than many of the
                organic utility terms, indicating that more advertisers were bidding on
                them.
              </p>
            </CopyBlock>
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
            <CopyBlock title="6. Organic versus paid role">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Organic utility content may support reach, awareness and topical
                  authority.
                </li>
                <li>
                  Paid search may be better suited to selected business, comparison and
                  problem-aware queries.
                </li>
                <li>The two channels should have distinct strategic roles.</li>
                <li>
                  Actual budget allocation must be based on first-party conversion
                  economics.
                </li>
              </ul>
            </CopyBlock>
            <ChannelComparison />
          </div>

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
