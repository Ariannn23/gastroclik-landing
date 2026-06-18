"use client";
import { motion } from "framer-motion";
import { QrCode, Clock, Smartphone, BarChart3, Globe } from "lucide-react";

export default function Features() {
  const cards = [
    { title: "Escaneo QR",    desc: "Acceso instantáneo sin descargar apps ni registrarse.", icon: QrCode,    transform: "-translate-y-4"  },
    { title: "Tiempo Real",   desc: "Actualiza precios y platos en segundos desde tu panel.", icon: Clock,     transform: "translate-y-12"  },
    { title: "Responsivo",    desc: "Se adapta perfectamente a cualquier tamaño de celular.", icon: Smartphone, transform: "-translate-y-4" },
    { title: "Estadísticas",  desc: "Conoce los platos más visitados y toma mejores decisiones.", icon: BarChart3, transform: "translate-y-12" },
    { title: "Multi-idioma",  desc: "Atrae turistas traduciendo tu menú automáticamente.",    icon: Globe,     transform: "-translate-y-4"  },
  ];

  return (
    <section
      className="py-32 px-8 overflow-hidden relative z-20"
      style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      {/* Glow central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] blur-[100px] pointer-events-none z-0"
        style={{ background: "rgba(217,168,32,0.08)" }}
      />

      {/* Título */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-center"
          style={{ color: "var(--color-primary)" }}
        >
          Todo lo que necesitas para tu menú
        </motion.h2>
      </div>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden pt-10 pb-20 z-10">
        {/* Degradados de borde */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }} />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }} />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex w-max"
        >
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-8 pr-8 shrink-0 w-max">
              {cards.map((card, index) => (
                <div
                  key={`g${group}-${index}`}
                  className={`group relative w-[320px] md:w-[360px] h-[300px] shrink-0 backdrop-blur-xl rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center p-8 transition-all ${card.transform}`}
                  style={{
                    background: "rgba(248,238,220,0.7)",
                    border: "1px solid rgba(233,215,184,0.8)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(217,168,32,0.08))" }}
                  />

                  {/* Icono */}
                  <div
                    className="relative z-10 w-20 h-20 mb-6 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                    style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))" }}
                  >
                    <card.icon className="w-10 h-10 text-white relative z-10" />
                  </div>

                  <h3 className="font-extrabold text-2xl mb-3 relative z-10"
                    style={{ color: "var(--color-primary)" }}>
                    {card.title}
                  </h3>
                  <p className="text-center text-lg leading-relaxed relative z-10"
                    style={{ color: "var(--color-text-soft)" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
