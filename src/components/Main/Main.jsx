import React from "react";
import "./Main.scss";
import Swiper from "../MainSwiper/Swiper";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="main-swiper">
          <div className="text">
            <h1>Eng yaxshi haftalik takliflarimiz</h1>

            <p>
              Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik
              takliflarni kashf eting. O'zingizni sarguzashtlar dunyosida his
              qiling.
            </p>
          </div>
          <Swiper />
        </div>
      </div>
    </main>
  );
};

export default Main;
