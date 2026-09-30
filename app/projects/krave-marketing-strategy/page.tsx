import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Krave marketing strategy",
  "A 2021 UCD group project developing a three-year digital-first marketing strategy for Kellogg’s Krave in Ireland and the UK.",
  "/projects/krave-marketing-strategy",
);

export default function KraveProjectPage() {
  return (
    <article className="portfolio-wrap project-detail">
      <Link className="portfolio-text-link project-back-link" href="/#selected-work">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>
      <header className="project-detail-header">
        <p className="portfolio-eyebrow">Academic group project · UCD · 2021</p>
        <h1>A digital-first marketing strategy for Krave.</h1>
        <p className="project-detail-lead">
          A three-year marketing strategy for Kellogg’s Krave in Ireland and the UK,
          developed as a team project for MKT40940.
        </p>
      </header>

      <div className="project-summary-grid">
        <div>
          <p className="project-summary-label">Project type</p>
          <p>Academic group project</p>
        </div>
        <div>
          <p className="project-summary-label">Market</p>
          <p>Ireland and the UK</p>
        </div>
        <div>
          <p className="project-summary-label">Research input</p>
          <p>2 focus groups · 13 interviews · 26 participants</p>
        </div>
      </div>

      <section className="project-detail-section">
        <div>
          <p className="portfolio-eyebrow">The brief</p>
          <h2>Build a strategy around real occasions.</h2>
        </div>
        <div className="project-detail-copy">
          <p>
            The team developed a digital-first, three-year marketing strategy for Krave.
            Primary research, including focus groups and interviews, helped explore how
            the brand could connect with consumers in Ireland and the UK.
          </p>
          <p>
            The proposed direction, “Krave the Moment,” looked beyond breakfast and
            positioned Krave as a snack for more moments across the day, supported by
            campaign themes planned throughout the year.
          </p>
        </div>
      </section>

      <section className="project-concept" aria-labelledby="concept-title">
        <p className="portfolio-eyebrow">Proposed campaign platform</p>
        <h2 id="concept-title">Krave the Moment</h2>
        <p>Make a little room for a chocolatey snack moment.</p>
      </section>

      <aside className="project-limitations">
        <h2>Project context</h2>
        <p>
          This was a university group project completed in 2021. The strategy and campaign
          ideas were recommendations; they were not implemented, so no commercial results
          are claimed.
        </p>
      </aside>

      <Link className="portfolio-text-link" href="/#selected-work">
        Back to selected work <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
