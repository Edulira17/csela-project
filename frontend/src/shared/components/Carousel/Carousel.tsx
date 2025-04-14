import SimpleSlider from 'react-slick';


import slide1 from './images/csela_img01.jpg'
import slide2 from './images/csela_img02.jpg'
import slide3 from './images/csela_img03.jpg'
import slide4 from './images/csela_img04.jpg'
import { CarouselContainer, CarouselSlide } from './styles';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <SimpleSlider {...settings}>
        <CarouselSlide>
          <img src={slide1} alt="image1" className='carousel-image'/>
        </CarouselSlide>
        <CarouselSlide>
          <img src={slide2} alt="image2" className='carousel-image'/>
        </CarouselSlide>
        <CarouselSlide>
          <img src={slide3} alt="image3" className='carousel-image'/>
        </CarouselSlide>
        <CarouselSlide>
          <img src={slide4} alt="image3" className='carousel-image'/>
        </CarouselSlide>
      </SimpleSlider>
    </CarouselContainer>
  );
};

export default Carousel;
