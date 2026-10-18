/**
 * Structured data for Google (JSON-LD). Pass any schema.org object.
 *
 * React writes the text into the <script> as-is. We replace "<" with its
 * escaped form so nothing in the content can ever close the tag early.
 */
export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json">{json}</script>;
}
