import React from "react";
import {
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerFooter,
  DrawerContent,
  DrawerOverlay,
  Button,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import CartView from "./CartView";

const CartDrawer = ({
  isOpen,
  onClose,
  btnRef,
  cart = [],
  onQuantityChange,
  removeFromCart,
}) => {
  const getCartTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={btnRef}
      placement="right"
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>your cart</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          {cart.length < 1 ? (
            <Text>cart is empty</Text>
          ) : (
            <Flex direction="column" gap={5}>
              {cart.map((item) => (
                <CartView
                  key={item.id}
                  item={item}
                  onQuantityChange={onQuantityChange}
                  removeFromCart={removeFromCart}
                />
              ))}
            </Flex>
          )}
        </DrawerBody>
        <Divider />
        <DrawerFooter justifyContent="space-between">
          <HStack>
            <Text fontSize="xl">total: </Text>
            <Text fontSize="xl" fontWeight="black">
              $ {getCartTotal()}
            </Text>
          </HStack>
          <Button variant="solid" colorScheme="pink">
            checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
