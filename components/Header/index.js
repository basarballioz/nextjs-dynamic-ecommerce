import React, { useState } from "react";

const Header = ({ onSearch, cartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const totalCartAmount = cartItems?.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={handleGoHome}
        >
          ETERATION
        </div>
        <div className="hidden md:flex md:flex-grow md:justify-center">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center space-x-2 bg-white rounded">
              <input
                type="text"
                className="bg-white text-gray-800 py-1 px-4 rounded"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
        <div className="flex items-center space-x-2">
          <span className="hidden md:block text-gray-300">Başar Ballıöz</span>
          <div className="bg-green-500 text-white rounded-md px-3 py-1">
            {totalCartAmount.toFixed(2)}$
          </div>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-200 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center space-x-2 bg-white rounded">
              <input
                type="text"
                className="bg-white text-gray-800 py-1 px-4 rounded"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
