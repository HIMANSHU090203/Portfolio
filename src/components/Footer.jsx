import { profile } from "../data/profile.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-zinc-400 dark:text-zinc-500">
          Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
