import type { MetadataRoute } from "next";
import { destinations } from "@/content/destinations";
import { site } from "@/content/site";

// Generates /sitemap.xml for search engines. New destinations in
// content/destinations.ts are added automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/devotional", "/tours", "/fleet", "/about", "/contact", "/credits"];
  const destinationPages = destinations.map((destination) => `/tours/${destination.slug}`);

  return [...pages, ...destinationPages].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
