import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  label,
  summary,
  problem,
  features,
  challenges,
  architecture,
  impact,
  stack,
  links,
  status,
  image,
  index = 0,
}) {
  const [imgOk, setImgOk] = useState(true);
  const emphasis = index % 2 === 1;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 md:p-8 ${
        emphasis ? "ring-1 ring-teal-500/20 dark:ring-teal-400/15" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-6 md:flex-row md:items-stretch ${
          index % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-[38%] md:shrink-0">
          {image && imgOk ? (
            <img
              src={image}
              alt={`${title} project preview`}
              className="h-44 w-full rounded-2xl border border-zinc-200 object-cover dark:border-zinc-700 md:h-full md:min-h-[200px]"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div
              className={`flex h-44 min-h-[11rem] w-full flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br p-6 text-center text-white md:h-full md:min-h-[260px] ${
                index % 2 === 0
                  ? "from-teal-600 to-zinc-700"
                  : "from-zinc-700 to-teal-600"
              }`}
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                Screenshot Slot
              </span>
              <span className="mt-3 text-2xl font-semibold">{title}</span>
              <span className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                Add approved product screenshots or architecture visuals in `public/images`.
              </span>
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              {label ? (
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  {label}
                </p>
              ) : null}
              <h3 className="mt-1 text-xl font-semibold md:text-2xl">{title}</h3>
            </div>
            {status ? (
              <span className="inline-flex w-fit rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                {status}
              </span>
            ) : null}
          </div>
          <p className="mt-3 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">{summary}</p>
          {problem ? (
            <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Problem
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{problem}</p>
            </div>
          ) : null}
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <ProjectList title="Core Features" items={features} />
            <ProjectList title="Technical Challenges" items={challenges} />
          </div>
          {architecture?.length ? (
            <div className="mt-5 rounded-2xl border border-teal-200 bg-teal-50/50 p-4 dark:border-teal-900/70 dark:bg-teal-950/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300">
                Architecture / Workflow
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-teal-900 dark:text-teal-200">
                {architecture.map((step, stepIndex) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="rounded-full border border-teal-200 bg-white px-3 py-1 dark:border-teal-900 dark:bg-zinc-950">
                      {step}
                    </span>
                    {stepIndex < architecture.length - 1 ? (
                      <span className="text-teal-500" aria-hidden>
                        -&gt;
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          <ProjectList title="Impact" items={impact} compact />
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {links?.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectList({ title, items = [], compact = false }) {
  if (!items.length) return null;

  return (
    <div className={compact ? "mt-5" : ""}>
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
