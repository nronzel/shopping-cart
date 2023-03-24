import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../src/components/ProductCard";
import product1 from "../public/products/product1.jpg";

const product = [{ name: "product 1", price: "75", src: product1 }];

describe("Product card renders", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <ProductCard
          imgSource={product[0].src}
          price={product[0].price}
          productTitle={product[0].name}
        />
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
});

