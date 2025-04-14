import cardData from "./cardData";
import {
  CardContainer,
  Card,
  DescriptionImage,
  SubtitleImage,
  TitleImage,
  ResponsiveContainerWorkshops,
  AboutWorkshops,
} from "./styles";

const Workshops = () => {
  return (
    <ResponsiveContainerWorkshops>
      <AboutWorkshops>
        <h1 className="about-title">🛠 Oficinas que Transformam Vidas</h1>
        <p className="about-text">O Centro Social e Educacional do Lago do Aleixo (CSELA) desenvolve uma ampla gama de oficinas com foco no fortalecimento educacional, cultural e social da comunidade local. As atividades são cuidadosamente planejadas para atender crianças, adolescentes e adultos, promovendo o acesso ao conhecimento, à arte e ao esporte como instrumentos de inclusão e transformação.</p>
      </AboutWorkshops>
      <hr />
      <CardContainer>
        {cardData.map((card) => (
          <Card key={card.id}>
            <img src={card.image} alt={card.title} />
            <DescriptionImage>
              <TitleImage>{card.title}</TitleImage>
              <SubtitleImage>{card.subtitle}</SubtitleImage>
            </DescriptionImage>
          </Card>
        ))}
      </CardContainer>
    </ResponsiveContainerWorkshops>

  );
};

export default Workshops;
