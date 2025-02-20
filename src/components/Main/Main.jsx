import React, { useState } from "react";
import "./Main.scss";
import Swiper from "../MainSwiper/Swiper";
import MainSwiper from "../MainSwiperend/MainSwiper";
import { FaUser } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Toll from "../tools/concattol/toll";

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Faol elementni boshqarish uchun holat
  const { t } = useTranslation();
  
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Agar shu divni bosilsa, uni qaytarish
  };
  return (
    <main>
      <div className="container" id="about">
        <div className="main-swiper" >
          <div className="text">
            <h1>{t("Eng Yaxshi Haftalik Takliflarimiz")}</h1>

            <p>
             {t("Har Bir Shaharda Faqat Siz Uchin Tuzilgan Haftalik Takliflarni Kashf Etish")}
            </p>
          </div>
          <Swiper />
        </div>
        <div className="main-swiper-end" >
          <div className="text">
            <h1>{t("Viza olishga yordam beramiz")}</h1>
            <p>
             {t("Biz sizga oson, tez fursatda va albatta ishonchli viza olishga yordam beramiz.")}
            </p>
          </div>
          <MainSwiper />
        </div>

       <div className="main-parent-explore" id="tours">
  <div className="Explore">
    <div className="text">
      <h1>{t('Chiptalarni biz bilan arzon va oson toping')}</h1>
      <p>{t('Har bir shaharda eng yaxshi temir yo‘l va aviachipta biletlarini biz bilan toping')}</p>
    </div>

    <div className="explore-box">
      <img src="Main-img/photo_2025-02-20_22-12-36.jpg" alt="masseg" />

      <div className="text">
        <div className="top">
          <h2>
            {t('Temir Yo‘l Biletleri Biz Bilan')}
            <span>{t('Butun dunyo bo\'ylab')}</span>
          </h2>

          <button><a href="#concat">{t('Ko\'proq bilish')}</a></button>
        </div>
        <p>
          {t('Temir yo\'l orqali biz bilan sarguzashtlarni kashf eting!')}
          {t('Baland tog\'larni, betakror tabiat manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog\'laning.')}
        </p>
      </div>
    </div>

    <div className="explore-box">
      <img src="Main-img/photo_2025-02-20_22-13-18.jpg" alt="masseg" />

      <div className="text">
        <div className="top">
          <h2>
            {t('Aviabiletlar Biz Bilan Arzon')}
            <span>{t('Jahon bo‘ylab Manzillar')}</span>
          </h2>

          <button><a href="#concat">{t('Ko\'proq bilish')}</a></button>
        </div>
        <p>
          {t('Eng arzon, qulay, xavfsiz aviabiletlar biz bilan! Bizga bog\'laning, biz sizga eng maqbul bo\'ladigan aviabilerni topib beramiz')}
        </p>
      </div>
    </div>
  </div>

  <div className="Countries">
    <div className="text-top">
      <h1>{t('Shaharlardan biriga hoziroq tashrif buyuring')}</h1>
      <p>{t('Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz uchun. O\'zingiz uchun yangi dunyosni oching va misli ko\'rilmagan sarguzashtlar ega bo\'ling.')}</p>
    </div>

    <div className="countres-box">
      <img src="Main-swiper/photo_2025-02-20_22-28-50.jpg" alt="" />
      <div className="text">
        <div className="top">
          <h2>
            {t('Dubai')}
            <span>{t('Birlashgan Arab Amirliklari')}</span>
          </h2>

          <button><a href="#concat">{t('Ko\'proq bilish...')}</a></button>
        </div>

        <p>
          {t('Dubay - Birlashgan Arab Amirliklaridagi shahar va amirlik, hashamatli xaridlar, ultramodern arxitektura va jonli tungi hayot sahnasi bilan mashhur. Balandligi 830 m bo\'lgan Burj Xalifa minorasi osmono\'par binolar bilan to\'ldirilgan osmon chizig\'ida hukmronlik qiladi. Uning etagida musiqaga xoreografiya qilingan samolyotlar va chiroqlar bilan jihozlangan Dubay favvorasi joylashgan. Sun\'iy orollarda Atlantis, Palm, suv va dengiz hayvonlari bog\'lari joylashgan kurort joylashgan.')}
        </p>

        <div className="icons">
          <p><span><FaUser /></span> 8.66 Mil People</p>
          <p><span><FaGlobe /></span> 41.290 km2</p>
          <p><span><TiHome /></span> $1.100.200</p>
        </div>

        <a href="">{t('Yo\'nalish kerakmi?')} <span>→</span> </a>
      </div>
    </div>

    <div className="countres-box">
      <img src="HeaderImg/photo_2023-05-06_02-50-37.jpg" alt="" />
      <div className="text">
        <div className="top">
          <h2>
            {t('Antalya')}
            <span>{t('Antalya')}</span>
          </h2>

          <button><a href="#concat">{t('Ko\'proq bilish...')}</a></button>
        </div>

        <p>
          {t('Antaliya Turkiyaning eng tez rivojlanayotgan shahri bo\'lib, butun dunyodan kelgan sayyohlar uning ajoyib plyajlari va an\'anaviy turk madaniyatining ajoyib aralashmasini kashf qilmoqdalar. Bolalarga Aqua Land (suvli slaydni yaxshi ko\'radiganlar orzusi) va Dolphin Land (delfinlar, dengiz sherlari va oq kitlarning uyi) o\'rin olgan Beach Park yoqadi. Eski shahar markazini o\'rganing va Hadrian darvozasini ko\'ring.')}
        </p>

        <div className="icons">
          <p><span><FaUser /></span> 8.66 Mil People</p>
          <p><span><FaGlobe /></span> 41.290 km2</p>
          <p><span><TiHome /></span> $1.100.200</p>
        </div>

        <a href="">{t('Yo\'nalish kerakmi?')} <span>→</span> </a>
      </div>
    </div>

    <div className="countres-box">
      <img src="Explore-main/istanbul3.jpg" alt="" />
      <div className="text">
        <div className="top">
          <h2>
            {t('Sharm El-Sheikh')}
            <span>{t('Misr')}</span>
          </h2>

          <button><a href="#concat">{t('Ko\'proq bilish...')}</a></button>
        </div>

        <p>
          {t('Sharm El Sheikh - Sinay yarim orolidagi sayyohlik markazi bo\'lib, unda dunyodagi eng yaxshi sho\'ng\'in joylari mavjud. Sharm shahrini butunlay boshqa darajaga olib chiqqan Ras Muhammad milliy bog\'ining suv osti mo\'\'jizalari. Shaharda Qizil dengiz tubidagi parallel dengiz hayotini kashf qilish uchun dunyoning turli burchaklaridan ilg\'or va rekreatsion g\'avvoslarni jalb qiladigan sho\'ng\'in va kema halokat joylari mavjud.')}
        </p>

        <div className="icons">
          <p><span><FaUser /></span> 8.66 Mil People</p>
          <p><span><FaGlobe /></span> 41.290 km2</p>
          <p><span><TiHome /></span> $1.100.200</p>
        </div>

        <a href="">{t('Yo\'nalish kerakmi?')} <span>→</span> </a>
      </div>
    </div>

    <div className="countres-box">
      <img src="HeaderImg/Turkey (2).jpg" alt="" />
      <div className="text">
        <div className="top">
          <h2>
            {t('Istanbul')}
            <span>{t('Turkey')}</span>
          </h2>

          <button><a href="#concat">{t('Ko\'proq bilish...')}</a></button>
        </div>

        <p>
          {t('Istanbul Turkiyaning eng gavjum shahri va uning madaniy, iqtisodiy va tarixiy markazidir. U Turkiyaning shimoli-g\'arbiy qismida joylashgan bo\'lib, Marmara va Qora dengizni bog\'laydigan Bosfor bo\'g\'ozi orqali Yevropa va Osiyo tomoniga bo\'linadi. Bu ikki qit\'ada joylashgan dunyodagi yagona shahar.')}
        </p>

        <div className="icons">
          <p><span><FaUser /></span> 8.66 Mil People</p>
          <p><span><FaGlobe /></span> 41.290 km2</p>
          <p><span><TiHome /></span> $1.100.200</p>
        </div>

        <a href="">{t('Yo\'nalish kerakmi?')} <span>→</span> </a>
      </div>
    </div>
  </div>
</div>


      </div>
      <Toll/>
    </main>
  );
};

export default Main;
