import React, { useState, useEffect } from 'react';
// import './Carousel.css'; // Make sure to have the corresponding CSS file
import banner1 from "../images/Banner_images/banner1.jpg"
import banner2 from "../images/Banner_images/banner2.jpg"
import banner3 from "../images/Banner_images/banner3.jpg"
import banner4 from "../images/Banner_images/banner4.jpg"
import banner5 from "../images/Banner_images/banner5.jpg"


const Slider = () => {
  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='slider'>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentImageIndex ? 'slide active' : 'slide'}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;

