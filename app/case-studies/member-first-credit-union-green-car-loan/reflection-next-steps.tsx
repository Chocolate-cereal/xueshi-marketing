import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const phases = [
  {
    number: "01",
    title: "Validate",
    items: [
      "Validate calculator and CTA behaviour through analytics",
      "Analyse application drop-off",
    ],
  },
  {
    number: "02",
    title: "Compare & test",
    items: [
      "Compare keyword opportunities against Search Console and paid-search data",
      "Test calculator-led versus application-led messaging",
    ],
  },
  {
    number: "03",
    title: "Implement & optimise",
    items: [
      "Validate relevant structured data and CMS implementation",
      "Run an initial campaign test and optimise using actual performance",
    ],
  },
];

export function ReflectionNextSteps() {
  return (
    <ContentSection id="reflection" className="bg-surface/35">
      <NumberedSectionHeader
        number="12"
        title="Reflection & next steps"
        className={styles.reflectionHeader}
      />

      <div className={styles.reflectionRule} aria-hidden="true" />

      <p className={styles.reflectionStatement}>
        With first-party access, the work would move through three phases.
      </p>

      <ol className={styles.reflectionPhases}>
        {phases.map((phase) => (
          <li key={phase.number} className={styles.reflectionPhase}>
            <p className={styles.reflectionPhaseNumber}>{phase.number}</p>
            <h3>{phase.title}</h3>
            <ul className={styles.reflectionPhaseItems}>
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <aside className={styles.reflectionTakeaway}>
        This project reinforced the importance of connecting search research, user
        experience and campaign planning rather than treating each channel in isolation.
        The strongest recommendations were those that could be traced from an observed
        user or search need through to a specific page or campaign decision.
      </aside>
    </ContentSection>
  );
}
