"use client";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-24 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-white-warm overflow-hidden relative z-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gastro-wine-main">
          [Sección: Funcionalidades - Carrusel]
        </h2>
        
        {/* Contenedor del Carrusel (Simulación) */}
        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-12 snap-x px-4 no-scrollbar">
          
          {/* Tarjeta 1 (Arriba) */}
          <div className="min-w-[280px] h-80 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-6 snap-center transform -translate-y-4 hover:border-gastro-gold-main transition-colors">
            <div className="w-16 h-16 bg-gastro-gold-light rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-gastro-wine-sec mb-2">Escaneo QR</h3>
            <p className="text-center text-sm text-gastro-text-sec">Acceso instantáneo sin descargar apps.</p>
          </div>

          {/* Tarjeta 2 (Abajo) */}
          <div className="min-w-[280px] h-80 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-6 snap-center transform translate-y-12 hover:border-gastro-gold-main transition-colors">
            <div className="w-16 h-16 bg-gastro-gold-light rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-gastro-wine-sec mb-2">Tiempo Real</h3>
            <p className="text-center text-sm text-gastro-text-sec">Actualiza precios y platos en segundos.</p>
          </div>

          {/* Tarjeta 3 (Arriba) */}
          <div className="min-w-[280px] h-80 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-6 snap-center transform -translate-y-4 hover:border-gastro-gold-main transition-colors">
            <div className="w-16 h-16 bg-gastro-gold-light rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-gastro-wine-sec mb-2">Diseño Responsivo</h3>
            <p className="text-center text-sm text-gastro-text-sec">Perfecto en cualquier dispositivo.</p>
          </div>

          {/* Tarjeta 4 (Abajo) */}
          <div className="min-w-[280px] h-80 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-6 snap-center transform translate-y-12 hover:border-gastro-gold-main transition-colors">
            <div className="w-16 h-16 bg-gastro-gold-light rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-gastro-wine-sec mb-2">Estadísticas</h3>
            <p className="text-center text-sm text-gastro-text-sec">Conoce los platos más visitados.</p>
          </div>

          {/* Tarjeta 5 (Arriba) */}
          <div className="min-w-[280px] h-80 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-6 snap-center transform -translate-y-4 hover:border-gastro-gold-main transition-colors">
            <div className="w-16 h-16 bg-gastro-gold-light rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-gastro-wine-sec mb-2">Multi-idioma</h3>
            <p className="text-center text-sm text-gastro-text-sec">Atrae turistas traduciendo tu menú.</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
