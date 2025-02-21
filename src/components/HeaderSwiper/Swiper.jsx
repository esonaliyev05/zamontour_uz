import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import "./Swiper.scss";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={10}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="HeaderSwiper"
      >
         <SwiperSlide className="chiled-swiper">
          <div className="container">
            <div className="swiper-text">
              <p>{t("Go'zal shaharga bir nazar tashlang")}</p>

              <h1>{t("Dubai")}</h1>

              <button><a href="#concat">{t("U yerga boring")}</a></button>
            </div>

            <div className="swiper-more">
              <div className="boxses">
                <div className="box">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <div className="text">
                    <p>{t("Aholisi")}:</p>
                    <h2>69.86 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FaGlobe />
                  </div>
                  <div className="text">
                    <p>{t("Maydoni")}:</p>
                    <h2>513.120 KM2</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="text">
                    <p>{t("O'rtacha narxi")}:</p>
                    <h2>$165.450</h2>
                  </div>
                </div>

                <button ><a href="#concat">{t("Batafsil ma'lumot")}</a></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chiled-swiper">
          <div className="container">
            <div className="swiper-text">
              <p>{t("Go'zal shaharga bir nazar tashlang")}:</p>

              <h1>{t("Istanbul")}</h1>

              <button><a href="#concat">{t("U yerga boring")}</a></button>
            </div>

            <div className="swiper-more">
              <div className="boxses">
                <div className="box">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <div className="text">
                    <p>{t("Aholisi")}:</p>
                    <h2>44.48 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FaGlobe />
                  </div>
                  <div className="text">
                    <p>{t("Maydoni")}:</p>
                    <h2>275.400 KM2</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="text">
                    <p>{t("O'rtacha narxi")}:</p>
                    <h2>$946.000</h2>
                  </div>
                </div>

                <button ><a href="#concat">{t("Batafsil ma'lumot")}</a></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chiled-swiper">
          <div className="container">
            <div className="swiper-text">
              <p>{t("Go'zal shaharga bir nazar tashlang")}:</p>

              <h1>{t("Sharm El-Sheikh")}</h1>

              <button><a href="#concat">{t("U yerga boring")}</a></button>
            </div>

            <div className="swiper-more">
              <div className="boxses">
                <div className="box">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <div className="text">
                    <p>{t("Aholisi")}:</p>
                    <h2>67.41 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FaGlobe />
                  </div>
                  <div className="text">
                    <p>{t("Maydoni")}:</p>
                    <h2>67.41 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="text">
                    <p>{t("O'rtacha narxi")}:</p>
                    <h2>$425.600</h2>
                  </div>
                </div>

                <button ><a href="#concat">{t("Batafsil ma'lumot")}</a></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chiled-swiper">
          <div className="container">
            <div className="swiper-text">
              <p>{t("Go'zal shaharga bir nazar tashlang")}:</p>

              <h1>{t("Antalya")}</h1>

              <button><a href="#concat">{t("U yerga boring")}</a></button>
            </div>

            <div className="swiper-more">
              <div className="boxses">
                <div className="box">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <div className="text">
                    <p>{t("Aholisi")}:</p>
                    <h2>8.66 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FaGlobe />
                  </div>
                  <div className="text">
                    <p>{t("Maydoni")}:</p>
                    <h2>41.290 KM2</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="text">
                    <p>{t("O'rtacha narxi")}:</p>
                    <h2>$1.100.200</h2>
                  </div>
                </div>

                <button ><a href="#concat">{t("Batafsil ma'lumot")}</a></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chiled-swiper">
          <div className="container">
            <div className="swiper-text">
              <p>{t("Go'zal shaharga bir nazar tashlang")}:</p>

              <h1>{t("Hindiston")}</h1>

              <button><a href="#concat">{t("U yerga boring")}</a></button>
            </div>

            <div className="swiper-more">
              <div className="boxses">
                <div className="box">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <div className="text">
                    <p>{t("Aholisi")}:</p>
                    <h2>15.66 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FaGlobe />
                  </div>
                  <div className="text">
                    <p>{t("Maydoni")}:</p>
                    <h2>881.290 KM2</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="text">
                    <p>{t("O'rtacha narxi")}:</p>
                    <h2>$4.00.200</h2>
                  </div>
                </div>

                <button ><a href="#concat">{t("Batafsil ma'lumot")}</a></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chiled-swiper">
          <div className="container">
            <div className="swiper-text">
              <p>{t("Go'zal shaharga bir nazar tashlang")}:</p>

              <h1>{t("Saudiya-arab")}</h1>

              <button><a href="#concat">{t("U yerga boring")}</a></button>
            </div>

            <div className="swiper-more">
              <div className="boxses">
                <div className="box">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <div className="text">
                    <p>{t("Aholisi")}:</p>
                    <h2>11.66 M</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FaGlobe />
                  </div>
                  <div className="text">
                    <p>{t("Maydoni")}:</p>
                    <h2>21.290 KM2</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="text">
                    <p>{t("O'rtacha narxi")}:</p>
                    <h2>$4200</h2>
                  </div>
                </div>

                <button ><a href="#concat">{t("Batafsil ma'lumot")}</a></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
