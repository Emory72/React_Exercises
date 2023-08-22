import React from "react";
import ProductItems from "./ProductItems";

export default function ProductList({ products, onGetProduct, onAddProduct }) {
  const handleGetProducts = (product) => {
    onGetProduct(product);
  };

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4">
            <ProductItems
              product={product}
              onGetProduct={handleGetProducts}
              onAddProduct={onAddProduct}
            />
          </div>
        );
      })}
    </div>
  );
}
