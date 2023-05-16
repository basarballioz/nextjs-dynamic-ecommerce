"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import CartSummary from "../../components/CartSummary";

const ProductDetailPage = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!product) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [product, router]);

  const handleGoBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    // GET LOCAL STORAGE ITEMS
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // CREATE A NEW ARRAY WITH THE REST CART ITEMS AND THE NEW PRODUCT
    const newCartItems = [...storedCartItems, product];

    // UPDATE STATE
    setCartItems(newCartItems);

    // UPDATE LOCAL STORAGE
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  if (!product) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
        <div className="bg-white p-4 border border-gray-300 rounded">
          <p className="text-center">Product information is not loaded.</p>
          <p className="text-center">Redirecting to homepage in 3 seconds...</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cartItems);
  }, []);

  return (
    <>
      <div className="product-detail-container container mx-auto px-4 py-8 flex items-center justify-center h-screen">
        <div className="pdp-sub-container flex">
          <div className="pdp-main-container">
            <div className="product-container max-w-5xl mx-auto flex">
              <div className="product-image w-2/4">
                <img src={product.image} alt={product.name} className="mb-4" />
              </div>
              <div className="product-details ml-8 w-2/4">
                <h2 className="text-3xl font-bold mb-1">{product.name}</h2>
                <p className="text-gray-800 font-bold text-lg mb-8">
                  Price:
                  <span className="cart-total ml-1">${product.price}</span>
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mb-2"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
                <p className="text-gray-700 mb-4">{product.description}</p>
              </div>
            </div>
          </div>
          <div className="pdp-cart-summary ml-3">
            <CartSummary cartItems={cartItems} />
            <button
              onClick={handleGoBack}
              className="bg-yellow-500 text-white px-4 py-2 mt-3 rounded"
            >
              RETURN TO LIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const response = await axios.get(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    const products = response.data;
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await axios.get(
      `https://5fc9346b2af77700165ae514.mockapi.io/products/${params.id}`
    );
    const product = response.data;
    return { props: { product } };
  } catch (error) {
    console.error(error);
    return {
      props: {
        product: null,
      },
    };
  }
}

export default ProductDetailPage;
