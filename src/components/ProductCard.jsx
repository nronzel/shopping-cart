import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ productTitle, imgSource, price }) => {
  return (
    <Card maxW="xs" borderRadius="xl" bgColor={useColorModeValue("gray.100", "gray.700")}>
      <CardBody>
        <Image
          h="250px"
          w="100%"
          objectFit="cover"
          objectPosition="center"
          src={imgSource}
          borderRadius="lg"
          alt="product image"
        />
        <Stack spacing={3} mt={4}>
          <Heading size="md">{productTitle}</Heading>
          <Text fontWeight="thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor in
            dolorem fugit quo obcaecati facere!
          </Text>
          <Text
            color={useColorModeValue("pink.500", "pink.200")}
            fontSize="xl"
            fontWeight="bold"
          >
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button variant="solid" colorScheme="pink">Add to cart</Button>
          <Button variant="outline" fontWeight="normal">
            Details
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
