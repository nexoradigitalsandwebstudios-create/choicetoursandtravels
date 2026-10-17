import BigPhoneLink from "./BigPhoneLink";
import ContactList from "./ContactList";
import OfficeMap from "./OfficeMap";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { enquiryIntro } from "@/content/home";

/**
 * The contact section: homepage section 10, and the closing section of the
 * tours and about pages.
 *
 * The client publishes no prices (rates move with the season), so the phone
 * number is the main action and the heaviest thing here. Beside it, a map
 * with a pin on the office.
 */
export default function Enquiry() {
  return (
    <section id="enquiry" aria-labelledby="enquiry-heading" className="surface-dark section-pad">
      <div className="content-width grid gap-8 lg:grid-cols-12 lg:gap-x-6">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            id="enquiry-heading"
            eyebrow={enquiryIntro.eyebrow}
            title={enquiryIntro.heading}
            intro={enquiryIntro.text}
            tone="dark"
          />
          <div className="mt-6">
            <BigPhoneLink />
          </div>
          <div className="mt-6">
            <ContactList />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <h3 className="text-xl">{enquiryIntro.mapHeading}</h3>
          <div className="mt-2">
            <OfficeMap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
