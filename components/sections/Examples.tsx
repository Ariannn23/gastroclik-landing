export default function Examples() {
  return (
    <section className="py-24 px-8 border-b-2 border-dashed border-gray-400 bg-gastro-white-warm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gastro-wine-main">
          [Sección: Ejemplos de Cartas Digitales]
        </h2>
        
        {/* Carrusel / Grid de ejemplos con posiciones alternadas */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Ejemplo 1 (Normal) */}
          <div className="w-64 h-96 bg-gastro-bg-card border-2 border-gastro-gold-light rounded-xl flex items-center justify-center shadow-lg transform translate-y-0">
            <p className="text-gastro-text-sec text-center px-4">Ejemplo 1<br/>(Carta Restaurante A)</p>
          </div>
          
          {/* Ejemplo 2 (Desplazado hacia abajo) */}
          <div className="w-64 h-96 bg-gastro-bg-card border-2 border-gastro-gold-light rounded-xl flex items-center justify-center shadow-lg transform md:translate-y-12">
            <p className="text-gastro-text-sec text-center px-4">Ejemplo 2<br/>(Carta Restaurante B)</p>
          </div>
          
          {/* Ejemplo 3 (Normal) */}
          <div className="w-64 h-96 bg-gastro-bg-card border-2 border-gastro-gold-light rounded-xl flex items-center justify-center shadow-lg transform translate-y-0">
            <p className="text-gastro-text-sec text-center px-4">Ejemplo 3<br/>(Carta Restaurante C)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
