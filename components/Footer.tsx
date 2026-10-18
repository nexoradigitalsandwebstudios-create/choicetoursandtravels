import Link from "next/link";
import Logo from "./Logo";
import { destinations } from "@/content/destinations";
import { mainNav } from "@/content/navigation";
import { site, statesServed, trustClaims, whatsappHref } from "@/content/site";
import { trivandrumPage } from "@/content/trivandrum";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark border-t border-sand/10">
      <div className="content-width grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:py-12">
        <div className="md:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-2 max-w-sm text-sand/85">{site.description}</p>
          <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-sand/85 uppercase">{trustClaims.since}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-sand/85 uppercase">Explore</h2>
          <ul className="mt-2 flex flex-col">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-6 items-center hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Links to every destination on every page help Google find them all. */}
        <nav aria-label="Popular trips" className="lg:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-sand/85 uppercase">Popular trips</h2>
          <ul className="mt-2 flex flex-col">
            <li>
              <Link href={trivandrumPage.path} className="inline-flex min-h-6 items-center hover:underline">
                Tours and travels in Trivandrum
              </Link>
            </li>
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <Link href={`/tours/${destination.slug}`} className="inline-flex min-h-6 items-center hover:underline">
                  {destination.name} trip
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-sand/85 uppercase">Talk to us</h2>
          <ul className="mt-2 flex flex-col">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="inline-flex min-h-6 items-center font-heading text-xl hover:underline">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-6 items-center break-all hover:underline">
                {site.email}
              </a>
            </li>
            <li className="mt-1 text-sand/85">
              <address className="not-italic">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
          <p className="mt-2 font-semibold">{site.officeHours}</p>
          <p className="mt-1 text-sm text-sand/85">Serving {statesServed.join(", ")}.</p>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="content-width flex flex-col gap-1 py-3 text-sm text-sand/85 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}, {site.city}
          </p>
          <Link href="/credits" className="inline-flex min-h-6 items-center hover:underline">
            Photo credits
          </Link>
        </div>
      </div>
    </footer>
  );
}
