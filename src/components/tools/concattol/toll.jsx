import React, { useState } from 'react';
import './toll.scss';
import { TbBorderCorners } from "react-icons/tb";

const Toll = () => {
    const [activeIndex, setActiveIndex] = useState(0);  // Dastlab 1-chi div faol bo'lsin

    const imageData = [
      {
        icon: <TbBorderCorners/>,
        title: 'Nanjing',
        population: '2M',
        imageUrl: 'Toll/antalya.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Zhangjiajie',
        population: '1M',
        imageUrl: 'Toll/best-05.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Hangzhou',
        population: '3M',
        imageUrl: 'Toll/dubai.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Bamboo Forest',
        population: '500K',
        imageUrl: 'Toll/istanbul.jpg'
      },
      {
        icon: <TbBorderCorners/>,
        title: 'Bamboo Forest',
        population: '500K',
        imageUrl: 'Toll/sharm.jpg'
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
                <h3 className={`image-title ${activeIndex === index ? 'show' : 'hide'}`}>{item.title}</h3>
                <p className={`image-population ${activeIndex === index ? 'show' : 'hide'}`}>{`Population: ${item.population}`}</p>
            </div>
          </div>
        ))}
      </div>
    )
};

export default Toll;
