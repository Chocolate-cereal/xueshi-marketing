import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const tags = ["Google Ads", "SEO", "Competitor Research", "Semrush", "UK Market"];

export const metadata = {
  title: "Case Studies | Xueshi Marketing",
  description:
    "Independent marketing analysis projects documenting observed data, interpretation, recommendations, and limitations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Badge>Case Studies</Badge>
            <Heading className="mt-6">
              Independent marketing analysis, clearly documented.
            </Heading>
            <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
              Portfolio projects exploring search strategy, landing-page performance and
              digital acquisition using publicly available evidence. Each study separates
              observed data, interpretation, recommendations and limitations.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Card className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Badge>Independent search audit</Badge>
              <Heading as="h2" className="mt-5">
                Google Ads Acquisition Audit — Revolut
              </Heading>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                A competitive review of Revolut’s UK organic and paid keyword footprint,
                comparing its search strategy with Wise and XE.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Independent portfolio audit based on third-party Semrush data; not an
                implemented client campaign and not commissioned by Revolut.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-background px-3 py-1 normal-case tracking-normal text-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Button href="/case-studies/revolut-google-ads-acquisition-audit">
              Read the case study
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}
