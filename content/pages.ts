// Copy for the inner pages: /devotional, /tours, /about and /contact.
// The fleet page copy lives in fleet.ts.

import { images } from "./images";
import { site, statesServed, trustClaims, yearsOperating } from "./site";

export const devotionalPage = {
  metaTitle: "Devotional journeys and temple tours",
  metaDescription:
    "Temple trips across South India by car with an experienced driver, from Thiruvananthapuram: Padmanabhaswamy, Kanyakumari, Suchindram, Rameswaram, Madurai, Guruvayur and more.",
  hero: {
    image: images.pageDevotional,
    eyebrow: "Devotional journeys",
    heading: "Temple journeys at your own pace",
    intro: "We drive pilgrims to the great temples of South India, with time to pray and rest along the way.",
  },
  introHeading: "Any combination, any order",
  introText:
    "We do not run fixed circuits. Tell us the temples you wish to visit and the days you have, and we will plan the route and the timings around you. The temples below are only a few of the many we drive to; any combination can be arranged.",
  templesHeading: "A few of the temples we drive to",
  stepsHeading: "How it works",
  steps: [
    { title: "Call us", text: "Tell us which temples you would like to visit, your dates and how many are travelling." },
    { title: "We plan the route", text: "We suggest an order and timings that keep each day comfortable." },
    { title: "Travel with your driver", text: "Your driver stays with you for the whole journey, from pickup to drop." },
  ],
  trustHeading: "Why pilgrims travel with us",
  trust: [trustClaims.since, trustClaims.languages, trustClaims.knowledge, trustClaims.coverage],
  callHeading: "Speak to us about your pilgrimage",
  callText: "A short call is the easiest way to plan. We are happy to talk it through.",
};

export const toursPage = {
  metaTitle: "Tour packages: beaches, hills, wildlife and backwaters",
  metaDescription:
    "Tours across Kerala and South India by car with an experienced driver: Munnar, Thekkady, Alleppey houseboats, Kovalam, Varkala, Kanyakumari and Jatayu Earth's Center.",
  hero: {
    image: images.pageTours,
    eyebrow: "Tour packages",
    heading: "Beaches, hills, wildlife and backwaters",
    intro: "Holidays planned around the way you like to travel, with a driver who knows every road.",
  },
  introHeading: "Your trip, your way",
  // TODO: client to confirm typical package lengths (e.g. 3, 5 or 7 days) if
  // they want to mention them here.
  introText:
    "Choose a few places below, or tell us what you love and we will suggest a route. Every tour is private, with your own car and driver, and we plan the days to suit you.",
  destinationsHeading: "Destinations",
  experiencesHeading: "Special experiences",
  experiencesIntro: "Add a little more to your journey.",
};

export const aboutPage = {
  metaTitle: "About us",
  metaDescription: `Choice Travels has driven travellers across South India from ${site.city} since ${site.foundedYear}. Meet our drivers and see where we go.`,
  hero: {
    image: images.pageAbout,
    eyebrow: "About us",
    heading: `On the road since ${site.foundedYear}`,
    intro: `${yearsOperating} years of taking travellers across South India from ${site.city}.`,
  },
  storyHeading: "Our story",
  // TODO: client to supply the founding story: who started the business, why,
  // and how it has grown. The paragraphs below use only confirmed facts.
  story: [
    `Choice Travels began in ${site.city} in ${site.foundedYear} as a tour and car-rental operator, offering cars with experienced drivers to pilgrims, families and holidaymakers.`,
    `Today we cover all of South India from our Kerala base: ${statesServed.join(", ")}. Whatever the size of your group, we have a vehicle available year-round.`,
    // TODO: add a paragraph from the client about the founder and what makes
    // the business personal.
  ],
  driversHeading: "Our drivers",
  driversText:
    "Every journey is only as good as the person driving it. Our drivers are fluent in English and Hindi and know the routes and the sites, so they are guides as much as drivers.",
  coverageHeading: "Where we go",
  coverageText: `From ${site.city} we drive anywhere in South India. These are some of the places our journeys reach.`,
};

export const contactPage = {
  metaTitle: "Contact us",
  metaDescription: `Call or WhatsApp Choice Travels in ${site.city}, open 24 hours, for taxis, tours and temple trips across South India.`,
  eyebrow: "Contact",
  heading: "Let's plan your journey",
  intro: "Call or WhatsApp us any time. We are open 24 hours, every day.",
  mapHeading: "Our office",
};
