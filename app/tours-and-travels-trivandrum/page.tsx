import type { Metadata } from "next";
import Link from "next/link";
import BigPhoneLink from "@/components/BigPhoneLink";
import DestinationCard from "@/components/DestinationCard";
import Enquiry from "@/components/Enquiry";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import { getDestination, type Destination } from "@/content/destinations";
import { seo } from "@/content/seo";
import { trivandrumPage as page } from "@/content/trivandrum";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: seo.trivandrum.title,
  description: seo.trivandrum.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: seo.trivandrum.title,
    description: seo.trivandrum.description,
    url: page.path,
    images: [{ url: page.hero.image.src, alt: page.hero.image.alt }],
  },
};

// The page for local searches: "tours and travels in Trivandrum / TVM",
// "taxi in Trivandrum". Linked from the footer on every page.
export default function TrivandrumPage() {
  const places = page.places
    .map((slug) => getDestination(slug))
    .filter((destination): destination is Destination => destination !== undefined);

  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([{ name: page.hero.heading, path: page.path }])} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        heading={page.hero.heading}
        intro={page.hero.intro}
        image={page.hero.image}
      />

      <section aria-labelledby="tvm-intro" className="section-pad bg-sand">
        <Reveal className="content-width">
          <SectionHeading id="tvm-intro" title={page.introHeading} />
          <div className="mt-3 flex max-w-3xl flex-col gap-2 text-lg">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="tvm-services" className="section-pad bg-sand-deep">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="tvm-services" title={page.servicesHeading} />
          </Reveal>
          <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:mt-8 lg:gap-4">
            {page.services.map((service) => (
              <li key={service.title}>
                <Reveal className="flex h-full flex-col rounded-card bg-sand p-3 lg:p-4">
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-1 grow text-text-muted">{service.text}</p>
                  <Link
                    href={service.link.href}
                    className="mt-2 inline-flex min-h-6 items-center gap-1 font-semibold underline decoration-accent decoration-2 underline-offset-4"
                  >
                    {service.link.label}
                    <ArrowRightIcon className="h-2 w-2" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="tvm-places" className="section-pad bg-sand">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="tvm-places" title={page.placesHeading} intro={page.placesIntro} />
          </Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-1.5 sm:gap-3 lg:mt-8 lg:grid-cols-4">
            {places.map((destination) => (
              <li key={destination.slug}>
                <Reveal>
                  <DestinationCard destination={destination} sizes="(min-width: 1024px) 22vw, 50vw" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="tvm-why" className="surface-dark section-pad">
        <div className="content-width grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SectionHeading id="tvm-why" title={page.whyHeading} tone="dark" />
            <ul className="mt-4 flex flex-col gap-2">
              {page.why.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-lg">
                  <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:self-center">
            <BigPhoneLink />
          </Reveal>
        </div>
      </section>

      <FaqSection id="tvm-faq" title={page.faqHeading} />

      <Enquiry />
    </main>
  );
}
