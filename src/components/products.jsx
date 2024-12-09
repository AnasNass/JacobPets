import React from "react";
import products from "../data/products.json";

const Products = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map(product => (
          <div key={product.id} className="p-4 border rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
