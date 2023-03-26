import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../src/components/ProductCard";

const product = [
  {
    id: 0,
    name: "product 1",
    price: 75,
    src: "../public/products/product1.jpg",
  },
];

describe("Product card renders", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
  });

  it("renders product name", () => {
    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
  });

  it("renders product price", () => {
    expect(screen.getByText(/75/i)).toBeInTheDocument();
  });

  it("renders the correct image alt text", () => {
    const displayedImage = document.querySelector("img");
    expect(displayedImage.alt).toContain("product image");
  });

  it("renders the correct image source", () => {
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("/products/product1.jpg");
  });

  it("renders add to cart button", () => {
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });

  it("renders details button", () => {
    expect(screen.getByText(/details/i)).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
