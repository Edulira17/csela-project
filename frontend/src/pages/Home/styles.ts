import styled from "styled-components";
// Home styles
export const HomeContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const BannerContainer = styled.div`
  width: 100%;
`;

export const HomeContent = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  gap: 2rem;

  .icon-title {
    width: 50px;
    height: auto;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: #b22222;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IntroductionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  padding: 2rem;
  background-color: #fff;
  border-radius: 16px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const MissionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  align-items: center;
  margin-bottom: 3rem;
  background-color: #fff;

  padding: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const TextContainer = styled.article`
  width: 80%;
  padding: 2rem;
  text-align: justify;
  font-size: 1.2rem;
`

export const ProjectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  padding: 0;
  width: 100%;

  li {
    list-style: none;
  }
`;

// Alterar nome desse componente styled components:
export const ProjectCard = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  max-width: 350px;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 
              0 6px 6px rgba(0, 0, 0, 0.10);
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 
                0 10px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px); 
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const DescriptionProject = styled.figcaption`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #b22222;
    margin-bottom: 0.8rem;
  }

  p {
    text-align: justify;
    font-size: .9rem;
    color: #333;
  }
`;
