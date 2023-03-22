import { Box, Button, Heading, Image, Link, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HomepageHero = () => {
    return (
        <Box position="relative">
            <Image
                h="750px"
                w="100vw"
                src="/bg.jpg"
                objectFit="cover"
                alt="keyboard"
            />
            <Flex
                position="absolute"
                top="10%"
                left="10%"
                direction="column"
                gap={3}
                h="150px"
            >
                <Heading
                    fontSize="5xl"
                >
                    sale ends soon!
                </Heading>
                <Text mt="-15px">
                    get the hottest keyboards and accessories before they are gone.
                </Text>
                <Link href="/products">
                    <Button
                        colorScheme="pink"
                    >
                        shop now
                    </Button>
                </Link>

            </Flex>
        </Box >
    )
};

export default HomepageHero
