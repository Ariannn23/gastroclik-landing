"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CallToAction() {
  const planFeatures = [
    "Menú interactivo escaneable por código QR",
    "Actualización de platos y precios en tiempo real",
    "Estadísticas de visitas a tu carta digital",
    "Alojamiento web y soporte técnico incluidos",
    "Cero comisiones por uso o cantidad de escaneos",
  ];

  return (
    <section className="py-32 px-8 relative overflow-hidden bg-gastro-white-warm">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(90,22,23,0.6)] flex flex-col lg:flex-row overflow-hidden relative"
        >
          {/* Lado Izquierdo: Texto y CTA */}
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gastro-white-warm leading-tight">
              ¿Listo para dar el siguiente <br className="hidden md:block" /> paso con{" "}
              <span className="text-gastro-gold-main">GastroClick</span>?
            </h2>
            <p className="text-lg md:text-xl text-gastro-white-warm/80 mb-10 leading-relaxed font-medium">
              Obtén acceso total a todas nuestras herramientas por un único pago mensual. Sin
              contratos forzosos ni comisiones ocultas.
            </p>
          </div>

          {/* Lado Derecho: Pricing Card Animada */}
          <div className="lg:w-1/2 relative bg-gastro-bg-main p-12 flex items-center justify-center lg:border-l border-gastro-wine-main/20">
            {/* Resplandor detrás de la tarjeta */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-gastro-gold-main/20 rounded-full blur-[80px]"></div>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-8 md:p-10 relative z-10 border border-gastro-gold-light/30"
            >
              <div className="absolute top-0 right-0 bg-gastro-gold-main text-gastro-text-main font-bold text-sm px-5 py-1 rounded-bl-xl rounded-tr-[2rem] shadow-md">
                Plan Único
              </div>

              <div className="mb-8 mt-2">
                <span className="text-5xl font-black text-gastro-wine-main" style={{ fontFamily: "var(--font-heading)" }}>S/. 30</span>
                <span className="text-gastro-text-sec font-bold"> /mes</span>
              </div>

              <ul className="space-y-4 mb-8">
                {planFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gastro-gold-main shrink-0 mt-0.5" />
                    <span className="text-gastro-text-main font-medium leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gastro-wine-main text-white font-bold py-4 rounded-xl hover:bg-gastro-wine-sec transition-colors shadow-lg hover:shadow-xl active:scale-95 cursor-pointer">
                Elegir este plan
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Círculos decorativos de fondo global */}
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-gastro-gold-light/20 rounded-full blur-3xl -translate-y-1/2 z-0 pointer-events-none"></div>
    </section>
  );
}
