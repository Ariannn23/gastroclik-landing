export default function TargetAudience() {
  return (
    <section className="py-24 px-8 border-b-2 border-dashed border-gray-400 bg-gastro-bg-main">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gastro-wine-main">
          ¿A quién va dirigido?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gastro-bg-card p-8 rounded-2xl shadow-sm border border-gastro-gold-light/30">
            <h3 className="text-xl font-bold mb-4 text-gastro-wine-sec">Restaurantes y Cafeterías</h3>
            <p className="text-gastro-text-sec">Ideal para locales que buscan actualizar su menú frecuentemente sin costos de impresión.</p>
          </div>
          <div className="bg-gastro-bg-card p-8 rounded-2xl shadow-sm border border-gastro-gold-light/30">
            <h3 className="text-xl font-bold mb-4 text-gastro-wine-sec">Bares y Pubs</h3>
            <p className="text-gastro-text-sec">Perfecto para mostrar cócteles y promociones dinámicas en tiempo real.</p>
          </div>
          <div className="bg-gastro-bg-card p-8 rounded-2xl shadow-sm border border-gastro-gold-light/30">
            <h3 className="text-xl font-bold mb-4 text-gastro-wine-sec">Hoteles y Room Service</h3>
            <p className="text-gastro-text-sec">Digitaliza el menú de habitaciones para una experiencia más higiénica y premium.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
