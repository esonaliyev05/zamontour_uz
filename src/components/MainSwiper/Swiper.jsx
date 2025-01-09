import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaTaxi } from "react-icons/fa";
import "./Swiper.scss";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { FaUsers } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: false,
        }}
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
        loop={true}
        navigation={{
            prevEl: ".prevarrow",
            nextEl: ".nextarrow"
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="Main-Swiper"

      >
        <SwiperSlide className="chailid-swiper">
          <img src="/Main-img/cand.jpg" alt="" />
          <div className="text-swp">
            <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="/Main-img/deals-01.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>

          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="public/Main-img/deals-04.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="public/Main-img/eng.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="public/Main-img/europe2.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="public/Main-img/offers-01.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="public/Main-img/offers-02.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="chailid-swiper">
          <img src="public/Main-img/usa1.jpg" alt="" />
          <div className="text-swp">
          <div className="oel">
              <h3>
                Angliya <br />
                <span>
                  {" "}
                  <FaUsers /> 300 buyurtmalar
                </span>
              </h3>

              <h3>
                <span>/kishi</span>
              </h3>
            </div>

            <div className="end">
              <ul>
                <p>Tur o'z ichiga oladi:</p>
                <li>
                  <span>
                    <FaTaxi />
                  </span>{" "}
                  5 kunlik sayohat → Mehmonxona
                </li>
                <li>
                  <span>
                    <IoAirplane />
                  </span>{" "}
                  Aviabilet
                </li>
                <li>
                  {" "}
                  <span>
                    <FaHotel />
                  </span>{" "}
                  Eng yaxshi manzillar{" "}
                </li>
              </ul>
            </div>

            <button>Joy band qilish</button>
          </div>
        </SwiperSlide>

        <div className="btn">
            <button className="prevarrow"><GoArrowLeft/></button>
            <button className="nextarrow"> <GoArrowRight/></button>
          </div>

      </Swiper>

      
    </>
  );
}
