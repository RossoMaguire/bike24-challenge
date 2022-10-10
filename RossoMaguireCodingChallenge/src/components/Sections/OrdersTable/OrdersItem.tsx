import React from 'react';
import { Tr, Td } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useCartContext } from '../../context/CartContext';

interface IOrdersItemProps extends CartItem {}

const OrdersItem: React.FC<IOrdersItemProps> = ({
  productName,
  unitPrice,
  amount,
  totalPrice,
}: IOrdersItemProps) => {
  const { removeFromCart } = useCartContext();

  return (
    <Tr>
      <Td>{productName}</Td>
      <Td isNumeric>{`€${unitPrice}`}</Td>
      <Td isNumeric>{amount}</Td>
      <Td isNumeric>{`€${totalPrice}`}</Td>
      <Td textAlign='end'>
        <SmallCloseIcon
          color='tomato'
          onClick={() => removeFromCart(productName)}
          cursor='pointer'
        />
      </Td>
    </Tr>
  );
};

export default OrdersItem;
