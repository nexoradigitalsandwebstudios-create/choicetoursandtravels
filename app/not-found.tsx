import ButtonLink from "@/components/ButtonLink";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";

// Shown for any address that does not exist.
export default function NotFound() {
  return (
    <main id="main" className="surface-dark min-h-[80svh] pt-16 pb-12 lg:pt-20">
      <div className="content-width max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.14em] uppercase text-sand/85">Page not found</p>
        <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl">We could not find that page</h1>
        <p className="mt-2 text-lg text-sand/90">
          The address may have changed. Try one of these, or call us on{" "}
          <a href={site.phoneHref} className="font-semibold underline underline-offset-4">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <ul className="mt-6 flex flex-wrap gap-1.5">
          <li>
            <ButtonLink href="/">Homepage</ButtonLink>
          </li>
          {mainNav.map((link) => (
            <li key={link.href}>
              <ButtonLink href={link.href} variant="outline-light">
                {link.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
