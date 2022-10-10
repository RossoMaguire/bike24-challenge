import React from 'react';
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import OrdersItem from './OrdersItem';

const OrdersTable: React.FC = () => {
  const { cartItems } = useCartContext();

  return (
    <TableContainer py={20}>
      <Table variant='simple' color='black'>
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th isNumeric>Unit Price</Th>
            <Th isNumeric>Amount</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <OrdersItem
              productName={item.productName}
              unitPrice={item.unitPrice}
              amount={item.amount}
              totalPrice={item.totalPrice}
              key={item.productName}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
