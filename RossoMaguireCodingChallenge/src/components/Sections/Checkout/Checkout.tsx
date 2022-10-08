import React from 'react';
import { Flex, Box, Spacer, Button } from '@chakra-ui/react';

const Checkout: React.FC = () => {
  return (
    <Flex>
      <Box p='4'>
        <Button colorScheme='red'>Clear Cart</Button>
      </Box>
      <Spacer />
      <Box p='4'>
        <Button colorScheme='green'>Buy</Button>
      </Box>
    </Flex>
  );
};

export default Checkout;
