import React from 'react';
import './App.css';
import Nav from './components/Nav';
import CustomSlider from './components/CustomSlider';
import FeatureProducts from './components/FeatureProducts';
import ratings from './assets/ratings.png';
import speak from './assets/speak.png';
import hand from './assets/hand.png';  

function App() {
  return (
    <main>
      {/* Navigation Bar */}
      <Nav />

      {/* Image Slider */}
      <CustomSlider />

      {/* Promotional Section */}
      <div className="bg-neutral-900 text-white flex justify-center items-center p-4">
        <h1 className="text-2xl px-10">
          Equip yourself with the best – precision, power, and reliability are just a click away.
        </h1>
        <button className="bg-red-500 text-2xl p-2 ml-4 hover:bg-red-700">
          Shop now
        </button>
      </div>

      {/* Main Heading Section */}
      <h1 className="text-3xl font-bold px-10 text-center py-10 leading-relaxed">
        Equip yourself and grow your confidence with top-quality firearms.
      </h1>

      {/* Features Section */}
      <div className="flex justify-center items-center space-x-16 py-10">
        {[
          { img: ratings, title: 'Ratings & Reviews' },
          { img: speak, title: 'Sales and Marketing' },
          { img: hand, title: 'Customer Experience' }
        ].map(({ img, title }, idx) => (
          <div className="text-center" key={idx}>
            <img src={img} alt={title} className="h-20 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
          </div>
        ))}
      </div>

      {/* Lock & Loaded Section */}
      <div className="bg-neutral-900 text-white py-16 flex flex-col items-center mt-16">
        <div className="max-w-3xl text-center">
          <h1 className="text-6xl font-serif font-bold mb-8">Lock & Loaded</h1>
          <div className="text-xl leading-relaxed tracking-wide">
            <p className="mb-6">
              Welcome to Lock & Loaded, your trusted source for top-quality firearms, ammo, and accessories.
              Whether you're a seasoned shooter or a first-time buyer, we offer expert advice, a wide selection
              of handguns, rifles, and shotguns, and a commitment to safety and service. Our knowledgeable staff is
              here to help you find the perfect firearm and ensure you’re ready for anything.
            </p>
            <p className="font-semibold text-lg">Lock & Loaded — Ready, Aim, Fire.</p>
          </div>
        </div>
      </div>

      {/* Feature Products Section */}
      <div className="py-10 text-center">
        <FeatureProducts />
      </div>

      {/* All-in-One Benefits Section */}
      <div className="py-10 px-4 max-w-5xl mx-auto rounded-lg shadow-md mt-16" style={{ backgroundColor: '#e0e0e0' }}>
        <h1 className="text-3xl font-bold text-center mb-8">What will All-in-One Mean to You?</h1>
        <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
          {[
            { heading: 'LESS HASSLE', text: 'Discover a streamlined shopping experience designed to make browsing, purchasing, and service requests easy and efficient.' },
            { heading: 'MORE POWER', text: 'Access an impressive selection of firearms and accessories that deliver on both performance and reliability.' },
            { heading: 'BETTER SUPPORT', text: 'Count on expert advice and after-sales assistance that keep you informed and prepared.' }
          ].map(({ heading, text }, idx) => (
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
    </main>
  );
}

export default App;
