import React, { useState } from 'react';
import './Navbar.scss';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="/Navbar/zamon.logo.svg" alt="Logo" />
        </div>

        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li><a href="/">Bosh sahifa</a></li>
          <li><a href="#about">Biz haqimizda</a></li>
          <li><a href="#tours">Turlar</a></li>
          <li><a href="#concat">Kontaktlar</a></li>
        </ul>

        <div className="nav-concat">
          <div className="nav-languech">
            <div className="translate">Uz</div>
            <div className="translate">En</div>
            <div className="translate">Ru</div>
          </div>

          <div className="icons">
            <div className="icon">
              <FaTelegram  onClick={ () => handleRedirect("https://zamontour.uz/")}/>
            </div>
            <div className="icon">
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
          <li><a href="#">Bosh sahifa</a></li>
          <li><a href="#">Biz haqimizda</a></li>
          <li><a href="#">Turlar</a></li>
          <li><a href="#">Kontaktlar</a></li>
        </ul>
        <div className="nav-languech">
            <div className="translate">Uz</div>
            <div className="translate">En</div>
            <div className="translate">Ru</div>
          </div>
          <div className="icons">
            <div className="icon">
              <FaTelegram />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>

            {/* <div className="bars" onClick={() => setOpen(!open)}>
              {open ? <HiOutlineX /> : <HiBars3BottomLeft />}
            </div> */}
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
