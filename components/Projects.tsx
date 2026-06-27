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
    desc: "Bem vindo ao meu site."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 justify-items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl max-w-75 w-full"
            >
              <item.icon size={40} />

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