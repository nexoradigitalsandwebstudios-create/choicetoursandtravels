import JsonLd from "./JsonLd";
import { images } from "@/content/images";
import { site, statesServed } from "@/content/site";

/**
 * Tells Google exactly who this business is, for local searches like
 * "tours and travels in Trivandrum": a travel agency in Palayam,
 * Thiruvananthapuram, open 24 hours, with its phone numbers, map location,
 * Google Maps listing and the areas it covers. Rendered on the homepage.
 *
 * The name, address and phone here must match the Google Business Profile
 * exactly; Google trusts a business more when they agree everywhere.
 */
export default function TravelAgencyJsonLd() {
  const businessId = `${site.url}/#business`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": businessId,
        name: site.name,
        alternateName: ["Choice Tours and Travels", "Choice Tours & Travels Trivandrum"],
        description: site.description,
        url: site.url,
        logo: new URL("/logo/choice-tours-travels-logo.png", site.url).toString(),
        image: new URL(images.heroSunset.src, site.url).toString(),
        foundingDate: String(site.foundedYear),
        telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.addressLines.slice(0, 2).join(", "),
          addressLocality: "Thiruvananthapuram",
          addressRegion: "Kerala",
          postalCode: "695001",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: site.mapLatitude, longitude: site.mapLongitude },
        hasMap: site.googleMapsUrl,
        sameAs: [site.googleMapsUrl],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          { "@type": "City", name: "Thiruvananthapuram" },
          ...statesServed.map((state) => ({ "@type": "State", name: state })),
        ],
        knowsLanguage: ["en", "hi"],
        makesOffer: [
          "Taxi service in Trivandrum",
          "Car hire with driver",
          "Innova Crysta hire",
          "Force Urbania hire",
          "Tourist bus hire",
          "Kerala tour packages",
          "Temple tour packages",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en-IN",
        publisher: { "@id": businessId },
      },
    ],
  };

  return <JsonLd data={data} />;
}
