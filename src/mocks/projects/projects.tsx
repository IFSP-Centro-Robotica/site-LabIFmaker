import LabIF from "@/assets/projetos/LabIFMaker.png";
import { StaticImageData } from "next/image";
export interface InterfaceProjectsMock {
  name: string;
  description: string;
  authors: string[];
  image?: StaticImageData;
  status: "Ativo" | "Finalizado";
}

export const ProjectMock: InterfaceProjectsMock[] = [
  {
    name: "Site LabIF Maker",
    description: `rojeto realizado para o desenvolvimento da plataforma on-line do LabIF Maker, que possui o intuito de divulgar o centro de Robotica do IFSP Câmpus Itapetininga.
                  Nele foi utilizada as tecnologias: React e Next, amabas as ferramentas são opções modernas que vem sendo amplamente adotadas pelo mercado.`,
    authors: ["João Pedro Martins", "Gustavo Rafael Cardilho"],
    image: LabIF,
    status: "Ativo",
  },
  {
    name: "Práticas pedagógicas de desenho e impressão 3D",
    description: `O projeto "Práticas pedagógicas" pretende criar e desenvolver cursos abrangentes voltados para
                  professores interessados em incorporar tecnologias em suas práticas educacionais. Um dos objetivos é capacitar os
                  educadores a explorar efetivamente conceitos de desenho 3D, impressão 3D, cortadora a laser, programação Arduino e
                  outras tecnologias relevantes para a sala de aula com cursos online disponíveis no moodle IFSP Itapetininga com certificado.
                  As atividades envolvem materiais e assuntos didáticos interativos. Adaptando o conteúdo técnico para uma
                  linguagem acessível aos educadores, enfatizando a integração dessas tecnologias nas disciplinas curriculares existentes.
                  Além do oferecimento de oficinas presenciais para os professores alcançarem o sucesso na incorporação dessas ferramentas
                  inovadoras em seus ambientes de ensino.`,
    authors: ["Josiane de Oliveira"],

    status: "Ativo",
  },
  {
    name: "Gerenciador de horta automatizado com Arduino.",
    description: `O projeto busca automatizar um gerenciador de horta com Arduino, trazendo um custo
                  de produção relativamente baixo, e que seja sustentável, de maneira que interaja com o solo, molhando-o
                  quando for necessário.`,
    authors: ["Márcio Felipe Ribeiro Vieira dos Santos"],

    status: "Ativo",
  },
  {
    name: "Hello2Code e Hello2Code Kids (Hello Yotta)",
    description: `O projeto busca Desenvolvolver uma plataforma de programação em blocos (Hello2Code) para o kit de robótica HY-01 da Hello Yotta.`,
    authors: [" Vitor Gabriel de Aquino "],

    status: "Ativo",
  },

  {
    name: "Educação sexual como combate ao abuso sexual infantil.", 
    description: ` O objetivo deste trabalho é construir um instrumento lúdico para ser utilizado como ferramenta de apoio às aulas sobre educação sexual com base em dados e números de abusos cometidos contra crianças e quais consequências esse ato pode causar para o futuro do indivíduo.`,	
    authors: ["Beatriz de Souza Cardoso ", "Jennefer Coutinho França ", "Jhennifer Carine dos Santos Lemes"],

    status: "Finalizado",
  }
];
