export default function ContactItem({ label, value, href }) {
  const inner = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
        className="block rounded-2xl border border-zinc-200 p-4 transition hover:border-teal-300 hover:bg-teal-50/50 dark:border-zinc-800 dark:hover:border-teal-800 dark:hover:bg-teal-950/20"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">{inner}</div>
  );
}
