import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const CategoryCards = ({ imgSource }) => {
    return (
        <Box>
            <Image h="100%" objectFit="cover" alt={imgSource} src={imgSource} />
        </Box>
    )
}

export default CategoryCards
