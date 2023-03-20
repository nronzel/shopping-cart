import React from "react";
import { Flex, Heading, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="80%" gap={6} justifyContent="center" alignItems="center">
        <Heading cursor="default">
          <a href="/">TotallyLegitStore</a>
        </Heading>
        <Spacer />
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </Flex>
    </Flex>
  );
};

export default Header;
