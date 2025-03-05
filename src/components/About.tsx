import { Code2, Brain, Rocket } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

export default function About() {
  const images = Array.from(
    { length: 20 },
    (_, i) => `/portifolio-site/imgg (${i + 1}).jpg`
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Sobre Mim</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 text-justify">
              Prazer, me chamo João! 👨🏽‍💻
              <br />
              Com mais de 6 anos de experiência em tecnologias, sou apaixonado
              por criar soluções que fazem a diferença. Minha jornada começou
              com curiosidade pela tecnologia e se transformou em uma carreira
              dedicada à excelência ao desenvolvimento de software.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              Um desenvolvedor dedicado e sempre em busca de novos desafios e
              aprendizados. Acredito no poder da tecnologia para transformar o
              mundo e estou comprometido em contribuir para essa transformação.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              Ao lado mostro um pouco da minha jornada até agora, costruindo um 
              networking e conhecendo pessoas incríveis.🚀
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Code2 className="text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Desenvolvimento Full Stack</h3>
                  <p className="text-gray-600">
                    Especializado em React, Node.js e arquiteturas modernas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Brain className="text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Resolução de Problemas</h3>
                  <p className="text-gray-600">
                    Abordagem analítica e pensamento criativo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Rocket className="text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Inovação Constante</h3>
                  <p className="text-gray-600">
                    Sempre aprendendo e aplicando novas tecnologias
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
            >
              {images.map((src, index) => (
                <div key={index} className="carousel-image-container">
                  <img
                    src={src}
                    alt={`Workspace ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
