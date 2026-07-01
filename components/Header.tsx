export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">

        <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
          <a href="#inicio">DevWeb</a>
        </h1>

        <nav className="hidden md:flex gap-8">
          <a
            href="#sobre"
            className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Sobre
          </a>

          <a
            href="#cursos"
            className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Ferramentas
          </a>

          <a
            href="#beneficios"
            className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Benefícios
          </a>

          <a
            href="#projetos"
            className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projetos
          </a>
        </nav>

        <a
          href="https://wa.me/5581933008837"
          className="bg-green-500 px-5 py-2 rounded-lg font-semibold shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-green-500/50 active:scale-95"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}