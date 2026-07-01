import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function CTA() {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Início */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold text-blue-500">
              <a href="#inicio">DevWeb</a>
            </h1>

            <p className="text-gray-500 mt-2">
              © 2026 Todos os direitos reservados.
            </p>
          </div>

          {/* Meio */}
          <div className="text-center">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Configurações de Cookies
            </a>
          </div>

          {/* Fim */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
