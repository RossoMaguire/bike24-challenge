import React from 'react';
import { GridItem, Text } from '@chakra-ui/react';

const OrdersItem: React.FC<CartItem> = ({
  productName,
  unitPrice,
  amount,
  totalPrice,
}: CartItem) => {
  return (
    <>
      <GridItem colSpan={2} h='10'>
        <Text color='black'>{productName}</Text>
      </GridItem>
      <GridItem colSpan={1} h='10'>
        <Text color='black'>{unitPrice}</Text>
      </GridItem>
      <GridItem colSpan={1} h='10'>
        <Text color='black'>{amount}</Text>
      </GridItem>
      <GridItem colSpan={1} h='10'>
        <Text color='black'>{totalPrice}</Text>
      </GridItem>
    </>
  );
};

export default OrdersItem;
