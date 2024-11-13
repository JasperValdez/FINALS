import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png'; // Adjust the path as needed
import searchIcon from '../assets/search.png'; // Adjust the path as needed
import cart from '../assets/cart.png'; // Adjust the path as needed
import account from '../assets/person.png'; // Adjust the path as needed

function Nav() {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isCartOverlayOpen, setCartOverlayOpen] = useState(false); // State for the cart overlay
  const searchRef = useRef(null);

  const toggleSearchBar = () => {
    setSearchActive(!isSearchActive);
  };

  const closeSearchBar = () => {
    setSearchActive(false);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const toggleCartOverlay = () => {
    setCartOverlayOpen(!isCartOverlayOpen);
  };

  const handleLoginClick = () => {
    setCartOverlayOpen(false); // Close the cart overlay
    setLoginModalOpen(true); // Open the login modal
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearchBar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-neutral-900 text-white flex justify-evenly items-center p-6">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-28 w-22 ml-20" />

      {/* Navigation Links */}
      <nav className="flex space-x-10 text-xl">
        <a href="#Home" className="hover:text-yellow-500 hover:underline">
          Home
        </a>
        <a href="#About" className="hover:text-yellow-500 hover:underline">
          About
        </a>
        <a href="#Brands" className="hover:text-yellow-500 hover:underline">
          Brands
        </a>
        <a href="#Products" className="hover:text-yellow-500 hover:underline">
          Products
        </a>
        <a href="#Locations" className="hover:text-yellow-500 hover:underline">
          Locations
        </a>
        <a href="#Contacts" className="hover:text-yellow-500 hover:underline">
          Contact
        </a>
        <a href="#Gallery" className="hover:text-yellow-500 hover:underline">
          Gallery
        </a>
      </nav>

      {/* Icons and Search Bar */}
      <div className="flex items-center space-x-4 -ml-12"> {/* Adjusted margin to shift left */}
        {/* Search Icon or Sliding Search Bar */}
        <div
          ref={searchRef}
          className={`flex items-center space-x-2 transition-all duration-500 ease-in-out ${
            isSearchActive ? 'w-64 px-2 bg-gray-300' : 'w-10'
          } h-14`}
          style={{
            overflow: 'hidden', // Keep content within bounds
          }}
        >
          {!isSearchActive ? (
            <img
              src={searchIcon}
              alt="search"
              className="h-10 w-10 cursor-pointer"
              onClick={toggleSearchBar}
            />
          ) : (
            <>
              <input
                type="text"
                placeholder="Search Products"
                className="w-full bg-gray-300 outline-none text-black h-full"
              />
              <button onClick={closeSearchBar} className="text-black font-bold">
                FIND
              </button>
            </>
          )}
        </div>

        {/* Account and Cart Icons */}
        {!isSearchActive && (
          <>
            <img src={account} alt="account" className="h-10 w-10 cursor-pointer" onClick={toggleLoginModal} />
            <img src={cart} alt="cart" className="h-10 w-10 cursor-pointer" onClick={toggleCartOverlay} />
          </>
        )}
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-300 p-8 rounded-lg w-96 relative">
            {/* Close Button */}
            <button onClick={toggleLoginModal} className="absolute top-3 right-3 text-2xl font-bold text-black">
              ×
            </button>

            {/* Login Header */}
            <h1 className="text-3xl font-bold text-black text-center mb-6">Login</h1>

            {/* Login Form */}
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-black rounded-full text-black outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 border border-black rounded-full text-black outline-none"
              />
              <a href="#" className="text-orange-500 text-sm">Forgot your password?</a>
              <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 rounded-full w-full">
                Sign in
              </button>
              <a href="#" className="text-orange-500 text-sm text-center">Create account</a>
            </form>
          </div>
        </div>
      )}

{/* Cart Overlay */}
{isCartOverlayOpen && (
  <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
    <div className="bg-gray-200 w-96 h-full p-8 flex flex-col justify-start items-center text-center relative" style={{ paddingTop: '7rem' }}>
      {/* Close Button for Cart Overlay */}
      <button onClick={toggleCartOverlay} className="absolute top-4 right-4 text-3xl font-bold text-black">
        ×
      </button>

      {/* Cart Content */}
      <h2 className="text-2xl font-semibold text-black mb-4">Your cart is empty</h2>
      <p className="text-lg text-black mb-2">Have an account?</p>
      <button onClick={handleLoginClick} className="text-lg font-semibold text-black mb-2 underline">
        Log in
      </button>
      <p className="text-lg text-black">to check out faster.</p>
    </div>
  </div>
)}

    </div>
  );
}

export default Nav;
