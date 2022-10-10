import React from 'react';
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
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
            <Th># Max 10</Th>
            <Th>Product Name</Th>
            <Th isNumeric>Unit Price</Th>
            <Th isNumeric>Amount</Th>
            <Th isNumeric>Price</Th>
            {cartItems.length > 0 && <Th textAlign='end'>Remove</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <OrdersItem
                index={index + 1}
                productName={item.productName}
                unitPrice={item.unitPrice}
                amount={item.amount}
                totalPrice={item.totalPrice}
                key={item.productName}
              />
            ))
          ) : (
            <Tr>
              <Td>You can add a maximum of 10 line items here.</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
