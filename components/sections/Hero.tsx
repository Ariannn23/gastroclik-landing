"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroBg from "@/public/images/hero4k.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Imagen de fondo con Ken Burns ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-ken-burns w-full h-full">
          <Image
            src={HeroBg}
            alt="Restaurante elegante de fondo"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
        </div>
        {/* Overlay oscuro cálido recomendado */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(25,10,8,0.62) 0%, rgba(25,10,8,0.38) 50%, rgba(25,10,8,0.70) 100%)" }}
        />
        {/* Tinte borgoña desde abajo */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(90,22,23,0.45) 0%, transparent 55%)" }}
        />
      </div>

      {/* ── Navbar integrado ── */}
      <nav className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer"
          >
            <span
              className="text-2xl font-extrabold tracking-tight drop-shadow-md"
              style={{ color: "var(--color-text-light)" }}
            >
              GastroClick
              <sup className="text-xs font-normal align-super opacity-70">®</sup>
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {["Inicio", "Características", "Plantillas", "Precios"].map((link, i) => (
              <a
                key={link}
                href="#"
                className="text-sm transition-colors duration-200"
                style={{
                  color: i === 0 ? "var(--color-accent-2)" : "rgba(255,249,240,0.65)",
                  fontWeight: i === 0 ? 700 : 500,
                }}
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* CTA Navbar */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="liquid-glass-dark rounded-full px-6 py-2.5 text-sm font-semibold hover:scale-[1.04] transition-transform hidden md:block"
            style={{ color: "var(--color-text-light)" }}
          >
            Ingresar
          </motion.button>
        </div>
      </nav>

      {/* ── Contenido principal ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass-dark rounded-full px-5 py-2 mb-10 text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--color-accent-2)" }}
        >
          ✦ &nbsp;Cartas digitales para restaurantes modernos &nbsp;✦
        </motion.div>

        {/* Título — Inter Black */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-[-3px] mb-8 max-w-4xl drop-shadow-lg uppercase"
          style={{ color: "var(--color-text-light)" }}
        >
          Tu menú en un{" "}
          <em className="not-italic" style={{ color: "var(--color-accent-2)" }}>
            solo click.
          </em>
        </motion.h1>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="text-lg sm:text-xl max-w-xl leading-relaxed mb-14"
          style={{ color: "rgba(255,249,240,0.72)" }}
        >
          Crea cartas digitales interactivas y elegantes. Moderniza tu restaurante
          y deleita a tus comensales con una experiencia que enamora.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          {/* Principal: dorado */}
          <button
            className="rounded-full px-10 py-4 hover:scale-[1.04] transition-all"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-text)",
              boxShadow: "0 0 30px rgba(217,168,32,0.45)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-accent-2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--color-accent)")}
          >
            Crear mi carta gratis
          </button>

          {/* Secundario: glass */}
          <button
            className="liquid-glass-dark rounded-full px-10 py-4 hover:scale-[1.04] transition-transform"
            style={{ color: "var(--color-text-light)" }}
          >
            Ver ejemplos →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex gap-10 mt-16"
        >
          {[
            { num: "+500", label: "Restaurantes" },
            { num: "+12k", label: "Menús creados" },
            { num: "4.9★", label: "Valoración" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: "var(--color-accent-2)" }}
              >
                {stat.num}
              </p>
              <p
                className="text-xs mt-0.5 uppercase tracking-wider"
                style={{ color: "rgba(255,249,240,0.5)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Transición suave hacia la siguiente sección */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to top, var(--color-bg), transparent)" }}
      />
    </section>
  );
}
