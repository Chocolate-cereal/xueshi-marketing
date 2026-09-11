import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const campaignFlow = [
  { label: "Audience", value: "People considering an electric or qualifying hybrid vehicle" },
  { label: "Platform", value: "Facebook + Instagram" },
  { label: "Message", value: "Financing, affordability and repayment planning" },
  { label: "Action", value: "Calculate repayments" },
];

const campaignSetup = [
  ["Objective", "Drive relevant users to the landing page"],
  ["Geography", "Relevant Dublin service area"],
  ["Approach", "Concentrated single-campaign test"],
];

const rationale = [
  { title: "Why Meta", description: "Visual formats and audience controls support a focused landing-page traffic test." },
  { title: "Why local targeting", description: "Geographic targeting keeps spend within the relevant Dublin service area." },
  { title: "Why one campaign", description: "A constrained test avoids fragmentation and creates a clearer learning objective." },
];

export function PaidMediaPlan() {
  return (
    <ContentSection id="media" className="bg-surface/35">
      <div className={styles.paidMediaLayout}>
        <div className="min-w-0">
          <NumberedSectionHeader
            number="08"
            title="Paid-media plan"
            description="A focused strategy connects local targeting and repayment-led messaging to a clear landing-page action."
          />
          <h3 className={styles.paidMediaStatement}>One audience. One focused campaign. One clear action.</h3>
          <ol className={styles.campaignFlow} aria-label="Campaign flow">
            {campaignFlow.map((step, index) => (
              <li key={step.label} className={index === campaignFlow.length - 1 ? styles.campaignAction : undefined}>
                <div className={styles.campaignStepNumber} aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {index < campaignFlow.length - 1 && <span className={styles.campaignConnector} />}
                </div>
                <p className={styles.campaignStepLabel}>{step.label}</p>
                <p className="mt-3 text-base leading-[1.6] text-muted">{step.value}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className={styles.campaignSetup} aria-labelledby="campaign-setup-title">
          <h3 id="campaign-setup-title">Campaign setup</h3>
          <dl>
            {campaignSetup.map(([label, value]) => (
              <div key={label}>
                <dt className={styles.sectionLabel}>{label}</dt>
                <dd className="mt-2 text-base leading-[1.6] text-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className={styles.campaignRationale}>
        <h3 className={styles.campaignRationaleTitle}>Why this setup</h3>
        <div className={styles.campaignReasons}>
          {rationale.map((reason) => (
            <div key={reason.title}>
              <h4>{reason.title}</h4>
              <p className="mt-3 text-base leading-[1.6] text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.campaignForecastNote}>Forecasts were planning estimates based on platform audience estimates and external advertising benchmarks rather than live campaign performance.</p>
    </ContentSection>
  );
}
