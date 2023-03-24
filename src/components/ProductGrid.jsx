import { Heading, Flex, Box } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    { name: "Product 1", price: "75", src: "/products/product1.jpg" },
    { name: "Product 2", price: "150", src: "/products/product2.jpg" },
    { name: "Product 3", price: "135", src: "/products/product3.jpg" },
    { name: "Product 4", price: "80", src: "/products/product4.jpg" },
    { name: "Product 5", price: "350", src: "/products/product5.jpg" },
    { name: "Product 6", price: "35", src: "/products/product6.jpg" },
    { name: "Product 7", price: "280", src: "/products/product7.jpg" },
    { name: "Product 8", price: "275", src: "/products/product8.jpg" },
    { name: "Product 9", price: "69", src: "/products/product9.jpg" },
  ];

  return (
    <Box maxW="1200px">
      <Heading mt={3} textAlign="center">all products</Heading>
      <Flex wrap="wrap" gap={5} mt={5} w="100%" justifyContent="center">
        {products.map((product, index) => (
          <ProductCard
            price={`$ ${product.price}`}
            imgSource={product.src}
            key={index}
            productTitle={product.name}
            flexGrow="0"
          />
        ))}
      </Flex>
    </Box>
  );
};
export default ProductGrid;
