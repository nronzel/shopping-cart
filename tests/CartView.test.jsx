import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import CartView from "../src/components/CartView";

const item = {
  id: 1,
  name: "Test Item",
  price: 25,
  quantity: 2,
  src: "test-item.jpg",
};

describe("CartView", () => {
  it("renders item name, image, and total price", () => {
    render(
      <ChakraProvider>
        <CartView item={item} />
      </ChakraProvider>
    );

    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(
      screen.getByText(`$ ${item.price * item.quantity}`)
    ).toBeInTheDocument();
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain(item.src);
  });

  it("calls onQuantityChange with updated quantity when +/- buttons are clicked", () => {
    const onQuantityChange = vi.fn();
    const { getByText } = render(
      <ChakraProvider>
        <CartView item={item} onQuantityChange={onQuantityChange} />
      </ChakraProvider>
    );

    fireEvent.click(getByText("-"));
    expect(onQuantityChange).toHaveBeenCalledWith(item.quantity - 1, item.id);

    fireEvent.click(getByText("+"));
    expect(onQuantityChange).toHaveBeenCalledWith(item.quantity + 1, item.id);
  });

  it("calls removeFromCart when remove button is clicked", () => {
    const removeFromCart = vi.fn();
    const { getByText } = render(
      <ChakraProvider>
        <CartView item={item} removeFromCart={removeFromCart} />
      </ChakraProvider>
    );

    fireEvent.click(getByText("remove"));
    expect(removeFromCart).toHaveBeenCalledWith(item.id);
  });
});
