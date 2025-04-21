import styled from "styled-components";

interface BackgroundProps {
  image: string;
}

export const BannerWrapper = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
`

export const BannerBackground = styled.div<BackgroundProps>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`

export const BannerContent = styled.div` 
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 2rem;

  font-weight: bold;
  text-shadow: 1px 1px 4px black;
  z-index: 2;
  text-align: center;
  padding: 20px;

  background-color:rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  border-radius: 10px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1rem;
    margin-top: 10px;
    max-width: 600px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);  
  }
`