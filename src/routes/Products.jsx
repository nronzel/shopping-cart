import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Spacer, Flex } from "@chakra-ui/react";

const Products = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleQuantityChange = (newQuantity, index) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(newQuantity, 0);
    setCart(newCart);
  };

  useEffect(() => {
    console.log("Cart state updated", cart);
  }, [cart]);

  return (
    <Flex direction="column" h="100vh" alignItems="center">
      <Header
        removeFromCart={handleRemoveFromCart}
        cart={cart}
        onQuantityChange={handleQuantityChange}
      />
      <ProductGrid addToCart={handleAddToCart} />
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Products;
