import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/45">
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-semibold tracking-[-0.02em] text-foreground">
            Xueshi Marketing
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted">
            A personal digital marketing portfolio focused on evidence-led analysis and
            clear growth recommendations.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
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
