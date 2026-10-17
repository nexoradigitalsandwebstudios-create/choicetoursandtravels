import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { since } from "@/content/home";

// Thin accent rules between the numbers: a 2x2 grid on phones, one row of four
// on desktop. Written out per position so Tailwind can see every class.
const ruleClasses = [
  "border-accent",
  "border-accent border-l",
  "border-accent border-t lg:border-t-0 lg:border-l",
  "border-accent border-l border-t lg:border-t-0",
];

/**
 * Homepage section 2. No photography at all: after the full-screen hero this
 * section gives the eye somewhere to rest. Four big numerals in Fraunces.
 */
export default function Since2005() {
  return (
    <section id="since" aria-labelledby="since-heading" className="section-pad bg-sand">
      <div className="content-width">
        <Reveal>
          <SectionHeading id="since-heading" eyebrow={since.eyebrow} title={since.heading} align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          {/* Two by two with thin rules between on phones; four across with
              thin vertical rules between on desktop. */}
          <dl className="mx-auto mt-6 grid max-w-6xl grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {since.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-1 py-4 text-center lg:px-3 lg:py-0 ${ruleClasses[index]}`}
              >
                <dt className="order-2 mt-1 text-base text-text-muted">{stat.label}</dt>
                <dd className="order-1 font-heading text-3xl text-ink lg:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
