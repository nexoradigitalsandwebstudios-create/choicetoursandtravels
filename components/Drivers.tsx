import DriverScene from "./DriverScene";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import LanguageIcon from "./icons/LanguageIcon";
import RouteIcon from "./icons/RouteIcon";
import ShieldIcon from "./icons/ShieldIcon";
import { drivers } from "@/content/home";

const icons = {
  language: LanguageIcon,
  route: RouteIcon,
  shield: ShieldIcon,
};

/**
 * "Our drivers": the client's real differentiator, so it gets a proper
 * heading, three clear claims and a gently animated road scene beside them.
 * Used on the homepage (section 7) and the About page.
 */
export default function Drivers() {
  return (
    <section aria-labelledby="drivers-heading" className="section-pad bg-sand">
      <div className="content-width grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <DriverScene />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeading id="drivers-heading" eyebrow={drivers.eyebrow} title={drivers.heading} intro={drivers.intro} />
          </Reveal>

          <ul className="mt-6 flex flex-col gap-3">
            {drivers.claims.map((claim, index) => {
              const Icon = icons[claim.icon];
              return (
                <li key={claim.title}>
                  <Reveal
                    delay={index * 0.08}
                    className="flex gap-2 rounded-card border border-sand-deep bg-sand-deep/50 p-2 sm:p-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-accent">
                      <Icon className="h-3 w-3" />
                    </span>
                    <span>
                      <span className="block font-heading text-xl">{claim.title}</span>
                      <span className="mt-0.5 block text-text-muted">{claim.text}</span>
                    </span>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
