import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../components/Header/index";

describe("Header", () => {
  const mockOnSearch = jest.fn();
  const mockCartItems = [];

  it("renders header correctly", () => {
    render(<Header onSearch={mockOnSearch} cartItems={mockCartItems} />);

    // Logo
    const logoElement = screen.getByText(/ETERATION/i);
    expect(logoElement).toBeInTheDocument();

    // Search input
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("navigates home when the logo is clicked", () => {
    render(<Header onSearch={mockOnSearch} cartItems={mockCartItems} />);

    const logoElement = screen.getByText(/ETERATION/i);
    fireEvent.click(logoElement);

    expect(window.location.pathname).toBe("/");
  });

  it("prevents form submission", () => {
    render(<Header onSearch={mockOnSearch} cartItems={mockCartItems} />);

    const searchForm = screen.getByRole("textbox");
    fireEvent.submit(searchForm);

    expect(mockOnSearch).toHaveBeenCalledTimes(0);
  });
});
