import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
`

export const CarouselSlide = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel-image-container{
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover ;
    filter: blur(5px);
  }
`

export const OverlayText = styled.div` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
  z-index: 2;
  pointer-events: none; 

  .carousel-overlay-text{
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }

  .text-highlight{
    font-size: 2.5rem;
    font-weight: 900;
  }
`