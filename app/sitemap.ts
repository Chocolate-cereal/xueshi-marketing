import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { publishedProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  const paths = new Set([
    ...siteConfig.navigation.map(({ href }) => href.split("#")[0]),
    ...publishedProjects.map(({ slug }) => "/case-studies/" + slug),
    "/projects/krave-marketing-strategy",
  ]);
  return [...paths].map((path) => ({ url: siteConfig.url + path }));
}
