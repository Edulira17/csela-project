import cardData from "./cardData";
import {
  Card,
  SubtitleImage,
  TitleImage,
  ResponsiveContainerWorkshops,
  AboutWorkshops,
  CardWrapper
} from "./styles";

const Workshops = () => {
  return (
    <ResponsiveContainerWorkshops>
      <AboutWorkshops>
        <h1 className="about-title">🛠 Oficinas que Transformam Vidas</h1>
        <p className="about-text">
          O Centro Social e Educacional do Lago do Aleixo (CSELA) desenvolve
          uma ampla gama de oficinas com foco no fortalecimento educacional,
          cultural e social da comunidade local. As atividades são
          cuidadosamente planejadas para atender crianças, adolescentes e
          adultos, promovendo o acesso ao conhecimento, à arte e ao esporte
          como instrumentos de inclusão e transformação.
        </p>
        <CardWrapper>
          {cardData.map((card) => (
            <Card key={card.id}>
              <img src={card.image} alt={card.title} />
              <div className="card-description">
                <TitleImage>{card.title}</TitleImage>
                <SubtitleImage>{card.subtitle}</SubtitleImage>
              </div>
            </Card>
          ))}
        </CardWrapper>
      </AboutWorkshops>
    </ResponsiveContainerWorkshops >
  );
};

export default Workshops;
