import React from "react";
import { Flex, HStack, Heading, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "../utils/ThemeSwitcher"

const Header = () => {
    return (
        <Flex w="100%" justifyContent="center" h="75px" alignItems="center">
            <Flex w="80%" gap={6} justifyContent="center" alignItems="center">
                <Heading cursor="default">
                    <a href="/">
                        <Text color={useColorModeValue("pink.500", "pink.100")}>keebstore</Text>
                    </a>
                </Heading>
                <Spacer />
                <HStack mr={17} spacing={5}>
                    <a href="/products">shop</a>
                    <a href="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                </HStack>
                <ThemeSwitcher />
            </Flex>
        </Flex>
    );
};

export default Header;
