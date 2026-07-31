import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const services = [
  {
    title: "SEO audits",
    description:
      "A structured review of search visibility, technical foundations, content alignment and priority opportunities.",
    areas: ["Technical signals", "Search intent", "Content gaps"],
  },
  {
    title: "Landing page optimisation",
    description:
      "An evidence-led assessment of message clarity, user journeys, page experience and conversion friction.",
    areas: ["Message hierarchy", "Conversion paths", "Page experience"],
  },
  {
    title: "Competitor research",
    description:
      "A focused comparison of positioning, search presence and digital experience to identify useful opportunities.",
    areas: ["Market patterns", "Content coverage", "Experience review"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Focused analysis for clearer digital marketing priorities."
        description="Each service is designed to turn a broad marketing question into a structured review, a clear set of findings and practical next steps."
        actions={[{ label: "Discuss a project", href: "/contact" }]}
      />
      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Core services"
          title="Choose the review that fits the decision in front of you."
          description="Scopes can be shaped around the available evidence, business context and the questions your team needs to answer."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col p-7">
              <Heading as="h3">{service.title}</Heading>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {service.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span
                      className="size-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection className="pt-0">
        <CallToAction
          eyebrow="A useful starting point"
          title="Not sure which type of review you need?"
          description="Describe the marketing question, the evidence you already have and the decision that needs to follow. The right scope can be clarified from there."
          primaryAction={{ label: "Contact me", href: "/contact" }}
          secondaryAction={{ label: "View case studies", href: "/case-studies" }}
        />
      </ContentSection>
    </>
  );
}
