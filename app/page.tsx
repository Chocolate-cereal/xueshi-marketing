import Image from "next/image";
import Link from "next/link";
import { profile, hasContact } from "@/data/profile";
import { publishedProjects } from "@/data/projects";
import { ContactLinks, ContactSection } from "@/components/sections/contact-links";
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
const caseStudies = [
  {
    variant: "search",
    image: "/images/case-studies/search-audit.webp",
    imageAlt: "Analytics dashboard shown on a laptop beside a plant.",
    imageHeight: 278,
    meta: ["Independent audit", "SEO / paid search"],
    title: "Organic vs Paid Search Strategy Audit",
    description:
      "A comprehensive audit to evaluate search performance, identify growth opportunities and shape a more effective strategy.",
    href: "/case-studies",
  },
  {
    variant: "revolut",
    image: "/images/case-studies/revolut-audit.webp",
    imageAlt: "Revolut app displayed on a mobile phone.",
    imageHeight: 292,
    meta: ["UX / CRO", "Independent audit"],
    title: "Revolut Landing Page Conversion Audit",
    description:
      "A detailed analysis of the landing page experience, with recommendations to improve conversion and user engagement.",
    href: "/case-studies",
  },
  {
    variant: "mfcu",
    image: "/images/case-studies/mfcu-redesign.webp",
    imageAlt: "Member First Credit Union Green Car Loan redesigned landing page.",
    imageHeight: 292,
    meta: ["Proposed redesign", "UX / content"],
    title: "Member First Credit Union Green Car Loan",
    description:
      "A proposed website redesign to improve clarity, accessibility and conversion for the green car loan product.",
    href: "/case-studies/member-first-credit-union-green-car-loan",
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
      <section className="editorial-band" id="selected-case-studies">
        <div className="portfolio-wrap editorial-work">
          <aside>
            <h2>
              Selected
              <br />
              Case Studies
            </h2>
            <p>
              Real challenges. Practical solutions. Thoughtful, evidence-led marketing.
            </p>
            <Link className="text-link" href="/case-studies">
              View case studies <span aria-hidden="true">→</span>
            </Link>
          </aside>
          <div className="case-study-list">
            {caseStudies.map((study) => (
              <article className="case-study-row" key={study.title}>
                <Image
                  className={`case-study-thumbnail case-study-thumbnail--${study.variant}`}
                  src={study.image}
                  alt={study.imageAlt}
                  width={494}
                  height={study.imageHeight}
                  sizes="(max-width: 360px) calc(100vw - 40px), (max-width: 700px) 110px, (max-width: 1200px) 190px, 247px"
                />
                <div className="case-study-copy">
                  <p className="case-study-meta">
                    {study.meta.map((label, index) => (
                      <span className="case-study-meta-item" key={label}>
                        {index > 0 && <span className="case-study-meta-divider" />}
                        {label}
                      </span>
                    ))}
                  </p>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                </div>
                <Link className="case-study-action" href={study.href}>
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
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
