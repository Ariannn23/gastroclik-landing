"use client";
import { motion } from "framer-motion";

export default function Features() {
  // Duplicamos las tarjetas para que el carrusel sea infinito
  const cards = [
    { title: "Escaneo QR", desc: "Acceso instantáneo sin descargar apps.", transform: "-translate-y-4" },
    { title: "Tiempo Real", desc: "Actualiza precios y platos en segundos.", transform: "translate-y-12" },
    { title: "Diseño Responsivo", desc: "Perfecto en cualquier dispositivo.", transform: "-translate-y-4" },
    { title: "Estadísticas", desc: "Conoce los platos más visitados.", transform: "translate-y-12" },
    { title: "Multi-idioma", desc: "Atrae turistas traduciendo tu menú.", transform: "-translate-y-4" },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-white-warm overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gastro-wine-main"
        >
          Todo lo que necesitas para tu menú
        </motion.h2>
      </div>
        
      {/* Contenedor del Carrusel Infinito */}
      <div className="relative w-full overflow-hidden pb-16">
        {/* Degradados en los bordes para un efecto suave */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gastro-white-warm to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gastro-white-warm to-transparent z-10"></div>

        <motion.div 
          animate={{ x: [0, -1700] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 w-max px-4"
        >
          {duplicatedCards.map((card, index) => (
            <div 
              key={index} 
              className={`w-[300px] h-80 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-8 hover:border-gastro-gold-main transition-colors ${card.transform}`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gastro-gold-main to-gastro-gold-light rounded-full mb-6 shadow-md flex items-center justify-center text-white font-bold text-2xl">
                ✓
              </div>
              <h3 className="font-extrabold text-xl text-gastro-wine-sec mb-3">{card.title}</h3>
              <p className="text-center text-gastro-text-sec leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
