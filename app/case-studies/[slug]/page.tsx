import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found", robots: { index: false } };
  return pageMetadata(project.title, project.summary, `/case-studies/${project.slug}`);
}
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <article className="portfolio-wrap interior-page case-study">
      <Link href="/case-studies" className="text-link">
        All work
      </Link>
      <p className="project-meta">
        {project.category} · {project.date}
      </p>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>
      <dl className="project-facts">
        <div>
          <dt>Scope</dt>
          <dd>{project.scope}</dd>
        </div>
        <div>
          <dt>My contribution</dt>
          <dd>{project.role}</dd>
        </div>
        {project.tools.length > 0 && (
          <div>
            <dt>Tools used</dt>
            <dd>{project.tools.join(", ")}</dd>
          </div>
        )}
      </dl>
      <section className="prose">
        <h2>Context</h2>
        <p>{project.context}</p>
      </section>
      {project.evidence.map((item) => (
        <figure key={item.src}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(max-width: 1100px) 100vw, 1000px"
          />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
      <section className="prose">
        <h2>Findings & recommendations</h2>
        {project.findings.map((finding) => (
          <div key={finding.observation} className="finding">
            <h3>{finding.observation}</h3>
            <p>{finding.recommendation}</p>
            <p className="project-meta">Priority: {finding.priority}</p>
          </div>
        ))}
      </section>
      <section className="prose">
        <h2>Implementation</h2>
        <p>{project.implementation}</p>
        <h2>Outcomes</h2>
        {!project.outcomesMeasured && <p>Outcomes have not been measured.</p>}
        <p>{project.outcomes}</p>
        <h2>Limitations</h2>
        <p>{project.limitations}</p>
        <h2>What I learned</h2>
        <p>{project.lessons}</p>
      </section>
    </article>
  );
}
