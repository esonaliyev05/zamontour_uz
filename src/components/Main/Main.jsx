import React, { useState } from "react";
import "./Main.scss";
import Swiper from "../MainSwiper/Swiper";
import MainSwiper from "../MainSwiperend/MainSwiper";
import { FaUser } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Faol elementni boshqarish uchun holat

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Agar shu divni bosilsa, uni qaytarish
  };
  return (
    <main>
      <div className="container">
        <div className="main-swiper" id="tours">
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
        <div className="main-swiper-end" >
          <div className="text">
            <h1>Viza olishga yordam beramiz</h1>
            <p>
              Biz sizga oson, tez fursatda va albatta ishonchli viza olishga
              yordam beramiz.
            </p>
          </div>
          <MainSwiper />
        </div>

        <div className="main-parent-explore" id="about">
          <div className="Explore">
            <div className="text">
              <h1>Chiptalarni biz bilan arzon va oson toping</h1>
              <p>
                Har bir shaharda eng yaxshi temir yo‘l va aviachipta biletlarini
                biz bilan toping
              </p>
            </div>

            <div className="explore-box">
              <img src="public/Explore-main/afr.jpg" alt="masseg" />

              <div className="text">
                <div className="top">
                  <h2>
                    Temir Yo‘l Biletleri Biz Bilan
                    <span>Butun dunyo bo'ylab</span>
                  </h2>

                  <button>Ko'proq bilish</button>
                </div>
                <p>
                  Temir yo'l orqali biz bilan sarguzashtlarni kashf eting!
                  Baland tog'larni, betakror tabiat manzalarni, qadimiy va
                  navqiron shaharlarni, takrorlanmas landshaflarni biz bilan
                  birga toping. Qiziqarlimi? Biz bilan bog'laning.
                </p>
              </div>
            </div>
            <div className="explore-box">
              <img src="public/Explore-main/airplane.jpg" alt="masseg" />

              <div className="text">
                <div className="top">
                  <h2>
                    Aviabiletlar Biz Bilan Arzon
                    <span>Jahon bo‘ylab Manzillar</span>
                  </h2>

                  <button>Ko'proq bilish</button>
                </div>
                <p>
                  Eng arzon, qulay, xavfsiz aviabiletlar biz bilan! Bizga
                  bog'laning, biz sizga eng maqbul bo'ladigan aviabilerni topib
                  beramiz
                </p>
              </div>
            </div>
          </div>

            <div className="Countries">
                 
                 <div className="text-top">
                  <h1>Shaharlardan biriga hoziroq tashrif buyuring</h1>
                  <p>Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz uchun. O'zingiz uchun yangi dunyosni oching va misli ko'rilmagan sarguzashtlar ega bo'ling.</p>
                 </div>

                   
                   <div className="countres-box">
                    <img src="public/Explore-main/dubai2.jpg" alt="" />
                    <div className="text">

                           <div className="top">
                                    
                                    <h2>
                                    Dubai
                                      <span>Birlashgan Arab Amirliklari</span>
                                    </h2>

                                    <button>Ko'proq bilish...</button>

                           </div>

                           <p>Dubay - Birlashgan Arab Amirliklaridagi shahar va amirlik, hashamatli xaridlar, ultramodern arxitektura va jonli tungi hayot sahnasi bilan mashhur. Balandligi 830 m bo'lgan Burj Xalifa minorasi osmono'par binolar bilan to'ldirilgan osmon chizig'ida hukmronlik qiladi. Uning etagida musiqaga xoreografiya qilingan samolyotlar va chiroqlar bilan jihozlangan Dubay favvorasi joylashgan. Sun'iy orollarda Atlantis, Palm, suv va dengiz hayvonlari bog'lari joylashgan kurort joylashgan.</p>

                           <div className="icons">

                           <p><span><FaUser/></span> 8.66 Mil People</p>
                           <p><span><FaGlobe/></span>  41.290 km2</p>
                           <p><span><TiHome/></span> $1.100.200</p>

                           </div>

                           <a href=""> Need Directions ? <span>→</span> </a>

                    </div>
                   </div>
                      
                   <div className="countres-box">
                   <img src="public/Explore-main/country-02.jpg" alt="" />

                    <div className="text">

                           <div className="top">
                                    
                                    <h2>
                                    Antalya

                                      <span>Antalya</span>
                                    </h2>

                                    <button>Ko'proq bilish...</button>


                           </div>

                           <p>Antaliya Turkiyaning eng tez rivojlanayotgan shahri bo'lib, butun dunyodan kelgan sayyohlar uning ajoyib plyajlari va an'anaviy turk madaniyatining ajoyib aralashmasini kashf qilmoqdalar. Bolalarga Aqua Land (suvli slaydni yaxshi ko'radiganlar orzusi) va Dolphin Land (delfinlar, dengiz sherlari va oq kitlarning uyi) o'rin olgan Beach Park yoqadi. Eski shahar markazini o'rganing va Hadrian darvozasini ko'ring.</p>

                           <div className="icons">

                           <p><span><FaUser/></span> 8.66 Mil People</p>
                           <p><span><FaGlobe/></span>  41.290 km2</p>
                           <p><span><TiHome/></span> $1.100.200</p>

                           </div>

                           <a href=""> Need Directions ? <span>→</span> </a>

                    </div>
                   </div>
                      
                   <div className="countres-box">
                    <img src="public/Explore-main/istanbul3.jpg" alt="" />
                    <div className="text">

                           <div className="top">
                                    
                                    <h2>
                                    Sharm El-Sheikh

                                      <span>Misr</span>
                                    </h2>

                                    <button>Ko'proq bilish...</button>


                           </div>

                           <p>Sharm El Sheikh - Sinay yarim orolidagi sayyohlik markazi bo'lib, unda dunyodagi eng yaxshi sho'ng'in joylari mavjud. Sharm shahrini butunlay boshqa darajaga olib chiqqan Ras Muhammad milliy bog'ining suv osti mo''jizalari. Shaharda Qizil dengiz tubidagi parallel dengiz hayotini kashf qilish uchun dunyoning turli burchaklaridan ilg'or va rekreatsion g'avvoslarni jalb qiladigan sho'ng'in va kema halokat joylari mavjud.</p>

                           <div className="icons">
                           <p><span><FaUser/></span> 8.66 Mil People</p>
                           <p><span><FaGlobe/></span>  41.290 km2</p>
                           <p><span><TiHome/></span> $1.100.200</p>

                           </div>

                           <a href=""> Need Directions ? <span>→</span> </a>

                    </div>
                   </div>
                      
                   <div className="countres-box">
                    <img src="public/Explore-main/sharm2.jpg" alt="" />
                    <div className="text">

                           <div className="top">
                                    
                                    <h2>
                                    Istanbul

                                      <span>Turkey</span>
                                    </h2>

                                    <button>Ko'proq bilish...</button>


                           </div>

                           <p>Istanbul Turkiyaning eng gavjum shahri va uning madaniy, iqtisodiy va tarixiy markazidir. U Turkiyaning shimoli-g'arbiy qismida joylashgan bo'lib, Marmara va Qora dengizni bog'laydigan Bosfor bo'g'ozi orqali Yevropa va Osiyo tomoniga bo'linadi. Bu ikki qit'ada joylashgan dunyodagi yagona shahar.</p>

                           <div className="icons">
                           <p><span><FaUser/></span> 8.66 Mil People</p>
                           <p><span><FaGlobe/></span>  41.290 km2</p>
                           <p><span><TiHome/></span> $1.100.200</p>

                           </div>

                           <a href=""> Need Directions ? <span>→</span> </a>

                    </div>
                   </div>
             


            </div>

        </div>

        {/* <div className="option-prent">
        <div className="options">
      <div
        className={`option ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => handleClick(0)}
      >
        <div className="content">

             <img src="" alt="" />

               <div className="icon">

               </div>

        </div>
      </div>

      <div
        className={`option ${activeIndex === 1 ? 'active' : ''}`}
        onClick={() => handleClick(1)}
      >
        <div className="content">Option 2</div>
      </div>

      <div
        className={`option ${activeIndex === 2 ? 'active' : ''}`}
        onClick={() => handleClick(2)}
      >
        <div className="content">Option 3</div>
      </div>

      <div
        className={`option ${activeIndex === 3 ? 'active' : ''}`}
        onClick={() => handleClick(3)}
      >
        <div className="content">Option 4</div>
      </div>

      <div
        className={`option ${activeIndex === 4 ? 'active' : ''}`}
        onClick={() => handleClick(4)}
      >
        <div className="content">Option 5</div>
      </div>
    </div>
        </div> */}
      </div>
    </main>
  );
};

export default Main;
