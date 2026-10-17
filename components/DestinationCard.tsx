import Link from "next/link";
import Photo from "./Photo";
import type { Destination } from "@/content/destinations";

interface DestinationCardProps {
  destination: Destination;
  /** How wide the card is on screen, passed on to the photo */
  sizes: string;
}

// Portrait 3:4 card: full-bleed photo with the name and category over a
// dark scrim at the bottom. Links to the destination page.
export default function DestinationCard({ destination, sizes }: DestinationCardProps) {
  return (
    <Link
      href={`/tours/${destination.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-card bg-ink text-sand"
    >
      <Photo
        image={destination.image}
        sizes={sizes}
        className="absolute inset-0"
        imageClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-ink/90 via-ink/50 to-ink/0" />
      <span className="absolute inset-x-0 bottom-0 flex flex-col p-3">
        <span className="text-sm font-semibold tracking-[0.14em] uppercase text-sand/90">{destination.category}</span>
        <span className="mt-0.5 font-heading text-xl lg:text-2xl">{destination.name}</span>
      </span>
    </Link>
  );
}
