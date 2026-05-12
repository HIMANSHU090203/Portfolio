import { profile } from "../data/profile.js";
import { motion } from "framer-motion";

const highlightPoints = [
  "Full-stack product work across frontend, backend, APIs, and data",
  "AI-assisted products with React, FastAPI, TypeScript, and PostgreSQL",
  "Healthcare, beauty-tech, and ground-control workflow experience",
];

const metrics = [
  { value: "3", label: "Featured engineering projects" },
  { value: "5+", label: "Core product modules explored" },
  { value: "Full-stack", label: "Frontend, API, database, and desktop apps" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 overflow-hidden py-20 md:scroll-mt-24 md:py-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-x-0 top-8 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-300">
            {profile.role}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Full-stack developer building AI-powered products and scalable systems.
          </h1>
          <p className="mt-4 text-lg font-medium text-zinc-800 dark:text-zinc-200 md:text-xl">
            {profile.name} — {profile.summary}
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
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-teal-700 hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-950/40"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm shadow-zinc-200/60 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-black/20"
        >
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Engineering Profile</p>
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
              Currently Working On
            </p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {profile.currentFocus}
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60"
              >
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
