import React, { useState } from "react";

const Header = ({ onSearch, cartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4">
      <div
        className="text-xl font-bold pl-4 cursor-pointer"
        onClick={handleGoHome}
      >
        ETERATION
      </div>
      <div className="flex flex-grow justify-center">
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
        <span className="text-gray-300 px-4">Başar Ballıöz</span>
        <div className="bg-green-500 text-white rounded-md px-3 py-1">
          {totalCartAmount.toFixed(2)}$
        </div>
      </div>
    </header>
  );
};

export default Header;
