import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Xue Shi · Digital marketing",
  "Xue Shi’s portfolio: paid search, international market research and landing-page analysis.",
  "/",
);

const keySkills = [
  "Paid search",
  "Keyword research",
  "Market research",
  "Landing-page analysis",
  "Localisation",
  "QA",
];

const projects = [
  {
    image: "/images/case-studies/mfcu-redesign.webp",
    imageAlt:
      "Screenshot of the proposed Member First Credit Union Green Car Loan landing page.",
    category: "Independent audit",
    title: "MFCU Green Car Loan",
    description:
      "A public-evidence review with recommendations across search, content and landing-page experience.",
    href: "/case-studies/member-first-credit-union-green-car-loan",
    linkText: "View case study",
    featured: true,
  },
  {
    image: "/images/krave-research.svg",
    imageAlt:
      "Illustration of a notebook, pen and research chart for the Krave strategy project.",
    category: "Academic team project · 2021",
    title: "Krave — international marketing strategy",
    description:
      "Market research, segmentation and go-to-market recommendations for an international expansion scenario.",
    href: "/projects/krave-marketing-strategy",
    linkText: "View project",
    featured: false,
  },
];

const processSteps = [
  {
    number: "1",
    title: "Research",
    description: "Understand the goal, audience, market and available evidence.",
  },
  {
    number: "2",
    title: "Find opportunities",
    description: "Identify practical improvements across campaigns and pages.",
  },
  {
    number: "3",
    title: "Recommend",
    description: "Turn findings into clear, prioritised actions.",
  },
  {
    number: "4",
    title: "Measure",
    description: "Define useful measures and learn from what changes.",
  },
];

const marketingExperience = [
  {
    dates: "Jun 2018 – Jun 2020",
    title: "Marketing & Sales Coordinator — IMS Health, China",
    description: "Marketing reports, CRM audience segmentation and market research.",
  },
  {
    dates: "Aug 2022 – Nov 2023",
    title: "Senior Advertising Campaign Optimiser — Majorel, Google client",
    description:
      "Implemented optimisation plans across Google Ads Search and Display, supporting keyword research, localisation and landing-page analysis.",
  },
];

export default function HomePage() {
  return (
    <div className="portfolio-home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="portfolio-wrap home-hero-grid">
          <div className="home-hero-copy">
            <p className="portfolio-eyebrow">Digital marketing · Xue Shi</p>
            <h1 id="home-title">
              Paid search, research
              <br className="home-title-break" /> and landing-page thinking.
            </h1>
            <p className="home-hero-lead">
              Hands-on campaign optimisation, international market research and clear
              website recommendations.
            </p>
            <div className="home-actions">
              <Link className="portfolio-button" href="#selected-work">
                View case studies <span aria-hidden="true">→</span>
              </Link>
              <Link className="home-outline-button" href="/about">
                About Xue <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-wrap home-skills" aria-labelledby="skills-title">
        <p className="portfolio-eyebrow" id="skills-title">
          Key skills
        </p>
        <ul className="home-skill-list">
          {keySkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section
        className="home-selected-work"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <div className="portfolio-wrap">
          <div className="home-section-heading">
            <p className="portfolio-eyebrow">Selected case studies</p>
            <h2 id="work-title">Project experience, applied thinking.</h2>
            <p>
              Two examples of using paid search, research and landing-page analysis to
              develop clear, practical recommendations.
            </p>
          </div>
          <div className="home-project-grid">
            {projects.map((project) => (
              <article
                className={
                  project.featured
                    ? "home-project-card home-project-card--featured"
                    : "home-project-card"
                }
                key={project.href}
              >
                <Link
                  className="home-project-image"
                  href={project.href}
                  aria-label={`${project.linkText}: ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes={
                      project.featured
                        ? "(max-width: 800px) 100vw, 58vw"
                        : "(max-width: 800px) 100vw, 42vw"
                    }
                    unoptimized={project.image.endsWith(".svg")}
                  />
                </Link>
                <div className="home-project-copy">
                  <p className="home-project-category">{project.category}</p>
                  <h3>
                    <Link href={project.href}>{project.title}</Link>
                  </h3>
                  <p className="home-project-description">{project.description}</p>
                  <Link className="portfolio-text-link" href={project.href}>
                    {project.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-wrap home-process" aria-labelledby="process-title">
        <div className="home-section-heading home-process-heading">
          <p className="portfolio-eyebrow">How I work</p>
          <h2 id="process-title">A simple, structured approach.</h2>
        </div>
        <ol className="home-process-list">
          {processSteps.map((step) => (
            <li className="home-process-step" key={step.number}>
              <span className="home-process-number" aria-hidden="true">
                {step.number}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="home-experience"
        id="marketing-experience"
        aria-labelledby="experience-title"
      >
        <div className="portfolio-wrap">
          <div className="home-section-heading">
            <p className="portfolio-eyebrow">Marketing experience</p>
            <h2 id="experience-title">Relevant experience in digital marketing.</h2>
            <p>
              Campaign optimisation, market research and marketing coordination across
              international teams.
            </p>
          </div>
          <div className="home-experience-list">
            {marketingExperience.map((item) => (
              <article className="home-experience-row" key={item.title}>
                <p className="home-experience-dates">{item.dates}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-wrap home-transfer" aria-labelledby="transfer-title">
        <div>
          <p className="portfolio-eyebrow">A wider operational perspective</p>
          <h2 id="transfer-title">Transferable experience beyond marketing.</h2>
        </div>
        <div className="home-transfer-copy">
          <p>
            Work at TLScontact and Covalen has strengthened my accuracy, quality
            assurance, calibration, onboarding and communication skills.
          </p>
          <Link className="portfolio-text-link" href="/about#marketing-experience-title">
            See my full experience <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-contact" id="contact" aria-labelledby="contact-title">
        <div className="portfolio-wrap home-contact-inner">
          <div>
            <p className="portfolio-eyebrow">Let’s connect</p>
            <h2 id="contact-title">Let’s talk about digital marketing opportunities.</h2>
            <p className="home-contact-description">
              I’m open to roles in paid search, research and digital optimisation.
            </p>
          </div>
          <div className="home-contact-actions">
            {profile.email && (
              <a className="portfolio-button" href={`mailto:${profile.email}`}>
                Email me <span aria-hidden="true">→</span>
              </a>
            )}
            {profile.linkedIn && (
              <a
                className="home-outline-button"
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="portfolio-wrap home-footer-inner">
          <div className="home-footer-brand">
            <Link className="wordmark" href="/">
              Xue
            </Link>
            <span>Digital marketing portfolio</span>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="#selected-work">Case Studies</Link>
            <Link href="/about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <p className="home-footer-copyright">© {new Date().getFullYear()} Xue Shi</p>
        </div>
      </footer>
    </div>
  );
}
