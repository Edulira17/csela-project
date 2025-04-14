import styled from "styled-components";


export const ResponsiveContainerWorkshops = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

// Cards
export const CardContainer = styled.section`
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  
`;

export const Card = styled.figure`
  display: flex;
  flex-direction: column;

  width: 282px;
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
