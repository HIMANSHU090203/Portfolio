import { experiences, experienceNote } from "../data/experience.js";
import MotionSection from "./MotionSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function ExperienceSection() {
  return (
    <MotionSection
      id="experience"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24"
      aria-label="Professional experience"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Engineering Experience"
        description="Hands-on product engineering work across frontend, backend, APIs, and AI-assisted workflows."
      />
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  {experience.company}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{experience.role}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">
                  {experience.summary}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{experience.period}</p>
                <p className="mt-1">{experience.location}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
              <ul className="space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300 md:text-base">
                {experience.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Technologies Used
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 dark:border-teal-900/70 dark:bg-teal-950/30 dark:text-teal-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{experienceNote}</p>
    </MotionSection>
  );
}
