import {
  Rocket,
  BookOpen,
  Award,
  MessageCircle
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Projetos Reais",
    desc: "Aprenda construindo."
  },
  {
    icon: BookOpen,
    title: "Aulas Práticas",
    desc: "Sem teoria excessiva."
  },
  {
    icon: Award,
    title: "Certificado",
    desc: "Comprove seu aprendizado."
  },
  {
    icon: MessageCircle,
    title: "Suporte",
    desc: "Atendimento via WhatsApp."
  }
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Por que estudar conosco?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl"
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