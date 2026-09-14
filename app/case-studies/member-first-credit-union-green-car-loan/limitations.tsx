import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const evidenceUsed = [
  "Publicly available page content",
  "Third-party research tools",
  "Established UX and marketing principles",
];

const evidenceUnavailable = [
  "First-party analytics",
  "Customer research",
  "Production CMS access",
  "Post-launch results",
];

function EvidenceList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Limitations() {
  return (
    <ContentSection id="limitations">
      <NumberedSectionHeader
        number="11"
        title="Limitations"
        className={styles.limitationsHeader}
      />

      <div className={styles.limitationsRule} aria-hidden="true" />

      <div className={styles.limitationsComparison}>
        <section
          className={styles.limitationsPanel}
          aria-labelledby="evidence-used-title"
        >
          <h3 id="evidence-used-title">Evidence used</h3>
          <EvidenceList items={evidenceUsed} />
        </section>

        <section
          className={`${styles.limitationsPanel} ${styles.limitationsUnavailable}`}
          aria-labelledby="evidence-unavailable-title"
        >
          <h3 id="evidence-unavailable-title">Evidence unavailable</h3>
          <EvidenceList items={evidenceUnavailable} />
        </section>
      </div>

      <p className={styles.limitationsStatement}>
        Recommendations are hypotheses to validate, not confirmed performance outcomes.
      </p>
    </ContentSection>
  );
}
