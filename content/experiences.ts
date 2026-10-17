// Special experiences, shown on the /tours page.

import { images, type SiteImage } from "./images";

export interface Experience {
  title: string;
  text: string;
  image: SiteImage;
}

export const experiences: Experience[] = [
  {
    title: "Kathakali performances",
    text: "An evening of Kerala's classical dance-drama: elaborate make-up, vivid costumes and stories from the epics told without words.",
    image: images.galleryKathakali,
  },
  {
    title: "Vallam and houseboat packages",
    text: "Drift through the backwaters on an overnight houseboat, or slip down narrow canals in a vallam, the traditional country boat.",
    image: images.galleryHouseboatSunset,
  },
  {
    title: "Forest and lake circuits",
    text: "Periyar Lake, the hills of Munnar and the forests of the Western Ghats, linked into one unhurried route.",
    image: images.galleryPeriyarBoat,
  },
  {
    title: "Temple heritage tours",
    text: "The great temples of Kerala and Tamil Nadu, their architecture and their stories, with a driver who knows the sites.",
    image: images.gallerySuchindramGopuram,
  },
];
