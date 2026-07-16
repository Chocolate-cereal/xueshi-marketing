"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <Container className="py-24"><Heading>Something went wrong.</Heading><p className="mt-4 max-w-xl text-muted">Please try again. If the issue continues, the page will be reviewed as part of ongoing site maintenance.</p><Button onClick={reset} className="mt-8">Try again</Button></Container>;
}
