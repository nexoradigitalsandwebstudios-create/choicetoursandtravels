import Photo from "./Photo";
import type { SiteImage } from "@/content/images";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  intro?: string;
  /** Leave out for a plain ink band with no photo */
  image?: SiteImage;
}

/**
 * The dark band at the top of every inner page, holding the page's <h1>.
 * Every page starts dark so the transparent header is always readable.
 */
export default function PageHero({ eyebrow, heading, intro, image }: PageHeroProps) {
  return (
    <section
      className={`surface-dark relative flex items-end overflow-hidden ${
        image ? "min-h-[70svh]" : "pt-16 lg:pt-20"
      }`}
    >
      {image && (
        <>
          {/* The main photo of the page, so it loads first. */}
          <Photo image={image} sizes="100vw" highPriority className="absolute inset-0" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-ink/60 to-ink/0" />
          {/* Full height on phones, where the text covers most of the photo;
              the lower two-thirds on desktop. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-ink/90 via-ink/65 to-ink/25 lg:h-2/3 lg:from-ink/85 lg:via-ink/50 lg:to-ink/0"
          />
        </>
      )}

      <div className="content-width relative pt-16 pb-8 lg:pb-12">
        <p className="flex items-center gap-1.5 text-sm font-semibold tracking-[0.14em] uppercase text-sand/90">
          <span aria-hidden="true" className="h-px w-4 bg-accent" />
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-4xl text-2xl sm:text-3xl lg:text-4xl">{heading}</h1>
        {intro && <p className="mt-2 max-w-2xl text-lg text-sand/90">{intro}</p>}
      </div>
    </section>
  );
}
