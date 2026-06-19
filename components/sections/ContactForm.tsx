"use client";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data: ContactFormData) => {
    const phoneNumber = "51984221508";
    const message = `Hola, estoy interesado en el servicio, estos son mis datos 😊:\n\nNombre completo: ${data.name}\nEmail: ${data.email}\nAsunto: ${data.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    reset();
  };

  return (
    <section
      className="py-24 px-8 relative z-50 overflow-hidden"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      {/* Glows de fondo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(217,168,32,0.08)" }}
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-2xl"
        style={{ background: "rgba(90,22,23,0.06)" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10"
        style={{
          background: "rgba(255,249,240,0.9)",
          border: "1px solid rgba(217,168,32,0.25)",
        }}
      >
        {/* Formulario */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center" style={{ background: "#fff" }}>
          <h3 className="text-3xl font-bold mb-8" style={{ color: "var(--color-primary)" }}>
            Contáctanos
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {/* Nombre */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User
                  className="h-5 w-5 transition-colors"
                  style={{ color: errors.name ? "#ef4444" : "var(--color-text-soft)" }}
                />
              </div>
              <input
                type="text"
                {...register("name")}
                className="w-full rounded-2xl pl-12 pr-4 py-4 font-medium transition-all focus:outline-none focus:ring-2"
                style={{
                  background: "var(--color-bg)",
                  border: `1px solid ${errors.name ? "#ef4444" : "var(--color-surface-2)"}`,
                  color: "var(--color-text)",
                }}
                placeholder="Tu nombre completo"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail
                  className="h-5 w-5 transition-colors"
                  style={{ color: errors.email ? "#ef4444" : "var(--color-text-soft)" }}
                />
              </div>
              <input
                type="email"
                {...register("email")}
                className="w-full rounded-2xl pl-12 pr-4 py-4 font-medium transition-all focus:outline-none focus:ring-2"
                style={{
                  background: "var(--color-bg)",
                  border: `1px solid ${errors.email ? "#ef4444" : "var(--color-surface-2)"}`,
                  color: "var(--color-text)",
                }}
                placeholder="correo@restaurante.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Mensaje */}
            <div className="relative group">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                <MessageSquare
                  className="h-5 w-5"
                  style={{ color: errors.message ? "#ef4444" : "var(--color-text-soft)" }}
                />
              </div>
              <textarea
                rows={4}
                {...register("message")}
                className="w-full rounded-2xl pl-12 pr-4 py-4 font-medium transition-all focus:outline-none focus:ring-2 resize-none"
                style={{
                  background: "var(--color-bg)",
                  border: `1px solid ${errors.message ? "#ef4444" : "var(--color-surface-2)"}`,
                  color: "var(--color-text)",
                }}
                placeholder="¿En qué podemos ayudarte?"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 group flex items-center justify-center gap-3 font-bold px-6 py-4 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-70"
              style={{
                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
                color: "var(--color-text-light)",
                boxShadow: "0 10px 30px -10px rgba(90,22,23,0.45)",
              }}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Panel derecho informativo */}
        <div
          className="md:w-1/2 p-12 flex flex-col justify-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
          }}
        >
          <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')] bg-repeat" />
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6" style={{ color: "var(--color-accent-2)" }}>
              ¿Tienes dudas? <br /> Hablemos.
            </h2>
            <p
              className="mb-8 text-lg leading-relaxed font-medium"
              style={{ color: "rgba(255,249,240,0.85)" }}
            >
              Estamos aquí para ayudarte a transformar tu restaurante. Escríbenos y un experto de
              nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
            <ul className="space-y-5">
              {["Asesoría personalizada", "Demostración gratuita"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-lg"
                  style={{ color: "var(--color-text-light)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(217,168,32,0.2)" }}
                  >
                    <span style={{ color: "var(--color-accent-2)", fontWeight: 700 }}>✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
