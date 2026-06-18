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
    <section
      className="py-32 px-8 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Glow decorativo */}
      <div
        className="absolute top-1/2 left-10 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 z-0 pointer-events-none"
        style={{ background: "rgba(217,168,32,0.15)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] flex flex-col lg:flex-row overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
            boxShadow: "0 20px 60px -15px rgba(90,22,23,0.55)",
          }}
        >
          {/* Izquierdo: texto */}
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative z-10">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: "var(--color-text-light)" }}
            >
              ¿Listo para dar el siguiente <br className="hidden md:block" /> paso con{" "}
              <span style={{ color: "var(--color-accent-2)" }}>GastroClick</span>?
            </h2>
            <p
              className="text-lg md:text-xl mb-10 leading-relaxed font-medium"
              style={{ color: "rgba(255,249,240,0.8)" }}
            >
              Obtén acceso total a todas nuestras herramientas por un único pago mensual. Sin
              contratos forzosos ni comisiones ocultas.
            </p>
          </div>

          {/* Derecho: pricing card */}
          <div
            className="lg:w-1/2 relative p-12 flex items-center justify-center"
            style={{
              background: "var(--color-bg)",
              borderLeft: "1px solid rgba(90,22,23,0.15)",
            }}
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
              <div
                className="w-64 h-64 md:w-96 md:h-96 rounded-full blur-[80px]"
                style={{ background: "rgba(217,168,32,0.18)" }}
              />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-sm rounded-[2rem] shadow-2xl p-8 md:p-10 relative z-10"
              style={{
                background: "#fff",
                border: "1px solid rgba(217,168,32,0.3)",
              }}
            >
              {/* Badge */}
              <div
                className="absolute top-0 right-0 font-bold text-sm px-5 py-1 rounded-bl-xl rounded-tr-[2rem] shadow-md"
                style={{ background: "var(--color-accent)", color: "var(--color-text)" }}
              >
                Plan Único
              </div>

              {/* Precio */}
              <div className="mb-8 mt-2">
                <span
                  className="text-5xl font-black"
                  style={{ color: "var(--color-primary)" }}
                >
                  S/. 30
                </span>
                <span className="font-bold" style={{ color: "var(--color-text-soft)" }}> /mes</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {planFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }} />
                    <span className="font-medium leading-tight" style={{ color: "var(--color-text)" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button
                className="w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-text-light)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-primary-2)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-primary)")}
              >
                Elegir este plan
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
