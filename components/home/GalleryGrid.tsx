"use client";

import { useState, type ReactNode } from "react";
import Lightbox from "./Lightbox";
import type { GalleryItem } from "@/content/gallery";
import type { SiteImage } from "@/content/images";

interface GalleryGridItem {
  size: GalleryItem["size"];
  image: SiteImage;
  /** The thumbnail photo, already rendered by the server */
  thumbnail: ReactNode;
}

// Grid cell spans for each tile size. Written out in full so Tailwind sees them.
const spanClasses = {
  normal: "",
  wide: "col-span-2",
  tall: "row-span-2",
  big: "col-span-2 row-span-2",
};

export default function GalleryGrid({ items }: { items: GalleryGridItem[] }) {
  // Index of the photo open in the lightbox, or null when it is closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid auto-rows-[9rem] grid-cols-2 gap-1 sm:auto-rows-[14rem] lg:auto-rows-[15rem] lg:grid-cols-4 lg:gap-2">
        {items.map((item, index) => (
          <li key={item.image.src} className={spanClasses[item.size]}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block h-full w-full overflow-hidden rounded-card bg-sand-deep"
            >
              {item.thumbnail}
              <span className="sr-only">Open larger photo: {item.image.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        images={items.map((item) => item.image)}
        openIndex={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}
