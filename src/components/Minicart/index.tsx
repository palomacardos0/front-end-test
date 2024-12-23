import { useCartContext } from "../../contexts/useCart";

import Close from "../../assets/svgs/close.svg";

import "./styles.scss";

export const Minicart = () => {
  const { cart, setOpenCart, removeProduct } = useCartContext();
  return (
    <div className="cart-container">
      <div className="cart-container__close">
        <button
          onClick={() => {
            setOpenCart(false);
          }}
        >
          <img src={Close} alt="Fechar cart" />
        </button>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="cart-container__products">
            {cart.map((item) => {
              return (
                <div key={item.productId} className="cart-container__product">
                  <img src={item.imageUrl} alt={item.productName} />
                  <div>
                    <p>{item.productName}</p>
                    <p>Qtd. {item.amount}</p>
                    <button
                      onClick={() => {
                        removeProduct(item.productId);
                      }}
                      className="cart-container__remove"
                    >
                      remover
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>Carrinho vazio!</>
      )}
    </div>
  );
};
