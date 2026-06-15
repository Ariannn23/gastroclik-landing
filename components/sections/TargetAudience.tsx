"use client";
import { motion } from "framer-motion";
import { Utensils, Wine, Bed } from "lucide-react";

export default function TargetAudience() {
  const cards = [
    {
      title: "Restaurantes y Cafeterías",
      desc: "Ideal para locales que buscan actualizar su menú frecuentemente sin costos de impresión.",
      icon: Utensils,
      delay: 0.1,
    },
    {
      title: "Bares y Pubs",
      desc: "Perfecto para mostrar cócteles y promociones dinámicas en tiempo real.",
      icon: Wine,
      delay: 0.3,
    },
    {
      title: "Hoteles y Room Service",
      desc: "Digitaliza el menú de habitaciones para una experiencia más higiénica y premium.",
      icon: Bed,
      delay: 0.5,
    },
  ];

  return (
    <section className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-bg-main relative z-30 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-gastro-wine-main"
        >
          ¿A quién va dirigido?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: card.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gastro-wine-main/5 border border-gastro-gold-light/20 flex flex-col items-center text-center group cursor-pointer transition-colors hover:border-gastro-gold-main"
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-gastro-bg-card flex items-center justify-center group-hover:bg-gastro-wine-main group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-10 h-10 text-gastro-gold-main group-hover:text-gastro-gold-light transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gastro-wine-sec group-hover:text-gastro-wine-main transition-colors">{card.title}</h3>
              <p className="text-gastro-text-sec">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
