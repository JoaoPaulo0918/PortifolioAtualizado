import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto mt-15 px-6 grid md:grid-cols-2 gap-10">

        <div>
      
          <h1 className="text-5xl md:text-6xl font-bold mt-10">
            Transforme suas ideias em realidade
          </h1>

          <p className="text-slate-400 mt-6 text-lg">
            Com as ferramentas mais usadas no mercado: HTML, CSS, JavaScript, React, Node.js e Python...
            Através de projetos reais.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://wa.me/5599999999999"
              className="bg-green-500 px-6 py-4 rounded-xl"
            >
              Quero Contratar
            </a>

            <a
              href="#projetos"
              className="border border-slate-700 px-6 py-4 rounded-xl"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src=""
            alt="Programação"
            width={600}
            height={600}
            priority
          />
        </div>

      </div>
    </section>
  )
}