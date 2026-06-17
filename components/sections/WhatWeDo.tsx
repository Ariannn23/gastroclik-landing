"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<"red" | "gold" | null>(null);

  // Capturamos el progreso del scroll respecto a este contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transformaciones basadas en el scroll (Efecto Parallax Real)
  // La imagen 1 sube, la imagen 2 baja y el texto cambia ligeramente de escala
  const yImage1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-sm relative z-10 bg-gastro-white-warm overflow-hidden"
    >
      <motion.div
        style={{ scale: scaleText }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Lado Izquierdo: Texto */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-8 text-gastro-wine-main"
          >
            ¿Qué Hacemos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gastro-text-sec leading-relaxed mb-6 font-medium"
          >
            En GastroClick digitalizamos la experiencia gastronómica. Transformamos el menú físico
            de tu restaurante en una{" "}
            <span className="text-gastro-wine-sec font-bold">
              carta interactiva, rápida y atractiva
            </span>{" "}
            a la que tus clientes pueden acceder con un simple escaneo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gastro-text-sec leading-relaxed font-medium"
          >
            Simplificamos tus operaciones,{" "}
            <span className="text-gastro-gold-main font-bold text-xl">
              reducimos tus costos de impresión
            </span>{" "}
            y modernizamos la imagen de tu local en menos de 24 horas.
          </motion.p>
        </div>

        {/* Lado Derecho: Imágenes con Parallax ligado al scroll */}
        <div className="lg:w-1/2 w-full relative h-[500px] md:h-[600px] hidden md:block">
          {/* Imagen 1 (Se mueve hacia ARRIBA mientras scrolleas hacia abajo) */}
          <motion.div
            style={{ y: yImage1 }}
            onMouseEnter={() => setHoveredCard("red")}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{
              scale: hoveredCard === "gold" ? 0.95 : hoveredCard === "red" ? 1.05 : 1,
              boxShadow:
                hoveredCard === "red"
                  ? "0 25px 60px -12px rgba(139, 43, 43, 0.6)"
                  : hoveredCard === "gold"
                  ? "0 10px 30px -8px rgba(0,0,0,0.2)"
                  : "0 10px 40px -8px rgba(0,0,0,0.3)",
              filter: hoveredCard === "gold" ? "brightness(0.7)" : "brightness(1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute left-0 top-16 w-[65%] h-64 md:h-80 bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec rounded-[2.5rem] overflow-hidden flex items-center justify-center border-4 border-white ${
              hoveredCard === "gold" ? "z-10" : "z-20"
            }`}
          >
            {/* Fondo de restaurante simulado con Unsplash */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gastro-wine-main/30"></div>
            <span className="relative z-10 text-white font-extrabold text-2xl drop-shadow-lg">
              Tu Restaurante
            </span>
          </motion.div>

          {/* Imagen 2 (Se mueve hacia ABAJO mientras scrolleas hacia abajo) */}
          <motion.div
            style={{ y: yImage2 }}
            onMouseEnter={() => setHoveredCard("gold")}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{
              scale: hoveredCard === "red" ? 0.95 : hoveredCard === "gold" ? 1.05 : 1,
              boxShadow:
                hoveredCard === "gold"
                  ? "0 25px 60px -12px rgba(212, 175, 55, 0.6)"
                  : hoveredCard === "red"
                  ? "0 10px 30px -8px rgba(0,0,0,0.2)"
                  : "0 10px 40px -8px rgba(0,0,0,0.3)",
              filter: hoveredCard === "red" ? "brightness(0.7)" : "brightness(1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute right-0 bottom-16 w-[60%] h-64 md:h-80 bg-gradient-to-br from-gastro-gold-main to-gastro-gold-light rounded-[2.5rem] overflow-hidden flex items-center justify-center border-4 border-white ${
              hoveredCard === "red" ? "z-10" : "z-20"
            }`}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gastro-gold-main/20"></div>
            <span className="relative z-10 text-gastro-wine-main font-extrabold text-2xl drop-shadow-md">
              Tu Menú
            </span>
          </motion.div>

          {/* Elemento decorativo dinámico */}
          <motion.div
            style={{ scale: scrollYProgress, opacity: scrollYProgress }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gastro-gold-main/20 rounded-full blur-[50px] z-0 pointer-events-none"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
