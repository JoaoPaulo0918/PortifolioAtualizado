import { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentImage(0);
    }
  }, [project, isOpen]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        onClose();
      }

      if (!project) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [project, currentImage]);

  function handleOutsideClick(e) {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      onClose();
    }
  }

  if (!isOpen || !project) return null;

  function nextImage() {
    setCurrentImage((prev) =>
      prev === project.images.length - 1
        ? 0
        : prev + 1
    );
  }

  function prevImage() {
    setCurrentImage((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    );
  }

  return (
    <div
      onClick={handleOutsideClick}
      className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-sm
      flex
      justify-center
      items-center
      z-50
      p-4
      animate-in
      fade-in
      duration-300
      "
    >
      <div
        ref={modalRef}
        className="
        bg-slate-900
        border
        border-slate-700
        rounded-2xl
        max-w-5xl
        w-full
        overflow-hidden
        relative
        shadow-2xl
        "
      >
        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          z-50
          bg-slate-800
          hover:bg-red-600
          p-2
          rounded-full
          transition
          "
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* CARROSSEL */}

          <div className="relative bg-black">

            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="
              w-full
              h-[350px]
              lg:h-full
              object-cover
              "
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  bg-black/60
                  hover:bg-black
                  p-2
                  rounded-full
                  transition
                  "
                >
                  <ChevronLeft size={26} />
                </button>

                <button
                  onClick={nextImage}
                  className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  bg-black/60
                  hover:bg-black
                  p-2
                  rounded-full
                  transition
                  "
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}

            <div
              className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              flex
              gap-2
              "
            >
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`
                  w-3
                  h-3
                  rounded-full
                  transition

                  ${
                    currentImage === index
                      ? "bg-blue-500 scale-125"
                      : "bg-white/50"
                  }
                  `}
                />
              ))}
            </div>
          </div>

          {/* CONTEÚDO */}

          <div className="p-8 flex flex-col">

            <h2 className="text-3xl font-bold">
              {project.title}
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              {project.longDesc}
            </p>

            <h3 className="mt-8 font-semibold text-lg">
              Tecnologias utilizadas
            </h3>

            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-4
              "
            >
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-800
                  border
                  border-slate-700
                  text-sm
                  hover:border-blue-500
                  transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>