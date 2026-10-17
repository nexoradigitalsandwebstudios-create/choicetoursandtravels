import type { Metadata } from "next";
import BigPhoneLink from "@/components/BigPhoneLink";
import ButtonLink from "@/components/ButtonLink";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TempleCard from "@/components/TempleCard";
import CheckIcon from "@/components/icons/CheckIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { devotionalPage } from "@/content/pages";
import { whatsappHref } from "@/content/site";
import { temples } from "@/content/temples";

export const metadata: Metadata = {
  title: devotionalPage.metaTitle,
  description: devotionalPage.metaDescription,
  alternates: { canonical: "/devotional" },
  openGraph: {
    title: devotionalPage.metaTitle,
    description: devotionalPage.metaDescription,
    url: "/devotional",
    images: [{ url: devotionalPage.hero.image.src, alt: devotionalPage.hero.image.alt }],
  },
};

// Devotional mode: calm pacing, large type (18px base from the layout),
// no horizontal scrolling, and the phone always close at hand.
export default function DevotionalPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={devotionalPage.hero.eyebrow}
        heading={devotionalPage.hero.heading}
        intro={devotionalPage.hero.intro}
        image={devotionalPage.hero.image}
      />

      <section aria-labelledby="devotional-intro" className="section-pad bg-sand">
        <Reveal className="content-width">
          <SectionHeading id="devotional-intro" title={devotionalPage.introHeading} />
          <p className="mt-3 max-w-3xl text-lg">{devotionalPage.introText}</p>
        </Reveal>
      </section>

      <section aria-labelledby="temples-heading" className="section-pad bg-sand-deep">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="temples-heading" title={devotionalPage.templesHeading} />
          </Reveal>
          {/* A plain grid that wraps: never a horizontal scroller here. */}
          <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:mt-8 lg:gap-4">
            {temples.map((temple) => (
              <li key={temple.name}>
                <Reveal className="h-full">
                  <TempleCard temple={temple} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="steps-heading" className="section-pad bg-sand">
        <div className="content-width">
          <Reveal>
            <SectionHeading id="steps-heading" title={devotionalPage.stepsHeading} />
          </Reveal>
          <ol className="mt-6 grid gap-4 lg:mt-8 lg:grid-cols-3 lg:gap-6">
            {devotionalPage.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal className="border-t-2 border-accent pt-3">
                  <p aria-hidden="true" className="font-heading text-3xl text-ink">
                    {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl">{step.title}</h3>
                  <p className="mt-1 text-text-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="devotional-call" className="surface-dark section-pad">
        <div className="content-width grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SectionHeading id="devotional-call" title={devotionalPage.callHeading} intro={devotionalPage.callText} tone="dark" />
            <div className="mt-6">
              <BigPhoneLink />
            </div>
            <div className="mt-3">
              <ButtonLink href={whatsappHref} variant="outline-light">
                <WhatsAppIcon className="h-3 w-3" />
                Message us on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xl">{devotionalPage.trustHeading}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {devotionalPage.trust.map((claim) => (
                <li key={claim} className="flex items-start gap-1.5 text-lg">
                  <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                  {claim}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
