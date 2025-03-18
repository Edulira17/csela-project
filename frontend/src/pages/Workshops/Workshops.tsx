import cardData from "./cardData";
import {
  CardContainer,
  Card,
  DescriptionImage,
  SubtitleImage,
  TitleImage,
} from "./styles";

const Workshops = () => {
  return (
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
  );
};

export default Workshops;
