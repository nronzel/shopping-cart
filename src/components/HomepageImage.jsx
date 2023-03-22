import { Box, Button, Image, Link } from '@chakra-ui/react'
import React from 'react'

const HomepageImage = () => {
    return (
        <Box position="relative">
            <Image
                h="750px"
                w="100vw"
                src="/bg.jpg"
                objectFit="cover"
                alt="keyboard"
            />
            <Link href="/products">
                <Button
                    position="absolute"
                    top="150"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    colorScheme="pink"
                >
                    shop now
                </Button>
            </Link>
        </Box>
    )
};

export default HomepageImage
