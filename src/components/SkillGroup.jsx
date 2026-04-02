export default function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{items.join(", ")}.</p>
    </div>
  );
}
