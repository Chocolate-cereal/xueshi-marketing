import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { publishedProjects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  return [
    ...siteConfig.navigation.map(({ href }) => href),
    ...publishedProjects.map(({ slug }) => `/case-studies/${slug}`),
  ].map((path) => ({ url: `${siteConfig.url}${path}` }));
}
