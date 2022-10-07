import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const Controls: React.FC = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <GridItem w='100%' h='10' bg='blue.500'>
        Dropdown
      </GridItem>
      <GridItem w='100%' h='10' bg='blue.500'>
        Slider
      </GridItem>
      <GridItem w='100%' h='10' bg='blue.500'>
        Add to cart
      </GridItem>
    </Grid>
  );
};

export default Controls;
