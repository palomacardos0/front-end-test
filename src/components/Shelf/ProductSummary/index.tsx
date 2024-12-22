import { Product } from "../../../types/products";
import { StarRating } from "../StarRating";
import Flag from "../../../assets/flag.svg";

import "./styles.scss";

export const ProductSummary = ({
  imageUrl,
  installments,
  listPrice,
  price,
  productName,
  stars,
}: Product) => {
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
          <></>
        )}
        <p className="summary-container__price">por {price}</p>
        {installments.length > 0 ? (
          <p className="summary-container__installments">
            ou em {installments[0].quantity} x de {installments[0].value}
          </p>
        ) : (
          <></>
        )}
        <button className="summary-container__buy-button">COMPRAR</button>
      </div>
    </div>
  );
};
