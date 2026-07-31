import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderSection } from "@/components/sections/placeholder-section";
import { SectionHeader } from "@/components/sections/section-header";

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Notes on evidence-led digital marketing."
        description="This space will collect practical frameworks, audit observations and research-backed guidance for clearer acquisition and conversion decisions."
        supportingText="Articles will be published when they are ready to offer a useful, well-supported point of view."
      />
      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Editorial desk"
          title="The first insights are in development."
          description="Planned topics focus on the reasoning behind strong audits and practical ways to communicate marketing evidence."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <PlaceholderSection
            label="Planned insight"
            title="How to turn an SEO audit into a useful priority list"
            description="A practical note on separating observations from recommendations and ordering work around impact, confidence and effort."
          />
          <PlaceholderSection
            label="Planned insight"
            title="Reading a landing page as a decision journey"
            description="A framework for reviewing message hierarchy, evidence, friction and the next action from a visitor’s perspective."
          />
        </div>
      </ContentSection>
    </>
  );
}
