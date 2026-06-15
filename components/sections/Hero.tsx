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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-gastro-text-main">
              Tu menú en un <br />
              <span className="bg-gradient-to-r from-gastro-gold-main to-gastro-wine-sec bg-clip-text text-transparent">
                solo click.
              </span>
            </h1>
            <p className="text-xl text-gastro-text-sec mb-10 max-w-lg leading-relaxed font-medium">
              Crea cartas digitales interactivas, atractivas y fáciles de usar. Mejora la experiencia de tus comensales y moderniza tu restaurante hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-gradient-to-r from-gastro-wine-main to-gastro-wine-sec text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(90,22,23,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(90,22,23,0.7)]">
                Crear mi carta gratis
              </button>
              <button className="bg-white/50 backdrop-blur-md border border-gastro-wine-sec/30 text-gastro-wine-main px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gastro-wine-main hover:text-white transition-all shadow-sm hover:shadow-lg">
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
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gastro-gold-light/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gastro-wine-main/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
