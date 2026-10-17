import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Credits and licences for the photographs used on this website.",
  alternates: { canonical: "/credits" },
};

// Most of our photo licences (Creative Commons BY and BY-SA) require credit
// to the photographer, the licence and a note of any changes. This page is
// built straight from content/images.ts, so it stays in step automatically.
export default function CreditsPage() {
  // Each source photo is listed once, even if it is used in several crops.
  // Photos supplied by the client (no sourceUrl) need no public credit.
  const seen = new Set<string>();
  const credited = Object.values(images).filter((image) => {
    if (image.credit.sourceUrl === "" || seen.has(image.credit.sourceUrl)) {
      return false;
    }
    seen.add(image.credit.sourceUrl);
    return true;
  });

  return (
    <main id="main">
      <PageHero eyebrow="Credits" heading="Photo credits" intro="Thank you to the photographers whose work appears on this site." />

      <section aria-label="Photo credits list" className="section-pad bg-sand">
        <ul className="content-width grid gap-x-6 gap-y-3 md:grid-cols-2">
          {credited.map((image) => (
            <li key={image.credit.sourceUrl} className="border-b border-text/10 pb-3">
              <p className="font-semibold">{image.alt}</p>
              <p className="mt-0.5 text-text-muted">
                Photo by {image.credit.author} on{" "}
                <a href={image.credit.sourceUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                  {image.credit.source}
                </a>
                ,{" "}
                {image.credit.licenseUrl ? (
                  <a href={image.credit.licenseUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    {image.credit.license}
                  </a>
                ) : (
                  image.credit.license
                )}
                . {image.credit.changes}.
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
