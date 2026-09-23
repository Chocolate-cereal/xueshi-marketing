export type CaseStudy = {
  slug: string;
  published: boolean;
  title: string;
  date: string;
  category: "Client" | "Academic" | "Self initiated";
  summary: string;
  context: string;
  scope: string;
  role: string;
  tools: string[];
  evidence: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  findings: {
    observation: string;
    recommendation: string;
    priority: "High" | "Medium" | "Low";
  }[];
  implementation: string;
  outcomes: string;
  outcomesMeasured: boolean;
  limitations: string;
  lessons: string;
};
// Add owner-approved material here. Do not publish illustrative or invented work.
export const projects: CaseStudy[] = [
  {
    slug: "member-first-credit-union-green-car-loan",
    published: false,
    title: "Member First Credit Union Green Car Loan",
    date: "2026",
    category: "Self initiated",
    summary:
      "A proposed website redesign to improve clarity, accessibility and conversion for the green car loan product.",
    context:
      "The Green Car Loan page needed to explain the offer and guide prospective borrowers from initial interest towards an application. This independent review assessed the page structure and information hierarchy alongside search and campaign opportunities.",
    scope:
      "UX and content audit, keyword research, landing-page wireframe, paid-media plan and creative concept.",
    role: "Independent research, analysis, recommendations and campaign planning.",
    tools: ["Figma", "Canva", "Google Keyword Planner", "Meta Ads Manager"],
    evidence: [
      {
        src: "/case-studies/member-first-credit-union-green-car-loan/repayment-tables.png",
        alt: "Comparison of repayment information displayed above and below the MFCU loan calculator.",
        caption:
          "Repayment tables reviewed as evidence of the page’s financial information hierarchy.",
        width: 614,
        height: 370,
      },
    ],
    findings: [
      {
        observation: "The repayment calculator was difficult to reach.",
        recommendation:
          "Move the calculator higher on the page and make repayment planning a clearer next step.",
        priority: "High",
      },
      {
        observation: "Financial information lacked clarity and consistency.",
        recommendation:
          "Clarify the hierarchy across the promotional rate, APR and repayment tables, and reconcile inconsistent term examples.",
        priority: "High",
      },
      {
        observation: "The path from research to application was unclear.",
        recommendation:
          "Organise benefits, eligibility, repayments and application steps into a more coherent decision journey.",
        priority: "Medium",
      },
      {
        observation: "Search content did not fully address user questions.",
        recommendation:
          "Add clear answers about vehicle eligibility, loan requirements, repayment calculations and the difference between the rate and APR.",
        priority: "Medium",
      },
    ],
    implementation:
      "Created a proposed landing-page structure and wireframe, prioritised search recommendations, a €100 paid-social plan and a creative concept. These recommendations were not implemented on MFCU’s live site.",
    outcomes:
      "This case study documents a proposed approach and set of recommendations. The website changes and campaign were not implemented as part of this work, so no performance change is claimed.",
    outcomesMeasured: false,
    limitations:
      "The audit used publicly available page content and supplied engagement information. I did not have access to first-party analytics, calculator interaction events, application-start data, member research or production systems; recommendations therefore require validation before implementation.",
    lessons:
      "Validate key assumptions with member research and event-level analytics, especially calculator engagement and application starts, then test the highest-priority changes before drawing conclusions.",
  },
];
export const publishedProjects = projects.filter((project) => project.published);
