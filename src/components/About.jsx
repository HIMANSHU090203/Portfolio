import SectionHeading from "./SectionHeading.jsx";

const stats = [
  {
    label: "Stack breadth",
    value: "Full-stack",
    detail: "UI, services, data, and shipping features end to end.",
  },
  {
    label: "Featured work",
    value: "3 projects",
    detail: "SkinDB, ZenHosp, and AeroHive GCS highlighted below.",
  },
  {
    label: "Domains",
    value: "Multi-sector",
    detail: "Beauty-tech, healthcare, and control-system contexts.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <SectionHeading title="About" />
      <div className="max-w-3xl space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        <p>
          Research and Development Engineer with hands-on experience building practical software
          systems across web and desktop applications. The work so far spans full-stack
          development, API integration, AI-assisted workflows, interface improvements, and
          product-oriented engineering in startup environments.
        </p>
        <p>
          A strong interest lies in building reliable software that balances technical depth,
          usability, and business value. Comfortable working across multiple parts of the stack,
          from frontend implementation and backend services to database-driven workflows and
          feature delivery.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {s.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {s.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
