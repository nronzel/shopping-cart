import React from "react";
import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="80%" gap={6} justifyContent="center" alignItems="center">
        <Heading cursor="default">
          <a href="/">TotallyLegitStore</a>
        </Heading>
        <Spacer />
        <a href="/products">Shop</a>
        <a href="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </Flex>
    </Flex>
  );
};

export default Header;
