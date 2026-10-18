import { site } from "@/content/site";

export interface Crumb {
  name: string;
  /** Path on this site, e.g. "/tours" */
  path: string;
}

/**
 * Breadcrumb structured data, so Google can show "Home > Tour packages >
 * Munnar" under a search result instead of a bare web address.
 */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...crumbs].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}
