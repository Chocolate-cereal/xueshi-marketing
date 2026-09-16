import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const evidenceGroups = [
  {
    title: "Paid acquisition",
    items: [
      "Landing-page views",
      "Click-through rate",
      "Cost per landing-page view",
      "Conversion rate by audience and creative",
    ],
    position: styles.measurementGroupOne,
  },
  {
    title: "Organic discovery",
    items: [
      "Impressions for priority queries",
      "Organic clicks",
      "Search visibility trends",
      "Search Console query development",
    ],
    position: styles.measurementGroupTwo,
  },
  {
    title: "Product exploration",
    items: [
      "Calculator starts",
      "Calculator completions",
      "Interaction with eligibility and application content",
    ],
    position: styles.measurementGroupThree,
  },
  {
    title: "Application intent",
    items: ["Application CTA clicks", "Application starts"],
    position: styles.measurementGroupFour,
  },
];

export function MeasurementSuccess() {
  return (
    <ContentSection id="measurement" className="bg-surface/35">
      <NumberedSectionHeader
        number="10"
        title="How I would measure success"
        description="These are proposed metrics for validating the experience and campaign, not existing performance results."
      />

      <h3 className={styles.measurementStatement}>
        One outcome, supported by four evidence groups.
      </h3>

      <div className={styles.measurementMap}>
        <svg
          className={styles.measurementConnectors}
          viewBox="0 0 1000 440"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g className={styles.measurementConnectorBase}>
            <path d="M250 76H305V155H350" />
            <path d="M250 364H305V285H350" />
            <path d="M750 76H695V155H650" />
            <path d="M750 364H695V285H650" />
          </g>
          <g>
            <path
              className={`${styles.measurementConnectorPulse} ${styles.measurementConnectorPulseOne}`}
              d="M250 76H305V155H350"
            />
            <path
              className={`${styles.measurementConnectorPulse} ${styles.measurementConnectorPulseTwo}`}
              d="M250 364H305V285H350"
            />
            <path
              className={`${styles.measurementConnectorPulse} ${styles.measurementConnectorPulseThree}`}
              d="M750 76H695V155H650"
            />
            <path
              className={`${styles.measurementConnectorPulse} ${styles.measurementConnectorPulseFour}`}
              d="M750 364H695V285H650"
            />
          </g>
        </svg>

        <section
          className={styles.measurementOutcome}
          aria-labelledby="measurement-outcome-title"
        >
          <p className={styles.measurementOutcomeLabel}>Proposed success outcome</p>
          <h3 id="measurement-outcome-title">Completed applications</h3>
          <p className={styles.measurementOutcomeMetric}>Application completion rate</p>
          <p className={styles.measurementOutcomeExplanation}>
            Evidence that users successfully moved through the proposed journey.
          </p>
        </section>

        {evidenceGroups.map((group, index) => (
          <section
            key={group.title}
            className={`${styles.measurementEvidenceGroup} ${group.position}`}
            aria-labelledby={`measurement-group-${index + 1}`}
          >
            <div className={styles.measurementGroupHeading}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i aria-hidden="true" />
              <h4 id={`measurement-group-${index + 1}`}>{group.title}</h4>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className={styles.measurementFooter}>
        <p>
          Supporting signals explain where the journey succeeds or breaks down; they
          are not results in isolation.
        </p>
        <p>
          Tracking definitions and analytics implementation would be required before
          launch.
        </p>
      </footer>
    </ContentSection>
  );
}
