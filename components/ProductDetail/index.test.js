import { render, screen } from "@testing-library/react";
import ProductDetail from "./index";

describe("ProductDetail", () => {
  const mockProduct = {
    id: 1,
    name: "Product 1",
    image: "image-1.jpg",
    description: "Lorem ipsum dolor sit amet",
    price: 10,
  };

  it("renders product detail correctly", () => {
    render(<ProductDetail product={mockProduct} />);

    const productName = screen.getByRole("heading", { level: 2 });
    const productImage = screen.getByAltText(mockProduct.name);
    const productDescription = screen.getByText(mockProduct.description);
    const productPrice = screen.getByText(`Price: $${mockProduct.price}`);

    expect(productName).toBeDefined();
    expect(productImage).toBeDefined();
    expect(productDescription).toBeDefined();
    expect(productPrice).toBeDefined();
  });
});
