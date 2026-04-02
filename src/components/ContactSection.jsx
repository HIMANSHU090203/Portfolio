import { contactIntro, profile } from "../data/profile.js";
import ContactItem from "./ContactItem.jsx";

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
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900 md:p-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">{contactIntro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <ContactItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
