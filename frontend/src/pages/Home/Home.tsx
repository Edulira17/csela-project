import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeContentText,
  ProjectList,
  ProjectCard,
  DescriptionProject,
  TextContainer,
  BannerContainer
} from "./styles";
import projectsOfferedData from './projectsOfferedData'
import ButtonLearnMore from "../../shared/components/ui/Dialog/Dialog";
import SimpleBanner from "../../shared/components/Banner/Banner";


const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <SimpleBanner />
      </BannerContainer>
      <HomeContent>
        <HomeTitle>
          🤝 CSELA: Compromisso com a Comunidade
        </HomeTitle>
        <HomeContentText>
          <TextContainer>
            <p >
              <strong>O Centro Social e Educacional do Lago do Aleixo (CSELA)</strong> é uma instituição comprometida com o desenvolvimento social e educacional da comunidade. Através de uma série de projetos, o CSELA busca proporcionar oportunidades para crianças, jovens e adultos, incentivando a arte, o esporte, a cultura e a cidadania.
              <br />
              <br />
              De acordo com <strong>Neuza Ramos Colares</strong>, coordenadora do
              centro, um importante local desse projeto é a biblioteca, que evita
              o deslocamento dos estudantes até o Centro da cidade para realizar
              pesquisas escolares. Já o projeto Remo Vida Atividades Esportivas
              foi pensado e desenvolvido após um acidente envolvendo cinco
              crianças, que perderam a vida ao naufragarem quando tentavam
              atravessar o lago. Nenhuma dessas crianças sabia nadar e, desde
              então, o projeto ensina às crianças a prática de natação e também a
              de remo, além de manter uma escola de futebol e de capoeira.
              <br />
              <br />A atuação do CSELA com grupos populares procura enfatizar
              processos de conscientização, onde os atores sociais vão,
              progressivamente, assumindo o papel de sujeitos de sua própria
              história. Este aprendizado social necessita de um espaço público
              para se expressar, denominado como espaços alternativos. Daí os
              diversos espaços e atividades descentralizadas por todo o bairro da
              Colônia Antonio Aleixo. Contudo, nesses processos autogestionários,
              procura-se fazer com que a lógica da prática cooperativa seja
              compreendida pela população do Bairro.</p>
          </TextContainer>
        </HomeContentText>
        <HomeTitle>
          🌟 Nossa missão
        </HomeTitle>
        <HomeContentText>
          <TextContainer>
            <section>
              <p>{" "}
                O Centro Social e Educacional do Lago do Aleixo (CSELA) é uma organização comprometida com a transformação social da comunidade da Colônia Antônio Aleixo, em Manaus. Atuando há anos com dedicação e propósito, o CSELA desenvolve projetos que impactam positivamente a vida de crianças, adolescentes e famílias em situação de vulnerabilidade.
                <br />
                <br />
                <strong>
                  A missão do CSELA é formar cidadãos conscientes, criativos e solidários, promovendo o acesso à educação, à cultura, ao esporte e à cidadania. Suas ações são guiadas por três pilares essenciais, que sustentam todas as atividades desenvolvidas pela instituição:
                </strong></p>
            </section>
          </TextContainer>
          <ProjectList>
            {projectsOfferedData.map((project) => (
              <ProjectCard key={project.id}>
                <DescriptionProject>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </DescriptionProject>
                <ButtonLearnMore
                  title={project.title}
                  paragraphs={project.dialogParagraphs}
                >
                  Saber mais
                </ButtonLearnMore>
              </ProjectCard>
            ))}
          </ProjectList>
        </HomeContentText>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
