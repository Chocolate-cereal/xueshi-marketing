import { hasContact } from "./profile";
import { publishedProjects } from "./projects";

// Set only after the owner confirms the production origin. No guessed domain.
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
function getOrigin(value: string | undefined) {
  if (!value) return undefined;
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an HTTPS origin without a path or credentials.",
    );
  }
  return url.origin;
}
export const siteConfig = {
  name: "Xueshi Marketing",
  url: getOrigin(configuredOrigin),
  description:
    "Xue’s digital marketing portfolio: SEO, landing page optimisation and competitor research.",
  navigation: [
    { label: "Home", href: "/" },
    ...(publishedProjects.length ? [{ label: "Work", href: "/case-studies" }] : []),
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/services" },
    ...(hasContact ? [{ label: "Contact", href: "/contact" }] : []),
  ],
};
