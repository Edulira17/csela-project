export interface ICardsProjects {
  id: number;
  title: string;
  description: string;
  dialogParagraphs: string[];
}


const projectsOffered: ICardsProjects[] = [
  {
    id: 1,
    title: "📚 Educação como Ferramenta de Transformação",
    description: "Acreditamos que a educação é a base para a construção de um futuro melhor. Por isso, oferecemos oficinas educativas, incentivo à leitura, inclusão digital, reforço escolar e momentos de aprendizado coletivo. O conhecimento é o alicerce para o desenvolvimento da autonomia, da cidadania e de oportunidades reais.",
    dialogParagraphs: [
      "O ECAE oferece uma variedade de atividades, incluindo aulas de balé clássico, oficinas de leitura e jogos, leitura pelo computador, escola de música, biblioteca e espaço teatral. Além disso, realiza eventos culturais, como a Mostra Cultural, promovendo a integração e o desenvolvimento artístico dos participantes."
    ]
  },
  {
    id: 2,
    title: "🎨 Cultura e Arte como Expressão e Identidade",
    description: "A arte é uma poderosa ferramenta de expressão e valorização das raízes culturais. Por meio de oficinas de teatro, grafite, violão, dança e mostras culturais, estimulamos a criatividade, o protagonismo e o sentimento de pertencimento dos nossos participantes, fortalecendo laços com a cultura local e incentivando novas perspectivas de vida.",
    dialogParagraphs: [
      "Criado após uma tragédia em que cinco crianças se afogaram ao tentar atravessar o lago sem saber nadar. O projeto surgiu como resposta a essa perda e tem como foco principal ensinar natação e remo para prevenir novos acidentes. Além disso, também oferece atividades como capoeira e futebol, fortalecendo valores como disciplina, respeito e cooperação."
    ]
  },
  {
    id: 3,
    title: "🛶 Esporte e Meio Ambiente como Ações de Vida e Prevenção",
    description: "Projetos como o Remo Vida e o Água para a Vida integram esporte, saúde e educação ambiental. Promovemos atividades que incentivam o cuidado com o corpo, com a natureza e com o coletivo. Essas práticas reforçam valores como disciplina, respeito, consciência ecológica e cooperação.",
    dialogParagraphs: [
      "É uma iniciativa do CSELA, que visa promover a educação ambiental e o uso consciente da água entre crianças e adolescentes da comunidade. Por meio de atividades educativas, oficinas práticas e ações de sensibilização, o programa busca desenvolver a consciência ecológica e incentivar práticas sustentáveis relacionadas ao uso da água."
    ]
  }
];

export default projectsOffered;