import React from 'react';
import { Tr, Td } from '@chakra-ui/react';

interface IOrdersItemProps extends CartItem {}

const OrdersItem: React.FC<IOrdersItemProps> = ({
  productName,
  unitPrice,
  amount,
  totalPrice,
}: IOrdersItemProps) => {
  return (
    <Tr>
      <Td>{productName}</Td>
      <Td isNumeric>{unitPrice}</Td>
      <Td isNumeric>{amount}</Td>
      <Td isNumeric>{totalPrice}</Td>
    </Tr>
  );
};

export default OrdersItem;
