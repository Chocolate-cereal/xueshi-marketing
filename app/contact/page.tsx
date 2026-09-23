import { notFound } from "next/navigation";
import { hasContact, profile } from "@/data/profile";
import { ContactLinks } from "@/components/sections/contact-links";
import { pageMetadata } from "@/lib/metadata";
export const metadata = {
  ...pageMetadata(
    "Contact Xue",
    "Contact Xue about digital marketing opportunities.",
    "/contact",
  ),
  ...(!hasContact ? { robots: { index: false, follow: false } } : {}),
};
export default function ContactPage() {
  if (!hasContact) notFound();
  return (
    <div className="portfolio-wrap interior-page">
      <p className="page-label">Contact</p>
      <h1>
        Let’s talk
        <br />
        <span>marketing.</span>
      </h1>
      <div className="prose contact-copy">
        <p className="lead">
          I’m open to digital marketing opportunities with agencies and in-house teams.
        </p>
        <p>Tell me about your team, the role or project, and any relevant timing.</p>
        <ContactLinks />
        {profile.email && <p className="email-address">{profile.email}</p>}
      </div>
    </div>
  );
}
