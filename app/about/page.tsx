import Image from "next/image";
import { profile } from "@/data/profile";
import { ContactLinks, ContactSection } from "@/components/sections/contact-links";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Xue",
  "Meet Xue and explore her focus on search visibility, landing pages and digital marketing research.",
  "/about",
);
export default function AboutPage() {
  return (
    <div className="portfolio-wrap interior-page">
      <p className="page-label">About me</p>
      <h1>
        I’m Xue.
        <br />
        <span>A curious eye for marketing.</span>
      </h1>
      <div className="reading-layout">
        <div className="section-aside">
          <p>
            SEO. Landing pages.
            <br />
            Competitor research.
          </p>
          {profile.location && <p>{profile.location}</p>}
        </div>
        <div className="prose">
          <p className="lead">
            I’m a digital marketer focused on how websites are found and how clearly they
            communicate.
          </p>
          <p>
            My work centres on SEO, landing page optimisation, website performance and
            competitor research. I use research and structured analysis to identify issues
            and recommend practical next steps.
          </p>
          {profile.background.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2>What I’m looking for</h2>
          <p>
            I’m open to digital marketing opportunities with agencies, in-house teams and
            growing organisations.
          </p>
          <ContactLinks />
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
      <ContactSection />
    </div>
  );
}
