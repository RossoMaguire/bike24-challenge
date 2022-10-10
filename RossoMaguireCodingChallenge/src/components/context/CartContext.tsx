import { createContext, useContext, useEffect, useState } from 'react';

const cartDefaultValues: ICartContext = {
  selectedProduct: undefined as unknown as Product,
  setSelectedProduct: () => {},
  selectedAmount: 0,
  setSelectedAmount: () => {},
  selectedMaxAmount: 1,
  setSelectedMaxAmount: () => {},
  selectedTotalPrice: 0,
  setSelectedTotalPrice: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
  cartItems: [],
  setCartItems: () => [],
  cartCount: 0,
  setCartCount: () => {},
  addToCart: () => {},
};

export const CartItemsContext = createContext<ICartContext>(cartDefaultValues);

export function useCartContext() {
  return useContext(CartItemsContext);
}

export function CartProvider({ children }: ICartContextProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    undefined as unknown as Product
  );
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [selectedMaxAmount, setSelectedMaxAmount] = useState<number>(1);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const newTotalPrice = selectedProduct?.price * selectedAmount!;
    setSelectedTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
  }, [selectedAmount]);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedTotalPrice(parseFloat(selectedProduct.price.toFixed(2)));
      setSelectedAmount(1);
    } else {
      setSelectedTotalPrice(0);
      setSelectedAmount(0);
    }
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
    setCartCount(cartCount + 1);
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

      return [
        ...prevState,
        { productName: name, amount, unitPrice, totalPrice },
      ];
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
    cartCount,
    setCartCount,
    addToCart,
  };

  return (
    <>
      <CartItemsContext.Provider value={value}>
        {children}
      </CartItemsContext.Provider>
    </>
  );
}
