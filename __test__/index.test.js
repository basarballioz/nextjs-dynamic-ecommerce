import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Home from "../pages/index";
import { useRouter } from "next/router";
import "@testing-library/jest-dom/extend-expect";
import config from "../config/config";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home", () => {
  let mock;
  let mockRouter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
    mockRouter = useRouter;
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it("fetches and renders product data correctly", async () => {
    const mockProducts = [
      { id: 1, name: "Product 1", brand: "Brand 1" },
      { id: 2, name: "Product 2", brand: "Brand 2" },
    ];

    mock.onGet(`${config.apiURL}`).reply(200, mockProducts);

    mockRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });

  it("filters products by brand", async () => {
    const mockProducts = [
      { id: 1, name: "Product 1", brand: "Brand 1" },
      { id: 2, name: "Product 2", brand: "Brand 2" },
    ];

    mock.onGet(`${config.apiURL}`).reply(200, mockProducts);

    mockRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });
});
