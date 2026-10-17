import DoorPanel from "./DoorPanel";
import { doors } from "@/content/home";
import { images } from "@/content/images";

/**
 * Homepage section 3, the most important on the page: one door for
 * pilgrims, one for holidaymakers.
 *
 * On desktop, hovering a panel widens it from 50% to 62% and dims the other.
 * On phones they stack as two 60vh blocks with no hover effect. All of the
 * behaviour lives in the .two-doors CSS in globals.css.
 */
export default function TwoDoors() {
  return (
    <section aria-labelledby="doors-heading" className="surface-dark">
      <h2 id="doors-heading" className="sr-only">
        {doors.heading}
      </h2>
      <div className="two-doors">
        <DoorPanel door={doors.devotional} image={images.doorDevotional} />
        <DoorPanel door={doors.leisure} image={images.doorTours} />
      </div>
    </section>
  );
}
