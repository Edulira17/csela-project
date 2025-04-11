export interface ICardsProjects {
  id: number;
  title: string;
  description: string;
  dialogTitle: string;
  dialogParagraphs: string[];
}


const projectsOffered: ICardsProjects[] = [
  {
    id: 1,
    title: "ECAE (Espaço Cidadão de Arte e Educação)",
    description: "Oferece aulas de balé clássico, oficinas de leitura e jogos, leitura pelo computador, escola de música, biblioteca e espaço teatral.",
    dialogTitle: "ECAE (Espaço Cidadão de Arte e Educação)",
    dialogParagraphs: [
      "Oferece aulas de balé clássico, oficina de artes, espaço de leitura e jogos...",
      "Leitura orientada, inclusão digital, escola de música, biblioteca e espaço literal"
    ]
  },
  {
    id: 2,
    title: "Projeto Remo Vida - Atividades Esportivas",
    description: "Criado após um trágico acidente envolvendo cinco crianças que perderam a vida ao tentar atravessar o lago sem saber nadar.",
    dialogTitle: "ECAE (Espaço Cidadão de Arte e Educação)",
    dialogParagraphs: [
      "Oferece aulas de balé clássico, oficina de artes, espaço de leitura e jogos...",
      "Leitura orientada, inclusão digital, escola de música, biblioteca e espaço literal"
    ]
  },
  {
    id: 3,
    title: "Programa Água Para a Vida",
    description: "Atende famílias de diversas comunidades do bairro, promovendo o acesso à água potável e conscientização sobre sua importância.",
    dialogTitle: "ECAE (Espaço Cidadão de Arte e Educação)",
    dialogParagraphs: [
      "Oferece aulas de balé clássico, oficina de artes, espaço de leitura e jogos...",
      "Leitura orientada, inclusão digital, escola de música, biblioteca e espaço literal"
    ]
  }
];

export default projectsOffered;