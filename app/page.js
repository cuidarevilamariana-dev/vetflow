import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Differentiators from "@/components/Differentiators";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <Differentiators />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
