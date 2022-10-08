import { createContext, useContext, useState } from 'react';

const cartDefaultValues: ICartContext = {
  selectedProduct: {} as Product,
  setSelectedProduct: () => {},
  selectedAmount: 0,
  setSelectedAmount: () => {},
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
    {} as Product
  );
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = async (name: string, price: number) => {
    setCartCount(cartCount + 1);
    setCartItems((prevState) => {
      const isItemInCart = prevState.find((item) => item.productName === name);

      if (isItemInCart) {
        return prevState.map((item) =>
          item.productName === name
            ? {
                ...item,
                amount: item.amount + 1,
                price: item.unitPrice,
                totalPrice: item.totalPrice + item.unitPrice,
              }
            : item
        );
      }

      return [
        ...prevState,
        { productName: name, unitPrice: price, amount: 1, totalPrice: price },
      ];
    });
    setCartTotal((prevState: number) => {
      return prevState + price;
    });
  };

  const value = {
    selectedProduct,
    setSelectedProduct,
    selectedAmount,
    setSelectedAmount,
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
