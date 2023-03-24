import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";

const CategoryCards = ({ imgSource, hoverText }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Box
      position="relative"
      h="100%"
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      userSelect="none"
      draggable="false"
    >
      <Image
        h="100%"
        objectFit="cover"
        alt={imgSource}
        src={imgSource}
        filter={isHovering ? "blur(5px)" : "none"}
        transition="filter 0.5s ease"
        draggable="false"
        userSelect="none"
      />
      {isHovering && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          fontSize="3xl"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
          fontWeight="bold"
          transition="opacity 1s ease"
          opacity={isHovering ? 1 : 0}
          userSelect="none"
        >
          {hoverText}
        </Box>
      )}
    </Box>
  );
};

export default CategoryCards;
