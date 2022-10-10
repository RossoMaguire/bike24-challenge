import React from 'react';
import { Flex, Box, Spacer, Button, Heading } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const Checkout: React.FC = () => {
  const { cartTotal } = useCartContext();

  return (
    <>
      <Flex>
        <Spacer />
        <Box p='2'>
          <Heading size='md' color='black'>
            {`Order Total: €${cartTotal.toLocaleString('en-US')}`}
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Box p='4'>
          <Button colorScheme='red'>Clear Cart</Button>
        </Box>
        <Spacer />
        <Box p='4'>
          <Button colorScheme='green'>Buy</Button>
        </Box>
      </Flex>
    </>
  );
};

export default Checkout;
