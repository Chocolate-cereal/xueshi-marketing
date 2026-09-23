import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";
import { ContactLinks } from "@/components/sections/contact-links";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="portfolio-wrap footer-inner">
        <div>
          <Link className="wordmark" href="/">
            Xueshi<span> Marketing</span>
          </Link>
          <p>SEO, websites & research.</p>
          <ContactLinks />
        </div>
        <div>
          <nav aria-label="Footer navigation">
            {siteConfig.navigation
              .filter(({ href }) => href !== "/")
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
          </nav>
          <ThemeToggle />
          <p className="copyright">© {new Date().getFullYear()} Xueshi Marketing</p>
        </div>
      </div>
    </footer>
  );
}
