import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Xue Shi · Digital marketing",
  "Xue Shi’s portfolio: paid search, international market research and landing-page analysis.",
  "/",
);

const expertise = [
  {
    number: "01",
    title: "Paid search",
    description:
      "Campaign optimisation across Search and Display, with careful attention to audience, market and message.",
  },
  {
    number: "02",
    title: "Research & localisation",
    description:
      "Market and competitor research that helps shape relevant campaign messaging across different audiences.",
  },
  {
    number: "03",
    title: "Landing-page analysis",
    description:
      "Reviewing page structure, message clarity and the visitor journey to identify practical improvements.",
  },
];

const projects = [
  {
    image: "/images/case-studies/mfcu-redesign.webp",
    imageAlt: "Proposed Member First Credit Union Green Car Loan page redesign.",
    category: "Independent project · UX / content",
    title: "Member First Credit Union",
    description:
      "An independent review and proposed redesign of a green car loan landing page.",
    href: "/case-studies/member-first-credit-union-green-car-loan",
    linkText: "View case study",
  },
  {
    image: "/images/still-life.webp",
    imageAlt: "A notebook and coffee on a sunlit desk.",
    category: "Academic group project · 2021",
    title: "Krave marketing strategy",
    description:
      "A research-led, three-year marketing strategy for Kellogg’s Krave in Ireland and the UK.",
    href: "/projects/krave-marketing-strategy",
    linkText: "View project",
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
              Paid search,
              <br />
              research &amp;
              <br />
              <span>landing-page thinking.</span>
            </h1>
            <p className="home-hero-lead">
              I connect campaign optimisation, international market research and website
              analysis to make marketing decisions clearer.
            </p>
            <div className="home-actions">
              <Link className="portfolio-button" href="#selected-work">
                Explore selected work <span aria-hidden="true">↓</span>
              </Link>
              <Link className="portfolio-text-link" href="/about">
                About Xue <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="home-hero-note">
              MSc Digital Marketing, University College Dublin · 2020–2021
            </p>
          </div>
          <figure className="home-visual">
            <Image
              src="/images/studio.webp"
              alt="A sunlit workspace with a notebook, coffee and plant."
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <figcaption>
              <span>Approach</span>
              Research first. Clear recommendations next.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="portfolio-wrap home-expertise"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading">
          <p className="portfolio-eyebrow">Expertise</p>
          <h2 id="expertise-title">What I bring to a marketing team</h2>
        </div>
        <div className="expertise-cards">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span className="expertise-card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="selected-work" aria-labelledby="work-title">
        <div className="portfolio-wrap">
          <div className="work-heading">
            <div>
              <p className="portfolio-eyebrow">Selected work</p>
              <h2 id="work-title">Research made practical.</h2>
            </div>
            <p>
              A mix of independent analysis and academic strategy work, with each project
              clearly labelled.
            </p>
          </div>
          <div className="project-cards">
            {projects.map((project) => (
              <article className="portfolio-project-card" key={project.href}>
                <Link
                  className="project-card-image"
                  href={project.href}
                  aria-label={project.linkText + ": " + project.title}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </Link>
                <div className="project-card-copy">
                  <p className="project-card-category">{project.category}</p>
                  <h3>
                    <Link href={project.href}>{project.title}</Link>
                  </h3>
                  <p>{project.description}</p>
                  <Link className="portfolio-text-link" href={project.href}>
                    {project.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-wrap home-contact">
        <div>
          <p className="portfolio-eyebrow">The person behind the work</p>
          <h2>Marketing experience, with a wider perspective.</h2>
        </div>
        <div>
          <p>
            Explore my experience across campaign optimisation, market research, customer
            operations and service.
          </p>
          <Link className="portfolio-button" href="/about">
            Meet Xue <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
