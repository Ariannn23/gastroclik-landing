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
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Bares y Pubs",
      desc: "Destaca tus promociones de fin de semana, happy hours y tu variedad de cócteles en tiempo real.",
      icon: Wine,
      delay: 0.3,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Food Trucks y Fast Food",
      desc: "Agiliza los pedidos mostrando tu carta interactiva para que los clientes decidan mientras hacen fila.",
      icon: Pizza,
      delay: 0.5,
      color: "from-yellow-400 to-orange-500"
    },
  ];

  return (
    <section className="py-32 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-bg-main relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gastro-wine-main">
            ¿A quién va dirigido?
          </h2>
          <p className="text-xl text-gastro-text-sec max-w-2xl mx-auto">
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
              {/* Resplandor de fondo dinámico */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              {/* Tarjeta Glassmorphism */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-gastro-gold-light/20 flex flex-col items-start overflow-hidden">
                
                {/* Marca de agua decorativa del ícono */}
                <card.icon className="absolute -right-10 -bottom-10 w-64 h-64 text-gastro-bg-card opacity-50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none" />

                {/* Contenedor del ícono vibrante */}
                <div className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg transform group-hover:-rotate-6 transition-transform duration-300`}>
                  <card.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="subtitle text-2xl font-extrabold mb-4 text-gastro-wine-sec relative z-10">{card.title}</h3>
                <p className="text-gastro-text-sec text-lg leading-relaxed relative z-10 flex-grow">{card.desc}</p>
                
                {/* Flecha interactiva que aparece en Hover */}
                <div className="mt-8 flex items-center gap-2 text-gastro-gold-main font-bold relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
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
