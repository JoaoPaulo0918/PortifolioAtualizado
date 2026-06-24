export default function About() {
  return (
    <section id="sobre" className="w-full py-20 bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
          Sobre mim
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          Atualmente estou em constante evolução na área de desenvolvimento de sistemas,
          com foco principal em desenvolvimento web. No meu dia a dia, utilizo tecnologias
          fundamentais como <span className="text-white font-semibold">HTML, CSS e JavaScript</span>,
          que são a base para a construção de interfaces modernas, responsivas e funcionais.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Também trabalho com <span className="text-white font-semibold">Node.js</span> no backend,
          criando aplicações, APIs e integrações com banco de dados. Utilizo
          <span className="text-white font-semibold"> MongoDB e Mongoose</span> para manipulação de dados,
          além do <span className="text-white font-semibold">Express</span> para gerenciamento de rotas.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          No frontend, venho utilizando <span className="text-white font-semibold">React</span> com
          <span className="text-white font-semibold"> TypeScript</span> e ferramentas como
          <span className="text-white font-semibold"> Tailwind CSS</span>, o que me permite desenvolver
          interfaces mais modernas, organizadas e responsivas.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Também utilizo ferramentas como autenticação com <span className="text-white font-semibold">Passport.js</span>,
          além de boas práticas de estruturação de projetos e integração entre frontend e backend.
        </p>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">
            Nível atual
          </h3>

          <p className="text-lg leading-relaxed">
            Atualmente me considero em um nível{" "}
            <span className="text-white font-semibold">intermediário em desenvolvimento web full stack</span>,
            com experiência prática na criação de aplicações completas. Já consigo desenvolver projetos
            com frontend, backend e banco de dados, e estou em evolução contínua para níveis mais avançados,
            focando em arquitetura de software, escalabilidade e boas práticas profissionais.
          </p>
        </div>
      </div>
    </section>
  );
}