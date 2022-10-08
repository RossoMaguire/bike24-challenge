import React from 'react';
import { Grid, GridItem, Button } from '@chakra-ui/react';
import ProductSelect from './ProductSelect';
import SliderAmount from './SliderAmount';

const Controls: React.FC = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <GridItem w='100%' h='10'>
        <ProductSelect />
      </GridItem>
      <GridItem w='100%' h='10'>
        <SliderAmount />
      </GridItem>
      <GridItem w='100%' h='10'>
        <Button colorScheme='blue'>Add to Cart</Button>
      </GridItem>
    </Grid>
  );
};

export default Controls;
