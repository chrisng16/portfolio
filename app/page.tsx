import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import PreWork from "@/components/PreWork";
import ContactSection from "@/components/ContactSection";
import PreContact from "@/components/PreContact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <div>
        <PreWork />
        <Experience />
      </div>
      <div className="">
        <PreContact />
        <ContactSection />
      </div>
    </main>
  );
}
