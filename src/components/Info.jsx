import React, { useState, useEffect } from 'react';
import Armed from '../assets/Armed.png';
import Beretta from '../assets/Beretta.webp';
import Gencija from '../assets/gencija.webp';
import Hipoint from '../assets/HiPoint.webp';
import Kimber from '../assets/Kimber.png';
import Norinco from '../assets/Norinco.png';
import Remington from '../assets/Remington.webp';
import Taurus from '../assets/Taurus.png';

const Info = () => {
    const firstSet = [
        { name: 'Beretta', src: Beretta },
        { name: 'Taurus', src: Taurus },
        { name: 'Remington', src: Remington },
        { name: 'Hi-Point', src: Hipoint }
    ];

    const secondSet = [
        { name: 'Gencija', src: Gencija },
        { name: 'Armed Shotgun', src: Armed },
        { name: 'Kimber', src: Kimber },
        { name: 'Norinco', src: Norinco }
    ];

    const slideSpeed = 1500; // Adjust slide speed as needed
    const brands = [...firstSet, ...secondSet];
    const brandsPerSlide = 4; // Set 4 brands per slide
    const totalSlides = Math.ceil(brands.length / brandsPerSlide);

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Loop through the slides
        }, 5000); // Adjust interval as needed for display time per slide

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <>
            {/* All-in-One Benefits Section */}
            <div className="py-10 px-4 max-w-5xl mx-auto rounded-lg shadow-md mt-16" style={{ backgroundColor: '#e0e0e0' }}>
                <h1 className="text-3xl font-bold text-center mb-8">What will All-in-One Mean to You?</h1>
                <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
                    {[{ heading: 'LESS HASSLE', text: 'Discover a streamlined shopping experience designed to make browsing, purchasing, and service requests easy and efficient.' },
                    { heading: 'MORE POWER', text: 'Access an impressive selection of firearms and accessories that deliver on both performance and reliability.' },
                    { heading: 'BETTER SUPPORT', text: 'Count on expert advice and after-sales assistance that keep you informed and prepared.' }].map(({ heading, text }, idx) => (
                        <div className="text-center w-1/3" key={idx}>
                            <h2 className="text-lg font-bold text-red-500 mb-3">{heading}</h2>
                            <p className="text-base leading-relaxed font-bold">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="bg-neutral-900 text-white py-8 px-6 max-w-2xl mx-auto mt-16 rounded-md shadow-md">
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                    We keep you informed with two <br /> key updates:
                </h1>
                <p className="text-sm mb-4 leading-5">
                    <strong>Guns & Gear Highlights</strong> — A monthly public update featuring new arrivals, product highlights, and in-store events.
                    <br />
                    <strong>Exclusive Arsenal Insider</strong> — A weekly, member-only update with details on special sales, training workshops, and private events at the shop.
                </p>
                <div className="flex items-center border rounded-md overflow-hidden mt-4 bg-white">
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full px-3 py-2 text-sm text-black focus:outline-none"
                    />
                    <button className="bg-red-700 px-3 py-2 text-white font-medium hover:bg-black transition duration-300 text-xs">
                        Sign up
                    </button>
                </div>
            </div>

            {/* Brands Section */}
            <div className="text-center mt-8">
                <h1 className="font-bold text-lg">Brands</h1>
                <p className="font-light">VIEW MORE BRANDS</p>
            </div>

            {/* Automatic Brand Image Slider */}
            <div className="relative w-full flex justify-center mt-8">
                <div className="w-full max-w-lg overflow-hidden">
                    <div
                        className="flex space-x-6 transition-transform ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`, // Slide by 100% per slide
                            transitionDuration: `${slideSpeed}ms`,
                        }}
                    >
                        {/* Render 4 brands per slide */}
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div className="flex" key={slideIndex}>
                                {brands.slice(slideIndex * brandsPerSlide, (slideIndex + 1) * brandsPerSlide).map((brand, index) => (
                                    <div className="brand-container flex-shrink-0 p-2" key={index}>
                                        <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
                                            <img src={brand.src} alt={brand.name} className="max-w-full max-h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
