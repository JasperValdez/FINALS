import React from 'react';
import './App.css';
import Nav from './components/Nav';
import CustomSlider from './components/CustomSlider';
import FeatureProducts from './components/FeatureProducts';
import Info from './components/Info';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import Description from './components/Description';

function App() {
  return (
    <main>
      {/* Navigation Bar */}
      <Nav />

      {/* Image Slider */}
      <CustomSlider />

      <Description />

      {/* Feature Products Section */}
      <div className="py-10 text-center">
        <FeatureProducts />
      </div>

      <Info />

      <ContactSection/>
      <Footer/>
    </main>
  );
}

export default App;
