
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3 text-secondary">{product.name}</h3>
      <p className="text-accent mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-primary">{product.price}</p>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;