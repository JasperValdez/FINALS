import React, { useState } from 'react';
import Glock from '../assets/Glock.png';
import Smith from '../assets/Smith.png';
import Desert from '../assets/Desert.png';
import Beretta from '../assets/Beretta.png';
import Winchester from '../assets/Winchester.png';
import Origin from '../assets/Origin.png';
import Spas from '../assets/Spas.png';
import Benelli from '../assets/Benelli.png';
import Aug from '../assets/Aug.png';
import Ak74 from '../assets/Ak74.png';
import Scar from '../assets/Scar.png';
import M4 from '../assets/M4.png';
import LeftArrow from '../assets/LeftArrow.png';
import RightArrow from '../assets/RightArrow.png';

const FeatureProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Pistol',
      products: [
        { image: Glock, name: 'Glock-17', price: 'PHP 30,240' },
        { image: Smith, name: 'Smith & Wesson', price: 'PHP 45,000' },
        { image: Desert, name: 'Desert Eagle', price: 'PHP 100,000' },
        { image: Beretta, name: 'Beretta', price: 'PHP 78,000' },
      ],
    },
    {
      title: 'Shotgun Rifle',
      products: [
        { image: Winchester, name: 'Winchester', price: 'PHP 50,000' },
        { image: Origin, name: 'Origin-12', price: 'PHP 180,000' },
        { image: Spas, name: 'Spas-12', price: 'PHP 170,000' },
        { image: Benelli, name: 'Benelli M4', price: 'PHP 135,000' },
      ],
    },
    {
      title: 'Assault Rifle',
      products: [
        { image: Aug, name: 'Aug-AR', price: 'PHP 113,000' },
        { image: Ak74, name: 'Ak-74', price: 'PHP 50,000' },
        { image: Scar, name: 'FN-Scar', price: 'PHP 180,000' },
        { image: M4, name: 'M-4', price: 'PHP 80,000' },
      ],
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-serif font-bold mb-6 tracking-wide">FEATURE PRODUCTS</h1>
      <div className="flex items-center mb-10">
        <button onClick={handlePrevSlide} className="mr-8">
          <img src={LeftArrow} alt="Left Arrow" className="w-12 h-12" />
        </button>
        <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
        <button onClick={handleNextSlide} className="ml-8">
          <img src={RightArrow} alt="Right Arrow" className="w-12 h-12" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-16 transition duration-300 ease-in-out transform">
        {slides[currentSlide].products.map((product, index) => (
          <div key={index} className="flex flex-col items-center animate-fade">
            <div className="bg-[#3c3c3c] w-96 h-80 p-8 rounded-lg flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-center mt-8">
              <h3 className="text-black font-bold text-3xl">{product.name}</h3>
              <p className="text-black text-2xl">{product.price}</p>
              <button className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg text-lg hover:bg-black">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
