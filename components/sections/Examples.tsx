"use client";
import { motion } from "framer-motion";

export default function Examples() {
  return (
    <section className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-sm bg-gastro-white-warm relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-center text-gastro-wine-main">
          Inspírate con nuestras plantillas
        </h2>
        <p className="text-center text-gastro-text-sec mb-16 max-w-2xl mx-auto">
          Descubre cómo lucen nuestras plantillas principales aplicadas en casos reales.
        </p>
        
        {/* Layout para 3 items (El centro destacado) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          
          {/* Ejemplo 1 (Lateral Izquierdo) */}
          <div className="w-full lg:w-1/3 h-[400px] bg-gastro-bg-card border border-gastro-wine-sec/20 rounded-3xl shadow-xl flex items-center justify-center transform lg:scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all duration-300">
            <p className="subtitle text-gastro-text-sec font-bold">Estilo Clásico</p>
          </div>
          
          {/* Ejemplo 2 (Centro - Destacado) */}
          <div className="w-full lg:w-1/3 h-[480px] bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec text-gastro-white-warm border-2 border-gastro-gold-main rounded-3xl shadow-[0_20px_50px_-10px_rgba(90,22,23,0.5)] flex items-center justify-center transform z-10 hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="absolute top-4 bg-gastro-gold-main text-xs font-bold px-3 py-1 rounded-full text-gastro-text-main shadow-lg">Más Popular</div>
            <p className="subtitle font-bold text-xl">Estilo Moderno (Dark)</p>
          </div>
          
          {/* Ejemplo 3 (Lateral Derecho) */}
          <div className="w-full lg:w-1/3 h-[400px] bg-gastro-bg-card border border-gastro-wine-sec/20 rounded-3xl shadow-xl flex items-center justify-center transform lg:scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all duration-300">
            <p className="subtitle text-gastro-text-sec font-bold">Estilo Minimalista</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
