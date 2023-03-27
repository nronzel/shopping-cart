import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import CartDrawer from "../src/components/CartDrawer";

const btnRef = React.createRef();

const cartItems = [
  {
    id: 1,
    name: "item 1",
    price: 10,
    quantity: 2,
  },
  {
    id: 2,
    name: "item 2",
    price: 20,
    quantity: 1,
  },
];

const onQuantityChange = () => {};
const removeFromCart = () => {};

describe("CartDrawer", () => {
  it("renders empty cart message when no items are in the cart", () => {
    const { getByText } = render(
      <ChakraProvider>
        <CartDrawer
          isOpen
          onClose={() => {}}
          btnRef={btnRef}
          cart={[]}
          onQuantityChange={onQuantityChange}
          removeFromCart={removeFromCart}
        />
      </ChakraProvider>
    );

    expect(getByText("cart is empty")).toBeInTheDocument();
  });

  it("renders cart items when cart is not empty", () => {
    const { getByText } = render(
      <ChakraProvider>
        <CartDrawer
          isOpen
          onClose={() => {}}
          btnRef={btnRef}
          cart={cartItems}
          onQuantityChange={onQuantityChange}
          removeFromCart={removeFromCart}
        />
      </ChakraProvider>
    );

    expect(getByText("item 1")).toBeInTheDocument();
    expect(getByText("item 2")).toBeInTheDocument();
  });

  it("calculates and displays the correct cart total", () => {
    const { getByText } = render(
      <ChakraProvider>
        <CartDrawer
          isOpen
          onClose={() => {}}
          btnRef={btnRef}
          cart={cartItems}
          onQuantityChange={onQuantityChange}
          removeFromCart={removeFromCart}
        />
      </ChakraProvider>
    );

    expect(getByText("$ 40.00")).toBeInTheDocument();
  });
});
