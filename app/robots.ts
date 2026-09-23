import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
export default function robots(): MetadataRoute.Robots {
  return siteConfig.url
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteConfig.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
