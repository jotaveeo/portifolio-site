import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Currículo</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Experiência Profissional
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">
                  Imobiliária Edilene Azevedo (2021 - 2025) - Auxiliar
                  Administrativo
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Supervisor/Gerente</li>
                  <li>
                    Auxiliei no treinamento dos colaboradores no uso dos
                    sistemas dentro da empresa.
                  </li>
                  <li>
                    Gerenciava o sistema de fluxo de caixa do setor financeiro.
                  </li>
                  <li>
                    Solucionava problemas relacionados a locações de imóveis.
                  </li>
                  <li>Gerenciava o site e as redes sociais da empresa.</li>
                  <li>Prestava suporte e manutenção nos equipamentos e computadores.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Experiência Acadêmica / Cursos
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">
                  Técnico em Informática, IFCE (2019 - 2021)
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Desenvolvimento de projetos Web em equipe.</li>
                  <li>
                    Criação de sites e aplicativos utilizando diversas
                    linguagens de programação.
                  </li>
                  <li>
                    Participação de projetos voltados ao empreendedorismo.
                  </li>
                  <li>
                    Participação no clube de robótica do IFCE (GERE) e em
                    eventos como o Sebrae Startup.
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">
                  Curso Geração Tech, Digital College (2024)
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Curso de desenvolvimento Fullstack Web.</li>
                  <li>Desenvolvimento de projetos Web em equipe.</li>
                  <li>
                    Criação de sites em HTML, CSS e Javascript, além de projetos
                    em React.
                  </li>
                  <li>
                    Participação de projetos voltados ao empreendedorismo, como
                    o Sebrae Startup e Recruiting Day.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Formação Acadêmica</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">
                  Instituto Federal de Educação, Ciência e Tecnologia do Ceará
                  (IFCE), Campus Itapipoca-CE
                </h4>
                <p className="text-gray-600">
                  Ensino médio e tecnólogo em Informática.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Universidade de Fortaleza (UNIFOR), Fortaleza-CE
                </h4>
                <p className="text-gray-600">
                  Cursando Engenharia da Computação (2024 - Presente)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Habilidades Técnicas
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Linguagens de Programação: Python, HTML, CSS, C#, Java,
                Javascript, Portugol, Android Studio, Git e GitHub.
              </li>
              <li>Banco de Dados: SQL, MySQL e MariaDB .</li>
              <li>Sistemas: Windows, Office, Linux.</li>
              <li>
                Manutenção de Hardware: Especialista em reparo e manutenção de
                computadores e notebooks.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Idiomas</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Português: Nativo.</li>
              <li>Inglês: Básico.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Interesses</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Competições de programação.</li>
              <li>Projetos pessoais de tecnologia.</li>
              <li>Criação de jogos digitais e aplicativos móveis.</li>
              <li>Construção de computadores e robôs.</li>
              <li>
                Participação em comunidades online de programadores e
                entusiastas de TI.
              </li>
              <li>Empreendedores.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
