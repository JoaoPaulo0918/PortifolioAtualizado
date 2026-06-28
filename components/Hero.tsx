export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center pt-24 pb-20"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-32 -left-32 w-80 h-80 md:w-[520px] md:h-[520px] rounded-full bg-blue-600/20 blur-[120px] animate-blob"></div>

        <div className="absolute top-1/3 -right-24 w-72 h-72 md:w-[460px] md:h-[460px] rounded-full bg-cyan-500/20 blur-[120px] animate-blob animation-delay-2000"></div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-[460px] md:h-[460px] rounded-full bg-indigo-600/20 blur-[120px] animate-blob animation-delay-4000"></div>

      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">

          {/* Badge */}
          <div className="relative inline-flex mb-8">

            <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></span>

            <span className="relative px-5 py-2 rounded-full border border-blue-500/40 bg-slate-900 text-blue-400 text-sm sm:text-base font-medium">
              🚀 Desenvolvimento Web Moderno
            </span>

          </div>

          {/* Título */}
          <h1
  style={{ color: "#ffffff" }}
  className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
>
  Transforme suas{" "}
  <span style={{ color: "#3b82f6" }}>ideias</span>
  <br />
  em projetos reais.
</h1>

          {/* Texto */}
          <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-slate-300 text-lg md:text-xl leading-8">
            Aprenda HTML, CSS, JavaScript, React, Next.js, Node.js e Python
            desenvolvendo aplicações profissionais do zero e criando projetos
            utilizados no mercado.
          </p>

          {/* Botões */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="https://wa.me/5599999999999"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-500 font-semibold text-black transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,.5)]"
            >
              Quero Contratar
            </a>

            <a
              href="#projetos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-600 bg-slate-900/30 text-white transition-all duration-300 hover:border-blue-500 hover:bg-slate-900 hover:scale-105"
            >
              Ver Projetos
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}