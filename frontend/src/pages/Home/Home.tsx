import Slider from "../../shared/components/Slider/Slider";
import {
  HomeContainer,
  HomeContent,
  SliderContainer,
  HomeTitle,
  IntroductionContainer,
  MissionContainer,
  ProjectList,
  ProjectCard,
  DescriptionProject,
} from "./styles";
import IllustrationIntro from "./assets/hello_ilustration.png";
import IllustrationMission from "./assets/hand_in_hand.png";
import projectsOfferedData from './projectsOfferedData'
import ButtonLearnMore from "../../shared/components/Buttons/CustomButton";

const Home = () => {
  return (
    <HomeContainer>
      <SliderContainer>
        <Slider />
      </SliderContainer>
      <HomeContent>
        <HomeTitle>
          <img src={IllustrationIntro} alt="" className="icon-title" />
          Introdução ao CSELA
        </HomeTitle>
        <IntroductionContainer>
          <article>
            <section>
              <p className="text-introduction">
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
            </section>
          </article>
        </IntroductionContainer>
        <HomeTitle>
          <img src={IllustrationMission} alt="" className="icon-title" />
          Nossa missão
        </HomeTitle>
        <MissionContainer>
          <article>
            <section className="text-mission">
              <p>{" "}
                O Centro Social e Educacional do Lago do Aleixo (CSELA) é uma
                organização sem fins lucrativos localizada na Rua Padre Mário,
                número 21, no bairro Colônia Antônio Aleixo, em Manaus, Amazonas.
                Fundado em 24 de abril de 1972, o CSELA tem como missão promover o
                desenvolvimento comunitário, visando à promoção e dignidade humana
                dos moradores do bairro Antônio Aleixo.
                <br />
                <br />
                <strong>
                  A instituição desenvolve diversos projetos de capacitação nas
                  comunidades do bairro, incluindo:
                </strong></p>
            </section>
          </article>
          <ProjectList>
            {projectsOfferedData.map((project) => (
              <ProjectCard key={project.id}>
                <DescriptionProject>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </DescriptionProject>
                <ButtonLearnMore>Saber mais</ButtonLearnMore>
              </ProjectCard>
            ))}
          </ProjectList>
        </MissionContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
