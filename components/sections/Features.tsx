"use client";
import { motion } from "framer-motion";
import { QrCode, Clock, Smartphone, BarChart3, Globe } from "lucide-react";

export default function Features() {
  const cards = [
    { title: "Escaneo QR", desc: "Acceso instantáneo sin descargar apps ni registrarse.", icon: QrCode, transform: "-translate-y-4" },
    { title: "Tiempo Real", desc: "Actualiza precios y platos en segundos desde tu panel.", icon: Clock, transform: "translate-y-12" },
    { title: "Responsivo", desc: "Se adapta perfectamente a cualquier tamaño de celular.", icon: Smartphone, transform: "-translate-y-4" },
    { title: "Estadísticas", desc: "Conoce los platos más visitados y toma mejores decisiones.", icon: BarChart3, transform: "translate-y-12" },
    { title: "Multi-idioma", desc: "Atrae turistas traduciendo tu menú automáticamente.", icon: Globe, transform: "-translate-y-4" },
  ];

  return (
    <section className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-bg-main overflow-hidden relative z-20">
      
      {/* Background glow global */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gastro-gold-light/10 blur-[100px] rounded-[100%] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gastro-wine-main"
        >
          Todo lo que necesitas para tu menú
        </motion.h2>
      </div>
        
      {/* Contenedor del Carrusel Infinito */}
      <div className="relative w-full overflow-hidden pt-10 pb-20 z-10">
        {/* Degradados en los bordes para un efecto suave */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-gastro-bg-main to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-gastro-bg-main to-transparent z-10 pointer-events-none"></div>

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
                className={`group relative w-[320px] md:w-[360px] h-[300px] shrink-0 bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/50 flex flex-col items-center justify-center p-8 hover:border-gastro-gold-light/50 transition-all ${card.transform}`}
              >
                {/* Resplandor interno hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gastro-gold-light/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Contenedor del Icono Premium */}
                <div className="relative z-10 w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <card.icon className="w-10 h-10 text-white relative z-10" />
                </div>
                
                <h3 className="font-extrabold text-2xl text-gastro-wine-main mb-3 relative z-10">{card.title}</h3>
                <p className="text-center text-gastro-text-sec text-lg leading-relaxed relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Grupo 2 (Duplicado exacto para el efecto seamless) */}
          <div className="flex gap-8 pr-8 shrink-0 w-max">
            {cards.map((card, index) => (
              <div 
                key={`g2-${index}`} 
                className={`group relative w-[320px] md:w-[360px] h-[300px] shrink-0 bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/50 flex flex-col items-center justify-center p-8 hover:border-gastro-gold-light/50 transition-all ${card.transform}`}
              >
                {/* Resplandor interno hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gastro-gold-light/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Contenedor del Icono Premium */}
                <div className="relative z-10 w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <card.icon className="w-10 h-10 text-white relative z-10" />
                </div>
                
                <h3 className="font-extrabold text-2xl text-gastro-wine-main mb-3 relative z-10">{card.title}</h3>
                <p className="text-center text-gastro-text-sec text-lg leading-relaxed relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
