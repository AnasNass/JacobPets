import React from "react";
import products from "../data/products.json";
import PageContainer from "./layout/PageContainer";
import ProductCard from "./cards/ProductCard";

const Products = () => {
  return (
    <PageContainer title="Our Products">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Products;
