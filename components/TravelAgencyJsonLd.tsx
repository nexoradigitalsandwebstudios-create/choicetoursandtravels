import { images } from "@/content/images";
import { site, statesServed } from "@/content/site";

/**
 * Structured data that tells Google this is a travel agency: where it is,
 * how to call, when it is open and which states it covers. Rendered once,
 * on the homepage.
 */
export default function TravelAgencyJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(images.heroSunset.src, site.url).toString(),
    foundingDate: String(site.foundedYear),
    telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLines.slice(0, 2).join(", "),
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: "695001",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.mapLatitude, longitude: site.mapLongitude },
    hasMap: site.mapsLink,
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: statesServed.map((state) => ({ "@type": "State", name: state })),
    knowsLanguage: ["en", "hi"],
  };

  // React writes this text into the <script> as-is. We replace "<" so the
  // script tag can never be closed early by anything in the content.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json">{json}</script>;
}
