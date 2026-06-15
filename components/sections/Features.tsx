export default function Features() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center border-b-2 border-dashed border-gray-400 p-8">
      <h2 className="text-3xl font-bold mb-8">[Sección 2: Características / Scroll Animations]</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="h-64 border border-gray-500 flex items-center justify-center">
          <p>Caja para texto descriptivo</p>
        </div>
        <div className="h-64 border border-gray-500 flex items-center justify-center bg-gray-200">
          <p>Imagen que se escalará al hacer scroll</p>
        </div>
        
        <div className="h-64 border border-gray-500 flex items-center justify-center bg-gray-200">
          <p>Imagen que se escalará al hacer scroll</p>
        </div>
        <div className="h-64 border border-gray-500 flex items-center justify-center">
          <p>Caja para texto descriptivo</p>
        </div>
      </div>
    </section>
  );
}
