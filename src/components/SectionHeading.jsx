export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">{description}</p>
      ) : null}
    </div>
  );
}
