import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const caseStudy = {
  eyebrow: "Independent portfolio case study",
  title: "Green Car Loan Landing Page & Campaign Strategy",
  organisation: "Member First Credit Union",
  description:
    "An independent digital marketing case study combining landing-page optimisation, search research, paid-media planning and campaign creative.",
  tags: ["Landing page", "SEO", "Paid media", "UX strategy"],
  href: "/case-studies/member-first-credit-union-green-car-loan",
};

export default function CaseStudiesPage() {
  return (
    <div className="marketingPage caseStudiesPage">
      <PageIntro
        eyebrow="Case Studies"
        title="Evidence-led thinking, from research to recommendation."
        description="Independent portfolio projects that show how research, user experience and campaign planning can work together to support clearer marketing decisions."
        supportingText="Each project includes the working context, the choices made and the limitations that shaped the recommendation."
      />

      <ContentSection className="pt-0">
        <Card className="caseStudyIndexFeature" data-reveal>
          <div className="caseStudyIndexCopy">
            <div className="caseStudyIndexTopline">
              <Badge>{caseStudy.eyebrow}</Badge>
              <span>01 / 01</span>
            </div>
            <p className="caseStudyIndexOrganisation">{caseStudy.organisation}</p>
            <Heading as="h2" className="caseStudyIndexTitle">
              {caseStudy.title}
            </Heading>
            <p className="caseStudyIndexDescription">{caseStudy.description}</p>
            <div className="caseStudyIndexTags" aria-label="Case study topics">
              {caseStudy.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Button href={caseStudy.href} className="mt-8">
              View case study <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <div className="caseStudyIndexVisual" aria-hidden="true">
            <div className="caseStudyIndexVisualHeader">
              <span>MFCU / GREEN CAR LOAN</span>
              <span>2026</span>
            </div>
            <div className="caseStudyIndexVisualBody">
              <span className="caseStudyVisualLine caseStudyVisualLineLong" />
              <span className="caseStudyVisualLine caseStudyVisualLineShort" />
              <div className="caseStudyVisualGrid">
                <span>RESEARCH</span>
                <span>UX</span>
                <span>PAID MEDIA</span>
                <span>CREATIVE</span>
              </div>
            </div>
            <div className="caseStudyIndexVisualFooter">
              <span>Context</span>
              <span>Decision</span>
              <span>Next step</span>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection className="pt-0">
        <div className="caseStudyIndexNote" data-reveal>
          <p className="caseStudyIndexNoteLabel">Publishing principle</p>
          <Heading as="h2">Add the evidence when it is ready to be understood.</Heading>
          <p>
            More projects will follow as the context, process and outcomes can be shown
            with the same level of care.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
