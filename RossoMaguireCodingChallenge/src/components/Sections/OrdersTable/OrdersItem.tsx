import React from 'react';
import { Tr, Td } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useCartContext } from '../../context/CartContext';

interface IOrdersItemProps extends CartItem {
  index: number;
}

const OrdersItem: React.FC<IOrdersItemProps> = ({
  index,
  productName,
  unitPrice,
  amount,
  totalPrice,
}: IOrdersItemProps) => {
  const { removeFromCart } = useCartContext();

  return (
    <Tr>
      <Td>{index}</Td>
      <Td fontWeight='bold'>{productName}</Td>
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
