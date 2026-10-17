// Business details used across the whole site: header, footer, enquiry
// section, contact page and the search-engine data (JSON-LD).
//
// Change a phone number, the address or the hours here and every page
// updates. Anything marked TODO is still needed from the client.

export interface PhoneNumber {
  /** What people tap: "tel:" plus the number in international format */
  href: string;
  /** How the number is shown on screen */
  display: string;
}

export interface SiteInfo {
  name: string;
  foundedYear: number;
  city: string;
  state: string;
  /** Short description used in the footer and as the default meta description */
  description: string;
  /** Main booking number. Used by every "Call" button. */
  phoneHref: string;
  phoneDisplay: string;
  /** Every number to show where we list contact details, main number first */
  phones: PhoneNumber[];
  /** WhatsApp number in international format WITHOUT the plus, e.g. "919876543210" */
  whatsappNumber: string;
  email: string;
  /** Office address, one line per array item */
  addressLines: string[];
  officeHours: string;
  /** Live website address, used for links shared on social media and Google */
  url: string;
  /** Office location, used for the map and for Google's structured data */
  mapLatitude: number;
  mapLongitude: number;
  /** The office's Google Maps link, opened by "Get directions" */
  mapsLink: string;
  /** Search text that makes the embedded Google map drop its pin on the office */
  mapsQuery: string;
}

export const site: SiteInfo = {
  name: "Choice Tours & Travels",
  foundedYear: 2005,
  city: "Thiruvananthapuram",
  state: "Kerala",
  description:
    "Car hire with experienced drivers for temple trips, holidays and group travel across South India. Based in Thiruvananthapuram, Kerala, since 2005.",

  phoneHref: "tel:+919447471478",
  phoneDisplay: "+91 94474 71478",
  phones: [
    { href: "tel:+919447471478", display: "+91 94474 71478" },
    { href: "tel:+919744957050", display: "+91 97449 57050" },
  ],

  whatsappNumber: "919447471478",

  email: "choicetravelstvm@gmail.com",

  addressLines: ["TC 25/3421, Surya Building, Uppalam Road", "Statue, Palayam", "Thiruvananthapuram, Kerala 695001"],

  officeHours: "Open 24 hours, every day",

  // TODO: replace with the live domain once it is registered.
  url: "https://www.example.com",

  mapLatitude: 8.496108,
  mapLongitude: 76.9458487,
  mapsLink: "https://share.google/sQb0HP74ZNmomS3GE",
  mapsQuery: "CHOICE TOURS & TRAVELS, Surya Building, Uppalam Rd, Thiruvananthapuram",
};

/** Link that opens a WhatsApp chat with the office, with a friendly first line ready to send */
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  `Hello ${site.name}, I would like to plan a trip.`,
)}`;

/** Google map of the office with a pin, for an <iframe>. No API key needed. */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;

/** Years in operation, worked out from the founding year at build time */
export const yearsOperating = new Date().getFullYear() - site.foundedYear;

/**
 * Trust claims supplied by the client. These may be used word for word
 * anywhere on the site.
 */
export const trustClaims = {
  since: "Operating since 2005",
  languages: "Drivers fluent in English and Hindi",
  knowledge: "Drivers knowledgeable about routes and sites",
  coverage: "Coverage across all South Indian states",
  availability: "Vehicles available year-round",
};

/** The five South Indian states the client covers */
export const statesServed = ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Telangana"];
