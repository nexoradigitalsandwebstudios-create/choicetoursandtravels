// Representative temples for the /devotional page. The client runs no fixed
// circuits: these show the range, and any combination can be arranged.

import { images, type SiteImage } from "./images";

export interface Temple {
  name: string;
  place: string;
  state: string;
  description: string;
  image: SiteImage;
}

export const temples: Temple[] = [
  {
    name: "Sri Padmanabhaswamy Temple",
    place: "Thiruvananthapuram",
    state: "Kerala",
    description:
      "Dedicated to Vishnu reclining on the serpent Anantha, in the heart of our home city. Entry is for Hindus only and a traditional dress code applies.",
    image: images.galleryLakshadeepam,
  },
  {
    name: "Azhimala Shiva Temple",
    place: "Azhimala, near Vizhinjam",
    state: "Kerala",
    description:
      "A seaside Shiva temple on the cliffs south of Kovalam, known for its giant Gangadhara sculpture of Shiva facing the sea. Close to Thiruvananthapuram.",
    image: images.templeAzhimala,
  },
  {
    name: "Kanyakumari Bhagavathy Amman Temple",
    place: "Kanyakumari",
    state: "Tamil Nadu",
    description:
      "The shrine of the goddess Kanya Kumari, standing on the shore at the southern tip of India.",
    image: images.templeKanyakumari,
  },
  {
    name: "Suchindram Thanumalayan Temple",
    place: "Suchindram",
    state: "Tamil Nadu",
    description:
      "Worships Shiva, Vishnu and Brahma together in a single form. Known for its musical pillars and its towering Hanuman.",
    image: images.templeSuchindram,
  },
  {
    name: "Ramanathaswamy Temple",
    place: "Rameswaram",
    state: "Tamil Nadu",
    description:
      "One of the twelve Jyotirlinga shrines of Shiva, with the longest pillared corridors of any temple in India.",
    image: images.templeRameswaram,
  },
  {
    name: "Meenakshi Amman Temple",
    place: "Madurai",
    state: "Tamil Nadu",
    description:
      "The great temple of Meenakshi and Sundareswarar, its towering gopurams covered in thousands of painted figures.",
    image: images.templeMadurai,
  },
  {
    name: "Guruvayur Sri Krishna Temple",
    place: "Guruvayur",
    state: "Kerala",
    description:
      "One of the most important Krishna temples in Kerala, home of Guruvayurappan. Entry is for Hindus only and a traditional dress code applies.",
    image: images.templeGuruvayur,
  },
];
