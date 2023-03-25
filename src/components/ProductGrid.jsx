import { Heading, Flex, Box } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductGrid = () => {
  return (
    <Box maxW="1200px">
      <Heading mt={3} textAlign="center">
        all products
      </Heading>
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
