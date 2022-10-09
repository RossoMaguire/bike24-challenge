import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import OrdersItem from './OrdersItem';

const OrdersTable: React.FC = () => {
  const { cartItems } = useCartContext();

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4} py={20}>
      <GridItem colSpan={2} h='10'>
        <Text color='black'>Product Name</Text>
      </GridItem>
      <GridItem colSpan={1} h='10'>
        <Text color='black'>Unit Price</Text>
      </GridItem>
      <GridItem colSpan={1} h='10'>
        <Text color='black'>Amount</Text>
      </GridItem>
      <GridItem colSpan={1} h='10'>
        <Text color='black'>Price</Text>
      </GridItem>
      {cartItems.map((item) => (
        <OrdersItem
          productName={item.productName}
          unitPrice={item.unitPrice}
          amount={item.amount}
          totalPrice={item.totalPrice}
        />
      ))}
    </Grid>
  );
};

export default OrdersTable;
