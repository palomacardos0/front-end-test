import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsServer";
import { ProductSummary } from "./ProductSummary";
import { Product } from "../../types/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

import "swiper/css";
import "./styles.scss";
import "swiper/css/navigation";
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
    <section className="shelf-container">
      <div className="shelf-container__wrapper">
        <h1 className="shelf-container__title">Mais Vendidos</h1>
        <span className="shelf-container__separator"></span>
        <div>
          {products ? (
            <>
              <Swiper
                modules={[Pagination, Navigation, HashNavigation]}
                spaceBetween={22}
                slidesPerView={2}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                hashNavigation={{
                  watchState: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 22,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 44,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 99,
                  },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.productId}>
                    <ProductSummary
                      imageUrl={product.imageUrl}
                      installments={product.installments}
                      listPrice={product.listPrice}
                      price={product.price}
                      productId={product.productId}
                      productName={product.productName}
                      stars={product.stars}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};
