import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaTaxi } from "react-icons/fa";
import "./Swiper.scss";
import { useTranslation } from "react-i18next";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { FaUsers } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: false,
        }}
        breakpoints={{
          307: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        navigation={{
          prevEl: ".prevarrow",
          nextEl: ".nextarrow",
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="Main-Swiper"
      >
        <SwiperSlide className="chailid-swiper">
          <img src="/Main-img/cand.jpg"  loading="lazy" alt="Description" />
          <div className="text-swp">
            <div className="oel">
              <h3>
                {t('aqsh')} <br />
                <span>
                  {" "}
                  <FaUsers /> {t('buyurtmalar')}: 300
                </span>
              </h3>

              <h3>
                700$
                <span>/{t('kishi')}</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>{t('tur ichiga oladi')}:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  {t('besh kunlik sayohat mehmonxona')}
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  {t('aviabilet')}
                </li>
                <li>
                  <span>
                    <FaHotel />
                  </span>{" "}
                  {t('eng yaxshi manzillar')}
                </li>
              </ul>
            </div>
            <button >
              <a href="#concat">{t('joy band qilish')}</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="/Main-img/deals-01.jpg" loading="lazy" alt="Description" />
          <div className="text-swp">
            <div className="oel">
              <h3>
                {t('angliya')} <br />
                <span>
                  {" "}
                  <FaUsers /> {t('buyurtmalar')}: 300
                </span>
              </h3>

              <h3>
                700$
                <span>/{t('kishi')}</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>{t('tur ichiga oladi')}:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  {t('besh kunlik sayohat mehmonxona')}
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  {t('aviabilet')}
                </li>
                <li>
                  <span>
                    <FaHotel />
                  </span>{" "}
                  {t('eng yaxshi manzillar')}
                </li>
              </ul>
            </div>
            <button>
              <a href="#concat">{t('joy band qilish')}</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="Main-img/deals-04.jpg"  loading="lazy" alt="Description" />
          <div className="text-swp">
            <div className="oel">
              <h3>
                {t('kanada')} <br />
                <span>
                  {" "}
                  <FaUsers /> {t('buyurtmalar')}: 300
                </span>
              </h3>

              <h3>
                700$
                <span>/{t('kishi')}</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>{t('tur ichiga oladi')}:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  {t('besh kunlik sayohat mehmonxona')}
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  {t('aviabilet')}
                </li>
                <li>
                  <span>
                    <FaHotel />
                  </span>{" "}
                  {t('eng yaxshi manzillar')}
                </li>
              </ul>
            </div>
            <button>
              <a href="#concat">{t('joy band qilish')}</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="Main-img/eng.jpg"  loading="lazy" alt="Description"/>
          <div className="text-swp">
            <div className="oel">
              <h3>
                {t('yevropa')} <br />
                <span>
                  {" "}
                  <FaUsers /> {t('buyurtmalar')}: 300
                </span>
              </h3>

              <h3>
                700$
                <span>/{t('kishi')}</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>{t('tur ichiga oladi')}:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  {t('besh kunlik sayohat mehmonxona')}
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  {t('aviabilet')}
                </li>
                <li>
                  <span>
                    <FaHotel />
                  </span>{" "}
                  {t('eng yaxshi manzillar')}
                </li>
              </ul>
            </div>
            <button>
              <a href="#concat">{t('joy band qilish')}</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="Main-img/europe2.jpg"  loading="lazy" alt="Description" />
          <div className="text-swp">
            <div className="oel">
              <h3>
                {t('istanbul')} <br />
                <span>
                  {" "}
                  <FaUsers /> {t('buyurtmalar')}: 300
                </span>
              </h3>

              <h3>
                700$
                <span>/{t('kishi')}</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>{t('tur ichiga oladi')}:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  {t('besh kunlik sayohat mehmonxona')}
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  {t('aviabilet')}
                </li>
                <li>
                  <span>
                    <FaHotel />
                  </span>{" "}
                  {t('eng yaxshi manzillar')}
                </li>
              </ul>
            </div>
            <button>
              <a href="#concat">{t('joy band qilish')}</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="Main-img/offers-01.jpg"  loading="lazy" alt="Description" />
          <div className="text-swp">
            <div className="oel">
              <h3>
                {t('dubai')} <br />
                <span>
                  {" "}
                  <FaUsers /> {t('buyurtmalar')}: 300
                </span>
              </h3>

              <h3>
                700$
                <span>/{t('kishi')}</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>{t('tur ichiga oladi')}:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  {t('besh kunlik sayohat mehmonxona')}
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  {t('aviabilet')}
                </li>
                <li>
                  <span>
                    <FaHotel />
                  </span>{" "}
                  {t('eng yaxshi manzillar')}
                </li>
              </ul>
            </div>
            <button>
              <a href="#concat">{t('joy band qilish')}</a>
            </button>
          </div>
        </SwiperSlide>

        
      </Swiper>

      <div className="swipernav">
        <div className="prevarrow">
          <GoArrowLeft />
        </div>
        <div className="nextarrow">
          <GoArrowRight />
        </div>
      </div>

  
    </>
  );
}
