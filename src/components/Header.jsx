import React from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <Flex h="50px" w="100%" justifyContent="center" alignItems="center">
      <Flex w="80%">
        <Heading>TotallyLegitStore</Heading>
        <Spacer />
        <Button>Theme</Button>
      </Flex>
    </Flex>
  );
}

export default Header;
