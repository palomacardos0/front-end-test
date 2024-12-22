import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import DeskBanner1 from "../../assets/png/Banner_1.png";
import DeskBanner2 from "../../assets/png/Banner_2.png";
import DeskBanner3 from "../../assets/png/Banner_3.png";
import MobBanner1 from "../../assets/png/Banner_mob_1.png";
import MobBanner2 from "../../assets/png/Banner_mob_2.png";
import MobBanner3 from "../../assets/png/Banner_mob_3.png";
import { useMediaQuery } from "react-responsive";

export const Banner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="banner-container">
      {isMobile ? (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="banner-container__image">
              <img
                src={MobBanner1}
                alt={"Banner  - O que você está buscando?"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-container__image">
              <img
                src={MobBanner2}
                alt="Banner - Melhore a experiência de compra mobile"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-container__image">
              <img src={MobBanner3} alt="Banner - Como otimizar o código" />
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="banner-container__image">
              <img
                src={DeskBanner1}
                alt={"Banner  - O que você está buscando?"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-container__image">
              <img
                src={DeskBanner2}
                alt="Banner - Melhore a experiência de compra mobile"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-container__image">
              <img src={DeskBanner3} alt="Banner - Como otimizar o código" />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};
