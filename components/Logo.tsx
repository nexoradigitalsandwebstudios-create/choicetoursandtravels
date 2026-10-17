import Link from "next/link";
import LogoEmblem from "./LogoEmblem";
import { site } from "@/content/site";

// The Choice Tours & Travels logo for the header and footer (both dark):
// the emblem beside the name, set like the full logo in public/logo/,
// "Choice Tours" in Fraunces with "& Travels" in letter-spaced gold below.
export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="tap-target flex items-center gap-1.5" aria-label={`${site.name}, home`}>
      <LogoEmblem className="h-5 w-5 shrink-0 lg:h-6 lg:w-6" />
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span className="font-heading text-lg font-semibold tracking-[0.04em] uppercase sm:text-xl">Choice Tours</span>
        <span className="mt-0.5 text-sm font-semibold tracking-[0.3em] text-gold uppercase">&amp; Travels</span>
      </span>
    </Link>
  );
}
