export default function Examples() {
  return (
    <section className="py-32 px-8 border-b-2 border-dashed border-gray-400 bg-gastro-bg-main">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gastro-wine-main">
          [Sección: Ejemplos de Cartas]
        </h2>
        <p className="text-center text-gastro-text-sec mb-16 max-w-2xl mx-auto">
          Descubre cómo lucen nuestras plantillas principales aplicadas en casos reales.
        </p>
        
        {/* Layout para 3 items (El centro destacado) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          
          {/* Ejemplo 1 (Lateral Izquierdo) */}
          <div className="w-full lg:w-1/3 h-[400px] bg-gastro-bg-card border-2 border-gastro-wine-sec/20 rounded-2xl shadow-md flex items-center justify-center transform lg:scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all duration-300">
            <p className="text-gastro-text-sec font-bold">Estilo Clásico</p>
          </div>
          
          {/* Ejemplo 2 (Centro - Destacado) */}
          <div className="w-full lg:w-1/3 h-[480px] bg-gastro-wine-main text-gastro-white-warm border-2 border-gastro-gold-main rounded-2xl shadow-2xl flex items-center justify-center transform z-10 hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="absolute top-4 bg-gastro-gold-main text-xs font-bold px-3 py-1 rounded-full">Más Popular</div>
            <p className="font-bold text-xl">Estilo Moderno (Dark)</p>
          </div>
          
          {/* Ejemplo 3 (Lateral Derecho) */}
          <div className="w-full lg:w-1/3 h-[400px] bg-gastro-bg-card border-2 border-gastro-wine-sec/20 rounded-2xl shadow-md flex items-center justify-center transform lg:scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all duration-300">
            <p className="text-gastro-text-sec font-bold">Estilo Minimalista</p>
          </div>

        </div>
      </div>
    </section>
  );
}
