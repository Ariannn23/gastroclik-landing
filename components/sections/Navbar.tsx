export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 border-b-2 border-dashed border-gray-400 bg-white/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">[Navbar: Logo GastroClick]</div>
        <nav className="flex gap-4">
          <span>Enlace 1</span>
          <span>Enlace 2</span>
          <span>Botón</span>
        </nav>
      </div>
    </header>
  );
}
