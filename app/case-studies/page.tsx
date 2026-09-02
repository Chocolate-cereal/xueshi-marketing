import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const caseStudies = [
  {
    eyebrow: "Independent portfolio case study",
    title: "Green Car Loan Landing Page & Campaign Strategy",
    organisation: "Member First Credit Union",
    description:
      "An independent digital marketing case study combining landing-page optimisation, search research, paid-media planning and campaign creative.",
    tags: ["Landing Page", "SEO", "Paid Media", "UX Strategy"],
    href: "/case-studies/member-first-credit-union-green-car-loan",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case Studies"
        title="The thinking behind the recommendation."
        description="Independent projects showing the research, trade-offs and decisions behind each proposed strategy."
      />
      <ContentSection className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card
              key={study.href}
              className="relative flex min-h-96 flex-col overflow-hidden p-7 sm:p-9"
            >
              <span
                className="abstract-drift pointer-events-none absolute -right-16 -top-20 size-64 rounded-[40%_60%_52%_48%] border border-accent/20 bg-accent-soft/25"
                aria-hidden="true"
              />
              <Badge className="self-start">{study.eyebrow}</Badge>
              <p className="mt-8 text-sm font-semibold text-accent">
                {study.organisation}
              </p>
              <Heading as="h2" className="mt-3 text-3xl sm:text-4xl">
                {study.title}
              </Heading>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
                {study.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Case study topics">
                {study.tags.map((tag) => (
                  <Badge key={tag} className="px-2.5 py-1 text-[0.65rem]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                href={study.href}
                variant="ghost"
                className="mt-auto self-start px-0 pt-8"
              >
                View case study <span aria-hidden="true">→</span>
              </Button>
            </Card>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
