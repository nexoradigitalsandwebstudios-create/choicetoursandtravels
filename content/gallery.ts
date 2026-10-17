// The 12 homepage gallery photos, in display order.
//
// `size` controls how many grid cells a photo covers:
//   normal = 1 column x 1 row     wide = 2 columns x 1 row
//   tall   = 1 column x 2 rows    big  = 2 columns x 2 rows
//
// The order below is planned so the grid fills with no gaps on both the
// 4-column desktop and the 2-column mobile layout (1 big, 3 tall, 2 wide and
// 6 normal = 20 cells = 5 full rows of 4). If you swap photos, keep each
// size in the same position, or check the grid afterwards for holes.

import { images, type SiteImage } from "./images";

export interface GalleryItem {
  image: SiteImage;
  size: "normal" | "wide" | "tall" | "big";
}

export const galleryItems: GalleryItem[] = [
  { image: images.galleryKathakali, size: "big" },
  { image: images.galleryLakshadeepam, size: "tall" },
  { image: images.galleryMunnarMist, size: "normal" },
  { image: images.galleryCountryBoat, size: "normal" },
  { image: images.galleryVarkalaSunset, size: "wide" },
  { image: images.galleryElephants, size: "normal" },
  { image: images.gallerySuchindramGopuram, size: "tall" },
  { image: images.galleryPeriyarBoat, size: "normal" },
  { image: images.galleryMunnarTea, size: "tall" },
  { image: images.galleryHouseboatCanal, size: "normal" },
  { image: images.galleryHouseboatSunset, size: "normal" },
  { image: images.galleryWaterfall, size: "wide" },
];
