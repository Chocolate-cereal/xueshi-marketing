import Link from "next/link";
import { ContactLinks } from "@/components/sections/contact-links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About Xue Shi",
  "Xue Shi’s background in digital marketing, paid search, international research and customer operations.",
  "/about",
);

const marketingExperience = [
  {
    company: "Majorel · Google client",
    role: "Senior Advertising Campaign Optimiser",
    dates: "Aug 2022 – Nov 2023",
    details: [
      "Optimised Google Search and Display campaigns for international markets.",
      "Researched markets, localised campaign messaging and reviewed landing-page relevance.",
      "Supported quality calibration and colleague onboarding as a senior team member.",
    ],
  },
  {
    company: "IMS Health Co., Ltd. · China",
    role: "Marketing & Sales Coordinator",
    dates: "Jun 2018 – Jun 2020",
    details: [
      "Prepared reports and supported day-to-day marketing and sales coordination.",
      "Used CRM segmentation and market research to help teams understand audiences and opportunities.",
    ],
  },
];

const additionalExperience = [
  {
    company: "Covalen · Meta client",
    role: "Community Operations Analyst",
    dates: "Mar 2025 – Present",
    details:
      "Review account-integrity and impersonation cases, contribute to workflow calibration, and support quality checks and onboarding.",
  },
  {
    company: "TLScontact",
    role: "Visa & Immigration Officer",
    dates: "May 2024 – Dec 2024",
    details:
      "Handled visa and immigration applications with close attention to documentation accuracy and clear applicant communication.",
  },
];

const skills = [
  "Paid search",
  "Campaign optimisation",
  "Market research",
  "Localisation",
  "Landing-page analysis",
  "CRM segmentation",
  "Quality assurance",
  "Training & onboarding",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="portfolio-wrap about-intro" aria-labelledby="about-title">
        <div>
          <p className="portfolio-eyebrow">About Xue</p>
          <h1 id="about-title">
            A marketer with
            <br />
            <span>a cross-market perspective.</span>
          </h1>
        </div>
        <div className="about-intro-copy">
          <p className="about-lead">
            I’m Xue Shi, a digital marketing professional with experience in paid search,
            campaign optimisation and international market research.
          </p>
          <p>
            My work has also taken me through customer operations and service roles.
            They’ve strengthened how I communicate, work carefully with detail and support
            consistent quality—skills I bring to marketing teams too.
          </p>
          <ContactLinks />
        </div>
      </section>

      <section className="about-education" aria-labelledby="education-title">
        <div className="portfolio-wrap education-inner">
          <div>
            <p className="portfolio-eyebrow">Education</p>
            <h2 id="education-title">Building a digital foundation.</h2>
          </div>
          <article className="education-entry">
            <p className="education-dates">2020 – 2021</p>
            <div>
              <h3>MSc Digital Marketing</h3>
              <p>University College Dublin</p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="portfolio-wrap experience-section"
        aria-labelledby="marketing-experience-title"
      >
        <div className="experience-heading">
          <p className="portfolio-eyebrow">Marketing experience</p>
          <h2 id="marketing-experience-title">
            Campaigns, research
            <br />
            and customer insight.
          </h2>
        </div>
        <div className="experience-list">
          {marketingExperience.map((item) => (
            <article className="experience-entry" key={item.company}>
              <div className="experience-entry-heading">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <p className="experience-dates">{item.dates}</p>
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="additional-experience" aria-labelledby="additional-title">
        <div className="portfolio-wrap additional-inner">
          <div>
            <p className="portfolio-eyebrow">Additional experience</p>
            <h2 id="additional-title">A broader set of strengths.</h2>
            <p className="additional-intro">
              These roles are a different part of my story. They’ve built transferable
              skills in careful review, clear communication, sound judgement and
              quality-focused work.
            </p>
          </div>
          <div className="additional-list">
            {additionalExperience.map((item) => (
              <article className="additional-entry" key={item.company}>
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <p className="experience-dates">{item.dates}</p>
                <p className="additional-detail">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-wrap skills-section" aria-labelledby="skills-title">
        <div>
          <p className="portfolio-eyebrow">Skills</p>
          <h2 id="skills-title">What I work with</h2>
        </div>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="about-close">
        <div className="portfolio-wrap about-close-inner">
          <div>
            <p className="portfolio-eyebrow">Next step</p>
            <h2>Looking for a thoughtful, hands-on marketer?</h2>
          </div>
          <div>
            <p>
              I’m open to digital marketing opportunities with agency and in-house teams.
            </p>
            <ContactLinks />
            <Link className="portfolio-text-link" href="/">
              Back to selected work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
