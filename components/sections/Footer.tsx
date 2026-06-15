export default function Footer() {
  return (
    <footer className="bg-gastro-wine-main text-gastro-white-warm pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gastro-wine-sec pb-12 mb-8">
        
        {/* Columna 1: Marca */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-gastro-gold-light mb-4">GastroClick</h2>
          <p className="text-sm text-gastro-bg-card opacity-80 leading-relaxed">
            La solución definitiva para digitalizar la carta de tu restaurante de manera rápida, elegante y sin complicaciones.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-lg font-bold text-gastro-gold-light mb-4">Secciones</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">¿Qué hacemos?</a></li>
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">Características</a></li>
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">Ejemplos</a></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div>
          <h3 className="text-lg font-bold text-gastro-gold-light mb-4">Soporte</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-gastro-gold-main transition-colors">Política de Privacidad</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h3 className="text-lg font-bold text-gastro-gold-light mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-gastro-gold-main">✉</span> hola@gastroclick.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gastro-gold-main">📱</span> +34 600 000 000
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
        <p>&copy; {new Date().getFullYear()} GastroClick. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gastro-gold-light">Instagram</a>
          <a href="#" className="hover:text-gastro-gold-light">Facebook</a>
          <a href="#" className="hover:text-gastro-gold-light">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
