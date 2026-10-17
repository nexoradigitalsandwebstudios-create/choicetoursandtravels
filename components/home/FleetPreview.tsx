import Link from "next/link";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import VehicleCard from "../VehicleCard";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { vehicles } from "@/content/fleet";
import { fleetPreview } from "@/content/home";
import { site } from "@/content/site";

/**
 * Homepage section 4. Short and simple: any group size is fine, small cars
 * to big buses, with a few example vehicles. No prices, no spec sheets.
 */
export default function FleetPreview() {
  return (
    <section aria-labelledby="fleet-heading" className="section-pad bg-sand">
      <div className="content-width">
        <Reveal className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="fleet-heading"
            eyebrow={fleetPreview.eyebrow}
            title={fleetPreview.heading}
            intro={fleetPreview.intro}
          />
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-6 items-center gap-1 font-semibold underline decoration-accent decoration-2 underline-offset-[6px]"
            >
              <PhoneIcon className="h-2.5 w-2.5" />
              Call to book
            </a>
            <Link
              href="/fleet"
              className="inline-flex min-h-6 items-center gap-1 font-semibold underline decoration-accent decoration-2 underline-offset-[6px]"
            >
              {fleetPreview.linkLabel}
              <ArrowRightIcon className="h-2.5 w-2.5" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-6 grid grid-cols-2 gap-1.5 sm:gap-3 lg:mt-10 lg:grid-cols-4">
            {vehicles.map((vehicle) => (
              <li key={vehicle.name}>
                <VehicleCard vehicle={vehicle} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
