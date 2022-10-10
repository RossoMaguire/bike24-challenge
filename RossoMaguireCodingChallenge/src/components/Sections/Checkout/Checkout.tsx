import React from 'react';
import { Flex, Box, Spacer, Button, Heading } from '@chakra-ui/react';
import { CartItemsContext, useCartContext } from '../../context/CartContext';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal, setCartItems, setCartTotal } = useCartContext();

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  return (
    <>
      <Flex borderTop='1px' borderTopColor='gray.200'>
        <Box p='4'>
          <Button
            colorScheme='red'
            onClick={clearCart}
            display={cartItems.length > 0 ? 'block' : 'none'}
          >
            Clear Cart
          </Button>
        </Box>
        <Spacer />
        <Box p='2'>
          <Heading size='md' color='black'>
            {`Cart Total: €${cartTotal.toLocaleString('en-US')}`}
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Spacer />
        <Box p='4'>
          <Button
            colorScheme='green'
            display={cartItems.length > 0 ? 'block' : 'none'}
          >
            Buy
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Checkout;
