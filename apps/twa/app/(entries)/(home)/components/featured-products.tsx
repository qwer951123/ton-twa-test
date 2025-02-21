"use client";

import { Subtitle, ViewAll } from "./title";
import { useFeaturedProducts } from "../hooks/use-featured-products";
import { FeaturedProductItem } from "./featured-product-item";

const FeaturedProducts = () => {
  const { data: products } = useFeaturedProducts();

  return (
    <section className="py-6 px-page-padding">
      <Subtitle>
        Featured Products
        <ViewAll href="/products" />
      </Subtitle>
      <div className="mt-3 flex flex-col gap-3">
        {products?.map((product) => (
          <FeaturedProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
