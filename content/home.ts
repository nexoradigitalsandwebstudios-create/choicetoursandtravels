// Homepage copy, section by section, in the order the sections appear.

import { images } from "./images";
import { site, statesServed, trustClaims, yearsOperating } from "./site";

export const hero = {
  lockup: `Since ${site.foundedYear}`,
  // Plain words on purpose: many visitors read English as a second language.
  // The photo already says "temples", so the words cover every kind of trip.
  headline: "Travel South India in comfort",
  subhead:
    "Cars, vans and buses with experienced, friendly drivers. Book a taxi for a day, or a full tour for a week.",
  primaryCta: { label: "Devotional journeys", href: "/devotional" },
  secondaryCta: { label: "Tour packages", href: "/tours" },
  highlights: ["Open 24 hours", "Drivers speak English and Hindi", `Based in ${site.city}`],
};

export interface Stat {
  value: string;
  label: string;
}

export const since: { eyebrow: string; heading: string; stats: Stat[] } = {
  eyebrow: trustClaims.since,
  heading: `${yearsOperating} years of knowing the road`,
  stats: [
    { value: String(yearsOperating), label: "years on the road" },
    { value: String(statesServed.length), label: "South Indian states" },
    { value: "24/7", label: "open every day" },
    { value: "4–49", label: "seats, from cars to buses" },
  ],
};

export interface Door {
  /** "devotional" gives a gold accent, "leisure" a terracotta one */
  accent: "devotional" | "leisure";
  eyebrow: string;
  heading: string;
  sentence: string;
  linkLabel: string;
  href: string;
}

export const doors: { heading: string; devotional: Door; leisure: Door } = {
  heading: "Two ways to travel with us",
  devotional: {
    accent: "devotional",
    eyebrow: "Pilgrimage",
    heading: "Devotional journeys",
    sentence:
      "Relaxed temple trips anywhere in South India, with a driver who knows the way.",
    linkLabel: "Explore temple journeys",
    href: "/devotional",
  },
  leisure: {
    accent: "leisure",
    eyebrow: "Holidays",
    heading: "Tour packages",
    sentence: "Beaches, tea hills, wildlife and backwaters, planned around the way you like to travel.",
    linkLabel: "Explore tour packages",
    href: "/tours",
  },
};

export const fleetPreview = {
  eyebrow: "Our vehicles",
  heading: "Any group size, we have a vehicle",
  intro:
    "From small cars to big buses. Just tell us how many of you are travelling, and we will send the right vehicle with an experienced driver.",
  linkLabel: "See all vehicles",
};

export const destinationsIntro = {
  eyebrow: "Destinations",
  heading: "Where we can take you",
  intro: "A few favourite places in Kerala and Tamil Nadu. We drive to all of them, and anywhere else in South India.",
};

export const jatayu = {
  eyebrow: "Our signature trip",
  heading: "Jatayu Earth's Center",
  image: images.jatayuStory,
  blocks: [
    {
      title: "A legend carved in stone",
      text: "In the Ramayana, the great bird Jatayu fought Ravana to rescue Sita and fell, wounded, to the earth. Local tradition holds that he fell on this rock at Chadayamangalam, in Kollam district.",
    },
    {
      title: "A sculpture on the summit",
      text: "On the summit lies a vast sculpture of Jatayu with one wing outstretched, among the largest bird sculptures in the world. A cable car carries visitors up the rock to see it close at hand.",
    },
    {
      title: "An easy day from Thiruvananthapuram",
      text: "Jatayu Earth's Center is an easy day trip from our base, and it pairs well with the cliffs at Varkala or the quiet beach at Kappil on the same day.",
    },
  ],
  linkLabel: "Plan a Jatayu day trip",
  href: "/tours/jatayu-earths-center",
};

export const drivers = {
  eyebrow: "Our drivers",
  heading: "Your driver is also your guide",
  intro:
    "The person behind the wheel is the heart of every trip. Our drivers know the roads of South India, the stories behind the sites, and how to make long days on the road feel easy.",
  claims: [
    {
      icon: "language" as const,
      title: "Fluent in English and Hindi",
      text: "Ask questions, change plans or simply chat along the way. Nothing gets lost in translation.",
    },
    {
      icon: "route" as const,
      title: "Route and local knowledge",
      text: "Drivers knowledgeable about routes and sites: which road to take, when to arrive, and what each place is known for.",
    },
    {
      icon: "shield" as const,
      title: "Verified and long-serving",
      // TODO: client to confirm what driver verification covers (licence
      // checks, police verification) and typical years of service, so this
      // line can be made more specific.
      text: "Every driver is verified before they drive for us, so you know who is taking you on the road.",
    },
  ],
};

export const kathakali = {
  quote: "Evenings of Kathakali, nights on a houseboat. The Kerala travellers remember.",
  linkLabel: "Traditional experiences",
  href: "/tours#experiences",
};

export const galleryIntro = {
  eyebrow: "Gallery",
  heading: "Scenes from the road",
};

export const enquiryIntro = {
  eyebrow: "Plan your journey",
  heading: "Call us for a quote",
  // Rates move with the season, so the phone is the main action here.
  text: "Rates change with the season, the route and the vehicle, so the quickest way to a price is a short call or a WhatsApp message. We are open 24 hours.",
  mapHeading: "Our office",
};
