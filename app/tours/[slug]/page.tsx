import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import DestinationCard from "@/components/DestinationCard";
import Enquiry from "@/components/Enquiry";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CheckIcon from "@/components/icons/CheckIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { destinations, getDestination } from "@/content/destinations";
import { site, whatsappHref } from "@/content/site";

// One page per destination, all built at build time from content/destinations.ts.
export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

// Any slug not in the list above is a 404, rather than being rendered on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/tours/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) {
    return {};
  }
  return {
    title: `${destination.name} tours`,
    description: `${destination.note} Trips to ${destination.name} by car with an experienced driver, from ${site.city}.`,
    alternates: { canonical: `/tours/${destination.slug}` },
    openGraph: {
      title: `${destination.name} | ${site.name}`,
      description: destination.note,
      url: `/tours/${destination.slug}`,
      images: [{ url: destination.image.src, alt: destination.image.alt }],
    },
  };
}

export default async function DestinationPage({ params }: PageProps<"/tours/[slug]">) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) {
    notFound();
  }

  const related = destination.related
    .map((relatedSlug) => getDestination(relatedSlug))
    .filter((item) => item !== undefined);

  return (
    <main id="main">
      <PageHero
        eyebrow={destination.category}
        heading={destination.name}
        intro={destination.note}
        image={destination.image}
      />

      <section aria-labelledby="destination-overview" className="section-pad bg-sand">
        <div className="content-width grid gap-8 lg:grid-cols-12 lg:gap-x-6">
          <Reveal className="lg:col-span-7">
            <SectionHeading id="destination-overview" title={`About ${destination.name}`} />
            <p className="mt-3 text-lg">{destination.intro}</p>

            <h3 className="mt-6 text-xl">Highlights</h3>
            <ul className="mt-2 flex flex-col gap-1.5">
              {destination.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-1.5">
                  <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <aside aria-labelledby="plan-heading" className="rounded-card bg-sand-deep p-3 sm:p-4">
              <h3 id="plan-heading" className="text-xl">
                Plan this trip
              </h3>
              <p className="mt-1.5">{destination.pairsWith}</p>
              {/* TODO: once the client confirms typical trip lengths, add a
                  `tripLength` field in content/destinations.ts and show it here. */}
              <p className="mt-1.5 text-text-muted">
                Rates depend on the season and the vehicle. Call for a quote.
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                <ButtonLink href={site.phoneHref}>
                  <PhoneIcon className="h-2.5 w-2.5" />
                  Call {site.phoneDisplay}
                </ButtonLink>
                <ButtonLink href={whatsappHref} variant="outline-dark">
                  <WhatsAppIcon className="h-2.5 w-2.5" />
                  WhatsApp us
                </ButtonLink>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="section-pad bg-sand-deep">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="related-heading" title="You might also like" />
          </Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-1.5 sm:gap-3 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Reveal>
                  <DestinationCard destination={item} sizes="(min-width: 1024px) 30vw, 50vw" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Enquiry />
    </main>
  );
}
