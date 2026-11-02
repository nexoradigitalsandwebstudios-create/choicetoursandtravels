import ButtonLink from "../ButtonLink";
import Photo from "../Photo";
import Reveal from "../Reveal";
import PhoneIcon from "../icons/PhoneIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { taxiService } from "@/content/home";
import { site, whatsappHref } from "@/content/site";

/**
 * Homepage section 2. The 24 hour taxi service, the client's strongest
 * point, on a gold band right after the hero.
 *
 * An Innova on the left and a Dzire on the right, both facing the words in
 * the middle:
 * - tablet and desktop: car | words | car, in one row
 * - phones: the two cars side by side, with the words underneath
 */
export default function TaxiService() {
  return (
    <section aria-labelledby="taxi-heading" className="section-pad bg-accent-fill text-on-accent">
      <div className="content-width grid grid-cols-2 items-center gap-x-1.5 gap-y-5 md:grid-cols-[1fr_minmax(0,1.3fr)_1fr] md:gap-x-4 lg:gap-x-8">
        <Reveal className="md:order-1">
          <Photo
            image={taxiService.leftImage}
            sizes="(min-width: 768px) 28vw, 50vw"
            className="aspect-[4/3] rounded-card ring-1 ring-ink/15"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-last col-span-2 text-center md:order-2 md:col-span-1">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-[0.14em] uppercase">
            {/* A softly pulsing "live" dot: always open */}
            <span aria-hidden="true" className="live-dot relative h-1 w-1 shrink-0 rounded-full bg-ink" />
            {taxiService.status}
          </p>
          <h2 id="taxi-heading" className="mt-1.5 text-3xl text-ink lg:text-4xl">
            {taxiService.heading}
          </h2>
          <p className="mx-auto mt-1.5 max-w-md text-lg">{taxiService.text}</p>
          <div className="mt-3 flex flex-col items-center justify-center gap-1.5 sm:flex-row">
            <ButtonLink href={site.phoneHref} variant="ink">
              <PhoneIcon className="h-3 w-3" />
              {taxiService.callLabel}
            </ButtonLink>
            <ButtonLink href={whatsappHref} variant="outline-dark">
              <WhatsAppIcon className="h-3 w-3" />
              {taxiService.whatsappLabel}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:order-3">
          <Photo
            image={taxiService.rightImage}
            sizes="(min-width: 768px) 28vw, 50vw"
            className="aspect-[4/3] rounded-card ring-1 ring-ink/15"
          />
        </Reveal>
      </div>
    </section>
  );
}
