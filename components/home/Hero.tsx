import ButtonLink from "../ButtonLink";
import Photo from "../Photo";
import CheckIcon from "../icons/CheckIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { hero } from "@/content/home";
import { images } from "@/content/images";
import { site } from "@/content/site";

/**
 * Homepage section 1. Sri Padmanabhaswamy Temple at sunrise over the temple
 * tank, with a slow zoom towards the gopuram. One still photo, never a carousel.
 *
 * The text is placed around the photo so it never covers the temple:
 * - desktop: the photo fills the screen; the gopuram sits left of centre, so
 *   the text sits on the right, over the sky and palms, on a dark fade
 * - phones: the photo fills the top of the screen, framed on the temple,
 *   with the text underneath on ink
 */
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="surface-dark relative overflow-hidden lg:h-svh lg:min-h-[40rem]">
      {/* Photo: a block on phones, the full background on desktop */}
      <div className="relative h-[58svh] min-h-[20rem] lg:absolute lg:inset-0 lg:h-full">
        {/* The largest thing on screen, so it loads first (highPriority).
            It is the only homepage photo that does. */}
        <Photo
          image={images.heroSunset}
          sizes="100vw"
          highPriority
          className="absolute inset-0"
          imageClassName="hero-ken-burns"
        />

        {/* Dark fades, so the header and the text always stay readable:
            - top: behind the header
            - bottom (phones): blends the photo into the text panel below
            - right (desktop): behind the text, leaving the temple untouched */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-ink/70 to-ink/0" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink to-ink/0 lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[62%] bg-linear-to-l from-ink/90 via-ink/65 via-55% to-ink/0 lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 hidden h-1/4 bg-linear-to-t from-ink/50 to-ink/0 lg:block"
        />
      </div>

      {/* Text: below the photo on phones, on the right on desktop. Its right
          edge lines up with the page's content column. */}
      <div className="content-width relative z-10 -mt-10 pb-10 lg:mt-0 lg:flex lg:h-full lg:items-center lg:justify-end lg:pb-0">
        <div className="lg:w-[36rem] lg:max-w-[42%] lg:pt-8">
          <p className="flex items-center gap-1.5 text-sm font-semibold tracking-[0.18em] uppercase text-sand/90">
            <span aria-hidden="true" className="h-px w-5 bg-accent" />
            {hero.lockup}
          </p>
          <h1 id="hero-heading" className="mt-2 text-hero">
            {hero.headline}
          </h1>
          <p className="mt-2 max-w-xl text-lg text-sand/90">{hero.subhead}</p>

          <div className="mt-4 flex flex-col gap-1.5 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <a
            href={site.phoneHref}
            className="mt-3 inline-flex min-h-6 items-center gap-1.5 text-lg font-semibold"
          >
            <PhoneIcon className="h-3 w-3 text-accent" />
            <span>
              Call now <span className="underline decoration-accent decoration-2 underline-offset-[6px]">{site.phoneDisplay}</span>
            </span>
          </a>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-sand/20 pt-3 text-sm text-sand/90">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-1">
                <CheckIcon className="h-2 w-2 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
