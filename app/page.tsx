"use client";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import PreWork from "@/components/PreWork";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import useActiveSection, { Section } from "@/hooks/use-active-section";

const sections: Array<Section> = [
  { id: "about" },
  { id: "experience" },
  { id: "contact" },
];

export default function Home() {
  const { activeSection, observers } = useActiveSection(sections);

  return (
    <div>
      <Header active={activeSection} />
      <Background />
      <div className="flex mx-auto w-full">
        <main className="w-full scroll-smooth">
          <div ref={observers[0].ref}>
            <Hero />
          </div>
          <div ref={observers[1].ref}>
            <PreWork />
            <Experience />
          </div>
          <div ref={observers[2].ref} id="contact">
            <ContactSection />
          </div>
        </main>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
