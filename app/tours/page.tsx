import type { Metadata } from "next";
import { seo } from "@/content/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import DestinationCard from "@/components/DestinationCard";
import Enquiry from "@/components/Enquiry";
import ExperienceCard from "@/components/ExperienceCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { toursPage } from "@/content/pages";

export const metadata: Metadata = {
  title: seo.tours.title,
  description: seo.tours.description,
  alternates: { canonical: "/tours" },
  openGraph: {
    title: seo.tours.title,
    description: seo.tours.description,
    url: "/tours",
    images: [{ url: toursPage.hero.image.src, alt: toursPage.hero.image.alt }],
  },
};

// Leisure mode (terracotta accent) comes from app/tours/layout.tsx.
export default function ToursPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([{ name: "Tour packages", path: "/tours" }])} />
      <PageHero
        eyebrow={toursPage.hero.eyebrow}
        heading={toursPage.hero.heading}
        intro={toursPage.hero.intro}
        image={toursPage.hero.image}
      />

      <section aria-labelledby="tours-intro" className="section-pad bg-sand">
        <Reveal className="content-width">
          <SectionHeading id="tours-intro" title={toursPage.introHeading} />
          <p className="mt-3 max-w-3xl text-lg">{toursPage.introText}</p>
        </Reveal>
      </section>

      <section aria-labelledby="tours-destinations" className="section-pad bg-sand-deep">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="tours-destinations" title={toursPage.destinationsHeading} />
          </Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-1.5 sm:gap-3 lg:mt-8 lg:grid-cols-4">
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <Reveal>
                  <DestinationCard destination={destination} sizes="(min-width: 1024px) 22vw, 50vw" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experiences" aria-labelledby="tours-experiences" className="section-pad bg-sand">
        <div className="content-width">
          <Reveal>
            <SectionHeading
              id="tours-experiences"
              title={toursPage.experiencesHeading}
              intro={toursPage.experiencesIntro}
            />
          </Reveal>
          <ul className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-x-8">
            {experiences.map((experience) => (
              <li key={experience.title}>
                <Reveal>
                  <ExperienceCard experience={experience} />
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
