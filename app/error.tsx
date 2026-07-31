"use client";

import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/sections/content-section";
import { Heading } from "@/components/ui/heading";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ContentSection className="py-20 sm:py-28">
      <div className="rounded-2xl border border-border bg-surface p-8 shadow-soft sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Page error
        </p>
        <Heading className="mt-5">Something went wrong.</Heading>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted">
          Please try again. If the issue continues, the page will be reviewed as part of
          ongoing site maintenance.
        </p>
        <Button onClick={reset} className="mt-8">
          Try again
        </Button>
      </div>
    </ContentSection>
  );
}
