import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProductSelect from './ProductSelect';
import SliderAmount from './SliderAmount';
import AddToCart from './AddToCart';

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
        <AddToCart />
      </GridItem>
    </Grid>
  );
};

export default Controls;
