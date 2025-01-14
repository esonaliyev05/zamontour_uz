import React from 'react';
import "./Footer.scss";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();
  
  return (
    <>
      <div className='footer'>
        <div className="container">
          <div className="text">
            <h1>
              {t('Sayohat qilishni xohlaysizmi?')}
              <span>{t('Unda biz bilan hoziroq bog`laning')}</span>
            </h1>
            <button ><a href="#concat">{t('Bog`lanish')}</a> </button>
          </div>
        </div>

        <div className="footer-end">
          <p>
            Copyright © 2024 <a href="#">Zamon Business Tour.</a> {t('Barcha huquqlar zaxirlangan')}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
