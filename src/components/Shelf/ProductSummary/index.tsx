import { Product } from "../../../types/products";
import { StarRating } from "../StarRating";
import Flag from "../../../assets/svgs/flag.svg";

import "./styles.scss";
import { useCartContext } from "../../../contexts/useCart";

export const ProductSummary = ({
  imageUrl,
  installments,
  listPrice,
  price,
  productName,
  stars,
  productId,
}: Product) => {
  const { addToCart } = useCartContext();

  return (
    <div className="summary-container">
      <div className="summary-container__image">
        {listPrice ? (
          <img src={Flag} alt="" className="summary-container__flag" />
        ) : (
          <></>
        )}
        <img
          src={imageUrl}
          alt={productName}
          className="summary-container__product-image"
        />
      </div>
      <div className="summary-container__infos">
        <p className="summary-container__product-name">{productName}</p>
        <StarRating rating={stars ? stars : 0} />
        {listPrice ? (
          <p className="summary-container__list-price">de {listPrice}</p>
        ) : (
          <p className="summary-container__list-price"></p>
        )}
        <p className="summary-container__price">por {price}</p>
        {installments.length > 0 ? (
          <p className="summary-container__installments">
            ou em {installments[0].quantity} x de {installments[0].value}
          </p>
        ) : (
          <p className="summary-container__installments"></p>
        )}
        <button
          className="summary-container__buy-button"
          onClick={() => {
            addToCart(productId);
          }}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};
