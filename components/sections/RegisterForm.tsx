export default function RegisterForm() {
  return (
    <section className="py-24 px-8 border-b-2 border-dashed border-gray-400 bg-gastro-wine-main text-gastro-bg-main">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gastro-gold-light">
          [Sección: Formulario de Registro]
        </h2>
        <p className="mb-8 text-gastro-white-warm">
          Regístrate ahora para empezar a crear la carta digital de tu restaurante.
        </p>
        
        <form className="bg-gastro-bg-main p-8 rounded-xl shadow-xl flex flex-col gap-4 text-left">
          <div>
            <label className="block text-gastro-text-main font-bold mb-2">Nombre del Restaurante</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Ej. El Buen Sabor" />
          </div>
          <div>
            <label className="block text-gastro-text-main font-bold mb-2">Correo Electrónico</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="correo@ejemplo.com" />
          </div>
          <button type="button" className="mt-4 bg-gastro-gold-main text-white font-bold py-3 rounded hover:bg-gastro-gold-light transition-colors">
            Crear Mi Cuenta
          </button>
        </form>
      </div>
    </section>
  );
}
