import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

export default function Shopping() {
  //State quản lý giá trị sản phẩm được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  //State quản lý trạng thái ẩn/ hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  //State quản lý là danh sách sản phẩm trong giỏ hàng
  const [cart, setCart] = useState([]);
  const handleGetProducts = (product) => {
    setSelectedProduct(product);
  };
  //total product k cần chạy bằng state, vì giá trị của nó dc tính toán dựa trên giá trị state cart
  const totalProduct = cart.reduce((result, item) => {
    return result + item.quantity;
  }, 0);

  const handleAddProducts = (product) => {
    //Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    const foundItem = cart.find((item) => item.id === product.id);
    if (foundItem) {
      //Sản phẩm đã tồn tại trong giỏ hàng-> tăng số lượng lên 1 đơn vị
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      //Sản phẩm chưa tồn tại trong giỏ hàng
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Shoe Shop</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Giỏ Hàng ({totalProduct})
        </button>
      </div>
      <ProductList
        products={data}
        onGetProduct={handleGetProducts}
        onAddProduct={handleAddProducts}
      />
      <ProductDetails product={selectedProduct} onCloseCart={handleCloseCart} />
      {isOpen && <Cart cart={cart} onCloseCart={handleCloseCart} />}
    </div>
  );
}
