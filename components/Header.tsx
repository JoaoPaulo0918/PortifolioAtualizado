export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">
          <a href="#inicio">DevWeb</a>
        </h1>

        <nav className="hidden md:flex gap-8">
          <a href="#sobre">Sobre</a>
          <a href="#cursos">Ferramentas</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#projetos">Projetos</a>

        </nav>

        <a
          href="https://wa.me/5599999999999"
          className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}