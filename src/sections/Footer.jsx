import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Flex
            h="70px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
        >
            <Text
                color={useColorModeValue("gray.300", "gray.600")}>
                nronzel &copy; 2023 All Rights Reserved
            </Text>
        </Flex>
    );
};

export default Footer;
