export default function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 transition hover:-translate-y-1 hover:border-teal-200 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 dark:hover:border-teal-900">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
