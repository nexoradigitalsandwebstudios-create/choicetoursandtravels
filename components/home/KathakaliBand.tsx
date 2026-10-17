import Link from "next/link";
import { getImageProps } from "next/image";
import Photo from "../Photo";
import Reveal from "../Reveal";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { kathakali } from "@/content/home";
import { images } from "@/content/images";

/**
 * Homepage section 8. A short line about traditional experiences over a
 * Kathakali performer, with a heavy ink scrim.
 *
 * On desktop the photo is a fixed-attachment CSS background, so the text
 * glides over a still image as you scroll. That effect is expensive and
 * unreliable on phones (especially iOS Safari), so below 1024px, and for
 * anyone with reduced motion on, a normal lazy-loaded photo is used instead.
 * The switch happens in CSS: see .band-fixed-bg in globals.css.
 */
export default function KathakaliBand() {
  const image = images.kathakaliBand;

  // An optimised 1920px-wide version of the photo for the CSS background.
  const { props: backgroundProps } = getImageProps({
    src: image.src,
    alt: "",
    width: 1920,
    height: Math.round((1920 * image.height) / image.width),
  });

  return (
    <section className="surface-dark relative flex min-h-[60vh] items-center overflow-hidden py-12">
      {/* Phones and reduced motion: a normal photo. alt="" because it is
          decorative; the quote carries the meaning. */}
      <Photo image={image} alt="" sizes="100vw" className="band-scroll-photo absolute inset-0" />

      {/* Desktop: fixed background. Hidden (and so never downloaded) on phones. */}
      <div
        aria-hidden="true"
        className="band-fixed-bg absolute inset-0"
        style={{ backgroundImage: `url(${backgroundProps.src})` }}
      />

      {/* 70% ink keeps the quote above 4.5:1 contrast even over the
          brightest part of the photo. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/70" />

      <Reveal className="content-width relative text-center">
        <p className="mx-auto max-w-3xl font-heading text-2xl lg:text-3xl">{kathakali.quote}</p>
        <Link
          href={kathakali.href}
          className="mt-4 inline-flex min-h-6 items-center gap-1 font-semibold underline decoration-accent decoration-2 underline-offset-[6px]"
        >
          {kathakali.linkLabel}
          <ArrowRightIcon className="h-2.5 w-2.5" />
        </Link>
      </Reveal>
    </section>
  );
}
