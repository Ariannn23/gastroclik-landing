"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-32 px-8 relative overflow-hidden bg-gastro-white-warm">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec p-16 md:p-24 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(90,22,23,0.6)] relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gastro-white-warm leading-tight">
          ¿Listo para dar el siguiente <br className="hidden md:block"/> paso con <span className="text-gastro-gold-main">GastroClick</span>?
        </h2>
        <p className="text-xl text-gastro-white-warm/80 mb-12 max-w-2xl mx-auto">
          No te quedes atrás. Digitaliza tu menú hoy mismo y ofrécele a tus clientes una experiencia inolvidable desde su propio teléfono.
        </p>
        <button className="bg-gastro-gold-main text-gastro-text-main px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-gastro-gold-light hover:scale-105 transition-all shadow-[0_10px_30px_-10px_rgba(216,150,0,0.8)]">
          Probar Gratis por 14 Días
        </button>
      </motion.div>

      {/* Círculos decorativos de fondo */}
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-gastro-gold-light/20 rounded-full blur-3xl -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gastro-wine-main/10 rounded-full blur-3xl -translate-y-1/2 z-0"></div>
    </section>
  );
}
