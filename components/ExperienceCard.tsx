import Photo from "./Photo";
import type { Experience } from "@/content/experiences";

// One special experience on the tours page: photo beside a short description.
export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="grid gap-2 sm:grid-cols-5 sm:items-center sm:gap-3">
      <Photo
        image={experience.image}
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
        className="aspect-[4/3] rounded-card sm:col-span-2"
      />
      <div className="sm:col-span-3">
        <h3 className="text-xl">{experience.title}</h3>
        <p className="mt-1 text-text-muted">{experience.text}</p>
      </div>
    </article>
  );
}
