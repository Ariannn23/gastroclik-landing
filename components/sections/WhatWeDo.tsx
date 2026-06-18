"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone, List, MessageCircle, DollarSign, Star } from "lucide-react";

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<"red" | "gold" | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="py-32 px-8 relative z-10 overflow-hidden"
      style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      <motion.div
        style={{ scale: scaleText }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            ¿Qué Hacemos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed mb-6 font-medium"
            style={{ color: "var(--color-text-soft)" }}
          >
            Cartas Digitales Web es un servicio integral que reemplaza cartas físicas, PDFs e
            imágenes desactualizadas. Permite tener una carta digital moderna, accesible desde
            cualquier dispositivo y conectada directamente con{" "}
            <span className="font-bold" style={{ color: "var(--color-primary-2)" }}>
              WhatsApp
            </span>{" "}
            para facilitar consultas y pedidos. Una solución rápida, ordenada y profesional.
          </motion.p>
        </div>

        {/* Imágenes parallax */}
        <div className="lg:w-1/2 w-full relative h-[500px] md:h-[600px] hidden md:block">
          {/* Card 1 — Borgoña */}
          <motion.div
            style={{ y: yImage1, background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))" }}
            onMouseEnter={() => setHoveredCard("red")}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{
              scale: hoveredCard === "gold" ? 0.95 : hoveredCard === "red" ? 1.05 : 1,
              boxShadow:
                hoveredCard === "red"
                  ? "0 25px 60px -12px rgba(90,22,23,0.6)"
                  : "0 10px 40px -8px rgba(0,0,0,0.25)",
              filter: hoveredCard === "gold" ? "brightness(0.7)" : "brightness(1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute left-0 top-16 w-[65%] h-64 md:h-80 rounded-[2.5rem] overflow-hidden flex items-center justify-center border-4 border-white ${
              hoveredCard === "gold" ? "z-10" : "z-20"
            }`}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
            <span className="relative z-10 text-white font-extrabold text-2xl drop-shadow-lg">
              Tu Restaurante
            </span>
          </motion.div>

          {/* Card 2 — Dorado */}
          <motion.div
            style={{ y: yImage2, background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            onMouseEnter={() => setHoveredCard("gold")}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{
              scale: hoveredCard === "red" ? 0.95 : hoveredCard === "gold" ? 1.05 : 1,
              boxShadow:
                hoveredCard === "gold"
                  ? "0 25px 60px -12px rgba(217,168,32,0.6)"
                  : "0 10px 40px -8px rgba(0,0,0,0.25)",
              filter: hoveredCard === "red" ? "brightness(0.7)" : "brightness(1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute right-0 bottom-16 w-[60%] h-64 md:h-80 rounded-[2.5rem] overflow-hidden flex items-center justify-center border-4 border-white ${
              hoveredCard === "red" ? "z-10" : "z-20"
            }`}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
            <span className="relative z-10 font-extrabold text-2xl drop-shadow-md" style={{ color: "var(--color-text)" }}>
              Tu Menú
            </span>
          </motion.div>

          {/* Glow decorativo */}
          <motion.div
            style={{ scale: scrollYProgress, opacity: scrollYProgress, background: "rgba(217,168,32,0.2)" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[60px] z-0 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* ── OBJETIVOS ── */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h3
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-primary-2)" }}
          >
            Nuestro Propósito
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
            Implementar una carta digital personalizada que ayude a mostrar productos de forma
            atractiva, mejorar la experiencia del cliente y facilitar el contacto directo para
            generar más ventas.
          </p>
        </motion.div>

        {/* Objetivos Específicos — Grid 3 columnas centrado */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-extrabold tracking-[0.1em] mb-10 uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          Objetivos Específicos
        </motion.h4>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Smartphone,
              title: "Interactiva y Responsive",
              desc: "Diseño adaptable a celular, tablet y computadora.",
            },
            {
              icon: List,
              title: "Menú Organizado",
              desc: "Platos estructurados de forma clara por categorías.",
            },
            {
              icon: MessageCircle,
              title: "Pedidos por WhatsApp",
              desc: "Enlace directo para consultas o compras con un botón.",
            },
            {
              icon: DollarSign,
              title: "Ahorro Garantizado",
              desc: "Reducción de costos de impresión y menor uso de PDFs.",
            },
            {
              icon: Star,
              title: "Presencia Profesional",
              desc: "Mejora de la imagen y presencia digital del restaurante.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group p-8 rounded-2xl flex flex-col items-center text-center"
                style={{
                  width: "calc(33.333% - 1rem)",
                  minWidth: "280px",
                  background: "rgba(255,249,240,0.85)",
                  border: "1px solid rgba(233,215,184,0.6)",
                }}
              >
                <div
                  className="w-14 h-14 mb-5 rounded-2xl flex items-center justify-center"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))"
                      : "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-extrabold mb-3" style={{ color: "var(--color-primary-2)" }}>
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
