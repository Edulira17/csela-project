import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin: 0 auto;
`

export const Banner = styled.img`

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

  .banner-overlay-text{
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