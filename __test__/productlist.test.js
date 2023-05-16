import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import ProductList from "../components/ProductList/index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ProductList", () => {
  const mockProducts = [
    {
      id: 1,
      name: "Product 1",
      brand: "Brand 1",
      image: "image-1.jpg",
      price: 1923,
    },
    {
      id: 2,
      name: "Product 2",
      brand: "Brand 2",
      image: "image-2.jpg",
      price: 1923,
    },
  ];

  const mockCartItems = [];

  const mockOnAddToCart = jest.fn();

  const mockOnBrandChange = jest.fn();

  it("renders product list correctly", () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(
      <ProductList
        products={mockProducts}
        onAddToCart={mockOnAddToCart}
        cartItems={mockCartItems}
        selectedBrand=""
        onBrandChange={mockOnBrandChange}
      />
    );
  });

  it("triggers onBrandChange correctly", () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(
      <ProductList
        products={mockProducts}
        onAddToCart={mockOnAddToCart}
        cartItems={mockCartItems}
        selectedBrand=""
        onBrandChange={mockOnBrandChange}
      />
    );
  });
});
