import Image from "next/image";
import Link from "next/link";
import { profile, hasContact } from "@/data/profile";
import { ContactLinks } from "@/components/sections/contact-links";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Xue",
  "Meet Xue: a digital marketer focused on search visibility, landing pages and competitor research.",
  "/about",
);
export default function AboutPage() {
  return (
    <div className="inner-editorial about-editorial">
      <section className="portfolio-wrap about-opening" aria-labelledby="about-title">
        <div className="about-image">
          <Image
            src={profile.portrait || "/images/studio.webp"}
            alt={profile.portrait ? "Portrait of Xue" : ""}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 45vw"
          />
          <div className="image-caption">
            {profile.portrait
              ? "Xue / Digital marketing"
              : "Space to think. Room to explore."}
          </div>
        </div>
        <div className="about-introduction">
          <p className="inner-label">Behind Xueshi Marketing</p>
          <h1 id="about-title">
            A curious mind.
            <br />
            <span>A practical focus.</span>
          </h1>
          <p className="inner-lead">
            I’m Xue. I look at how people find a website, what they understand, and what
            helps them take the next step.
          </p>
          <p>
            My focus is SEO, landing page optimisation and competitor research. I use
            research and structured analysis to turn a broad marketing question into
            useful recommendations.
          </p>
          <div className="about-signature">
            <span>Xue</span>
            <p>
              Digital marketing
              {profile.location && (
                <>
                  <br />
                  {profile.location}
                </>
              )}
            </p>
          </div>
          <ContactLinks />
        </div>
      </section>
      <section className="about-interests" aria-labelledby="interests-title">
        <div className="portfolio-wrap interests-layout">
          <div>
            <p className="inner-label">The questions behind the work</p>
            <h2 id="interests-title">
              Small details.
              <br />A bigger picture.
            </h2>
          </div>
          <dl>
            <div>
              <dt>How do people find you?</dt>
              <dd>
                Search visibility, relevant content and the questions an audience is
                already asking.
              </dd>
            </div>
            <div>
              <dt>What makes them stay?</dt>
              <dd>
                A clear message, a useful page and an experience that is easy to follow.
              </dd>
            </div>
            <div>
              <dt>Why choose you?</dt>
              <dd>Positioning that makes sense in the context of the wider market.</dd>
            </div>
          </dl>
        </div>
      </section>
      {profile.background.length > 0 && (
        <section
          className="portfolio-wrap background-story"
          aria-labelledby="background-title"
        >
          <h2 id="background-title">My background</h2>
          <div>
            {profile.background.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}
      <section className="portfolio-wrap about-next" aria-labelledby="next-title">
        <div>
          <p className="inner-label">The next chapter</p>
          <h2 id="next-title">
            Good questions.
            <br />
            Thoughtful teams.
          </h2>
        </div>
        <div>
          <p className="inner-lead">
            I’m open to digital marketing opportunities with agencies, in-house teams and
            growing organisations.
          </p>
          <p>
            Explore the areas I focus on and the questions I bring to a website review.
          </p>
          <Link className="action" href="/services">
            Explore my expertise <span aria-hidden="true">↗</span>
          </Link>
          {hasContact && (
            <Link className="text-link" href="/contact">
              Get in touch
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
