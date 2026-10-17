// The vehicles shown on the homepage and the fleet page. Kept short on
// purpose: the message is "any group size is fine", not a spec sheet.
//
// No prices anywhere: rates move with the season, so every card leads to a call.

import { images, type SiteImage } from "./images";

export interface Vehicle {
  name: string;
  /** Short line under the name, e.g. "Up to 4 passengers" */
  seats: string;
  image: SiteImage;
}

export const vehicles: Vehicle[] = [
  { name: "Maruti Dzire", seats: "Up to 4 passengers", image: images.vehicleDzire },
  { name: "Innova Crysta", seats: "Up to 7 passengers", image: images.vehicleInnova },
  { name: "Force Urbania", seats: "12 seater van", image: images.vehicleUrbania },
  { name: "Tourist bus", seats: "49 seater coach", image: images.vehicleBus },
];

export const fleetPage = {
  eyebrow: "Our vehicles",
  heading: "Any group size, we have a vehicle",
  intro:
    "From small cars for two to big buses for a whole pilgrim group. Every vehicle comes with an experienced driver, and we are open 24 hours.",
  vehiclesHeading: "Small cars to big buses",
  vehiclesText: "These are some of the vehicles we run. Tell us how many of you are travelling and we will suggest the right one.",
  ratesHeading: "Rates",
  // No figures: the client publishes no pricing because rates move with the season.
  ratesText:
    "Rates depend on the season, the route and the vehicle, so we quote each journey individually. A short call is the quickest way to a price.",
  includedHeading: "With every vehicle",
  included: [
    "An experienced driver who speaks English and Hindi",
    "A driver who knows the roads and the places you visit",
    "Trips anywhere in South India",
    "Available 24 hours, every day of the year",
  ],
};
