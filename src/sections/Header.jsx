import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Flex,
  HStack,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "../utils/ThemeSwitcher";

const Header = () => {
  const gradientBg =
    "linear-gradient(90deg, rgba(227,68,227,1) 0%, rgba(253,29,29,1) 100%)";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { cart, setCart } = useState([]);

  return (
    <Flex
      w="100%"
      justifyContent="center"
      h="75px"
      alignItems="flex-start"
      bgGradient={gradientBg}
      flexShrink="0"
      zIndex="0"
    >
      <Flex
        w="100%"
        bgColor={useColorModeValue("gray.100", "gray.800")}
        h="71px"
        justifyContent="center"
        alignItems="center"
        zIndex="1"
      >
        <Flex
          maxW="1200px"
          w="80%"
          gap={6}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            cursor="default"
            bgClip="text"
            bgGradient={gradientBg}
            fontSize="4xl"
          >
            <a href="/">keebstore</a>
          </Heading>
          <Text
            fontSize="lg"
            _hover={{
              color: "pink.500",
              textDecorationLine: "underline",
              textDecorationThickness: "4px",
            }}
          >
            <a href="/products">shop</a>
          </Text>
          <HStack spacing={10}>
            <Button ref={btnRef} onClick={onOpen}>
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </Button>
            <ThemeSwitcher />
          </HStack>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>your cart</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>products in cart</DrawerBody>
          <DrawerFooter>
            <Button variant="solid" colorScheme="pink">
              checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
