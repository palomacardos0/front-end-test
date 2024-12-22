import { Product } from "../../../types/products";
import { StarRating } from "../StarRating";
import Flag from "../../../assets/flag.svg";

export const ProductSummary = ({
  imageUrl,
  installments,
  listPrice,
  price,
  productName,
  stars,
}: Product) => {
  return (
    <div>
      <div>
        {listPrice ? <img src={Flag} alt="" /> : <></>}
        <img src={imageUrl} alt={productName} />
      </div>
      <div>
        <p>{productName}</p>
        <StarRating rating={stars ? stars : 0} />
        {listPrice ? <p>de {listPrice}</p> : <></>}
        <p>por {price}</p>
        {installments.length > 0 ? (
          <p>
            ou em {installments[0].quantity} x de {installments[0].value}
          </p>
        ) : (
          <></>
        )}
        <button>COMPRAR</button>
      </div>
    </div>
  );
};
