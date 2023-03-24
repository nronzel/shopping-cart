import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../src/sections/Footer.jsx";
import { ChakraProvider } from "@chakra-ui/react";

describe("Footer renders", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    );
  });

  it("renders footer text", () => {
    expect(screen.getByText(/2023 all rights reserved/i)).toBeInTheDocument();
  });
});
