import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../src/sections/Header.jsx";

describe("Header renders", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    );
  });

  it("renders title", () => {
    expect(screen.getByText(/keebstore/i)).toBeInTheDocument();
  });

  it("renders the 'shop' link", () => {
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
  });

  it("changes color theme", () => {
    const button = screen.getByRole("button", { name: /toggle theme/i });

    expect(document.body).toHaveClass("chakra-ui-light");

    fireEvent.click(button);

    expect(document.body).toHaveClass("chakra-ui-dark");
  });
});
