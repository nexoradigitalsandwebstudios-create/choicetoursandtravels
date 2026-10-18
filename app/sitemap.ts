import type { MetadataRoute } from "next";
import { destinations } from "@/content/destinations";
import { site } from "@/content/site";
import { trivandrumPage } from "@/content/trivandrum";

// Generates /sitemap.xml for search engines. New destinations in
// content/destinations.ts are added automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", trivandrumPage.path, "/devotional", "/tours", "/fleet", "/about", "/contact", "/credits"];
  const destinationPages = destinations.map((destination) => `/tours/${destination.slug}`);

  return [...pages, ...destinationPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    // The homepage and the Trivandrum page are the ones local searches land on.
    priority: path === "" ? 1 : path === trivandrumPage.path ? 0.9 : path === "/credits" ? 0.3 : 0.7,
  }));
}
