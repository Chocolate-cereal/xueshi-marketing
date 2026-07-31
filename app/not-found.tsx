import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/sections/content-section";
import { Heading } from "@/components/ui/heading";

export default function NotFound() {
  return (
    <ContentSection className="py-20 sm:py-28">
      <div className="rounded-2xl border border-border bg-surface p-8 shadow-soft sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Error 404
        </p>
        <Heading className="mt-5">This page could not be found.</Heading>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted">
          The page you requested may have moved, or the address may be incomplete. Use the
          homepage to continue exploring the portfolio.
        </p>
        <Button href="/" className="mt-8">
          Return home
        </Button>
      </div>
    </ContentSection>
  );
}
