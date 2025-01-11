import React, { useState } from "react";
import "./Concat.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarker } from "react-icons/fa";

const Concat = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    guests: '',
    date: '',
    destination: '',
    visa: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async () => {
    const message = `
      Ismingiz: ${formData.name}
      Telefon: ${formData.number}
      Necha kishisiz: ${formData.guests}
      Uchish sanasi: ${formData.date}
      Manzil: ${formData.destination}
      Visa turi: ${formData.visa}
    `;

    const botToken = '7819510076:AAE32MgphCBBzO9aSU5XDJzCNKusb0vd_1w'; // Telegram bot tokeningizni shu yerga joylashtiring
    const chatId = '6992354984'; // Telegram chat IDingizni shu yerga joylashtiring

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    try {
      await fetch(url);
      alert('Xabar yuborildi!');
      setFormData({ // Formani tozalash
        name: '',
        number: '',
        guests: '',
        date: '',
        destination: '',
        visa: ''
      });
    } catch (error) {
      alert('Xabar yuborishda xatolik yuz berdi.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToTelegram();
  };
  return (
    <div className="Concat" id="concat">
      <div className="concat-main">
        <div className="concat-text">
          <p>O'zingiz yoqtirganingizni tanlang</p>
          <hr />
          <h1>O'z joyingizni band qiling</h1>

          <button>Ko'proq bilish...</button>
        </div>

        <div className="concat-box">
          <div className="box">
            <div className="icon">
              <FaPhoneAlt />
            </div>

            <h3>Telefon raqam</h3>
            <p>+998 99 299 99 96</p>
          </div>
          <div className="box">
            <div className="icon">
              <MdEmail />
            </div>

            <h3>Bizga email orqali bog'laning</h3>
            <p>zamonbiznestour@mail.ru</p>
          </div>
          <div className="box">
            <div className="icon">
              <FaMapMarker />
            </div>

            <h3>Ofisimizga tashrif buyuring</h3>
            <p>15/25, Chilanzar - 9, Tashkent city</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
            allowfullscreen=""
            className="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form-container">
      <h4>
        O'z <em>joyingizni</em> band <em>qiling</em>
      </h4>

      <form onSubmit={handleSubmit} className="form-parent">
        <div className="form">
          <label htmlFor="name">Ismingiz</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ex. John Smithee"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form">
          <label htmlFor="number">Telefon raqamingiz</label>
          <input
            id="number"
            type="text"
            name="number"
            placeholder="+998 99 999 99 99"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form">
          <label htmlFor="chooseGuests">Necha kishisiz</label>
          <select
            id="chooseGuests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </div>

        <div className="form">
          <label htmlFor="nameData">Uchish sanasi</label>
          <input
            id="nameData"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form">
          <label htmlFor="chooseCategory">Manzilingizni tanlang</label>
          <select
            id="chooseCategory"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="Antalya">Antalya</option>
            <option value="Istanbul">Istanbul</option>
            <option value="Dubai">Dubai</option>
            <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
            <option value="Kuala Lumpur">Kuala Lumpur</option>
            <option value="Kanada">Kanada</option>
            <option value="England">Angliya</option>
            <option value="USA">AQSh</option>
          </select>
        </div>

        <div className="form">
          <label htmlFor="visa">Visa turini tanlang</label>
          <select
            name="visa"
            id="visa"
            value={formData.visa}
            onChange={handleChange}
          >
            <option value="Europe">Europe</option>
            <option value="England">England</option>
            <option value="Japan">Japan</option>
            <option value="Oman">Oman</option>
            <option value="USA">USA</option>
            <option value="Saudiya Arabistoni">Saudi Arabia</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="HongKong">Hong Kong</option>
          </select>
        </div>

        <div className="form-btn">
          <button type="submit">Band qilish</button>
        </div>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Concat;
