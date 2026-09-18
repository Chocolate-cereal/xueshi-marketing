"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const caseStudyPath = "/case-studies/member-first-credit-union-green-car-loan";

export function Footer() {
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith(caseStudyPath);

  return (
    <footer
      className={cn(
        "border-t border-border bg-surface/45",
        !isCaseStudy && "marketingFooter",
      )}
    >
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end">
        {isCaseStudy ? (
          <div>
            <p className="font-semibold tracking-[-0.02em] text-foreground">
              Xueshi Marketing
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              A personal digital marketing portfolio focused on evidence-led analysis and
              clear growth recommendations.
            </p>
          </div>
        ) : (
          <div className="footerSignature">
            <div className="footerSignatureMark" aria-hidden="true">
              X
            </div>
            <div>
              <p className="footerSignatureName">Xueshi Marketing</p>
              <p className="footerSignatureText">
                A considered digital marketing portfolio for clearer growth decisions.
              </p>
            </div>
          </div>
        )}

        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="footerLink text-sm font-medium text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="border-t border-border pt-6 text-xs text-muted lg:col-span-2">
          © {new Date().getFullYear()} Xueshi Marketing. Built with care and clear intent.
        </p>
      </Container>
    </footer>
  );
}
