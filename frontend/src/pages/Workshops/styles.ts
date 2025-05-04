import styled from "styled-components";

export const ResponsiveContainerWorkshops = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  padding: 1rem;
`;

export const AboutWorkshops = styled.section`
  background-color: #fff;
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1400px;
  margin: 0 auto;

  .about-title {
    font-size: 2rem;
    color: #b22222;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .about-text {
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const TextWrapper = styled.article`
  max-width: 100%;
`
// Cards
export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 2rem 0;
  border-radius: 1.5rem;
`;

export const CardWrapper = styled.div`
  max-width: 1080px; 
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;

  // 2 colunas para telas menores que 768px
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  // 1 colunas para telas menores que 480px
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.figure`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 362px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;

  img {
    width: 250px;
    height: 250px;

    object-fit: cover;
    border-radius: 8px;
  }
`;

export const DescriptionImage = styled.figcaption`
  font-size: 0.7rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  max-width: 100%;
  gap: 0.5rem;
`;

export const TitleImage = styled.h4`
  font-weight: 900;
  color: #000;
`;

export const SubtitleImage = styled.p`
  color: gray;
`;
