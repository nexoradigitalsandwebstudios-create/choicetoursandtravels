import Photo from "./Photo";
import type { Temple } from "@/content/temples";

// One temple on the devotional page. Photo on top, then large, plain text.
export default function TempleCard({ temple }: { temple: Temple }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-sand">
      <Photo image={temple.image} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[3/2]" />
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-xl lg:text-2xl">{temple.name}</h3>
        <p className="mt-0.5 font-semibold text-text-muted">
          {temple.place}, {temple.state}
        </p>
        <p className="mt-1.5">{temple.description}</p>
      </div>
    </article>
  );
}
