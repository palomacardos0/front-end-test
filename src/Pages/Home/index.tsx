import { Shelf } from "../../components/Shelf";
import { useCartContext } from "../../contexts/useCart";

export const Home = () => {
  const { cart, addToCart } = useCartContext();

  console.log("cart", cart);

  return (
    <div>
      <Shelf />
    </div>
  );
};
