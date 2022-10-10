import React from 'react';
import { Flex, Box, Spacer, Button, Heading } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const Checkout: React.FC = () => {
  const { cartTotal, setCartItems, setCartTotal } = useCartContext();

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  return (
    <>
      <Flex borderTop='1px' borderTopColor='gray.200'>
        <Box p='4'>
          <Button colorScheme='red' onClick={clearCart}>
            Clear Cart
          </Button>
        </Box>
        <Spacer />
        <Box p='2'>
          <Heading size='md' color='black'>
            {`Order Total: €${cartTotal.toLocaleString('en-US')}`}
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Spacer />
        <Box p='4'>
          <Button colorScheme='green'>Buy</Button>
        </Box>
      </Flex>
    </>
  );
};

export default Checkout;
