import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsServer";
import { ProductSummary } from "./ProductSummary";
import { Product } from "../../types/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
            <Swiper
              spaceBetween={22}
              slidesPerView={2}
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
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper: any) => console.log(swiper)}
            >
              {products.map((product) => {
                return (
                  <SwiperSlide>
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
                );
              })}
            </Swiper>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
