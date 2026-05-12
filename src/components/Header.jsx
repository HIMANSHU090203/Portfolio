import { navLinks } from "../lib/constants.js";
import { profile } from "../data/profile.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <a
            href="#hero"
            className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            {profile.name.split(" ")[0]}
            <span className="text-zinc-500 dark:text-zinc-400">.</span>
          </a>
          <nav
            className="hidden flex-1 items-center justify-end gap-6 md:flex"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Download Resume
            </a>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center rounded-xl bg-teal-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-teal-700"
            >
              Resume
            </a>
          </div>
          <ThemeToggle />
        </div>
        <nav
          className="-mx-6 flex gap-4 overflow-x-auto border-t border-zinc-200 px-6 py-2 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 md:hidden"
          aria-label="Section shortcuts"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 whitespace-nowrap rounded-lg px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
