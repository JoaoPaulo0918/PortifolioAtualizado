"use client";

import { useState } from "react";
import {
  UtensilsCrossed,
  Database,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

type Project = {
  icon: LucideIcon;
  title: string;
  desc: string;
  images: string[];
  fullDesc: string;
  techs: string[];
  link: string;
};

const projects: Project[] = [
  {
    icon: UtensilsCrossed,
    title: "Cardápio Digital",
    desc: "Fazendo seu pedido de forma rápida e divertida.",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],
    fullDesc:
      "Projeto de cardápio digital com foco em praticidade, permitindo pedidos rápidos e interface simples para usuários.",
    techs: ["React", "TailWind CSS", "JS"],
    link: "https://cardapio-hamburgueria-3ngg.vercel.app/",
  },
  {
    icon: Database,
    title: "Aplicativo Web FarmAqui",
    desc: "Um aplicativo para melhorar suas compras online.",
    images: ["/images/home.jpg", "/images/imageLogin.jpg", "images/inicio.jpg"],
    fullDesc:
      "Aplicativo web de farmácia para consultas simples de dados de rémedios, vitaminas, suplementos etc.. otimizada para uso em sistemas internos. OBS: Ainda está em desenvolvimento",
    techs: ["Node.js", "Express", "MongoDB", "React", "Vite", "Tailwind CSS"],
    link: "https://seuapi.com",
  },
  {
    icon: Briefcase,
    title: "Portifólio",
    desc: "Bem vindo ao meu portifólio profissional.",
    images: ["/images/por.jpg", "/images/por1.jpg", "/images/por2.jpg"],
    fullDesc:
      "Portfólio pessoal desenvolvido para apresentar projetos e habilidades como desenvolvedor.",
    techs: ["TypeScript", "Tailwind", "NextJs"],
    link: "https://portifolio-atualizado-ciqm.vercel.app/",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  function openModal(project: Project) {
    setActiveProject(project);
    setImgIndex(0);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setActiveProject(null);
  }

  function nextImg() {
    if (!activeProject) return;

    setImgIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  }

  function prevImg() {
    if (!activeProject) return;

    setImgIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  }

  return (
    <section id="projetos" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Projetos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 justify-items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item)}
              className="cursor-pointer group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <item.icon
                size={40}
                className="text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

              <p className="text-slate-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= POPUP ================= */}
      {open && activeProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 w-[90%] max-w-2xl p-6 rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white"
            >
              <X />
            </button>

            {/* carrossel */}
            <div className="relative">
              <img
                src={activeProject.images[imgIndex]}
                className="w-full h-64 object-cover rounded-xl"
              />

              <button
                onClick={prevImg}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronRight />
              </button>
            </div>

            {/* conteúdo */}
            <h2 className="text-2xl font-bold mt-4">
              {activeProject.title}
            </h2>

            <p className="text-slate-300 mt-2">
              {activeProject.fullDesc}
            </p>

            {/* tecnologias */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {activeProject.techs.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-800 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* botão */}
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-6 bg-blue-600 hover:bg-blue-700 py-2 rounded-xl"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      )}
    </section>
  );
}