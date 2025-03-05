import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DripStore E-commerce",
    description:
      "Plataforma completa de e-commerce online, frontend e backend.",
    image: "./banner1.png", // Certifique-se de que o caminho está correto
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/jotaveeo/ProjetoDripStore-Site",
    demo: "https://demo.com",
  },
  {
    title: "Memória a Dois",
    description:
      "Aplicativo de memórias compartilhadas para casais. (Em desenvolvimento)",
    image: "./banner2.png", // Certifique-se de que o caminho está correto
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/jotaveeo?tab=repositories",
    demo: "https://demo.com",
  },
  {
    title: "ZapBot-Cobrança",
    description: "Robô de cobrança automatizada para WhatsApp.",
    image: "./zapbranca.jpeg",
    tech: ["Node", "JavaScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "VizinhoBot-Vídeos",
    description: "Robô de postagem de vídeos automatizado para o TikTok.",
    image: "./ttbot.jpg",
    tech: ["Node"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "WebMercado",
    description: "Plataforma de e-commerce online, frontend e backend.",
    image: "./desenvolvimento.jpg",
    tech: ["Node"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Gerador de Recibos",
    description: "Aplicativo de geração de recibos para pequenos negócios.",
    image: "./desenvolvimento.jpg",
    tech: ["Node"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projetos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
