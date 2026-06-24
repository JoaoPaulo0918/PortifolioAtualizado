import {
  FileCode2,
  Braces,
  Atom,
  Server,
  GitBranch,
  Network,
  Database,
  Globe,
  Palette,
} from "lucide-react"

const courses = [
  {title: "HTML & CSS",
    icon: FileCode2,
    description: "Estrutura e Estilização"
  },
  {
    title: "Tailwind CSS",
    icon: Palette,
    description: "Estilização rápida, design responsivo e componentes modernos."
  },
  {title: "JavaScript",
    icon: Braces,
    description: "interações nas paginas"
  },
  {title: "React",
    icon: Atom,
    description: "Reações e animações em paginas web"
  },
  {title: "Node.js",
    icon: Server,
    description: "Back-end, APIs, servidores, autenticação e banco de dados."
  },
   {
    title: "Next.js",
    icon: Globe,
    description: "SSR, SEO, aplicações React modernas e alta performance."
  },
  {
    title: "PHP",
    icon: Server,
    description: "Desenvolvimento back-end, APIs, autenticação e integração com bancos de dados."
  },
  {
    title: "Python",
    icon: FileCode2,
    description: "Automação, scripts, APIs, análise de dados e back-end."
  },
  {
    title: "DataBase",
    icon: Database,
    description: "Modelagem de dados, consultas, armazenamento e performance."
  },
  {title: "APIs REST",
    icon: Network,
    description: "Integração de sistemas, requisições HTTP e troca de dados."
  },
  {title: "Git e GitHub",
    icon: GitBranch,
    description: "Versionamento, colaboração, controle de código e deploy."
  }
  
 
 
  
];

export default function Courses() {
  return (
    <section id="cursos" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Ferramentas Disponíveis
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {courses.map((course) => (
            <div
              key={course.title}
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
              <course.icon
                size={40}
                className="text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-2xl font-bold">
                {course.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {course.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}