import { profile } from "../data/profile.js";

const highlightPoints = [
  "Sky AI — frontend, backend, APIs, product engineering",
  "React · FastAPI · Node.js · PostgreSQL · Electron",
  "Beauty-tech, healthcare, and control-system workflows",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 py-20 md:scroll-mt-24 md:py-28"
      aria-label="Introduction"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-300">
            {profile.role}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-zinc-800 dark:text-zinc-200 md:text-xl">
            {profile.summary}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
            {profile.heroBody}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Download Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            At a glance
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {highlightPoints.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-dashed border-teal-200/80 bg-teal-50/50 p-4 dark:border-teal-900/60 dark:bg-teal-950/30">
            <p className="text-xs font-medium uppercase tracking-wider text-teal-800 dark:text-teal-300">
              Focus
            </p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Reliable software that balances technical depth, usability, and business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
