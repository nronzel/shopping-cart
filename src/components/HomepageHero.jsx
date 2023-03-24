import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HomepageHero = () => {
  return (
    <Box position="relative" draggable="false" userSelect="none">
      <Image
        h="750px"
        w="100vw"
        src="/bg.jpg"
        objectFit="cover"
        alt="keyboard"
        draggable="false"
      />
      <Flex
        position="absolute"
        top="10%"
        left="10%"
        direction="column"
        gap={5}
        h="150px"
      >
        <Heading fontSize="5xl" color="white">
          sale ends soon!
        </Heading>
        <Text mt="-25px" color="white">
          get the hottest keyboards and accessories before they are gone.
        </Text>
        {/* width is set to prevent the link from being clickable
                    outside of the buttons area */}
        <Link href="/products" w="50px">
          <Button colorScheme="pink" size="lg">
            shop now
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default HomepageHero;
