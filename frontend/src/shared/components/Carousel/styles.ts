import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const CarouselSlide = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel-image-container{
    width: 100%;
    object-fit: cover ;
    filter: blur(5px);
  }
`

export const OverlayText = styled.div`


`