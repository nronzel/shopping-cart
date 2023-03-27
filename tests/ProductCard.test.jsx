import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
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
  it("renders product name", () => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
  });

  it("renders product price", () => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    expect(screen.getByText(/75/i)).toBeInTheDocument();
  });

  it("renders the correct image alt text", () => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    const displayedImage = document.querySelector("img");
    expect(displayedImage.alt).toContain("product image");
  });

  it("renders the correct image source", () => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("/products/product1.jpg");
  });

  it("renders add to cart button", () => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });

  it("renders details button", () => {
    render(
      <ChakraProvider>
        <ProductCard product={product[0]} />
      </ChakraProvider>
    );
    expect(screen.getByText(/details/i)).toBeInTheDocument();
  });

  it("add to cart button calls addToCart function once when clicked", () => {
    const addToCart = vi.fn();
    const { getByRole } = render(
      <ChakraProvider>
        <ProductCard product={product[0]} addToCart={addToCart} />
      </ChakraProvider>
    );

    const addBtn = getByRole("button", { name: "add to cart" });

    fireEvent.click(addBtn);

    expect(addToCart).toHaveBeenCalledWith(product[0]);
    expect(addToCart).toHaveBeenCalledTimes(1);
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
