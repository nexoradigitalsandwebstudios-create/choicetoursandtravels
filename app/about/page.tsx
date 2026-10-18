import type { Metadata } from "next";
import { seo } from "@/content/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import CoverageMap from "@/components/CoverageMap";
import Drivers from "@/components/Drivers";
import Enquiry from "@/components/Enquiry";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { aboutPage } from "@/content/pages";
import { statesServed } from "@/content/site";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: "/about",
    images: [{ url: aboutPage.hero.image.src, alt: aboutPage.hero.image.alt }],
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([{ name: "About us", path: "/about" }])} />
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        heading={aboutPage.hero.heading}
        intro={aboutPage.hero.intro}
        image={aboutPage.hero.image}
      />

      <section aria-labelledby="story-heading" className="section-pad bg-sand">
        <Reveal className="content-width">
          <SectionHeading id="story-heading" title={aboutPage.storyHeading} />
          <div className="mt-3 flex max-w-3xl flex-col gap-2 text-lg">
            {aboutPage.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="coverage-heading" className="section-pad bg-sand-deep">
        <div className="content-width grid items-center gap-8 lg:grid-cols-12 lg:gap-x-6">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="coverage-heading" title={aboutPage.coverageHeading} intro={aboutPage.coverageText} />
            <h3 className="mt-6 text-xl">States we cover</h3>
            <ul className="mt-2 flex flex-wrap gap-1">
              {statesServed.map((state) => (
                <li key={state} className="rounded-control border border-text/20 px-1.5 py-0.5">
                  {state}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <CoverageMap />
          </Reveal>
        </div>
      </section>

      <Drivers />

      <Enquiry />
    </main>
  );
}
