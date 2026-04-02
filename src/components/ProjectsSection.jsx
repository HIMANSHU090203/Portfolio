import { projects, projectsFootnote } from "../data/projects.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24">
      <SectionHeading title="Featured Projects" />
      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {projectsFootnote}
      </p>
    </section>
  );
}
