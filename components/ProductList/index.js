import React from "react";
import { useRouter } from "next/router";
import CartSummary from "../CartSummary";

const ProductList = ({
  products,
  onAddToCart,
  cartItems,
  selectedBrand,
  onBrandChange,
}) => {
  const router = useRouter();

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  const handleProductDetail = (product) => {
    router.push(`/product/${product.id}`);
  };

  const handleBrandChange = (event) => {
    onBrandChange(event.target.value);
  };

  return (
    <div className="flex justify-center product-list mt-9">
      <div className="filter-area filter-container mb-4 ml-4">
        <label htmlFor="brand" className="font-bold text-lg mb-2">
          Filter Brands:
        </label>
        <select
          id="brand"
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All Brands</option>
          <option value="Volkswagen">Volkswagen (VW)</option>
          <option value="Rolls Royce">Rolls Royce</option>
          <option value="Mini">Mini (BMW)</option>
          <option value="Polestar">Polestar</option>
          <option value="Tesla">Tesla</option>
          <option value="Ferrari">Ferrari</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full cursor-pointer h-40 object-cover mb-4"
              onClick={() => handleProductDetail(product)}
            />
            <div className="font-bold text-lg mb-2">{product.name}</div>
            <div className="text-gray-600 mb-4">${product.price}</div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <CartSummary cartItems={cartItems} />
    </div>
  );
};

export default ProductList;
