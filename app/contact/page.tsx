import type { Metadata } from "next";
import { seo } from "@/content/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import BigPhoneLink from "@/components/BigPhoneLink";
import ContactList from "@/components/ContactList";
import OfficeMap from "@/components/OfficeMap";
import { contactPage } from "@/content/pages";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: seo.contact.title,
    description: seo.contact.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      {/* Starts dark like every page, so the transparent header is readable.
          The phone is the main action, so it is the biggest thing here. */}
      <section aria-labelledby="contact-heading" className="surface-dark pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="content-width grid gap-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-1.5 text-sm font-semibold tracking-[0.14em] uppercase text-sand/90">
              <span aria-hidden="true" className="h-px w-4 bg-accent" />
              {contactPage.eyebrow}
            </p>
            <h1 id="contact-heading" className="mt-2 text-2xl sm:text-3xl lg:text-4xl">
              {contactPage.heading}
            </h1>
            <p className="mt-2 max-w-xl text-lg text-sand/90">{contactPage.intro}</p>
            <div className="mt-6">
              <BigPhoneLink />
            </div>
            <div className="mt-6">
              <ContactList />
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-xl">{contactPage.mapHeading}</h2>
            <div className="mt-2">
              <OfficeMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
