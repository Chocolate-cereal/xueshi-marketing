import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export default function NotFound() {
  return <Container className="py-24"><Heading>Page not found.</Heading><p className="mt-4 max-w-xl text-muted">The page you requested does not exist or has moved.</p><Button href="/" className="mt-8">Return home</Button></Container>;
}
