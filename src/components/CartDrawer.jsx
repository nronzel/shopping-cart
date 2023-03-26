import React from "react";
import {
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
            <Text>nothing in cart</Text>
          ) : (
            <Flex direction="column" gap={5}>
              {cart.map((item) => (
                <CartView
                  item={item}
                  onQuantityChange={onQuantityChange}
                  removeFromCart={removeFromCart}
                />
              ))}
            </Flex>
          )}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="solid" colorScheme="pink">
            checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
