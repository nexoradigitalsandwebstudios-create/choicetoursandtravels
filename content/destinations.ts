// The featured destinations. Used by the homepage rail, the /tours page
// and the individual /tours/[slug] pages.
//
// The slug is the last part of the page address: /tours/munnar.
// Changing a slug changes the page address, so avoid it once the site is live.

import { images, type SiteImage } from "./images";

export interface Destination {
  slug: string;
  name: string;
  /** One word shown on the card */
  category: "Landmark" | "Hills" | "Wildlife" | "Beach" | "Backwaters" | "Waterfall" | "Lake";
  /** Short line for cards and search results */
  note: string;
  image: SiteImage;
  /** Opening paragraph on the destination page */
  intro: string;
  highlights: string[];
  /** A suggestion of what pairs well with this place on the same trip */
  pairsWith: string;
  /** Slugs of related destinations shown at the bottom of the page */
  related: string[];
}

export const destinations: Destination[] = [
  {
    slug: "jatayu-earths-center",
    name: "Jatayu Earth's Center",
    category: "Landmark",
    note: "A giant sculpture of the mythical bird Jatayu on a rock summit, reached by cable car.",
    image: images.destJatayu,
    intro:
      "At Chadayamangalam in Kollam district, a vast stone sculpture of Jatayu lies across a rocky hilltop. In the Ramayana, Jatayu fought Ravana to save Sita; local tradition holds that he fell on this very rock. A cable car carries visitors to the summit for the sculpture and wide views over the countryside.",
    highlights: [
      "The Jatayu sculpture, among the largest bird sculptures in the world",
      "Cable car ride up the rock",
      "Views across the hills of Kollam district",
      "The Ramayana legend told on site",
    ],
    pairsWith: "An easy day trip from Thiruvananthapuram that pairs well with Varkala or Kappil.",
    related: ["varkala", "kappil", "kovalam"],
  },
  {
    slug: "munnar",
    name: "Munnar",
    category: "Hills",
    note: "Tea estates and viewpoints high in the Western Ghats.",
    image: images.destMunnar,
    intro:
      "Munnar sits high in the Western Ghats, its hills combed into rows of tea. Cool air, winding roads and viewpoints over the valleys make it Kerala's best-loved hill station.",
    highlights: [
      "Drives through the tea estates",
      "Eravikulam National Park, home of the Nilgiri tahr",
      "Mattupetty Dam and lake",
      "Top Station viewpoint",
    ],
    pairsWith: "Combines well with Thekkady on the same trip.",
    related: ["thekkady", "alleppey", "kovalam"],
  },
  {
    slug: "thekkady",
    name: "Thekkady",
    category: "Wildlife",
    note: "Periyar Tiger Reserve, with boat rides and animal sightings on the lake.",
    image: images.destThekkady,
    intro:
      "Thekkady is the gateway to the Periyar Tiger Reserve. Boat trips on Periyar Lake give the best chance of seeing elephants, gaur and deer at the water's edge, and the hills around are planted with spices.",
    highlights: [
      "Boat ride on Periyar Lake",
      "Chances to see elephants, gaur and deer",
      "Spice plantations around Kumily",
      "Guided nature walks in the reserve",
    ],
    pairsWith: "Sits between Munnar and the backwaters, so it fits neatly into a longer Kerala tour.",
    related: ["munnar", "alleppey", "jatayu-earths-center"],
  },
  {
    slug: "kovalam",
    name: "Kovalam",
    category: "Beach",
    note: "Lighthouse Beach, a short drive from Thiruvananthapuram.",
    image: images.destKovalam,
    intro:
      "Kovalam's crescent beaches are the closest to our base in Thiruvananthapuram. The red and white lighthouse on the headland watches over Lighthouse Beach, with calmer coves on either side.",
    highlights: [
      "Lighthouse Beach and the lighthouse viewpoint",
      "Hawa Beach and Samudra Beach",
      "Sunset over the Arabian Sea",
      "Easy half-day trip from the city",
    ],
    pairsWith: "Easy to combine with Kanyakumari on a drive down the coast.",
    related: ["kanyakumari", "varkala", "kappil"],
  },
  {
    slug: "varkala",
    name: "Varkala",
    category: "Beach",
    note: "A cliff-top beach above the Arabian Sea.",
    image: images.destVarkala,
    intro:
      "At Varkala, red laterite cliffs drop straight to the sand. A path runs along the clifftop above the beach, and the Janardhana Swamy Temple stands nearby.",
    highlights: [
      "The North Cliff walk",
      "Papanasam beach below the cliffs",
      "Janardhana Swamy Temple",
      "Sunsets from the clifftop",
    ],
    pairsWith: "Pairs well with Kappil and Jatayu Earth's Center.",
    related: ["kappil", "jatayu-earths-center", "kovalam"],
  },
  {
    slug: "kappil",
    name: "Kappil",
    category: "Beach",
    note: "A quiet beach where the backwater meets the sea.",
    image: images.destKappil,
    intro:
      "Just north of Varkala, at Kappil, a backwater lake runs right up to the beach, with only a strip of sand between still water and the open sea.",
    highlights: [
      "Backwater and sea side by side",
      "A quiet, uncrowded beach",
      "Boating on the backwater",
      "Close to Varkala",
    ],
    pairsWith: "Easy to visit on the same day as Varkala.",
    related: ["varkala", "jatayu-earths-center", "alleppey"],
  },
  {
    slug: "kanyakumari",
    name: "Kanyakumari",
    category: "Landmark",
    note: "The southern tip of India, famous for sunrise and sunset over the sea.",
    image: images.destKanyakumari,
    intro:
      "Kanyakumari stands at the southern tip of India, where the Arabian Sea, the Bay of Bengal and the Indian Ocean meet. Visitors gather on the shore to watch the sun rise and set over the water.",
    highlights: [
      "Sunrise and sunset over the sea",
      "Vivekananda Rock Memorial",
      "Thiruvalluvar Statue",
      "Kanyakumari Bhagavathy Amman Temple",
    ],
    pairsWith: "Combines well with Suchindram temple and Kovalam.",
    related: ["kovalam", "varkala", "jatayu-earths-center"],
  },
  {
    slug: "alleppey",
    name: "Alleppey",
    category: "Backwaters",
    note: "Houseboat and vallam trips through palm-lined backwaters.",
    image: images.destAlleppey,
    intro:
      "Alleppey (Alappuzha) is the heart of Kerala's backwaters: a web of canals, lakes and rivers lined with coconut palms. See it from a houseboat over a night or two, or from a small vallam, the traditional country boat, for a few hours.",
    highlights: [
      "Overnight houseboat stays",
      "Vallam (country boat) trips through narrow canals",
      "Vembanad Lake",
      "Alappuzha beach",
    ],
    pairsWith: "A natural last stop after the hills of Munnar and Thekkady.",
    related: ["munnar", "thekkady", "kappil"],
  },
  {
    slug: "thirparappu-waterfalls",
    name: "Thirparappu Waterfalls",
    category: "Waterfall",
    note: "A wide waterfall on the Kodayar river, with a pool to bathe in below.",
    image: images.destThirparappu,
    intro:
      "At Thirparappu in Kanyakumari district, the Kodayar river spreads across a broad rock shelf and falls into a wide pool. Families come to bathe in the shallow water below the falls, and an old Shiva temple, the Thirparappu Mahadevar Temple, stands beside the river.",
    highlights: [
      "A broad waterfall on the Kodayar river",
      "Shallow pool for bathing below the falls",
      "Thirparappu Mahadevar Temple on the riverbank",
      "An easy day trip from Thiruvananthapuram",
    ],
    pairsWith: "Combines well with Padmanabhapuram Palace and Kanyakumari on the same trip.",
    related: ["kanyakumari", "neyyar-dam", "kovalam"],
  },
  {
    slug: "neyyar-dam",
    name: "Neyyar Dam",
    category: "Lake",
    note: "A calm reservoir in the forest, with boat rides and Western Ghats views.",
    image: images.destNeyyar,
    intro:
      "Neyyar Dam holds back the Neyyar river in the foothills of the Western Ghats, close to Thiruvananthapuram. The reservoir sits inside the Neyyar Wildlife Sanctuary, with forested hills all around and the peaks of the Ghats in the distance.",
    highlights: [
      "Boat rides on the reservoir",
      "Forest and hill views in the Neyyar Wildlife Sanctuary",
      "Deer park and crocodile centre near the dam",
      "A short drive from Thiruvananthapuram",
    ],
    pairsWith: "A relaxed half-day trip from the city, easy to add to a Kovalam or Thirparappu day.",
    related: ["thirparappu-waterfalls", "kovalam", "jatayu-earths-center"],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}
