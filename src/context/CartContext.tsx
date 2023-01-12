import { createContext, ReactNode, useState } from "react";

export interface IProduct{
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartItems:  IProduct[];
  cartTotal: number;
  addProductToCart: (product: IProduct) => void;
  checkIfProductAlreadyInCart: (product: string) => boolean;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addProductToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeProductFromCart(productId: string){
    setCartItems((state) => state.filter((product) => product.id!== productId));
  }

  function checkIfProductAlreadyInCart(productId: string){
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartTotal, addProductToCart, checkIfProductAlreadyInCart, removeProductFromCart }}>{children}</CartContext.Provider>
  );
}