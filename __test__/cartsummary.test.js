import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartSummary from "../components/CartSummary/index";

describe("CartSummary", () => {
  const mockCartItems = [
    { id: 1, name: "Item 1", price: "10.00" },
    { id: 2, name: "Item 2", price: "15.00" },
    { id: 3, name: "Item 3", price: "20.00" },
  ];

  it("renders cart summary correctly", () => {
    render(<CartSummary cartItems={mockCartItems} />);

    // Check if grouped items are displayed correctly
    expect(screen.getByText(/Item 1 x 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 2 x 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 3 x 1/i)).toBeInTheDocument();

    // Check if clear cart button is displayed when totalCartAmount is greater than 0
    const clearCartButton = screen.getByText("Clear Cart");
    expect(clearCartButton).toBeInTheDocument();
    expect(clearCartButton).toHaveStyle({ backgroundColor: "red" });

    // Check if total price is displayed correctly
    expect(screen.getByText(/45.00\$/i)).toBeInTheDocument();

    // Check if checkout button is displayed
    const checkoutButton = screen.getByText("Checkout");
    expect(checkoutButton).toBeInTheDocument();
  });
});
