import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    ...(siteConfig.url ? { alternates: { canonical: `${siteConfig.url}${path}` } } : {}),
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(siteConfig.url ? { url: `${siteConfig.url}${path}` } : {}),
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
