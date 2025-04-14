import cardData from "./cardData";
import {
  CardContainer,
  Card,
  DescriptionImage,
  SubtitleImage,
  TitleImage,
  ResponsiveContainerWorkshops,
} from "./styles";

const Workshops = () => {
  return (
    <ResponsiveContainerWorkshops>
      <h1>Oficinas</h1>
      <section>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat non ratione optio, praesentium excepturi maxime ipsum earum ut dolore itaque asperiores rem error nihil explicabo autem voluptatibus? In, dolore dignissimos!</p>
      </section>
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
