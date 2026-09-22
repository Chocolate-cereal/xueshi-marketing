import Image from "next/image";
import Link from "next/link";
import { profile, capabilities, hasContact } from "@/data/profile";
import { publishedProjects } from "@/data/projects";
import { ContactLinks, ContactSection } from "@/components/sections/contact-links";
import { ProjectList } from "@/components/sections/project-list";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Xue · Digital marketing",
  "Meet Xue: digital marketing focused on SEO, landing page optimisation and competitor research.",
  "/",
);
export default function HomePage() {
  return (
    <div className="portfolio-wrap">
      <section className="portfolio-hero" aria-labelledby="intro-title">
        <div className="intro-line">
          <p>Digital marketing portfolio</p>
          <p>SEO / Websites / Research</p>
        </div>
        <h1 id="intro-title">
          Hello, I’m <span>Xue.</span>
        </h1>
        <div className="hero-summary">
          <h2>
            A closer look at
            <br />
            digital marketing.
          </h2>
          <div>
            <p className="lead">
              I review search visibility, landing pages and competitors to find practical
              ways to improve a website.
            </p>
            <p className="availability">
              Open to digital marketing opportunities with agencies and in-house teams.
            </p>
            {publishedProjects.length ? (
              <Link className="action" href="/case-studies">
                View my work
              </Link>
            ) : hasContact || profile.cv ? (
              <ContactLinks />
            ) : (
              <Link className="text-link" href="/about">
                Get to know me
              </Link>
            )}
          </div>
        </div>
        {profile.portrait && (
          <Image
            className="portrait"
            src={profile.portrait}
            alt="Xue"
            width={640}
            height={800}
            sizes="(max-width: 700px) 100vw, 320px"
          />
        )}
      </section>
      {publishedProjects.length > 0 && (
        <section className="work-section" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <ProjectList projects={publishedProjects.slice(0, 2)} />
        </section>
      )}
      <section className="expertise-section" aria-labelledby="expertise-title">
        <div className="section-aside">
          <h2 id="expertise-title">Where I focus</h2>
          <p>From being found to being understood.</p>
        </div>
        <div className="expertise-list">
          {capabilities.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
          <Link className="text-link" href="/services">
            Explore my approach
          </Link>
        </div>
      </section>
      <section className="about-note">
        <p>Behind the portfolio</p>
        <div>
          <h2>Marketing starts with a useful question.</h2>
          <p>
            I’m interested in how people find a website, what they understand when they
            arrive, and what helps them take the next step.
          </p>
          <Link className="text-link" href="/about">
            More about me
          </Link>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
