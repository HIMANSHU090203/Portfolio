import { useState } from "react";

export default function ProjectCard({
  title,
  summary,
  bullets,
  stack,
  links,
  status,
  image,
  index = 0,
}) {
  const [imgOk, setImgOk] = useState(true);
  const emphasis = index % 2 === 1;

  return (
    <article
      className={`rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:p-8 ${
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
              alt=""
              className="h-44 w-full rounded-2xl border border-zinc-200 object-cover dark:border-zinc-700 md:h-full md:min-h-[200px]"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div
              className={`flex h-44 min-h-[11rem] w-full items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br text-center text-sm font-semibold text-white md:h-full md:min-h-[200px] ${
                index % 2 === 0
                  ? "from-teal-600 to-zinc-700"
                  : "from-zinc-700 to-teal-600"
              }`}
              aria-hidden
            >
              {title}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
            {status ? (
              <span className="inline-flex w-fit rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                {status}
              </span>
            ) : null}
          </div>
          <p className="mt-3 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-300">{summary}</p>
          <ul className="mt-5 space-y-3 text-sm text-zinc-700 dark:text-zinc-300 md:text-base">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
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
    </article>
  );
}
