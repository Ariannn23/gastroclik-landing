"use client";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useCallback } from "react";
import { QrCode, Clock, Smartphone, BarChart3, Globe } from "lucide-react";

const cards = [
  {
    title: "Escaneo QR",
    desc: "Acceso instantáneo sin descargar apps ni registrarse.",
    icon: QrCode,
    yOff: -0.12,
    glow: "#d89600",
    badge: "ACCESO",
    pattern: "dots",
  },
  {
    title: "Tiempo Real",
    desc: "Actualiza precios y platos en segundos desde tu panel.",
    icon: Clock,
    yOff: 0.12,
    glow: "#7a2424",
    badge: "GESTIÓN",
    pattern: "lines",
  },
  {
    title: "Responsivo",
    desc: "Se adapta perfectamente a cualquier tamaño de celular.",
    icon: Smartphone,
    yOff: -0.06,
    glow: "#4a90d9",
    badge: "DISEÑO",
    pattern: "grid",
  },
  {
    title: "Estadísticas",
    desc: "Conoce los platos más visitados y toma mejores decisiones.",
    icon: BarChart3,
    yOff: 0.08,
    glow: "#059669",
    badge: "ANÁLISIS",
    pattern: "bars",
  },
  {
    title: "Multi-idioma",
    desc: "Atrae turistas traduciendo tu menú automáticamente.",
    icon: Globe,
    yOff: -0.1,
    glow: "#7c3aed",
    badge: "ALCANCE",
    pattern: "circles",
  },
];

function PatternBackground({ pattern, glow }: { pattern: string; glow: string }) {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden rounded-[2.5rem]">
      {pattern === "dots" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(${glow} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      )}
      {pattern === "lines" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, ${glow}22 12px, ${glow}22 13px)`,
          }}
        />
      )}
      {pattern === "grid" && (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${glow}11 1px, transparent 1px), linear-gradient(90deg, ${glow}11 1px, transparent 1px)`,
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
                background: glow,
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
            backgroundImage: `radial-gradient(circle at 20% 30%, ${glow}33 0px, transparent 8px),
                            radial-gradient(circle at 80% 70%, ${glow}22 0px, transparent 12px),
                            radial-gradient(circle at 50% 50%, ${glow}11 0px, transparent 16px)`,
          }}
        />
      )}
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon: Icon,
  yOff,
  glow,
  badge,
  pattern,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
  yOff: number;
  glow: string;
  badge: string;
  pattern: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 260, damping: 26 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 260, damping: 26 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    },
    [mx, my],
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
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        translateY: yOff * 100,
      }}
      className="group relative w-[320px] md:w-[360px] h-[320px] shrink-0"
    >
      {/* Sombra flotante estática - sin animación para evitar vibración */}
      <div
        className="absolute -inset-4 rounded-[3rem] -z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${glow}18, transparent 60%)`,
          filter: "blur(30px)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute -inset-4 rounded-[3rem] -z-10 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${glow}28, transparent 60%)`,
          filter: "blur(40px)",
          opacity: 0,
        }}
      />

      {/* Borde fijo con gradiente */}
      <div
        className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${glow}44, ${glow}11 40%, transparent 70%)`,
          padding: "1.5px",
        }}
      >
        <div className="relative w-full h-full rounded-[2.5rem] bg-gastro-white-warm overflow-hidden">
          {/* Patrón decorativo de fondo */}
          <PatternBackground pattern={pattern} glow={glow} />

          {/* Contenido */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-10">
            {/* Badge categoría */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] mb-5 transition-[tracking] duration-500 group-hover:tracking-[0.2em]"
              style={{
                background: `${glow}12`,
                color: glow,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: glow,
                  display: "inline-block",
                }}
              />
              {badge}
            </div>

            {/* Ícono en círculo */}
            <div className="relative mb-5">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-[transform,width,height] duration-500 group-hover:scale-110 group-hover:w-16 group-hover:h-16"
                style={{
                  background: `linear-gradient(135deg, ${glow}18, ${glow}08)`,
                  boxShadow: `0 0 0 1.5px ${glow}22, 0 4px 12px ${glow}11`,
                }}
              >
                <Icon
                  className="w-6 h-6 transition-[transform] duration-500 group-hover:w-7 group-hover:h-7"
                  style={{ color: glow }}
                />
              </div>
            </div>

            {/* Título */}
            <h3 className="subtitle text-2xl font-bold text-gastro-wine-main mb-2.5 text-center">
              {title}
            </h3>

            {/* Separador decorativo - estático */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-4 h-px" style={{ background: `${glow}44` }} />
              <span className="block w-1 h-1 rounded-full" style={{ background: glow }} />
              <span className="block w-4 h-px" style={{ background: `${glow}44` }} />
            </div>

            {/* Descripción */}
            <p className="text-center text-gastro-text-sec text-[15px] leading-relaxed max-w-[260px]">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const cards = [
    {
      title: "Escaneo QR",
      desc: "Acceso instantáneo sin descargar apps ni registrarse.",
      icon: QrCode,
      transform: "-translate-y-4",
    },
    {
      title: "Tiempo Real",
      desc: "Actualiza precios y platos en segundos desde tu panel.",
      icon: Clock,
      transform: "translate-y-12",
    },
    {
      title: "Responsivo",
      desc: "Se adapta perfectamente a cualquier tamaño de celular.",
      icon: Smartphone,
      transform: "-translate-y-4",
    },
    {
      title: "Estadísticas",
      desc: "Conoce los platos más visitados y toma mejores decisiones.",
      icon: BarChart3,
      transform: "translate-y-12",
    },
    {
      title: "Multi-idioma",
      desc: "Atrae turistas traduciendo tu menú automáticamente.",
      icon: Globe,
      transform: "-translate-y-4",
    },
  ];

  return (
    <section
      className="py-32 px-8 overflow-hidden relative z-20"
      style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-surface-2)" }}
    >
      {/* Glow central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] blur-[100px] pointer-events-none z-0"
        style={{ background: "rgba(217,168,32,0.08)" }}
      />

      {/* Título */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-center"
          style={{ color: "var(--color-primary)" }}
        >
          Todo lo que necesitas para tu menú
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center text-gastro-text-sec mt-4 text-lg max-w-xl mx-auto"
        >
          Herramientas diseñadas para que tu carta digital brille.
        </motion.p>
      </div>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden pt-10 pb-20 z-10">
        {/* Degradados de borde */}
        <div
          className="absolute top-0 left-0 w-32 md:w-64 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
        />
        <div
          className="absolute top-0 right-0 w-32 md:w-64 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
        />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex w-max"
        >
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-8 pr-8 shrink-0 w-max">
              {cards.map((card, index) => (
                <div
                  key={`g${group}-${index}`}
                  className={`group relative w-[320px] md:w-[360px] h-[300px] shrink-0 backdrop-blur-xl rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center p-8 transition-all ${card.transform}`}
                  style={{
                    background: "rgba(248,238,220,0.7)",
                    border: "1px solid rgba(233,215,184,0.8)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to bottom, transparent, rgba(217,168,32,0.08))",
                    }}
                  />

                  {/* Icono */}
                  <div
                    className="relative z-10 w-20 h-20 mb-6 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), var(--color-primary-2))",
                    }}
                  >
                    <card.icon className="w-10 h-10 text-white relative z-10" />
                  </div>

                  <h3
                    className="font-extrabold text-2xl mb-3 relative z-10"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-center text-lg leading-relaxed relative z-10"
                    style={{ color: "var(--color-text-soft)" }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
