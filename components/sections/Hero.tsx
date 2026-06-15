"use client";
import Scene3D from "@/components/3d/Scene3D";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gastro-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Lado Izquierdo: Textos y CTA */}
        <div className="lg:w-1/2 z-10 pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gastro-wine-main leading-tight mb-6">
              Tu menú en un <br />
              <span className="text-gastro-gold-main">solo click.</span>
            </h1>
            <p className="text-xl text-gastro-text-sec mb-10 max-w-lg leading-relaxed">
              Crea cartas digitales interactivas, atractivas y fáciles de usar. Mejora la experiencia de tus comensales y moderniza tu restaurante hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gastro-wine-main text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gastro-wine-sec hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Crear mi carta gratis
              </button>
              <button className="bg-transparent border-2 border-gastro-wine-main text-gastro-wine-main px-8 py-4 rounded-xl font-bold text-lg hover:bg-gastro-wine-main hover:text-white transition-all">
                Ver ejemplos
              </button>
            </div>
          </motion.div>
        </div>

        {/* Lado Derecho: Canvas 3D */}
        <div className="lg:w-1/2 w-full h-[500px] lg:h-[700px] relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-full"
          >
            <Scene3D />
          </motion.div>
        </div>

      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gastro-gold-light/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gastro-wine-main/5 rounded-full blur-3xl -z-0 -translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}
