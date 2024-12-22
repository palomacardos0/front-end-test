import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsServer";
import { ProductSummary } from "./ProductSummary";
import { Product } from "../../types/products";

export const Shelf = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts() {
    const resp = await getProducts();
    setProducts(resp.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  console.log("products", products);

  return (
    <section>
      <h1>Mais Vendidos</h1>
      <div>
        {products ? (
          <>
            {products.map((product) => {
              return (
                <ProductSummary
                  imageUrl={product.imageUrl}
                  installments={product.installments}
                  listPrice={product.listPrice}
                  price={product.price}
                  productId={product.productId}
                  productName={product.productName}
                  stars={product.stars}
                />
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
