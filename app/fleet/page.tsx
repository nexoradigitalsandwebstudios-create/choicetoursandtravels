import type { Metadata } from "next";
import BigPhoneLink from "@/components/BigPhoneLink";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VehicleCard from "@/components/VehicleCard";
import CheckIcon from "@/components/icons/CheckIcon";
import { fleetPage, vehicles } from "@/content/fleet";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our vehicles",
  description:
    "Cars, vans and buses with experienced drivers, for any group size: Dzire, Innova Crysta, 12 seater vans and 49 seater buses. Available 24 hours.",
  alternates: { canonical: "/fleet" },
  openGraph: { title: `Our vehicles | ${site.name}`, url: "/fleet", images: [{ url: images.pageFleet.src, alt: images.pageFleet.alt }] },
};

export default function FleetPage() {
  return (
    <main id="main">
      <PageHero eyebrow={fleetPage.eyebrow} heading={fleetPage.heading} intro={fleetPage.intro} image={images.pageFleet} />

      <section aria-labelledby="vehicles-heading" className="section-pad bg-sand">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="vehicles-heading" title={fleetPage.vehiclesHeading} intro={fleetPage.vehiclesText} />
          </Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-1.5 sm:gap-3 lg:mt-10 lg:grid-cols-4">
            {vehicles.map((vehicle) => (
              <li key={vehicle.name}>
                <Reveal className="h-full">
                  <VehicleCard vehicle={vehicle} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The client publishes no prices because rates move with the season.
          Never add a price, fare or per-km figure here. */}
      <section aria-labelledby="included-heading" className="surface-dark section-pad">
        <div className="content-width grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SectionHeading id="included-heading" title={fleetPage.includedHeading} tone="dark" />
            <ul className="mt-4 flex flex-col gap-2">
              {fleetPage.included.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-lg">
                  <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:self-center">
            <h3 className="text-xl">{fleetPage.ratesHeading}</h3>
            <p className="mt-1 text-lg text-sand/90">{fleetPage.ratesText}</p>
            <div className="mt-4">
              <BigPhoneLink />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
