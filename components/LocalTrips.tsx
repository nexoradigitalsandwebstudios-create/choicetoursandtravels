import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";
import MapPinIcon from "./icons/MapPinIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { localTrips } from "@/content/localTrips";
import { whatsappLink } from "@/content/site";

/**
 * A compact list of short local trips around Trivandrum (Shanghumugham,
 * Ponmudi and so on), with a WhatsApp button to book one. Text only, no
 * photos, so it stays light. Sits inside a section that has its own <h2>.
 */
export default function LocalTrips() {
  return (
    <Reveal className="content-width">
      <div className="rounded-card border border-ink/15 bg-sand p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl lg:text-2xl">{localTrips.heading}</h3>
            <p className="mt-1 text-text-muted">{localTrips.intro}</p>
          </div>
          <ButtonLink href={whatsappLink(localTrips.whatsappMessage)} className="self-start lg:self-auto">
            <WhatsAppIcon className="h-3 w-3" />
            {localTrips.whatsappLabel}
          </ButtonLink>
        </div>

        <ul className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3">
          {localTrips.trips.map((trip) => (
            <li key={trip.name} className="flex gap-1.5">
              <MapPinIcon className="mt-0.5 h-2.5 w-2.5 shrink-0 text-accent" />
              <div>
                <h4 className="font-sans font-semibold">{trip.name}</h4>
                <p className="text-sm text-text-muted">{trip.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
