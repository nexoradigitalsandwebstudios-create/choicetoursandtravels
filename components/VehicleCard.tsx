import Photo from "./Photo";
import type { Vehicle } from "@/content/fleet";

// One vehicle: photo, name and seats. Used on the homepage and the fleet page.
export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card bg-sand-deep">
      <Photo
        image={vehicle.image}
        sizes="(min-width: 1024px) 22vw, 50vw"
        className="aspect-[4/3]"
        imageClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="px-1.5 py-1.5 sm:px-2.5 sm:py-2">
        <h3 className="text-lg leading-tight sm:text-xl">{vehicle.name}</h3>
        <p className="mt-0.5 text-sm text-text-muted">{vehicle.seats}</p>
      </div>
    </article>
  );
}
