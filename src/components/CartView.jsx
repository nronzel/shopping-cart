import {
  Card,
  Text,
  Image,
  Stack,
  Button,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const CartView = ({ item, onQuantityChange, removeFromCart }) => {
  return (
    <Card direction="row" alignItems="center" variant="outline">
      <HStack w="100%" p={4}>
        <Image
          boxSize="65px"
          objectFit="cover"
          borderRadius={4}
          src={item.src}
        />
        <Stack ml={5}>
          <Text fontWeight="semibold">{item.name}</Text>
          <HStack>
            <Button
              size="xs"
              onClick={() => onQuantityChange(item.quantity - 1, idex)}
            >
              -
            </Button>
            <Text>Qty: {item.quantity}</Text>
            <Button
              size="xs"
              onClick={() => onQuantityChange(item.quantity + 1, idex)}
            >
              +
            </Button>
          </HStack>
        </Stack>
        <Spacer />
        <HStack gap={8}>
          <Text fontWeight="bold" fontSize="lg">
            $ {item.price * item.quantity}
          </Text>
          <Button
            colorScheme="pink"
            size="xs"
            onClick={() => removeFromCart(item.id)}
          >
            remove
          </Button>
        </HStack>
      </HStack>
    </Card>
  );
};

export default CartView;
