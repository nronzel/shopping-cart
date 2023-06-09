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

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card
      maxW="xs"
      borderRadius="xl"
      bgColor={useColorModeValue("gray.100", "gray.700")}
    >
      <CardBody>
        <Image
          h="250px"
          w="100%"
          objectFit="cover"
          objectPosition="center"
          src={product.src}
          borderRadius="lg"
          alt="product image"
        />
        <Stack spacing={3} mt={4}>
          <Heading size="md">{product.name}</Heading>
          <Text fontWeight="thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor in
            dolorem fugit quo obcaecati facere!
          </Text>
          <Text
            color={useColorModeValue("pink.500", "pink.200")}
            fontSize="xl"
            fontWeight="bold"
          >
            {`$ ${product.price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button
            variant="solid"
            colorScheme="pink"
            onClick={() => addToCart(product)}
          >
            add to cart
          </Button>
          <Button variant="outline" fontWeight="normal">
            details
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
