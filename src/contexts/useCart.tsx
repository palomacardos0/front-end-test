import { createContext, ReactNode, useContext, useState } from "react";
import { Product, ProductCart } from "../types/products";
import { getProducts } from "../services/productsServer";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: ProductCart[];
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
  const [cart, setCart] = useState<ProductCart[]>(() => {
    const storagedCart = localStorage.getItem("@Corebiz:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  async function addToCart(id: number) {
    const updatedCart = [...cart];

    const productExists = updatedCart.find(
      (product) => product.productId === id
    );

    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (productExists) {
      productExists.amount = amount;
    } else {
      const stock = await getProducts();

      const product = stock.data.find((prod: Product) => {
        return prod.productId == id;
      });

      if (product) {
        const newProduct = {
          ...product,
          amount: 1,
        };
        updatedCart.push(newProduct);
      }
    }
    console.log("🚀🚀🚀🚀🚀", updatedCart);

    setCart(updatedCart);
    localStorage.setItem("@Corebiz:cart", JSON.stringify(updatedCart));
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
