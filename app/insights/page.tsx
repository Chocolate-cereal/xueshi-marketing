import { ContentSection } from "@/components/sections/content-section";
import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderSection } from "@/components/sections/placeholder-section";
import { SectionHeader } from "@/components/sections/section-header";

const notes = [
  {
    label: "Planned insight / 01",
    title: "How to turn an SEO audit into a useful priority list",
    description:
      "A practical note on separating observations from recommendations and ordering work around impact, confidence and effort.",
  },
  {
    label: "Planned insight / 02",
    title: "Reading a landing page as a decision journey",
    description:
      "A framework for reviewing message hierarchy, evidence, friction and the next action from a visitor’s perspective.",
  },
];

export default function InsightsPage() {
  return (
    <div className="marketingPage insightsPage">
      <PageIntro
        eyebrow="Insights"
        title="Notes on evidence-led digital marketing."
        description="This space will collect practical frameworks, audit observations and research-backed guidance for clearer acquisition and conversion decisions."
        supportingText="Articles will be published when they are ready to offer a useful, well-supported point of view."
      />

      <ContentSection className="pt-0">
        <SectionHeader
          eyebrow="Editorial desk"
          title="The first notes are still being shaped."
          description="The planned topics focus on the reasoning behind strong audits and practical ways to communicate marketing evidence."
        />
        <div className="insightList">
          {notes.map((note) => (
            <PlaceholderSection
              key={note.title}
              label={note.label}
              title={note.title}
              description={note.description}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection className="pt-0">
        <div className="insightsNote" data-reveal>
          <p className="insightsNoteLabel">Editorial standard</p>
          <p>
            A note is worth publishing when it helps someone make a better decision,
            not simply because there is space on the page.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
