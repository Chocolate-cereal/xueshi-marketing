import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectList } from "@/components/sections/project-list";
import { pageMetadata } from "@/lib/metadata";
export const metadata = {
  ...pageMetadata(
    "Selected work",
    "Digital marketing projects: context, analysis, recommendations and outcomes.",
    "/case-studies",
  ),
  ...(!projects.length ? { robots: { index: false, follow: false } } : {}),
};
export default function CaseStudiesPage() {
  if (!projects.length) notFound();
  return (
    <div className="portfolio-wrap interior-page">
      <p className="page-label">Selected work</p>
      <h1>
        A closer look
        <br />
        <span>at the work.</span>
      </h1>
      <ProjectList projects={projects} />
    </div>
  );
}
