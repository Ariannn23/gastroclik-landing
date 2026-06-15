"use client";
import { motion } from "framer-motion";

export default function RegisterForm() {
  return (
    <section className="py-24 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-bg-main relative z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gastro-gold-light/20"
      >
        
        {/* Mitad Izquierda: Beneficios (Color Principal) */}
        <div className="md:w-1/2 bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec p-12 text-gastro-white-warm flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gastro-gold-light">Únete a la revolución digital</h2>
          <p className="mb-8 opacity-90 leading-relaxed">
            Regístrate hoy mismo y descubre por qué cientos de restaurantes ya confían en GastroClick para gestionar sus menús.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-gastro-gold-main font-bold">✓</span> Configuración en minutos
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gastro-gold-main font-bold">✓</span> Escaneo QR ilimitado
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gastro-gold-main font-bold">✓</span> Soporte técnico gratuito
            </li>
          </ul>
        </div>

        {/* Mitad Derecha: Formulario */}
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 text-gastro-wine-main">Crear mi cuenta</h3>
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-bold text-gastro-text-sec mb-2">Nombre del Restaurante</label>
              <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gastro-gold-main focus:border-transparent transition-all" placeholder="Ej. El Buen Sabor" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gastro-text-sec mb-2">Correo Electrónico</label>
              <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gastro-gold-main focus:border-transparent transition-all" placeholder="correo@restaurante.com" />
            </div>
            <button type="submit" className="mt-4 bg-gradient-to-r from-gastro-gold-main to-gastro-gold-light text-gastro-text-main font-bold px-6 py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
              Comenzar prueba gratis
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">
              Sin tarjeta de crédito. Cancela en cualquier momento.
            </p>
          </form>
        </div>

      </motion.div>
    </section>
  );
}
