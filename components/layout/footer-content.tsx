"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { caseStudyNavigation, portfolioNavigation } from "@/data/site";
import { ContactLinks } from "@/components/sections/contact-links";
import { ThemeToggle } from "./theme-toggle";

const caseStudyPrefix = "/case-studies/member-first-credit-union-green-car-loan";

export function FooterIdentity() {
  const isCaseStudyPage = usePathname().startsWith(caseStudyPrefix);
  return (
    <>
      <Link className="wordmark" href="/">
        {isCaseStudyPage ? (
          <>
            Xueshi<span> Marketing</span>
          </>
        ) : (
          "Xue"
        )}
      </Link>
      <p>
        {isCaseStudyPage ? "SEO, websites & research." : "Digital marketing portfolio."}
      </p>
    </>
  );
}

export function FooterNavigation() {
  const isCaseStudyPage = usePathname().startsWith(caseStudyPrefix);
  const navigation = isCaseStudyPage ? caseStudyNavigation : portfolioNavigation;
  return (
    <>
      <nav aria-label="Footer navigation">
        {navigation
          .filter(({ href }) => href !== "/")
          .map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
      </nav>
      <ThemeToggle />
      <p className="copyright">
        © {new Date().getFullYear()} {isCaseStudyPage ? "Xueshi Marketing" : "Xue Shi"}
      </p>
    </>
  );
}

export function FooterContactLinks() {
  const isCaseStudyPage = usePathname().startsWith(caseStudyPrefix);
  return isCaseStudyPage ? null : <ContactLinks />;
}
