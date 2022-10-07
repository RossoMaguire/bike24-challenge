import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';

const Checkout: React.FC = () => {
  return (
    <Flex>
      <Box p='4' bg='red.400'>
        Clear Cart
      </Box>
      <Spacer />
      <Box p='4' bg='green.400'>
        Buy
      </Box>
    </Flex>
  );
};

export default Checkout;
