import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Generates /robots.txt: every page may be crawled, and points to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
