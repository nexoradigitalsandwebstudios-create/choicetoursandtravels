import ClockIcon from "./icons/ClockIcon";
import MailIcon from "./icons/MailIcon";
import MapPinIcon from "./icons/MapPinIcon";
import PhoneIcon from "./icons/PhoneIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { site, whatsappHref } from "@/content/site";

// Phone numbers, WhatsApp, email, address and hours. For dark backgrounds.
export default function ContactList() {
  return (
    <ul className="flex flex-col gap-2 text-lg">
      <li className="flex gap-1.5">
        <PhoneIcon className="mt-1 h-3 w-3 shrink-0" />
        <span className="flex flex-wrap gap-x-3">
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className="inline-flex min-h-6 items-center font-semibold hover:underline">
              {phone.display}
            </a>
          ))}
        </span>
      </li>
      <li>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-6 items-center gap-1.5 font-semibold underline decoration-accent decoration-2 underline-offset-[6px]"
        >
          <WhatsAppIcon className="h-3 w-3 shrink-0" />
          Message us on WhatsApp
        </a>
      </li>
      <li>
        <a href={`mailto:${site.email}`} className="inline-flex min-h-6 items-center gap-1.5 break-all hover:underline">
          <MailIcon className="h-3 w-3 shrink-0" />
          {site.email}
        </a>
      </li>
      <li className="flex gap-1.5">
        <MapPinIcon className="mt-0.5 h-3 w-3 shrink-0" />
        <address className="not-italic text-sand/90">
          {site.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </li>
      <li className="flex gap-1.5 text-sand/90">
        <ClockIcon className="mt-0.5 h-3 w-3 shrink-0" />
        {site.officeHours}
      </li>
    </ul>
  );
}
