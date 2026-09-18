"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import styles from "./header.module.css";

const primaryNavigation = siteConfig.navigation.filter((item) => item.label !== "Contact");
const caseStudyPath = "/case-studies/member-first-credit-union-green-car-loan";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isCaseStudy = pathname.startsWith(caseStudyPath);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header
      className={cn(styles.header, !isCaseStudy && styles.publicHeader)}
      data-case-study={isCaseStudy ? "true" : undefined}
    >
      <div className={styles.inner}>
        {isCaseStudy ? (
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            <span className={styles.brandMark} aria-hidden="true">
              X
            </span>
            <span>
              Xueshi <span className={styles.brandMuted}>Marketing</span>
            </span>
          </Link>
        ) : (
          <Link
            href="/"
            className={cn(styles.brand, styles.publicBrand)}
            onClick={() => setOpen(false)}
          >
            <span className={styles.brandMark} aria-hidden="true">
              <span>X</span>
              <span className={styles.brandRule} />
            </span>
            <span className={styles.brandCopy}>
              <span className={styles.brandName}>Xueshi</span>
              <span className={styles.brandMuted}>Marketing / portfolio</span>
            </span>
          </Link>
        )}

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(styles.navLink, isActive(item.href) && styles.navLinkActive)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/contact" className={styles.contactButton}>
            Let&apos;s talk
            {!isCaseStudy ? <span aria-hidden="true">↗</span> : null}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={styles.mobilePanel} data-open={open}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(styles.mobileLink, isActive(item.href) && styles.mobileLinkActive)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobilePanelFooter}>
          <ThemeToggle />
          <Link href="/contact" className={styles.contactButton} onClick={() => setOpen(false)}>
            Let&apos;s talk
            {!isCaseStudy ? <span aria-hidden="true">↗</span> : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
