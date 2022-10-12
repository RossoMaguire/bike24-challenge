/* eslint-disable @typescript-eslint/no-empty-function */
const orderItemsMock = {
  selectedProduct: {
    id: 'none',
    productName: '',
    maxAmount: 0,
    taxRate: 0,
    price: 0,
  },
  setSelectedProduct: () => {},
  selectedAmount: 0,
  setSelectedAmount: () => {},
  selectedMaxAmount: 0,
  setSelectedMaxAmount: () => {},
  selectedTotalPrice: 0,
  setSelectedTotalPrice: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
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
  setCartItems: () => [],
  addToCart: () => {},
  removeFromCart: () => {},
  maxOrderReached: false,
};

export default orderItemsMock;
