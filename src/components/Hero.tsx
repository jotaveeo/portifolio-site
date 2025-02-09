import { Github, Linkedin, Mail } from "lucide-react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 bg-cover bg-center mx-auto"
        style={{
          backgroundImage: "url('./img3.jpeg') ",
        }}
      >
        <div className="max-w-4xl mx-auto text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              João Vitor Oliveira
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Desenvolvedor Full Stack
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Transformando ideias em experiências digitais excepcionais através
            de código limpo e design intuitivo.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/jotaveeo"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jotavee088/"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:joaovitorgoku10@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Ver Projetos
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors ml-1">
            <Link to="/resume">Ver Currículo</Link>
          </button>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
