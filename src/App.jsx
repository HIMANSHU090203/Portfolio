import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SkillsGrid from "./components/SkillsGrid.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import PublicationCard from "./components/PublicationCard.jsx";
import CertificationsCard from "./components/CertificationsCard.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-teal-200 selection:text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-teal-800 dark:selection:text-zinc-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 md:px-8">
        <Hero />
        <About />
        <SkillsGrid />
        <ProjectsSection />
        <section
          id="publication"
          className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24"
          aria-label="Publication and certifications"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <PublicationCard />
            <CertificationsCard />
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
