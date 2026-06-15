export default function RegisterForm() {
  return (
    <section className="py-24 px-8 border-b-2 border-dashed border-gray-400 bg-gastro-bg-card">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Izquierdo: Texto Informativo */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gastro-wine-main">
            Empieza a digitalizar tu restaurante hoy.
          </h2>
          <p className="text-lg text-gastro-text-sec mb-8">
            Únete a cientos de restaurantes que ya han modernizado su atención al cliente. Déjanos tus datos y te ayudaremos a crear tu primera carta digital en minutos.
          </p>
          <ul className="space-y-4 text-gastro-text-main font-medium">
            <li className="flex items-center gap-2">✓ Sin costos ocultos</li>
            <li className="flex items-center gap-2">✓ Configuración en menos de 24 horas</li>
            <li className="flex items-center gap-2">✓ Soporte personalizado</li>
          </ul>
        </div>

        {/* Lado Derecho: El Formulario */}
        <div className="lg:w-1/2 w-full">
          <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gastro-wine-sec mb-2">Crear mi cuenta</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gastro-text-sec mb-2">Nombre</label>
                <input type="text" className="w-full border-2 border-gastro-bg-card bg-gastro-white-warm p-3 rounded-xl focus:outline-none focus:border-gastro-gold-main transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gastro-text-sec mb-2">Restaurante</label>
                <input type="text" className="w-full border-2 border-gastro-bg-card bg-gastro-white-warm p-3 rounded-xl focus:outline-none focus:border-gastro-gold-main transition-colors" placeholder="Ej. El Buen Sabor" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gastro-text-sec mb-2">Correo Electrónico</label>
              <input type="email" className="w-full border-2 border-gastro-bg-card bg-gastro-white-warm p-3 rounded-xl focus:outline-none focus:border-gastro-gold-main transition-colors" placeholder="correo@ejemplo.com" />
            </div>

            <button type="button" className="mt-4 bg-gastro-wine-main text-white font-bold py-4 rounded-xl hover:bg-gastro-wine-sec transition-colors shadow-lg hover:shadow-xl">
              Solicitar Acceso
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Al registrarte, aceptas nuestros términos y condiciones.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
