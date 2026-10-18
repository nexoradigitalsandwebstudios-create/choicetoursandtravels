// Copy for /tours-and-travels-trivandrum: the page written for people in
// Trivandrum searching for "tours and travels in TVM", "taxi in Trivandrum"
// and similar. It uses the city's names the way people type them:
// Trivandrum, TVM and Thiruvananthapuram.
//
// Only facts the client has confirmed go here. Never add prices.

import { images } from "./images";
import { site, yearsOperating } from "./site";

export interface Service {
  title: string;
  text: string;
  link: { label: string; href: string };
}

export const trivandrumPage = {
  path: "/tours-and-travels-trivandrum",
  hero: {
    eyebrow: "Trivandrum · Thiruvananthapuram",
    heading: "Tours and travels in Trivandrum",
    intro: `Taxis, tour packages and group travel from the heart of TVM, open 24 hours. A local travel agency since ${site.foundedYear}.`,
    image: images.destKovalam,
  },

  introHeading: "Your local travel agency in TVM",
  intro: [
    `${site.name} has been a tours and travels company in Trivandrum since ${site.foundedYear}. For ${yearsOperating} years we have driven families, pilgrims, friends and office groups from Thiruvananthapuram to temples, beaches, hills and backwaters across South India.`,
    "Our office is in Palayam, near Statue, in the city centre. Call us at any hour of the day or night and talk to someone who knows the roads.",
  ],

  servicesHeading: "What we do in Trivandrum",
  // TODO: client to confirm the airport and railway station pickup line.
  services: [
    {
      title: "Taxi service in Trivandrum",
      text: "A car with a driver for a few hours or a full day: city trips, shopping, hospital visits, functions, and pickups from Trivandrum airport and railway station.",
      link: { label: "See our vehicles", href: "/fleet" },
    },
    {
      title: "Kerala tour packages",
      text: "Multi-day trips from Trivandrum to Munnar, Thekkady, Alleppey, Kovalam, Varkala and Kanyakumari, planned around your dates, your group and your pace.",
      link: { label: "See tour packages", href: "/tours" },
    },
    {
      title: "Temple trips",
      text: "Pilgrimages to Sri Padmanabhaswamy, Azhimala, Kanyakumari, Suchindram, Rameswaram, Madurai, Guruvayur and more, with drivers who know the temple timings.",
      link: { label: "See devotional journeys", href: "/devotional" },
    },
    {
      title: "Group travel by van and bus",
      text: "A 12 seater Force Urbania or a 49 seater tourist bus for weddings, school and college trips, office outings and large families.",
      link: { label: "Contact us for groups", href: "/contact" },
    },
  ] satisfies Service[],

  placesHeading: "Popular trips from Trivandrum",
  placesIntro: "Day trips and short drives from Thiruvananthapuram that our guests book again and again.",
  /** Slugs from content/destinations.ts, in the order shown */
  places: [
    "kovalam",
    "neyyar-dam",
    "thirparappu-waterfalls",
    "varkala",
    "kappil",
    "kanyakumari",
    "jatayu-earths-center",
    "munnar",
  ],

  whyHeading: "Why people in Trivandrum choose us",
  why: [
    `On the road since ${site.foundedYear}, from our own office in Palayam`,
    "Open 24 hours, every day of the year",
    "Experienced drivers who speak English and Hindi",
    "Drivers who know the routes, the temples and the sights",
    "Small cars to 49 seater buses, so any group size fits",
    "Trips anywhere in South India: Kerala, Tamil Nadu, Karnataka, Andhra Pradesh and Telangana",
  ],

  faqHeading: "Tours and travels in TVM: common questions",
};
