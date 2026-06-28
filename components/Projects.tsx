import {
  UtensilsCrossed,
  Database,
  Briefcase,
} from "lucide-react";

const projects = [
  {
    icon: UtensilsCrossed,
    title: "Cardápio Digital",
    desc: "Fazendo seu pedido de forma rápida e divertida."
  },
  {
    icon: Database,
    title: "Api simples",
    desc: "Facilitando buscas de itens, para trabalho."
  },
  {
    icon: Briefcase,
    title: "Portifólio",
    desc: "Bem vindo ao meu portifólio profissional."
  }
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 justify-items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group
                          bg-slate-900
                          p-8
                          rounded-2xl
                          border border-slate-800
                          hover:border-blue-500
                          hover:-translate-y-2
                          transition-all
                          duration-300"
            >
              <item.icon size={40} className="text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110"/>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}