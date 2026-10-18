// Search engine (SEO) copy for the whole site, in one place.
//
// The client's goal: show up when people in Trivandrum search for things like
// "best tours and travels in TVM", "taxi in Trivandrum" or "Kerala tour
// packages". Google matches the words on the page, so the place names people
// actually type (Trivandrum, TVM, Thiruvananthapuram) appear in titles,
// descriptions, headings and the visible text, written for people first.
//
// Guidelines for editing:
// - Titles: most important words first. Inner pages get " | Choice Tours &
//   Travels" added automatically, so keep them under about 40 characters.
// - Descriptions: under about 155 characters, one or two plain sentences.
// - Never stuff keywords; every sentence should still read naturally.

import { site } from "./site";

export interface PageSeo {
  title: string;
  description: string;
}

export const seo = {
  home: {
    // The full title (no template): this is the page most searches land on.
    title: "Choice Tours & Travels | Tours and Travels in Trivandrum, Kerala",
    description:
      "Trusted tours and travels in Trivandrum (TVM) since 2005. Taxi, Innova, Urbania and bus hire with experienced drivers. Open 24 hours.",
  },
  trivandrum: {
    title: "Tours and Travels in Trivandrum (TVM)",
    description:
      "Tours and travels in Trivandrum since 2005: taxi service, local sightseeing, temple trips and Kerala tour packages from Thiruvananthapuram. Open 24 hours.",
  },
  devotional: {
    title: "Temple Tours from Trivandrum",
    description:
      "Temple trips from Trivandrum by car or bus with experienced drivers: Padmanabhaswamy, Azhimala, Kanyakumari, Rameswaram, Madurai, Guruvayur and more.",
  },
  tours: {
    title: "Kerala Tour Packages from Trivandrum",
    description:
      "Kerala and South India tour packages from Trivandrum: Munnar, Thekkady, Alleppey, Kovalam, Varkala, Kanyakumari and more, with your own car and driver.",
  },
  fleet: {
    title: "Car, Van and Bus Hire in Trivandrum",
    description:
      "Hire a Dzire, Innova Crysta, Force Urbania or 49 seater tourist bus with an experienced driver in Trivandrum. Any group size. Open 24 hours.",
  },
  about: {
    title: "About Us: Tours and Travels in Trivandrum",
    description: `${site.name} has taken travellers across South India from Trivandrum (Thiruvananthapuram) since 2005. Meet our drivers and see where we go.`,
  },
  contact: {
    title: "Contact Us: Taxi in Trivandrum, Open 24 Hours",
    description:
      "Call +91 94474 71478 or WhatsApp Choice Tours & Travels, Palayam, Trivandrum. Open 24 hours for taxi hire, sightseeing and tour packages.",
  },
} satisfies Record<string, PageSeo>;

/** Destination page title and description, e.g. "Munnar Trip from Trivandrum" */
export function destinationSeo(name: string, note: string): PageSeo {
  return {
    title: `${name} Trip from Trivandrum`,
    description: `${note} Plan a ${name} trip from Trivandrum with your own car and an experienced driver.`,
  };
}

/** Search phrases people use. Shown to search engines in the keywords tag. */
export const keywords = [
  "tours and travels in Trivandrum",
  "tours and travels in TVM",
  "best tours and travels in Trivandrum",
  "travel agency Trivandrum",
  "taxi service Trivandrum",
  "taxi in Thiruvananthapuram",
  "Innova for rent Trivandrum",
  "Urbania for rent Trivandrum",
  "tourist bus hire Trivandrum",
  "Kerala tour packages from Trivandrum",
  "Trivandrum sightseeing taxi",
  "temple tour packages Trivandrum",
  "Choice Tours and Travels",
];

export interface Faq {
  question: string;
  answer: string;
}

// Questions people really ask before booking. Shown on the homepage and the
// Trivandrum page, and given to Google as FAQ structured data.
// TODO: client to confirm the airport and railway station pickup line.
export const faqs: Faq[] = [
  {
    question: "Do you provide taxi service in Trivandrum?",
    answer:
      "Yes. We provide cars, vans and buses with experienced drivers for local trips in Trivandrum (Thiruvananthapuram), airport and railway station pickups, sightseeing, and outstation trips anywhere in South India.",
  },
  {
    question: "Are you open 24 hours?",
    answer:
      "Yes, we are open 24 hours, every day. Call +91 94474 71478 or +91 97449 57050, or send us a WhatsApp message at any time.",
  },
  {
    question: "Which vehicles can I hire?",
    answer:
      "We run everything from small cars to big buses: Maruti Dzire (up to 4 passengers), Innova Crysta (up to 7), Force Urbania (12 seater) and a 49 seater tourist bus. Larger groups can be arranged on request.",
  },
  {
    question: "Do your drivers speak English and Hindi?",
    answer:
      "Yes. Our drivers are fluent in English and Hindi, and they know the routes and the places you visit, so they double as your guide.",
  },
  {
    question: "Can you arrange temple trips from Trivandrum?",
    answer:
      "Yes. We drive pilgrims to Sri Padmanabhaswamy Temple, Azhimala Shiva Temple, Kanyakumari, Suchindram, Rameswaram, Madurai Meenakshi, Guruvayur and many more. Any combination of temples can be arranged.",
  },
  {
    question: "Which places can we visit near Trivandrum?",
    answer:
      "Popular trips from Trivandrum include Kovalam, Varkala, Kappil, Neyyar Dam, Thirparappu Waterfalls, Jatayu Earth's Center and Kanyakumari. Longer tours go to Munnar, Thekkady and the Alleppey backwaters.",
  },
  {
    question: "How much does a trip cost?",
    answer:
      "Rates depend on the season, the route and the vehicle, so we quote each trip individually. A short call or WhatsApp message is the quickest way to a price.",
  },
  {
    question: "Where is your office in Trivandrum?",
    answer: `Our office is at ${site.addressLines.join(", ")}, near Statue and Palayam in the city centre.`,
  },
];
