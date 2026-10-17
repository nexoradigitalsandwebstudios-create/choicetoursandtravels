import ButtonLink from "../ButtonLink";
import Photo from "../Photo";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { jatayu } from "@/content/home";

/**
 * Homepage section 6. The client's main attraction gets its own section.
 *
 * Desktop: the photo on the left stays pinned while the text on the right
 * scrolls past it, then lets go when the section ends. This is plain CSS
 * position: sticky, not scroll-jacking. Phones: photo above text, not sticky.
 */
export default function JatayuStory() {
  return (
    <section aria-labelledby="jatayu-heading" className="surface-dark section-pad">
      <div className="content-width grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Why top: 20vh? The photo is 60vh tall, so 20vh above it and 20vh
            below centres it on the screen, and 20vh is always more than the
            fixed header's height, so the header never covers it.
            self-start stops the grid stretching this column, which would
            leave sticky with no room to move. */}
        <div className="lg:sticky lg:top-[20vh] lg:self-start">
          <Photo
            image={jatayu.image}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] rounded-card lg:aspect-auto lg:h-[60vh]"
          />
        </div>

        <div className="lg:py-[10vh]">
          <Reveal>
            <SectionHeading id="jatayu-heading" eyebrow={jatayu.eyebrow} title={jatayu.heading} tone="dark" />
          </Reveal>

          <ol className="mt-6 flex flex-col gap-6 lg:mt-12 lg:gap-24">
            {jatayu.blocks.map((block, index) => (
              <li key={block.title}>
                <Reveal>
                  <p aria-hidden="true" className="font-heading text-3xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl lg:text-2xl">{block.title}</h3>
                  <p className="mt-1.5 max-w-xl text-lg text-sand/90">{block.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-8 lg:mt-16">
            <ButtonLink href={jatayu.href}>{jatayu.linkLabel}</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
