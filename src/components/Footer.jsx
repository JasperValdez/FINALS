import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaAmazon } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2d292a] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-left">
        
        {/* Get in Touch */}
        <div>
          <h3 className="font-bold mb-4">Get in Touch</h3>
          <p className="text-sm mb-4">
            Any questions? Let us know in store at Calderon Street, Palayan City or call us on (01) 234-5678
          </p>
          <div className="flex space-x-4">
            {/* Icons */}
            <FaFacebook className="w-5 h-5 cursor-pointer" />
            <FaInstagram className="w-5 h-5 cursor-pointer" />
            <FaTwitter className="w-5 h-5 cursor-pointer" />
            <FaYoutube className="w-5 h-5 cursor-pointer" />
            <FaAmazon className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="text-sm space-y-2">
            <li>Firearm</li>
            <li>Accessories</li>
            <li>Ammunition</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Location</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold mb-4">Help</h3>
          <ul className="text-sm space-y-2">
            <li>User Manual</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        Copyright © 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
