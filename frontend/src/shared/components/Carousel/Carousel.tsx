import SimpleSlider from 'react-slick';

import slide1 from './images/csela_img01.jpg'
import slide2 from './images/csela_img02.jpg'
import slide3 from './images/csela_img03.jpg'
import slide4 from './images/csela_img04.jpg'
import { CarouselContainer, CarouselSlide, OverlayText } from './styles';


const Carousel = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <CarouselContainer>
      <OverlayText>
        <div className='carousel-overlay-text'>
          <span className='carousel-highlight'>Bem vindo ao Csela !</span>
          <span className='carousel-highlight'>Cuidando, ensinando e inspirando</span>
        </div>
      </OverlayText>
      <SimpleSlider {...settings}>
        <CarouselSlide>
          <img src={slide1} alt="image1" className='carousel-image-container' />
        </CarouselSlide>
        <CarouselSlide>
          <img src={slide2} alt="image2" className='carousel-image-container' />
        </CarouselSlide>
        <CarouselSlide>
          <img src={slide3} alt="image3" className='carousel-image-container' />
        </CarouselSlide>
        <CarouselSlide>
          <img src={slide4} alt="image3" className='carousel-image-container' />
        </CarouselSlide>
      </SimpleSlider>
    </CarouselContainer>
  );
};

export default Carousel;
