import { skillGroups } from "../data/skills.js";
import MotionSection from "./MotionSection.jsx";
import SectionHeading from "./SectionHeading.jsx";
import SkillGroup from "./SkillGroup.jsx";

export default function SkillsGrid() {
  return (
    <MotionSection id="skills" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <SectionHeading
        eyebrow="Stack"
        title="Technical Skills"
        description="A practical toolset for building modern interfaces, APIs, AI-assisted workflows, and database-backed products."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <SkillGroup key={g.title} title={g.title} items={g.items} />
        ))}
      </div>
    </MotionSection>
  );
}
