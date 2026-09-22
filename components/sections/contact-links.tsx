import { profile, hasContact } from "@/data/profile";
export function ContactLinks() {
  return (
    <div className="contact-links">
      {profile.email && (
        <a className="action" href={`mailto:${profile.email}`}>
          Email Xue
        </a>
      )}
      {profile.linkedIn && (
        <a className={profile.email ? "text-link" : "action"} href={profile.linkedIn}>
          LinkedIn
        </a>
      )}
      {profile.cv && (
        <a className={hasContact ? "text-link" : "action"} href={profile.cv} download>
          Download CV
        </a>
      )}
    </div>
  );
}
export function ContactSection() {
  if (!hasContact) return null;
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Let’s talk marketing.</h2>
      <div>
        <p>
          I’m open to digital marketing opportunities with agencies and in-house teams.
        </p>
        <ContactLinks />
      </div>
    </section>
  );
}
