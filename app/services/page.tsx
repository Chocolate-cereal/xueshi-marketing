import { capabilities } from "@/data/profile";
import { ContactSection } from "@/components/sections/contact-links";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Marketing expertise",
  "Explore Xue’s approach to SEO, landing page analysis and competitor research.",
  "/services",
);
export default function ServicesPage() {
  return (
    <div className="portfolio-wrap interior-page">
      <p className="page-label">Areas of focus</p>
      <h1>
        Search. Experience.
        <br />
        <span>Understanding.</span>
      </h1>
      <p className="lead page-intro">
        Three connected ways to look at a website: how people find it, how it communicates
        and where it sits in the market.
      </p>
      <div className="capability-details">
        {capabilities.map((item) => (
          <section key={item.title}>
            <h2>{item.title}</h2>
            <div>
              <p className="lead">{item.description}</p>
              <p>{item.detail}</p>
            </div>
          </section>
        ))}
      </div>
      <ContactSection />
    </div>
  );
}
