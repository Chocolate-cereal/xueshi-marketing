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
      "A review of search visibility, technical signals, content alignment and the opportunities worth prioritising.",
    areas: ["Technical signals", "Search intent", "Content gaps"],
  },
  {
    title: "Landing page optimisation",
    description:
      "A close look at message hierarchy, the visitor journey and the points that may slow a conversion.",
    areas: ["Message hierarchy", "Conversion paths", "Page experience"],
  },
  {
    title: "Competitor research",
    description:
      "A comparison of positioning, search presence and page experience to find gaps your brand can credibly own.",
    areas: ["Market patterns", "Content coverage", "Experience review"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Digital marketing research with a clear next step."
        description="I turn a broad question into a defined review, supported findings and a ranked set of recommendations."
        actions={[{ label: "Discuss a project", href: "/contact" }]}
      />
      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Core services"
          title="Start with the decision you need to make."
          description="The scope can then be shaped around your question, available evidence and constraints."
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
          title="Unsure where the problem sits?"
          description="Describe what is happening and what you need to decide. I can help define the right review."
          primaryAction={{ label: "Contact me", href: "/contact" }}
          secondaryAction={{ label: "View case studies", href: "/case-studies" }}
        />
      </ContentSection>
    </>
  );
}
