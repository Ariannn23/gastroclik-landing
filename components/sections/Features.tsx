"use client";

import { useRef, useCallback, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Palette,
  List,
  Image,
  Star,
  QrCode,
  MessageCircle,
  MapPin,
  RefreshCw,
} from "lucide-react";

// ─── Constantes ─────────────────────────────────────────────────────────────
const DURATION = 45; // segundos del ciclo completo del carrusel
const GLOW = "#d9a820"; // dorado del proyecto — uniforme en todas las cards

const features = [
  {
    title: "Identidad de Marca",
    desc: "Nombre, logotipo y colores personalizados de tu negocio.",
    icon: Palette,
    badge: "MARCA",
    pattern: "dots" as const,
    yOff: -0.12,
  },
  {
    title: "Menú por Categorías",
    desc: "Clasificación limpia (Entradas, Platos Fuertes, Bebidas, Postres...).",
    icon: List,
    badge: "CATEGORÍAS",
    pattern: "lines" as const,
    yOff: 0.12,
  },
  {
    title: "Fichas de Productos",
    desc: "Fotos en alta calidad, descripción detallada y precios claros.",
    icon: Image,
    badge: "PRODUCTOS",
    pattern: "grid" as const,
    yOff: -0.06,
  },
  {
    title: "Destacados y Recomendados",
    desc: "Sección especial para los platos favoritos o sugerencias del chef.",
    icon: Star,
    badge: "DESTACADOS",
    pattern: "bars" as const,
    yOff: 0.08,
  },
  {
    title: "Acceso Inmediato QR",
    desc: "Códigos QR para las mesas para que el comensal acceda al instante.",
    icon: QrCode,
    badge: "QR",
    pattern: "circles" as const,
    yOff: -0.1,
  },
  {
    title: "Botón WhatsApp",
    desc: "Botón flotante para conectar al cliente con tu canal de ventas.",
    icon: MessageCircle,
    badge: "SOCIAL",
    pattern: "dots" as const,
    yOff: 0.06,
  },
  {
    title: "Horarios y Datos",
    desc: "Ubicación exacta, horarios y enlaces a redes sociales integrados.",
    icon: MapPin,
    badge: "DATOS",
    pattern: "grid" as const,
    yOff: -0.08,
  },
  {
    title: "Actualización Ágil",
    desc: "Actualizaciones simples del menú y soporte cercano personalizado.",
    icon: RefreshCw,
    badge: "ÁGIL",
    pattern: "bars" as const,
    yOff: 0.1,
  },
] as const;

type Feature = (typeof features)[number];

// ─── Patrón decorativo de fondo ─────────────────────────────────────────────
function PatternBg({ pattern }: { pattern: Feature["pattern"] }) {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden rounded-[2.5rem]">
      {pattern === "dots" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(${GLOW} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      )}
      {pattern === "lines" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, ${GLOW}22 12px, ${GLOW}22 13px)`,
          }}
        />
      )}
      {pattern === "grid" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${GLOW}11 1px, transparent 1px), linear-gradient(90deg, ${GLOW}11 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      )}
      {pattern === "bars" && (
        <div
          className="w-full h-full flex items-end justify-around pb-6 px-4"
          style={{ gap: "4px" }}
        >
          {[0.3, 0.7, 0.4, 0.9, 0.5, 0.8, 0.6].map((h, i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: `${h * 60}%`,
                background: GLOW,
                borderRadius: "3px 3px 0 0",
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      )}
      {pattern === "circles" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, ${GLOW}33 0px, transparent 8px),
                            radial-gradient(circle at 80% 70%, ${GLOW}22 0px, transparent 12px),
                            radial-gradient(circle at 50% 50%, ${GLOW}11 0px, transparent 16px)`,
          }}
        />
      )}
    </div>
  );
}

// ─── Card con 3D Tilt ───────────────────────────────────────────────────────
function FeatureCard({ title, desc, icon: Icon, badge, pattern, yOff }: Feature) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), {
    stiffness: 260,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), {
    stiffness: 260,
    damping: 26,
  });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    },
    [mx, my, prefersReducedMotion],
  );

  const handleLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        translateY: yOff * 100,
      }}
      className="group relative w-[320px] md:w-[360px] h-[320px] shrink-0"
    >
      {/* ── Sombra flotante base ── */}
      <div
        className="absolute -inset-4 rounded-[3rem] -z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${GLOW}18, transparent 60%)`,
          filter: "blur(30px)",
          opacity: 0.6,
        }}
      />
      {/* ── Sombra hover ── */}
      <div
        className="absolute -inset-4 rounded-[3rem] -z-10 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${GLOW}28, transparent 60%)`,
          filter: "blur(40px)",
          opacity: 0,
        }}
      />

      {/* ── Borde con gradiente ── */}
      <div
        className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${GLOW}44, ${GLOW}11 40%, transparent 70%)`,
          padding: "1.5px",
        }}
      >
        <div
          className="relative w-full h-full rounded-[2.5rem] overflow-hidden"
          style={{ backgroundColor: "var(--color-gastro-white-warm)" }}
        >
          <PatternBg pattern={pattern} />

          {/* ── Contenido ── */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-10">
            {/* Badge categoría */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] mb-5 transition-all duration-500 group-hover:tracking-[0.2em]"
              style={{
                background: `${GLOW}12`,
                color: GLOW,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: GLOW,
                  display: "inline-block",
                }}
              />
              {badge}
            </div>

            {/* Ícono en círculo con glow */}
            <div className="relative mb-5">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-[transform,width,height] duration-500 group-hover:scale-110 group-hover:w-16 group-hover:h-16"
                style={{
                  background: `linear-gradient(135deg, ${GLOW}18, ${GLOW}08)`,
                  boxShadow: `0 0 0 1.5px ${GLOW}22, 0 4px 12px ${GLOW}11`,
                }}
              >
                <Icon
                  className="w-6 h-6 transition-[transform] duration-500 group-hover:w-7 group-hover:h-7"
                  style={{ color: GLOW }}
                />
              </div>
            </div>

            {/* Título */}
            <h3
              className="text-xl font-extrabold mb-2.5 text-center"
              style={{ color: "var(--color-gastro-wine-main)" }}
            >
              {title}
            </h3>

            {/* Separador decorativo */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-4 h-px" style={{ background: `${GLOW}44` }} />
              <span className="block w-1 h-1 rounded-full" style={{ background: GLOW }} />
              <span className="block w-4 h-px" style={{ background: `${GLOW}44` }} />
            </div>

            {/* Descripción */}
            <p
              className="text-center text-[15px] leading-relaxed max-w-[260px]"
              style={{ color: "var(--color-gastro-text-sec)" }}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Sección principal ──────────────────────────────────────────────────────
export default function Features() {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-surface-2)",
        paddingTop: "clamp(4rem, 10vw, 7rem)",
        paddingBottom: "clamp(4rem, 10vw, 7rem)",
      }}
    >
      {/* ── Glow decorativo central ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-[100%] blur-[120px] pointer-events-none z-0"
        style={{ background: "rgba(217,168,32,0.07)" }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 mb-16 md:mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide"
          style={{ color: "var(--color-primary)" }}
        >
          Todo lo que necesitas
          <br />
          <span style={{ color: "var(--color-accent)" }}>para tu menú digital</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "var(--color-text-soft)" }}
        >
          Herramientas diseñadas para que tu carta digital brille y tus comensales
          tengan una experiencia inolvidable.
        </motion.p>
      </div>

      {/* ── Carrusel ── */}
      {/*
        El carrusel usa CSS animation nativa con animation-play-state.
        Así al pausar/reanudar NO hay brinco — el navegador mantiene
        la posición actual y continúa desde donde se quedó.
      */}
      <div
        className="relative w-full overflow-hidden z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Degradados laterales */}
        <div
          className="absolute inset-y-0 left-0 w-32 md:w-64 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 md:w-64 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
        />

        {/* Track del carrusel — animación CSS nativa */}
        <div
          className="flex w-max"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  animation: `carousel-scroll ${DURATION}s linear infinite`,
                  animationPlayState: isPaused ? "paused" : "running",
                  willChange: "transform",
                }
          }
        >
          {/* Dos copias para loop infinito */}
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-8 shrink-0 pr-8">
              {features.map((feature, index) => (
                <FeatureCard key={`${group}-${index}`} {...feature} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
