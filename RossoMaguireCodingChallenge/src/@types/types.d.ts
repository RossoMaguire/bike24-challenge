type Product = {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
};

type CartItem = {
  productName: string;
  unitPrice: number;
  amount: number;
  totalPrice: number;
};

interface ICartContext {
  selectedProduct: Product;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
  selectedAmount: number;
  setSelectedAmount: React.Dispatch<React.SetStateAction<number>>;
  selectedMaxAmount: number;
  setSelectedMaxAmount: React.Dispatch<React.SetStateAction<number>>;
  selectedTotalPrice: number;
  setSelectedTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<T>>;
  addToCart: (
    name: string,
    totalPrice: number,
    unitPrice: number,
    amount: number
  ) => void;
  removeFromCart: (name: string) => void;
}

interface ICartContextProps {
  children: ReactNode;
}
