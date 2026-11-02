import VehicleCard from "./VehicleCard";
import { vehicles } from "@/content/fleet";

/**
 * Every vehicle as a card: two across on phones and tablets, four across on
 * desktop. A wrapping flex row rather than a grid, so a last row that is not
 * full (seven vehicles do not divide evenly) sits in the centre instead of
 * hanging off to the left.
 */
export default function VehicleGrid({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap justify-center gap-1.5 sm:gap-3 ${className}`}>
      {vehicles.map((vehicle) => (
        <li
          key={vehicle.name}
          className="w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
        >
          <VehicleCard vehicle={vehicle} />
        </li>
      ))}
    </ul>
  );
}
