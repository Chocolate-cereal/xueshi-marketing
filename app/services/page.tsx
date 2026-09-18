import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/ui/call-to-action";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const services = [
  {
    index: "01",
    title: "SEO audits",
    description:
      "A structured review of search visibility, technical foundations, content alignment and priority opportunities.",
    areas: ["Technical signals", "Search intent", "Content gaps"],
  },
  {
    index: "02",
    title: "Landing-page optimisation",
    description:
      "An evidence-led assessment of message clarity, user journeys, page experience and conversion friction.",
    areas: ["Message hierarchy", "Conversion paths", "Page experience"],
  },
  {
    index: "03",
    title: "Competitor research",
    description:
      "A focused comparison of positioning, search presence and digital experience to identify useful opportunities.",
    areas: ["Market patterns", "Content coverage", "Experience review"],
  },
];

export default function ServicesPage() {
  return (
    <div className="marketingPage servicesPage">
      <PageIntro
        eyebrow="Services"
        title="Focused analysis for clearer digital marketing priorities."
        description="Each service turns a broad marketing question into a structured review, a clear set of findings and practical next steps."
        supportingText="Scopes can be shaped around the evidence available, the decision in front of you and the level of support needed."
        actions={[{ label: "Discuss a project", href: "/contact" }]}
      />

      <ContentSection className="pt-0">
        <div className="servicesLead" data-reveal>
          <div>
            <p className="servicesSectionLabel">Core services</p>
            <Heading as="h2">Choose the review that fits the decision in front of you.</Heading>
          </div>
          <p>
            The aim is not to produce the longest audit. It is to make the important
            signal easier to see and easier to act on.
          </p>
        </div>

        <div className="servicesList">
          {services.map((service) => (
            <Card key={service.title} className="serviceRow" data-reveal>
              <div className="serviceRowIndex">{service.index}</div>
              <div className="serviceRowMain">
                <Heading as="h3">{service.title}</Heading>
                <p>{service.description}</p>
              </div>
              <ul className="serviceAreas">
                {service.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <div className="serviceMethod" data-reveal>
          <div>
            <p className="servicesSectionLabel">A useful starting point</p>
            <Heading as="h2">The right scope can be clarified from the question.</Heading>
          </div>
          <p>
            Describe the marketing question, the evidence you already have and the
            decision that needs to follow. That is usually enough to shape a sensible
            first review.
          </p>
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <div data-reveal>
          <CallToAction
            eyebrow="Next step"
            title="Not sure which type of review you need?"
            description="Start with the context. We can work out the shape of the review from there."
            primaryAction={{ label: "Contact me", href: "/contact" }}
            secondaryAction={{ label: "View case studies", href: "/case-studies" }}
          />
        </div>
      </ContentSection>
    </div>
  );
}
