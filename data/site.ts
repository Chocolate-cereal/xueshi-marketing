import { hasContact } from "./profile";

export const portfolioNavigation = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/#selected-work" },
  { label: "About", href: "/about" },
  ...(hasContact ? [{ label: "Contact", href: "/contact" }] : []),
];

export const caseStudyNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/services" },
];

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
    "Xue Shi’s digital marketing portfolio: paid search, international research and landing-page analysis.",
  navigation: portfolioNavigation,
};
