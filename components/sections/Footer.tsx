"use client";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-8"
      style={{ background: "var(--color-primary)", color: "var(--color-text-light)" }}
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 mb-8"
        style={{ borderBottom: "1px solid var(--color-primary-2)" }}
      >
        {/* Marca */}
        <div className="col-span-1 md:col-span-1">
          <h2
            className="text-2xl font-extrabold mb-4"
            style={{ color: "var(--color-accent-2)" }}
          >
            GastroClick
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,249,240,0.7)" }}>
            La solución definitiva para digitalizar la carta de tu restaurante de manera rápida,
            elegante y sin complicaciones.
          </p>
        </div>

        {/* Secciones */}
        <div>
          <h3 className="text-lg font-extrabold mb-4" style={{ color: "var(--color-accent-2)" }}>
            Secciones
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "rgba(255,249,240,0.75)" }}>
            {["Inicio", "¿Qué hacemos?", "Características", "Ejemplos"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "inherit" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,249,240,0.75)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-accent-2)" }}>
            Soporte
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "rgba(255,249,240,0.75)" }}>
            {["Preguntas Frecuentes", "Términos y Condiciones", "Política de Privacidad"].map((item) => (
              <li key={item}>
                <a href="#" className="transition-colors" style={{ color: "inherit" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,249,240,0.75)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-accent-2)" }}>
            Contáctanos
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "rgba(255,249,240,0.75)" }}>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
              hola@gastroclick.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
              +51 984 221 508
            </li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs"
        style={{ color: "rgba(255,249,240,0.5)" }}
      >
        <p>© {new Date().getFullYear()} GastroClick. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {["Instagram", "Facebook", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="transition-colors"
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--color-accent-2)")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,249,240,0.5)")}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
