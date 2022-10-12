/* eslint-disable @typescript-eslint/no-empty-function */
import { cartDefaultValues } from '../components/context/CartContext';

const orderItemsMock = {
  ...cartDefaultValues,
  cartItems: [
    {
      productName: 'A random product',
      unitPrice: 10,
      amount: 2,
      totalPrice: 20,
    },
    {
      productName: 'Another random product',
      unitPrice: 4,
      amount: 1,
      totalPrice: 4,
    },
  ],
};

export default orderItemsMock;
