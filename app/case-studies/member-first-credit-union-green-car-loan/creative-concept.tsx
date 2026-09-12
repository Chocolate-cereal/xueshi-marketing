import Image from "next/image";

import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const conceptDetails = [
  {
    label: "Primary text",
    value:
      "Considering an electric or qualifying hybrid car? Check what your repayments could look like with an MFCU Green Car Loan.",
  },
  {
    label: "Headline",
    value: "Get a Green Car Loan from MFCU",
  },
  {
    label: "Primary action",
    value: "Check repayments",
  },
];

const conceptSummary = [
  {
    label: "Product",
    value: "Green Car Loan for electric and qualifying hybrid cars",
  },
  {
    label: "Proposition",
    value: "5.75% promotional interest rate, with 5.9% APR",
  },
  {
    label: "Next step",
    value: "Check repayments",
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
        description="The campaign creative combines the Green Car Loan offer, rate information and sustainability benefits in one focused social concept."
      />

      <div className={styles.creativeLayout}>
        <figure className={styles.creativeFigure}>
          <Subheading>Creative in context</Subheading>
          <div className={styles.creativeAdFrame}>
            <Image
              src="/case-studies/member-first-credit-union-green-car-loan/creative-concept-reference.png"
              alt="MFCU Green Car Loan creative showing electric-car charging, a 5.75% promotional interest rate, a 5.9% APR and a Check repayments call to action."
              width={1080}
              height={1350}
              sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, calc(100vw - 3rem)"
              className={styles.creativeAdImage}
              unoptimized
            />
          </div>
          <figcaption className="sr-only">
            The selected Green Car Loan paid-social creative.
          </figcaption>
        </figure>

        <div className={styles.creativeMessage}>
          <Subheading>Selected message</Subheading>
          <blockquote className={styles.creativeQuote}>
            “Your greener drive starts here.”
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
              The charging imagery and green palette establish the electric-car focus.
              The 5.75% promotional rate and 5.9% APR make the offer concrete, while the
              CTA and benefit list connect repayments, online application and MFCU&apos;s
              tree-planting commitment.
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
