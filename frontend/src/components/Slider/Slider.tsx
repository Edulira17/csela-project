import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay  } from "swiper/modules";
import './Slider.css'
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import slide1 from './assets/csela_img01.jpg'
import slide2 from './assets/csela_img02.jpg'
import slide3 from './assets/csela_img03.jpg'
import slide4 from './assets/csela_img04.jpg'


const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      className="slider"
    >
      <SwiperSlide className="slider-item">
        <img src={slide1} alt="Imagem do slider 1" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide2} alt="Imagem do slider 2" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide3} alt="Imagem do slider 3" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide4} alt="Imagem do slider 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
