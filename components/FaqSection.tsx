import JsonLd from "./JsonLd";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import { faqs } from "@/content/seo";

interface FaqSectionProps {
  /** Heading id, so the section can point aria-labelledby at it */
  id?: string;
  title?: string;
  intro?: string;
  /** Pick the one that differs from the sections above and below */
  background?: "sand" | "sand-deep";
}

/**
 * Common questions, answered in plain words. Uses the browser's own
 * <details> element, so it opens and closes with no JavaScript.
 *
 * The answers stay in the page even when closed, so Google reads them all.
 * The same questions go to Google as FAQ structured data.
 */
export default function FaqSection({
  id = "faq-heading",
  title = "Questions people ask us",
  intro,
  background = "sand",
}: FaqSectionProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section aria-labelledby={id} className={`section-pad ${background === "sand" ? "bg-sand" : "bg-sand-deep"}`}>
      <JsonLd data={faqJsonLd} />
      <div className="content-width grid gap-6 lg:grid-cols-12 lg:gap-x-6">
        <Reveal className="lg:col-span-4">
          <SectionHeading id={id} title={title} intro={intro} />
        </Reveal>

        <Reveal className="lg:col-span-8">
          <ul className="border-t border-ink/15">
            {faqs.map((faq) => (
              <li key={faq.question} className="border-b border-ink/15">
                <details className="group">
                  <summary className="flex min-h-6 cursor-pointer list-none items-center justify-between gap-2 py-2 font-heading text-xl [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDownIcon className="h-3 w-3 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="max-w-2xl pb-3 text-lg text-text-muted">{faq.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
