import PhoneIcon from "./icons/PhoneIcon";
import { site } from "@/content/site";

/**
 * Devotional pages only: a call button pinned to the bottom of the screen on
 * phones and tablets, so calling is always one tap away. Hidden on desktop.
 * globals.css adds matching space at the bottom of the page so it never
 * covers the footer.
 */
export default function CallBar() {
  return (
    <div className="surface-dark fixed inset-x-0 bottom-0 z-40 border-t border-sand/15 px-3 pt-1.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={site.phoneHref}
        className="tap-target flex w-full items-center justify-center gap-1.5 rounded-control bg-accent-fill px-3 text-base font-semibold text-on-accent"
      >
        <PhoneIcon className="h-3 w-3" />
        Call us to plan your trip
      </a>
    </div>
  );
}
