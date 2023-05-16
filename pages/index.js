"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ReactPaginate from "react-paginate";
import Header from "../components/Header";
import config from "../config/config";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // BRAND FILTER STATE
  const [selectedBrand, setSelectedBrand] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.apiURL}`);

      const filtered = response.data.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedBrand === "" || product.brand === selectedBrand)
      );
      setFilteredProducts(filtered);
      setTotalPages(Math.ceil(filtered.length / perPage));
    } catch (error) {
      console.log(error);
    }
  };

  const loadCartItemsFromStorage = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  };

  const saveCartItemsToStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      saveCartItemsToStorage(updatedItems);
      return updatedItems;
    });
  };

  useEffect(() => {
    fetchData();
    loadCartItemsFromStorage();
  }, [currentPage, searchTerm, selectedBrand]);

  const offset = currentPage * perPage;
  const currentProducts = filteredProducts.slice(offset, offset + perPage);

  return (
    <>
      <Header onSearch={handleSearch} cartItems={cartItems} />

      <ProductList
        products={currentProducts}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
      />

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </>
  );
};

export default Home;
