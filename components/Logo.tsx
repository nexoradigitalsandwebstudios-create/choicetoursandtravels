import Link from "next/link";
import { site } from "@/content/site";

// The Choice Travels wordmark: a small open circle with a sun at its centre
// (a "C", and a nod to temple lamps and sunrise at Kanyakumari) next to the
// name set in Fraunces. The mark uses the current accent colour.
export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="tap-target flex items-center gap-1.5" aria-label={`${site.name}, home`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="h-4 w-4 shrink-0 text-accent">
        <path
          d="M26.5 9.5A12.5 12.5 0 1 0 26.5 22.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="4" fill="currentColor" />
      </svg>
      <span className="font-heading text-lg leading-none font-semibold whitespace-nowrap sm:text-xl">{site.name}</span>
    </Link>
  );
}
