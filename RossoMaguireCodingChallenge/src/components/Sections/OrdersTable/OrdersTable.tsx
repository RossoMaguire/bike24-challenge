import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const OrdersTable: React.FC = () => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4} py={20}>
      <GridItem colSpan={2} h='10' bg='tomato'>
        Product Name
      </GridItem>
      <GridItem colSpan={1} h='10' bg='tomato'>
        Unit Price
      </GridItem>
      <GridItem colSpan={1} h='10' bg='tomato'>
        Amount
      </GridItem>
      <GridItem colSpan={1} h='10' bg='tomato'>
        Price
      </GridItem>
    </Grid>
  );
};

export default OrdersTable;
