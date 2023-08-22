import React from "react";

export default function ProductItems({ product, onGetProduct, onAddProduct }) {
  return (
    <div className="card mb-4">
      <img
        className="card-img "
        src={product.img}
        alt={product.name}
        width="80%"
        height="300px"
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <button
          className="btn btn-success mx-2"
          onClick={() => onGetProduct(product)}
        >
          Xem Chi Tiết
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onAddProduct(product)}
        >
          Thêm Giỏ Hàng
        </button>
      </div>
    </div>
  );
}
