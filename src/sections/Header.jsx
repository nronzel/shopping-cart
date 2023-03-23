import React from "react";
import { Box, Flex, HStack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "../utils/ThemeSwitcher"

const Header = () => {
    const gradientBg = "linear-gradient(90deg, rgba(227,68,227,1) 0%, rgba(253,29,29,1) 100%)"

    const borderStyle = {
        backgroundImage: gradientBg
    };

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
                zIndex="1"
            >
                <Flex
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
            </Flex>
        </Flex >
    );
};

export default Header;
