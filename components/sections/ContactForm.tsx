"use client";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validación con Zod (solo nombre, email y mensaje)
const contactSchema = z.object({
  name: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Manejar envío: abrir WhatsApp con mensaje bonito
  const onSubmit = (data: ContactFormData) => {
    const phoneNumber = "51984221508"; // Número con código de país (sin +)

    // Construir mensaje con el formato deseado (el mensaje largo va como "Asunto")
    const message = `Hola, estoy interesado en el servicio, estos son mis datos 😊:
%0A%0ANombre completo: ${data.name}
%0AEmail: ${data.email}
%0AAsunto: ${data.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    reset(); // Limpia el formulario después de abrir WhatsApp
  };

  return (
    <section className="py-24 px-8 border-t border-gastro-wine-sec/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] bg-gastro-bg-main relative z-50 overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gastro-gold-light/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-gastro-wine-main/5 rounded-full blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gastro-gold-light/30 relative z-10"
      >
        {/* Mitad Izquierda: Formulario (ahora a la izquierda) */}
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center order-1 md:order-1">
          <h3 className="text-3xl font-bold mb-8 text-gastro-wine-main">Contáctanos</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {/* Nombre */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-gastro-wine-main transition-colors" />
              </div>
              <input
                type="text"
                {...register("name")}
                className={`w-full bg-gastro-bg-main/50 border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-gastro-wine-main/50 focus:border-gastro-wine-main focus:bg-white transition-all text-gastro-text-main placeholder-gray-400 font-medium`}
                placeholder="Tu nombre completo"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-gastro-wine-main transition-colors" />
              </div>
              <input
                type="email"
                {...register("email")}
                className={`w-full bg-gastro-bg-main/50 border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-gastro-wine-main/50 focus:border-gastro-wine-main focus:bg-white transition-all text-gastro-text-main placeholder-gray-400 font-medium`}
                placeholder="correo@restaurante.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Mensaje (será el "Asunto" en el WhatsApp) */}
            <div className="relative group">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-gastro-wine-main transition-colors" />
              </div>
              <textarea
                rows={4}
                {...register("message")}
                className={`w-full bg-gastro-bg-main/50 border ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-gastro-wine-main/50 focus:border-gastro-wine-main focus:bg-white transition-all text-gastro-text-main placeholder-gray-400 font-medium resize-none`}
                placeholder="¿En qué podemos ayudarte?"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 group flex items-center justify-center gap-3 bg-gradient-to-r from-gastro-wine-main to-gastro-wine-sec text-white font-bold px-6 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(90,22,23,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(90,22,23,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Mitad Derecha: Texto informativo (ahora a la derecha) */}
        <div className="md:w-1/2 bg-gradient-to-br from-gastro-wine-main to-gastro-wine-sec p-12 text-gastro-white-warm flex flex-col justify-center relative overflow-hidden order-2 md:order-2">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')] bg-repeat" />

          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6 text-gastro-gold-light">
              ¿Tienes dudas? <br /> Hablemos.
            </h2>
            <p className="mb-8 text-lg opacity-90 leading-relaxed font-medium">
              Estamos aquí para ayudarte a transformar tu restaurante. Escríbenos y un experto de
              nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-gastro-gold-main/20 flex items-center justify-center">
                  <span className="text-gastro-gold-main font-bold">✓</span>
                </div>
                Asesoría personalizada
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-gastro-gold-main/20 flex items-center justify-center">
                  <span className="text-gastro-gold-main font-bold">✓</span>
                </div>
                Demostración gratuita
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
