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
    <Card direction="row" alignItems="center">
      <Image boxSize="70px" objectFit="cover" src={item.src} />
      <Stack ml={5}>
        <Text>{item.name}</Text>
        <HStack>
          <Button
            size="xs"
            onClick={() => onQuantityChange(item.quantity - 1, item.id)}
          >
            -
          </Button>
          <Text>Qty: {item.quantity}</Text>
          <Button
            size="xs"
            onClick={() => onQuantityChange(item.quantity + 1, item.id)}
          >
            +
          </Button>
        </HStack>
      </Stack>
      <Spacer />
      <Text>$ {item.price * item.quantity}</Text>
      <Button size="xs" onClick={() => removeFromCart(item.id)}>remove</Button>
    </Card>
  );
};

export default CartView;
