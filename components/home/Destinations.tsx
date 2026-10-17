import DestinationCard from "../DestinationCard";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import DestinationRail from "./DestinationRail";
import { destinations } from "@/content/destinations";
import { destinationsIntro } from "@/content/home";

/**
 * Homepage section 5. A horizontal rail of portrait destination cards. Scrolling is
 * the browser's own (with scroll-snap), not a custom drag script.
 *
 * The cards are rendered here on the server and handed to DestinationRail,
 * which only adds the arrows and the progress bar.
 */
export default function Destinations() {
  return (
    <section aria-labelledby="destinations-heading" className="section-pad bg-sand-deep">
      <Reveal className="content-width">
        <SectionHeading
          id="destinations-heading"
          eyebrow={destinationsIntro.eyebrow}
          title={destinationsIntro.heading}
          intro={destinationsIntro.intro}
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-6 lg:mt-8">
        <DestinationRail label="Destinations" itemCount={destinations.length}>
          {destinations.map((destination) => (
            <li key={destination.slug} className="w-[72vw] shrink-0 snap-start sm:w-[20rem] lg:w-[22rem]">
              <DestinationCard destination={destination} sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 72vw" />
            </li>
          ))}
        </DestinationRail>
      </Reveal>
    </section>
  );
}
