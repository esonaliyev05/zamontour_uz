import React, { useRef, useState } from 'react';
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

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          // Media qoidalari uchun breakpointlar
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
        modules={[Pagination , Navigation]}
        className="Swiper-end"
      >
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/china.jpg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/europe.jpeg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/hongkong.jpg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/india.jpg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/japan.jpg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/oman.jpg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_chiled'>
          <img src="public/Main-swiper/saudi.jpg" alt="" />
          <div className="text">
             
             <h3>
             Xong Kong
              <span>   <FaUsers /> 300 buyurtmalar</span>
             </h3>

             <ul>
              <p>Biznig xizmatlar o‘z ichiga oladi:</p>
              <li> <span><MdDiscount/></span>  Eng arzon narxlar</li>
              <li> <TbClockHour3Filled/> <span></span>  Tezkor ishlash vaqti</li>
              <li> <GoCheck/> <span></span> Ishonchli yordam</li>
             </ul>

             <button><a href="#">Joy band qilish</a></button>

          </div>
        </SwiperSlide>
       
        <div className="btn-end">
            <button className="prevarrow"><GoArrowLeft/></button>
            <button className="nextarrow"> <GoArrowRight/></button>
          </div>
      </Swiper>
    </>
  );
}
