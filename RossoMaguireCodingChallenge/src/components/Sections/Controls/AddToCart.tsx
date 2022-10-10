import { Button } from '@chakra-ui/react';
import React from 'react';
import { useCartContext } from '../../context/CartContext';

const AddToCart: React.FC = () => {
  const { addToCart, selectedProduct, selectedTotalPrice, selectedAmount } =
    useCartContext();

  const handleClick = () => {
    const { productName, price } = selectedProduct;
    addToCart(productName, selectedTotalPrice, price, selectedAmount);
  };

  return (
    <Button
      colorScheme='blue'
      onClick={handleClick}
      isDisabled={selectedProduct === undefined}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
