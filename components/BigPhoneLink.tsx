import PhoneIcon from "./icons/PhoneIcon";
import { site } from "@/content/site";

// The phone number as a very large tap target. On the enquiry section and the
// contact page this is the main action, so it is the heaviest thing there.
export default function BigPhoneLink() {
  return (
    <a
      href={site.phoneHref}
      className="group inline-flex min-h-8 items-center gap-1.5 max-w-full rounded-card bg-accent-fill px-2 py-2 text-on-accent min-[22.5rem]:px-2.5 hover:opacity-90 sm:gap-2 sm:px-4"
    >
      <PhoneIcon className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
      <span className="flex flex-col text-left">
        <span className="text-sm font-semibold tracking-[0.14em] uppercase">Call us</span>
        <span className="font-heading text-lg leading-tight whitespace-nowrap min-[22.5rem]:text-xl sm:text-2xl xl:text-3xl">{site.phoneDisplay}</span>
      </span>
    </a>
  );
}
