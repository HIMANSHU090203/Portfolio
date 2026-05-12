import { publication } from "../data/profile.js";

export default function PublicationCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
      <h2 className="text-lg font-semibold tracking-tight md:text-xl">{publication.title}</h2>
      <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{publication.body}</p>
      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{publication.meta}</p>
    </div>
  );
}
