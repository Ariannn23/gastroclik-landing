"use client";
import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Pizza } from "lucide-react";

export default function TargetAudience() {
  const cards = [
    {
      title: "Restaurantes de Autor",
      desc: "Actualiza tu menú por temporadas, añade fotos de alta calidad y cambia precios sin costos de impresión.",
      icon: UtensilsCrossed,
      delay: 0.1,
      glowColor: "rgba(90,22,23,0.25)",
      gradient: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
    },
    {
      title: "Bares y Pubs",
      desc: "Destaca tus promociones de fin de semana, happy hours y tu variedad de cócteles en tiempo real.",
      icon: Wine,
      delay: 0.3,
      glowColor: "rgba(138,90,59,0.3)",
      gradient: "linear-gradient(135deg, var(--color-support), var(--color-primary))",
    },
    {
      title: "Food Trucks y Fast Food",
      desc: "Agiliza los pedidos mostrando tu carta interactiva para que los clientes decidan mientras hacen fila.",
      icon: Pizza,
      delay: 0.5,
      glowColor: "rgba(217,168,32,0.3)",
      gradient: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
    },
  ];

  return (
    <section
      className="py-32 px-8 relative z-30 overflow-hidden"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            ¿A quién va dirigido?
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--color-text-soft)" }}>
            Soluciones adaptadas exclusivamente para negocios de comida y bebidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: card.delay }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              {/* Glow de fondo */}
              <div
                className="absolute inset-0 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: card.glowColor }}
              />

              {/* Tarjeta */}
              <div
                className="relative h-full backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl flex flex-col items-start overflow-hidden"
                style={{
                  background: "rgba(255,249,240,0.85)",
                  border: "1px solid rgba(217,168,32,0.2)",
                }}
              >
                {/* Ícono marca de agua */}
                <card.icon
                  className="absolute -right-10 -bottom-10 w-64 h-64 opacity-[0.06] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none"
                  style={{ color: "var(--color-primary)" }}
                />

                {/* Ícono principal */}
                <div
                  className="w-20 h-20 mb-8 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-rotate-6 transition-transform duration-300"
                  style={{ background: card.gradient }}
                >
                  <card.icon className="w-10 h-10 text-white" />
                </div>

                <h3
                  className="text-2xl font-extrabold mb-4 relative z-10"
                  style={{ color: "var(--color-primary-2)" }}
                >
                  {card.title}
                </h3>
                <p className="text-lg leading-relaxed relative z-10 flex-grow" style={{ color: "var(--color-text-soft)" }}>
                  {card.desc}
                </p>

                {/* Flecha hover */}
                <div
                  className="mt-8 flex items-center gap-2 font-bold relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: "var(--color-accent)" }}
                >
                  <span>Descubrir más</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
