import Image from "next/image";

import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const conceptDetails = [
  {
    label: "Primary text",
    value:
      "Considering an electric or qualifying hybrid car? Explore what your repayments could look like.",
  },
  {
    label: "Headline",
    value: "Plan your green car repayments",
  },
  {
    label: "Primary action",
    value: "Calculate repayments",
  },
];

const conceptSummary = [
  {
    label: "Product",
    value: "Electric and qualifying hybrid vehicles",
  },
  {
    label: "Proposition",
    value: "Financing and affordability",
  },
  {
    label: "Next step",
    value: "Explore repayments",
  },
];

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.creativeSubheading}>
      <p>{children}</p>
      <span aria-hidden="true" />
    </div>
  );
}

export function CreativeConcept() {
  return (
    <ContentSection id="creative" className="bg-surface/35">
      <NumberedSectionHeader
        number="09"
        title="Creative concept"
        description="The campaign creative translated the loan proposition into a focused, repayment-led social concept."
      />

      <div className={styles.creativeLayout}>
        <figure className={styles.creativeFigure}>
          <Subheading>Creative in context</Subheading>
          <div className={styles.creativeAdCrop}>
            <Image
              src="/case-studies/member-first-credit-union-green-car-loan/creative-concept-reference.png"
              alt="Facebook ad concept for the Green Car Loan featuring a silver electric car, a 5.75% promotional rate and a Calculate repayments call to action."
              width={1078}
              height={628}
              sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, calc(100vw - 3rem)"
              className={styles.creativeAdImage}
            />
          </div>
          <figcaption className="sr-only">
            The selected paid-social creative shown in a Facebook feed context.
          </figcaption>
        </figure>

        <div className={styles.creativeMessage}>
          <Subheading>Selected message</Subheading>
          <blockquote className={styles.creativeQuote}>
            “Make affordability easier to explore before asking users to apply.”
          </blockquote>

          <dl className={styles.creativeDetails}>
            {conceptDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.creativeRationale}>
            <h3>Creative rationale</h3>
            <p>
              The car establishes the product immediately, the rate provides a clear
              proof point, and the repayment-led action connects the ad to the proposed
              landing-page journey.
            </p>
          </div>
        </div>
      </div>

      <dl className={styles.creativeSummary}>
        {conceptSummary.map((item, index) => (
          <div key={item.label}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <p className={styles.creativeNote}>
        One final concept is shown rather than every version developed during the
        project.
      </p>
    </ContentSection>
  );
}
