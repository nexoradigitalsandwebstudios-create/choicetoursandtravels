import Link from "next/link";
import Photo from "../Photo";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import type { Door } from "@/content/home";
import type { SiteImage } from "@/content/images";

interface DoorPanelProps {
  door: Door;
  image: SiteImage;
}

// One half of the Two Doors section. data-accent gives the devotional panel a
// gold accent and the tours panel a terracotta one.
export default function DoorPanel({ door, image }: DoorPanelProps) {
  return (
    <div data-accent={door.accent} className="door">
      <div className="door-media">
        <Photo
          image={image}
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="absolute inset-0"
          imageClassName="door-image"
        />
      </div>

      {/* Dims this panel while the other one is hovered (desktop only) */}
      <div aria-hidden="true" className="door-dim absolute inset-0 bg-ink-deep" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-ink/90 via-ink/55 to-ink/0" />

      <div className="relative flex h-full flex-col justify-end p-3 sm:p-6 lg:p-8">
        {/* On desktop the text is sized to fit the panel at its narrowest
            (38% of the screen, minus padding). The width depends only on the
            screen, not the panel, so the text never re-wraps mid-animation. */}
        <div className="w-full max-w-md lg:w-[min(28rem,calc(38vw-8rem))] lg:max-w-none">
          <span aria-hidden="true" className="block h-0.5 w-6 bg-accent" />
          <p className="mt-2 text-sm font-semibold tracking-[0.14em] uppercase text-sand/85">{door.eyebrow}</p>
          <h3 className="mt-1 text-2xl lg:text-3xl">{door.heading}</h3>
          <p className="mt-1.5 text-lg text-sand/90">{door.sentence}</p>
          {/* The link stretches over the whole panel (after:absolute inset-0),
              so the panel is one big tap target, while the link text stays
              short for screen readers. */}
          <Link
            href={door.href}
            className="mt-3 inline-flex min-h-6 items-center gap-1 font-semibold underline decoration-accent decoration-2 underline-offset-[6px] after:absolute after:inset-0"
          >
            {door.linkLabel}
            <ArrowRightIcon className="h-2.5 w-2.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
