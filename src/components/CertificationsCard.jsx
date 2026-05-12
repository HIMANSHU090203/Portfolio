import { certifications } from "../data/certifications.js";

export default function CertificationsCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
      <h2 className="text-lg font-semibold tracking-tight md:text-xl">Certifications</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        {certifications.map((c) => (
          <li key={c.text} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
            <span>{c.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
