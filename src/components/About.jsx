import SectionHeading from "./SectionHeading.jsx";
import MotionSection from "./MotionSection.jsx";

const stats = [
  {
    label: "Engineering identity",
    value: "Product-minded",
    detail: "Builds around user workflows, business value, and maintainable systems.",
  },
  {
    label: "Featured work",
    value: "3 projects",
    detail: "AI product discovery, hospital operations, and ground-control interfaces.",
  },
  {
    label: "Stack coverage",
    value: "End to end",
    detail: "React interfaces, APIs, database workflows, and desktop applications.",
  },
];

export default function About() {
  return (
    <MotionSection id="about" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <SectionHeading
        eyebrow="About"
        title="From projects to engineering problems"
        description="The portfolio is focused on practical systems, product workflows, and full-stack execution."
      />
      <div className="max-w-3xl space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        <p>
          Research and Development Engineer with hands-on experience building practical software
          systems across web and desktop applications. The work so far spans full-stack
          development, API integration, AI-assisted workflows, interface improvements, and
          product-oriented engineering in startup environments.
        </p>
        <p>
          I am strongest when a product needs more than screens: understanding the workflow,
          shaping the API contract, connecting persistent data, and turning technical decisions
          into a user experience that feels reliable.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/60 transition hover:-translate-y-1 hover:border-teal-200 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 dark:hover:border-teal-900"
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
    </MotionSection>
  );
}
