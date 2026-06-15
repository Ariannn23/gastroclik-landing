"use client";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="py-24 px-8 border-t border-gastro-wine-sec/10 shadow-sm relative z-10 bg-gastro-white-warm">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
      >
        
        {/* Lado Izquierdo: Texto */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gastro-wine-main">
            ¿Qué Hacemos?
          </h2>
          <p className="text-lg md:text-xl text-gastro-text-sec leading-relaxed mb-6">
            En GastroClick digitalizamos la experiencia gastronómica. Transformamos el menú físico de tu restaurante en una carta interactiva, rápida y atractiva a la que tus clientes pueden acceder con un simple escaneo.
          </p>
          <p className="text-lg md:text-xl text-gastro-text-sec leading-relaxed">
            Simplificamos tus operaciones, reducimos tus costos de impresión y modernizamos la imagen de tu local en menos de 24 horas.
          </p>
        </div>

        {/* Lado Derecho: Espacio para Imágenes */}
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gastro-bg-card rounded-2xl h-48 md:h-64 border border-gastro-gold-light/30 shadow-lg flex items-center justify-center transform translate-y-8"
          >
            <span className="text-gastro-text-sec text-sm font-bold">[Imagen 1]</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gastro-bg-card rounded-2xl h-48 md:h-64 border border-gastro-wine-sec/20 shadow-lg flex items-center justify-center"
          >
            <span className="text-gastro-text-sec text-sm font-bold">[Imagen 2]</span>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
