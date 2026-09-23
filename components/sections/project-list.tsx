import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/projects";
export function ProjectList({ projects }: { projects: CaseStudy[] }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article key={project.slug} className="project-entry">
          {project.evidence[0] && (
            <Image
              src={project.evidence[0].src}
              alt={project.evidence[0].alt}
              width={project.evidence[0].width}
              height={project.evidence[0].height}
              sizes="(max-width: 700px) 100vw, 60vw"
            />
          )}
          <p className="project-meta">
            {project.category} · {project.date}
          </p>
          <h3>
            <Link className="text-link" href={`/case-studies/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p>{project.summary}</p>
        </article>
      ))}
    </div>
  );
}
