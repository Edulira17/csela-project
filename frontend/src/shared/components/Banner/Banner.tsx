import { BannerContainer, Banner, OverlayText } from "./styles";


const Banner = () => {
  return (
    <BannerContainer>
      <OverlayText>
        <div className="banner-overlay-text">
          <span className="text-highlight">Bem vindo ao CSELA</span>
        </div>
      </OverlayText>
      <Banner />
    </BannerContainer>
  );
};

export default Banner;