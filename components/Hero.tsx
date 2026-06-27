export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Aurora */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob"></div>

      <div className="absolute top-40 right-0 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="absolute bottom-0 left-1/2 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="max-w-3xl">

            <div className="relative inline-flex mt-20 mb-8">
              <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></span>

              <span className="relative px-4 py-2 rounded-full bg-slate-900 border border-blue-500/40 text-blue-400">
              🚀 Desenvolvimento Web Moderno
              </span>

          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Transforme suas
            <span className="text-blue-500"> ideias </span>
            em projetos reais.
          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-2xl leading-8">
            Aprenda HTML, CSS, JavaScript, React, Next.js, Node.js e Python
            construindo aplicações profissionais do zero.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="https://wa.me/5599999999999"
              className="px-8 py-4 rounded-xl bg-green-500 font-semibold transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,.6)]"
            >
              Quero Contratar
            </a>

            <a
              href="#projetos"
              className="px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 hover:scale-105"
            >
              Ver Projetos
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}