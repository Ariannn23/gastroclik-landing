"use client";
import { motion } from "framer-motion";

export default function Examples() {
  return (
    <section
      className="py-32 px-8 relative z-40"
      style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-4 text-center"
          style={{ color: "var(--color-primary)" }}
        >
          Inspírate con nuestras plantillas
        </h2>
        <p
          className="text-center mb-16 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-soft)" }}
        >
          Descubre cómo lucen nuestras plantillas principales aplicadas en casos reales.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Lateral izquierdo */}
          <div
            className="w-full lg:w-1/3 h-[400px] rounded-3xl shadow-xl flex items-center justify-center transform lg:scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all duration-300 cursor-pointer"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-surface-2)",
            }}
          >
            <p className="font-bold" style={{ color: "var(--color-text-soft)" }}>
              Estilo Clásico
            </p>
          </div>

          {/* Centro — destacado */}
          <div
            className="w-full lg:w-1/3 h-[480px] rounded-3xl shadow-2xl flex items-center justify-center transform z-10 hover:-translate-y-2 transition-transform duration-300 relative cursor-pointer"
            style={{
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
              border: "2px solid var(--color-accent)",
              boxShadow: "0 20px 50px -10px rgba(90,22,23,0.5)",
            }}
          >
            <div
              className="absolute top-4 text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-text)",
              }}
            >
              Más Popular
            </div>
            <p className="font-bold text-xl" style={{ color: "var(--color-text-light)" }}>
              Estilo Moderno (Dark)
            </p>
          </div>

          {/* Lateral derecho */}
          <div
            className="w-full lg:w-1/3 h-[400px] rounded-3xl shadow-xl flex items-center justify-center transform lg:scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all duration-300 cursor-pointer"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-surface-2)",
            }}
          >
            <p className="font-bold" style={{ color: "var(--color-text-soft)" }}>
              Estilo Minimalista
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
