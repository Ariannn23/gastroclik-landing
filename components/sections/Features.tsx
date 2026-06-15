"use client";
import { motion } from "framer-motion";

export default function Features() {
  const cards = [
    { title: "Escaneo QR", desc: "Acceso instantáneo sin descargar apps.", transform: "-translate-y-4" },
    { title: "Tiempo Real", desc: "Actualiza precios y platos en segundos.", transform: "translate-y-12" },
    { title: "Diseño Responsivo", desc: "Perfecto en cualquier dispositivo.", transform: "-translate-y-4" },
    { title: "Estadísticas", desc: "Conoce los platos más visitados.", transform: "translate-y-12" },
    { title: "Multi-idioma", desc: "Atrae turistas traduciendo tu menú.", transform: "-translate-y-4" },
  ];

  return (
    <section className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-white-warm overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto mb-20">
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
      <div className="relative w-full overflow-hidden pb-20">
        {/* Degradados en los bordes para un efecto suave */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gastro-white-warm to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gastro-white-warm to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex w-max"
        >
          {/* Grupo 1 */}
          <div className="flex gap-8 pr-8 shrink-0 w-max">
            {cards.map((card, index) => (
              <div 
                key={`g1-${index}`} 
                className={`w-[320px] md:w-[350px] h-[280px] shrink-0 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-8 hover:border-gastro-gold-main transition-colors ${card.transform}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gastro-gold-main to-gastro-gold-light rounded-full mb-6 shadow-md flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <h3 className="font-extrabold text-2xl text-gastro-wine-sec mb-3">{card.title}</h3>
                <p className="text-center text-gastro-text-sec text-lg leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Grupo 2 (Duplicado exacto para el efecto seamless) */}
          <div className="flex gap-8 pr-8 shrink-0 w-max">
            {cards.map((card, index) => (
              <div 
                key={`g2-${index}`} 
                className={`w-[320px] md:w-[350px] h-[280px] shrink-0 bg-gastro-bg-card rounded-3xl shadow-xl border border-gastro-gold-light/20 flex flex-col items-center justify-center p-8 hover:border-gastro-gold-main transition-colors ${card.transform}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gastro-gold-main to-gastro-gold-light rounded-full mb-6 shadow-md flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <h3 className="font-extrabold text-2xl text-gastro-wine-sec mb-3">{card.title}</h3>
                <p className="text-center text-gastro-text-sec text-lg leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
