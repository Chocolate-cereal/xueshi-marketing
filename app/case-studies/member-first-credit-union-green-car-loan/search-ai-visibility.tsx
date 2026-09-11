import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const questions = [
  "Qualifying vehicles",
  "Eligibility requirements",
  "Repayment calculations",
  "Interest rate vs APR",
];

export function SearchAiVisibility() {
  return (
    <ContentSection id="search">
      <NumberedSectionHeader
        number="07"
        title="Search & AI visibility"
        description="The research considered how relevant product information could be discovered and interpreted across traditional and AI-assisted search experiences."
      />

      <div className={styles.searchVisibilityGrid}>
        <section className={styles.searchVisibilityColumn}>
          <p className={styles.searchVisibilityLabel}>
            <span>01</span> — Research signals
          </p>
          <h3>What people search for</h3>

          <div className={styles.searchVisibilityItem}>
            <h4>Keyword research</h4>
            <p>
              Product and repayment-related terms were compared using relevance, search
              demand, competition and bid ranges.
            </p>
          </div>
          <div className={styles.searchVisibilityItem}>
            <h4>Local intent</h4>
            <p>
              Low-volume local terms were considered alongside geographic relevance,
              product fit and user intent.
            </p>
          </div>
        </section>

        <section className={`${styles.searchVisibilityColumn} ${styles.searchVisibilityResponse}`}>
          <p className={styles.searchVisibilityLabel}>
            <span>02</span> — Content response
          </p>
          <h3>What the page should answer</h3>

          <ul className={styles.searchQuestionList}>
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <p className={styles.searchVisibilitySummary}>
            Clear, accurate answers support users during consideration.
          </p>
        </section>

        <section className={styles.searchVisibilityColumn}>
          <p className={styles.searchVisibilityLabel}>
            <span>03</span> — Discovery paths
          </p>
          <h3>How information may be found</h3>

          <div className={styles.searchVisibilityItem}>
            <h4>Traditional search</h4>
            <p>
              Relevant product language and useful answers can improve alignment with
              search intent.
            </p>
          </div>
          <div className={styles.searchVisibilityItem}>
            <h4>AI-assisted discovery</h4>
            <p>
              Clear question-and-answer, entity and structured content can make product
              information easier to interpret.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.searchVisibilityTakeaway}>
        <h3>
          Use broader product language for discovery. Answer specific borrower questions
          for consideration.
        </h3>
        <p>
          These practices may improve interpretability but do not guarantee inclusion in
          AI-generated answers.
        </p>
      </div>
    </ContentSection>
  );
}
