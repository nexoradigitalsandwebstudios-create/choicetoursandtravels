import MapPinIcon from "./icons/MapPinIcon";
import { mapEmbedUrl, site } from "@/content/site";

/**
 * Google map with a pin on the office, plus a "Get directions" button.
 *
 * Performance: the map is an <iframe> with loading="lazy", so the browser
 * only starts loading Google Maps when the visitor scrolls close to it, never
 * during the first page load. Its box has a fixed shape (aspect ratio), so
 * nothing jumps when it appears.
 */
export default function OfficeMap({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const border = tone === "dark" ? "border-sand/15 bg-ink-deep" : "border-text/10 bg-sand-deep";
  const button =
    tone === "dark"
      ? "border-sand/70 text-sand hover:bg-ink-deep"
      : "border-ink text-ink hover:bg-sand-deep";

  return (
    <div>
      <iframe
        title={`Map showing the ${site.name} office in ${site.city}`}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`block aspect-[4/3] w-full rounded-card border ${border}`}
      />
      <a
        href={site.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`tap-target mt-2 inline-flex items-center gap-1 rounded-control border px-3 py-1 font-semibold ${button}`}
      >
        <MapPinIcon className="h-2.5 w-2.5" />
        Get directions
      </a>
    </div>
  );
}
