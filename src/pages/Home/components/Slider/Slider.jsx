import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        data-aos="fade-up"
        className="mySwiper"
      >
        <SwiperSlide className="first">
          <div className="slider__text">
            <p className="slider__text--title">Qara titanium</p>
            <h1 className="slider__text--header">Bijuteriya mağazası</h1>
            <span>Toy şənlikləri üçün hədəfimiz</span>
            <button>
              <Link to="/shop">İndi kəşf et</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="second">
          <div className="slider__text">
            <p className="slider__text--title">50% endirim</p>
            <h1 className="slider__text--header">Əsas məlumatlar</h1>
            <span> Yaxşı görünən və hiss etdirən zərgərlik parçaları</span>
            <button>
              <Link to="/shop">İndi kəşf et</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="third">
          <div className="slider__text">
            <p className="slider__text--title">18k bərk</p>
            <h1 className="slider__text--header">Mükəmməl qızıl</h1>
            <span>Nəsillərə ötürüləcək gözəl parçalar</span>
            <button>
              <Link to="/shop">İndi al</Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
