import { contactIntro, profile } from "../data/profile.js";
import ContactItem from "./ContactItem.jsx";
import MotionSection from "./MotionSection.jsx";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[\s-]/g, "")}`,
  },
  { label: "Location", value: profile.location },
  {
    label: "GitHub",
    value: "github.com/HIMANSHU090203",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/himanshu-sharma-b8388928a",
    href: profile.linkedin,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resume,
  },
];

export default function ContactSection() {
  return (
    <MotionSection id="contact" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 md:p-10">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s build useful software.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
            {contactIntro}
          </p>
        </div>
        <div className="relative mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <ContactItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
