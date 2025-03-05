import { Code, Monitor, Smartphone, Database } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web responsivas e modernas.",
    icon: <Monitor size={40} className="text-blue-500" />,
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Desenvolvimento de aplicativos móveis para Android e iOS.",
    icon: <Smartphone size={40} className="text-blue-500" />,
  },
  {
    title: "Desenvolvimento Backend",
    description: "Criação de APIs e sistemas backend escaláveis.",
    icon: <Database size={40} className="text-blue-500" />,
  },
  {
    title: "Consultoria em Tecnologia",
    description:
      "Consultoria para ajudar a escolher as melhores tecnologias para seu projeto.",
    icon: <Code size={40} className="text-blue-500" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Serviços</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
