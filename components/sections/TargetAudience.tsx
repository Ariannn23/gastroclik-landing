"use client";
import { motion } from "framer-motion";
import { Store, Wine, Pizza, Truck, Rocket, ArrowRight } from "lucide-react";

export default function TargetAudience() {
  const cards = [
    {
      title: "Restaurantes y Cafeterías",
      desc: "Muestra tu menú diario y especialidades de forma elegante.",
      icon: Store,
      delay: 0.1,
      gradient: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
    },
    {
      title: "Bares y Pubs",
      desc: "Destaca tus cócteles, happy hours y promociones del día.",
      icon: Wine,
      delay: 0.2,
      gradient: "linear-gradient(135deg, var(--color-support), var(--color-primary))",
    },
    {
      title: "Sangucherías y Fast Food",
      desc: "Agiliza la fila mostrando tu carta interactiva con QR.",
      icon: Pizza,
      delay: 0.3,
      gradient: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
    },
    {
      title: "Dark Kitchens y Delivery",
      desc: "Facilita la venta directa a través de WhatsApp sin intermediarios.",
      icon: Truck,
      delay: 0.4,
      gradient: "linear-gradient(135deg, var(--color-primary-2), var(--color-support))",
    },
    {
      title: "Emprendimientos Gastronómicos",
      desc: "La solución más rápida y económica para empezar a vender.",
      icon: Rocket,
      delay: 0.5,
      gradient: "linear-gradient(135deg, var(--color-accent), var(--color-primary))",
    },
  ];

  return (
    <section
      className="py-32 px-8 relative z-30 overflow-hidden"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ─── HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            MERCADO Y OPORTUNIDAD
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
            Muchos negocios necesitan mostrar su carta de forma digital, rápida y económica, sin
            depender de archivos PDF pesados, imágenes desactualizadas o galerías de redes sociales
            desordenadas. Una solución profesional y ordenada para todo tipo de negocio gastronómico.
          </p>
        </motion.div>

        {/* ─── CARDS ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: card.delay * 0.6 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div
                className="relative rounded-2xl p-6 h-full flex flex-col items-center text-center overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,249,240,0.85)",
                  border: "1px solid rgba(217,168,32,0.15)",
                  boxShadow: "0 2px 20px rgba(90,22,23,0.06)",
                }}
              >
                {/* Icono */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: card.gradient }}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-lg font-extrabold mb-2"
                  style={{ color: "var(--color-primary-2)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-grow"
                  style={{ color: "var(--color-text-soft)" }}
                >
                  {card.desc}
                </p>

                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: "var(--color-accent)" }}
                >
                  <span>Saber más</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
