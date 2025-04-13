export interface ICardsProjects {
  id: number;
  title: string;
  description: string;
  dialogParagraphs: string[];
}


const projectsOffered: ICardsProjects[] = [
  {
    id: 1,
    title: "ECAE (Espaço Cidadão de Arte e Educação)",
    description: "Oferece aulas de balé clássico, oficinas de leitura e jogos, leitura pelo computador, escola de música, biblioteca e espaço teatral.",
    dialogParagraphs: [
      "O ECAE oferece uma variedade de atividades, incluindo aulas de balé clássico, oficinas de leitura e jogos, leitura pelo computador, escola de música, biblioteca e espaço teatral. Além disso, realiza eventos culturais, como a Mostra Cultural, promovendo a integração e o desenvolvimento artístico dos participantes.",
      "Leitura orientada, inclusão digital, escola de música, biblioteca e espaço literal"
    ]
  },
  {
    id: 2,
    title: "Projeto Remo Vida - Atividades Esportivas",
    description: "Criado após um trágico acidente envolvendo cinco crianças que perderam a vida ao tentar atravessar o lago sem saber nadar.",
    dialogParagraphs: [
      "Criado após uma tragédia em que cinco crianças se afogaram ao tentar atravessar o lago sem saber nadar. O projeto surgiu como resposta a essa perda e tem como foco principal ensinar natação e remo para prevenir novos acidentes. Além disso, também oferece atividades como capoeira e futebol, fortalecendo valores como disciplina, respeito e cooperação."
    ]
  },
  {
    id: 3,
    title: "Programa Água Para a Vida",
    description: "Atende famílias de diversas comunidades do bairro, promovendo o acesso à água potável e conscientização sobre sua importância.",
    dialogParagraphs: [
      "É uma iniciativa do CSELA, que visa promover a educação ambiental e o uso consciente da água entre crianças e adolescentes da comunidade. Por meio de atividades educativas, oficinas práticas e ações de sensibilização, o programa busca desenvolver a consciência ecológica e incentivar práticas sustentáveis relacionadas ao uso da água."
    ]
  }
];

export default projectsOffered;