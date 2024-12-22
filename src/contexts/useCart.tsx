import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../types/products";
import { getProducts } from "../services/productsServer";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Product[];
  addToCart: (productId: number) => void;
}

const DEFAULT_VALUES = {
  cart: [],
  addToCart: () => null,
};

const useCartContext = () => {
  const useCartContext = useContext(CartContext);

  return useCartContext;
};

const CartContext = createContext<CartContextData>(DEFAULT_VALUES);

const ProviderUseCart = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [stock, setStock] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      setStock(response.data);
    });
  }, []);

  async function addToCart(id: number) {
    // const stock = await getProducts();
    setCart(cart);
    console.log("stock", stock);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { ProviderUseCart, useCartContext };
