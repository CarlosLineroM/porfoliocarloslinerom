import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos Linero Martín — Desarrollador Web" },
      {
        name: "description",
        content:
          "Portfolio de Carlos Linero Martín, desarrollador web especializado en React, Python y soluciones basadas en datos. Cofundador de PropTracker.",
      },
      { property: "og:title", content: "Carlos Linero Martín — Desarrollador Web" },
      {
        property: "og:description",
        content:
          "Desarrollador web enfocado en soluciones eficientes y escalables. React, Python, Big Data e IA.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
