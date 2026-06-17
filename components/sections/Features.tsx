"use client";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useCallback } from "react";
import { QrCode, Clock, Smartphone, BarChart3, Globe, Sparkles } from "lucide-react";

const cards = [
  {
    title: "Escaneo QR",
    desc: "Acceso instantáneo sin descargar apps ni registrarse.",
    icon: QrCode,
    yOff: -0.06,
    glow: "#d89600",
    badge: "ACCESO",
    pattern: "dots",
  },
  {
    title: "Tiempo Real",
    desc: "Actualiza precios y platos en segundos desde tu panel.",
    icon: Clock,
    yOff: 0.06,
    glow: "#7a2424",
    badge: "GESTIÓN",
    pattern: "lines",
  },
  {
    title: "Responsivo",
    desc: "Se adapta perfectamente a cualquier tamaño de celular.",
    icon: Smartphone,
    yOff: -0.03,
    glow: "#4a90d9",
    badge: "DISEÑO",
    pattern: "grid",
  },
  {
    title: "Estadísticas",
    desc: "Conoce los platos más visitados y toma mejores decisiones.",
    icon: BarChart3,
    yOff: 0.04,
    glow: "#059669",
    badge: "ANÁLISIS",
    pattern: "bars",
  },
  {
    title: "Multi-idioma",
    desc: "Atrae turistas traduciendo tu menú automáticamente.",
    icon: Globe,
    yOff: -0.05,
    glow: "#7c3aed",
    badge: "ALCANCE",
    pattern: "circles",
  },
];

function PatternBackground({ pattern, glow }: { pattern: string; glow: string }) {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden rounded-[2.5rem]">
      {pattern === "dots" && (
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(${glow} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }} />
      )}
      {pattern === "lines" && (
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, ${glow}22 12px, ${glow}22 13px)`,
        }} />
      )}
      {pattern === "grid" && (
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(${glow}11 1px, transparent 1px), linear-gradient(90deg, ${glow}11 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
      )}
      {pattern === "bars" && (
        <div className="w-full h-full flex items-end justify-around pb-6 px-4" style={{ gap: "4px" }}>
          {[0.3, 0.7, 0.4, 0.9, 0.5, 0.8, 0.6].map((h, i) => (
            <div key={i} style={{
              width: "6px",
              height: `${h * 60}%`,
              background: glow,
              borderRadius: "3px 3px 0 0",
              opacity: 0.3,
            }} />
          ))}
        </div>
      )}
      {pattern === "circles" && (
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, ${glow}33 0px, transparent 8px),
                            radial-gradient(circle at 80% 70%, ${glow}22 0px, transparent 12px),
                            radial-gradient(circle at 50% 50%, ${glow}11 0px, transparent 16px)`,
        }} />
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

  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 260, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 260, damping: 24 });
  const shadowX = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 260, damping: 24 });
  const shadowY = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 260, damping: 24 });
  const glareX = useSpring(useTransform(mx, [0, 1], [0, 100]), { stiffness: 200, damping: 20 });
  const glareY = useSpring(useTransform(my, [0, 1], [0, 100]), { stiffness: 200, damping: 20 });

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
      className="group relative w-[320px] md:w-[360px] h-[340px] shrink-0"
    >
      {/* Sombra dinámica que sigue el tilt */}
      <motion.div
        className="absolute -inset-4 rounded-[3rem] -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${glow}18, transparent 60%)`,
          x: shadowX,
          y: shadowY,
          filter: "blur(30px)",
        }}
      />

      {/* Borde animated con glow */}
      <div
        className="absolute inset-0 rounded-[2.5rem] p-[1.5px] transition-all duration-500 group-hover:p-[2px]"
        style={{
          background: `linear-gradient(135deg, ${glow}44, ${glow}11 40%, transparent 70%)`,
        }}
      >
        <div className="relative w-full h-full rounded-[2.5rem] bg-gastro-white-warm overflow-hidden">
          {/* Glare/shine que sigue el mouse */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            }}
          />

          {/* Patrón decorativo de fondo */}
          <PatternBackground pattern={pattern} glow={glow} />

          {/* Contenido */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-10">
            {/* Badge categoría */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] mb-5 transition-all duration-500 group-hover:tracking-[0.2em]"
              style={{
                background: `${glow}12`,
                color: glow,
              }}
            >
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: glow, display: "inline-block" }} />
              {badge}
            </div>

            {/* Ícono en círculo con glow */}
            <div className="relative mb-5">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:w-16 group-hover:h-16"
                style={{
                  background: `linear-gradient(135deg, ${glow}18, ${glow}08)`,
                  boxShadow: `0 0 0 1.5px ${glow}22, 0 4px 12px ${glow}11`,
                }}
              >
                <Icon
                  className="w-6 h-6 transition-all duration-500 group-hover:w-7 group-hover:h-7"
                  style={{ color: glow }}
                />
              </div>
              {/* Anillo decorativo exterior */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  border: `1.5px solid ${glow}22`,
                  transform: "scale(1.25)",
                }}
              />
            </div>

            {/* Título */}
            <h3 className="subtitle text-2xl font-bold text-gastro-wine-main mb-2.5 text-center relative z-10">
              {title}
            </h3>

            {/* Separador decorativo */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-4 h-px" style={{ background: `${glow}44` }} />
              <span className="block w-1 h-1 rounded-full" style={{ background: glow }} />
              <span className="block w-4 h-px" style={{ background: `${glow}44` }} />
            </div>

            {/* Descripción */}
            <p className="text-center text-gastro-text-sec text-[15px] leading-relaxed relative z-10 max-w-[260px]">
              {desc}
            </p>
          </div>

          {/* Brillo de esquina hover */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${glow}44, transparent 70%)`,
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${glow}33, transparent 70%)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  const allCards = [...cards, ...cards]; // duplicado para seamless loop

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-gastro-bg-main via-gastro-bg-card to-gastro-bg-main"
    >
      {/* Ambiente de fondo con parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: bgOpacity }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            x: bgX,
            background:
              "radial-gradient(circle, rgba(216,150,0,0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 40]),
            background:
              "radial-gradient(circle, rgba(90,22,23,0.06) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto mb-14 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gastro-wine-main"
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

      {/* Carrusel */}
      <div className="relative w-full overflow-hidden" style={{ perspective: "1200px" }}>
        {/* Gradientes laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-gastro-bg-main to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-gastro-bg-main to-transparent" />

        <motion.div
          ref={trackRef}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
          className="flex w-max gap-6 md:gap-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          {allCards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
