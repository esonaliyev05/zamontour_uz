import React, { useState } from 'react';
import './toll.scss';
import { TbBorderCorners } from "react-icons/tb";

const Toll = () => {
    const [activeIndex, setActiveIndex] = useState(0);  // Dastlab 1-chi div faol bo'lsin

    const imageData = [
      {
        icon: <TbBorderCorners/>,
        title: 'Dubai',
        population: 'Population: 2M',
        imageUrl: 'HeaderImg/Dubay.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Antaliya',
        population: '1M',
        imageUrl: 'HeaderImg/photo_2023-05-06_02-50-37.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Saudiya-arab',
        population: '3M',
        imageUrl: 'HeaderImg/photo_2025-02-21_16-27-50.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Turkey',
        population: '500K',
        imageUrl: 'Main-swiper/photo_2024-11-19_13-05-30.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'India',
        population: '500K',
        imageUrl: 'Main-swiper/photo_2025-02-20_22-05-27.jpg'
      }
    ];
  
    const handleImageClick = (index) => {
      setActiveIndex(index); // Faollashtirish uchun index o'zgartiriladi
    };
  
    return (
      <div className="image-gallery">
        {imageData.map((item, index) => (
          <div
            key={index}
            className={`image-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={item.imageUrl} alt={item.title} className="image" />
            <div className="image-info">
                <div className="icon">{item.icon}</div>
                <h3 className={`image-title ${activeIndex === index ? 'show' : 'hide'}`}>{item.title}</h3><br />
                <p className={`image-population ${activeIndex === index ? 'show' : 'hide'}`}>{`Population: ${item.population}`}</p>
            </div>
          </div>
        ))}
      </div>
    )
};

export default Toll;
