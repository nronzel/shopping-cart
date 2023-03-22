import React from "react";
import { Flex, HStack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "../utils/ThemeSwitcher"

const Header = () => {
    return (
        <Flex
            w="100%"
            justifyContent="center"
            h="75px"
            alignItems="center"
            borderBottom="4px solid"
            borderColor={useColorModeValue("pink.400", "pink.100")}
            flexShrink="0"
        >
            <Flex
                w="80%"
                gap={6}
                justifyContent="space-between"
                alignItems="center"
                h="100%"
            >
                <Heading
                    cursor="default"
                    bgClip="text"
                    bgGradient="linear-gradient(90deg, rgba(227,68,227,1) 0%, rgba(253,29,29,1) 100%)"
                    fontSize="4xl"
                >
                    <a href="/">
                        keebstore
                    </a>
                </Heading>
                <Text fontSize="md"><a href="/products">shop</a></Text>
                <HStack mr={17} spacing={5}>
                    <a href="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    <ThemeSwitcher />
                </HStack>
            </Flex>
        </Flex >
    );
};

export default Header;
