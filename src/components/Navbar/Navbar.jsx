import React, { useState } from 'react';
import './Navbar.scss';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { HiOutlineX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next'; // useTranslation hook'ini import qilish

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation(); // useTranslation hook'ini chaqirish

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      // window.location.reload(); 
    });
  };
  
  

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="/Navbar/zamon.logo.svg"  loading="lazy" alt="Description" />
        </div>

        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li ><a href="#">{t('Bosh sahifa')}</a></li>
          <li><a href="#about">{t('Biz haqimizda')}</a></li>
          <li><a href="#tours">{t('Turlar')}</a></li>
          <li><a href="#concat">{t('Kontaktlar')}</a></li>
        </ul>

        <div className="nav-concat">
          <div className="nav-languech">
            <div className="translate" onClick={() => changeLanguage('uz')}>Uz</div>
            <div className="translate" onClick={() => changeLanguage('en')}>En</div>
            <div className="translate" onClick={() => changeLanguage('ru')}>Ru</div>
          </div>

          <div className="icons">
            <div className="icon">
              <FaTelegram onClick={() => handleRedirect("https://t.me/zamonbiznestour")} />
            </div>
            <div className="icon" onClick={() => handleRedirect("https://www.instagram.com/zamontour/#")}>
              <FaInstagram />
            </div>

            <div className="bars" onClick={() => setOpen(!open)}>
              {open ? <HiOutlineX /> : <HiBars3BottomLeft />}
            </div>
          </div>
        </div>
      </div>

      <div className={open ? 'Open activ' : 'Open'}>
        <ul>
        <li onClick={() => setOpen(false)}><a href="#">{t('Bosh sahifa')}</a></li>
          <li onClick={() => setOpen(false)}><a href="#about">{t('Biz haqimizda')}</a></li>
          <li onClick={() => setOpen(false)}><a href="#tours">{t('Turlar')}</a></li>
          <li onClick={() => setOpen(false)}><a href="#concat">{t('Kontaktlar')}</a></li>
        </ul>
        <div className="nav-languech">
          <div className="translate" onClick={() => changeLanguage('uz')}>Uz</div>
          <div className="translate" onClick={() => changeLanguage('en')}>En</div>
          <div className="translate" onClick={() => changeLanguage('ru')}>Ru</div>
        </div>
        <div className="icons">
          <div className="icon" onClick={() => handleRedirect("https://t.me/zamonbiznestour")}>
            <FaTelegram />
          </div>
          <div className="icon" onClick={() => handleRedirect("https://www.instagram.com/zamontour/#")}>
            <FaInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
