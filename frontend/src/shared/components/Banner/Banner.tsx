import { BannerBackground, BannerContent, BannerWrapper } from "./styles";
import imageEcae from './images/imageEcae.png'

const SimpleBanner = () => {
  return (
    <BannerWrapper>
      <BannerBackground $image={imageEcae} />
      <BannerContent>
        <h1>Bem-vindo ao CSELA</h1>
        <p>Educação, Cultura e Transformação Social</p>
      </BannerContent>
    </BannerWrapper>
  );
};

export default SimpleBanner;