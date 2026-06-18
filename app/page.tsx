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
      <Hero />
      <WhatWeDo />
      <Features />
      <TargetAudience />
      <Examples />
      <CallToAction />
      <ContactForm />
      <Footer />
    </main>
  );
}
