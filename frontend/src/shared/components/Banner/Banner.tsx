import { BannerBackground, BannerContent, BannerWrapper } from "./styles";
import ImageBanner from './images/imageEcae.png'

const SimpleBanner = () => {
  return (
    <BannerWrapper>
      <BannerBackground image={ImageBanner} />
      <BannerContent>
        <h1>Bem-vindo ao CSELA</h1>
        <p>Educação, Cultura e Transformação Social</p>
      </BannerContent>
    </BannerWrapper>
  );
};

export default SimpleBanner;