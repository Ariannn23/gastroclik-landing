import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Examples from "@/components/sections/Examples";
import RegisterForm from "@/components/sections/RegisterForm";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      
      {/* Añadimos un padding top para compensar el Navbar fixed */}
      <div className="pt-16">
        <Hero />
        <Features />
        <Examples />
        <RegisterForm />
        <CallToAction />
      </div>
      
      <footer className="p-8 text-center border-t-2 border-dashed border-gray-400">
        [Footer: Derechos reservados GastroClick 2026]
      </footer>
    </main>
  );
}
