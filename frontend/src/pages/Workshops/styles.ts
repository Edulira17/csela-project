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
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  
  .about-title {
    font-size: 2rem;
    color: #b22222;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .about-text {
    width: 80%; 
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }

`;

// Cards
export const CardWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const Card = styled.figure`
  flex: 1 1 300px;
  max-width: 300px;
  background-color: #a71e22;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }

  .card-description {
    max-width: 80%; 
  }

  @media screen and (max-width: 768px) {  
    max-width: 400px;
  }
`;

export const TitleImage = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SubtitleImage = styled.p`
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

