import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const AddToCart: React.FC = () => {
  const {
    addToCart,
    selectedProduct,
    selectedTotalPrice,
    selectedAmount,
    maxOrderReached,
  } = useCartContext();

  const handleClick = () => {
    const { productName, price } = selectedProduct;
    addToCart(productName, selectedTotalPrice, price, selectedAmount);
  };

  return (
    <>
      <Button
        colorScheme='blue'
        onClick={handleClick}
        isDisabled={selectedProduct === undefined}
      >
        Add to Cart
      </Button>
      <Text color='tomato' display={maxOrderReached ? 'block' : 'none'}>
        You have reached the limit of 10 line items in your Cart.
        <br />
        You can still update individual item amounts.
      </Text>
    </>
  );
};

export default AddToCart;
