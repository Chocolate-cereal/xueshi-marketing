import Image from "next/image";
import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

const wireframe = "/case-studies/member-first-credit-union-green-car-loan/landing-page-wireframe.png";
const width = 722;
const height = 2048;

// Coordinates refer to the supplied wireframe, which is displayed unmodified.
const designMoves = [
  {
    label: "A",
    title: "Repayment exploration first",
    description: "The hero’s primary action invites visitors to calculate payments. The calculator follows the offer highlights, bringing repayment exploration ahead of the application journey.",
    top: 380,
    bottom: 616,
    cropTop: 66,
    cropBottom: 616,
    alt: "Wireframe detail showing the Calculate Your Payments hero action, offer highlights and loan calculator.",
  },
  {
    label: "B",
    title: "Application connected to qualification",
    description: "The application steps lead into a membership eligibility prompt and the How to qualify section, keeping application guidance and qualification together.",
    top: 866,
    bottom: 1239,
    cropTop: 866,
    cropBottom: 1239,
    alt: "Wireframe detail showing four application steps, the membership eligibility prompt and How to qualify section below.",
  },
  {
    label: "C",
    title: "Sustainability kept distinct",
    description: "The tree-planting initiative has its own full-width band after the product benefits, giving the environmental message a separate place in the journey.",
    top: 779,
    bottom: 866,
    cropTop: 616,
    cropBottom: 866,
    alt: "Wireframe detail showing product benefits followed by a separate We plant a tree for every Green Loan banner.",
  },
];

export function LandingPageRedesign() {
  return (
    <ContentSection id="redesign" className="bg-surface/35">
      <div className={styles.redesignHeader}>
        <NumberedSectionHeader
          number="06"
          title="Landing-page redesign"
          description="A redesigned hierarchy that brings affordability forward and connects consideration with application."
        />
        <a href={wireframe} target="_blank" rel="noopener noreferrer" className={styles.wireframeLink}>
          Open full wireframe ↗
        </a>
      </div>

      <div className={styles.redesignLayout}>
        <div className="min-w-0">
          <p className={styles.sectionLabel}>Full-page overview</p>
          <figure className={styles.wireframeOverview}>
            <div className={styles.wireframeChrome} aria-hidden="true"><span /><span /><span /></div>
            <div className={styles.wireframeMap}>
              <a href={wireframe} target="_blank" rel="noopener noreferrer" aria-label="Open the complete landing-page wireframe in a new tab">
                <Image src={wireframe} width={width} height={height} sizes="(min-width: 1024px) 320px, 420px" className="block h-auto w-full" alt="Complete Green Car Loan wireframe, from the hero and repayment calculator through benefits, tree planting, application, qualification, vehicle examples, FAQs and support." />
              </a>
              {designMoves.map((move) => (
                <a
                  key={move.label}
                  href={`#redesign-detail-${move.label.toLowerCase()}`}
                  className={styles.wireframeMarker}
                  style={{ top: `${move.top / height * 100}%`, height: `${(move.bottom - move.top) / height * 100}%` }}
                  aria-label={`View detail ${move.label}: ${move.title}`}
                >
                  <span>{move.label}</span>
                </a>
              ))}
            </div>
            <figcaption className="sr-only">Highlighted areas link to the three design decisions beside the full-page overview.</figcaption>
          </figure>
        </div>

        <div className="min-w-0">
          <p className={styles.sectionLabel}>Key design moves</p>
          <div className={styles.redesignDetails}>
            {designMoves.map((move) => (
              <figure key={move.label} id={`redesign-detail-${move.label.toLowerCase()}`} className={styles.redesignDetail}>
                <a href={wireframe} target="_blank" rel="noopener noreferrer" className={styles.wireframeCropLink} aria-label={`Open full wireframe for detail ${move.label}`}>
                  <div className={styles.wireframeCrop} style={{ aspectRatio: `${width} / ${move.cropBottom - move.cropTop}` }}>
                    <Image
                      src={wireframe}
                      width={width}
                      height={height}
                      sizes="(min-width: 1024px) 440px, (min-width: 640px) 540px, 100vw"
                      className="block h-auto w-full"
                      style={{ position: "absolute", top: `${-move.cropTop / (move.cropBottom - move.cropTop) * 100}%` }}
                      alt={move.alt}
                    />
                  </div>
                </a>
                <figcaption className={styles.redesignCaption}>
                  <span className={styles.redesignLetter}>{move.label}</span>
                  <h3 className="mt-3">{move.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-muted">{move.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.redesignFootnote}>The overview preserves the complete journey; the enlarged details keep each decision readable.</p>
    </ContentSection>
  );
}
