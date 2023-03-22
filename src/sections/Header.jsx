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
                    color={useColorModeValue("pink.400", "pink.100")}
                >
                    <Text >
                        <a href="/">
                            keebstore
                        </a>
                    </Text>
                </Heading>
                <Text><a href="/products">shop</a></Text>
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
