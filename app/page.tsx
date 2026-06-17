import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Features from "@/components/sections/Features";
import TargetAudience from "@/components/sections/TargetAudience";
import Examples from "@/components/sections/Examples";
import ContactForm from "@/components/sections/ContactForm";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />

      {/* Añadimos un padding top para compensar el Navbar fixed */}
      <div>
        <Hero />
        <WhatWeDo />
        <Features />
        <TargetAudience />
        <Examples />
        <CallToAction />
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
