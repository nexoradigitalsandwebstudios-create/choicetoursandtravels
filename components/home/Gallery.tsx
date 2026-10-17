import Photo from "../Photo";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import GalleryGrid from "./GalleryGrid";
import { galleryItems } from "@/content/gallery";
import { galleryIntro } from "@/content/home";

// How wide each tile is on screen, by size, for the photo's `sizes` attribute.
const tileSizes = {
  normal: "(min-width: 1024px) 22vw, 50vw",
  tall: "(min-width: 1024px) 22vw, 50vw",
  wide: "(min-width: 1024px) 45vw, 100vw",
  big: "(min-width: 1024px) 45vw, 100vw",
};

/**
 * Homepage section 9. An editorial grid of 12 photos with mixed sizes, built
 * with plain CSS grid (no masonry library). Clicking a photo opens it larger.
 *
 * The thumbnails are rendered here on the server, then handed to GalleryGrid,
 * which adds the click handling and the lightbox.
 */
export default function Gallery() {
  const items = galleryItems.map((item) => ({
    size: item.size,
    image: item.image,
    thumbnail: (
      <Photo
        image={item.image}
        sizes={tileSizes[item.size]}
        className="absolute inset-0"
        imageClassName="transition-transform duration-700 group-hover:scale-105"
      />
    ),
  }));

  return (
    <section aria-labelledby="gallery-heading" className="section-pad bg-sand">
      <div className="content-width">
        <Reveal>
          <SectionHeading id="gallery-heading" eyebrow={galleryIntro.eyebrow} title={galleryIntro.heading} />
        </Reveal>
        <Reveal delay={0.1} className="mt-6 lg:mt-8">
          <GalleryGrid items={items} />
        </Reveal>
      </div>
    </section>
  );
}
