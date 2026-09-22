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
export const projects: CaseStudy[] = [];
export const publishedProjects = projects.filter((project) => project.published);
