import { ContentSection } from "@/components/sections/content-section";
import { NumberedSectionHeader } from "./case-study-components";
import styles from "./case-study.module.css";

// Historical planning figures transcribed from the supplied research reference.
const keywordGroups = [
  {
    relevance: "Very high",
    keywords: [
      { term: "green loan calculator", cluster: "Rate & calc.", volume: "50", competition: "Medium", bid: "€0.34–€0.99" },
      { term: "credit union auto loan", cluster: "Product", volume: "5,000", competition: "Medium", bid: "€0.07–€1.30" },
      { term: "credit union auto financing", cluster: "Product", volume: "5,000", competition: "Medium", bid: "€0.07–€1.30" },
      { term: "credit union auto loan rate", cluster: "Rate & calc.", volume: "500", competition: "Medium", bid: "€0.03–€1.05" },
      { term: "green car loan", cluster: "Product", volume: "500", competition: "Medium", bid: "€0.41–€1.53" },
    ],
  },
  {
    relevance: "High",
    keywords: [
      { term: "types of car finance", cluster: "Product", volume: "50", competition: "Low", bid: "€0.36–€0.92" },
      { term: "car loan ev", cluster: "Product", volume: "50", competition: "Medium", bid: "€0.41–€0.93" },
      { term: "car loan electric vehicle", cluster: "Product", volume: "50", competition: "Medium", bid: "€0.41–€0.93" },
      { term: "calculating car finance", cluster: "Rate & calc.", volume: "5,000", competition: "High", bid: "€0.41–€1.30" },
      { term: "credit union car loan rates", cluster: "Rate & calc.", volume: "500", competition: "Medium", bid: "€0.03–€1.05" },
      { term: "credit union loan rate", cluster: "Rate & calc.", volume: "500", competition: "Medium", bid: "€0.05–€0.57" },
      { term: "credit union car loan ireland", cluster: "Product", volume: "500", competition: "Medium", bid: "€0.11–€1.18" },
      { term: "auto loan", cluster: "Product", volume: "500", competition: "Low", bid: "€0.86–€2.63" },
    ],
  },
];

// Explicit cell selections from the original research sheet, not threshold rules.
const researchHighlights: Record<string, { volume?: boolean; yoy?: string; competition?: boolean; highBid?: boolean }> = {
  "types of car finance": { competition: true, highBid: true },
  "car loan ev": { yoy: "∞", highBid: true },
  "car loan electric vehicle": { yoy: "∞", highBid: true },
  "green loan calculator": { yoy: "900%", highBid: true },
  "calculating car finance": { volume: true, competition: true },
  "credit union auto loan": { volume: true },
  "credit union auto financing": { volume: true },
  "credit union loan rate": { highBid: true },
  "credit union car loan ireland": { yoy: "900%" },
  "auto loan": { yoy: "9900%" },
};

function ResearchMetric({ children, highlighted = false }: { children: string; highlighted?: boolean }) {
  return (
    <td className={highlighted ? styles.keywordMetricHighlight : undefined}>
      {children}{highlighted && <span className="sr-only"> (highlighted in research)</span>}
    </td>
  );
}

const keywords = keywordGroups.flatMap((group) => group.keywords);
const productCount = keywords.filter((keyword) => keyword.cluster === "Product").length;
const criteria = [
  ["Relevance", "High or very high fit with the Green Car Loan"],
  ["Search demand", "50–5,000 average monthly searches"],
  ["Competition", "Low, medium or high"],
  ["Bid range", "€0.03–€2.63 across the shortlist"],
];

export function KeywordResearch() {
  return (
    <ContentSection id="keyword-research" className="bg-surface/35">
      <NumberedSectionHeader
        number="03"
        title="Keyword research & prioritisation"
        description="Thirteen terms were retained after comparing relevance, search demand, competition and bid ranges. The final mix followed the strength of each keyword rather than an equal split between clusters."
      />

      <div className={styles.keywordLayout}>
        <aside className={styles.keywordSidebar} aria-label="Keyword selection approach">
          <p className={styles.sectionLabel}>Selection approach</p>
          <p className={styles.keywordCount}>
            <span>{keywords.length}</span>
            shortlisted keywords
          </p>
          <ul className={styles.keywordLegend}>
            <li><span aria-hidden="true" />{productCount} Product terms</li>
            <li><span aria-hidden="true" />{keywords.length - productCount} Rate & calculator terms</li>
          </ul>

          <div className={styles.keywordCriteria}>
            <p className={styles.sectionLabel}>Criteria reviewed</p>
            <ol>
              {criteria.map(([title, description], index) => (
                <li key={title}>
                  <span className={styles.keywordCriterionNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <div><p className="font-semibold text-foreground">{title}</p><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <p className={styles.keywordContext}>Cluster was retained as context, not used as a quota.</p>
        </aside>

        <div className="min-w-0">
          <p id="keyword-shortlist-label" className={styles.sectionLabel}>Prioritised shortlist</p>
          <p id="keyword-scroll-hint" className="mt-3 text-sm text-muted xl:hidden">Scroll across the table to see all columns.</p>
          <div
            className={styles.keywordTableScroll}
            role="region"
            aria-labelledby="keyword-shortlist-label"
            aria-describedby="keyword-scroll-hint"
            tabIndex={0}
          >
            <table className={styles.keywordTable}>
              <caption className="sr-only">Thirteen shortlisted keywords, grouped by relevance, with cluster, average monthly searches, year-on-year change, competition and low and high top-of-page bids in euros.</caption>
              <thead>
                <tr>
                  <th scope="col">Keyword</th>
                  <th scope="col">Cluster</th>
                  <th scope="col">Relevance</th>
                  <th scope="col">Avg. monthly</th>
                  <th scope="col">YoY change</th>
                  <th scope="col">Competition</th>
                  <th scope="col">Top-of-page bid<br />Low (€)</th>
                  <th scope="col">Top-of-page bid<br />High (€)</th>
                </tr>
              </thead>
              {keywordGroups.map((group, groupIndex) => (
                <tbody key={group.relevance}>
                  <tr className={styles.keywordGroup}>
                    <th scope="rowgroup" colSpan={8}>{group.relevance} relevance · {group.keywords.length} terms</th>
                  </tr>
                  {group.keywords.map((keyword, index) => {
                    const highlight = researchHighlights[keyword.term] ?? {};
                    const [lowBid, highBid] = keyword.bid.split("–");
                    return (
                    <tr key={keyword.term}>
                      <th scope="row"><span className={styles.keywordRowNumber}>{(groupIndex === 0 ? 0 : keywordGroups[0].keywords.length) + index + 1}.</span>{keyword.term}</th>
                      <td>{keyword.cluster}</td>
                      <td className={group.relevance === "Very high" ? styles.keywordHighRelevance : undefined}>{group.relevance}</td>
                      <ResearchMetric highlighted={highlight.volume}>{keyword.volume}</ResearchMetric>
                      <ResearchMetric highlighted={Boolean(highlight.yoy)}>{highlight.yoy ?? "0%"}</ResearchMetric>
                      <ResearchMetric highlighted={highlight.competition}>{keyword.competition}</ResearchMetric>
                      <ResearchMetric>{lowBid}</ResearchMetric>
                      <ResearchMetric highlighted={highlight.highBid}>{highBid}</ResearchMetric>
                    </tr>
                    );
                  })}
                </tbody>
              ))}
            </table>
          </div>
          <p className="mt-3 text-xs leading-[1.6] text-muted">Shaded metrics mark observations selected in the research sheet, including trade-offs; they are not a uniform performance rating. YoY means year-on-year change; ∞ is preserved as reported in the source.</p>
        </div>
      </div>

      <div className={styles.keywordTakeaway}>
        <p className={styles.sectionLabel}>What the shortlist showed</p>
        <h3 className="mt-3">Relevance led the decision; volume and cost indicators helped refine the mix.</h3>
        <p className="mt-3 text-base leading-[1.7] text-muted">Higher-volume terms expanded potential reach, while more specific green-car, credit-union and calculator terms kept the shortlist connected to the product and user journey.</p>
        <p className="mt-3 text-xs leading-[1.6] text-muted">Source: Google Keyword Planner. Figures reflect the research period and are planning estimates, not campaign results.</p>
      </div>
    </ContentSection>
  );
}
