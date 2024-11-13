import React, { useState, useEffect } from 'react';
import Slideeee1 from '../assets/Slideeee1.png';
import Slideeee2 from '../assets/Slideeee2.png';
import Slideeee3 from '../assets/Slideeee3.png';
import Slideeee4 from '../assets/Slideeee4.png';
import Slideeee5 from '../assets/Slideeee5.png';
import Slideeee6 from '../assets/Slideeee6.png';
import Slideeee7 from '../assets/Slideeee7.png';

const CustomSlider = () => {
  const images = [Slideeee1, Slideeee2, Slideeee3, Slideeee4, Slideeee5, Slideeee6, Slideeee7];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-screen object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
