import Image from "next/image";
import Link from "next/link";
import { hasContact } from "@/data/profile";
import { publishedProjects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Marketing expertise",
  "Explore Xue’s approach to SEO audits, landing page analysis and competitor research.",
  "/services",
);
const expertise = [
  {
    id: "search-content",
    number: "01",
    name: "SEO & content",
    question: "Be found for the right reasons.",
    intro:
      "Start with what people are searching for. Then examine whether the website gives them a useful answer.",
    image: "still-life",
    items: [
      "Search intent and content gaps",
      "Page titles, structure and internal links",
      "Technical issues affecting discovery",
    ],
    note: "A focused set of findings, with content and technical recommendations ordered by priority.",
    detail:
      "I look at the relationship between the search query, the page and the next action. Recommendations distinguish observable issues from ideas that need further data or testing.",
  },
  {
    id: "landing-pages",
    number: "02",
    name: "Landing pages",
    question: "Make every next step clearer.",
    intro:
      "Look at the page through a visitor’s eyes: what is being offered, why it matters and what to do next.",
    image: "studio",
    items: [
      "Message hierarchy and supporting evidence",
      "Calls to action and enquiry paths",
      "Mobile experience, speed and accessibility",
    ],
    note: "Page-level observations and practical changes to reduce confusion and unnecessary friction.",
    detail:
      "A review follows the journey from the first screen through to the intended action. Where results cannot be measured, recommendations remain hypotheses rather than claims of improved conversion.",
  },
  {
    id: "competitor-research",
    number: "03",
    name: "Competitor research",
    question: "Find a meaningful point of difference.",
    intro:
      "Understand the alternatives an audience sees, and where there is room to offer something clearer or more useful.",
    image: "coast",
    items: [
      "Positioning and audience messaging",
      "Search presence and content coverage",
      "Website journeys and points of difference",
    ],
    note: "A structured comparison that connects market observations with opportunities worth investigating.",
    detail:
      "Publicly visible information can reveal patterns in messaging, content and experience. It cannot establish a competitor’s revenue or conversion rate; the analysis keeps those limits explicit.",
  },
];
export default function ServicesPage() {
  return (
    <div className="inner-editorial expertise-editorial">
      <section
        className="portfolio-wrap expertise-opening"
        aria-labelledby="expertise-title"
      >
        <div>
          <p className="inner-label">Expertise</p>
          <h1 id="expertise-title">
            Find the opportunity.
            <br />
            <span>Make it useful.</span>
          </h1>
        </div>
        <p className="inner-lead">
          Search, content and website experience. Three connected ways to understand what
          a brand could do better.
        </p>
      </section>
      <nav className="portfolio-wrap expertise-index" aria-label="Explore expertise">
        {expertise.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            <span>{item.number}</span>
            {item.name}
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
      <div className="portfolio-wrap expertise-chapters">
        {expertise.map((item) => (
          <section
            className="expertise-chapter"
            id={item.id}
            key={item.id}
            aria-labelledby={`${item.id}-title`}
          >
            <div className="chapter-image">
              <Image
                src={`/images/${item.image}.webp`}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
              />
              <span className="chapter-number" aria-hidden="true">
                {item.number}
              </span>
            </div>
            <div className="chapter-content">
              <p className="inner-label">{item.name}</p>
              <h2 id={`${item.id}-title`}>{item.question}</h2>
              <p className="chapter-intro">{item.intro}</p>
              <ul>
                {item.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="review-output">
                <h3>The aim of a review</h3>
                <p>{item.note}</p>
              </div>
              <details>
                <summary>
                  How I approach this review{" "}
                  <span className="detail-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.detail}</p>
              </details>
            </div>
          </section>
        ))}
        <p className="imagery-note">
          AI-generated editorial imagery illustrates these areas of focus; it does not
          represent client projects.
        </p>
      </div>
      <section className="expertise-close">
        <div className="portfolio-wrap">
          <h2>
            A useful recommendation
            <br />
            starts with understanding.
          </h2>
          <div>
            <p>Context first. Clear findings. Practical priorities.</p>
            <Link
              className="action"
              href={
                hasContact
                  ? "/contact"
                  : publishedProjects.length
                    ? "/case-studies"
                    : "/about"
              }
            >
              {hasContact
                ? "Let’s talk"
                : publishedProjects.length
                  ? "View my work"
                  : "Meet Xue"}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
