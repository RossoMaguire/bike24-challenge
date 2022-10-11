/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect, useState } from 'react';

const cartDefaultValues: ICartContext = {
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
  cartItems: [],
  setCartItems: () => [],
  addToCart: () => {},
  removeFromCart: () => {},
  maxOrderReached: false,
};

export const CartItemsContext = createContext<ICartContext>(cartDefaultValues);

export function useCartContext() {
  return useContext(CartItemsContext);
}

export function CartProvider({ children }: ICartContextProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 'none',
    productName: '',
    maxAmount: 0,
    taxRate: 0,
    price: 0,
  });
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [selectedMaxAmount, setSelectedMaxAmount] = useState<number>(1);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);
  const [maxOrderReached, setMaxOrderReached] = useState<boolean>(false);

  useEffect(() => {
    const newTotalPrice = selectedProduct.price * selectedAmount!;
    setSelectedTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
  }, [selectedAmount]);

  useEffect(() => {
    setSelectedTotalPrice(parseFloat(selectedProduct.price.toFixed(2)));
    setSelectedAmount(() => {
      return selectedProduct.id === 'none' ? 0 : 1;
    });
  }, [selectedProduct]);

  useEffect(() => {
    setCartTotal(() => {
      const prices = cartItems?.map((item) => item.totalPrice);
      const sum = prices.reduce((prev, current) => prev + current, 0);
      return sum;
    });
  }, [cartItems]);

  const addToCart = async (
    name: string,
    totalPrice: number,
    unitPrice: number,
    amount: number
  ) => {
    setCartItems((prevState) => {
      const isItemInCart = prevState.find((item) => item.productName === name);

      if (isItemInCart) {
        return prevState.map((item) =>
          item.productName === name
            ? {
                ...item,
                amount,
                totalPrice,
              }
            : item
        );
      }

      if (cartItems.length === 10) {
        setMaxOrderReached(true);
        return [...prevState];
      }

      return [
        ...prevState,
        { productName: name, amount, unitPrice, totalPrice },
      ];
    });
  };

  const removeFromCart = async (name: string) => {
    if (cartItems.length === 10) {
      setMaxOrderReached(false);
    }

    setCartItems((prevState) => {
      return prevState.filter((item) => item.productName !== name);
    });
  };

  const value = {
    selectedProduct,
    setSelectedProduct,
    selectedAmount,
    setSelectedAmount,
    selectedMaxAmount,
    setSelectedMaxAmount,
    selectedTotalPrice,
    setSelectedTotalPrice,
    cartTotal,
    setCartTotal,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    maxOrderReached,
  };

  return (
    <>
      <CartItemsContext.Provider value={value}>
        {children}
      </CartItemsContext.Provider>
    </>
  );
}
