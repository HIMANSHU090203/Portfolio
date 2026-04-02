import { skillGroups } from "../data/skills.js";
import SectionHeading from "./SectionHeading.jsx";
import SkillGroup from "./SkillGroup.jsx";

export default function SkillsGrid() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <SectionHeading title="Technical Skills" />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <SkillGroup key={g.title} title={g.title} items={g.items} />
        ))}
      </div>
    </section>
  );
}
