import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaUsers } from "react-icons/fa";
import "./MainSwiper.scss";
import { MdDiscount } from "react-icons/md";
import { Navigation, Pagination } from 'swiper/modules';
import { TbClockHour3Filled } from "react-icons/tb";
import { GoCheck } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          307: {
            slidesPerView: 1, // Mobil uchun 1 ta slayd
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // Kichik ekranlar uchun 2 ta slayd
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Katta ekranlar uchun 3 ta slayd
            spaceBetween: 30,
          },
        }}
        navigation={{
          prevEl: ".prevarrow",
          nextEl: ".nextarrow"
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="Swiper-end"
      >
        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/china.jpg" alt="" />
          <div className="text">
             <h3>
               {t("Hindiston")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/europe.jpeg" alt="" />
          <div className="text">
             <h3>
               {t("Yaponiya")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/hongkong.jpg" alt="" />
          <div className="text">
             <h3>
               {t("Saudiya Arabistoni")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/india.jpg" alt="" />
          <div className="text">
             <h3>
               {t("Omon")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/japan.jpg" alt="" />
          <div className="text">
             <h3>
               {t("Xitoy")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/oman.jpg" alt="" />
          <div className="text">
             <h3>
               {t("Xong Kong")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_chiled'>
          <img src="Main-swiper/saudi.jpg" alt="" />
          <div className="text">
             <h3>
               {t("Yevropa (Shengen)")}
               <span><FaUsers /> {t("300 buyurtmalar")}</span>
             </h3>
             <ul>
              <p>{t("Bizning xizmatlar o‘z ichiga oladi:")}</p>
              <li><span><MdDiscount /></span> {t("Eng arzon narxlar")}</li>
              <li><TbClockHour3Filled /> {t("Tezkor ishlash vaqti")}</li>
              <li><GoCheck /> {t("Ishonchli yordam")}</li>
             </ul>
             <button><a href="#concat">{t("Joy band qilish")}</a></button>
          </div>
        </SwiperSlide>

        <div className="btn-end">
          <button className="prevarrow"><GoArrowLeft /></button>
          <button className="nextarrow"><GoArrowRight /></button>
        </div>
      </Swiper>
    </>
  );
}
