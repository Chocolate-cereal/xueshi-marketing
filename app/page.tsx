import Image from "next/image";
import Link from "next/link";
import { profile, hasContact } from "@/data/profile";
import { publishedProjects } from "@/data/projects";
import { ContactLinks, ContactSection } from "@/components/sections/contact-links";
import { ProjectList } from "@/components/sections/project-list";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Xue · Digital marketing",
  "SEO, landing page optimisation and competitor research. Meet Xue and explore her approach to digital marketing.",
  "/",
);
const focus = [
  [
    "Search & content",
    "Find the gaps between what people search for and what a website offers.",
  ],
  ["Landing pages", "Make the message clearer and the next step easier to find."],
  ["Competitor research", "Understand the market and where a brand can stand apart."],
  ["Website experience", "Examine performance, accessibility and the visitor journey."],
];
const perspectives = [
  {
    image: "still-life",
    category: "Brand & content",
    title: "A clearer story. A more useful page.",
    text: "Look at how product information, imagery and search intent work together.",
    focus: "Message clarity",
    detail: "Content & positioning",
  },
  {
    image: "studio",
    category: "Websites & experience",
    title: "Make the next step feel natural.",
    text: "Review the path from a first visit to an enquiry, and identify unnecessary friction.",
    focus: "Visitor journey",
    detail: "Landing page analysis",
  },
  {
    image: "coast",
    category: "Research & discovery",
    title: "Understand what makes a choice matter.",
    text: "Compare search results and competitor experiences to reveal useful opportunities.",
    focus: "Market context",
    detail: "Competitor research",
  },
];
export default function HomePage() {
  return (
    <div className="editorial-home">
      <section className="editorial-hero" aria-labelledby="hero-title">
        <div className="hero-photograph">
          <Image
            src={profile.portrait || "/images/studio.webp"}
            alt={profile.portrait ? "Xue" : ""}
            fill
            priority
            sizes="(max-width: 700px) 100vw, 65vw"
          />
        </div>
        <div className="portfolio-wrap hero-content">
          <div className="hero-copy">
            <p className="editorial-kicker">Marketing insights. Clearer possibilities.</p>
            <h1 id="hero-title">Hi, I’m Xue.</h1>
            <h2>
              A thoughtful approach to
              <br className="desktop-break" /> digital marketing.
            </h2>
            <p className="hero-description">
              SEO, landing pages and competitor research. I connect the details to find
              practical ways to improve a website.
            </p>
            <div className="hero-actions">
              {publishedProjects.length ? (
                <Link className="action" href="/case-studies">
                  View my work
                </Link>
              ) : (
                <Link className="action" href="/services">
                  Explore my approach
                </Link>
              )}
              {hasContact ? (
                <Link className="editorial-secondary" href="/contact">
                  Contact me
                </Link>
              ) : (
                <Link className="editorial-secondary" href="/about">
                  About me
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-wrap focus-strip" aria-labelledby="focus-title">
        <h2 id="focus-title">
          What I<br />
          focus on
        </h2>
        {focus.map(([title, text], i) => (
          <article key={title}>
            <span className="focus-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      {publishedProjects.length > 0 ? (
        <section className="editorial-band">
          <div className="portfolio-wrap editorial-work">
            <aside>
              <h2>
                Selected
                <br />
                work
              </h2>
              <p>Context, analysis and practical recommendations.</p>
            </aside>
            <ProjectList projects={publishedProjects.slice(0, 3)} />
          </div>
        </section>
      ) : (
        <section className="editorial-band">
          <div className="portfolio-wrap editorial-work">
            <aside>
              <h2>
                A closer
                <br />
                look
              </h2>
              <p>Three perspectives on a stronger digital presence.</p>
              <Link className="text-link" href="/services">
                Explore expertise <span aria-hidden="true">→</span>
              </Link>
            </aside>
            <div className="perspective-list">
              {perspectives.map((item) => (
                <article className="perspective-row" key={item.title}>
                  <Image
                    src={`/images/${item.image}.webp`}
                    alt=""
                    width={900}
                    height={600}
                    sizes="(max-width: 700px) 40vw, 190px"
                  />
                  <div>
                    <p className="editorial-kicker">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="perspective-note">
                    <span>{item.focus}</span>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
              <p className="imagery-note">
                Illustrative AI-generated imagery. These are areas of focus, not client
                case studies.
              </p>
            </div>
          </div>
        </section>
      )}
      <section className="portfolio-wrap method-strip" aria-labelledby="method-title">
        <div>
          <h2 id="method-title">How I approach a brief</h2>
          <p>
            A clear question.
            <br />A practical next step.
          </p>
        </div>
        {[
          ["Research", "Understand the goal, the audience and the available evidence."],
          ["Analyse", "Look for patterns, gaps and points of friction."],
          ["Recommend", "Turn findings into a focused list of priorities."],
          ["Measure", "Define what to track and how to assess change."],
        ].map(([title, text], i) => (
          <article key={title}>
            <h3>
              <span>0{i + 1}</span>
              {title}
            </h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="editorial-band">
        <div className="portfolio-wrap editorial-about">
          <div>
            <h2>About / Behind the work</h2>
            <p>
              I’m Xue, a digital marketer focused on SEO, landing page optimisation and
              competitor research.
            </p>
            <p>
              I’m interested in how people find a website, what they understand when they
              arrive, and what helps them take the next step.
            </p>
            <Link className="text-link" href="/about">
              Get to know me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <dl>
            <div>
              <dt>Look at the whole journey</dt>
              <dd>Connect search visibility with the experience on the page.</dd>
            </div>
            <div>
              <dt>Make the reasoning clear</dt>
              <dd>Separate observations, assumptions and recommendations.</dd>
            </div>
            <div>
              <dt>Keep the next step practical</dt>
              <dd>Focus on improvements a team can understand and act on.</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="portfolio-wrap">
        {hasContact ? (
          <ContactSection />
        ) : (
          <section className="opportunity-note">
            <h2>Open to opportunities.</h2>
            <p>
              Digital marketing roles with agencies, in-house teams and growing
              organisations.
            </p>
            {profile.cv ? (
              <ContactLinks />
            ) : (
              <Link className="text-link" href="/about">
                More about Xue <span aria-hidden="true">→</span>
              </Link>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
