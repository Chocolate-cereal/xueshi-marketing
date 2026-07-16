import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.navigation.map((item) => ({ url: `${siteConfig.url}${item.href}`, lastModified: new Date(), changeFrequency: "monthly", priority: item.href === "/" ? 1 : 0.7 }));
}
